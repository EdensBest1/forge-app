declare const process: {
  env: Record<string, string | undefined>;
};

export type LeadDatabaseRecord = {
  table: string;
  value: Record<string, unknown>;
};

export type DurableLeadWrite = {
  requestId: string;
  record: LeadDatabaseRecord;
  webhookPayload: Record<string, unknown>;
};

export type LeadStore = {
  save(write: DurableLeadWrite): Promise<string[]>;
};

type StorageOptions = {
  env?: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
};

export function createConfiguredLeadStore(options: StorageOptions = {}): LeadStore | null {
  const env = options.env || process.env;
  const fetchImpl = options.fetchImpl || fetch;
  const supabaseUrl = env.FORGE_SUPABASE_URL;
  const supabaseKey = env.FORGE_SUPABASE_SERVICE_ROLE_KEY;
  const webhookUrls = [env.FORGE_LEAD_WEBHOOK_URL, env.FORGE_ZAPIER_WEBHOOK_URL].filter(Boolean) as string[];

  if (!supabaseUrl && !supabaseKey && webhookUrls.length === 0) return null;

  return {
    async save(write) {
      if (Boolean(supabaseUrl) !== Boolean(supabaseKey)) {
        throw new Error("Supabase durable storage is only partially configured.");
      }

      const storedIn: string[] = [];
      if (supabaseUrl && supabaseKey) {
        const response = await fetchImpl(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${write.record.table}`, {
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
        const responses = await Promise.all(webhookUrls.map((url) => fetchImpl(url, {
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
