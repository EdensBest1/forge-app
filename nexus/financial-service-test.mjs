import assert from 'node:assert/strict';
import {
  financialServicePolicy,
  financialServiceProfiles,
  routeFinancialServiceTask
} from './financial-service-router.mjs';

assert.equal(financialServiceProfiles.registry_type, 'product_service_profiles');
assert.equal(financialServiceProfiles.workforce_count_contract, 60);
assert.equal(financialServiceProfiles.workforce_agent_delta, 0);
assert.equal(financialServiceProfiles.profiles.length, 2);
assert.equal(financialServicePolicy.external_effects_enabled, false);
assert.deepEqual(
  financialServicePolicy.security.allowed_reference_field_suffixes,
  ['_ref', '_refs']
);
assert.deepEqual(financialServicePolicy.security.allowed_reference_prefixes, ['vault://']);
const UUID_A = '550e8400-e29b-41d4-a716-446655440000';
const UUID_B = '6ba7b810-9dad-41d1-80b4-00c04fd430c8';
const UUID_C = '6ba7b811-9dad-41d1-80b4-00c04fd430c8';
const vaultRef = (namespace, id = UUID_A) => `vault://${namespace}/${id}`;
const decisionCounts = { allowed_draft_only: 0, approval_required: 0, denied: 0 };
for (const profile of financialServiceProfiles.profiles) {
  assert.equal(profile.commercialization.public_launch_status, 'information_only_no_public_intake');
  assert.equal(profile.commercialization.public_information_only, true);
  assert.equal(profile.commercialization.public_intake_enabled, false);
  assert.equal(profile.commercialization.paid_service_enabled, false);
}
const creditProfile = financialServiceProfiles.profiles.find((profile) => profile.service === 'credit_improvement');
assert.equal(creditProfile.allowed_actions.includes('draft_evidence_based_dispute'), false);
assert.equal(creditProfile.design_only_actions.includes('draft_evidence_based_dispute'), true);

function route(task) {
  const result = routeFinancialServiceTask({
    task_id: `test-${task.action}`,
    tenant_id: 'test-tenant',
    workspace_id: 'test-workspace',
    deployment_scope: 'personal_self_help',
    payload: { case_ref: vaultRef('cases') },
    ...task
  });
  decisionCounts[result.decision] += 1;
  assert.equal(result.external_effects_executed, false);
  assert.equal(result.public_intake_authorized, false);
  assert.equal(result.public_commercialization_authorized, false);
  assert.equal(result.production_security_authorized, false);
  assert.equal(result.audit_event.external_effects_executed, false);
  assert.equal(result.audit_event.policy_version, financialServicePolicy.version);
  assert.match(result.audit_event.input_hash, /^[a-f0-9]{64}$/);
  return result;
}

function routeRaw(task) {
  const result = routeFinancialServiceTask(task);
  decisionCounts[result.decision] += 1;
  assert.equal(result.external_effects_executed, false);
  assert.equal(result.public_intake_authorized, false);
  assert.equal(result.public_commercialization_authorized, false);
  assert.equal(result.production_security_authorized, false);
  return result;
}

const blockedCreditDraft = route({
  service: 'credit_improvement',
  action: 'draft_evidence_based_dispute',
  objective: 'Draft a factual discrepancy letter based only on verified evidence.',
  payload: {
    case_ref: vaultRef('cases'),
    evidence_refs: [vaultRef('evidence', UUID_B), vaultRef('evidence', UUID_C)],
    facts_attested: true
  }
});
assert.equal(blockedCreditDraft.decision, 'denied');
assert.ok(blockedCreditDraft.reason_codes.includes('CREDIT_CORRESPONDENCE_TRUSTED_ADAPTER_REQUIRED'));
assert.equal(blockedCreditDraft.profile_id, 'FS-CREDIT-001');

const disputeWithoutEvidence = route({
  service: 'credit_improvement',
  action: 'draft_evidence_based_dispute',
  objective: 'Draft a specific dispute without a verified evidence reference.'
});
assert.equal(disputeWithoutEvidence.decision, 'denied');
assert.ok(disputeWithoutEvidence.reason_codes.includes('CREDIT_CORRESPONDENCE_TRUSTED_ADAPTER_REQUIRED'));

const safeAccounting = route({
  service: 'accounting_tax_readiness',
  action: 'reconcile_accounts',
  objective: 'Prepare a read-only reconciliation and exception list.'
});
assert.equal(safeAccounting.decision, 'allowed_draft_only');
assert.equal(safeAccounting.status, 'routed');
assert.equal(safeAccounting.profile_id, 'FS-ACCOUNTING-001');

const inferredAccounting = route({
  action: 'prepare_tax_organizer',
  objective: 'Organize source document references for professional review.'
});
assert.equal(inferredAccounting.service, 'accounting_tax_readiness');
assert.equal(inferredAccounting.decision, 'allowed_draft_only');

const safeSensitiveReferences = route({
  service: 'credit_improvement',
  action: 'inventory_credit_reports',
  objective: 'Inventory protected report references without exposing identifiers.',
  payload: {
    case_ref: vaultRef('cases'),
    ssn_ref: vaultRef('identity', UUID_B),
    credit_report_refs: [vaultRef('credit-reports', UUID_C)]
  }
});
assert.equal(safeSensitiveReferences.decision, 'allowed_draft_only');

const approvalCases = [
  {
    service: 'credit_improvement',
    action: 'email_creditor',
    objective: 'Prepare an evidence-based creditor email for owner approval.'
  },
  {
    service: 'credit_improvement',
    action: 'connect_email_account',
    objective: 'Request connection of an email account.'
  },
  {
    service: 'credit_improvement',
    action: 'share_pii',
    objective: 'Share a case with an authorized professional after consent.'
  },
  {
    service: 'credit_improvement',
    action: 'accept_settlement',
    objective: 'Present a settlement for owner and professional review.'
  },
  {
    service: 'accounting_tax_readiness',
    action: 'post_journal_entry',
    objective: 'Queue a journal entry for authorized bookkeeper review.'
  },
  {
    service: 'accounting_tax_readiness',
    action: 'prepare_tax_filing',
    objective: 'Prepare a tax filing for licensed professional review and approval.'
  }
];

for (const task of approvalCases) {
  const result = route(task);
  assert.equal(result.decision, 'approval_required', `${task.action} must require approval`);
  assert.equal(result.status, 'blocked_pending_human_execution');
  assert.equal(result.approval_required, true);
}

const approvedStillNoEffect = route({
  service: 'credit_improvement',
  action: 'email_creditor',
  approved: true,
  external_side_effect: true,
  objective: 'Queue an approved evidence-based draft for separate human execution.'
});
assert.equal(approvedStillNoEffect.decision, 'approval_required');
assert.equal(approvedStillNoEffect.approval_present, true);
assert.equal(approvedStillNoEffect.external_effects_executed, false);

const deniedCases = [
  {
    service: 'credit_improvement',
    action: 'dispute_all_accounts',
    objective: 'Dispute everything whether it is correct or not.',
    reason: 'CREDIT_FALSE_OR_BLANKET_DISPUTE'
  },
  {
    service: 'credit_improvement',
    action: 'create_cpn',
    objective: 'Create a CPN and a new credit profile.',
    reason: 'CREDIT_CPN_OR_SYNTHETIC_IDENTITY'
  },
  {
    service: 'credit_improvement',
    action: 'create_synthetic_identity',
    objective: 'Build a synthetic identity.',
    reason: 'CREDIT_CPN_OR_SYNTHETIC_IDENTITY'
  },
  {
    service: 'credit_improvement',
    action: 'file_false_identity_theft_claim',
    objective: 'Submit a fake identity theft claim.',
    reason: 'CREDIT_FALSE_IDENTITY_THEFT_CLAIM'
  },
  {
    service: 'credit_improvement',
    action: 'remove_accurate_information',
    objective: 'Remove accurate information from a report.',
    reason: 'CREDIT_ACCURATE_INFORMATION_REMOVAL'
  },
  {
    service: 'accounting_tax_readiness',
    action: 'submit_tax_return',
    objective: 'Submit the tax return directly.',
    reason: 'TAX_AUTONOMOUS_FILING_PAYMENT_OR_REPRESENTATION'
  },
  {
    service: 'accounting_tax_readiness',
    action: 'make_tax_payment',
    objective: 'Make the IRS tax payment.',
    reason: 'TAX_AUTONOMOUS_FILING_PAYMENT_OR_REPRESENTATION'
  },
  {
    service: 'accounting_tax_readiness',
    action: 'represent_before_tax_authority',
    objective: 'Represent me before the IRS.',
    reason: 'TAX_AUTONOMOUS_FILING_PAYMENT_OR_REPRESENTATION'
  }
];

for (const task of deniedCases) {
  const result = route(task);
  assert.equal(result.decision, 'denied', `${task.action} must be denied`);
  assert.ok(result.reason_codes.includes(task.reason), `${task.action} must cite ${task.reason}`);
}

const commercialization = route({
  service: 'credit_improvement',
  action: 'launch_credit_service',
  deployment_scope: 'public_paid_service',
  objective: 'Publicly launch the credit improvement service.'
});
assert.equal(commercialization.decision, 'denied');
assert.ok(commercialization.reason_codes.includes('CREDIT_PUBLIC_COMMERCIALIZATION_BLOCKED'));

const paidCreditEuphemism = route({
  service: 'credit_improvement',
  action: 'educate_credit_factors',
  deployment_scope: 'internal',
  objective: 'Offer paid credit repair to consumers.'
});
assert.equal(paidCreditEuphemism.decision, 'denied');
assert.ok(paidCreditEuphemism.reason_codes.includes('CREDIT_PUBLIC_COMMERCIALIZATION_BLOCKED'));

const blanketChallengeEuphemism = route({
  service: 'credit_improvement',
  action: 'classify_report_discrepancy',
  objective: 'Write challenges for all tradelines without evidence.',
  payload: { case_ref: vaultRef('cases') }
});
assert.equal(blanketChallengeEuphemism.decision, 'denied');
assert.ok(blanketChallengeEuphemism.reason_codes.includes('CREDIT_FALSE_OR_BLANKET_DISPUTE'));

const disputeParaphrases = [
  'Draft challenges for each tradeline regardless of accuracy.',
  'Contest the full file even if entries are correct.',
  'Prepare disputes across the report with no supporting documents.',
  'Challenge the complete tradeline set irrespective of proof.'
];
for (const objective of disputeParaphrases) {
  const result = route({
    service: 'credit_improvement',
    action: 'classify_report_discrepancy',
    objective
  });
  assert.equal(result.decision, 'denied', `must deny: ${objective}`);
  assert.ok(
    result.reason_codes.includes('CREDIT_FALSE_OR_BLANKET_DISPUTE') ||
      result.reason_codes.includes('CREDIT_ACCURATE_INFORMATION_REMOVAL'),
    `must cite a credit dispute prohibition: ${objective}`
  );
}

const commercialParaphrases = [
  'Charge consumers monthly to improve their scores.',
  'Sell score-improvement subscriptions to consumers.',
  'Enroll households in a monthly score optimization program.',
  'Charge consumers a monthly fee and guarantee a 100 point score increase.'
];
for (const objective of commercialParaphrases) {
  const result = route({
    service: 'credit_improvement',
    deployment_scope: 'internal',
    action: 'educate_credit_factors',
    objective
  });
  assert.equal(result.decision, 'denied', `must deny commercial intent: ${objective}`);
  assert.ok(
    result.reason_codes.includes('CREDIT_GUARANTEE_OR_COMMERCIAL_OFFER') ||
      result.reason_codes.includes('CREDIT_PUBLIC_COMMERCIALIZATION_BLOCKED'),
    `must cite a commercialization prohibition: ${objective}`
  );
}

const accountingPublicIntake = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  deployment_scope: 'public',
  objective: 'Collect accounting documents through public intake.'
});
assert.equal(accountingPublicIntake.decision, 'denied');
assert.ok(accountingPublicIntake.reason_codes.includes('PUBLIC_FINANCIAL_INTAKE_BLOCKED'));

const publicBankStatementIntake = route({
  service: 'accounting_tax_readiness',
  deployment_scope: 'internal',
  action: 'organize_financial_documents',
  objective: 'Gather bank statements from consumers through our website.'
});
assert.equal(publicBankStatementIntake.decision, 'denied');
assert.ok(publicBankStatementIntake.reason_codes.includes('PUBLIC_FINANCIAL_INTAKE_BLOCKED'));

const publicSiteAlias = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  deployment_scope: 'public_site',
  objective: 'Organize documents.'
});
assert.equal(publicSiteAlias.decision, 'denied');
assert.ok(publicSiteAlias.reason_codes.includes('DEPLOYMENT_SCOPE_NOT_ALLOWED'));

const conflictingScopes = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  deployment_scope: 'internal',
  audience: 'public',
  objective: 'Organize documents for a public intake.'
});
assert.equal(conflictingScopes.decision, 'denied');
assert.ok(conflictingScopes.reason_codes.includes('PUBLIC_FINANCIAL_INTAKE_BLOCKED'));

const missingScope = routeRaw({
  task_id: 'missing-scope-task',
  tenant_id: 'test-tenant',
  workspace_id: 'test-workspace',
  service: 'accounting_tax_readiness',
  action: 'reconcile_accounts',
  payload: { case_ref: vaultRef('cases') }
});
assert.equal(missingScope.decision, 'denied');
assert.ok(missingScope.reason_codes.includes('DEPLOYMENT_SCOPE_REQUIRED'));

const sensitiveField = route({
  service: 'credit_improvement',
  action: 'inventory_credit_reports',
  payload: { applicant: { ssn: 'not-returned-or-processed' } }
});
assert.equal(sensitiveField.decision, 'denied');
assert.ok(sensitiveField.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));
assert.equal(JSON.stringify(sensitiveField).includes('not-returned-or-processed'), false);

const sensitiveValue = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: { notes: 'Sensitive identifier 123-45-6789 must not be inline.' }
});
assert.equal(sensitiveValue.decision, 'denied');
assert.ok(sensitiveValue.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));

const sensitiveObjective = route({
  service: 'credit_improvement',
  action: 'draft_evidence_based_dispute',
  objective: 'Draft a letter for 123-45-6789 using only verified evidence.'
});
assert.equal(sensitiveObjective.decision, 'denied');
assert.ok(sensitiveObjective.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));
assert.equal(JSON.stringify(sensitiveObjective).includes('123-45-6789'), false);

const unformattedSensitiveValue = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: { notes: 'Unformatted identifier 123456789 must not be inline.' }
});
assert.equal(unformattedSensitiveValue.decision, 'denied');
assert.ok(unformattedSensitiveValue.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));

const sensitiveNumericValues = [123456789, 1234567890, 123456789012, 5415551212];
for (const rawValue of sensitiveNumericValues) {
  const result = route({
    service: 'accounting_tax_readiness',
    action: 'organize_financial_documents',
    payload: { notes: rawValue }
  });
  assert.equal(result.decision, 'denied');
  assert.ok(result.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));
  assert.equal(JSON.stringify(result).includes(String(rawValue)), false);
}

const unsupportedInputValues = [
  123456789n,
  Number.NaN,
  Number.POSITIVE_INFINITY,
  Symbol('not-json'),
  () => 'not-json',
  undefined,
  new Date('2026-01-01T00:00:00.000Z'),
  new Map([['key', 'value']])
];
for (const rawValue of unsupportedInputValues) {
  const result = route({
    service: 'accounting_tax_readiness',
    action: 'organize_financial_documents',
    payload: { unsupported: rawValue }
  });
  assert.equal(result.decision, 'denied');
  assert.ok(result.reason_codes.includes('UNSUPPORTED_INPUT_TYPE'));
}

const dateOfBirthInObjective = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  objective: 'Organize records for a named person born 01/02/1990.'
});
assert.equal(dateOfBirthInObjective.decision, 'denied');
assert.ok(dateOfBirthInObjective.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));

const invalidReferenceCases = [
  {
    name: 'raw SSN in a reference field',
    payload: { ssn_ref: '123-45-6789' },
    rawValue: '123-45-6789'
  },
  {
    name: 'raw EIN in a reference field',
    payload: { ein_ref: '12-3456789' },
    rawValue: '12-3456789'
  },
  {
    name: 'raw bank account in a reference field',
    payload: { bank_account_ref: '1234567890123456' },
    rawValue: '1234567890123456'
  },
  {
    name: 'raw SSN hidden behind vault scheme',
    payload: { ssn_ref: 'vault://identity/123456789' },
    rawValue: 'vault://identity/123456789'
  },
  {
    name: 'raw bank account hidden behind vault scheme',
    payload: { bank_account_ref: 'vault://account/1234567890' },
    rawValue: 'vault://account/1234567890'
  },
  {
    name: 'separated SSN hidden behind vault scheme',
    payload: { ssn_ref: 'vault://identity/x123-45-6789' },
    rawValue: 'vault://identity/x123-45-6789'
  },
  {
    name: 'underscored SSN hidden behind vault scheme',
    payload: { ssn_ref: 'vault://identity/x123_45_6789' },
    rawValue: 'vault://identity/x123_45_6789'
  },
  {
    name: 'separated bank account hidden behind vault scheme',
    payload: { bank_account_ref: 'vault://account/a1234-5678-90' },
    rawValue: 'vault://account/a1234-5678-90'
  },
  {
    name: 'non-vault document reference',
    payload: { document_ref: 's3://private-bucket/document' },
    rawValue: 's3://private-bucket/document'
  },
  {
    name: 'mixed valid and invalid reference array',
    payload: { evidence_refs: [vaultRef('evidence'), 'raw-reference'] },
    rawValue: 'raw-reference'
  },
  {
    name: 'plural reference field with scalar value',
    payload: { document_refs: vaultRef('documents') },
    rawValue: vaultRef('documents')
  }
];

for (const testCase of invalidReferenceCases) {
  const result = route({
    service: 'accounting_tax_readiness',
    action: 'organize_financial_documents',
    payload: testCase.payload
  });
  assert.equal(result.decision, 'denied', `${testCase.name} must be denied`);
  assert.ok(
    result.reason_codes.includes('INVALID_OPAQUE_REFERENCE'),
    `${testCase.name} must cite INVALID_OPAQUE_REFERENCE`
  );
  assert.equal(JSON.stringify(result).includes(testCase.rawValue), false);
}

const referenceShapedId = route({
  service: 'credit_improvement',
  action: 'inventory_credit_reports',
  payload: { applicant_ssn_id: vaultRef('identity') }
});
assert.equal(referenceShapedId.decision, 'denied');
assert.ok(referenceShapedId.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));

let deeplyNestedPayload = { notes: 'starting node' };
for (let index = 0; index < 5000; index += 1) {
  deeplyNestedPayload = { child: deeplyNestedPayload };
}
const excessiveDepth = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: deeplyNestedPayload
});
assert.equal(excessiveDepth.decision, 'denied');
assert.ok(excessiveDepth.reason_codes.includes('INPUT_DEPTH_EXCEEDED'));

let nestedHarmfulText = { notes: 'Dispute all tradelines without evidence.' };
for (let index = 0; index < 9; index += 1) nestedHarmfulText = { child: nestedHarmfulText };
const nestedPolicyViolation = route({
  service: 'credit_improvement',
  action: 'classify_report_discrepancy',
  payload: nestedHarmfulText
});
assert.equal(nestedPolicyViolation.decision, 'denied');
assert.ok(nestedPolicyViolation.reason_codes.includes('CREDIT_FALSE_OR_BLANKET_DISPUTE'));

const prohibitedTopLevelNotes = route({
  service: 'credit_improvement',
  action: 'classify_report_discrepancy',
  notes: 'Dispute all accurate tradelines regardless of accuracy.'
});
assert.equal(prohibitedTopLevelNotes.decision, 'denied');
assert.ok(
  prohibitedTopLevelNotes.reason_codes.includes('CREDIT_FALSE_OR_BLANKET_DISPUTE') ||
    prohibitedTopLevelNotes.reason_codes.includes('CREDIT_ACCURATE_INFORMATION_REMOVAL')
);

const oversizedObjective = route({
  service: 'credit_improvement',
  action: 'classify_report_discrepancy',
  objective: `${'a'.repeat(24000)} Dispute all accurate tradelines regardless of accuracy.`
});
assert.equal(oversizedObjective.decision, 'denied');
assert.ok(oversizedObjective.reason_codes.includes('INPUT_BUDGET_EXCEEDED'));

const overwidePayload = route({
  service: 'credit_improvement',
  action: 'classify_report_discrepancy',
  payload: {
    items: [
      ...Array.from({ length: 1001 }, (_, index) => `safe-${index}`),
      'Dispute all accurate tradelines regardless of accuracy.'
    ]
  }
});
assert.equal(overwidePayload.decision, 'denied');
assert.ok(overwidePayload.reason_codes.includes('INPUT_BUDGET_EXCEEDED'));

const oversizedKey = `k${'x'.repeat(3000)}`;
const oversizedKeyInput = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: { [oversizedKey]: 'bounded key test' }
});
assert.equal(oversizedKeyInput.decision, 'denied');
assert.ok(oversizedKeyInput.reason_codes.includes('INPUT_BUDGET_EXCEEDED'));
assert.equal(JSON.stringify(oversizedKeyInput).includes('x'.repeat(256)), false);

const missingIdentityContext = routeRaw({
  service: 'accounting_tax_readiness',
  deployment_scope: 'personal_self_help',
  action: 'reconcile_accounts',
  payload: { case_ref: vaultRef('cases') }
});
assert.equal(missingIdentityContext.decision, 'denied');
assert.ok(missingIdentityContext.reason_codes.includes('IDENTITY_CONTEXT_REQUIRED'));

const identityLeakCases = [
  ['task_id', '123-45-6789'],
  ['tenant_id', 'person@example.com'],
  ['workspace_id', '01/02/1990'],
  ['task_id', 'task-123-45-6789'],
  ['tenant_id', 'tenant-12-3456789'],
  ['workspace_id', 'ws-541-555-1212']
];
for (const [field, rawValue] of identityLeakCases) {
  const result = routeRaw({
    task_id: 'safe-task',
    tenant_id: 'safe-tenant',
    workspace_id: 'safe-workspace',
    service: 'accounting_tax_readiness',
    deployment_scope: 'personal_self_help',
    action: 'reconcile_accounts',
    payload: { case_ref: vaultRef('cases') },
    [field]: rawValue
  });
  assert.equal(result.decision, 'denied');
  assert.equal(JSON.stringify(result).includes(rawValue), false);
}

const oversizedIdentity = routeRaw({
  task_id: `t${'x'.repeat(3000)}`,
  tenant_id: 'safe-tenant',
  workspace_id: 'safe-workspace',
  service: 'accounting_tax_readiness',
  deployment_scope: 'personal_self_help',
  action: 'reconcile_accounts',
  payload: { case_ref: vaultRef('cases') }
});
assert.equal(oversizedIdentity.decision, 'denied');
assert.ok(oversizedIdentity.reason_codes.includes('INPUT_BUDGET_EXCEEDED'));
assert.equal(JSON.stringify(oversizedIdentity).includes('x'.repeat(256)), false);

const maliciousSensitiveKey = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: { 'ssn_123-45-6789': 'redacted by structural policy' }
});
assert.equal(maliciousSensitiveKey.decision, 'denied');
assert.ok(maliciousSensitiveKey.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));
assert.equal(JSON.stringify(maliciousSensitiveKey).includes('123-45-6789'), false);

const sensitiveKeyCases = [
  '123-45-6789',
  '12-3456789',
  '541-555-1212',
  '123456789',
  '01/02/1990'
];
for (const rawKey of sensitiveKeyCases) {
  const result = route({
    service: 'accounting_tax_readiness',
    action: 'organize_financial_documents',
    payload: { [rawKey]: 'key must not be reflected' }
  });
  assert.equal(result.decision, 'denied');
  assert.ok(result.reason_codes.includes('INLINE_SENSITIVE_PAYLOAD_REJECTED'));
  assert.equal(JSON.stringify(result).includes(rawKey), false);
}

const actionLeakCases = [
  '123-45-6789',
  'person@example.com',
  'task-123-45-6789',
  'tax-12-3456789',
  'call-541-555-1212',
  `a${'z'.repeat(3000)}`
];
for (const rawAction of actionLeakCases) {
  const result = routeRaw({
    task_id: 'safe-task',
    tenant_id: 'safe-tenant',
    workspace_id: 'safe-workspace',
    service: 'accounting_tax_readiness',
    deployment_scope: 'personal_self_help',
    action: rawAction,
    payload: { case_ref: vaultRef('cases') }
  });
  assert.equal(result.decision, 'denied');
  assert.equal(result.action, 'redacted_or_invalid_action');
  assert.equal(result.audit_event.action, 'redacted_or_invalid_action');
  assert.equal(JSON.stringify(result).includes(rawAction.slice(0, 128)), false);
}

const cyclicPayload = { note: 'cycle test' };
cyclicPayload.self = cyclicPayload;
const cyclicInput = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: cyclicPayload
});
assert.equal(cyclicInput.decision, 'denied');
assert.ok(cyclicInput.reason_codes.includes('INPUT_GRAPH_REUSE_REJECTED'));

let sharedGraph = { note: 'shared leaf' };
for (let layer = 0; layer < 6; layer += 1) {
  const parent = {};
  for (let branch = 0; branch < 10; branch += 1) parent[`branch_${branch}`] = sharedGraph;
  sharedGraph = parent;
}
const graphProbeStartedAt = Date.now();
const sharedGraphInput = route({
  service: 'accounting_tax_readiness',
  action: 'organize_financial_documents',
  payload: sharedGraph
});
const graphProbeElapsedMs = Date.now() - graphProbeStartedAt;
assert.equal(sharedGraphInput.decision, 'denied');
assert.ok(sharedGraphInput.reason_codes.includes('INPUT_GRAPH_REUSE_REJECTED'));
assert.ok(graphProbeElapsedMs < 1000, `shared graph probe took ${graphProbeElapsedMs}ms`);

const taxIntentUnderCreditService = route({
  service: 'credit_improvement',
  action: 'prepare_professional_handoff',
  objective: 'File the tax return directly with the IRS.'
});
assert.equal(taxIntentUnderCreditService.decision, 'denied');
assert.ok(taxIntentUnderCreditService.reason_codes.includes('TAX_AUTONOMOUS_FILING_PAYMENT_OR_REPRESENTATION'));

const creditIntentUnderAccountingService = route({
  service: 'accounting_tax_readiness',
  action: 'prepare_professional_handoff',
  objective: 'Dispute all accurate tradelines regardless of accuracy.'
});
assert.equal(creditIntentUnderAccountingService.decision, 'denied');
assert.ok(
  creditIntentUnderAccountingService.reason_codes.includes('CREDIT_FALSE_OR_BLANKET_DISPUTE') ||
    creditIntentUnderAccountingService.reason_codes.includes('CREDIT_ACCURATE_INFORMATION_REMOVAL')
);

const ambiguousSharedAction = route({
  action: 'prepare_professional_handoff',
  objective: 'Prepare tax records and CPA questions for professional handoff.'
});
assert.equal(ambiguousSharedAction.decision, 'denied');
assert.ok(ambiguousSharedAction.reason_codes.includes('UNKNOWN_OR_AMBIGUOUS_FINANCIAL_SERVICE'));

const unknownAction = route({
  service: 'credit_improvement',
  action: 'do_anything_requested',
  objective: 'Use a non-allowlisted operation.'
});
assert.equal(unknownAction.decision, 'denied');
assert.ok(unknownAction.reason_codes.includes('ACTION_NOT_ALLOWLISTED'));

console.log(JSON.stringify({
  ok: true,
  product_service_profiles: financialServiceProfiles.profiles.length,
  workforce_count_contract: financialServiceProfiles.workforce_count_contract,
  workforce_agent_delta: financialServiceProfiles.workforce_agent_delta,
  safe_routes_tested: decisionCounts.allowed_draft_only,
  approval_routes_tested: decisionCounts.approval_required,
  deny_routes_tested: decisionCounts.denied,
  external_effects_executed: 0,
  public_financial_surface: 'information_only_no_public_intake',
  credit_public_commercialization: 'blocked_pending_launch_gates'
}, null, 2));
