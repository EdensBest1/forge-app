import crypto from 'node:crypto';
import fs from 'node:fs/promises';

const ROOT = new URL('./', import.meta.url);

export const financialServiceProfiles = JSON.parse(
  await fs.readFile(new URL('financial-service-agents.json', ROOT), 'utf8')
);

export const financialServicePolicy = JSON.parse(
  await fs.readFile(new URL('financial-service-policy.json', ROOT), 'utf8')
);

const profilesByService = new Map(
  financialServiceProfiles.profiles.map((profile) => [profile.service, profile])
);

const serviceAliases = new Map([
  ['credit', 'credit_improvement'],
  ['credit_improvement', 'credit_improvement'],
  ['credit_self_help', 'credit_improvement'],
  ['accounting', 'accounting_tax_readiness'],
  ['bookkeeping', 'accounting_tax_readiness'],
  ['tax_readiness', 'accounting_tax_readiness'],
  ['accounting_tax_readiness', 'accounting_tax_readiness']
]);

function normalizeToken(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function containsSensitiveValue(value) {
  if (typeof value !== 'string') return false;
  return financialServicePolicy.security.sensitive_value_patterns.some(
    (pattern) => new RegExp(pattern, 'i').test(value)
  );
}

function isReferenceFieldName(normalizedKey) {
  const allowedSuffixes = financialServicePolicy.security.allowed_reference_field_suffixes || [];
  return allowedSuffixes.some((suffix) => normalizedKey.endsWith(suffix));
}

function isSensitiveFieldName(normalizedKey) {
  const sensitiveNames = financialServicePolicy.security.sensitive_field_names.map(normalizeToken);
  return sensitiveNames.some(
    (name) =>
      normalizedKey === name ||
      normalizedKey.startsWith(`${name}_`) ||
      normalizedKey.endsWith(`_${name}`) ||
      normalizedKey.includes(`_${name}_`)
  );
}

function isValidOpaqueVaultReference(value) {
  if (typeof value !== 'string' || value !== value.trim()) return false;

  const maxLength = financialServicePolicy.security.reference_value_max_length || 512;
  if (!value || value.length > maxLength) return false;

  const allowedPrefixes = financialServicePolicy.security.allowed_reference_prefixes || [];
  const prefix = allowedPrefixes.find((candidate) => value.startsWith(candidate));
  if (!prefix) return false;

  const opaqueHandle = value.slice(prefix.length);
  const segments = opaqueHandle.split('/');
  const namespacePattern = /^[a-z][a-z0-9_-]{1,63}$/i;
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const ulidPattern = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  if (
    segments.length !== 2 ||
    !namespacePattern.test(segments[0]) ||
    (!uuidPattern.test(segments[1]) && !ulidPattern.test(segments[1]))
  ) {
    return false;
  }

  return true;
}

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, canonicalize(value[key])])
  );
}

function redactForAuditHash(value, key = '', depth = 0, seen = new WeakSet()) {
  if (depth > 8) return '[MAX_DEPTH]';
  const normalizedKey = normalizeToken(key);
  const isReferenceField = isReferenceFieldName(normalizedKey);
  if (normalizedKey && !isReferenceField && isSensitiveFieldName(normalizedKey)) return '[REDACTED]';

  if (typeof value === 'string') {
    const hasSensitiveValue = financialServicePolicy.security.sensitive_value_patterns.some(
      (pattern) => new RegExp(pattern, 'i').test(value)
    );
    return hasSensitiveValue ? '[REDACTED]' : value.slice(0, 2048);
  }
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'symbol' || typeof value === 'function') return `[${typeof value}]`;
  if (Array.isArray(value)) {
    if (seen.has(value)) return '[CYCLE]';
    seen.add(value);
    return value.slice(0, 100).map((item) => redactForAuditHash(item, '', depth + 1, seen));
  }
  if (!value || typeof value !== 'object') return value;
  if (seen.has(value)) return '[CYCLE]';
  seen.add(value);
  return Object.fromEntries(
    Object.keys(value)
      .slice(0, 100)
      .map((childKey) => [
        childKey.slice(0, 128),
        redactForAuditHash(value[childKey], childKey, depth + 1, seen)
      ])
  );
}

function inputHash(task) {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(canonicalize(redactForAuditHash(task))))
    .digest('hex');
}

function flattenPrimitiveText(value) {
  const output = [];
  const stack = [{ value, depth: 0 }];
  const seen = new WeakSet();
  let characterCount = 0;
  let processedNodes = 0;
  let budgetExceeded = false;
  while (stack.length) {
    processedNodes += 1;
    if (processedNodes > 1000 || output.length >= 1000 || characterCount > 20000) {
      budgetExceeded = true;
      break;
    }
    const current = stack.pop();
    if (current.depth > (financialServicePolicy.security.max_input_depth || 12)) continue;
    if (
      typeof current.value === 'string' ||
      typeof current.value === 'number' ||
      typeof current.value === 'boolean'
    ) {
      const rawText = String(current.value);
      if (rawText.length > 2048) {
        budgetExceeded = true;
        break;
      }
      const text = rawText;
      output.push(text);
      characterCount += text.length;
      if (characterCount > 20000) budgetExceeded = true;
      continue;
    }
    if (!current.value || typeof current.value !== 'object' || seen.has(current.value)) continue;
    seen.add(current.value);
    const keys = Array.isArray(current.value) ? current.value : Object.keys(current.value);
    if (keys.length > 100) {
      budgetExceeded = true;
      break;
    }
    if (!Array.isArray(current.value)) {
      const keyCharacters = keys.reduce((total, key) => total + key.length, 0);
      if (keys.some((key) => key.length > 128) || characterCount + keyCharacters > 20000) {
        budgetExceeded = true;
        break;
      }
      characterCount += keyCharacters;
    }
    const children = Array.isArray(current.value)
      ? current.value
      : keys.map((key) => current.value[key]);
    for (let index = children.length - 1; index >= 0; index -= 1) {
      stack.push({ value: children[index], depth: current.depth + 1 });
    }
  }
  return { output, budgetExceeded };
}

function combinedTaskText(task) {
  const flattened = flattenPrimitiveText(task);
  const text = flattened.output
    .filter((value) => value !== undefined && value !== null)
    .join(' ')
    .slice(0, 24000);
  return { text, budgetExceeded: flattened.budgetExceeded };
}

function matchesAnyPattern(text, patterns = []) {
  return patterns.some((pattern) => new RegExp(pattern, 'i').test(text));
}

function actionMatches(action, actions = []) {
  return actions.map(normalizeToken).includes(action);
}

function requestedScopes(task) {
  return [...new Set(
    [task.deployment_scope, task.operation_mode, task.audience]
      .map(normalizeToken)
      .filter(Boolean)
  )];
}

function inspectSensitiveInput(input) {
  const findings = [];
  const seen = new WeakSet();
  let processedNodes = 0;
  const valuePatterns = financialServicePolicy.security.sensitive_value_patterns.map(
    (pattern) => new RegExp(pattern, 'i')
  );

  function inspectReferenceField(value, normalizedKey, path) {
    if (normalizedKey.endsWith('_refs')) {
      if (!Array.isArray(value) || value.length === 0) {
        findings.push(`${path}:invalid_opaque_reference`);
        return;
      }
      value.forEach((reference, index) => {
        if (!isValidOpaqueVaultReference(reference)) {
          findings.push(`${path}[${index}]:invalid_opaque_reference`);
        }
      });
      return;
    }

    if (!isValidOpaqueVaultReference(value)) {
      findings.push(`${path}:invalid_opaque_reference`);
    }
  }

  function walk(value, path = 'task', depth = 0) {
    const maxDepth = financialServicePolicy.security.max_input_depth || 12;
    if (depth > maxDepth) {
      findings.push(`${path}:input_depth_exceeded`);
      return;
    }
    if (findings.length >= 20) return;
    if (typeof value === 'string') {
      if (valuePatterns.some((pattern) => pattern.test(value))) {
        findings.push(`${path}:sensitive_value_pattern`);
      }
      return;
    }
    if (typeof value === 'number') {
      if (!Number.isFinite(value)) findings.push(`${path}:unsupported_input_type`);
      else if (Number.isInteger(value) && containsSensitiveValue(String(value))) {
        findings.push(`${path}:sensitive_numeric_value`);
      }
      return;
    }
    if (
      typeof value === 'undefined' ||
      typeof value === 'bigint' ||
      typeof value === 'symbol' ||
      typeof value === 'function'
    ) {
      findings.push(`${path}:unsupported_input_type`);
      return;
    }
    if (value && typeof value === 'object') {
      if (
        !Array.isArray(value) &&
        Object.getPrototypeOf(value) !== Object.prototype &&
        Object.getPrototypeOf(value) !== null
      ) {
        findings.push(`${path}:unsupported_input_type`);
        return;
      }
      processedNodes += 1;
      if (processedNodes > 1000) {
        findings.push(`${path}:input_node_budget_exceeded`);
        return;
      }
      if (seen.has(value)) {
        findings.push(`${path}:input_graph_reuse`);
        return;
      }
      seen.add(value);
    }
    if (Array.isArray(value)) {
      value.forEach((item, index) => walk(item, `${path}[${index}]`, depth + 1));
      return;
    }
    if (!value || typeof value !== 'object') return;

    for (const [key, child] of Object.entries(value)) {
      const normalizedKey = normalizeToken(key);
      if (containsSensitiveValue(key)) {
        findings.push(`${path}:sensitive_key_pattern`);
      }
      if (isReferenceFieldName(normalizedKey)) {
        inspectReferenceField(child, normalizedKey, `${path}.${key}`);
        continue;
      }
      if (isSensitiveFieldName(normalizedKey)) {
        findings.push(`${path}.${key}:sensitive_field`);
      }
      walk(child, `${path}.${key}`, depth + 1);
    }
  }

  walk(input ?? {});
  return [...new Set(findings)];
}

function inferService(task, action, text) {
  const explicit = normalizeToken(task.service || task.category || task.capability);
  if (explicit) return serviceAliases.get(explicit) || null;

  const matchingProfiles = financialServiceProfiles.profiles.filter(
    (profile) =>
      profile.allowed_actions.map(normalizeToken).includes(action) ||
      profile.approval_actions.map(normalizeToken).includes(action)
  );
  if (matchingProfiles.length === 1) {
    return matchingProfiles[0].service;
  }
  if (matchingProfiles.length > 1) {
    return null;
  }

  const creditScore = (text.match(/\b(?:credit|creditor|bureau|tradeline|dispute|debt validation|goodwill)\b/gi) || []).length;
  const accountingScore = (text.match(/\b(?:accounting|bookkeeping|ledger|journal|reconcil|tax|receipt|transaction)\w*\b/gi) || []).length;
  if (creditScore === accountingScore) return null;
  return creditScore > accountingScore ? 'credit_improvement' : 'accounting_tax_readiness';
}

function safeAuditIdentifier(value, fallback) {
  if (typeof value !== 'string' || value !== value.trim() || !value || value.length > 128) {
    return fallback;
  }
  const opaqueTokenPattern = /^[A-Za-z][A-Za-z0-9._:-]{0,127}$/;
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const ulidPattern = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  if (uuidPattern.test(value) || ulidPattern.test(value)) return value;
  const hasLongDigitPayload = value.replace(/\D/g, '').length >= 9;
  return opaqueTokenPattern.test(value) && !hasLongDigitPayload && !containsSensitiveValue(value)
    ? value
    : fallback;
}

function buildAuditEvent({ task, profile, action, decision, reasonCodes, approvalRequired }) {
  return {
    event_id: `fsa_${crypto.randomUUID()}`,
    occurred_at: new Date().toISOString(),
    task_id: safeAuditIdentifier(task.task_id, 'redacted-or-unassigned-task'),
    tenant_id: safeAuditIdentifier(task.tenant_id, 'redacted-or-unassigned-tenant'),
    workspace_id: safeAuditIdentifier(task.workspace_id, 'redacted-or-unassigned-workspace'),
    service_profile_id: profile?.id || null,
    action,
    decision,
    reason_codes: reasonCodes,
    policy_version: financialServicePolicy.version,
    input_hash: inputHash(task),
    approval_required: approvalRequired,
    external_effects_executed: false
  };
}

function decisionResult({
  task,
  profile,
  service,
  action,
  decision,
  status,
  reasonCodes,
  approvalRequired = false,
  approvalGates = [],
  handoff = null,
  nextStep
}) {
  return {
    service,
    profile_id: profile?.id || null,
    action,
    decision,
    status,
    reason_codes: reasonCodes,
    approval_required: approvalRequired,
    approval_gates: approvalGates,
    approval_present: Boolean(task.approved || task.approval?.approved),
    handoff,
    next_step: nextStep,
    execution_mode: 'classification_and_drafting_only',
    public_intake_authorized: false,
    public_commercialization_authorized: false,
    production_security_authorized: false,
    external_effects_executed: false,
    audit_event: buildAuditEvent({
      task,
      profile,
      action,
      decision,
      reasonCodes,
      approvalRequired
    })
  };
}

function denied(task, profile, service, action, reasonCodes, nextStep = 'stop_and_request_compliant_scope') {
  return decisionResult({
    task,
    profile,
    service,
    action,
    decision: 'denied',
    status: 'blocked',
    reasonCodes,
    nextStep
  });
}

export function routeFinancialServiceTask(rawTask = {}) {
  const task = rawTask && typeof rawTask === 'object' && !Array.isArray(rawTask) ? rawTask : {};
  const rawAction = typeof task.action === 'string' ? task.action.trim() : '';
  const normalizedAction = normalizeToken(rawAction);
  const action = /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(rawAction) &&
    /^[a-z][a-z0-9_]{0,63}$/.test(normalizedAction) &&
    rawAction.replace(/\D/g, '').length < 9 &&
    !containsSensitiveValue(rawAction)
    ? normalizedAction
    : 'redacted_or_invalid_action';
  const combinedText = combinedTaskText(task);
  if (combinedText.budgetExceeded) {
    return denied(task, null, null, action, ['INPUT_BUDGET_EXCEEDED']);
  }
  const sensitiveFindings = inspectSensitiveInput(task);

  if (sensitiveFindings.length) {
    const invalidReference = sensitiveFindings.some((finding) =>
      finding.endsWith(':invalid_opaque_reference')
    );
    const inputDepthExceeded = sensitiveFindings.some((finding) =>
      finding.endsWith(':input_depth_exceeded')
    );
    const inputBudgetExceeded = sensitiveFindings.some((finding) =>
      finding.endsWith(':input_node_budget_exceeded')
    );
    const inputGraphReuse = sensitiveFindings.some((finding) =>
      finding.endsWith(':input_graph_reuse')
    );
    const unsupportedInputType = sensitiveFindings.some((finding) =>
      finding.endsWith(':unsupported_input_type')
    );
    const inlineSensitivePayload = sensitiveFindings.some(
      (finding) =>
        !finding.endsWith(':invalid_opaque_reference') &&
        !finding.endsWith(':input_depth_exceeded') &&
        !finding.endsWith(':input_node_budget_exceeded') &&
        !finding.endsWith(':input_graph_reuse') &&
        !finding.endsWith(':unsupported_input_type')
    );
    return denied(
      task,
      null,
      null,
      action,
      [
        ...(invalidReference ? ['INVALID_OPAQUE_REFERENCE'] : []),
        ...(inputDepthExceeded ? ['INPUT_DEPTH_EXCEEDED'] : []),
        ...(inputBudgetExceeded ? ['INPUT_BUDGET_EXCEEDED'] : []),
        ...(inputGraphReuse ? ['INPUT_GRAPH_REUSE_REJECTED'] : []),
        ...(unsupportedInputType ? ['UNSUPPORTED_INPUT_TYPE'] : []),
        ...(inlineSensitivePayload ? ['INLINE_SENSITIVE_PAYLOAD_REJECTED'] : [])
      ],
      'replace_inline_sensitive_data_with_opaque_vault_references'
    );
  }

  const text = combinedText.text;
  const service = inferService(task, action, text);
  const profile = profilesByService.get(service);
  if (!profile) {
    return denied(task, null, null, action, ['UNKNOWN_OR_AMBIGUOUS_FINANCIAL_SERVICE']);
  }

  const requiredIdentityContext = ['task_id', 'tenant_id', 'workspace_id'];
  const missingIdentityContext = requiredIdentityContext.filter(
    (field) => typeof task[field] !== 'string' || !task[field].trim()
  );
  if (missingIdentityContext.length) {
    return denied(task, profile, service, action, ['IDENTITY_CONTEXT_REQUIRED']);
  }
  const invalidIdentityContext = requiredIdentityContext.filter(
    (field) => safeAuditIdentifier(task[field], '') === ''
  );
  if (invalidIdentityContext.length) {
    return denied(task, profile, service, action, ['IDENTITY_CONTEXT_INVALID']);
  }

  const scopes = requestedScopes(task);
  const allowedNonpublicScopes = (
    financialServicePolicy.security.allowed_nonpublic_scopes || []
  ).map(normalizeToken);
  const blockedScopes = [...new Set([
    ...financialServicePolicy.credit_public_commercialization_gate.blocked_scopes,
    ...financialServicePolicy.financial_public_intake_gate.blocked_scopes
  ].map(normalizeToken))];
  if (!scopes.length) {
    return denied(task, profile, service, action, ['DEPLOYMENT_SCOPE_REQUIRED']);
  }
  const unknownScopes = scopes.filter(
    (scope) => !allowedNonpublicScopes.includes(scope) && !blockedScopes.includes(scope)
  );
  if (unknownScopes.length) {
    return denied(task, profile, service, action, ['DEPLOYMENT_SCOPE_NOT_ALLOWED']);
  }
  for (const rule of financialServicePolicy.hard_deny_rules) {
    if (actionMatches(action, rule.actions) || matchesAnyPattern(text, rule.text_patterns)) {
      return denied(task, profile, service, action, [rule.id]);
    }
  }

  if (service === 'credit_improvement') {
    const gate = financialServicePolicy.credit_public_commercialization_gate;
    const publicLaunchRequested =
      scopes.some((scope) => gate.blocked_scopes.map(normalizeToken).includes(scope)) ||
      actionMatches(action, gate.blocked_actions) ||
      matchesAnyPattern(text, gate.text_patterns);
    if (publicLaunchRequested) {
      return denied(
        task,
        profile,
        service,
        action,
        [gate.reason_code],
        'complete_and_sign_all_credit_service_launch_gates'
      );
    }
  }

  const publicIntakeGate = financialServicePolicy.financial_public_intake_gate;
  const publicIntakeRequested =
    profile.commercialization?.public_intake_enabled === false &&
    (scopes.some((scope) => publicIntakeGate.blocked_scopes.map(normalizeToken).includes(scope)) ||
      actionMatches(action, publicIntakeGate.blocked_actions) ||
      matchesAnyPattern(text, publicIntakeGate.text_patterns));
  if (publicIntakeRequested) {
    return denied(
      task,
      profile,
      service,
      action,
      [publicIntakeGate.reason_code],
      'keep_public_surface_information_only_and_use_no_public_intake'
    );
  }

  const profileScopes = (profile.runtime_scope_contract?.allowed_scopes || []).map(normalizeToken);
  if (!profileScopes.length || scopes.some((scope) => !profileScopes.includes(scope))) {
    return denied(task, profile, service, action, ['SERVICE_RUNTIME_SCOPE_NOT_ALLOWED']);
  }

  const actionRequirement = financialServicePolicy.action_requirements?.[action];
  if (actionRequirement) {
    const payload = task.payload && typeof task.payload === 'object' && !Array.isArray(task.payload)
      ? task.payload
      : {};
    const missingReferences = (actionRequirement.required_reference_fields || []).filter((field) => {
      const value = payload[field];
      return !Array.isArray(value) || value.length === 0;
    });
    const missingAttestations = (actionRequirement.required_true_fields || []).filter(
      (field) => payload[field] !== true
    );
    if (missingReferences.length || missingAttestations.length) {
      return denied(task, profile, service, action, [
        ...(missingReferences.length ? [actionRequirement.missing_reference_reason] : []),
        ...(missingAttestations.length ? [actionRequirement.missing_attestation_reason] : [])
      ]);
    }
  }

  const approvalMatches = financialServicePolicy.approval_rules.filter(
    (rule) => actionMatches(action, rule.actions) || matchesAnyPattern(text, rule.text_patterns)
  );
  const externalSideEffectRequested = Boolean(
    task.external_side_effect || task.external_effect || task.execute_external_action
  );

  if (approvalMatches.length || externalSideEffectRequested) {
    const approvalGates = approvalMatches.map((rule) => rule.id);
    if (externalSideEffectRequested) approvalGates.push('EXTERNAL_SIDE_EFFECT_APPROVAL');
    const handoffs = [...new Set(approvalMatches.map((rule) => rule.handoff).filter(Boolean))];
    return decisionResult({
      task,
      profile,
      service,
      action,
      decision: 'approval_required',
      status: 'blocked_pending_human_execution',
      reasonCodes: [...new Set(approvalGates)],
      approvalRequired: true,
      approvalGates: [...new Set(approvalGates)],
      handoff: handoffs.length ? handoffs : ['human_owner_or_authorized_reviewer'],
      nextStep: 'queue_for_human_review_no_external_execution_in_current_mvp'
    });
  }

  const allowed = profile.allowed_actions.map(normalizeToken).includes(action);
  if (!allowed) {
    return denied(task, profile, service, action, ['ACTION_NOT_ALLOWLISTED']);
  }

  return decisionResult({
    task,
    profile,
    service,
    action,
    decision: 'allowed_draft_only',
    status: 'routed',
    reasonCodes: ['ALLOWLISTED_INTERNAL_TASK'],
    nextStep: 'perform_internal_analysis_or_prepare_draft_without_external_effects'
  });
}

async function main() {
  const taskArg = process.argv.slice(2).find((arg) => arg.startsWith('--task='));
  if (!taskArg) {
    console.log(JSON.stringify({
      service_profiles: financialServiceProfiles.profiles.map(({ id, service, status }) => ({ id, service, status })),
      workforce_count_contract: financialServiceProfiles.workforce_count_contract,
      workforce_agent_delta: financialServiceProfiles.workforce_agent_delta,
      external_effects_enabled: financialServicePolicy.external_effects_enabled,
      usage: `node nexus/financial-service-router.mjs --task='{"service":"credit_improvement","deployment_scope":"personal_self_help","action":"educate_credit_factors"}'`
    }, null, 2));
    return;
  }

  let task;
  try {
    task = JSON.parse(taskArg.slice('--task='.length));
  } catch {
    console.error('Task must be valid JSON.');
    process.exitCode = 1;
    return;
  }
  console.log(JSON.stringify(routeFinancialServiceTask(task), null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
