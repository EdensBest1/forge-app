(function installForgeBackupRecovery(global) {
  "use strict";

  const SCHEMA = "forge.local-backup.v1";
  const MAX_BYTES = 5 * 1024 * 1024;
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
      return { state: legacyState, legacy: true, counts: summarize(legacyState), exportedAt: "Unknown" };
    }
    if (value.schema !== SCHEMA) throw new Error("Backup schema is not supported.");
    if (!/^\d{4}-\d{2}-\d{2}T/.test(String(value.exportedAt || ""))) throw new Error("Backup export timestamp is invalid.");
    const state = validateState(value.state);
    const actualChecksum = checksum(JSON.stringify(state));
    if (actualChecksum !== value.checksum) throw new Error("Backup integrity check failed.");
    const counts = summarize(state);
    for (const [key, count] of Object.entries(counts)) {
      if (Number(value.counts?.[key]) !== count) throw new Error("Backup record counts do not match its contents.");
    }
    return { state, legacy: false, counts, exportedAt: value.exportedAt, appVersion: value.appVersion };
  }

  function parse(text) {
    if (new TextEncoder().encode(String(text || "")).byteLength > MAX_BYTES) throw new Error("Backup file is larger than 5 MB.");
    return recover(JSON.parse(String(text || "")));
  }

  global.ForgeBackupRecovery = Object.freeze({ SCHEMA, MAX_BYTES, checksum, summarize, createEnvelope, recover, parse });
})(globalThis);
