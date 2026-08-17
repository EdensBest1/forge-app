import fs from 'node:fs/promises';
import { enterpriseProspectDatabase } from '../data/forge-enterprise-prospects.mjs';

function nowIso() {
  return new Date().toISOString();
}

async function writeReport(report) {
  await fs.mkdir('.nexus-runtime', { recursive: true });
  await fs.writeFile('.nexus-runtime/forge-enterprise-seed-report.json', JSON.stringify(report, null, 2));
  return report;
}

export async function seedForgeEnterpriseAccounts() {
  const baseUrl = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const records = enterpriseProspectDatabase.accounts.map((account) => ({
    ...account,
    source_checked_at: nowIso(),
    updated_at: nowIso()
  }));

  if (!baseUrl || !serviceRoleKey) {
    return writeReport({
      ok: true,
      configured: false,
      seeded: 0,
      records_available: records.length,
      message: 'Supabase service credentials are not configured; no durable database write was attempted.'
    });
  }

  try {
    const response = await fetch(
      `${baseUrl}/rest/v1/forge_enterprise_accounts?on_conflict=account_id`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          Prefer: 'resolution=merge-duplicates,return=minimal'
        },
        body: JSON.stringify(records)
      }
    );
    const text = await response.text();
    if (!response.ok) {
      return writeReport({
        ok: false,
        configured: true,
        seeded: 0,
        records_available: records.length,
        status: response.status,
        error: text.slice(0, 500)
      });
    }
    return writeReport({
      ok: true,
      configured: true,
      seeded: records.length,
      records_available: records.length,
      completed_at: nowIso()
    });
  } catch (error) {
    return writeReport({
      ok: false,
      configured: true,
      seeded: 0,
      records_available: records.length,
      error: String(error?.message || error).slice(0, 500)
    });
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const report = await seedForgeEnterpriseAccounts();
  console.log(JSON.stringify(report, null, 2));
  if (report.configured && !report.ok) process.exitCode = 1;
}
