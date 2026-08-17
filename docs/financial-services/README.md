# Forge protected financial-service profiles

This module defines two product service profiles under Forge/Nexus:

- `FS-CREDIT-001`: Credit Self-Help Workflow
- `FS-ACCOUNTING-001`: Accounting & Tax Readiness Service

They are **not additional workforce agents**. The Nexus workforce count remains exactly 60; these profiles describe controlled services that the existing workforce may support.

## Current operating boundary

The implementation is a non-networked policy prototype for classification and low-risk internal drafting. It has no email, banking, credit-bureau, vault, identity, ledger-write, tax-filing, payment, or government connector. The router never produces an external side effect, even when an input claims that approval has already been granted. It is not a production security, identity, evidence, or legal-compliance boundary.

Current safe functions include:

- credit education, report inventory, discrepancy classification, and evidence indexing;
- prototype financial-document organization by syntax-checked reference;
- transaction-category suggestions, reconciliation drafts, and exception queues;
- deadline tracking and professional-handoff preparation.

The prototype returns `denied` for explicit prohibited action identifiers and the adversarial text patterns covered by its test suite, including:

- public enrollment, intake, and protected-document submission for both financial profiles;
- raw or malformed sensitive-data references, including non-`vault://` schemes;
- false or blanket credit disputes;
- CPN or synthetic-identity activity;
- false identity-theft claims;
- requests to remove accurate credit information;
- autonomous tax filing, tax payment, or taxpayer representation.

Those checks are defense in depth, not proof that free text is truthful or complete. Correspondence drafting for disputes, debt validation, and goodwill requests is design-only and currently denied even when references and attestations are supplied. A production wrapper must authenticate the caller, bind a structured per-item discrepancy to vault-verified evidence, validate the customer's attestation, and independently re-enforce every prohibition.

It classifies external communications, account connections, PII sharing, settlements, journal posting, and filing workflows as approval-required. Approval classification does not execute the requested action.

The public surface is information-only. It does not enroll customers, accept contact or case intake, collect fees, or accept financial documents. Public commercialization of the credit service remains blocked until every item in `CREDIT_SERVICE_LAUNCH_GATES.md` has documented sign-off.

Accounting and tax-readiness scope should be reviewed against the IRS's official [small-business recordkeeping guidance](https://www.irs.gov/businesses/small-businesses-self-employed/why-should-i-keep-records), [PTIN requirements for paid return preparers](https://www.irs.gov/retirement-plans/preparer-tax-identification-number-information-for-employee-plans-professionals), and [tax-professional data-security guidance](https://www.irs.gov/DataSecurityGuide). There is no public intake path. Protected document workflows require a production vault and professional-scope review before activation.

## Files

- `nexus/financial-service-agents.json`: service profiles, scope, data model, roles, tiers, and handoff triggers.
- `nexus/financial-service-policy.json`: default-deny prototype rules, approval gates, tested PII-pattern controls, and audit contract.
- `nexus/financial-service-router.mjs`: pure routing and policy evaluation with no external effects.
- `nexus/financial-service-test.mjs`: safe-route, approval-route, deny-route, PII, and commercialization tests.

## Task contract

Use an explicit service, an allowlisted action, and one approved nonpublic deployment scope. Missing, conflicting, public, and unknown scopes fail closed. Oversized, overwide, overdeep, cyclic, or truncated inputs are denied instead of being partially inspected. Sensitive information must remain in an approved vault; the prototype router accepts only `vault://namespace/id` references in fields ending exactly in `_ref` or `_refs`, where `id` is a UUID or ULID generated independently of source data. A `_ref` value must be one reference string, while `_refs` must be a nonempty array of reference strings. Raw identifiers, other URI schemes, descriptive or identifier-derived handles, empty references, malformed references, excessive nesting, and reference-shaped `_id`/`_ids` fields are rejected.

Syntax validation is not proof that a vault object exists or that a caller may access it. The current router has no vault connector and is not a production security boundary. A production adapter must authenticate the caller, validate tenant/workspace authorization, resolve every reference, and confirm that the referenced object belongs to the authorized case before any protected processing.

```json
{
  "task_id": "credit-case-001",
  "tenant_id": "tenant-001",
  "workspace_id": "credit-self-help",
  "service": "credit_improvement",
  "deployment_scope": "personal_self_help",
  "action": "classify_report_discrepancy",
  "objective": "Classify one claimed discrepancy for later human review.",
  "payload": {
    "case_ref": "vault://cases/550e8400-e29b-41d4-a716-446655440000",
    "evidence_refs": ["vault://evidence/6ba7b810-9dad-41d1-80b4-00c04fd430c8"],
    "facts_attested": true
  }
}
```

Evidence-based dispute drafting is not active in this prototype. The future structured contract requires vault-validated evidence, an explicit fact attestation, a specific report item, and an allowlisted discrepancy type; production correspondence remains blocked until the authenticated adapter and human-review workflow exist.

Do not place names, addresses, email addresses, phone numbers, SSNs, EINs, dates of birth, bank or card information, credit reports, tax returns, passwords, tokens, or private keys anywhere in a task. The prototype rejects named sensitive fields and tested value formats across bounded task depth, but it is not a data-loss-prevention system and cannot reliably identify every name or obfuscated identifier. Upstream redaction and a real vault are mandatory.

## Run locally

```bash
node nexus/financial-service-router.mjs
node nexus/financial-service-router.mjs --task='{"task_id":"demo-task","tenant_id":"demo-tenant","workspace_id":"demo-workspace","service":"credit_improvement","deployment_scope":"personal_self_help","action":"educate_credit_factors","payload":{"case_ref":"vault://cases/550e8400-e29b-41d4-a716-446655440000"}}'
node nexus/financial-service-test.mjs
```

## Decision contract

The router returns one of:

- `allowed_draft_only`: allowlisted low-risk internal analysis or accounting-readiness drafting;
- `approval_required`: blocked pending human handling through a future approved adapter;
- `denied`: prohibited, sensitive, unknown, or commercially gated request.

Every response includes `external_effects_executed: false`, `public_intake_authorized: false`, `public_commercialization_authorized: false`, `production_security_authorized: false`, and an in-memory audit event. A production deployment would need to append that event to a tenant-scoped, append-only audit sink. The router intentionally performs no persistence or network I/O.

## Required production controls

Before adding any connector or public customer path:

1. Keep tenant-specific encryption keys and case-level authorization.
2. Store credentials only in a secrets vault; use scoped references in tasks.
3. Redact unnecessary PII before any model call.
4. Require MFA and explicit consent for account access or information sharing.
5. Add a human approval inbox with immutable before-and-after drafts.
6. Persist the returned audit event in an append-only tenant log.
7. Use licensed-professional handoff for legal advice, tax advice, filings, payments, and representation.
8. Complete jurisdiction-specific legal, privacy, security, contracting, insurance, and payment reviews.

No AI model should be treated as the security boundary. Every future connector must independently enforce these policies server-side.
