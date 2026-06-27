# Forge UI Wireframe Alignment Audit

Generated: 2026-06-27 05:55 PDT

## Verdict

Forge is functional and partly aligned with the uploaded reference direction, especially the simple marketplace flow. It is not fully aligned with the darker rugged Forge target, and public admin-demo entrypoints should be removed or moved before controlled beta.

## References Used

Reference manifest: `docs/design-reference/WIREFRAME_REFERENCE_MANIFEST.md`

Representative images inspected:

- `docs/design-reference/forge/wireframes/ChatGPT Image May 15, 2026 at 08_42_27 AM 2.PNG`
- `docs/design-reference/forge/wireframes/forge 2.PNG`

## Matches The Wireframe Direction

- Strong public promise: live hero uses "Post the job. Get the crew."
- Core user paths exist: post job, worker signup, browse services, business/NorthStar path, status lookup, jobs listing.
- Marketplace usability: service/category browsing, provider cards, job cards, and role-based paths are present.
- Role language exists for people who need workers, need work, or run a business.
- Category hubs are preserved across home/property, trades, auto/transport, business growth, manufacturing, career pathways, and building/development style paths.
- Job status timeline/path exists.
- Worker/provider trust badges and admin-reviewed lead language appear in the experience.
- Public MVP forms do not request card numbers, bank details, SSNs, passwords, or emergency-service handling.

## Does Not Match Yet

- Visual palette is mostly clean blue/orange/white, not the requested dark steel/matte black/graphite/orange-gold target.
- Public navigation has too many visible pills/routes for a simple beta homepage.
- Public page exposes `OPEN ADMIN`/admin follow-up demo entrypoints. Even if demo-gated, this fails the request's no-public-admin-tools criterion.
- Some sample form values are prefilled in worker signup, which is useful for demo speed but not ideal for a public controlled-beta first impression.
- Vercel deployment metadata does not map cleanly to current git HEAD, so the exact deployed source needs cleanup.

## Files And Surfaces Responsible

- `index.html`: shell, metadata, public nav.
- `app.js`: route rendering, home, post flow, signup flow, services, jobs, status, admin/demo/login behavior.
- `styles.css`: palette, cards, route density, mobile layout.
- `route-loader.js`: clean route aliases.
- `vercel.json`, `netlify.toml`, `robots.txt`: security headers and indexed-surface controls.

## Exact Recommended Fixes

1. Hide, rename, or move public admin-demo entrypoints behind an explicit reviewer-only path.
2. Reduce public nav clutter by grouping categories while preserving all underlying routes.
3. Decide whether Forge should follow the darker steel/graphite/orange-gold target or the clean blue/orange uploaded mockup variant, then normalize the palette.
4. Remove public-facing sample prefill values from worker signup unless a demo mode is explicitly active.
5. Add hosted auth/RBAC before any real admin, export, report, webhook, or sensitive intake functionality.
6. Clean up Vercel project domain metadata and canonical host handling.

## Fixed In This Pass

- Forge reference images and variants were found, copied into internal repo folders, inspected, and committed before this report layer.
- The UI/reference alignment was audited against live production and local source.
- The public admin-demo entrypoint and visual-target gaps were documented as blockers.

## Remaining TODOs

- Make the safe UI changes above.
- Rerun `npm run check`.
- Deploy only after Andrew explicitly approves.
- Re-run browser, route, CTA, form, header, and admin-exposure checks after deployment.
