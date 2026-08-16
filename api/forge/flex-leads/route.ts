declare const process: {
  env: Record<string, string | undefined>;
};

type FlexLeadInput = {
  request_id?: string;
  created_at?: string;
  consent_captured_at?: string;
  owner_name?: string;
  business_name?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  industry?: string;
  website?: string;
  years_in_business?: string;
  monthly_revenue_range?: string;
  monthly_spend_range?: string;
  employee_count?: string;
  primary_need?: string;
  interested_in_forge_job_leads?: boolean;
  interested_in_north_star_marketing?: boolean;
  interested_in_payment_processing?: boolean;
  interested_in_website_crm_automation?: boolean;
  consent_to_contact?: boolean;
  consent_to_receive_flex_referral?: boolean;
  referral_source?: string;
  notes?: string;
};

type ProviderReceipt = {
  ok?: boolean;
  requestId?: string;
  receivedAt?: string;
};

const RECEIPT_CONTRACT = "forge.flex-receipt.v1";
const MAX_BODY_BYTES = 32 * 1024;
const PROVIDER_TIMEOUT_MS = 8_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const requestIdPattern = /^[A-Za-z0-9._:-]{1,160}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const forbiddenFieldPattern = /\b(ssn|social security|bank login|bank password|account number|routing number|credit score|financial document|authorization|access token|api key|password|secret|government id|card number|upload)\b/i;
const primaryNeedKeywords = ["credit", "cash-flow", "cash flow", "vendor payments", "ap", "payroll timing", "employee cards", "fuel", "equipment", "materials", "growth capital"];
const receipts = new Map<string, { receivedAt: string; storedIn: string[] }>();
const inFlight = new Map<string, Promise<{ receivedAt: string; storedIn: string[] }>>();
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown, max = 500) {
  return String(value ?? "").trim().slice(0, max);
}

function validIsoTimestamp(value: unknown) {
  const timestamp = text(value, 64);
  const parsed = new Date(timestamp);
  return /^\d{4}-\d{2}-\d{2}T.*Z$/.test(timestamp)
    && Number.isFinite(parsed.getTime())
    && parsed.toISOString() === timestamp;
}

function containsForbiddenField(value: unknown, path = ""): string | null {
  if (!value || typeof value !== "object") return null;
  for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
    const nextPath = path ? `${path}.${key}` : key;
    const words = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[^A-Za-z0-9]+/g, " ").trim().toLowerCase();
    if (forbiddenFieldPattern.test(words)) return nextPath;
    const child = containsForbiddenField(nested, nextPath);
    if (child) return child;
  }
  return null;
}

function response(body: Record<string, unknown>, status: number, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify({ contractVersion: RECEIPT_CONTRACT, ...body }), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, no-store, max-age=0",
      ...headers
    }
  });
}

function contractError(error: string, status: number, deliveryStatus: string, options: { requestId?: string; message?: string; correlationId: string; retryAfter?: string }) {
  return response({
    ok: false,
    status: deliveryStatus,
    error,
    ...(options.requestId ? { requestId: options.requestId } : {}),
    ...(options.message ? { message: options.message } : {})
  }, status, {
    "X-Forge-Correlation-Id": options.correlationId,
    ...(options.requestId ? { "X-Forge-Request-Id": options.requestId } : {}),
    ...(options.retryAfter ? { "Retry-After": options.retryAfter } : {})
  });
}

function validateOrigin(request: Request) {
  if (request.headers.get("x-forge-intent") !== "capital-desk-v1") return false;
  const origin = request.headers.get("origin");
  return Boolean(origin && origin === new URL(request.url).origin);
}

function validateLead(input: FlexLeadInput) {
  if (!requestIdPattern.test(text(input.request_id, 160))) return "Request ID format is invalid.";
  if (!validIsoTimestamp(input.created_at) || !validIsoTimestamp(input.consent_captured_at)) return "Canonical creation and consent timestamps are required.";
  if (!text(input.owner_name, 160) || !text(input.business_name, 160) || !text(input.industry, 160)) return "Owner, business, and industry are required.";
  if (!emailPattern.test(text(input.email, 320))) return "A valid email is required.";
  if (input.consent_to_contact !== true || input.consent_to_receive_flex_referral !== true) return "Contact and future-referral consent are required.";
  if (containsForbiddenField(input)) return "Sensitive financial, identity, payment, or secret fields are not accepted.";
  return "";
}

function calculateLeadScore(lead: FlexLeadInput) {
  let score = 0;
  const spend = text(lead.monthly_spend_range).toLowerCase();
  const years = text(lead.years_in_business).toLowerCase();
  const employees = text(lead.employee_count).toLowerCase();
  const primaryNeed = text(lead.primary_need).toLowerCase();
  if (/\$10k|\$25k|\$50k|\+/.test(spend) && !/under/.test(spend)) score += 10;
  if (/1-2|3-5|5\+|10\+/.test(years)) score += 10;
  if (/2-5|6-20|21-50|51\+/.test(employees)) score += 10;
  if (primaryNeedKeywords.some((keyword) => primaryNeed.includes(keyword))) score += 10;
  if (lead.interested_in_forge_job_leads) score += 10;
  if (lead.interested_in_north_star_marketing) score += 10;
  if (lead.interested_in_payment_processing) score += 10;
  if (lead.interested_in_website_crm_automation) score += 10;
  return score;
}

function approvedDestinations() {
  const approvalReady = [
    process.env.FLEX_PARTNER_APPROVED,
    process.env.FLEX_DATA_SHARING_APPROVED,
    process.env.FLEX_OFFICIAL_LANGUAGE_APPROVED,
    process.env.FLEX_REFERRAL_AGREEMENT_SIGNED
  ].every((value) => value === "true");
  if (!approvalReady) return [];
  return [process.env.FORGE_GHL_WEBHOOK_URL, process.env.FORGE_ZAPIER_WEBHOOK_URL]
    .map((value) => text(value, 2048))
    .filter((value) => /^https:\/\//i.test(value));
}

function rateLimitKey(request: Request) {
  return text(request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown", 80);
}

function consumeRateLimit(request: Request) {
  const now = Date.now();
  const key = rateLimitKey(request);
  const current = rateLimits.get(key);
  if (!current || current.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }
  current.count += 1;
  return {
    allowed: current.count <= RATE_LIMIT_MAX,
    retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000))
  };
}

function safeProviderPayload(input: FlexLeadInput, requestId: string) {
  return {
    request_id: requestId,
    source: "forge_capital_desk",
    lead_type: "business_finance_interest",
    created_at: text(input.created_at, 64),
    consent_captured_at: text(input.consent_captured_at, 64),
    owner_name: text(input.owner_name, 160),
    business_name: text(input.business_name, 160),
    email: text(input.email, 320),
    phone: text(input.phone, 80),
    city: text(input.city, 160),
    state: text(input.state, 32),
    industry: text(input.industry, 160),
    website: text(input.website, 500),
    years_in_business: text(input.years_in_business, 80),
    monthly_revenue_range: text(input.monthly_revenue_range, 80),
    monthly_spend_range: text(input.monthly_spend_range, 80),
    employee_count: text(input.employee_count, 80),
    primary_need: text(input.primary_need, 200),
    notes: text(input.notes, 2000),
    interested_in_forge_job_leads: Boolean(input.interested_in_forge_job_leads),
    interested_in_north_star_marketing: Boolean(input.interested_in_north_star_marketing),
    interested_in_payment_processing: Boolean(input.interested_in_payment_processing),
    interested_in_website_crm_automation: Boolean(input.interested_in_website_crm_automation),
    consent_to_contact: true,
    consent_to_receive_future_approved_referral: true,
    lead_score: calculateLeadScore(input),
    status: "new"
  };
}

async function postDestination(url: string, payload: Record<string, unknown>, requestId: string, index: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROVIDER_TIMEOUT_MS);
  try {
    const providerResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": requestId,
        "X-Forge-Request-Id": requestId
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    const receipt = await providerResponse.json().catch(() => ({})) as ProviderReceipt;
    if (!providerResponse.ok || receipt.ok !== true || receipt.requestId !== requestId || !validIsoTimestamp(receipt.receivedAt)) {
      throw new Error("Invalid provider receipt");
    }
    return `approved-capital-desk-destination-${index + 1}`;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  const correlationId = crypto.randomUUID();
  if (!validateOrigin(request)) {
    return contractError("INVALID_REQUEST_ORIGIN", 403, "rejected-requires-correction", { correlationId });
  }
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return contractError("PAYLOAD_TOO_LARGE", 413, "rejected-requires-correction", { correlationId });
  }

  let input: FlexLeadInput;
  try {
    input = await request.json() as FlexLeadInput;
  } catch {
    return contractError("INVALID_JSON", 400, "rejected-requires-correction", { correlationId });
  }
  if (JSON.stringify(input).length > MAX_BODY_BYTES) {
    return contractError("PAYLOAD_TOO_LARGE", 413, "rejected-requires-correction", { correlationId });
  }

  const requestId = requestIdPattern.test(text(input.request_id, 160)) ? text(input.request_id, 160) : "";
  const validationError = validateLead(input);
  if (validationError) {
    return contractError("INVALID_CAPITAL_DESK_REQUEST", 400, "rejected-requires-correction", { correlationId, requestId, message: validationError });
  }

  const prior = receipts.get(requestId);
  if (prior) {
    return response({ ok: true, status: "delivered", duplicate: true, requestId, receivedAt: prior.receivedAt, storedIn: prior.storedIn }, 200, {
      "X-Forge-Correlation-Id": correlationId,
      "X-Forge-Request-Id": requestId
    });
  }

  const limit = consumeRateLimit(request);
  if (!limit.allowed) {
    return contractError("RATE_LIMITED", 429, "retryable-failure", { correlationId, requestId, retryAfter: String(limit.retryAfter) });
  }

  const destinations = approvedDestinations();
  if (!destinations.length) {
    return contractError("DURABLE_CAPITAL_DESK_DESTINATION_NOT_CONFIGURED", 503, "delivery-unavailable", {
      correlationId,
      requestId,
      message: "The browser copy was preserved, but Forge has no approved Capital Desk delivery destination."
    });
  }

  const existingWrite = inFlight.get(requestId);
  const write = existingWrite || Promise.resolve().then(async () => {
    const payload = safeProviderPayload(input, requestId);
    const storedIn = await Promise.all(destinations.map((url, index) => postDestination(url, payload, requestId, index)));
    const receipt = { receivedAt: new Date().toISOString(), storedIn };
    receipts.set(requestId, receipt);
    return receipt;
  });
  if (!existingWrite) inFlight.set(requestId, write);

  try {
    const receipt = await write;
    return response({ ok: true, status: "delivered", duplicate: Boolean(existingWrite), requestId, receivedAt: receipt.receivedAt, storedIn: receipt.storedIn }, existingWrite ? 200 : 201, {
      "X-Forge-Correlation-Id": correlationId,
      "X-Forge-Request-Id": requestId
    });
  } catch (error) {
    console.error("Forge Capital Desk delivery failed", {
      correlationId,
      requestId,
      category: error instanceof Error ? error.name : "unknown"
    });
    return contractError("CAPITAL_DESK_DELIVERY_FAILED", 502, "retryable-failure", { correlationId, requestId });
  } finally {
    if (!existingWrite && inFlight.get(requestId) === write) inFlight.delete(requestId);
  }
}
