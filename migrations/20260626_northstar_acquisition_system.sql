-- North Star Creative Co. client acquisition system migration
-- Additive only: preserves existing Forge worker leads and North Star lead records.

alter table public.forge_worker_leads
  add column if not exists business_size text,
  add column if not exists north_star_marketing_need text,
  add column if not exists business_growth_tools text[];

alter table public.northstar_marketing_operations_leads
  add column if not exists google_business_profile_url text,
  add column if not exists service_categories text[],
  add column if not exists service_areas text,
  add column if not exists years_in_business text,
  add column if not exists number_of_employees text,
  add column if not exists number_of_crews text,
  add column if not exists business_size text,
  add column if not exists marketing_need text,
  add column if not exists current_ad_spend text,
  add column if not exists current_monthly_lead_volume text,
  add column if not exists answer_every_call text,
  add column if not exists has_crm text,
  add column if not exists needs_hiring_help text,
  add column if not exists residential_commercial_mix text,
  add column if not exists needs_photos_videos text,
  add column if not exists wants_marketing_audit text,
  add column if not exists forge_marketing_score jsonb,
  add column if not exists total_score integer,
  add column if not exists lead_classification text,
  add column if not exists urgency text,
  add column if not exists assigned_owner text,
  add column if not exists notes text;

create index if not exists northstar_marketing_operations_leads_classification_idx
  on public.northstar_marketing_operations_leads (lead_classification);

create index if not exists northstar_marketing_operations_leads_status_urgency_idx
  on public.northstar_marketing_operations_leads (status, urgency);
