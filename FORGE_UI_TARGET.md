# Forge UI Target

Generated: 2026-06-27 05:55 PDT

## Target

Forge should feel like a premium blue-collar services marketplace: rugged but clean, fast to understand, local to Medford/Southern Oregon, and built around simple job posting and worker/provider signup. It should not feel like a generic SaaS template or a cluttered internal dashboard.

## Visual Direction

- Palette: dark steel, matte black, graphite, forge orange-gold, and clean white surfaces where needed for readability.
- Layout: direct hero, quick CTAs, organized category hubs, provider/job cards, clear status timeline, and mobile-safe browsing.
- Tone: practical, trustworthy, local, admin-reviewed, and job-outcome focused.
- Inspiration: Amazon service browsing, Alibaba provider cards, and Apple clarity, used only as usability inspiration.

## UX Requirements

- Public homepage should make "Post the job. Get the crew." understandable immediately.
- Job posting should be fast and low-friction.
- Worker signup should be fast and should not expose fake sample data unless demo mode is explicit.
- Browse services should preserve the full category system while grouping it cleanly.
- Business/NorthStar path should feel like a business-growth lane, not a disconnected add-on.
- Status lookup should avoid passwords, payments, bank details, SSNs, and emergency-service claims.
- Public beta should not show raw admin/export/import/reset controls.
- Admin-reviewed lead trust should be clear without exposing admin tooling.

## Implementation Inspection

- `index.html`: suitable app shell and metadata, but public nav should be simplified.
- `app.js`: main routes and forms exist; public admin-demo entrypoints need to be hidden or renamed.
- `styles.css`: strong enough for current clean blue/orange direction, but not fully on the darker steel/orange-gold target.
- `route-loader.js`: route aliases are preserved.
- Privacy/terms/safety pages: present as static public pages.
- Admin gates: demo/session role behavior only; production auth/RBAC still required.

## Current Target Status

Functional flow direction: close enough for Andrew review.

Visual direction and public admin exposure: not close enough for controlled beta until safe UI cleanup is done and verified.
