# Forge Capital Desk README

## Purpose

Forge Capital Desk lets a business owner save a basic finance-interest note on their device. It may deliver that note to an approved server-owned destination only when all partnership, consent, data-sharing, public-language, and destination gates are explicitly configured. A Flex referral remains inactive. Forge must not present itself as a bank, lender, broker, underwriter, credit decision maker, Flex employee, or official Flex partner.

## Setup

1. Keep every approval flag false until the corresponding written approval exists.
2. Configure an HTTPS server-owned delivery destination only after the referral agreement, data-sharing scope, and public language are approved.
3. Add `NEXT_PUBLIC_FLEX_REFERRAL_URL` only when Flex provides an official referral URL and approves its public use.
4. Add `FLEX_APP_URL` only when there is an approved intake flow that Building finance requests may open directly.
5. Until those gates pass, the public form saves locally and reports delivery as unavailable; it never labels a local save as delivered.
5. Use `/forge/capital`, `/forge/flex`, or `/partners/flex` for the public page aliases.

## Environment Variables

```env
NEXT_PUBLIC_FLEX_REFERRAL_URL=""
FLEX_APP_URL=""
FLEX_PARTNER_MODE="draft"
FLEX_PARTNER_APPROVED="false"
FLEX_DATA_SHARING_APPROVED="false"
FLEX_OFFICIAL_LANGUAGE_APPROVED="false"
FLEX_REFERRAL_AGREEMENT_SIGNED="false"
FORGE_CAPITAL_DESK_ENABLED="true"
FORGE_LEAD_NOTIFY_EMAIL="admin@forge.local"
FORGE_GHL_WEBHOOK_URL=""
FORGE_ZAPIER_WEBHOOK_URL=""
```

## Compliance Language

Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Forge may refer eligible business owners to Flex through an approved partner/referral relationship. Flex products are subject to eligibility, approval, fees, terms, and conditions. Do not submit bank logins, SSNs, full account numbers, or sensitive financial documents through Forge.

## Lead Statuses

`new`, `contacted`, `qualified`, `not_qualified`, `flex_link_sent`, `application_started`, `activated`, `commission_expected`, `commission_paid`, `forge_upsell_offered`, `forge_client_won`, `closed_lost`.

## CRM / Webhook Behavior

The future `/api/forge/flex-leads` route posts to `FORGE_GHL_WEBHOOK_URL` and/or `FORGE_ZAPIER_WEBHOOK_URL` when either env var exists. The payload includes `source`, `partner`, owner/business/contact fields, lead score, primary need, upsell interest flags, and status.

The current static MVP stores leads in localStorage first and can also use the existing Admin webhook setting for browser-side demo delivery.

## Replacing The Placeholder Flex Link

Replace `https://REPLACE-WITH-OFFICIAL-FLEX-PARTNER-LINK` in `.env.example` and the deployed environment with the approved Flex referral URL. Do not publish broad outreach until the URL is approved and tested.
