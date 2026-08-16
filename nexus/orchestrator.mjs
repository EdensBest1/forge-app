import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { appendAudit, storageStatus } from './state-store.mjs';
import { securityPreflight } from './security-watch.mjs';

const ROOT = new URL('./', import.meta.url);
const coreManifest = JSON.parse(await fs.readFile(new URL('agents.json', ROOT), 'utf8'));
let extension = { agents: [] };
try {
  extension = JSON.parse(await fs.readFile(new URL('agents-extension.json', ROOT), 'utf8'));
} catch {}
const manifest = {
  ...coreManifest,
  agent_count: coreManifest.agents.length + extension.agents.length,
  agents: [...coreManifest.agents, ...extension.agents],
};
const policy = JSON.parse(await fs.readFile(new URL('approval-policy.json', ROOT), 'utf8'));

const byId = new Map(manifest.agents.map((a) => [a.id, a]));
const hardGates = new Set(policy.hard_gates);

function nowIso() {
  return new Date().toISOString();
}

function taskId() {
  return `tsk_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
}

function normalizeTask(input = {}) {
  const business = input.business || 'shared';
  const workspaceType = input.workspace_type || 'internal-business';
  return {
    task_id: input.task_id || taskId(),
    created_at: input.created_at || nowIso(),
    tenant_id: input.tenant_id || (workspaceType === 'northstar-client' ? '' : 'edens-best-internal'),
    workspace_id: input.workspace_id || (workspaceType === 'northstar-client' ? '' : `${business}-default`),
    workspace_type: workspaceType,
    source_tenant_id: input.source_tenant_id || null,
    target_tenant_id: input.target_tenant_id || null,
    business,
    department: input.department || null,
    capability: input.capability || null,
    objective: input.objective || 'scheduled operating check',
    action: input.action || 'analyze',
    external_side_effect: Boolean(input.external_side_effect),
    risk_tags: Array.isArray(input.risk_tags) ? input.risk_tags : [],
    payload: input.payload || {},
    preferred_agent_id: input.preferred_agent_id || null,
    approved: Boolean(input.approved),
    requested_by: input.requested_by || 'nexus',
    allow_secret_reference_fields: Boolean(input.allow_secret_reference_fields),
  };
}

function scoreAgent(agent, task) {
  let score = 0;
  if (task.preferred_agent_id === agent.id) score += 1000;
  if (agent.business === task.business) score += 100;
  if (agent.business === 'shared') score += 30;
  if (task.department && agent.department === task.department) score += 60;
  if (task.workspace_type === 'northstar-client' && agent.id.startsWith('NS-')) score += 80;
  const haystack = `${agent.name} ${agent.mission} ${agent.department}`.toLowerCase();
  for (const token of `${task.capability || ''} ${task.objective}`.toLowerCase().split(/\W+/).filter(Boolean)) {
    if (haystack.includes(token)) score += 2;
  }
  return score;
}

export function routeTask(rawTask) {
  const task = normalizeTask(rawTask);
  if (task.preferred_agent_id && byId.has(task.preferred_agent_id)) {
    return { task, agent: byId.get(task.preferred_agent_id) };
  }
  const candidates = manifest.agents
    .filter((a) => a.status === 'enabled')
    .map((agent) => ({ agent, score: scoreAgent(agent, task) }))
    .sort((a, b) => b.score - a.score || a.agent.id.localeCompare(b.agent.id));
  return { task, agent: candidates[0]?.agent || byId.get('NX-002') };
}

export function authorize(agent, task) {
  const hit = task.risk_tags.filter((t) => hardGates.has(t));
  if (hit.length && !task.approved) {
    return { decision: 'approval_required', reason: `Hard gate: ${hit.join(', ')}` };
  }
  if (!task.external_side_effect) {
    return { decision: 'allowed', reason: 'Internal/read-only or non-side-effect task' };
  }
  if (agent.autonomy === 'A0') {
    return { decision: 'approval_required', reason: 'A0 agents cannot execute external side effects' };
  }
  if (agent.autonomy === 'A1' && !task.approved) {
    return { decision: 'approval_required', reason: 'A1 external write requires approval' };
  }
  if (agent.autonomy === 'A2' && !task.approved) {
    return { decision: 'allowed', reason: 'A2 bounded external action allowed because no hard gate matched' };
  }
  return { decision: 'allowed', reason: 'Explicit approval present' };
}

async function callRunner(agent, task) {
  const url = process.env.NEXUS_AGENT_RUNNER_URL;
  if (!url) {
    return {
      mode: 'dry_run',
      status: 'ready_not_executed',
      message: 'Set NEXUS_AGENT_RUNNER_URL to a model/tool runner endpoint to execute agent reasoning and tool calls.',
    };
  }

  const controller = new AbortController();
  const timeoutMs = Number(process.env.NEXUS_TASK_TIMEOUT_MS || 120000);
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(process.env.NEXUS_AGENT_RUNNER_TOKEN
          ? { authorization: `Bearer ${process.env.NEXUS_AGENT_RUNNER_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        system: manifest.system,
        agent,
        task,
        policy,
      }),
      signal: controller.signal,
    });
    const text = await response.text();
    let body;
    try { body = JSON.parse(text); } catch { body = { text }; }
    if (!response.ok) throw new Error(`Runner ${response.status}: ${text.slice(0, 500)}`);
    return { mode: 'live', status: 'executed', body };
  } finally {
    clearTimeout(timer);
  }
}

function auditRecord(agent, task, auth, result, security = null) {
  return {
    task_id: task.task_id,
    agent_id: agent.id,
    timestamp: nowIso(),
    tenant_id: task.tenant_id,
    workspace_id: task.workspace_id,
    workspace_type: task.workspace_type,
    business: task.business,
    action: task.action,
    risk_tags: task.risk_tags,
    decision: auth.decision,
    reason: auth.reason,
    security_findings: security?.issues || [],
    result_ref: result?.status || null,
  };
}

async function persistAudit(task, audit) {
  if (!storageStatus().configured || !task.tenant_id || !task.workspace_id) return { persisted: false, reason: 'state_store_unconfigured' };
  try {
    await appendAudit(task, audit);
    return { persisted: true };
  } catch (error) {
    return { persisted: false, reason: String(error?.message || error) };
  }
}

export async function execute(rawTask) {
  const { task, agent } = routeTask(rawTask);
  const security = securityPreflight(task);
  if (!security.allowed) {
    const auth = { decision: 'security_blocked', reason: security.issues.map((i) => i.code).join(', ') };
    const result = { status: 'blocked_by_security_preflight' };
    const audit = auditRecord(agent, task, auth, result, security);
    const audit_persistence = await persistAudit(task, audit);
    return { task, agent, security, authorization: auth, result, audit, audit_persistence };
  }

  const auth = authorize(agent, task);
  if (auth.decision !== 'allowed') {
    const result = { status: 'blocked_pending_approval' };
    const audit = auditRecord(agent, task, auth, result, security);
    const audit_persistence = await persistAudit(task, audit);
    return { task, agent, security, authorization: auth, result, audit, audit_persistence };
  }
  try {
    const result = await callRunner(agent, task);
    const audit = auditRecord(agent, task, auth, result, security);
    const audit_persistence = await persistAudit(task, audit);
    return { task, agent, security, authorization: auth, result, audit, audit_persistence };
  } catch (error) {
    const result = { status: 'failed', error: String(error?.message || error) };
    const audit = auditRecord(agent, task, auth, result, security);
    const audit_persistence = await persistAudit(task, audit);
    return { task, agent, security, authorization: auth, result, audit, audit_persistence };
  }
}

function dueAgents(date = new Date()) {
  const hour = date.getUTCHours();
  return manifest.agents.filter((a) => {
    if (a.status !== 'enabled') return false;
    if (a.cadence.includes('hourly')) return true;
    if (a.cadence.includes('daily') && hour === Number(process.env.NEXUS_DAILY_UTC_HOUR || 13)) return true;
    return false;
  });
}

export async function tick() {
  const due = dueAgents();
  const results = [];
  const max = Math.max(1, Math.min(Number(policy.limits.max_concurrent_agents || 8), 20));
  for (let i = 0; i < due.length; i += max) {
    const batch = due.slice(i, i + max);
    const batchResults = await Promise.all(batch.map((agent) => execute({
      preferred_agent_id: agent.id,
      business: agent.business,
      department: agent.department,
      tenant_id: 'edens-best-internal',
      workspace_id: agent.business === 'northstar' ? 'northstar-internal' : `${agent.business}-default`,
      workspace_type: 'internal-business',
      objective: `Run scheduled ${agent.cadence} operating check for ${agent.name}. Review assigned KPIs, open work, stale items, risks, and next actions. Do not perform gated actions without approval.`,
      action: 'scheduled_check',
      external_side_effect: false,
      requested_by: 'NX-010',
    })));
    results.push(...batchResults);
  }
  return { timestamp: nowIso(), due_agents: due.length, total_agents: manifest.agents.length, results };
}

export function agentRegistry() {
  return manifest.agents.map((a) => ({ id: a.id, name: a.name, business: a.business, department: a.department, autonomy: a.autonomy, status: a.status }));
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--tick')) {
    console.log(JSON.stringify(await tick(), null, 2));
    return;
  }
  if (args.includes('--registry')) {
    console.log(JSON.stringify(agentRegistry(), null, 2));
    return;
  }
  const taskArg = args.find((a) => a.startsWith('--task='));
  if (taskArg) {
    const raw = JSON.parse(taskArg.slice('--task='.length));
    console.log(JSON.stringify(await execute(raw), null, 2));
    return;
  }
  console.log(JSON.stringify({
    system: manifest.system,
    agent_count: manifest.agents.length,
    enabled: manifest.agents.filter((a) => a.status === 'enabled').length,
    storage: storageStatus(),
    usage: [
      'node nexus/orchestrator.mjs --tick',
      'node nexus/orchestrator.mjs --registry',
      `node nexus/orchestrator.mjs --task='{"business":"forge","objective":"review stale roofing leads"}'`,
    ],
  }, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
