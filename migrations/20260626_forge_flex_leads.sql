-- Forge Capital Desk / Flex referral lead table.
-- Forge collects basic contact and consent only. Flex handles applications,
-- onboarding, activation, product support, eligibility, approval, fees, terms,
-- and conditions.

create extension if not exists pgcrypto;

create table if not exists public.forge_flex_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  owner_name text not null,
  business_name text not null,
  email text not null,
  phone text,
  city text,
  state text,
  industry text,
  website text,
  years_in_business text,
  monthly_revenue_range text,
  monthly_spend_range text,
  employee_count text,
  primary_need text,
  interested_in_forge_job_leads boolean default false,
  interested_in_north_star_marketing boolean default false,
  interested_in_payment_processing boolean default false,
  interested_in_website_crm_automation boolean default false,
  consent_to_contact boolean not null default false,
  consent_to_receive_flex_referral boolean not null default false,
  referral_source text,
  flex_referral_url_sent text,
  lead_score integer default 0,
  status text default 'new' check (status in (
    'new',
    'contacted',
    'qualified',
    'not_qualified',
    'flex_link_sent',
    'application_started',
    'activated',
    'commission_expected',
    'commission_paid',
    'forge_upsell_offered',
    'forge_client_won',
    'closed_lost'
  )),
  notes text
);

alter table public.forge_flex_leads
  add column if not exists interested_in_forge_job_leads boolean default false,
  add column if not exists interested_in_website_crm_automation boolean default false;

create index if not exists forge_flex_leads_status_idx on public.forge_flex_leads(status);
create index if not exists forge_flex_leads_score_idx on public.forge_flex_leads(lead_score);
create index if not exists forge_flex_leads_geo_idx on public.forge_flex_leads(state, city);

alter table public.forge_flex_leads enable row level security;

-- Public beta recommendation:
-- Do not add anonymous insert policies until server-side validation is ready.
-- Write through a server-owned route, Zapier action, or Supabase Edge Function
-- using credentials stored server-side.
