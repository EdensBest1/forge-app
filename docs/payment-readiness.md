# Payment Readiness

## Current State

The monetization layer is Stripe-ready in structure but does not process live payments. Plans and add-ons are source-controlled and can be used for demo/manual billing.

## Forge

Forge can use Stripe in the future for subscriptions, boosts, featured job posts, verification review, and profile buildout after:

- production auth
- terms/refund policy
- fraud controls
- cancellation/downgrade handling
- admin audit logs
- payment processor approval

No Forge tier guarantees jobs, leads, bids, licenses, or outcomes.

## Admitly

Admitly can use Stripe for student/family subscription plans and packages after:

- parent/minor privacy review
- cancellation and refund terms
- guardian consent handling where applicable
- clear AI guidance disclaimers
- manual capacity gates for human/concierge offerings

No Admitly tier guarantees admission, scholarships, financial aid, jobs, apprenticeships, union acceptance, or school acceptance.

## Stitch

Stitch remains manual/admin-gated for payments until cannabis payment compliance and provider approval are explicitly in place.

Stitch subscription pricing and transaction-fee targets are separate from actual transaction-fee collection. No payment flow may enable unlicensed or unverified cannabis transactions.

## Subscription Lifecycle

Supported planned states:

- trialing
- active
- past_due
- canceled
- expired

Provider options:

- stripe
- manual
- comped
- demo

## No Hidden Fees

Every add-on must show price, duration/quantity, and terms disclaimer before purchase. Sponsored/promoted placements must be labeled.

