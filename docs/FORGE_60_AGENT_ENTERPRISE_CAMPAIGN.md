# Forge 60-Agent Enterprise Workforce + App Campaign

**Prepared:** August 17, 2026  
**Owner:** Andrew Oommen  
**Operating system:** Nexus -> Forge -> approved providers -> enterprise pilot -> reporting

## Executive objective

Build a verified enterprise database, identify actual blue-collar and service demand, recruit and qualify providers against validated demand, and sell a controlled Forge app pilot that organizes intake, qualification, scheduling/dispatch proposals, proof-of-work, follow-up, and reporting.

## Critical distinction

- **Flex (flex.one)** is the fintech reported by Reuters at an approximately $1.2 billion valuation after a July 2026 financing. The near-term Forge opportunity is the official referral/channel program plus a separate discussion about optional workforce/app support for relevant business customers.
- **Flex Ltd.** is a different advanced-manufacturing company. It is pursuing a power/cloud infrastructure spin-off and announced the EP2 acquisition. The Forge opportunity is supplier, facilities, skilled-trade, field-service, logistics, and workforce operations.

## What “60 agents” means

The repository contains 50 core Nexus agents plus 10 extension agents. They are AI/workflow roles, not 60 human workers. Their work should create and maintain the database, drafts, proposals, QA, approvals, dashboards, and operating records. External messages, staffing commitments, contracts, pricing, regulated actions, and employment decisions remain human-approved.

## Campaign workstreams

1. **Account intelligence:** 60 seed enterprise targets, with P0 accounts enriched first.
2. **Workforce demand discovery:** confirm trade, geography, schedule, site, licensing, safety, insurance, and classification requirements before recruiting.
3. **Provider pipeline:** recruit against real demand; verify credentials, insurance, availability, references, and legal engagement model.
4. **Forge app pilot:** demonstrate employer intake, CRM, provider proof, dispatch proposals, completion evidence, and reporting.
5. **Controlled outreach:** one-to-one, source-grounded, personalized messages only after sender and compliance gates are active.
6. **Governance:** preserve audit logs, approvals, data provenance, privacy, and separation between financial referrals and workforce services.

## Immediate P0 targets

Flex (flex.one), Flex Ltd., EP2, JetCool, BNBuilders, Morrow-Meadows, Best Contracting, Sunbelt Controls, Pacific Hospitality Group, Rosendin, DPR Construction, Turner Construction, Hensel Phelps, Skanska USA, and Clark Construction.

## App truth statement

Forge is currently positioned as a controlled beta. Pitch a pilot and demonstration, not a finished payroll, payment, insurance, or unrestricted staffing platform. Do not promise worker capacity until human verification and legal/insurance requirements are complete.

## External-send blockers

- Gmail previously returned `mail_service_not_enabled`.
- The campaign needs an authenticated Forge sender or approved alias.
- A valid Forge physical postal address must be inserted into commercial outreach.
- Opt-out processing and suppression records must be operational.
- P0 messages need human review and personalization.

## Run the campaign preparation pass

```bash
node nexus/campaigns/run-forge-enterprise-campaign.mjs --concurrency=8
```

This executes one internal preparation task for each of the 60 enabled agents and writes the result bundle to `.nexus-runtime/`. It deliberately requests no external side effects.

## Deliverables

- 60-agent campaign runner
- 60-account enterprise seed database
- segmented email and follow-up pack
- worker/service qualification matrix
- 30-day campaign calendar
- Flex dual-lane strategy
- executive workbook and PDF master plan
