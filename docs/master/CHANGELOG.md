# Changelog

## 2026-07-09 - Eden's Best marketplace checkpoint

- Added a first Forge marketplace slice: `/marketplace`, `/customer-dashboard`, richer customer job request fields, customer dashboard, provider/company profile fields, provider discovery actions, worker marketplace readiness, and a protected admin marketplace command center.
- Added Admitly presentation routes inside Forge at `/admitly`, `/admitly/demo`, and `/admitly/stanford` while keeping Admitly brand and claims separate from Forge. Stanford discussion copy explicitly avoids any endorsement, sponsorship, approval, or partnership claim.
- Added route-loader shells and smoke-test markers for the new marketplace and Admitly presentation surfaces.
- Scope remains local/static MVP only: no production auth, payments, dispatch, backend storage, or verified-provider claims were activated.

## 2026-06-26 - Launch reconciliation checkpoint

- Added Forge-to-North Star Creative Co. client acquisition system: expanded `/northstar-creative` page, provider signup growth question and business-size classification, richer North Star marketing intake, automatic classifications, Forge Marketing Score, four service package cards, roofing-company marketing subsection, admin lead table fields, webhook/schema/migration/validation updates, and docs clarifying North Star leads stay separate from normal Forge job requests.
- Created pre-edit checkpoint commit before launch reconciliation work.
- Added Personal Driver / Private Driver Services route, forms, admin review tables, export actions, webhook type, schema tables, safety copy, and route-loader shells.
- Added Forge Payments / Merchant Services route, lead form, admin table, export action, webhook type, schema table, and strict no-sensitive-financial-data boundary.
- Added Local Products / Makers route, vendor form, admin table, export action, webhook type, schema table, and public-listing review boundary.
- Added Worker Trust / Proof Ledger with Green/Silver/Gold tiers, rank steps, proof signals, dispatch decisions, provider-card display, admin worker columns, and schema target.
- Added Fencing & Custom Iron Gates and Personal Driver as service verticals while preserving existing marketplace categories.
- Updated README, Feature Registry, Final Public Gate, Webhook Payloads, Supabase schema, service-worker route cache, and route-loader shells.

Track every change Codex makes in this repository.

## 2026-06-26

- Added NorthStar Creative Co. implementation: `/northstar-creative` route, homepage/service card, business growth request form, package/service copy, admin lead lane/export, follow-up queue wiring, webhook/schema mapping, and category values `northstar_creative` plus `northstar_marketing_operations`.
- Added v70 creative route / Photography & Videography implementation notes: homepage/nav/service cards include it, dedicated customer and provider forms exist, and category value `photography_videography` is used for requests and provider applications.
- Created the initial permanent project knowledge system under `docs/`.
- Added master context, Codex safety rules, feature registry, partner registry, open task tracking, cloud storage planning, deployment planning, and go-live checklist documentation.
- Scope: additive documentation only.
