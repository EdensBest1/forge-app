import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import { execute, routeTask, authorize } from './orchestrator.mjs';

const manifest = JSON.parse(fs.readFileSync(new URL('./agents.json', import.meta.url), 'utf8'));
const policy = JSON.parse(fs.readFileSync(new URL('./approval-policy.json', import.meta.url), 'utf8'));

// 1) Every defined agent can be explicitly routed and dry-run executed.
delete process.env.NEXUS_AGENT_RUNNER_URL;
for (const agent of manifest.agents) {
  const routed = routeTask({ preferred_agent_id: agent.id, business: agent.business, department: agent.department, objective: 'readiness test' });
  assert.equal(routed.agent.id, agent.id, `explicit routing failed for ${agent.id}`);
  const run = await execute({ preferred_agent_id: agent.id, business: agent.business, department: agent.department, objective: 'readiness test', external_side_effect: false });
  assert.equal(run.result.status, 'ready_not_executed', `dry-run execution failed for ${agent.id}`);
  assert.equal(run.audit.agent_id, agent.id, `audit record mismatch for ${agent.id}`);
}

// 2) Every global hard gate blocks an unapproved external action.
const gateAgent = manifest.agents.find((a) => a.id === 'NX-002');
for (const gate of policy.hard_gates) {
  const decision = authorize(gateAgent, { external_side_effect: true, approved: false, risk_tags: [gate] });
  assert.equal(decision.decision, 'approval_required', `hard gate did not block: ${gate}`);
}

// 3) A0 and A1 external writes remain approval-gated; bounded A2 low-risk write is allowed.
for (const level of ['A0', 'A1']) {
  const agent = manifest.agents.find((a) => a.autonomy === level);
  assert.ok(agent, `missing ${level} agent`);
  const decision = authorize(agent, { external_side_effect: true, approved: false, risk_tags: [] });
  assert.equal(decision.decision, 'approval_required', `${level} external write should require approval`);
}
const a2 = manifest.agents.find((a) => a.autonomy === 'A2');
assert.equal(authorize(a2, { external_side_effect: true, approved: false, risk_tags: [] }).decision, 'allowed');

// 4) Exercise the live-runner HTTP contract end-to-end with a local authenticated mock.
const received = [];
const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => { body += chunk; });
  req.on('end', () => {
    received.push({ auth: req.headers.authorization, body: JSON.parse(body) });
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true, next_actions: ['integration-test-complete'] }));
  });
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const address = server.address();
process.env.NEXUS_AGENT_RUNNER_URL = `http://127.0.0.1:${address.port}/run`;
process.env.NEXUS_AGENT_RUNNER_TOKEN = 'test-token';
process.env.NEXUS_TASK_TIMEOUT_MS = '5000';

try {
  const live = await execute({ preferred_agent_id: 'NX-006', business: 'nexus', department: 'analytics', objective: 'integration contract test', external_side_effect: false });
  assert.equal(live.result.mode, 'live');
  assert.equal(live.result.status, 'executed');
  assert.equal(live.result.body.ok, true);
  assert.equal(received.length, 1);
  assert.equal(received[0].auth, 'Bearer test-token');
  assert.equal(received[0].body.agent.id, 'NX-006');
  assert.equal(received[0].body.system, manifest.system);
  assert.deepEqual(received[0].body.policy.hard_gates, policy.hard_gates);
} finally {
  await new Promise((resolve) => server.close(resolve));
  delete process.env.NEXUS_AGENT_RUNNER_URL;
  delete process.env.NEXUS_AGENT_RUNNER_TOKEN;
}

console.log(`Nexus integration test passed: ${manifest.agents.length}/50 agents routed and dry-run executed, ${policy.hard_gates.length} hard gates enforced, and live runner contract verified.`);
