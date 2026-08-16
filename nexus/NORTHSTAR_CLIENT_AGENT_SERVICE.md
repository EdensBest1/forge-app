# Northstar Nexus Agent Service

Nexus can serve Northstar clients in isolated workspaces while the same control plane continues operating internal businesses.

## Operating model

Each client receives a unique `tenant_id` and one or more `workspace_id` values. Every task, memory record, file reference, agent run, audit event, approval, incident, and secret reference must carry both identifiers. Client data must never be pooled into internal-company memory or another client's workspace.

Northstar client work is routed through NS-056 through NS-060, then delegated to approved shared specialist agents such as research, marketing, CRM, proposal, analytics, and project-management agents. The client entitlement layer determines which agents and external tools are available for that workspace.

## Automatic execution

The architecture supports four trigger types:

1. scheduled work through the Nexus scheduler;
2. event-driven work from CRM, forms, email, calendar, project-management, or webhooks;
3. API-triggered work through `/api/nexus/run`;
4. internal agent-to-agent delegation through the Nexus orchestrator.

Every trigger passes through Nexus Security Watchtower before normal authorization. High-risk actions remain approval-gated even when the client has enabled autonomous service.

## Client data storage

`nexus/state-store.mjs` provides a tenant-scoped durable storage contract. A production state service is configured with `NEXUS_STATE_STORE_URL` and `NEXUS_STATE_STORE_TOKEN`. Optional application-level AES-256-GCM encryption is enabled with `NEXUS_DATA_ENCRYPTION_KEY`. The backing store should use the schema in `nexus/schema.sql` or an equivalent implementation.

Raw secret values are not stored in workspace tables. Only external secret-manager references belong in Nexus state.

## Security boundary

The system denies cross-tenant reads and writes, shared memory across tenants, shared credentials across tenants, security-control disabling, and unapproved client-data exports. Money movement, contract acceptance, legal/tax filings, regulated cannabis actions, employment decisions, credential changes, destructive production changes, bulk messaging, record deletion, secret-material access, and cross-tenant data access remain hard gates.

Security is implemented at multiple layers:

- per-task security preflight;
- tenant-aware authorization;
- tenant-scoped storage keys;
- encrypted payload support;
- immutable-style audit append contract;
- hourly NX-053 Security Watchtower checks;
- NX-052 Tenant Isolation checks;
- NX-051 Data Custodian checks;
- NX-054 Backup & Recovery checks;
- NX-055 Cost Governor checks;
- GitHub Actions security-watch validation.

## Production definition

A client workspace is considered live only when the following are configured and tested: Nexus API token, live agent runner URL/token, durable state-store URL/token, encryption key or equivalent provider encryption controls, client-specific tool credentials or secret references, entitlements, retention policy, escalation contacts, and approval policy.

A workspace without these dependencies remains in safe dry-run mode rather than claiming an external action occurred.
