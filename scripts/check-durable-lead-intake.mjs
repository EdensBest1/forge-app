import assert from "node:assert/strict";
import { createServer } from "node:http";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { createLeadHandler, createMemoryRateLimiter } from "../api/forge/leads/route.ts";
import { createConfiguredLeadStore } from "../lib/forge-lead-storage.mjs";
import { FilesystemLeadStore } from "./support/filesystem-lead-store.mjs";

await import("../backup-recovery.js");
const BackupRecovery = globalThis.ForgeBackupRecovery;
const endpoint = "https://forge-preview.example/api/forge/leads";
const fixedDate = new Date("2026-08-15T20:30:00.000Z");
const syntheticConsent = {
  followUp: true,
  terms: true,
  capturedAt: "2026-08-15T20:00:00.000Z"
};
const baseJob = {
  type: "job",
  requestId: "synthetic-job-20260815",
  consent: syntheticConsent,
  payload: {
    id: "synthetic-job",
    title: "Synthetic fence repair",
    category: "Fencing",
    location: "Los Angeles, CA",
    customer: "Synthetic Customer",
    phone: "(555) 010-0200",
    email: "synthetic@example.com",
    description: "Synthetic verification record only.",
    followUpConsent: true,
    termsAccepted: true,
    consentCapturedAt: syntheticConsent.capturedAt,
    createdAt: syntheticConsent.capturedAt
  }
};
const baseWorker = {
  type: "worker",
  requestId: "synthetic-worker-20260815",
  consent: syntheticConsent,
  payload: {
    id: "synthetic-worker",
    name: "Synthetic Worker",
    trade: "Carpentry",
    phone: "(555) 010-0300",
    email: "worker.synthetic@example.com",
    serviceArea: "Los Angeles, CA",
    createdAt: syntheticConsent.capturedAt
  }
};

function request(body, headers = {}) {
  return new Request(endpoint, {
    method: "POST",
    headers: {
      Origin: "https://forge-preview.example",
      "Content-Type": "application/json",
      "X-Forge-Intent": "lead-capture-v1",
      "X-Forwarded-For": "198.51.100.25",
      ...headers
    },
    body: JSON.stringify(body)
  });
}

const workDir = await mkdtemp(join(tmpdir(), "forge-lead-test-"));
try {
  const fileStore = new FilesystemLeadStore(join(workDir, "leads.ndjson"));
  const fileHandler = createLeadHandler({
    store: fileStore,
    rateLimiter: () => true,
    now: () => fixedDate,
    receipts: new Map()
  });

  const storedJob = await fileHandler(request(baseJob));
  assert.equal(storedJob.status, 201, "post-job must save through the local filesystem adapter");
  const jobReceipt = await storedJob.json();
  assert.equal(jobReceipt.receivedAt, fixedDate.toISOString());
  assert.deepEqual(jobReceipt.storedIn, ["filesystem-test"]);

  const storedWorker = await fileHandler(request(baseWorker));
  assert.equal(storedWorker.status, 201, "worker signup must save through the local filesystem adapter");
  const fileRecords = await fileStore.records();
  assert.equal(fileRecords.length, 2);
  assert.equal(fileRecords[0].record.table, "forge_job_leads");
  assert.equal(fileRecords[1].record.table, "forge_worker_leads");
  assert.equal(fileRecords[0].record.value.consent_captured_at, syntheticConsent.capturedAt);
  assert.equal(fileRecords[0].record.value.created_at, fixedDate.toISOString());

  const duplicate = await fileHandler(request(baseJob));
  assert.equal(duplicate.status, 200, "a repeated request ID must return the existing receipt");
  assert.equal((await duplicate.json()).duplicate, true);
  assert.equal((await fileStore.records()).length, 2, "idempotent retry must not append another record");

  assert.equal((await fileHandler(request(baseJob, { Origin: "https://attacker.example" }))).status, 403);
  assert.equal((await fileHandler(request({ ...baseJob, requestId: "missing-consent", consent: { ...syntheticConsent, followUp: false } }))).status, 400);
  assert.equal((await fileHandler(request({ ...baseJob, requestId: "bad-timestamp", consent: { ...syntheticConsent, capturedAt: "today" } }))).status, 400);
  assert.equal((await fileHandler(request({ ...baseJob, requestId: "forbidden", payload: { ...baseJob.payload, bankAccount: "never-accept" } }))).status, 400);
  assert.equal((await fileHandler(request({ ...baseJob, requestId: "oversized", payload: { ...baseJob.payload, description: "x".repeat(40 * 1024) } }))).status, 413);

  const unconfiguredHandler = createLeadHandler({ store: null, rateLimiter: () => true, receipts: new Map() });
  assert.equal((await unconfiguredHandler(request({ ...baseJob, requestId: "unconfigured" }))).status, 503);

  const failingHandler = createLeadHandler({
    store: { async save() { throw new Error("synthetic provider outage"); } },
    rateLimiter: () => true,
    receipts: new Map()
  });
  const originalError = console.error;
  console.error = () => {};
  try {
    assert.equal((await failingHandler(request({ ...baseJob, requestId: "provider-failure" }))).status, 502);
  } finally {
    console.error = originalError;
  }

  const limitedHandler = createLeadHandler({
    store: fileStore,
    rateLimiter: createMemoryRateLimiter({ limit: 2, windowMs: 60_000, now: () => fixedDate.getTime() }),
    receipts: new Map()
  });
  assert.equal((await limitedHandler(request({ ...baseJob, requestId: "rate-1" }))).status, 201);
  assert.equal((await limitedHandler(request({ ...baseJob, requestId: "rate-2" }))).status, 201);
  const limited = await limitedHandler(request({ ...baseJob, requestId: "rate-3" }));
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("Retry-After"), "900");

  const webhookRequests = [];
  const webhookServer = createServer((incoming, response) => {
    let body = "";
    incoming.setEncoding("utf8");
    incoming.on("data", (chunk) => { body += chunk; });
    incoming.on("end", () => {
      webhookRequests.push({ body: JSON.parse(body), idempotencyKey: incoming.headers["idempotency-key"] });
      response.writeHead(204).end();
    });
  });
  await new Promise((resolve) => webhookServer.listen(0, "127.0.0.1", resolve));
  try {
    const address = webhookServer.address();
    const webhookStore = createConfiguredLeadStore({ env: { FORGE_LEAD_WEBHOOK_URL: `http://127.0.0.1:${address.port}/lead` } });
    const webhookHandler = createLeadHandler({ store: webhookStore, rateLimiter: () => true, receipts: new Map(), now: () => fixedDate });
    assert.equal((await webhookHandler(request({ ...baseJob, requestId: "mock-webhook" }))).status, 201);
    assert.equal(webhookRequests.length, 1);
    assert.equal(webhookRequests[0].idempotencyKey, "mock-webhook");
    assert.equal(webhookRequests[0].body.schema, "forge.lead.v1");
  } finally {
    await new Promise((resolve, reject) => webhookServer.close((error) => error ? reject(error) : resolve()));
  }

  const syntheticBrowserState = {
    settings: { webhookUrl: "", webhookEnabled: false },
    session: { role: "guest", name: "", label: "Visitor" },
    accounts: [],
    jobs: [baseJob.payload],
    workers: [baseWorker.payload],
    bids: [{ id: "synthetic-bid", jobId: "synthetic-job", amount: 1250, createdAt: fixedDate.toISOString() }],
    messages: [{ id: "synthetic-message", threadId: "synthetic-job", body: "Synthetic scheduling message.", sentAt: fixedDate.toISOString() }],
    referrals: [],
    activity: []
  };
  const backupEnvelope = BackupRecovery.createEnvelope(syntheticBrowserState, { exportedAt: fixedDate.toISOString(), appVersion: "128" });
  const backupPath = join(workDir, "forge-backup.json");
  await writeFile(backupPath, JSON.stringify(backupEnvelope, null, 2), { mode: 0o600 });
  const recovered = BackupRecovery.parse(await readFile(backupPath, "utf8"));
  assert.deepEqual(recovered.state.jobs, syntheticBrowserState.jobs);
  assert.deepEqual(recovered.state.workers, syntheticBrowserState.workers);
  assert.deepEqual(recovered.state.bids, syntheticBrowserState.bids);
  assert.deepEqual(recovered.state.messages, syntheticBrowserState.messages);
  const tampered = structuredClone(backupEnvelope);
  tampered.state.messages[0].body = "Tampered";
  assert.throws(() => BackupRecovery.recover(tampered), /integrity/i);

  const migration = await readFile("migrations/20260815_durable_lead_capture.sql", "utf8");
  const vercelAdapter = await readFile("api/forge/leads.ts", "utf8");
  const app = await readFile("app.js", "utf8");
  const html = await readFile("index.html", "utf8");
  assert.match(migration, /unique index if not exists forge_job_leads_request_id_unique/i);
  assert.match(migration, /follow_up_consent boolean not null default false/i);
  assert.match(vercelAdapter, /postLead\(new Request/);
  assert.match(app, /Lead saved in this browser\. Server delivery is not configured yet\./);
  assert.match(app, /Replace this device's Forge data/);
  assert.match(html, /backup-recovery\.js\?v=128/);
} finally {
  await rm(workDir, { recursive: true, force: true });
}

console.log("Forge durable intake + recovery check passed: post-job, worker signup, bids, messages, consent, timestamps, idempotency, rate limiting, sensitive-field rejection, export, backup, recovery, mocked webhook, and provider failure.");
