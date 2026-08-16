# Forge v133 Security and Privacy Model

Date: 2026-08-15

## Trust boundaries

| Boundary | Allowed now | Blocked now |
| --- | --- | --- |
| Public browser | Local-first synthetic/customer-entered draft storage; versioned same-origin lead requests | Secrets, credentials, opaque delivery, direct third-party lead posts |
| Job/worker API | Strict origin, intent, consent, time, size, schema, rate, idempotency, timeout, receipt checks | Unconfigured durable writes fail with 503 |
| Capital Desk API | Explicit field allowlist, nested sensitive-data rejection, UTF-8 byte limit, complete approval gates, verified receipt | Flex referral/delivery while any approval or provider setting is absent |
| Operator routes | Local controlled demo only | Public /admin, /capture, /reports, /monetization-admin and nested paths |
| Service worker | Current same-origin versioned assets and offline shell | API, private routes, cross-origin, no-store, error responses |
| CSV export | Escaped fields and spreadsheet-formula neutralization | Raw formula-leading cells |
| Trust / Proof Ledger | Provider-supplied, unverified facts; human review state | Inferred Gold/Silver/Ready status from provider wording |

## Capital Desk and Flex

Flex remains a draft, inactive future-partner concept. A public referral requires all of the following to be true together:

1. partner relationship approved
2. public display approved
3. logo use approved
4. referral agreement signed
5. data-sharing scope approved
6. official public language approved
7. operator approval
8. legal approval
9. explicit user consent
10. official non-placeholder HTTPS destination
11. server-owned delivery configuration
12. valid forge.flex-receipt.v1 receipt

No browser path may collect or transmit passwords, API keys, SSNs, government IDs, full bank/card/account or routing numbers, credit reports, financial statements, or sensitive uploads. Forge does not promise eligibility, approval, rates, funding, savings, or a partner response.

## Logging and correlation

Provider and API logs are payload-free. They record only minimal event class/status information. Public errors do not echo request data. Stable retry identifiers exist in the user's local outbox and validated receipts; they are not used as a reason to log lead payloads.

## Local persistence

Local-first means saved in this browser, not durably delivered. Clearing browser data can remove unsent records. The interface distinguishes local, sending, unavailable, rejected, retryable, and delivered states. Removal requires explicit confirmation, and export remains available for recovery.

## Remaining production gates

Production authentication, approved durable storage, retention/deletion policy, monitoring, incident response, support ownership, backup/restore, vendor review, legal/privacy approval, and partner agreements remain human decisions. v133 deliberately fails closed rather than silently weakening these gates.
