import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
const originalConsoleError = console.error;
const deliveryLogs = [];

function request(overrides = {}, headers = {}) {
  const now = new Date().toISOString();
  const body = {
    request_id: `flex-test-${crypto.randomUUID()}`,
    created_at: now,
    consent_captured_at: now,
    owner_name: "Synthetic Owner",
    business_name: "Synthetic Workshop",
    email: "synthetic@example.com",
    phone: "541-555-0100",
    city: "Medford",
    state: "OR",
    industry: "Construction",
    primary_need: "Materials and payroll timing",
    consent_to_contact: true,
    consent_to_receive_flex_referral: true,
    ...overrides
  };
  return new Request("https://hireonforge.com/api/forge/flex-leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://hireonforge.com",
      "X-Forge-Intent": "capital-desk-v1",
      "X-Forwarded-For": crypto.randomUUID(),
      ...headers
    },
    body: JSON.stringify(body)
  });
}

async function body(response) {
  return response.json();
}

function configureApprovedDestination() {
  process.env.FLEX_PARTNER_APPROVED = "true";
  process.env.FLEX_DATA_SHARING_APPROVED = "true";
  process.env.FLEX_OFFICIAL_LANGUAGE_APPROVED = "true";
  process.env.FLEX_REFERRAL_AGREEMENT_SIGNED = "true";
  process.env.FLEX_OPERATOR_APPROVED = "true";
  process.env.FLEX_LEGAL_APPROVED = "true";
  process.env.FORGE_GHL_WEBHOOK_URL = "https://approved.example.test/forge";
  delete process.env.FORGE_ZAPIER_WEBHOOK_URL;
}

try {
  console.error = (...args) => deliveryLogs.push(args);
  const { POST } = await import("../api/forge/flex-leads/route.ts");

  let response = await POST(request({}, { Origin: "https://attacker.example" }));
  assert.equal(response.status, 403);
  assert.equal((await body(response)).error, "INVALID_REQUEST_ORIGIN");

  response = await POST(request({}, { "X-Forge-Intent": "wrong-intent" }));
  assert.equal(response.status, 403);

  delete process.env.FLEX_PARTNER_APPROVED;
  delete process.env.FLEX_DATA_SHARING_APPROVED;
  delete process.env.FLEX_OFFICIAL_LANGUAGE_APPROVED;
  delete process.env.FLEX_REFERRAL_AGREEMENT_SIGNED;
  delete process.env.FORGE_GHL_WEBHOOK_URL;
  delete process.env.FORGE_ZAPIER_WEBHOOK_URL;
  response = await POST(request());
  assert.equal(response.status, 503);
  const unavailable = await body(response);
  assert.equal(unavailable.status, "delivery-unavailable");
  assert.match(unavailable.message, /browser copy was preserved/i);

  response = await POST(request({ profile: { bankPassword: "never-accepted" } }));
  assert.equal(response.status, 400);
  assert.match((await body(response)).message, /Sensitive financial/i);

  response = await POST(request({ harmless_extra_field: "still not accepted" }));
  assert.equal(response.status, 400);
  assert.match((await body(response)).message, /unexpected Capital Desk field/i);

  response = await POST(request({ notes: "🧱".repeat(20 * 1024) }));
  assert.equal(response.status, 413);

  response = await POST(request({ created_at: "2099-99-99T99:99:99.000Z" }));
  assert.equal(response.status, 400);

  configureApprovedDestination();
  const deliveredId = `flex-test-${crypto.randomUUID()}`;
  let providerCalls = 0;
  globalThis.fetch = async (_url, init) => {
    providerCalls += 1;
    assert.equal(init.headers["Idempotency-Key"], deliveredId);
    const providerPayload = JSON.parse(init.body);
    assert.equal(providerPayload.request_id, deliveredId);
    assert.equal("bankPassword" in providerPayload, false);
    return Response.json({ ok: true, requestId: deliveredId, receivedAt: new Date().toISOString() });
  };
  response = await POST(request({ request_id: deliveredId }));
  assert.equal(response.status, 201);
  const delivered = await body(response);
  assert.equal(delivered.contractVersion, "forge.flex-receipt.v1");
  assert.equal(delivered.status, "delivered");
  assert.equal(delivered.requestId, deliveredId);
  assert.equal(providerCalls, 1);

  response = await POST(request({ request_id: deliveredId }));
  assert.equal(response.status, 200);
  assert.equal((await body(response)).duplicate, true);
  assert.equal(providerCalls, 1);

  const malformedId = `flex-test-${crypto.randomUUID()}`;
  globalThis.fetch = async () => new Response("<html>not a receipt</html>", { status: 200, headers: { "Content-Type": "text/html" } });
  response = await POST(request({ request_id: malformedId }));
  assert.equal(response.status, 502);
  const failed = await body(response);
  assert.equal(failed.status, "retryable-failure");
  assert.equal(JSON.stringify(failed).includes("Synthetic Owner"), false);
  assert.equal(JSON.stringify(deliveryLogs).includes("Synthetic Owner"), false);

  const concurrentId = `flex-test-${crypto.randomUUID()}`;
  let releaseProvider;
  const providerGate = new Promise((resolve) => { releaseProvider = resolve; });
  providerCalls = 0;
  globalThis.fetch = async () => {
    providerCalls += 1;
    await providerGate;
    return Response.json({ ok: true, requestId: concurrentId, receivedAt: new Date().toISOString() });
  };
  const first = POST(request({ request_id: concurrentId }));
  const second = POST(request({ request_id: concurrentId }));
  releaseProvider();
  const [firstResponse, secondResponse] = await Promise.all([first, second]);
  assert.equal(firstResponse.status, 201);
  assert.equal(secondResponse.status, 200);
  assert.equal(providerCalls, 1);
  assert.equal((await body(secondResponse)).duplicate, true);

  const wrapperSource = await readFile(new URL("../api/forge/flex-leads.ts", import.meta.url), "utf8");
  assert.match(wrapperSource, /from\s+["']\.\/flex-leads\/route\.js["']/);
  assert.match(wrapperSource, /Content-Type["'],\s*["']application\/json; charset=utf-8/);
  assert.match(wrapperSource, /Cache-Control["'],\s*["']private, no-store, max-age=0/);
  assert.match(wrapperSource, /status\(405\)\.send\(JSON\.stringify/);

  console.log("Forge Capital Desk contract checks passed: strict whitelist/size/origin, nested secrets, fail-closed receipts, concurrent idempotency, and deployable JSON wrapper.");
} finally {
  globalThis.fetch = originalFetch;
  console.error = originalConsoleError;
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) delete process.env[key];
  }
  Object.assign(process.env, originalEnv);
}
