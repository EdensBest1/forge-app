# Forge v133 Nationwide Marketplace Architecture

Date: 2026-08-15
Status: controlled-beta implementation; broad marketplace launch remains blocked

## Public information architecture

The homepage remains a spacious white orientation layer with two primary actions: post a job and join as a contractor. It names three focus markets without turning the page into a directory. The public contractor hub explains who can join, what information is collected, how matching works, and the exact trust language. Medford, Los Angeles, and New York each have a distinct, indexable landing page with local categories, constraints, FAQs, and prefilled customer/contractor paths.

Nationwide intake is not nationwide coverage. A request outside a focus market is accepted as `Nationwide intake · coverage not yet confirmed`. Focus-market intake is `Focus market · compatibility still requires review` until actual supply, availability, category, and service-area facts align.

## Domain ownership

`nationwide-market.js` owns:

- the complete 50-state plus Washington, D.C. reference set;
- state name/code and U.S. ZIP normalization;
- focus-market classification;
- contractor allowlisting and sensitive-field rejection;
- city/state, named-area, service-radius, travel, remote, category, project-type, capacity, and trust compatibility;
- recoverable, expected-version and idempotency-protected customer job transitions;
- quote, revision, customer review, cancellation, and dispute states;
- snapshot/restore behavior with payment and dispatch hard off.

The browser forms and public pages use that contract but do not establish a production account, complete review, guarantee work, collect money, dispatch a crew, or turn a local save into a server receipt.

## Contractor trust language

The allowed progression is precise: `Information supplied`, `Review pending`, `License review pending`, `Insurance review pending`, and `Forge reviewed`. Expired and suspended states remain explicit. Self-reported words cannot grant a reviewed state, and `verificationClaimAllowed` remains false in public contractor records.

## Data and release boundaries

Raw licenses, insurance documents, government IDs, passwords, SSNs, tax IDs, bank/account/card data, and private access details are prohibited from public intake. Exact job addresses should remain private until an authorized handoff. Existing local-storage keys, outbox receipts, backup recovery, public/operator isolation, Flex gates, and protected routes remain unchanged.

Production marketing as an available marketplace still requires durable lead delivery, operator authentication/RBAC, real contractor review and expiration evidence, legal/privacy approval, monitoring, incident response, support ownership, and verified supply/availability for each advertised market.
