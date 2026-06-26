# Forge Capital Desk README

## Purpose

Forge Capital Desk collects basic business-owner lead/contact information and consent, then sends eligible owners to Flex through an approved referral URL only after the approval gates are in place. Forge must not present itself as a bank, lender, broker, underwriter, credit decision maker, Flex employee, or official Flex partner.

## Setup

1. Add the approved Flex referral URL to `NEXT_PUBLIC_FLEX_REFERRAL_URL`.
2. Run `migrations/20260626_forge_flex_leads.sql` in Supabase when backend storage is ready.
3. Keep public static intake local-only until a server-owned API route, Zapier action, or Supabase Edge Function can validate and write leads.
4. Use `/forge/capital`, `/forge/flex`, or `/partners/flex` for the public page aliases.

## Environment Variables

```env
NEXT_PUBLIC_FLEX_REFERRAL_URL="https://REPLACE-WITH-APPROVED-FLEX-REFERRAL-LINK"
FLEX_PARTNER_MODE="referral"
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

Replace `https://REPLACE-WITH-APPROVED-FLEX-REFERRAL-LINK` in `.env.example` and the deployed environment with the approved Flex referral URL. Do not publish broad outreach until the URL is approved and tested.
