import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { agentRegistry } from './orchestrator.mjs';
import { enterpriseProspectDatabase } from '../data/forge-enterprise-prospects.mjs';

const assignments = JSON.parse(
  await fs.readFile(new URL('forge-enterprise-assignments.json', import.meta.url), 'utf8')
);
const registry = agentRegistry().filter((agent) => agent.status === 'enabled');

assert.equal(registry.length, 60, 'Nexus must expose exactly 60 enabled agents for this campaign');
assert.equal(assignments.assignments.length, 60, 'Every enabled agent must receive one launch assignment');
assert.equal(enterpriseProspectDatabase.accounts.length, 60, 'Enterprise seed database must contain 60 accounts');

const registryIds = new Set(registry.map((agent) => agent.id));
const assignmentIds = assignments.assignments.map((assignment) => assignment.agent_id);
const assignmentAccountIds = assignments.assignments.map((assignment) => assignment.initial_account_id);
const accountIds = new Set(enterpriseProspectDatabase.accounts.map((account) => account.account_id));

assert.equal(new Set(assignmentIds).size, 60, 'Agent assignments must be unique');
assert.equal(new Set(assignmentAccountIds).size, 60, 'Initial account assignments must be unique');
assert.deepEqual(new Set(assignmentIds), registryIds, 'Assignment manifest must cover the complete enabled registry');
for (const accountId of assignmentAccountIds) {
  assert.ok(accountIds.has(accountId), `Missing prospect record for ${accountId}`);
}

for (const account of enterpriseProspectDatabase.accounts) {
  assert.match(account.account_id, /^ENT-\d{3}$/);
  assert.ok(account.company);
  assert.ok(account.segment);
  assert.ok(account.geography);
  assert.ok(account.potential_workforce_or_service_demand);
  assert.ok(account.forge_pitch_angle);
  assert.match(account.official_source_url, /^https:\/\//);
  assert.ok(['Verified public contact', 'Contact route to verify'].includes(account.contact_verification_status));
  assert.ok(['Priority 1', 'Priority 2', 'Priority 3'].includes(account.priority));
}

const flex = enterpriseProspectDatabase.accounts.find((account) => account.company === 'Flex');
assert.ok(flex, 'Flex must be present as the strategic channel account');
assert.equal(flex.contact_verification_status, 'Verified public contact');
assert.ok(flex.public_business_email);
assert.ok(flex.public_business_phone);

console.log(
  JSON.stringify(
    {
      ok: true,
      enabled_agents: registry.length,
      assignments: assignments.assignments.length,
      seed_accounts: enterpriseProspectDatabase.accounts.length,
      verified_public_contacts: enterpriseProspectDatabase.accounts.filter(
        (account) => account.contact_verification_status === 'Verified public contact'
      ).length
    },
    null,
    2
  )
);
