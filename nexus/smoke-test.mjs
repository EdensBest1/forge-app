import assert from 'node:assert/strict';
import fs from 'node:fs';
import { authorize, routeTask } from './orchestrator.mjs';

const manifest = JSON.parse(fs.readFileSync(new URL('./agents.json', import.meta.url), 'utf8'));

assert.equal(manifest.agents.length, 50, 'exactly 50 agents must be defined');
assert.equal(new Set(manifest.agents.map((a) => a.id)).size, 50, 'agent IDs must be unique');
assert.ok(manifest.agents.every((a) => ['A0','A1','A2'].includes(a.autonomy)), 'autonomy level must be valid');
assert.ok(manifest.agents.every((a) => a.status === 'enabled'), 'all 50 agents should start enabled');

const routed = routeTask({ business: 'forge', department: 'vertical', objective: 'commercial roofing lead qualification' });
assert.ok(routed.agent.id.startsWith('FG-'), 'Forge task should route to Forge agent');

const financeAgent = manifest.agents.find((a) => a.id === 'REV-020');
const gated = authorize(financeAgent, {
  external_side_effect: true,
  approved: false,
  risk_tags: ['money_movement'],
});
assert.equal(gated.decision, 'approval_required');

const internal = authorize(manifest.agents.find((a) => a.id === 'NX-006'), {
  external_side_effect: false,
  approved: false,
  risk_tags: [],
});
assert.equal(internal.decision, 'allowed');

console.log('Nexus smoke test passed: 50 agents, unique IDs, routing, and hard-gate authorization verified.');
