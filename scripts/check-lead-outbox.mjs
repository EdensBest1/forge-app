import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

await import("../lead-outbox.js");
await import("../backup-recovery.js");

const Outbox = globalThis.ForgeLeadOutbox;
const Backup = globalThis.ForgeBackupRecovery;
const createdAt = "2026-08-15T20:00:00.000Z";
const attemptAt = "2026-08-15T20:01:00.000Z";
const retryAt = "2026-08-15T20:01:05.000Z";
const requestId = "job-synthetic-stable-id";

function job(overrides = {}) {
  return {
    id: "synthetic-job",
    title: "Synthetic fence repair",
    category: "Fencing",
    location: "Los Angeles, CA",
    urgency: "This week",
    budget: "$1,000–$2,500",
    description: "Synthetic outbox verification only.",
    customer: "Synthetic Customer",
    phone: "(555) 010-0200",
    email: "synthetic.job@example.com",
    followUpConsent: true,
    termsAccepted: true,
    consentCapturedAt: createdAt,
    createdAt,
    ...overrides
  };
}

function worker(overrides = {}) {
  return {
    id: "synthetic-worker",
    name: "Synthetic Worker",
    trade: "Carpentry",
    phone: "(555) 010-0300",
    email: "synthetic.worker@example.com",
    experience: "5 years",
    serviceArea: "Los Angeles, CA",
    businessGrowthTools: [],
    followUpConsent: true,
    termsAccepted: true,
    consentCapturedAt: createdAt,
    createdAt,
    ...overrides
  };
}

const queued = Outbox.enqueue([], "job", job(), { requestId, now: createdAt });
assert.equal(queued.duplicate, false);
assert.equal(queued.record.requestId, requestId);
assert.equal(queued.record.deliveryState, Outbox.STATES.LOCAL);
assert.equal(queued.record.attemptCount, 0);
assert.equal(queued.records.length, 1);
assert.doesNotThrow(() => Outbox.createRecord("job", job({ serviceDetails: { accessNotes: "Synthetic gate access notes." } }), { requestId: "safe-access-notes", now: createdAt }));

const duplicate = Outbox.enqueue(queued.records, "job", job(), { requestId, now: createdAt });
assert.equal(duplicate.duplicate, true, "same request ID must not create another outbox record");
assert.equal(duplicate.records.length, 1);
assert.equal(duplicate.record.requestId, requestId);

const reloaded = Outbox.normalizeCollection(JSON.parse(JSON.stringify(queued.records)), { now: createdAt });
assert.equal(reloaded.records.length, 1);
assert.equal(reloaded.records[0].requestId, requestId, "reload must retain the stable request ID");
assert.equal(reloaded.issues.length, 0);

const legacyRecord = structuredClone(queued.record);
delete legacyRecord.schema;
assert.equal(Outbox.normalizeRecord(legacyRecord).schema, Outbox.SCHEMA, "legacy v1 records without a schema marker must migrate safely");

const futureRecord = { ...structuredClone(queued.record), schema: "forge.lead-outbox.v999", requestId: "future-record" };
const malformedCollection = Outbox.normalizeCollection([queued.record, queued.record, futureRecord, null], { now: createdAt });
assert.equal(malformedCollection.records.length, 1);
assert.deepEqual(malformedCollection.issues.map((issue) => issue.code), ["DUPLICATE_REQUEST_ID", "FUTURE_SCHEMA", "MALFORMED_RECORD"]);

assert.throws(
  () => Outbox.createRecord("job", job({ accessToken: "synthetic-never-store" }), { requestId: "secret-field", now: createdAt }),
  (error) => error.code === "SENSITIVE_FIELD"
);
assert.throws(
  () => Outbox.createRecord("job", job({ ssn: "000-00-0000" }), { requestId: "identity-field", now: createdAt }),
  (error) => error.code === "SENSITIVE_FIELD"
);
assert.throws(
  () => Outbox.createRecord("job", job(), { requestId: "invalid request id", now: createdAt }),
  (error) => error.code === "INVALID_REQUEST_ID"
);
assert.throws(
  () => Outbox.createRecord("job", job(), { requestId: "bad-time", now: "2026-02-31T00:00:00.000Z" }),
  (error) => error.code === "INVALID_TIMESTAMP"
);

const invalidConsent = Outbox.createRecord("worker", worker({ termsAccepted: false }), { requestId: "worker-invalid-consent", now: createdAt });
assert.equal(invalidConsent.deliveryState, Outbox.STATES.REJECTED);
assert.match(invalidConsent.lastFailure.message, /consent/i);

const sending = Outbox.markSending(queued.record, attemptAt);
assert.equal(sending.requestId, requestId);
assert.equal(sending.deliveryState, Outbox.STATES.SENDING);
assert.equal(sending.attemptCount, 1);
const interruptedReload = Outbox.normalizeRecord(sending);
assert.equal(interruptedReload.deliveryState, Outbox.STATES.RETRYABLE, "an interrupted sending state must become retryable after reload");

const receipt = {
  contractVersion: Outbox.RECEIPT_SCHEMA,
  ok: true,
  status: "delivered",
  requestId,
  receivedAt: attemptAt,
  storedIn: ["synthetic-test-store"]
};
const delivered = Outbox.applyHttpResult(sending, 201, receipt, { now: attemptAt });
assert.equal(delivered.deliveryState, Outbox.STATES.DELIVERED);
assert.equal(delivered.serverReceipt.requestId, requestId);
assert.deepEqual(delivered.serverReceipt.storedIn, ["synthetic-test-store"]);
assert.equal(Outbox.canRetry(delivered, retryAt), false);

for (const invalidReceipt of [
  { ...receipt, contractVersion: "forge.lead-receipt.v999" },
  { ...receipt, status: "queued" },
  { ...receipt, requestId: "different-request" },
  { ...receipt, receivedAt: "today" },
  { ...receipt, storedIn: [] }
]) {
  const result = Outbox.applyHttpResult(sending, 201, invalidReceipt, { now: attemptAt });
  assert.equal(result.deliveryState, Outbox.STATES.RETRYABLE);
  assert.equal(result.lastFailure.category, "invalid-receipt");
}

const unavailableBody = {
  contractVersion: Outbox.RECEIPT_SCHEMA,
  error: "DURABLE_LEAD_STORE_NOT_CONFIGURED",
  status: "delivery-unavailable",
  requestId
};
const unavailable = Outbox.applyHttpResult(sending, 503, unavailableBody, { now: attemptAt });
assert.equal(unavailable.deliveryState, Outbox.STATES.UNAVAILABLE);
assert.equal(unavailable.nextRetryAt, retryAt);
const spoofedUnavailable = Outbox.applyHttpResult(sending, 503, { ...unavailableBody, requestId: "wrong" }, { now: attemptAt });
assert.equal(spoofedUnavailable.deliveryState, Outbox.STATES.RETRYABLE);

const rejected = Outbox.applyHttpResult(sending, 400, { error: "INVALID_LEAD" }, { now: attemptAt });
assert.equal(rejected.deliveryState, Outbox.STATES.REJECTED);
assert.equal(Outbox.canRetry(rejected, retryAt), false);
const forbidden = Outbox.applyHttpResult(sending, 403, { error: "INVALID_REQUEST_ORIGIN" }, { now: attemptAt });
assert.equal(forbidden.deliveryState, Outbox.STATES.REJECTED);
const rateLimited = Outbox.applyHttpResult(sending, 429, { error: "RATE_LIMITED" }, { now: attemptAt, retryAfterSeconds: "900" });
assert.equal(rateLimited.deliveryState, Outbox.STATES.RETRYABLE);
assert.equal(rateLimited.nextRetryAt, "2026-08-15T20:16:00.000Z");
const serverFailure = Outbox.applyHttpResult(sending, 502, { error: "DURABLE_LEAD_WRITE_FAILED" }, { now: attemptAt });
assert.equal(serverFailure.deliveryState, Outbox.STATES.RETRYABLE);
const networkFailure = Outbox.applyNetworkFailure(sending, { now: attemptAt });
assert.equal(networkFailure.deliveryState, Outbox.STATES.RETRYABLE);
assert.equal(networkFailure.lastFailure.category, "network");

let exhausted = queued.record;
for (let attempt = 0; attempt < Outbox.MAX_ATTEMPTS; attempt += 1) {
  const timestamp = new Date(new Date(attemptAt).getTime() + attempt * 60_000).toISOString();
  exhausted = Outbox.markSending({ ...exhausted, nextRetryAt: null }, timestamp);
  exhausted = Outbox.applyNetworkFailure(exhausted, { now: timestamp });
}
assert.equal(exhausted.attemptCount, Outbox.MAX_ATTEMPTS);
assert.equal(Outbox.canRetry(exhausted, "2026-08-16T20:00:00.000Z"), false);

const full = Array.from({ length: Outbox.MAX_RECORDS }, (_, index) => Outbox.createRecord(
  "job",
  job({ id: `synthetic-job-${index}`, createdAt }),
  { requestId: `capacity-${index}`, now: createdAt }
));
assert.throws(
  () => Outbox.enqueue(full, "job", job({ id: "capacity-overflow" }), { requestId: "capacity-overflow", now: createdAt }),
  (error) => error.code === "OUTBOX_CAPACITY"
);
const loadedOverflow = Outbox.normalizeCollection([...full, { ...full[0], requestId: "loaded-overflow" }], { now: createdAt });
assert.equal(loadedOverflow.records.length, Outbox.MAX_RECORDS, "reload must retain valid records up to the cap");
assert.equal(loadedOverflow.issues.at(-1).code, "OUTBOX_CAPACITY", "reload must isolate only overflow records");

const largeWorkers = Array.from({ length: Outbox.MAX_RECORDS }, (_, index) => Outbox.createRecord(
  "worker",
  worker({
    id: `large-worker-${index}`,
    email: `large.worker.${index}@example.com`,
    businessGrowthTools: Array.from({ length: 20 }, (__, toolIndex) => `${toolIndex}-${"x".repeat(155)}`)
  }),
  { requestId: `large-worker-${index}`, now: createdAt }
));
assert.throws(() => Outbox.prune(largeWorkers, createdAt), (error) => error.code === "OUTBOX_CAPACITY");

const oldDelivered = { ...delivered, createdAt: "2026-06-01T00:00:00.000Z", serverReceipt: { ...delivered.serverReceipt, receivedAt: "2026-06-01T00:01:00.000Z" } };
assert.equal(Outbox.prune([oldDelivered], createdAt).length, 0, "old delivered receipts must be pruned after retention expires");
assert.equal(Outbox.prune([delivered], attemptAt).length, 1);

const backupState = {
  settings: {}, session: {}, accounts: [], jobs: [job()], workers: [worker()], bids: [], messages: [], referrals: [], activity: [],
  leadOutbox: [unavailable]
};
const envelope = Backup.createEnvelope(backupState, { exportedAt: attemptAt, appVersion: "133" });
const recovered = Backup.recover(envelope);
assert.equal(recovered.state.leadOutbox[0].requestId, requestId);
assert.equal(recovered.counts.leadOutbox, 1);

const legacyState = structuredClone(backupState);
delete legacyState.leadOutbox;
const legacyEnvelope = {
  schema: Backup.SCHEMA,
  exportedAt: attemptAt,
  appVersion: "129",
  checksum: Backup.checksum(JSON.stringify(legacyState)),
  counts: Backup.summarize(legacyState),
  state: legacyState
};
delete legacyEnvelope.counts.leadOutbox;
legacyEnvelope.counts.allRecords = ["jobs", "workers", "bids", "messages", "referrals", "activity", "accounts"]
  .reduce((total, key) => total + legacyState[key].length, 0);
assert.equal(Backup.recover(legacyEnvelope).counts.leadOutbox, 0, "existing v1 backups without an outbox must remain recoverable");

const [app, html, styles, releaseManifest, serviceWorker] = await Promise.all([
  readFile("app.js", "utf8"),
  readFile("index.html", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("release-manifest.json", "utf8"),
  readFile("service-worker.js", "utf8")
]);
assert.match(app, /state\.leadOutbox = queued\.records;/);
assert.match(app, /payload\.outboxRequestId = queued\.record\.requestId;/);
assert.match(app, /body: JSON\.stringify\(ForgeLeadOutbox\.requestBody\(sending\)\)/);
assert.match(app, /requestRemoveOutboxRecord/);
assert.match(app, /confirmRemoveOutboxRecord/);
assert.match(app, /outboxRemovalReturnFocus/);
assert.match(app, /event\.key !== "Escape"/);
assert.match(app, /Export undelivered|exportUndeliveredOutbox/);
assert.match(html, /lead-outbox\.js\?v=133/);
assert.match(html, /id="outboxTitle" tabindex="-1"/);
assert.match(html, /id="outboxRemoveTitle" tabindex="-1"/);
assert.match(html, /data-action="confirm-remove-outbox"/);
assert.match(html, /Clearing browser data can remove locally preserved leads/);
assert.match(releaseManifest, /"lead-outbox\.js"/);
assert.match(serviceWorker, /\/lead-outbox\.js/);
assert.match(styles, /prefers-reduced-motion: reduce/);
assert.match(styles, /\.back-link\s*\{[^}]*min-height:\s*44px/s);

console.log("Forge lead outbox check passed: enqueue-before-send, stable IDs, reload/migration, isolation/caps, strict receipts, 503/rejection/retry/network paths, retention, export UI, and backup compatibility.");
