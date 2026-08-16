/**
 * @typedef {{
 *   requestId: string,
 *   record: { table: string, value: Record<string, unknown> },
 *   webhookPayload: Record<string, unknown>
 * }} DurableLeadWrite
 */

/**
 * @param {{
 *   env?: Record<string, string | undefined>,
 *   fetchImpl?: typeof fetch,
 *   timeoutMs?: number
 * }} [options]
 */
export function createConfiguredLeadStore(options = {}) {
  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || fetch;
  const supabaseUrl = env.FORGE_SUPABASE_URL;
  const supabaseKey = env.FORGE_SUPABASE_SERVICE_ROLE_KEY;
  const webhookUrls = [env.FORGE_LEAD_WEBHOOK_URL, env.FORGE_ZAPIER_WEBHOOK_URL].filter(Boolean);
  const timeoutMs = Number.isFinite(options.timeoutMs) && options.timeoutMs > 0
    ? Math.min(options.timeoutMs, 30_000)
    : 8_000;

  if (!supabaseUrl && !supabaseKey && webhookUrls.length === 0) return null;

  async function fetchProvider(url, init) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(url, { ...init, signal: controller.signal });
      if (!response || typeof response.ok !== "boolean" || typeof response.status !== "number") {
        throw new Error("Configured durable provider returned an invalid response.");
      }
      return response;
    } catch (error) {
      if (controller.signal.aborted) throw new Error("Configured durable provider timed out.");
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }

  return {
    /** @param {DurableLeadWrite} write */
    async save(write) {
      if (Boolean(supabaseUrl) !== Boolean(supabaseKey)) {
        throw new Error("Supabase durable storage is only partially configured.");
      }

      const storedIn = [];
      if (supabaseUrl && supabaseKey) {
        const response = await fetchProvider(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${write.record.table}`, {
          method: "POST",
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            "Idempotency-Key": write.requestId,
            Prefer: "return=minimal,resolution=ignore-duplicates"
          },
          body: JSON.stringify(write.record.value)
        });
        if (!response.ok) throw new Error(`Supabase durable write failed (${response.status}).`);
        storedIn.push("supabase");
      }

      if (webhookUrls.length) {
        const responses = await Promise.all(webhookUrls.map((url) => fetchProvider(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Idempotency-Key": write.requestId
          },
          body: JSON.stringify(write.webhookPayload)
        })));
        const failed = responses.find((response) => !response.ok);
        if (failed) throw new Error(`Configured durable webhook failed (${failed.status}).`);
        storedIn.push("webhook");
      }

      return storedIn;
    }
  };
}
