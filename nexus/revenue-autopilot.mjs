import fs from 'node:fs/promises';
import { execute } from './orchestrator.mjs';

const WORK = [
  ['FG-031','forge','operations','Prioritize Forge revenue opportunities across commercial roofing, construction, outdoor living, property services, logistics, and payment-processing referrals. Produce ranked next actions and flag blockers.'],
  ['REV-011','forge','sales','Build and refresh the Forge prospecting work queue. Rank legitimate opportunities by estimated contract value, fit, urgency, evidence quality, and next executable action.'],
  ['REV-012','forge','sales','Enrich the highest-priority Forge opportunities using only available authorized data. Identify missing decision-maker, qualification, scope, and follow-up information.'],
  ['REV-016','forge','sales','Review the revenue queue for stale follow-ups and generate the next permitted follow-up action. Do not send messages unless an authorized connector and policy allow it.'],
  ['REV-017','forge','sales','Prepare proposal-ready briefs for qualified opportunities without inventing prices, customer facts, licenses, or commitments.'],
  ['MKT-021','northstar','marketing','Run Northstar growth planning for internal businesses and the AI Operations Workforce offer. Produce the highest-leverage organic content, social-commerce, landing-page, and client-acquisition actions available now.'],
  ['NS-056','northstar','client-operations','Maintain the Northstar AI Operations Workforce service model: isolated client workspace, intake, agent assignment, deliverables, reporting, entitlements, and approval boundaries. Keep real client data out until secure durable storage is configured.'],
  ['ST-041','stitch','operations','Run Stitch non-transactional operating review: licensed-business intelligence, buyer/seller organization, inventory analysis, COA/document workflow, follow-up queues, and compliance escalation. Never execute regulated transfers or submissions without required authorization.'],
  ['NX-001','nexus','executive','Create the Nexus executive revenue brief. Rank cross-business opportunities by cash potential, urgency, probability, next action, blocker, responsible agent, and deadline. Escalate only decisions requiring human authority.'],
  ['NX-005','nexus','quality','Audit current autonomous outputs for unsupported claims, duplicate work, missing evidence, stale tasks, and unsafe actions. Return corrections and escalation items.'],
  ['NX-053','nexus','security','Run Security Watchtower over the revenue autopilot: tenant isolation, secret leakage, approval bypass, suspicious actions, audit health, and unresolved incidents. Do not disable safeguards.']
];

function score(result) {
  const status = result?.result?.status;
  return status === 'executed' ? 3 : status === 'blocked_pending_approval' ? 2 : status === 'blocked_by_security_preflight' ? 1 : 0;
}

export async function runRevenueAutopilot() {
  const started_at = new Date().toISOString();
  const results = [];
  for (const [agent,business,department,objective] of WORK) {
    results.push(await execute({
      preferred_agent_id: agent,
      business,
      department,
      tenant_id: 'edens-best-internal',
      workspace_id: `${business}-revenue-autopilot`,
      workspace_type: 'internal-business',
      objective,
      action: 'revenue_autopilot',
      external_side_effect: false,
      requested_by: 'nexus-revenue-autopilot'
    }));
  }
  const report = {
    started_at,
    completed_at: new Date().toISOString(),
    mode: 'revenue_autopilot',
    tasks: results.length,
    executed: results.filter(r=>r?.result?.status==='executed').length,
    approvals_required: results.filter(r=>r?.result?.status==='blocked_pending_approval').length,
    security_blocked: results.filter(r=>r?.result?.status==='blocked_by_security_preflight').length,
    ranked_results: results.sort((a,b)=>score(b)-score(a)).map(r=>({agent:r.agent?.id,name:r.agent?.name,business:r.task?.business,status:r.result?.status,mode:r.result?.mode,authorization:r.authorization?.decision,body:r.result?.body||null}))
  };
  await fs.mkdir('.nexus-runtime',{recursive:true});
  await fs.writeFile('.nexus-runtime/revenue-autopilot.json', JSON.stringify(report,null,2));
  return report;
}

if (import.meta.url === `file://${process.argv[1]}`) console.log(JSON.stringify(await runRevenueAutopilot(),null,2));
