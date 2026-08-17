-- Forge enterprise workforce + app campaign
-- Server-owned tables only. Do not expose service-role credentials or public write access.

create extension if not exists pgcrypto;

create table if not exists public.forge_enterprise_accounts (
  account_id text primary key,
  company text not null,
  segment text not null,
  geography text,
  potential_workforce_or_service_demand text,
  forge_pitch_angle text,
  official_source_url text,
  public_business_email text,
  public_business_phone text,
  contact_verification_status text not null default 'Contact route to verify'
    check (contact_verification_status in ('Verified public contact', 'Contact route to verify', 'Do not contact')),
  priority text not null default 'Priority 2'
    check (priority in ('Priority 1', 'Priority 2', 'Priority 3')),
  status text not null default 'research'
    check (status in ('research', 'outreach_ready_pending_human_approval', 'contacted', 'qualified', 'discovery_scheduled', 'pilot_proposed', 'contract_review', 'won', 'closed_lost', 'do_not_contact')),
  source_checked_at timestamptz,
  owner_agent_id text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_enterprise_leads (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'forge_enterprise_workforce',
  company_name text not null,
  contact_name text not null,
  business_email text not null,
  business_phone text,
  company_website text,
  city text,
  state text,
  service_area text,
  industry text,
  workforce_needs text not null,
  estimated_headcount text,
  start_timing text,
  project_duration text,
  shift_requirements text,
  licenses_or_certifications text,
  interested_in_forge_app_demo boolean not null default false,
  interested_in_managed_pilot boolean not null default false,
  interested_in_flex_intro boolean not null default false,
  consent_to_contact boolean not null default false,
  referral_source text,
  notes text,
  lead_score integer not null default 0 check (lead_score between 0 and 100),
  status text not null default 'new'
    check (status in ('new', 'reviewing', 'qualified', 'disqualified', 'discovery_scheduled', 'pilot_proposed', 'contract_review', 'won', 'closed_lost', 'do_not_contact')),
  assigned_to text,
  next_action text,
  next_action_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_enterprise_outreach_events (
  id uuid primary key default gen_random_uuid(),
  account_id text references public.forge_enterprise_accounts(account_id) on delete set null,
  lead_id uuid references public.forge_enterprise_leads(id) on delete set null,
  channel text not null check (channel in ('business_email', 'official_contact_form', 'business_phone', 'linkedin_business', 'meeting', 'other')),
  status text not null default 'drafted'
    check (status in ('drafted', 'approval_requested', 'approved', 'sent', 'delivered', 'replied', 'bounced', 'suppressed', 'cancelled')),
  recipient_business_contact text,
  subject text,
  message_hash text,
  suppression_checked_at timestamptz,
  approved_by text,
  approved_at timestamptz,
  sent_at timestamptz,
  response_summary text,
  next_action text,
  next_action_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists forge_enterprise_accounts_priority_status_idx
  on public.forge_enterprise_accounts(priority, status);
create index if not exists forge_enterprise_accounts_company_idx
  on public.forge_enterprise_accounts(lower(company));
create index if not exists forge_enterprise_leads_status_score_idx
  on public.forge_enterprise_leads(status, lead_score desc);
create index if not exists forge_enterprise_leads_next_action_idx
  on public.forge_enterprise_leads(next_action_at)
  where next_action_at is not null;
create index if not exists forge_enterprise_outreach_account_idx
  on public.forge_enterprise_outreach_events(account_id, created_at desc);
create index if not exists forge_enterprise_outreach_status_idx
  on public.forge_enterprise_outreach_events(status, next_action_at);

alter table public.forge_enterprise_accounts enable row level security;
alter table public.forge_enterprise_leads enable row level security;
alter table public.forge_enterprise_outreach_events enable row level security;

-- Intentionally no anon/authenticated policies in this migration.
-- Access must be granted through approved server-side functions or explicit role-based policies.

comment on table public.forge_enterprise_accounts is
  'Public-business enterprise prospect records and campaign state. Demand fields are hypotheses until verified.';
comment on table public.forge_enterprise_leads is
  'Consent-based enterprise workforce and Forge app intake records. Do not store SSNs, bank credentials, protected-class data, or background reports here.';
comment on table public.forge_enterprise_outreach_events is
  'Approval-gated outreach audit trail. Sent status must reflect an actual authorized connector result.';
