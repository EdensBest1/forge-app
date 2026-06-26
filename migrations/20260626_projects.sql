-- Forge Projects migration
-- Adds project intake, partner routing, and partner document tables.
-- Public clients should write through a validated server route, Zapier action,
-- or Supabase Edge Function. Do not expose service-role credentials in browser code.

create extension if not exists pgcrypto;

create table if not exists public.project_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  contact_name text,
  phone text,
  email text,
  project_type text not null check (project_type in (
    'HOME_REPAIR',
    'REMODEL',
    'ADU',
    'GARAGE_SHOP',
    'FENCING_GATES',
    'MULTIFAMILY',
    'MIXED_USE',
    'COMMERCIAL_TI',
    'LAND_DEVELOPMENT',
    'INVESTMENT_PROPERTY',
    'OTHER'
  )),
  project_title text not null,
  project_description text not null,
  property_address text,
  city text not null,
  state text not null check (state in ('OR', 'WA', 'CA', 'ID', 'OTHER')),
  county text,
  budget_range text not null check (budget_range in (
    'UNDER_10K',
    'TEN_TO_50K',
    'FIFTY_TO_150K',
    'ONE_FIFTY_TO_500K',
    'FIVE_HUNDRED_TO_2M',
    'TWO_M_PLUS'
  )),
  timeline text,
  project_stage text not null check (project_stage in (
    'IDEA_ONLY',
    'OWN_PROPERTY',
    'UNDER_CONTRACT',
    'HAVE_PLANS',
    'HAVE_PERMITS',
    'READY_TO_BUILD',
    'NEEDS_DESIGN',
    'NEEDS_FINANCING'
  )),
  owns_property text,
  has_plans text,
  has_permits text,
  needs_financing text,
  upload_photos jsonb not null default '[]'::jsonb,
  upload_documents jsonb not null default '[]'::jsonb,
  preferred_contact_method text,
  consent_to_share_with_partner boolean not null default false,
  route text not null default 'Project Intake Review',
  status text not null default 'NEW' check (status in (
    'NEW',
    'NEEDS_MORE_INFO',
    'FORGE_QUALIFIED',
    'MAJOR_PROJECT_REVIEW',
    'SENT_TO_SENECA',
    'PARTNER_REVIEWING',
    'ACCEPTED_BY_PARTNER',
    'PROPOSAL_REQUESTED',
    'SITE_VISIT_SCHEDULED',
    'CONTRACT_PENDING',
    'WON',
    'LOST',
    'NOT_A_FIT',
    'ROUTED_TO_FORGE_PRO'
  )),
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_lead_notes (
  id uuid primary key default gen_random_uuid(),
  project_lead_id uuid not null references public.project_leads(id) on delete cascade,
  author_name text,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  subtitle text,
  region text,
  focus text,
  approved boolean not null default false,
  feature_flag text,
  status text not null default 'Draft partner record',
  disclaimer text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partner_referrals (
  id uuid primary key default gen_random_uuid(),
  project_lead_id uuid not null references public.project_leads(id) on delete cascade,
  partner_id uuid not null references public.partners(id) on delete restrict,
  status text not null default 'PENDING_REVIEW',
  approved_partner_at_send boolean not null default false,
  referral_fee_terms text,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partner_documents (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  document_type text not null check (document_type in (
    'W9',
    'INSURANCE',
    'LICENSE',
    'BUSINESS_LICENSE',
    'REFERRAL_AGREEMENT',
    'LOGO_PERMISSION',
    'NDA_NON_CIRCUMVENT'
  )),
  status text not null default 'MISSING',
  file_url text,
  verified_at timestamptz,
  expires_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (partner_id, document_type)
);

insert into public.partners (slug, name, subtitle, region, focus, approved, feature_flag, status, disclaimer)
values (
  'seneca-development-co',
  'Seneca Development Co.',
  'Major Project & Development Partner',
  'Portland, OR',
  'Multifamily, mixed-use, construction, development, and operations',
  false,
  'senecaPartnerApproved',
  'Draft partner record',
  'Partner routing is subject to approval, project fit, licensing, insurance, and written partner agreement.'
)
on conflict (slug) do update set
  subtitle = excluded.subtitle,
  region = excluded.region,
  focus = excluded.focus,
  approved = false,
  feature_flag = excluded.feature_flag,
  status = excluded.status,
  disclaimer = excluded.disclaimer,
  updated_at = now();

insert into public.partner_documents (partner_id, document_type, status, notes)
select partners.id, required.document_type, 'MISSING', 'Required before approved partner routing or public use.'
from public.partners
cross join (
  values
    ('W9'),
    ('INSURANCE'),
    ('LICENSE'),
    ('BUSINESS_LICENSE'),
    ('REFERRAL_AGREEMENT'),
    ('LOGO_PERMISSION'),
    ('NDA_NON_CIRCUMVENT')
) as required(document_type)
where partners.slug = 'seneca-development-co'
on conflict do nothing;

alter table public.project_leads enable row level security;
alter table public.project_lead_notes enable row level security;
alter table public.partners enable row level security;
alter table public.partner_referrals enable row level security;
alter table public.partner_documents enable row level security;
