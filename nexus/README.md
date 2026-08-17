# Nexus 60-Agent Autonomous Workforce

This directory contains the runnable Nexus multi-agent control plane for Forge and the wider portfolio.

## What is implemented

- 50 core enabled agent definitions in `agents.json`
- 10 enabled security, resilience, cost-governance, and Northstar client-workspace extensions in `agents-extension.json`
- 60 total agents loaded by `orchestrator.mjs`
- explicit autonomy tiers A0/A1/A2
- hard approval gates for money, contracts, legal/tax actions, regulated cannabis actions, employment decisions, bulk messaging, credentials, production-destructive changes, and record deletion
- task router that selects the best agent by preferred ID, business, department, and mission terms
- scheduler tick for hourly and daily operating checks
- provider-agnostic live agent runner integration through `NEXUS_AGENT_RUNNER_URL`
- embedded deterministic runner for safe zero-cost internal preparation
- audit record generation for every decision
- Forge enterprise campaign runner that creates one internal preparation task for every agent

## Runtime model

Nexus uses the following hierarchy:

`Human owner -> NX-001 Chief of Staff -> NX-002 Orchestrator -> business/shared specialist agents -> NX-005 QA / NX-004 Approval & Risk`

The scheduler `NX-010` calls scheduled agents. Event-driven tasks should be posted into the same `execute()` path from CRM, webhooks, email, calendar, lead sources, forms, accounting, or marketplace systems.

## Commands

```bash
node nexus/orchestrator.mjs
node nexus/orchestrator.mjs --tick
node nexus/orchestrator.mjs --registry
node nexus/smoke-test.mjs
node nexus/orchestrator.mjs --task='{"business":"forge","department":"vertical","objective":"Review stale commercial roofing leads"}'
node nexus/campaigns/run-forge-enterprise-campaign.mjs --concurrency=8
```

The Forge enterprise campaign command loads all 60 agents, submits one internal preparation task to each agent, requests no external side effects, and writes the result bundle to `.nexus-runtime/`.

## Live reasoning/tool runner

Without a runner URL, Nexus uses the embedded deterministic runner. This makes the repository safe to deploy before API keys or third-party tool credentials are connected.

Set:

```bash
NEXUS_AGENT_RUNNER_URL=https://your-secure-agent-runner.example/run
NEXUS_AGENT_RUNNER_TOKEN=...
NEXUS_TASK_TIMEOUT_MS=120000
NEXUS_DAILY_UTC_HOUR=13
```

The runner receives:

```json
{
  "system": "Nexus Autonomous Agent Workforce",
  "agent": { "id": "...", "mission": "...", "autonomy": "..." },
  "task": { "task_id": "...", "objective": "...", "risk_tags": [] },
  "policy": { "hard_gates": [] }
}
```

The runner should return a structured JSON result. Any real tool adapters must enforce the same approval policy server-side; the model is never the security boundary.

## Required production integrations

To become fully operational rather than a preparation and control plane, connect the runner to the systems Nexus is permitted to use. Typical adapters are CRM/Monday, email, calendar, telephony, accounting/payment status, Forge database, Stitch database/compliance sources, Northstar marketing channels, analytics, document storage, and alerting.

Credentials must remain in encrypted environment variables or a secrets manager. Do not put API keys in this repository.

## Autonomy rules

### A0 - advisory

Research, analyze, classify, and draft only. No external side effects.

### A1 - queue and approve

May update internal records and prepare actions. External writes require approval.

### A2 - bounded autonomous

May perform low-risk internal work and approved low-risk automations within rate/volume limits. Hard-gated actions still require human approval.

## Definition of automatic

Automatic means agents can be invoked by schedules or events without a human manually prompting each one. It does **not** mean unconstrained access. Every agent has a defined mission, autonomy level, audit trail, and escalation path.

The 60 agents are AI/workflow roles. They must never be represented as 60 human workers or as guaranteed external execution capacity.

## Next engineering milestones

1. Connect a production reasoning/tool runner.
2. Add durable task/event storage instead of process-only execution.
3. Add approval inbox UI in Nexus.
4. Add integration adapters for Forge CRM and Northstar first.
5. Restore the authenticated Forge email sender and suppression-list workflow.
6. Add per-agent KPI dashboards and cost controls.
7. Add dead-letter queue, retries, idempotency keys, and incident alerts.
8. Add sandbox-to-production promotion and security review.
