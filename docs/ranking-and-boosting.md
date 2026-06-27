# Ranking And Boosting

The ranking engine lives in `monetization/discovery-ranking.mjs`.

## Formula

`calculateDiscoveryScore(profile, context)` returns:

- `score`
- `reasons[]`
- `labels[]`
- `isSponsored`
- `isVerified`
- `blockedReason`

The score is based on:

- profile completeness
- verification status
- review score
- response speed
- recency
- category fit
- location fit
- paid tier boost
- active boost score
- safety penalty
- compliance penalty
- complaint penalty

## Hard Gates

Safety and compliance gates run before paid ranking:

- Suspended profiles do not rank.
- High safety or compliance penalties block ranking.
- Stitch requires approved license, COA/lab status where applicable, and admin approval before any transaction-oriented ranking.
- Stitch interstate cannabis activity is blocked unless explicitly legal and state-approved.
- Admitly minor profiles cannot be public.
- Paid ranking never overrides license, COA, METRC/state, admin approval, safety, or minor-privacy gates.

## Labels

Paid and trust labels are explicit:

- `Promoted`
- `Sponsored`
- `Boosted`
- `Verified`
- `Fast Responder`
- `Licensed`
- `Insured`
- `Background Checked`

`Verified` is emitted only when the verification state is actually approved/verified.

## Boost Expiration

Boosts are evaluated from `activeBoostUntil`. Expired boosts do not add score or labels. Future database tables should enforce `startsAt`, `endsAt`, `dailyCap`, `impressions`, `clicks`, and `conversions`.

## Auditability

The `reasons[]` array is designed for admin visibility. It explains how each score was constructed and why a record was blocked.

