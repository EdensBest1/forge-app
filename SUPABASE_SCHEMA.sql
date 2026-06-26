-- Forge public beta database schema
-- Run in Supabase SQL editor after creating a project.
-- Public browser code should not use the service role key.
-- Recommended intake path: Zapier webhook, API route, or Supabase Edge Function validates input and writes to these tables.
-- Photography & Videography customer requests should use forge_job_leads.category = 'photography_videography'.
-- Photography & Videography provider applications should use forge_worker_leads.trade/category metadata value 'photography_videography' in the incoming payload.

create extension if not exists pgcrypto;

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

alter table public.forge_job_leads enable row level security;
alter table public.forge_worker_leads enable row level security;
alter table public.forge_referral_leads enable row level security;
alter table public.forge_opportunity_leads enable row level security;
alter table public.forge_bids enable row level security;
alter table public.forge_messages enable row level security;
alter table public.forge_delivery_events enable row level security;
alter table public.forge_activity_events enable row level security;

-- Public beta recommendation:
-- Do not add anonymous insert policies until server-side validation is ready.
-- Write through a server-owned route, Zapier action, or Supabase Edge Function using service credentials stored server-side.
