import fs from 'node:fs/promises';
import { storageStatus } from './state-store.mjs';

const ROOT = new URL('./', import.meta.url);
const workspacePolicy = JSON.parse(await fs.readFile(new URL('workspace-policy.json', ROOT), 'utf8'));

const SENSITIVE_TERMS = [
  'password', 'secret', 'private_key', 'api_key', 'access_token', 'refresh_token', 'session_cookie'
];

export function securityPreflight(task = {}) {
  const issues = [];
  const tenantId = String(task.tenant_id || '').trim();
  const workspaceId = String(task.workspace_id || '').trim();

  if (task.workspace_type === 'northstar-client' && (!tenantId || !workspaceId)) {
    issues.push({ severity: 'critical', code: 'MISSING_TENANT_CONTEXT', message: 'Client task missing tenant_id/workspace_id' });
  }

  if (task.source_tenant_id && tenantId && task.source_tenant_id !== tenantId) {
    issues.push({ severity: 'critical', code: 'CROSS_TENANT_ACCESS', message: 'source tenant does not match task tenant' });
  }

  if (task.target_tenant_id && tenantId && task.target_tenant_id !== tenantId) {
    issues.push({ severity: 'critical', code: 'CROSS_TENANT_WRITE', message: 'target tenant does not match task tenant' });
  }

  const payloadText = JSON.stringify(task.payload || {}).toLowerCase();
  const leaked = SENSITIVE_TERMS.filter((term) => payloadText.includes(term));
  if (leaked.length && !task.allow_secret_reference_fields) {
    issues.push({ severity: 'high', code: 'SECRET_LIKE_PAYLOAD', message: `Secret-like fields detected: ${leaked.join(', ')}` });
  }

  if (task.action === 'disable_security' || task.action === 'disable_audit') {
    issues.push({ severity: 'critical', code: 'SECURITY_DISABLE_ATTEMPT', message: 'Security or audit controls cannot be disabled autonomously' });
  }

  const blocked = issues.some((issue) => issue.severity === 'critical' || issue.severity === 'high');
  return { allowed: !blocked, issues };
}

export function configurationHealth() {
  const store = storageStatus();
  const findings = [];
  if (!store.configured) findings.push({ severity: 'high', code: 'STATE_STORE_UNCONFIGURED' });
  if (!store.token_configured) findings.push({ severity: 'high', code: 'STATE_STORE_TOKEN_UNCONFIGURED' });
  if (!store.application_encryption) findings.push({ severity: 'medium', code: 'APP_ENCRYPTION_KEY_UNCONFIGURED' });
  if (!process.env.NEXUS_AGENT_RUNNER_URL) findings.push({ severity: 'high', code: 'AGENT_RUNNER_UNCONFIGURED' });
  if (!process.env.NEXUS_AGENT_RUNNER_TOKEN) findings.push({ severity: 'high', code: 'AGENT_RUNNER_TOKEN_UNCONFIGURED' });
  return {
    healthy: !findings.some((f) => f.severity === 'critical' || f.severity === 'high'),
    findings,
    requirements: workspacePolicy.security,
  };
}

export function detectAuditAnomalies(records = []) {
  const findings = [];
  const recentFailures = records.filter((r) => r.result_ref === 'failed').length;
  const blocked = records.filter((r) => r.decision === 'approval_required').length;
  const crossTenant = records.filter((r) => (r.risk_tags || []).includes('cross_tenant_data_access')).length;
  if (recentFailures >= 5) findings.push({ severity: 'high', code: 'REPEATED_AGENT_FAILURES', count: recentFailures });
  if (crossTenant > 0) findings.push({ severity: 'critical', code: 'CROSS_TENANT_ATTEMPTS', count: crossTenant });
  return { findings, stats: { records: records.length, recentFailures, blocked, crossTenant } };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(configurationHealth(), null, 2));
}
