import { POST as postLead } from "./leads/route.js";

type VercelRequest = {
  method?: string;
  url?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};

type VercelResponse = {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  send(body: string): void;
};

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).send(JSON.stringify({ error: "METHOD_NOT_ALLOWED" }));
    return;
  }

  const header = (name: string) => {
    const value = request.headers[name] ?? request.headers[name.toLowerCase()];
    return Array.isArray(value) ? value[0] : value;
  };
  const protocol = header("x-forwarded-proto") || "https";
  const host = header("x-forwarded-host") || header("host") || "localhost";
  const url = `${protocol}://${host}${request.url || "/api/forge/leads"}`;
  const headers = new Headers();
  for (const [name, value] of Object.entries(request.headers)) {
    if (value === undefined) continue;
    headers.set(name, Array.isArray(value) ? value.join(", ") : value);
  }
  headers.set("content-type", "application/json");
  const body = typeof request.body === "string" ? request.body : JSON.stringify(request.body || {});
  const webResponse = await postLead(new Request(url, { method: "POST", headers, body }));
  webResponse.headers.forEach((value, name) => response.setHeader(name, value));
  response.status(webResponse.status).send(await webResponse.text());
}
