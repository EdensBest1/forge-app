import crypto from 'node:crypto';

function summarizePayload(payload = {}) {
  const keys = Object.keys(payload || {}).slice(0, 20);
  return { field_count: keys.length, fields: keys };
}

function securitySignals(task) {
  const findings = [];
  const text = `${task.objective || ''} ${task.action || ''}`.toLowerCase();
  if (/password|secret|api[_ -]?key|token|private key/.test(text)) findings.push('sensitive-language-detected');
  if (task.external_side_effect) findings.push('external-side-effect-requested');
  if ((task.risk_tags || []).length) findings.push(...task.risk_tags.map((x) => `risk:${x}`));
  return findings;
}

function nextActions(agent, task) {
  const actions = [];
  if (task.action === 'scheduled_check') {
    actions.push('review-current-queue', 'inspect-stale-work', 'review-kpis', 'surface-blockers');
  } else {
    actions.push('validate-inputs', 'produce-structured-output', 'record-audit-result');
  }
  if (agent.department === 'security') actions.push('review-security-findings', 'verify-tenant-boundary');
  if (agent.department === 'sales' || agent.department === 'revenue') actions.push('identify-next-safe-follow-up');
  if (agent.department === 'marketing') actions.push('prepare-next-content-or-campaign-action');
  if (task.workspace_type === 'northstar-client') actions.push('preserve-client-isolation');
  return [...new Set(actions)];
}

export async function runEmbedded({ system, agent, task, policy }) {
  const signals = securitySignals(task);
  const requiresHuman = (task.risk_tags || []).some((tag) => (policy.hard_gates || []).includes(tag));
  return {
    runner: 'nexus-embedded-zero-cost-v1',
    run_id: `run_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`,
    system,
    agent_id: agent.id,
    agent_name: agent.name,
    tenant_id: task.tenant_id,
    workspace_id: task.workspace_id,
    objective: task.objective,
    status: requiresHuman ? 'analysis_complete_human_gate_preserved' : 'analysis_complete',
    summary: `${agent.name} completed a deterministic zero-cost operating pass for ${task.objective}.`,
    payload_summary: summarizePayload(task.payload),
    security_signals: signals,
    next_actions: nextActions(agent, task),
    limitations: [
      'No paid model inference was used.',
      'No third-party system was changed unless a separately configured authorized connector executed it.',
      'Human approval gates remain authoritative.'
    ]
  };
}
