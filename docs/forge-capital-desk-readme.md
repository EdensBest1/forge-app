# Forge Capital Desk — v133 Operating Boundary

## Current truth

Forge Capital Desk lets a business owner save a basic finance-readiness interest note in the browser. The note may be delivered only to a Forge-controlled server destination that returns the exact verified receipt contract. Flex is a draft future-partner concept. Forge has no active public Flex referral path, does not send current Capital Desk submissions to Flex, and does not expose a referral link.

Forge is not a bank, lender, broker, broker-dealer, underwriter, financial adviser, credit provider, credit decision maker, payment processor, ISO, escrow service, or Flex employee. A Capital Desk note is not an application, approval, offer, quote, or promise of funding.

## Needs covered without collecting sensitive data

- Business banking and business-credit readiness.
- Expense management and employee or controlled-spend cards.
- Vendor bills, accounts payable, accounts receivable, and global-payment operations.
- Cash-flow timing and working capital.
- Project financing and contractor or builder finance needs.
- Fuel, materials, equipment, inventory, labor, and payroll timing.
- Growth-capital and general finance-readiness support.

Never collect bank credentials, passwords, API keys, Social Security numbers, full bank or card numbers, routing numbers, government identity documents, credit reports, financial statements, or other sensitive uploads.

## Public behavior

1. The browser creates a stable request ID and saves the note locally before delivery begins.
2. The interface shows exactly one state: saved locally, checking Forge delivery, delivery unavailable, retryable failure, correction required, or verified delivered to Forge.
3. A retry preserves the same request ID across attempts and reloads.
4. Only the server's JSON receipt contract can mark the note delivered.
5. HTML, malformed JSON, a mismatched request ID, an impossible timestamp, an empty destination list, or a provider error fails closed.
6. Provider error bodies are not forwarded to the browser, and logs contain correlation metadata rather than lead fields.
7. No client-side webhook delivery exists.

## Accepted fields

The endpoint rejects fields outside its explicit allowlist. Accepted fields are the request and consent timestamps; owner, business, email, optional phone and location; industry, website, business-age/revenue/spend/employee ranges; primary need; separate Forge, NorthStar, payments, and automation interest flags; consent flags; referral source; and plain notes. Nested forbidden-field names are rejected before allowlist evaluation.

## Server gates

All of these values default to false or empty. Do not change one based on an assumption or verbal conversation.

```env
NEXT_PUBLIC_FLEX_REFERRAL_URL=""
FLEX_APP_URL=""
FLEX_PARTNER_MODE="draft"
FLEX_PARTNER_APPROVED="false"
FLEX_DATA_SHARING_APPROVED="false"
FLEX_OFFICIAL_LANGUAGE_APPROVED="false"
FLEX_REFERRAL_AGREEMENT_SIGNED="false"
FLEX_OPERATOR_APPROVED="false"
FLEX_LEGAL_APPROVED="false"
FORGE_GHL_WEBHOOK_URL=""
FORGE_ZAPIER_WEBHOOK_URL=""
```

Even Forge-server delivery is unavailable unless the required written partner, agreement, data-sharing, public-language, operator, and legal flags are all true and an HTTPS Forge-controlled destination is configured. The public referral button has additional client-side gates, including an official non-placeholder HTTPS destination, and remains hidden by default.

## Future referral gate

A future Flex referral could become visible only after written partner approval, a signed referral agreement, an approved data-sharing scope, explicit user consent, approved public language, approved logo/brand use when relevant, an official HTTPS referral destination, a server-owned delivery path, a valid provider receipt, and operator and legal approval. Passing a technical flag is not a substitute for the underlying written evidence.

## Status vocabulary

The public delivery states above are authoritative. Older CRM labels such as `qualified`, `flex_link_sent`, `application_started`, `activated`, or commission states are retained only for storage compatibility and future planning. They do not prove a current referral, application, activation, partner relationship, or payment.

Routes `/forge/capital`, `/forge/flex`, and `/partners/flex` open the same guarded Capital Desk experience. The two Flex-named paths are inactive aliases, not evidence of a partnership.
