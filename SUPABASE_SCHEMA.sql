-- Forge public beta database schema
-- Run in Supabase SQL editor after creating a project.
-- Public browser code should not use the service role key.
-- Recommended intake path: Zapier webhook, API route, or Supabase Edge Function validates input and writes to these tables.
-- Photography & Videography customer requests should use forge_job_leads.category = 'photography_videography'.
-- Photography & Videography provider applications should use forge_worker_leads.trade/category metadata value 'photography_videography' in the incoming payload.
-- NorthStar Creative Co. requests should use category = 'northstar_creative' and secondary_category = 'northstar_marketing_operations'.
-- Forge Manufacturing + Nutraceuticals should use original Forge RFQ/profile data only. Do not import copied supplier-directory listings.

create extension if not exists pgcrypto;

do $$
begin
  if not exists (
    select 1 from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where t.typname = 'creative_service_request_status'
      and n.nspname = 'public'
  ) then
    create type public.creative_service_request_status as enum (
      'submitted',
      'reviewing',
      'quoted',
      'accepted',
      'assigned',
      'completed',
      'canceled'
    );
  end if;
end
$$;

do $$
begin
  if not exists (
    select 1 from pg_type t
    join pg_namespace n on n.oid = t.typnamespace
    where t.typname = 'creative_provider_application_status'
      and n.nspname = 'public'
  ) then
    create type public.creative_provider_application_status as enum (
      'draft',
      'submitted',
      'under_review',
      'approved',
      'rejected',
      'suspended'
    );
  end if;
end
$$;

create table if not exists public.forge_job_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  title text not null,
  category text,
  location text,
  urgency text,
  budget text,
  description text,
  customer_name text,
  phone text,
  email text,
  status text not null default 'New',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_worker_leads (
  id uuid primary key default gen_random_uuid(),
  source_email text,
  name text not null,
  trade text,
  phone text,
  email text,
  experience text,
  service_area text,
  business_size text,
  north_star_marketing_need text,
  business_growth_tools text[],
  status text not null default 'New',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_referral_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  name text not null,
  phone text,
  email text,
  type text,
  priority text,
  note text,
  status text not null default 'New',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_opportunity_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  name text not null,
  phone text,
  email text,
  goal text,
  experience text,
  location text,
  note text,
  status text not null default 'New',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.trade_pathway_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  source_app text not null default 'admitly',
  lead_type text not null default 'Admitly Trade Pathways',
  full_name text not null,
  phone text,
  email text,
  city text,
  state text,
  education_level text,
  age_range text,
  pathway text,
  desired_trade text,
  timeline text,
  funding_need text,
  work_experience text,
  resume_text text,
  essay_help boolean not null default false,
  scholarship_help boolean not null default false,
  job_help boolean not null default false,
  consent_to_contact boolean not null default false,
  status text not null default 'New Lead',
  priority text not null default 'Warm',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_academy_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  source_app text not null default 'forge',
  lead_type text not null default 'Student / Worker Career Intake',
  full_name text not null,
  phone text,
  email text,
  city text,
  state text,
  desired_trade text,
  current_experience text,
  has_transportation text,
  has_drivers_license text,
  needs_training boolean not null default false,
  needs_job_now boolean not null default false,
  needs_resume boolean not null default false,
  interested_career_plus boolean not null default false,
  consent_to_contact boolean not null default false,
  status text not null default 'New Lead',
  priority text not null default 'Warm',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_career_profiles (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  source_app text not null default 'forge',
  full_name text not null,
  phone text,
  email text,
  city text,
  state text,
  desired_trade text,
  skills text[],
  certifications text[],
  work_history_summary text,
  resume_ready boolean not null default false,
  looking_for_work boolean not null default true,
  looking_for_training boolean not null default false,
  priority_job_alerts boolean not null default false,
  career_plus_status text not null default 'Not Active',
  consent_to_contact boolean not null default false,
  status text not null default 'Profile Started',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.school_partners (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  source_app text not null default 'admitly',
  school_name text not null,
  contact_name text,
  phone text,
  email text,
  program_types text,
  location text,
  cost_range text,
  financial_aid_available text,
  enrollment_deadlines text,
  accreditation_notes text,
  status text not null default 'New Lead',
  priority text not null default 'Warm',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.employer_training_partners (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  source_app text not null default 'forge',
  business_name text not null,
  contact_name text,
  phone text,
  email text,
  trade_category text,
  hiring_needs text,
  apprenticeship_availability text,
  willing_to_train text,
  insurance_license_notes text,
  written_partner_terms boolean not null default false,
  status text not null default 'New Lead',
  priority text not null default 'Warm',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resume_requests (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  source_app text not null default 'forge',
  lead_type text not null default 'Forge Career+ Resume Request',
  full_name text not null,
  phone text,
  email text,
  city text,
  state text,
  desired_trade text,
  current_experience text,
  resume_text text,
  consent_to_contact boolean not null default false,
  career_plus_status text not null default 'Placeholder',
  status text not null default 'New Lead',
  priority text not null default 'Warm',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_vehicle_seller_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  seller_name text not null,
  phone text,
  email text,
  preferred_contact text,
  intent text,
  vehicle_year text,
  make text,
  model text,
  trim text,
  asking_price text,
  private_lowest_price text,
  mileage text,
  vin_or_last_six text,
  exterior_color text,
  interior_color text,
  fuel_type text,
  drivetrain text,
  transmission text,
  plate_state text,
  vehicle_location text,
  sell_timeline text,
  condition text,
  running_status text,
  title_status text,
  loan_lien_status text,
  payoff_amount text,
  accident_history text,
  service_records text,
  smog_status text,
  keys_status text,
  description text,
  mechanical_issues text,
  cosmetic_issues text,
  photo_notes text,
  wants_replacement boolean not null default false,
  consent_to_partner_contact boolean not null default false,
  tags text[] not null default '{}',
  assigned_partner_path text,
  route text,
  lead_score integer default 0,
  review_status text not null default 'New Lead',
  estimated_forge_revenue text,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_operations_vault_documents (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null,
  title text not null,
  document_type text not null,
  owner text,
  status text not null default 'Draft',
  version text,
  last_reviewed date,
  tags text[] not null default '{}',
  checklist jsonb not null default '[]'::jsonb,
  body text not null,
  attorney_review_required boolean not null default false,
  internal_only boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_bids (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  job_source_id text,
  worker_name text,
  amount text,
  timeline text,
  earliest_availability text,
  estimated_duration text,
  crew_members text,
  materials_included text,
  supplies_included text,
  equipment_included text,
  dump_fees_included text,
  laundry_included text,
  restocking_included text,
  recurring_available text,
  manufacturing_moq text,
  manufacturing_unit_cost text,
  manufacturing_setup_fee text,
  manufacturing_sample_fee text,
  manufacturing_packaging_cost text,
  manufacturing_labeling_cost text,
  manufacturing_testing_cost text,
  manufacturing_lead_time text,
  manufacturing_production_timeline text,
  manufacturing_payment_terms text,
  manufacturing_certifications text,
  manufacturing_testing_included text,
  manufacturing_formulation_included text,
  manufacturing_packaging_included text,
  manufacturing_fulfillment_included text,
  manufacturing_nda_required text,
  manufacturing_questions text,
  experience_note text,
  message text,
  rating text,
  reviews integer default 0,
  status text not null default 'Submitted',
  chosen boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_messages (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  thread_id text,
  sender_name text,
  recipient_name text,
  body text not null,
  status text not null default 'Sent',
  created_at timestamptz not null default now()
);

create table if not exists public.forge_delivery_events (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null,
  delivery_status text not null,
  payload jsonb,
  error text,
  created_at timestamptz not null default now()
);

create table if not exists public.forge_activity_events (
  id uuid primary key default gen_random_uuid(),
  event_text text not null,
  created_at timestamptz not null default now()
);

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
  status text default 'new',
  notes text
);

create table if not exists public.creative_service_requests (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  customer_name text not null,
  email text not null,
  phone text not null,
  city text not null,
  service_type text not null,
  shoot_date date,
  shoot_start_time text,
  estimated_duration text,
  shoot_location text not null,
  media_type text not null,
  budget_range text not null,
  delivery_deadline text,
  event_description text not null,
  venue_name text,
  guest_count text,
  number_of_locations text,
  indoor_outdoor text,
  style_preference text,
  inspiration_link text,
  inspiration_uploads text,
  shot_list text,
  second_shooter_needed text,
  drone_requested text,
  raw_footage_requested text,
  social_clips_requested text,
  same_day_preview_requested text,
  contact_consent boolean not null default false,
  terms_accepted boolean not null default false,
  privacy_acknowledged boolean not null default false,
  status public.creative_service_request_status not null default 'submitted',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.creative_provider_applications (
  id uuid primary key default gen_random_uuid(),
  source_email text,
  first_name text not null,
  last_name text not null,
  business_name text,
  email text not null,
  phone text not null,
  city text not null,
  services_offered text not null,
  portfolio_link text not null,
  social_link text,
  years_experience text not null,
  gear_summary text not null,
  editing_software text not null,
  availability text not null,
  service_area text not null,
  starting_rate text not null,
  wedding_experience text,
  event_experience text,
  real_estate_experience text,
  product_experience text,
  drone_capability text,
  drone_certification_upload text,
  insurance_upload text,
  sample_gallery_links text,
  video_reel_link text,
  profile_photo_upload text,
  bio text,
  insurance_notes text,
  provider_terms_accepted boolean not null default false,
  privacy_acknowledged boolean not null default false,
  featured boolean not null default false,
  status public.creative_provider_application_status not null default 'submitted',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.northstar_marketing_operations_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  category text not null default 'northstar_creative',
  secondary_category text not null default 'northstar_marketing_operations',
  contact_name text not null,
  business_name text not null,
  phone text not null,
  email text not null,
  city text,
  trade text,
  website text,
  google_business_profile_url text,
  social_link text,
  service_categories text[],
  service_areas text,
  years_in_business text,
  number_of_employees text,
  number_of_crews text,
  business_size text,
  marketing_need text,
  services_needed text[],
  budget_range text,
  current_ad_spend text,
  current_monthly_lead_volume text,
  biggest_problem text,
  answer_every_call text,
  has_crm text,
  needs_hiring_help text,
  residential_commercial_mix text,
  needs_photos_videos text,
  wants_marketing_audit text,
  forge_marketing_score jsonb,
  total_score integer,
  lead_classification text,
  urgency text,
  assigned_owner text,
  notes text,
  goal_30_90_days text,
  contact_consent boolean not null default false,
  status text not null default 'New',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  subtitle text,
  region text,
  focus text,
  contact_relationship_note text,
  partner_type text,
  approved boolean not null default false,
  public_display_enabled boolean not null default false,
  logo_use_approved boolean not null default false,
  referral_agreement_signed boolean not null default false,
  data_sharing_approved boolean not null default false,
  official_partner_language_approved boolean not null default false,
  feature_flag text,
  status text not null default 'Draft partner record',
  public_display_rule text,
  admin_description text,
  best_fit text[],
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

create table if not exists public.partner_referrals (
  id uuid primary key default gen_random_uuid(),
  project_lead_id uuid,
  building_lead_id uuid references public.building_leads(id) on delete cascade,
  partner_id uuid not null references public.partners(id) on delete restrict,
  status text not null default 'PENDING_REVIEW',
  approved_partner_at_send boolean not null default false,
  commissionable boolean not null default false,
  referral_fee_terms text,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.partner_referrals add column if not exists building_lead_id uuid references public.building_leads(id) on delete cascade;
alter table public.partner_referrals add column if not exists commissionable boolean not null default false;

create table if not exists public.partner_documents (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  document_type text not null check (document_type in ('W9', 'INSURANCE', 'LICENSE', 'BUSINESS_LICENSE', 'REFERRAL_AGREEMENT', 'LOGO_PERMISSION', 'NDA', 'NON_CIRCUMVENT', 'DATA_SHARING_AGREEMENT', 'OTHER')),
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
  ),
  (
    'marc-portland-luxury-auto-partner',
    'Private Luxury Auto Partner',
    'Luxury Auto Fulfillment Candidate',
    'Portland, Lake Oswego, Beaverton, Vancouver WA, and broader Oregon by admin approval',
    'Luxury car sourcing, exotic vehicle selling, premium SUV support, consignment, auction sourcing, and white-glove transport',
    'Private internal auto partner candidate. Do not publish personal or company branding without written approval.',
    'luxury_auto_partner',
    false,
    false,
    false,
    false,
    false,
    false,
    'forgePlatinumAutoConcierge',
    'Internal candidate record',
    'Do not publicly display the internal partner name, company name, branding, logo, photos, or services unless written approval and admin branding permission are confirmed. Forge Platinum Auto Concierge remains the customer-facing brand.',
    'Marc is approved as a potential Portland-area luxury automotive fulfillment partner for Forge Platinum Auto Concierge. Do not publicly display Marc''s name, company name, branding, logo, photos, or services unless written approval and admin branding permission are confirmed. Forge Platinum remains the customer-facing brand.',
    array['Luxury cars', 'Exotic vehicles', 'Premium SUVs', 'Executive transport', 'High-value consignment', 'Auction vehicle sourcing', 'Portland metro auto needs'],
    'Partner routing is subject to customer consent, partner approval, licensing, written agreement, and admin branding permission.'
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

-- Safe schema suggestions for Forge Manufacturing + Nutraceuticals.
-- These tables are additive only and should be written through a server route, Zapier action, or Supabase Edge Function.
create table if not exists public.manufacturing_nutraceutical_rfqs (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  customer_company_name text,
  product_idea text,
  product_type text not null,
  brand_name text not null,
  formula_status text,
  dosage_form text,
  ingredients_requested text,
  ingredients_to_avoid text,
  flavor_preferences text,
  sweetener_preferences text,
  serving_size text,
  servings_per_container text,
  target_retail_price text,
  target_customer text,
  estimated_first_order_quantity text,
  desired_moq text,
  target_quantity text,
  desired_packaging text,
  ingredient_requirements text,
  clean_label_requirements text[],
  cbd_hemp_involved text,
  label_design_needed text,
  compliance_review_needed text,
  testing_needs text,
  certifications_required text[],
  fulfillment_needed text,
  dropshipping_needed text,
  target_launch_date date,
  budget_range text,
  location_preference text,
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  spec_upload_summary text,
  label_upload_summary text,
  ingredient_deck_upload_summary text,
  product_reference_upload_summary text,
  packaging_reference_upload_summary text,
  coa_upload_summary text,
  brand_guide_upload_summary text,
  status text not null default 'Request received',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.manufacturing_supplier_profiles (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  company_name text not null,
  contact_person text,
  location text,
  service_area text,
  ships_nationwide text,
  supplier_type text not null,
  products_manufactured text,
  capabilities text,
  product_categories text[],
  dosage_forms text[],
  minimum_order_quantity text,
  estimated_lead_time text,
  starting_project_budget text,
  certifications text[],
  testing_offered text[],
  current_capacity text,
  accepting_new_clients text,
  sample_development_support boolean not null default false,
  nda_available boolean not null default false,
  insurance text,
  facility_type text,
  turnaround_time text,
  packaging_options text,
  ingredient_sourcing_support boolean not null default false,
  formulation_support boolean not null default false,
  custom_formulation_support boolean not null default false,
  white_label_catalog_support boolean not null default false,
  flavoring_support boolean not null default false,
  packaging_support boolean not null default false,
  label_design_support boolean not null default false,
  testing_lab_support boolean not null default false,
  compliance_support boolean not null default false,
  private_label_support boolean not null default false,
  fulfillment_support boolean not null default false,
  website text,
  phone_email text,
  lead_source text,
  source_url text,
  source_notes text,
  date_added date,
  outreach_status text,
  last_contacted date,
  next_follow_up_date date,
  relationship_owner text,
  logo_upload_summary text,
  certification_upload_summary text,
  product_photo_upload_summary text,
  bio text,
  notes text,
  verified_by_forge text not null default 'Placeholder only',
  status text not null default 'Needs Review',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.manufacturing_supplier_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  company_name text not null,
  contact_name text,
  phone text,
  email text,
  website text,
  city text,
  state text,
  country text,
  supplier_category text,
  capabilities text,
  certifications text,
  product_types text,
  moq text,
  lead_time text,
  notes text,
  lead_source text not null default 'Manual research',
  source_url text,
  date_discovered date,
  added_by text,
  outreach_status text not null default 'Not contacted',
  last_contacted date,
  next_follow_up_date date,
  follow_up_notes text,
  potential_opportunity_value text,
  related_forge_vertical text,
  tags text,
  permission_notice text not null default 'Only import supplier data you have permission to use.',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.personal_driver_requests (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  name text not null,
  phone text not null,
  email text,
  ride_type text,
  pickup_area text,
  dropoff_area text,
  ride_date date,
  ride_time_window text,
  recurring text,
  passengers text,
  accessibility_needs text,
  privacy_notes text,
  safety_status text not null default 'Admin review required',
  status text not null default 'New',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.personal_driver_provider_applications (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  business_name text,
  owner_name text not null,
  phone text not null,
  email text,
  service_area text,
  vehicle_type text,
  driver_license_status text,
  insurance text,
  background_check text,
  availability text,
  recurring_rides text,
  bio text,
  trust_tier text not null default 'Green',
  trust_rank text not null default 'Helper 1',
  dispatch_decision text not null default 'Admin Review',
  status text not null default 'Needs Review',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forge_merchant_service_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  business_name text not null,
  owner_name text not null,
  phone text not null,
  email text,
  industry text,
  city text,
  current_processor text,
  monthly_volume text,
  needs text[],
  notes text,
  admin_only_partner_note text,
  status text not null default 'New Lead',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.local_product_vendor_leads (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  maker_name text not null,
  contact_name text not null,
  phone text not null,
  email text,
  category text,
  products text,
  city text,
  fulfillment text,
  wholesale_interest text,
  photos_summary text,
  notes text,
  status text not null default 'Needs Review',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.worker_trust_proof_ledger (
  id uuid primary key default gen_random_uuid(),
  worker_source_id text,
  worker_name text,
  trust_tier text not null default 'Green',
  trust_rank text not null default 'Helper 1',
  dispatch_decision text not null default 'Admin Review',
  reference_status text,
  work_proof_status text,
  tools_vehicle_status text,
  safety_ppe_status text,
  license_insurance_status text,
  paid_trial_status text,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.forge_job_leads enable row level security;
alter table public.forge_worker_leads enable row level security;
alter table public.forge_referral_leads enable row level security;
alter table public.forge_opportunity_leads enable row level security;
alter table public.trade_pathway_leads enable row level security;
alter table public.forge_academy_leads enable row level security;
alter table public.forge_career_profiles enable row level security;
alter table public.school_partners enable row level security;
alter table public.employer_training_partners enable row level security;
alter table public.resume_requests enable row level security;
alter table public.forge_vehicle_seller_leads enable row level security;
alter table public.forge_operations_vault_documents enable row level security;
alter table public.forge_bids enable row level security;
alter table public.forge_messages enable row level security;
alter table public.forge_delivery_events enable row level security;
alter table public.forge_activity_events enable row level security;
alter table public.forge_flex_leads enable row level security;
alter table public.manufacturing_nutraceutical_rfqs enable row level security;
alter table public.manufacturing_supplier_profiles enable row level security;
alter table public.manufacturing_supplier_leads enable row level security;
alter table public.personal_driver_requests enable row level security;
alter table public.personal_driver_provider_applications enable row level security;
alter table public.forge_merchant_service_leads enable row level security;
alter table public.local_product_vendor_leads enable row level security;
alter table public.worker_trust_proof_ledger enable row level security;
alter table public.creative_service_requests enable row level security;
alter table public.creative_provider_applications enable row level security;
alter table public.northstar_marketing_operations_leads enable row level security;
alter table public.partners enable row level security;
alter table public.building_leads enable row level security;
alter table public.building_lead_notes enable row level security;
alter table public.partner_referrals enable row level security;
alter table public.partner_documents enable row level security;

-- Public beta recommendation:
-- Do not add anonymous insert policies until server-side validation is ready.
-- Write through a server-owned route, Zapier action, or Supabase Edge Function using service credentials stored server-side.
