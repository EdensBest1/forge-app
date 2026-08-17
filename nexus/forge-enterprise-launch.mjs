import fs from 'node:fs/promises';
import { execute, agentRegistry } from './orchestrator.mjs';
import { enterpriseProspectDatabase } from '../data/forge-enterprise-prospects.mjs';

const ROOT = new URL('./', import.meta.url);
const assignmentsPath = new URL('forge-enterprise-assignments.json', ROOT);

function nowIso() {
  return new Date().toISOString();
}

function resultRank(result) {
  const status = result?.result?.status;
  if (status === 'executed') return 4;
  if (status === 'blocked_pending_approval') return 3;
  if (status === 'blocked_by_security_preflight') return 2;
  if (status === 'failed') return 1;
  return 0;
}

function assertCampaignIntegrity(registry, manifest, database) {
  const enabled = registry.filter((agent) => agent.status === 'enabled');
  const ids = new Set(enabled.map((agent) => agent.id));
  const assignmentIds = manifest.assignments.map((assignment) => assignment.agent_id);
  const accountIds = database.accounts.map((account) => account.account_id);
  const problems = [];

  if (enabled.length !== 60) problems.push(`Expected 60 enabled agents; found ${enabled.length}.`);
  if (manifest.assignments.length !== 60) problems.push(`Expected 60 assignments; found ${manifest.assignments.length}.`);
  if (new Set(assignmentIds).size !== 60) problems.push('Duplicate agent assignments detected.');
  if (database.accounts.length !== 60) problems.push(`Expected 60 seed accounts; found ${database.accounts.length}.`);
  if (new Set(accountIds).size !== 60) problems.push('Duplicate enterprise account IDs detected.');

  const missingAgents = assignmentIds.filter((id) => !ids.has(id));
  if (missingAgents.length) problems.push(`Assignments reference missing or disabled agents: ${missingAgents.join(', ')}`);

  const missingAssignments = [...ids].filter((id) => !assignmentIds.includes(id));
  if (missingAssignments.length) problems.push(`Enabled agents without assignments: ${missingAssignments.join(', ')}`);

  if (problems.length) throw new Error(`Forge enterprise campaign integrity check failed:\n- ${problems.join('\n- ')}`);
}

function buildObjective(agent, account) {
  return [
    `Forge Enterprise Workforce + App Launch assignment for ${agent.name}.`,
    `Use the agent mission and ${agent.department} capability to research, organize, draft, measure, or govern the assigned account.`,
    `Initial account: ${account.company} (${account.segment}; ${account.geography}).`,
    `Potential demand hypothesis: ${account.potential_workforce_or_service_demand}.`,
    `Pitch angle: ${account.forge_pitch_angle}`,
    'Use public business information only. Never infer private contact details, current openings, procurement approval, or worker availability.',
    'Do not send external communications. Prepare evidence-backed database updates, drafts, next actions, and human-approval items only.'
  ].join(' ');
}

function buildOutreachQueue(database) {
  return database.accounts
    .filter((account) => account.contact_verification_status === 'Verified public contact')
    .map((account) => ({
      account_id: account.account_id,
      company: account.company,
      public_business_email: account.public_business_email,
      public_business_phone: account.public_business_phone,
      official_source_url: account.official_source_url,
      status: 'draft_ready_pending_human_approval',
      approval_required: true,
      suppression_check_required: true,
      message_type: account.company === 'Flex'
        ? 'strategic_channel_and_workforce_partnership'
        : 'enterprise_workforce_and_forge_app_pilot'
    }));
}

export async function runForgeEnterpriseLaunch() {
  const startedAt = nowIso();
  const manifest = await fs.readFile(assignmentsPath, 'utf8').then(JSON.parse);
  const database = enterpriseProspectDatabase;
  const registry = agentRegistry();
  assertCampaignIntegrity(registry, manifest, database);

  const agentsById = new Map(registry.map((agent) => [agent.id, agent]));
  const accountsById = new Map(database.accounts.map((account) => [account.account_id, account]));
  const results = [];

  for (const assignment of manifest.assignments) {
    const agent = agentsById.get(assignment.agent_id);
    const account = accountsById.get(assignment.initial_account_id);
    results.push(await execute({
      preferred_agent_id: agent.id,
      business: agent.business,
      department: agent.department,
      tenant_id: 'edens-best-internal',
      workspace_id: 'forge-enterprise-launch',
      workspace_type: 'internal-business',
      capability: 'enterprise_workforce_and_app_launch',
      objective: buildObjective(agent, account),
      action: 'forge_enterprise_campaign',
      external_side_effect: false,
      approved: false,
      requested_by: 'NX-002',
      payload: {
        campaign: manifest.campaign,
        account_id: account.account_id,
        company: account.company,
        segment: account.segment,
        geography: account.geography,
        official_source_url: account.official_source_url,
        contact_verification_status: account.contact_verification_status,
        priority: account.priority
      }
    }));
  }

  const outreachQueue = buildOutreachQueue(database);
  const report = {
    campaign: manifest.campaign,
    started_at: startedAt,
    completed_at: nowIso(),
    mode: 'internal_campaign_launch',
    external_messages_sent: 0,
    external_outreach_gate: manifest.external_outreach_gate,
    agents_registered: registry.length,
    assignments_dispatched: results.length,
    seed_accounts: database.accounts.length,
    verified_public_contact_records: outreachQueue.length,
    research_required_records: database.accounts.filter((account) => account.contact_verification_status !== 'Verified public contact').length,
    executed: results.filter((result) => result?.result?.status === 'executed').length,
    approvals_required: results.filter((result) => result?.result?.status === 'blocked_pending_approval').length,
    security_blocked: results.filter((result) => result?.result?.status === 'blocked_by_security_preflight').length,
    failed: results.filter((result) => result?.result?.status === 'failed').length,
    outreach_queue: outreachQueue,
    ranked_results: results
      .sort((a, b) => resultRank(b) - resultRank(a))
      .map((result) => ({
        agent_id: result.agent?.id,
        agent_name: result.agent?.name,
        business: result.task?.business,
        account_id: result.task?.payload?.account_id,
        company: result.task?.payload?.company,
        status: result.result?.status,
        authorization: result.authorization?.decision,
        runner_mode: result.result?.mode,
        output: result.result?.body || null
      }))
  };

  await fs.mkdir('.nexus-runtime', { recursive: true });
  await Promise.all([
    fs.writeFile('.nexus-runtime/forge-enterprise-launch.json', JSON.stringify(report, null, 2)),
    fs.writeFile('.nexus-runtime/forge-enterprise-outreach-queue.json', JSON.stringify(outreachQueue, null, 2))
  ]);
  return report;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(await runForgeEnterpriseLaunch(), null, 2));
}
