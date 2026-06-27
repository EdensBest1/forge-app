-- Additive monetization, boost, verification, and ranking-audit schema.
-- No live payment processing is enabled by this migration.

create table if not exists public.monetization_plans (
  id text primary key,
  app text not null check (app in ('forge', 'stitch', 'admitly')),
  name text not null,
  slug text not null,
  billing_interval text not null check (billing_interval in ('monthly', 'annual', 'one_time', 'package')),
  monthly_price_cents integer not null default 0,
  annual_price_cents integer not null default 0,
  description text,
  features jsonb not null default '[]'::jsonb,
  limits jsonb not null default '{}'::jsonb,
  ranking_multiplier numeric not null default 1,
  boost_credits_per_month integer not null default 0,
  verification_included boolean not null default false,
  analytics_included boolean not null default false,
  profile_enhancement_included boolean not null default false,
  support_level text not null default 'standard',
  active boolean not null default true,
  sort_order integer not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.monetization_addons (
  id text primary key,
  app text not null check (app in ('forge', 'stitch', 'admitly')),
  name text not null,
  slug text not null,
  price_cents integer not null default 0,
  type text not null check (type in ('boost', 'super_bid', 'featured_listing', 'lead_unlock', 'verification_review', 'profile_buildout', 'buyer_blast', 'essay_review', 'concierge')),
  duration_minutes integer,
  duration_days integer,
  quantity integer not null default 1,
  active boolean not null default true,
  terms_disclaimer text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.monetization_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  organization_id text,
  app text not null check (app in ('forge', 'stitch', 'admitly')),
  plan_id text not null references public.monetization_plans(id),
  status text not null check (status in ('trialing', 'active', 'past_due', 'canceled', 'expired')),
  current_period_start timestamptz,
  current_period_end timestamptz,
  provider text not null check (provider in ('stripe', 'manual', 'comped', 'demo')),
  provider_subscription_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.monetization_boosts (
  id uuid primary key default gen_random_uuid(),
  app text not null check (app in ('forge', 'stitch', 'admitly')),
  target_type text not null check (target_type in ('provider_profile', 'business_profile', 'product_listing', 'job_post', 'student_profile', 'school_profile')),
  target_id text not null,
  purchaser_id text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'scheduled',
  boost_weight integer not null default 10,
  geo_scope jsonb not null default '{}'::jsonb,
  category_scope jsonb not null default '{}'::jsonb,
  daily_cap integer,
  impressions integer not null default 0,
  clicks integer not null default 0,
  conversions integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.monetization_verifications (
  id uuid primary key default gen_random_uuid(),
  app text not null check (app in ('forge', 'stitch', 'admitly')),
  target_type text not null,
  target_id text not null,
  verification_type text not null check (verification_type in ('identity', 'business', 'license', 'insurance', 'background', 'COA', 'METRC', 'school', 'counselor', 'parent_guardian')),
  status text not null check (status in ('not_started', 'submitted', 'needs_review', 'approved', 'rejected', 'expired')),
  reviewed_by text,
  evidence_refs jsonb not null default '[]'::jsonb,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.discovery_ranking_audits (
  id uuid primary key default gen_random_uuid(),
  app text not null check (app in ('forge', 'stitch', 'admitly')),
  target_type text not null,
  target_id text not null,
  ranking_score integer not null,
  labels text[] not null default '{}',
  reasons jsonb not null default '[]'::jsonb,
  blocked_reason text,
  is_sponsored boolean not null default false,
  is_verified boolean not null default false,
  context jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists monetization_plans_app_idx on public.monetization_plans(app, active, sort_order);
create index if not exists monetization_addons_app_idx on public.monetization_addons(app, active, type);
create index if not exists monetization_subscriptions_app_status_idx on public.monetization_subscriptions(app, status, current_period_end);
create index if not exists monetization_boosts_discovery_idx on public.monetization_boosts(app, target_type, target_id, status, ends_at);
create index if not exists monetization_verifications_target_idx on public.monetization_verifications(app, target_type, target_id, verification_type, status);
create index if not exists discovery_ranking_audits_app_score_idx on public.discovery_ranking_audits(app, ranking_score desc, created_at desc);

alter table public.monetization_plans enable row level security;
alter table public.monetization_addons enable row level security;
alter table public.monetization_subscriptions enable row level security;
alter table public.monetization_boosts enable row level security;
alter table public.monetization_verifications enable row level security;
alter table public.discovery_ranking_audits enable row level security;
