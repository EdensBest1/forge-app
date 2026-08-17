import fs from 'node:fs/promises';
import { enterpriseProspectDatabase } from '../data/forge-enterprise-prospects.mjs';
import { forgeEmailSignature } from '../data/forge-email-signature.mjs';

function csvCell(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function flexDraft(account) {
  return {
    subject: 'Forge workforce, owner-distribution, and operating-platform discussion',
    body: `Hello Flex Partnerships Team,

I’m Andrew Oommen, founder of Forge. We are building Forge as a workforce and service-operations marketplace for blue-collar and middle-market businesses, with Nexus as the control layer for lead intake, provider qualification, CRM, scheduling, workflow tracking, evidence, and executive reporting.

I would like to explore three clearly separated opportunities with Flex:

1. An approved referral relationship through Flex’s formal partner program for eligible Forge business owners who need business-finance tools.
2. A workforce and vendor-capacity discussion for defined operational needs Flex may have as it expands. Forge would qualify any proposed workers or providers against the actual scope, location, licensing, insurance, safety, and procurement requirements before making commitments.
3. A product discussion showing how the Forge app can organize employer demand, provider onboarding, matching, dispatch, work evidence, follow-up, and account reporting for construction, wholesale, facilities, and other real-economy operators.

We are not representing that Forge is already a Flex partner, financial institution, staffing agency, employer of record, or authorized representative. I’m requesting a short discovery conversation so we can identify the correct Flex team and determine whether a controlled pilot or approved partner path is worth pursuing.

Would the partnerships, business-development, or operations team be available for a 30-minute discussion?

${forgeEmailSignature}`
  };
}

function enterpriseDraft(account) {
  return {
    subject: `A controlled workforce + Forge app pilot for ${account.company}`,
    body: `Hello ${account.company} Team,

I’m Andrew Oommen, founder of Forge. Forge is being built to help businesses source and coordinate qualified blue-collar workers and service providers through one controlled operating workflow.

Based on ${account.company}’s operating footprint, a potential area to evaluate is ${account.potential_workforce_or_service_demand.toLowerCase()}.

The Forge model is not a promise of unverified labor. It begins with a defined scope and then applies the requirements that matter: geography, trade, license or certification, insurance, worker classification, safety, availability, schedule, rate structure, background requirements where lawful, and procurement approval.

The Forge app is designed to give an employer one place for:

• workforce or service-demand intake;
• provider and worker qualification records;
• controlled matching and invitation;
• scheduling, dispatch, and backup coverage;
• work orders, documents, status, and proof of completion;
• CRM follow-up, performance reporting, and account expansion.

I would like to start with one region, one recurring service category, or one project-specific workforce bottleneck—not a broad commitment. Would someone in operations, facilities, procurement, construction, vendor management, or workforce planning be available for a 20-minute discovery call?

${forgeEmailSignature}`
  };
}

function contactFormMessage(account) {
  return `Forge would like to discuss a controlled workforce and service-operations pilot for ${account.company}. Potential scope: ${account.potential_workforce_or_service_demand}. Forge can demonstrate employer intake, qualification controls, provider matching, scheduling, work evidence, CRM follow-up, and reporting through the Forge app. Please route this request to operations, facilities, procurement, workforce planning, construction, or vendor management. No worker availability, pricing, or partnership is being represented until scope and compliance requirements are reviewed.`;
}

export function buildEnterpriseOutreachQueue() {
  return enterpriseProspectDatabase.accounts.map((account) => {
    const draft = account.company === 'Flex' ? flexDraft(account) : enterpriseDraft(account);
    const verifiedEmail = account.contact_verification_status === 'Verified public contact' && account.public_business_email;
    return {
      account_id: account.account_id,
      company: account.company,
      segment: account.segment,
      geography: account.geography,
      priority: account.priority,
      official_source_url: account.official_source_url,
      public_business_email: account.public_business_email,
      public_business_phone: account.public_business_phone,
      contact_verification_status: account.contact_verification_status,
      channel: verifiedEmail ? 'business_email' : 'official_contact_route',
      subject: draft.subject,
      email_body: draft.body,
      contact_form_message: contactFormMessage(account),
      status: verifiedEmail ? 'ready_for_human_approval' : 'contact_research_required',
      send_status: 'not_sent',
      human_approval_required: true,
      suppression_check_required: true,
      legal_review_required_for_custom_terms: true
    };
  });
}

export async function writeEnterpriseOutreachQueue() {
  const queue = buildEnterpriseOutreachQueue();
  await fs.mkdir('.nexus-runtime', { recursive: true });
  await fs.writeFile('.nexus-runtime/forge-enterprise-email-drafts.json', JSON.stringify(queue, null, 2));

  const fields = [
    'account_id',
    'company',
    'segment',
    'geography',
    'priority',
    'official_source_url',
    'public_business_email',
    'public_business_phone',
    'contact_verification_status',
    'channel',
    'subject',
    'status',
    'send_status'
  ];
  const csv = [
    fields.join(','),
    ...queue.map((row) => fields.map((field) => csvCell(row[field])).join(','))
  ].join('\n');
  await fs.writeFile('.nexus-runtime/forge-enterprise-outreach-queue.csv', `${csv}\n`);

  return {
    generated_at: new Date().toISOString(),
    records: queue.length,
    ready_for_human_approval: queue.filter((row) => row.status === 'ready_for_human_approval').length,
    contact_research_required: queue.filter((row) => row.status === 'contact_research_required').length,
    messages_sent: 0,
    files: [
      '.nexus-runtime/forge-enterprise-email-drafts.json',
      '.nexus-runtime/forge-enterprise-outreach-queue.csv'
    ]
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(await writeEnterpriseOutreachQueue(), null, 2));
}
