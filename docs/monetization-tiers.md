# Monetization Tiers

This document defines the additive monetization model for Forge, Stitch, and Admitly. The source-controlled configuration lives in `monetization/monetization-config.mjs`.

## Shared Rules

- Free/basic access remains useful.
- Paid users can receive better profiles, priority visibility, analytics, profile tools, and optional boosts.
- Paid placement must be labeled `Promoted`, `Sponsored`, or `Boosted` where shown.
- `Verified` is reserved for actual approval after review.
- No tier guarantees jobs, cannabis orders, admissions, scholarships, compliance approval, or results.
- Compliance, safety, suspension, complaint, license, COA, and minor-privacy gates override paid ranking.

## Forge

Forge tiers:

- Forge Free: $0/month.
- Forge Verified: $29/month or $299/year.
- Forge Plus: $99/month or $999/year.
- Forge Pro Max: $249/month or $2,499/year.
- Forge Elite Company: $499/month or $4,999/year.

Forge add-ons include local boosts, category boosts, city/category boosts, Super Bid/Priority Quote, verification review, profile buildout, lead unlocks, managed crew/rush dispatch, and featured job posts. The current implementation includes the source-controlled foundation for boosts, super bids, verification review, and profile buildout. Dynamic lead unlock and managed dispatch pricing remain admin-priced/manual.

## Stitch

Stitch tiers are versioned as `stitch_tiers_v2` in config:

- Stitch Licensed Basic: $0/month.
- Stitch Bronze Visibility: $99/month or $1,000/year.
- Stitch Silver Growth: $499/month or $5,000/year.
- Stitch Gold Marketplace: $2,500/month or $25,000/year.
- Stitch Platinum State Leader: $5,000/month or $50,000/year.
- Stitch Diamond Enterprise: $10,000/month or $100,000/year.

Transaction-fee targets are stored as separate fields and do not replace legacy transaction-fee logic. Stitch payment processing remains manual/admin-gated until cannabis payment compliance and provider support are approved.

## Admitly

Admitly tiers:

- Admitly Free: $0/month.
- Admitly Starter: $9/month or $99/year.
- Admitly Plus: $29/month or $299/year.
- Admitly Pro: $99/month or $999/year.
- Admitly Family Premium: $499/package or recurring only if capacity exists.
- Admitly Elite Concierge: $4,999/package, invite-only and manually approved.

Admitly add-ons include AI essay review, resume/profile polish, scholarship sprint, deadline concierge, family strategy reporting, and school/counselor account pricing. Minor student profiles must not be publicly ranked or displayed.

## Admin Controls

Current safe implementation:

- Source-controlled tier/add-on config.
- Static admin view at `/monetization-admin`.
- Projected one-each MRR.
- Tier active flags, prices, rank multipliers, boost credits, verification flags, limits, and support levels visible.
- Boost and verification models are represented in config/ranking utilities.

Next backend step:

- Protect admin with production auth.
- Move editable plan/add-on records into database tables.
- Audit every price/tier/ranking change.
- Add exports by app/tier/status.

