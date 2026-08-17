-- Forge enterprise workforce + app campaign
-- Created 2026-08-17
-- Human approval remains required for bulk outreach, pricing, contracts,
-- worker placement, regulated work, and employment/contractor decisions.

create extension if not exists pgcrypto;

create table if not exists public.forge_enterprise_accounts (
  id uuid primary key default gen_random_uuid(),
  account_code text unique not null,
  company_name text not null,
  segment text,
  geography text,
  official_source_url text,
  public_business_email text,
  public_business_phone text,
  contact_verification_status text not null default 'research_required'
    check (contact_verification_status in ('research_required','verified_public_contact','invalid','do_not_contact')),
  priority text not null default 'Priority 2'
    check (priority in ('Priority 1','Priority 2','Priority 3')),
  status text not null default 'research_required'
    check (status in ('research_required','enrichment_in_progress','outreach_ready_pending_human_approval','contacted','replied','discovery_scheduled','qualified','proposal','pilot','won','closed_lost','do_not_contact')),
  potential_workforce_or_service_demand text,
  forge_pitch_angle text,
  research_owner_agent_id text,
  sales_owner_agent_id text,
  crm_owner_agent_id text,
  outreach_approval_required boolean not null default true,
  suppression_status text not null default 'not_checked'
    check (suppression_status in ('not_checked','clear','suppressed','opted_out')),
  source_last_verified_at timestamptz,
  next_action text,
  next_action_due_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_enterprise_contacts (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.forge_enterprise_accounts(id) on delete cascade,
  full_name text,
  title text,
  business_email text,
  business_phone text,
  public_profile_url text,
  source_url text not null,
  verification_status text not null default 'research_required'
    check (verification_status in ('research_required','verified_public_business_contact','invalid','do_not_contact')),
  consent_status text not null default 'unknown'
    check (consent_status in ('unknown','business_contact_basis','consented','opted_out','do_not_contact')),
  is_decision_maker boolean not null default false,
  last_verified_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(account_id, business_email)
);

create table if not exists public.forge_workforce_capacity (
  id uuid primary key default gen_random_uuid(),
  provider_type text not null check (provider_type in ('worker','crew','contractor','service_business','staffing_partner')),
  provider_name text,
  trade_category text not null,
  skills text,
  service_area text,
  availability_status text not null default 'unverified'
    check (availability_status in ('unverified','available','limited','unavailable')),
  worker_or_crew_count integer check (worker_or_crew_count is null or worker_or_crew_count >= 0),
  classification_model text check (classification_model is null or classification_model in ('employee_of_forge','employee_of_partner','independent_contractor_pending_review','licensed_contractor','staffing_partner','unknown')),
  license_required boolean,
  license_verified boolean not null default false,
  insurance_required boolean,
  insurance_verified boolean not null default false,
  identity_verified boolean not null default false,
  safety_requirements_reviewed boolean not null default false,
  background_check_status text not null default 'not_collected'
    check (background_check_status in ('not_collected','not_required','pending_authorized_provider','verified_by_authorized_provider')),
  rate_notes text,
  source text,
  owner_agent_id text,
  enterprise_ready boolean not null default false,
  last_verified_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_enterprise_opportunities (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.forge_enterprise_accounts(id) on delete cascade,
  opportunity_name text not null,
  workforce_need text,
  geography text,
  estimated_headcount text,
  timing text,
  project_duration text,
  procurement_requirements text,
  licenses_or_certifications text,
  app_demo_interest boolean not null default false,
  managed_pilot_interest boolean not null default false,
  flex_intro_interest boolean not null default false,
  stage text not null default 'new'
    check (stage in ('new','qualified','discovery','scope','proposal','pilot','won','closed_lost')),
  estimated_value numeric(14,2),
  probability numeric(5,2) check (probability is null or (probability >= 0 and probability <= 100)),
  human_approval_status text not null default 'required'
    check (human_approval_status in ('required','approved','rejected')),
  next_action text,
  next_action_due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_enterprise_activities (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references public.forge_enterprise_accounts(id) on delete cascade,
  contact_id uuid references public.forge_enterprise_contacts(id) on delete set null,
  opportunity_id uuid references public.forge_enterprise_opportunities(id) on delete set null,
  agent_id text,
  activity_type text not null check (activity_type in ('research','verification','draft_email','draft_call','human_approved_email','human_approved_call','reply','meeting','proposal','pilot_update','opt_out','note')),
  external_side_effect boolean not null default false,
  human_approved boolean not null default false,
  subject text,
  body_or_summary text,
  source_url text,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.forge_enterprise_agent_assignments (
  agent_id text primary key,
  agent_name text not null,
  business text not null,
  department text not null,
  campaign_pod text not null,
  campaign_objective text not null,
  kpi text not null,
  initial_account_code text references public.forge_enterprise_accounts(account_code) on delete set null,
  status text not null default 'active' check (status in ('active','paused','complete')),
  updated_at timestamptz not null default now()
);

create index if not exists idx_forge_enterprise_accounts_priority_status on public.forge_enterprise_accounts(priority,status);
create index if not exists idx_forge_enterprise_accounts_next_action on public.forge_enterprise_accounts(next_action_due_at);
create index if not exists idx_forge_enterprise_contacts_account on public.forge_enterprise_contacts(account_id);
create index if not exists idx_forge_workforce_capacity_trade_area on public.forge_workforce_capacity(trade_category,service_area);
create index if not exists idx_forge_enterprise_opportunities_stage on public.forge_enterprise_opportunities(stage,next_action_due_at);
create index if not exists idx_forge_enterprise_activities_account_time on public.forge_enterprise_activities(account_id,occurred_at desc);

alter table public.forge_enterprise_accounts enable row level security;
alter table public.forge_enterprise_contacts enable row level security;
alter table public.forge_workforce_capacity enable row level security;
alter table public.forge_enterprise_opportunities enable row level security;
alter table public.forge_enterprise_activities enable row level security;
alter table public.forge_enterprise_agent_assignments enable row level security;

comment on table public.forge_enterprise_accounts is 'Enterprise employer, contractor, facilities, logistics, utility, property, and strategic-partner pipeline. Public business contacts only.';
comment on table public.forge_workforce_capacity is 'Verified capacity inventory. A record is not enterprise-ready until identity, classification, licenses, insurance, safety, and availability are reviewed as applicable.';
comment on table public.forge_enterprise_activities is 'Audit history. Bulk or external outreach requires human approval and suppression checks.';
