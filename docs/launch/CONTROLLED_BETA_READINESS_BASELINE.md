# Controlled Beta Readiness Baseline

Generated: 2026-06-27

## Scope

This baseline covers Forge as a public controlled-beta review surface. It does not authorize production deployment, public-live commerce, legal reliance, payments, payouts, partner sends, emergency dispatch, or real operator/admin access.

## Checkpoint

- Checkpoint before this pass: f0eb163
- Current git head while generating docs: f0eb163
- Working tree at generation time:

```text
M index.html
 M netlify.toml
 M styles.css
 M vercel.json
?? "docs/design-reference/forge/wireframes/Screenshot 2026-06-27 at 6.42.24 AM.png"
?? package-lock.json
?? scripts/
```

## Public Navigation Target

- Primary public item retained: Services
- Primary public item retained: For Workers
- Primary public item retained: For Businesses
- Primary public item retained: Impact
- Primary public item retained: Safety

## Work Completed

- Replaced the crowded blue outlined home header button row with a dark premium header.
- Centered the desktop public nav around Services, For Workers, For Businesses, Impact, and Safety.
- Added right-side Search, Post a Job, Join as Worker, Explore, and Log In actions.
- Moved deep destinations into an Explore mega-menu while keeping the old routes discoverable.
- Added responsive behavior so tablet/mobile headers keep logo, Post a Job, and Explore without horizontal overflow.

## Controlled Beta Boundaries

- Hosted authentication and production RBAC are still required before real admin or worker accounts.
- Attorney review is still required for marketplace terms, worker/provider agreements, contractor boundaries, finance/referral language, and safety documents.
- Forge CSP still requires style-src unsafe-inline because app.js renders dynamic meter widths and Gantt positions inline; this is documented and should be refactored before a stricter CSP target.
- Live custom domain was previously observed as older than local; production deployment requires Andrew approval.

## Current Decision

Ready for Andrew review before attorney review and production deployment.
