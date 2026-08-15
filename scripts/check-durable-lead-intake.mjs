import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { POST } from "../api/forge/leads/route.ts";

const endpoint = "https://forge-preview.example/api/forge/leads";
const baseJob = {
  type: "job",
  requestId: "synthetic-job-20260815",
  consent: {
    followUp: true,
    terms: true,
    capturedAt: "2026-08-15T20:00:00.000Z"
  },
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
    consentCapturedAt: "2026-08-15T20:00:00.000Z",
    createdAt: "2026-08-15T20:00:00.000Z"
  }
};

function request(body, headers = {}) {
  return new Request(endpoint, {
    method: "POST",
    headers: {
      Origin: "https://forge-preview.example",
      "Content-Type": "application/json",
      "X-Forge-Intent": "lead-capture-v1",
      "X-Forwarded-For": `198.51.100.${Math.floor(Math.random() * 200) + 1}`,
      ...headers
    },
    body: JSON.stringify(body)
  });
}

const wrongOrigin = await POST(request(baseJob, { Origin: "https://attacker.example" }));
assert.equal(wrongOrigin.status, 403, "cross-origin writes must fail closed");

const missingConsent = await POST(request({ ...baseJob, consent: { ...baseJob.consent, followUp: false } }));
assert.equal(missingConsent.status, 400, "missing consent must be rejected");

const forbidden = await POST(request({ ...baseJob, payload: { ...baseJob.payload, bankAccount: "never-accept" } }));
assert.equal(forbidden.status, 400, "sensitive financial fields must be rejected");

delete process.env.FORGE_LEAD_WEBHOOK_URL;
delete process.env.FORGE_ZAPIER_WEBHOOK_URL;
delete process.env.FORGE_SUPABASE_URL;
delete process.env.FORGE_SUPABASE_SERVICE_ROLE_KEY;
const unconfigured = await POST(request(baseJob));
assert.equal(unconfigured.status, 503, "an unconfigured durable destination must be reported honestly");

const originalFetch = globalThis.fetch;
let deliveredPayload;
process.env.FORGE_LEAD_WEBHOOK_URL = "https://durable.example/forge";
globalThis.fetch = async (_url, init) => {
  deliveredPayload = JSON.parse(String(init?.body || "{}"));
  return new Response(null, { status: 204 });
};
try {
  const stored = await POST(request(baseJob));
  assert.equal(stored.status, 201, "configured durable writes must return 201");
  const receipt = await stored.json();
  assert.equal(receipt.requestId, baseJob.requestId);
  assert.deepEqual(receipt.storedIn, ["webhook"]);
  assert.equal(deliveredPayload.schema, "forge.lead.v1");
  assert.equal(deliveredPayload.lead_type, "job");
  assert.equal(deliveredPayload.lead.follow_up_consent, true);
  assert.match(deliveredPayload.received_at, /^\d{4}-\d{2}-\d{2}T/);
} finally {
  globalThis.fetch = originalFetch;
  delete process.env.FORGE_LEAD_WEBHOOK_URL;
}

const migration = await readFile("migrations/20260815_durable_lead_capture.sql", "utf8");
assert.match(migration, /unique index if not exists forge_job_leads_request_id_unique/i);
assert.match(migration, /follow_up_consent boolean not null default false/i);

console.log("Forge durable lead intake check passed (origin, validation, consent, sensitive fields, configuration, receipt, and idempotency schema)." );
