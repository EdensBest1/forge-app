import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execute } from '../orchestrator.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const NEXUS_ROOT = path.resolve(HERE, '..');
const REPO_ROOT = path.resolve(NEXUS_ROOT, '..');
const RUNTIME_DIR = path.join(REPO_ROOT, '.nexus-runtime');

const core = JSON.parse(await fs.readFile(path.join(NEXUS_ROOT, 'agents.json'), 'utf8'));
const extension = JSON.parse(await fs.readFile(path.join(NEXUS_ROOT, 'agents-extension.json'), 'utf8'));
const agents = [...core.agents, ...extension.agents];

if (agents.length !== 60) {
  throw new Error(`Expected the complete 60-agent Nexus registry; found ${agents.length}`);
}

const CAMPAIGN = Object.freeze({
  id: 'forge-enterprise-2026-08',
  name: 'Forge 60-Agent Enterprise Workforce + App Campaign',
  owner: 'Andrew Oommen',
  workspace_id: 'forge-enterprise-campaign-2026-08',
  target_database: 'data/forge-enterprise-targets-2026-08.csv',
  positioning: [
    'Build a source-grounded enterprise target database.',
    'Discover actual workforce and service demand before recruiting or promising capacity.',
    'Pitch Forge as a controlled beta for intake, CRM, provider proof, dispatch proposals, follow-up, and reporting.',
    'Treat the 60 agents as AI/workflow agents, never as human worker headcount.',
    'Keep Flex (flex.one) referral strategy separate from Flex Ltd. manufacturing and infrastructure outreach.',
  ],
  external_action_policy:
    'Prepare, research, classify, draft, QA, and update internal records only. External messages, staffing commitments, pricing, contracts, employment actions, regulated cannabis actions, and bulk messaging require a separate human-approved task.',
});

function campaignObjective(agent) {
  return [
    `Execute the internal preparation phase of ${CAMPAIGN.name}.`,
    `Agent role: ${agent.name}.`,
    `Agent mission: ${agent.mission}.`,
    ...CAMPAIGN.positioning,
    CAMPAIGN.external_action_policy,
    'Return a structured result with completed work, source references, blockers, approval needs, measurable next actions, and the CRM records that should be created or updated.',
  ].join(' ');
}

async function runWithConcurrency(items, limit, worker) {
  const results = [];
  for (let index = 0; index < items.length; index += limit) {
    const batch = items.slice(index, index + limit);
    const completed = await Promise.all(batch.map(worker));
    results.push(...completed);
  }
  return results;
}

const concurrencyArg = process.argv.find((arg) => arg.startsWith('--concurrency='));
const concurrency = Math.max(1, Math.min(Number(concurrencyArg?.split('=')[1] || 8), 20));
const startedAt = new Date().toISOString();

const results = await runWithConcurrency(agents, concurrency, (agent) =>
  execute({
    preferred_agent_id: agent.id,
    business: agent.business,
    department: agent.department,
    tenant_id: 'edens-best-internal',
    workspace_id: CAMPAIGN.workspace_id,
    workspace_type: 'internal-business',
    objective: campaignObjective(agent),
    action: 'forge_enterprise_campaign_prepare',
    external_side_effect: false,
    risk_tags: [],
    payload: CAMPAIGN,
    requested_by: CAMPAIGN.owner,
    approved: false,
  }),
);

const summary = {
  campaign_id: CAMPAIGN.id,
  started_at: startedAt,
  completed_at: new Date().toISOString(),
  agents_requested: agents.length,
  agents_executed: results.filter((row) => row.result?.status === 'executed').length,
  blocked: results.filter((row) => String(row.result?.status || '').startsWith('blocked_')).length,
  failed: results.filter((row) => row.result?.status === 'failed').length,
  live_runner: Boolean(process.env.NEXUS_AGENT_RUNNER_URL),
  external_side_effects_requested: false,
};

await fs.mkdir(RUNTIME_DIR, { recursive: true });
const outputPath = path.join(RUNTIME_DIR, `${CAMPAIGN.id}-${Date.now()}.json`);
await fs.writeFile(outputPath, JSON.stringify({ summary, results }, null, 2), {
  encoding: 'utf8',
  mode: 0o600,
});

console.log(JSON.stringify({ ...summary, output: path.relative(REPO_ROOT, outputPath) }, null, 2));
