# Forge v133 Test Matrix

Date: 2026-08-15

## Automated suites

| Suite | What it proves |
| --- | --- |
| syntax and smoke | JavaScript parses and retained product markers/routes/forms are present |
| security | no exposed secret patterns, safe headers/policies, RLS plan retained, browser safety boundaries |
| production admin boundary | public operator routes fail closed, including nested and monetization paths |
| lead outbox | local preservation, state transitions, stable retry identity, removal confirmation |
| durable leads | strict request validation, provider-neutral fail-closed storage, idempotency and receipts |
| Capital Desk | allowlist, sensitive fields, bytes, time, origin, consent, gates, timeout, receipt, concurrency |
| release | manifest, v133 asset alignment, worker/loader expectations |
| monetization | synthetic calculation behavior without money movement |
| product paths and fencing | retained business mechanics and safety boundaries |
| route matrix | every static route has ownership, metadata, status, landmarks, and safe public links |
| cache integrity | executable worker lifecycle, ownership, bypass, fallback, and update behavior |
| public quality | white/spacious tokens, two primary actions, images, reduced motion, truthful copy |
| export safety | quoting, objects, newlines, and formula injection |
| copy truth | inactive Flex, non-affiliation, local/delivery language, Trust Ledger disclaimer |
| release fences | zero dependencies, no opaque delivery, no public storage activation, private routes |
| accessibility | named controls, unique IDs, valid ARIA references, focus return hooks, reduced motion, and 44 px targets |

## Browser matrix

The final run covers desktop, tablet, compact desktop, and phone widths. It checks:

- home orientation and exactly two primary hero actions
- customer local-first intake, delivery truth, cancel, Escape, focus return, retry identity
- worker signup and profile/marketplace path
- business hub and inactive Capital/Flex path
- aliases and back paths
- offline/update notice behavior
- zero unexpected console errors
- zero page-level horizontal overflow
- visible controls at least 44 px where applicable
- usable focus indicators and reduced-motion override
- public operator routes return 404/no-store/noindex

## Release acceptance

All automated tests, local browser tests, draft PR checks, protected preview checks, asset hash comparisons, production domain checks, and hosted-log checks must pass. Any release-blocking failure stops promotion. A passed engineering release still remains a controlled beta until the human gates in OPEN_TASKS.md are complete.
