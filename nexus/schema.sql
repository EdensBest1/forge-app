-- Nexus multi-tenant durable state schema (PostgreSQL-compatible)
-- Apply only to an approved production database. Do not store raw credentials or secret values here.

create table if not exists nexus_tenants (
  id text primary key,
  name text not null,
  workspace_type text not null check (workspace_type in ('internal-business','northstar-client','sandbox')),
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists nexus_workspaces (
  id text not null,
  tenant_id text not null references nexus_tenants(id) on delete cascade,
  name text not null,
  service_plan text,
  retention_days integer not null default 365,
  entitlements jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (tenant_id, id)
);

create table if not exists nexus_tasks (
  id text primary key,
  tenant_id text not null,
  workspace_id text not null,
  agent_id text,
  objective text not null,
  action text not null,
  status text not null,
  risk_tags jsonb not null default '[]'::jsonb,
  payload_envelope jsonb,
  requested_by text,
  approved_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (tenant_id, workspace_id) references nexus_workspaces(tenant_id, id) on delete cascade
);

create table if not exists nexus_agent_runs (
  id bigserial primary key,
  task_id text not null references nexus_tasks(id) on delete cascade,
  tenant_id text not null,
  workspace_id text not null,
  agent_id text not null,
  mode text not null,
  status text not null,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  usage jsonb not null default '{}'::jsonb,
  result_envelope jsonb,
  error_code text
);

create table if not exists nexus_approvals (
  id bigserial primary key,
  task_id text not null references nexus_tasks(id) on delete cascade,
  tenant_id text not null,
  workspace_id text not null,
  risk_tags jsonb not null default '[]'::jsonb,
  requested_at timestamptz not null default now(),
  resolved_at timestamptz,
  resolved_by text,
  decision text check (decision in ('approved','rejected','expired')),
  reason text
);

create table if not exists nexus_audit_log (
  id bigserial primary key,
  tenant_id text not null,
  workspace_id text not null,
  task_id text,
  agent_id text,
  event_type text not null,
  decision text,
  reason text,
  risk_tags jsonb not null default '[]'::jsonb,
  event_envelope jsonb,
  created_at timestamptz not null default now()
);

create table if not exists nexus_incidents (
  id bigserial primary key,
  tenant_id text,
  workspace_id text,
  severity text not null check (severity in ('low','medium','high','critical')),
  code text not null,
  summary text not null,
  status text not null default 'open',
  evidence jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create table if not exists nexus_memory (
  id bigserial primary key,
  tenant_id text not null,
  workspace_id text not null,
  memory_key text not null,
  content_envelope jsonb not null,
  metadata jsonb not null default '{}'::jsonb,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, workspace_id, memory_key),
  foreign key (tenant_id, workspace_id) references nexus_workspaces(tenant_id, id) on delete cascade
);

create table if not exists nexus_secret_references (
  id bigserial primary key,
  tenant_id text not null,
  workspace_id text not null,
  secret_name text not null,
  provider text not null,
  external_reference text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, workspace_id, secret_name)
);

create index if not exists idx_nexus_tasks_workspace on nexus_tasks(tenant_id, workspace_id, created_at desc);
create index if not exists idx_nexus_runs_workspace on nexus_agent_runs(tenant_id, workspace_id, started_at desc);
create index if not exists idx_nexus_audit_workspace on nexus_audit_log(tenant_id, workspace_id, created_at desc);
create index if not exists idx_nexus_incidents_open on nexus_incidents(status, severity, created_at desc);
create index if not exists idx_nexus_memory_workspace on nexus_memory(tenant_id, workspace_id, updated_at desc);

-- Row-level security is strongly recommended when the chosen provider supports application roles.
-- The runtime must additionally enforce tenant/workspace scoping server-side on every operation.
