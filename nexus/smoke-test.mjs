import assert from 'node:assert/strict';
import fs from 'node:fs';
import { authorize, routeTask, agentRegistry } from './orchestrator.mjs';
import { securityPreflight } from './security-watch.mjs';

const core = JSON.parse(fs.readFileSync(new URL('./agents.json', import.meta.url), 'utf8'));
const ext = JSON.parse(fs.readFileSync(new URL('./agents-extension.json', import.meta.url), 'utf8'));
const agents = [...core.agents, ...ext.agents];

assert.equal(agents.length, 60, 'exactly 60 agents must be defined');
assert.equal(new Set(agents.map((a) => a.id)).size, 60, 'agent IDs must be unique');
assert.ok(agents.every((a) => ['A0','A1','A2'].includes(a.autonomy)), 'autonomy level must be valid');
assert.ok(agents.every((a) => a.status === 'enabled'), 'all 60 agents should start enabled');
assert.equal(agentRegistry().length, 60, 'registry should expose all 60 agents');

const routed = routeTask({ business: 'forge', department: 'vertical', objective: 'commercial roofing lead qualification' });
assert.ok(routed.agent.id.startsWith('FG-'), 'Forge task should route to Forge agent');

const clientRouted = routeTask({
  business: 'northstar',
  workspace_type: 'northstar-client',
  tenant_id: 'client-a',
  workspace_id: 'campaign-1',
  department: 'client-operations',
  objective: 'manage client project milestones'
});
assert.ok(clientRouted.agent.id.startsWith('NS-'), 'client task should prefer Northstar client agent');

const financeAgent = agents.find((a) => a.id === 'REV-020');
const gated = authorize(financeAgent, {
  external_side_effect: true,
  approved: false,
  risk_tags: ['money_movement'],
});
assert.equal(gated.decision, 'approval_required');

const internal = authorize(agents.find((a) => a.id === 'NX-006'), {
  external_side_effect: false,
  approved: false,
  risk_tags: [],
});
assert.equal(internal.decision, 'allowed');

const crossTenant = securityPreflight({
  workspace_type: 'northstar-client',
  tenant_id: 'client-a',
  workspace_id: 'project-1',
  source_tenant_id: 'client-b',
  payload: {}
});
assert.equal(crossTenant.allowed, false, 'cross-tenant access must be blocked');
assert.ok(crossTenant.issues.some((i) => i.code === 'CROSS_TENANT_ACCESS'));

const safeClient = securityPreflight({
  workspace_type: 'northstar-client',
  tenant_id: 'client-a',
  workspace_id: 'project-1',
  payload: { brief: 'create a campaign plan' }
});
assert.equal(safeClient.allowed, true, 'properly scoped client task should pass security preflight');

console.log('Nexus smoke test passed: 60 agents, client routing, hard gates, and tenant isolation verified.');
