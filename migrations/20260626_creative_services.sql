-- Additive Photography & Videography intake tables for Forge.
-- Existing forge_job_leads and forge_worker_leads remain valid generic intake targets.

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

alter table public.creative_service_requests enable row level security;
alter table public.creative_provider_applications enable row level security;
