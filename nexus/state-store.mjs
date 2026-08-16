import crypto from 'node:crypto';

function requireTenantContext(ctx = {}) {
  const tenantId = String(ctx.tenant_id || '').trim();
  const workspaceId = String(ctx.workspace_id || '').trim();
  if (!tenantId || !workspaceId) throw new Error('tenant_id and workspace_id are required');
  if (!/^[a-zA-Z0-9._-]{2,128}$/.test(tenantId)) throw new Error('invalid tenant_id');
  if (!/^[a-zA-Z0-9._-]{2,128}$/.test(workspaceId)) throw new Error('invalid workspace_id');
  return { tenantId, workspaceId };
}

function encryptionKey() {
  const raw = process.env.NEXUS_DATA_ENCRYPTION_KEY;
  if (!raw) return null;
  const key = Buffer.from(raw, 'base64');
  if (key.length !== 32) throw new Error('NEXUS_DATA_ENCRYPTION_KEY must be 32-byte base64');
  return key;
}

function encryptPayload(value) {
  const key = encryptionKey();
  if (!key) return { encrypted: false, payload: value };
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const plaintext = Buffer.from(JSON.stringify(value));
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    encrypted: true,
    alg: 'A256GCM',
    iv: iv.toString('base64'),
    tag: tag.toString('base64'),
    ciphertext: ciphertext.toString('base64'),
  };
}

function decryptPayload(envelope) {
  if (!envelope?.encrypted) return envelope?.payload;
  const key = encryptionKey();
  if (!key) throw new Error('encrypted Nexus state cannot be read without NEXUS_DATA_ENCRYPTION_KEY');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(envelope.iv, 'base64'));
  decipher.setAuthTag(Buffer.from(envelope.tag, 'base64'));
  const plaintext = Buffer.concat([
    decipher.update(Buffer.from(envelope.ciphertext, 'base64')),
    decipher.final(),
  ]);
  return JSON.parse(plaintext.toString('utf8'));
}

function scopedKey(ctx, kind, id) {
  const { tenantId, workspaceId } = requireTenantContext(ctx);
  const safeKind = String(kind || 'records').replace(/[^a-zA-Z0-9._-]/g, '_');
  const safeId = String(id || crypto.randomUUID()).replace(/[^a-zA-Z0-9._-]/g, '_');
  return `${tenantId}/${workspaceId}/${safeKind}/${safeId}`;
}

async function request(path, options = {}) {
  const base = process.env.NEXUS_STATE_STORE_URL;
  if (!base) throw new Error('NEXUS_STATE_STORE_URL is not configured');
  const token = process.env.NEXUS_STATE_STORE_TOKEN;
  const response = await fetch(`${base.replace(/\/$/, '')}${path}`, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  let body;
  try { body = text ? JSON.parse(text) : {}; } catch { body = { text }; }
  if (!response.ok) throw new Error(`Nexus state store ${response.status}: ${text.slice(0, 500)}`);
  return body;
}

export function storageStatus() {
  return {
    configured: Boolean(process.env.NEXUS_STATE_STORE_URL),
    token_configured: Boolean(process.env.NEXUS_STATE_STORE_TOKEN),
    application_encryption: Boolean(process.env.NEXUS_DATA_ENCRYPTION_KEY),
  };
}

export async function putState(ctx, kind, id, value, metadata = {}) {
  const key = scopedKey(ctx, kind, id);
  const envelope = encryptPayload(value);
  return request('/v1/state/put', {
    method: 'POST',
    body: JSON.stringify({ key, envelope, metadata: { ...metadata, tenant_id: ctx.tenant_id, workspace_id: ctx.workspace_id } }),
  });
}

export async function getState(ctx, kind, id) {
  const key = scopedKey(ctx, kind, id);
  const body = await request(`/v1/state/get?key=${encodeURIComponent(key)}`, { method: 'GET' });
  if (!body?.found) return null;
  return decryptPayload(body.envelope);
}

export async function appendAudit(ctx, record) {
  const key = scopedKey(ctx, 'audit', record.task_id || crypto.randomUUID());
  const envelope = encryptPayload({ ...record, tenant_id: ctx.tenant_id, workspace_id: ctx.workspace_id });
  return request('/v1/audit/append', {
    method: 'POST',
    body: JSON.stringify({ key, envelope }),
  });
}

export async function listState(ctx, kind, options = {}) {
  const { tenantId, workspaceId } = requireTenantContext(ctx);
  const safeKind = String(kind || 'records').replace(/[^a-zA-Z0-9._-]/g, '_');
  const prefix = `${tenantId}/${workspaceId}/${safeKind}/`;
  const limit = Math.max(1, Math.min(Number(options.limit || 100), 500));
  const body = await request(`/v1/state/list?prefix=${encodeURIComponent(prefix)}&limit=${limit}`, { method: 'GET' });
  return Array.isArray(body?.items)
    ? body.items.map((item) => ({ ...item, value: item.envelope ? decryptPayload(item.envelope) : undefined }))
    : [];
}
