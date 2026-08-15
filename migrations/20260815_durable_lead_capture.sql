-- Additive Forge intake metadata for recoverable, consent-auditable server writes.
-- Apply only to an approved Forge non-production database first.

alter table public.forge_job_leads
  add column if not exists request_id text,
  add column if not exists follow_up_consent boolean not null default false,
  add column if not exists terms_accepted boolean not null default false,
  add column if not exists consent_captured_at timestamptz,
  add column if not exists source_created_at timestamptz;

alter table public.forge_worker_leads
  add column if not exists request_id text,
  add column if not exists follow_up_consent boolean not null default false,
  add column if not exists terms_accepted boolean not null default false,
  add column if not exists consent_captured_at timestamptz,
  add column if not exists source_created_at timestamptz;

create unique index if not exists forge_job_leads_request_id_unique
  on public.forge_job_leads (request_id) where request_id is not null;

create unique index if not exists forge_worker_leads_request_id_unique
  on public.forge_worker_leads (request_id) where request_id is not null;

-- Existing RLS remains enabled. Public browser roles receive no direct write policy.
