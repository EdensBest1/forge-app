import { execute } from "../../nexus/orchestrator.mjs";

type VercelRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};

type VercelResponse = {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  send(body: string): void;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function authorized(request: VercelRequest) {
  const configured = process.env.NEXUS_API_TOKEN;
  if (!configured) return { ok: false, status: 503, code: "NEXUS_API_UNCONFIGURED" };
  const auth = first(request.headers.authorization ?? request.headers.Authorization);
  if (auth !== `Bearer ${configured}`) return { ok: false, status: 401, code: "UNAUTHORIZED" };
  return { ok: true, status: 200, code: "OK" };
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader("cache-control", "no-store");
  response.setHeader("content-type", "application/json; charset=utf-8");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).send(JSON.stringify({ error: "METHOD_NOT_ALLOWED" }));
    return;
  }

  const auth = authorized(request);
  if (!auth.ok) {
    response.status(auth.status).send(JSON.stringify({ error: auth.code }));
    return;
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : (request.body || {});
  const result = await execute(body as Record<string, unknown>);
  const status = result.authorization?.decision === "security_blocked" ? 403
    : result.authorization?.decision === "approval_required" ? 409
    : result.result?.status === "failed" ? 502
    : 200;
  response.status(status).send(JSON.stringify(result));
}
