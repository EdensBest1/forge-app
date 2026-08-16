import { agentRegistry } from "../../nexus/orchestrator.mjs";
import { configurationHealth } from "../../nexus/security-watch.mjs";
import { storageStatus } from "../../nexus/state-store.mjs";

declare const process: {
  env: Record<string, string | undefined>;
};

type VercelRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
};

type VercelResponse = {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  send(body: string): void;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader("cache-control", "no-store");
  response.setHeader("content-type", "application/json; charset=utf-8");

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).send(JSON.stringify({ error: "METHOD_NOT_ALLOWED" }));
    return;
  }

  const token = process.env.NEXUS_API_TOKEN;
  if (!token) {
    response.status(503).send(JSON.stringify({ error: "NEXUS_API_UNCONFIGURED" }));
    return;
  }
  const auth = first(request.headers.authorization ?? request.headers.Authorization);
  if (auth !== `Bearer ${token}`) {
    response.status(401).send(JSON.stringify({ error: "UNAUTHORIZED" }));
    return;
  }

  const registry = agentRegistry();
  const security = configurationHealth();
  const storage = storageStatus();
  response.status(200).send(JSON.stringify({
    system: "Nexus Autonomous Agent Workforce",
    agents: registry.length,
    enabled: registry.filter((a) => a.status === "enabled").length,
    storage,
    security,
    live_runner_configured: Boolean(process.env.NEXUS_AGENT_RUNNER_URL && process.env.NEXUS_AGENT_RUNNER_TOKEN),
    api_configured: true,
  }));
}
