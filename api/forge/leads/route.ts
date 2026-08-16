import { createConfiguredLeadStore } from "../../../lib/forge-lead-storage.mjs";

type LeadStore = {
  save(write: {
    requestId: string;
    record: { table: string; value: Record<string, unknown> };
    webhookPayload: Record<string, unknown>;
  }): Promise<string[]>;
};

type LeadKind = "job" | "worker";
type LeadEnvelope = {
  type?: LeadKind;
  payload?: Record<string, unknown>;
  requestId?: string;
  consent?: {
    followUp?: boolean;
    terms?: boolean;
    capturedAt?: string;
  };
};

const MAX_BODY_BYTES = 32 * 1024;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 10;
const requestWindows = new Map<string, number[]>();
const completedRequests = new Map<string, { receivedAt: string; storedIn: string[] }>();
const forbiddenFieldPattern = /(ssn|social.security|bank|routing|account.number|credit.card|card.number|cvv|password|secret|access.?token|api.?key|authorization|identity.document|passport|driver.?license|tax.id)/i;

function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders
    }
  });
}

function clientKey(request: Request) {
  return request.headers.get("x-vercel-forwarded-for")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown";
}

export function createMemoryRateLimiter(options: { limit?: number; windowMs?: number; now?: () => number } = {}) {
  const windows = options.limit === undefined && options.windowMs === undefined && options.now === undefined
    ? requestWindows
    : new Map<string, number[]>();
  const limit = options.limit || RATE_LIMIT;
  const windowMs = options.windowMs || RATE_WINDOW_MS;
  const now = options.now || Date.now;
  return (request: Request) => {
  const key = clientKey(request);
    const current = now();
    const recent = (windows.get(key) || []).filter((timestamp) => current - timestamp < windowMs);
    if (recent.length >= limit) return false;
    recent.push(current);
    windows.set(key, recent);
    return true;
  };
}

const rateLimit = createMemoryRateLimiter();

function text(value: unknown, max = 500) {
  return String(value || "").trim().slice(0, max);
}

function validEmail(value: unknown) {
  const email = text(value, 320);
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validIsoTimestamp(value: unknown) {
  const timestamp = text(value, 64);
  const date = new Date(timestamp);
  return /^\d{4}-\d{2}-\d{2}T.*Z$/.test(timestamp)
    && Number.isFinite(date.getTime())
    && date.toISOString() === timestamp;
}

function containsForbiddenField(value: unknown, path = ""): string | null {
  if (!value || typeof value !== "object") return null;
  for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
    const nextPath = path ? `${path}.${key}` : key;
    if (forbiddenFieldPattern.test(key)) return nextPath;
    const child = containsForbiddenField(nested, nextPath);
    if (child) return child;
  }
  return null;
}

function validateRequestOrigin(request: Request) {
  if (request.headers.get("x-forge-intent") !== "lead-capture-v1") return false;
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

function validateEnvelope(input: LeadEnvelope) {
  if (!input || !["job", "worker"].includes(String(input.type))) return "Unsupported lead type.";
  if (!input.payload || typeof input.payload !== "object" || Array.isArray(input.payload)) return "Lead payload is required.";
  if (text(input.payload.companyWebsite)) return "Submission blocked.";
  if (containsForbiddenField(input.payload)) return "Sensitive financial, identity, or secret fields are not accepted.";
  if (input.consent?.followUp !== true || input.consent?.terms !== true) return "Follow-up consent and Early Access Terms acceptance are required.";
  if (!validIsoTimestamp(input.consent.capturedAt)) return "A valid consent timestamp is required.";
  if (input.requestId !== undefined && !/^[A-Za-z0-9._:-]{1,160}$/.test(String(input.requestId))) return "Request ID format is invalid.";
  if (!validEmail(input.payload.email)) return "A valid email is required when email is provided.";

  if (input.type === "job") {
    if (!text(input.payload.title, 160) || !text(input.payload.location, 160) || !text(input.payload.customer, 160)) {
      return "Job title, location, and customer name are required.";
    }
    if (!text(input.payload.phone, 80) && !text(input.payload.email, 320)) return "A phone number or email is required.";
  }

  if (input.type === "worker") {
    if (!text(input.payload.name, 160) || !text(input.payload.trade, 160)) return "Worker name and trade are required.";
    if (!text(input.payload.phone, 80) && !text(input.payload.email, 320)) return "A phone number or email is required.";
  }
  return "";
}

function databaseRecord(input: Required<Pick<LeadEnvelope, "type" | "payload" | "requestId">> & LeadEnvelope, receivedAt: string) {
  const payload = input.payload;
  if (input.type === "job") {
    return {
      table: "forge_job_leads",
      value: {
        request_id: input.requestId,
        source_id: text(payload.id, 160),
        title: text(payload.title, 160),
        category: text(payload.category, 160),
        location: text(payload.location, 160),
        urgency: text(payload.urgency, 120),
        budget: text(payload.budget, 120),
        description: text(payload.description, 1600),
        customer_name: text(payload.customer, 160),
        phone: text(payload.phone, 80),
        email: text(payload.email, 320),
        status: "New",
        follow_up_consent: true,
        terms_accepted: true,
        consent_captured_at: input.consent?.capturedAt,
        source_created_at: text(payload.createdAt, 64) || receivedAt,
        created_at: receivedAt,
        updated_at: receivedAt
      }
    };
  }
  return {
    table: "forge_worker_leads",
    value: {
      request_id: input.requestId,
      source_email: text(payload.email, 320),
      name: text(payload.name, 160),
      trade: text(payload.trade, 160),
      phone: text(payload.phone, 80),
      email: text(payload.email, 320),
      experience: text(payload.experience, 160),
      service_area: text(payload.serviceArea || payload.area, 160),
      business_size: text(payload.businessSize, 160),
      north_star_marketing_need: text(payload.northStarMarketingNeed, 500),
      business_growth_tools: Array.isArray(payload.businessGrowthTools) ? payload.businessGrowthTools.map((item) => text(item, 160)).slice(0, 20) : [],
      status: "New",
      follow_up_consent: true,
      terms_accepted: true,
      consent_captured_at: input.consent?.capturedAt,
      source_created_at: text(payload.createdAt, 64) || receivedAt,
      created_at: receivedAt,
      updated_at: receivedAt
    }
  };
}

type HandlerOptions = {
  store?: LeadStore | null;
  resolveStore?: () => LeadStore | null;
  rateLimiter?: (request: Request) => boolean;
  now?: () => Date;
  receipts?: Map<string, { receivedAt: string; storedIn: string[] }>;
  inFlight?: Map<string, Promise<{ receivedAt: string; storedIn: string[] }>>;
};

export function createLeadHandler(options: HandlerOptions = {}) {
  const limiter = options.rateLimiter || rateLimit;
  const now = options.now || (() => new Date());
  const receipts = options.receipts || completedRequests;
  const inFlight = options.inFlight || new Map<string, Promise<{ receivedAt: string; storedIn: string[] }>>();
  const resolveStore = options.resolveStore || (() => options.store === undefined ? createConfiguredLeadStore() : options.store);

  return async function handleLead(request: Request) {
  if (!validateRequestOrigin(request)) return json({ error: "INVALID_REQUEST_ORIGIN" }, 403);
  if (request.headers.get("content-type")?.split(";")[0] !== "application/json") return json({ error: "JSON_REQUIRED" }, 415);
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY_BYTES) return json({ error: "PAYLOAD_TOO_LARGE" }, 413);
  if (!limiter(request)) return json({ error: "RATE_LIMITED" }, 429, { "Retry-After": String(Math.ceil(RATE_WINDOW_MS / 1000)) });

  let input: LeadEnvelope;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) return json({ error: "PAYLOAD_TOO_LARGE" }, 413);
    input = JSON.parse(rawBody) as LeadEnvelope;
  } catch {
    return json({ error: "INVALID_JSON" }, 400);
  }
  const validationError = validateEnvelope(input);
  if (validationError) return json({ error: "INVALID_LEAD", message: validationError }, 400);

  const receivedAt = now().toISOString();
  const requestId = text(input.requestId, 160) || crypto.randomUUID();
  const previous = receipts.get(requestId);
  if (previous) {
    return json({ ok: true, duplicate: true, requestId, receivedAt: previous.receivedAt, storedIn: previous.storedIn }, 200);
  }
  const normalized = { ...input, type: input.type as LeadKind, payload: input.payload as Record<string, unknown>, requestId };
  const record = databaseRecord(normalized, receivedAt);
  const durablePayload = {
    schema: "forge.lead.v1",
    request_id: requestId,
    lead_type: normalized.type,
    received_at: receivedAt,
    consent: normalized.consent,
    lead: record.value
  };

  const store = resolveStore();
  if (!store) {
    return json({
      error: "DURABLE_LEAD_STORE_NOT_CONFIGURED",
      message: "The local browser copy was preserved, but Forge has no approved durable lead destination."
    }, 503);
  }

  const existingWrite = inFlight.get(requestId);
  const write = existingWrite || Promise.resolve().then(() => store.save({ requestId, record, webhookPayload: durablePayload })).then((stores) => {
    const receipt = { receivedAt, storedIn: stores };
    receipts.set(requestId, receipt);
    if (receipts.size > 1000) receipts.delete(receipts.keys().next().value as string);
    return receipt;
  });
  if (!existingWrite) inFlight.set(requestId, write);

  try {
    const receipt = await write;
    return json({
      ok: true,
      ...(existingWrite ? { duplicate: true } : {}),
      requestId,
      receivedAt: receipt.receivedAt,
      storedIn: receipt.storedIn
    }, existingWrite ? 200 : 201);
  } catch (error) {
    if (!existingWrite) {
      console.error("Forge durable lead write failed", { requestId, type: normalized.type, error: error instanceof Error ? error.message : "unknown" });
    }
    return json({ error: "DURABLE_LEAD_WRITE_FAILED", requestId }, 502);
  } finally {
    if (!existingWrite && inFlight.get(requestId) === write) inFlight.delete(requestId);
  }
  };
}

export const POST = createLeadHandler();
