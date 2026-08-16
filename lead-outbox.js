(function installForgeLeadOutbox(global) {
  "use strict";

  const SCHEMA = "forge.lead-outbox.v1";
  const RECEIPT_SCHEMA = "forge.lead-receipt.v1";
  const MAX_RECORDS = 200;
  const MAX_BYTES = 512 * 1024;
  const MAX_ATTEMPTS = 5;
  const DELIVERED_RETENTION_MS = 30 * 24 * 60 * 60 * 1000;
  const REQUEST_ID_PATTERN = /^[A-Za-z0-9._:-]{1,160}$/;
  const STATES = Object.freeze({
    LOCAL: "locally-preserved",
    SENDING: "sending",
    DELIVERED: "delivered",
    UNAVAILABLE: "delivery-unavailable",
    RETRYABLE: "retryable-failure",
    REJECTED: "rejected-requires-correction"
  });
  const VALID_STATES = new Set(Object.values(STATES));
  const FORBIDDEN_FIELD_PATTERN = /(^| )(ssn|social security|bank|routing|account number|credit card|card number|cvv|password|secret|access token|api key|authorization|identity document|passport|tax id|driver license number|drivers license number|license number)( |$)/;

  function plainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function text(value, max = 500) {
    return String(value ?? "").trim().slice(0, max);
  }

  function forbiddenField(key) {
    const words = String(key || "")
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/[^A-Za-z0-9]+/g, " ")
      .trim()
      .toLowerCase();
    return FORBIDDEN_FIELD_PATTERN.test(words);
  }

  function canonicalTimestamp(value) {
    const timestamp = text(value, 64);
    const date = new Date(timestamp);
    return /^\d{4}-\d{2}-\d{2}T.*Z$/.test(timestamp)
      && Number.isFinite(date.getTime())
      && date.toISOString() === timestamp;
  }

  function validEmail(value) {
    const email = text(value, 320);
    return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function assertSafeTree(value, depth = 0) {
    if (depth > 20) throw outboxError("UNSAFE_PAYLOAD", "Lead details are nested too deeply.");
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      if (value.length > 50) throw outboxError("UNSAFE_PAYLOAD", "Lead details contain too many list items.");
      value.forEach((item) => assertSafeTree(item, depth + 1));
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      if (["__proto__", "constructor", "prototype"].includes(key) || forbiddenField(key)) {
        throw outboxError("SENSITIVE_FIELD", "Sensitive or secret fields cannot be saved in the delivery outbox.");
      }
      assertSafeTree(child, depth + 1);
    }
  }

  function outboxError(code, message) {
    const error = new Error(message);
    error.code = code;
    return error;
  }

  function safeBusinessGrowthTools(value) {
    if (!Array.isArray(value)) return [];
    return value.map((item) => text(item, 160)).filter(Boolean).slice(0, 20);
  }

  function safePayload(type, payload) {
    if (!plainObject(payload)) throw outboxError("INVALID_PAYLOAD", "Lead details are missing.");
    assertSafeTree(payload);
    if (type === "job") {
      return {
        id: text(payload.id, 160),
        title: text(payload.title, 160),
        category: text(payload.category, 160),
        location: text(payload.location, 160),
        urgency: text(payload.urgency, 120),
        budget: text(payload.budget, 120),
        description: text(payload.description, 1600),
        customer: text(payload.customer, 160),
        phone: text(payload.phone, 80),
        email: text(payload.email, 320),
        createdAt: text(payload.createdAt, 64)
      };
    }
    if (type === "worker") {
      return {
        id: text(payload.id, 160),
        name: text(payload.name, 160),
        trade: text(payload.trade, 160),
        phone: text(payload.phone, 80),
        email: text(payload.email, 320),
        experience: text(payload.experience, 160),
        serviceArea: text(payload.serviceArea || payload.area, 160),
        businessSize: text(payload.businessSize, 160),
        northStarMarketingNeed: text(payload.northStarMarketingNeed, 500),
        businessGrowthTools: safeBusinessGrowthTools(payload.businessGrowthTools),
        createdAt: text(payload.createdAt, 64)
      };
    }
    throw outboxError("INVALID_TYPE", "Only job and worker leads can use the delivery outbox.");
  }

  function validatePayload(type, payload, consent) {
    if (!["job", "worker"].includes(type)) return "Unsupported lead type.";
    if (consent.followUp !== true || consent.terms !== true) return "Follow-up consent and Early Access Terms acceptance are required.";
    if (!canonicalTimestamp(consent.capturedAt)) return "A valid consent timestamp is required.";
    if (!validEmail(payload.email)) return "A valid email is required when email is provided.";
    if (type === "job") {
      if (!payload.title || !payload.location || !payload.customer) return "Job title, location, and customer name are required.";
      if (!payload.phone && !payload.email) return "A phone number or email is required.";
    }
    if (type === "worker") {
      if (!payload.name || !payload.trade) return "Worker name and trade are required.";
      if (!payload.phone && !payload.email) return "A phone number or email is required.";
    }
    return "";
  }

  function newRequestId(type, payload, randomUUID) {
    const source = text(payload.id || payload.email || "lead", 48).replace(/[^A-Za-z0-9._:-]+/g, "-").replace(/^-+|-+$/g, "") || "lead";
    const random = typeof randomUUID === "function"
      ? randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `${type}-${source}-${random}`.slice(0, 160);
  }

  function createRecord(type, sourcePayload, options = {}) {
    const now = options.now || new Date().toISOString();
    if (!canonicalTimestamp(now)) throw outboxError("INVALID_TIMESTAMP", "Outbox creation time is invalid.");
    const payload = safePayload(type, sourcePayload);
    const consent = {
      followUp: sourcePayload.followUpConsent === true || sourcePayload.consent === true,
      terms: sourcePayload.termsAccepted === true,
      capturedAt: text(sourcePayload.consentCapturedAt || sourcePayload.createdAt, 64)
    };
    const requestId = text(options.requestId || newRequestId(type, payload, options.randomUUID || global.crypto?.randomUUID?.bind(global.crypto)), 160);
    if (!REQUEST_ID_PATTERN.test(requestId)) throw outboxError("INVALID_REQUEST_ID", "Outbox request ID is invalid.");
    const validationMessage = validatePayload(type, payload, consent);
    return {
      schema: SCHEMA,
      requestId,
      type,
      payload,
      consent,
      createdAt: now,
      lastAttemptAt: null,
      attemptCount: 0,
      deliveryState: validationMessage ? STATES.REJECTED : STATES.LOCAL,
      lastFailure: validationMessage ? { category: "validation", message: validationMessage } : null,
      nextRetryAt: null,
      serverReceipt: null
    };
  }

  function normalizeReceipt(value, requestId) {
    if (!plainObject(value)
      || value.contractVersion !== RECEIPT_SCHEMA
      || value.status !== "delivered"
      || value.ok !== true
      || text(value.requestId, 160) !== requestId) return null;
    if (!canonicalTimestamp(value.receivedAt) || !Array.isArray(value.storedIn) || !value.storedIn.length) return null;
    const storedIn = value.storedIn.map((item) => text(item, 80)).filter(Boolean).slice(0, 10);
    if (!storedIn.length) return null;
    return {
      requestId,
      receivedAt: value.receivedAt,
      storedIn,
      duplicate: value.duplicate === true
    };
  }

  function normalizeRecord(value) {
    if (!plainObject(value)) throw outboxError("MALFORMED_RECORD", "Outbox record is not an object.");
    if (value.schema && value.schema !== SCHEMA) throw outboxError("FUTURE_SCHEMA", "Outbox record schema is not supported by this version of Forge.");
    const createdAt = text(value.createdAt, 64);
    if (!canonicalTimestamp(createdAt)) throw outboxError("INVALID_TIMESTAMP", "Outbox record creation time is invalid.");
    const requestId = text(value.requestId, 160);
    if (!REQUEST_ID_PATTERN.test(requestId)) throw outboxError("INVALID_REQUEST_ID", "Outbox request ID is invalid.");
    const type = text(value.type, 20);
    const payload = safePayload(type, value.payload);
    const consent = {
      followUp: value.consent?.followUp === true,
      terms: value.consent?.terms === true,
      capturedAt: text(value.consent?.capturedAt, 64)
    };
    const validationMessage = validatePayload(type, payload, consent);
    const attemptCount = Math.max(0, Math.min(MAX_ATTEMPTS, Number(value.attemptCount) || 0));
    const lastAttemptAt = value.lastAttemptAt && canonicalTimestamp(value.lastAttemptAt) ? value.lastAttemptAt : null;
    const nextRetryAt = value.nextRetryAt && canonicalTimestamp(value.nextRetryAt) ? value.nextRetryAt : null;
    const requestedState = VALID_STATES.has(value.deliveryState) ? value.deliveryState : STATES.LOCAL;
    const receipt = normalizeReceipt(value.serverReceipt, requestId);
    const deliveryState = receipt
      ? STATES.DELIVERED
      : validationMessage
        ? STATES.REJECTED
        : requestedState === STATES.SENDING
          ? STATES.RETRYABLE
          : requestedState;
    return {
      schema: SCHEMA,
      requestId,
      type,
      payload,
      consent,
      createdAt,
      lastAttemptAt,
      attemptCount,
      deliveryState,
      lastFailure: deliveryState === STATES.DELIVERED
        ? null
        : validationMessage
          ? { category: "validation", message: validationMessage }
          : plainObject(value.lastFailure)
            ? { category: text(value.lastFailure.category, 80), message: text(value.lastFailure.message, 240) }
            : null,
      nextRetryAt,
      serverReceipt: receipt
    };
  }

  function serializedBytes(value) {
    const serialized = JSON.stringify(value);
    if (typeof TextEncoder === "function") return new TextEncoder().encode(serialized).byteLength;
    return serialized.length;
  }

  function prune(records, now = new Date().toISOString()) {
    const current = new Date(now).getTime();
    const pending = records.filter((record) => record.deliveryState !== STATES.DELIVERED);
    const delivered = records
      .filter((record) => record.deliveryState === STATES.DELIVERED)
      .filter((record) => current - new Date(record.serverReceipt?.receivedAt || record.createdAt).getTime() <= DELIVERED_RETENTION_MS)
      .sort((left, right) => String(right.serverReceipt?.receivedAt || right.createdAt).localeCompare(String(left.serverReceipt?.receivedAt || left.createdAt)))
      .slice(0, 100);
    const combined = [...pending, ...delivered].sort((left, right) => right.createdAt.localeCompare(left.createdAt));
    if (combined.length > MAX_RECORDS) throw outboxError("OUTBOX_CAPACITY", "Delivery outbox is full. Export or remove delivered receipts before saving another lead.");
    if (serializedBytes(combined) > MAX_BYTES) throw outboxError("OUTBOX_CAPACITY", "Delivery outbox reached its safe storage limit. Export it before saving another lead.");
    return combined;
  }

  function normalizeCollection(value, options = {}) {
    const records = [];
    const issues = [];
    const seen = new Set();
    if (!Array.isArray(value)) return { records, issues: [{ index: -1, code: "MALFORMED_COLLECTION" }] };
    value.forEach((item, index) => {
      try {
        const record = normalizeRecord(item);
        if (seen.has(record.requestId)) {
          issues.push({ index, code: "DUPLICATE_REQUEST_ID" });
          return;
        }
        seen.add(record.requestId);
        records.push({ record, index });
      } catch (error) {
        issues.push({ index, code: text(error?.code || "MALFORMED_RECORD", 80) });
      }
    });
    const ordered = records.sort((left, right) => right.record.createdAt.localeCompare(left.record.createdAt));
    const accepted = [];
    for (const entry of ordered) {
      try {
        const candidate = prune([...accepted, entry.record], options.now);
        accepted.splice(0, accepted.length, ...candidate);
      } catch (error) {
        issues.push({ index: entry.index, code: text(error?.code || "OUTBOX_CAPACITY", 80) });
      }
    }
    return { records: accepted, issues };
  }

  function enqueue(collection, type, payload, options = {}) {
    const normalized = normalizeCollection(Array.isArray(collection) ? collection : [], options);
    const record = createRecord(type, payload, options);
    const existing = normalized.records.find((item) => item.requestId === record.requestId);
    if (existing) return { records: normalized.records, record: existing, duplicate: true, issues: normalized.issues };
    const records = prune([record, ...normalized.records], options.now || record.createdAt);
    return { records, record, duplicate: false, issues: normalized.issues };
  }

  function retryDelayMs(attemptCount, category = "network") {
    if (category === "unavailable") return [5_000, 30_000, 120_000, 600_000, 1_800_000][Math.max(0, attemptCount - 1)] || 1_800_000;
    return [5_000, 30_000, 120_000, 600_000, 1_800_000][Math.max(0, attemptCount - 1)] || 1_800_000;
  }

  function canRetry(record, now = new Date().toISOString()) {
    const normalized = normalizeRecord(record);
    if (![STATES.LOCAL, STATES.UNAVAILABLE, STATES.RETRYABLE].includes(normalized.deliveryState)) return false;
    if (normalized.attemptCount >= MAX_ATTEMPTS) return false;
    return !normalized.nextRetryAt || new Date(now).getTime() >= new Date(normalized.nextRetryAt).getTime();
  }

  function markSending(record, now = new Date().toISOString()) {
    const normalized = normalizeRecord(record);
    if (!canRetry(normalized, now)) throw outboxError("RETRY_NOT_READY", "This lead is not ready for another delivery attempt yet.");
    return {
      ...normalized,
      deliveryState: STATES.SENDING,
      lastAttemptAt: now,
      attemptCount: normalized.attemptCount + 1,
      lastFailure: null,
      nextRetryAt: null
    };
  }

  function failure(record, state, category, message, now, retryAfterMs) {
    const nextRetryAt = retryAfterMs === null
      ? null
      : new Date(new Date(now).getTime() + retryAfterMs).toISOString();
    return {
      ...record,
      deliveryState: state,
      lastFailure: { category, message },
      nextRetryAt,
      serverReceipt: null
    };
  }

  function applyHttpResult(record, status, body, options = {}) {
    const now = options.now || new Date().toISOString();
    const normalized = normalizeRecord(record);
    const receipt = normalizeReceipt(body, normalized.requestId);
    if ((status === 200 || status === 201) && receipt) {
      return { ...normalized, deliveryState: STATES.DELIVERED, lastFailure: null, nextRetryAt: null, serverReceipt: receipt };
    }
    if (status === 503
      && body?.contractVersion === RECEIPT_SCHEMA
      && body?.status === "delivery-unavailable"
      && body?.error === "DURABLE_LEAD_STORE_NOT_CONFIGURED"
      && text(body?.requestId, 160) === normalized.requestId) {
      return failure(normalized, STATES.UNAVAILABLE, "unavailable", "Forge delivery is not available yet.", now, retryDelayMs(normalized.attemptCount, "unavailable"));
    }
    if ([400, 403, 413, 415].includes(status)) {
      return failure(normalized, STATES.REJECTED, "validation", "Review and correct this lead before trying again.", now, null);
    }
    if (status === 429) {
      const retryAfterMs = Math.min(30 * 60 * 1000, Math.max(5_000, Number(options.retryAfterSeconds || 0) * 1000 || retryDelayMs(normalized.attemptCount)));
      return failure(normalized, STATES.RETRYABLE, "rate-limited", "Forge asked this device to wait before retrying.", now, retryAfterMs);
    }
    if ((status === 200 || status === 201) && !receipt) {
      return failure(normalized, STATES.RETRYABLE, "invalid-receipt", "Forge could not verify the server receipt.", now, retryDelayMs(normalized.attemptCount));
    }
    return failure(normalized, STATES.RETRYABLE, "server", "Forge delivery did not complete. The local copy is still safe.", now, retryDelayMs(normalized.attemptCount));
  }

  function applyNetworkFailure(record, options = {}) {
    const now = options.now || new Date().toISOString();
    const normalized = normalizeRecord(record);
    return failure(normalized, STATES.RETRYABLE, "network", "Forge could not reach the delivery service. The local copy is still safe.", now, retryDelayMs(normalized.attemptCount));
  }

  function requestBody(record) {
    const normalized = normalizeRecord(record);
    return {
      type: normalized.type,
      payload: normalized.payload,
      requestId: normalized.requestId,
      consent: normalized.consent
    };
  }

  function publicSummary(record) {
    const normalized = normalizeRecord(record);
    return normalized.type === "job"
      ? text(`${normalized.payload.title} · ${normalized.payload.location}`, 240)
      : text(`${normalized.payload.name} · ${normalized.payload.trade}`, 240);
  }

  global.ForgeLeadOutbox = Object.freeze({
    SCHEMA,
    RECEIPT_SCHEMA,
    STATES,
    MAX_RECORDS,
    MAX_BYTES,
    MAX_ATTEMPTS,
    DELIVERED_RETENTION_MS,
    createRecord,
    normalizeRecord,
    normalizeCollection,
    enqueue,
    prune,
    canRetry,
    markSending,
    applyHttpResult,
    applyNetworkFailure,
    requestBody,
    publicSummary,
    safePayload,
    validatePayload,
    normalizeReceipt,
    retryDelayMs
  });
})(globalThis);
