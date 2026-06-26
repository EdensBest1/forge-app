-- Forge public beta database schema
-- Run in Supabase SQL editor after creating a project.
-- Public browser code should not use the service role key.
-- Recommended intake path: Zapier webhook, API route, or Supabase Edge Function validates input and writes to these tables.
-- Photography & Videography customer requests should use forge_job_leads.category = 'photography_videography'.
-- Photography & Videography provider applications should use forge_worker_leads.trade/category metadata value 'photography_videography' in the incoming payload.
-- NorthStar Creative Co. requests should use category = 'northstar_creative' and secondary_category = 'northstar_marketing_operations'.

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

create table if not exists public.forge_bids (
  id uuid primary key default gen_random_uuid(),
  source_id text,
  job_source_id text,
  worker_name text,
  amount text,
  timeline text,
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
  social_link text,
  services_needed text[],
  budget_range text,
  biggest_problem text,
  goal_30_90_days text,
  contact_consent boolean not null default false,
  status text not null default 'New',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.forge_job_leads enable row level security;
alter table public.forge_worker_leads enable row level security;
alter table public.forge_referral_leads enable row level security;
alter table public.forge_opportunity_leads enable row level security;
alter table public.forge_bids enable row level security;
alter table public.forge_messages enable row level security;
alter table public.forge_delivery_events enable row level security;
alter table public.forge_activity_events enable row level security;
alter table public.creative_service_requests enable row level security;
alter table public.creative_provider_applications enable row level security;
alter table public.northstar_marketing_operations_leads enable row level security;

-- Public beta recommendation:
-- Do not add anonymous insert policies until server-side validation is ready.
-- Write through a server-owned route, Zapier action, or Supabase Edge Function using service credentials stored server-side.
