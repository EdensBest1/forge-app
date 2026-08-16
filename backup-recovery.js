(function installForgeBackupRecovery(global) {
  "use strict";

  const SCHEMA = "forge.local-backup.v1";
  const MAX_BYTES = 5 * 1024 * 1024;
  const MAX_TOTAL_RECORDS = 100000;
  const REQUIRED_ARRAYS = ["jobs", "workers", "bids", "messages", "referrals", "activity", "accounts"];
  const FORBIDDEN_KEYS = new Set(["__proto__", "constructor", "prototype"]);

  function plainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function assertSafeTree(value, depth = 0) {
    if (depth > 50) throw new Error("Backup nesting is too deep.");
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      if (value.length > 100000) throw new Error("Backup contains too many records.");
      value.forEach((item) => assertSafeTree(item, depth + 1));
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      if (FORBIDDEN_KEYS.has(key)) throw new Error("Backup contains an unsafe object key.");
      assertSafeTree(child, depth + 1);
    }
  }

  function validateState(state) {
    if (!plainObject(state)) throw new Error("Backup state must be an object.");
    for (const key of REQUIRED_ARRAYS) {
      if (!Array.isArray(state[key])) throw new Error(`Backup is missing the ${key} collection.`);
    }
    if (!plainObject(state.settings) || !plainObject(state.session)) {
      throw new Error("Backup settings or session metadata is invalid.");
    }
    assertSafeTree(state);
    const counts = summarize(state);
    if (counts.allRecords > MAX_TOTAL_RECORDS) throw new Error("Backup contains more than 100,000 total records.");
    return state;
  }

  function checksum(text) {
    let hash = 0x811c9dc5;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return `fnv1a32:${hash.toString(16).padStart(8, "0")}`;
  }

  function summarize(state) {
    const counts = {};
    for (const key of REQUIRED_ARRAYS) counts[key] = state[key].length;
    counts.allRecords = REQUIRED_ARRAYS.reduce((total, key) => total + counts[key], 0);
    return counts;
  }

  function createEnvelope(state, options = {}) {
    validateState(state);
    const serializedState = JSON.stringify(state);
    return {
      schema: SCHEMA,
      exportedAt: options.exportedAt || new Date().toISOString(),
      appVersion: String(options.appVersion || "unknown"),
      checksum: checksum(serializedState),
      counts: summarize(state),
      state
    };
  }

  function recover(value) {
    if (!plainObject(value)) throw new Error("Backup JSON must contain an object.");
    if (!value.schema) {
      const legacyState = validateState(value);
      return {
        state: legacyState,
        legacy: true,
        schema: "legacy raw state",
        checksumStatus: "not available",
        counts: summarize(legacyState),
        exportedAt: "Unknown",
        appVersion: "Unknown"
      };
    }
    if (value.schema !== SCHEMA) throw new Error("Backup schema is not supported.");
    const exportedAt = String(value.exportedAt || "");
    const exportDate = new Date(exportedAt);
    if (!/^\d{4}-\d{2}-\d{2}T.*Z$/.test(exportedAt)
      || !Number.isFinite(exportDate.getTime())
      || exportDate.toISOString() !== exportedAt) {
      throw new Error("Backup export timestamp is invalid.");
    }
    if (!plainObject(value.counts)) throw new Error("Backup record counts are missing or invalid.");
    if (!/^fnv1a32:[0-9a-f]{8}$/i.test(String(value.checksum || ""))) throw new Error("Backup checksum format is invalid.");
    if (typeof value.appVersion !== "string" || !value.appVersion.trim() || value.appVersion.length > 40) {
      throw new Error("Backup app version is invalid.");
    }
    const state = validateState(value.state);
    const actualChecksum = checksum(JSON.stringify(state));
    if (actualChecksum !== value.checksum) throw new Error("Backup integrity check failed.");
    const counts = summarize(state);
    for (const [key, count] of Object.entries(counts)) {
      if (Number(value.counts?.[key]) !== count) throw new Error("Backup record counts do not match its contents.");
    }
    return {
      state,
      legacy: false,
      schema: SCHEMA,
      checksumStatus: "verified",
      counts,
      exportedAt,
      appVersion: value.appVersion
    };
  }

  function parse(text) {
    if (new TextEncoder().encode(String(text || "")).byteLength > MAX_BYTES) throw new Error("Backup file is larger than 5 MB.");
    let value;
    try {
      value = JSON.parse(String(text || ""));
    } catch {
      throw new Error("Backup file is not valid JSON.");
    }
    return recover(value);
  }

  function preview(text, currentState) {
    const recovered = parse(text);
    const currentCounts = summarize(validateState(currentState));
    const changes = REQUIRED_ARRAYS.map((collection) => ({
      collection,
      current: currentCounts[collection],
      replacement: recovered.counts[collection],
      delta: recovered.counts[collection] - currentCounts[collection]
    }));
    return { ...recovered, currentCounts, changes };
  }

  global.ForgeBackupRecovery = Object.freeze({
    SCHEMA,
    MAX_BYTES,
    MAX_TOTAL_RECORDS,
    checksum,
    summarize,
    createEnvelope,
    recover,
    parse,
    preview
  });
})(globalThis);
