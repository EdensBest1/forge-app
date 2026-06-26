-- Forge Building leads migration
-- Additive only: creates BuildingLead storage and draft partner-candidate fields.
-- Do not run destructive resets, drops, truncates, or table renames.

create extension if not exists pgcrypto;

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

alter table public.partners add column if not exists contact_relationship_note text;
alter table public.partners add column if not exists partner_type text;
alter table public.partners add column if not exists public_display_enabled boolean not null default false;
alter table public.partners add column if not exists logo_use_approved boolean not null default false;
alter table public.partners add column if not exists referral_agreement_signed boolean not null default false;
alter table public.partners add column if not exists data_sharing_approved boolean not null default false;
alter table public.partners add column if not exists official_partner_language_approved boolean not null default false;
alter table public.partners add column if not exists public_display_rule text;
alter table public.partners add column if not exists admin_description text;
alter table public.partners add column if not exists best_fit text[];

create table if not exists public.building_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  lead_type text not null check (lead_type in ('HOME_PROJECT', 'MAJOR_BUILD', 'CONTRACTOR_FINANCE')),
  project_type text not null check (project_type in (
    'HOME_REPAIR',
    'REMODEL',
    'FENCING_GATES',
    'DECK_PATIO',
    'CONCRETE',
    'ROOFING',
    'PAINTING',
    'LANDSCAPING',
    'ADU',
    'GARAGE_SHOP',
    'TENANT_IMPROVEMENT',
    'COMMERCIAL',
    'MULTIFAMILY',
    'MIXED_USE',
    'LAND_DEVELOPMENT',
    'INVESTMENT_PROPERTY',
    'CONTRACTOR_FINANCE',
    'OTHER'
  )),
  project_title text not null,
  project_description text not null,
  property_address text,
  city text,
  county text,
  state text,
  zip text,
  budget_range text check (budget_range in ('UNDER_10K', 'TEN_TO_50K', 'FIFTY_TO_150K', 'ONE_FIFTY_TO_500K', 'FIVE_HUNDRED_TO_2M', 'TWO_M_PLUS', 'NOT_SURE')),
  timeline text,
  project_stage text check (project_stage in ('IDEA_ONLY', 'OWN_PROPERTY', 'UNDER_CONTRACT', 'HAVE_PLANS', 'HAVE_PERMITS', 'READY_TO_BUILD', 'NEED_DESIGN_HELP', 'NEED_CONSTRUCTION_HELP', 'NEEDS_DESIGN', 'NEEDS_FINANCING', 'NEED_FINANCING', 'READY_TO_START', 'NOT_SURE')),
  owns_property text,
  has_plans text,
  has_permits text,
  needs_financing text,
  business_name text,
  owner_name text,
  email text,
  phone text,
  website text,
  industry text,
  monthly_revenue_range text,
  years_in_business text,
  number_of_employees text,
  finance_need text check (finance_need is null or finance_need in ('BUSINESS_BANKING', 'BUSINESS_CREDIT', 'EXPENSE_MANAGEMENT', 'VENDOR_PAYMENTS', 'BILL_PAY', 'WORKING_CAPITAL', 'AP_AUTOMATION', 'AR_AUTOMATION', 'GLOBAL_PAYMENTS', 'PROJECT_FINANCING', 'NOT_SURE')),
  preferred_contact_method text,
  consent_to_review boolean not null default false,
  consent_to_contact boolean not null default false,
  consent_to_share_with_approved_partners boolean not null default false,
  status text not null default 'NEW_BUILDING_LEAD' check (status in (
    'NEW_BUILDING_LEAD',
    'HOME_PROJECT_REVIEW',
    'ROUTED_TO_FORGE_PRO',
    'MAJOR_PROJECT_REVIEW',
    'NEEDS_MORE_INFO',
    'FORGE_QUALIFIED',
    'CUSTOMER_CONSENT_REQUESTED',
    'CUSTOMER_CONSENT_APPROVED',
    'SENECA_REVIEW_ELIGIBLE',
    'SENT_TO_SENECA',
    'SENECA_REVIEWING',
    'SENECA_ACCEPTED',
    'SENECA_DECLINED',
    'FLEX_REVIEW_ELIGIBLE',
    'SENT_TO_FLEX',
    'FLEX_REVIEWING',
    'FLEX_ACCEPTED',
    'FLEX_DECLINED',
    'PROPOSAL_REQUESTED',
    'SITE_VISIT_SCHEDULED',
    'CONTRACT_PENDING',
    'WON',
    'LOST',
    'NOT_A_FIT'
  )),
  assigned_partner_id uuid references public.partners(id) on delete set null,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.building_lead_notes (
  id uuid primary key default gen_random_uuid(),
  building_lead_id uuid not null references public.building_leads(id) on delete cascade,
  author_name text,
  body text not null,
  created_at timestamptz not null default now()
);

alter table if exists public.partner_referrals add column if not exists building_lead_id uuid references public.building_leads(id) on delete cascade;
alter table if exists public.partner_referrals add column if not exists commissionable boolean not null default false;

create table if not exists public.partner_documents (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  document_type text not null,
  status text not null default 'MISSING',
  file_url text,
  verified_at timestamptz,
  expires_at timestamptz,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (partner_id, document_type)
);

insert into public.partners (slug, name, subtitle, region, focus, contact_relationship_note, partner_type, approved, public_display_enabled, logo_use_approved, referral_agreement_signed, data_sharing_approved, official_partner_language_approved, feature_flag, status, public_display_rule, admin_description, best_fit, disclaimer)
values
  (
    'seneca-development-co',
    'Seneca Development Co.',
    'Major Project & Development Candidate',
    'Oregon / Southwest Washington',
    'Multifamily, mixed-use, commercial property, land development, investor-backed builds, and major renovations',
    'Michael Hamilton relationship - pending approval.',
    'MAJOR_PROJECT_DEVELOPMENT',
    false,
    false,
    false,
    false,
    false,
    false,
    'senecaPartnerApproved',
    'Draft partner record',
    'Do not show Seneca publicly as an official partner unless approved is true and publicDisplayEnabled is true.',
    'Seneca Development Co. is being tracked as a potential major-project and development partner candidate for serious real estate, construction, multifamily, mixed-use, and development opportunities in Oregon and Washington. No public partnership claim, logo use, customer data sharing, or official language is allowed until written approval is recorded.',
    array['Multifamily development', 'Mixed-use development', 'Apartment upgrades', 'Commercial property improvements', 'Land development', 'Investor-backed builds', 'Major renovations', 'Portland metro / Oregon / Southwest Washington opportunities'],
    'Partner routing is subject to approval, project fit, licensing, insurance, and written partner agreement.'
  ),
  (
    'flex',
    'Flex',
    'Business Finance Candidate',
    'Configurable through FLEX_APP_URL or Forge Capital Desk',
    'Business banking, credit, expense management, bill pay, vendor payments, working capital, AP/AR automation, and finance operations',
    'Zaid relationship - pending approval.',
    'BUSINESS_FINANCE',
    false,
    false,
    false,
    false,
    false,
    false,
    'flexPartnerApproved',
    'Draft partner record',
    'Do not show Flex publicly as an official partner unless approved is true and publicDisplayEnabled is true.',
    'Flex is being tracked as a potential contractor finance and business-tools partner candidate for builders, contractors, service businesses, and project operators who need business banking, credit, expense management, bill pay, vendor payments, working capital, AP/AR automation, and related business finance tools. No public partnership claim, logo use, customer data sharing, or official language is allowed until written approval is recorded.',
    array['Contractors', 'Builders', 'Remodelers', 'Blue-collar service businesses', 'Project operators', 'Businesses with vendor payments', 'Businesses with cash-flow gaps', 'Businesses needing expense controls', 'Businesses needing AP/AR automation'],
    'Finance partner routing is subject to written approval, consent, eligibility, partner terms, and data-sharing approval. Forge is not a lender, bank, broker-dealer, financial advisor, or credit provider.'
  )
on conflict (slug) do update set
  contact_relationship_note = excluded.contact_relationship_note,
  partner_type = excluded.partner_type,
  approved = false,
  public_display_enabled = false,
  logo_use_approved = false,
  referral_agreement_signed = false,
  data_sharing_approved = false,
  official_partner_language_approved = false,
  status = excluded.status,
  public_display_rule = excluded.public_display_rule,
  admin_description = excluded.admin_description,
  best_fit = excluded.best_fit,
  updated_at = now();

alter table public.partners enable row level security;
alter table public.building_leads enable row level security;
alter table public.building_lead_notes enable row level security;
alter table public.partner_documents enable row level security;
alter table if exists public.partner_referrals enable row level security;
