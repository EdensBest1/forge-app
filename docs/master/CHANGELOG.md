# Changelog

## 2026-07-10 - Lead delivery drill

- Added an Admin Lead Delivery Drill so Andrew can prove one public lead leaves the browser, confirm the external destination, and preserve a local backup before broad sharing.
- Connected the Launch Status Public Share Safety Sweep backend gate to the copyable lead delivery drill.
- Bumped the local static asset/cache release references to v125.

## 2026-07-10 - Public share safety sweep

- Added a Launch Status Public Share Safety Sweep that summarizes controlled-demo safety, Public View redaction, backend lead delivery, production admin auth, backup freshness, and legal/security review status.
- Added a copyable Forge public share safety sweep so Andrew has a concise operator script before sending Forge beyond personally followed-up first users.
- Bumped the local static asset/cache release references to v124.

## 2026-07-10 - Public View operator redaction

- Added a reusable private operator data gate so hidden admin/operator surfaces do not render sensitive seeded lead details while Forge is in Public View or guest mode.
- Public View now redacts admin tables, follow-up queues, outreach batches, reports, webhook fields, templates, capture triage, project/building admin pipelines, and partner routing summaries.
- Admin Operator View still loads the full private queues after Andrew switches out of Public View as Forge Admin.
- Bumped the local static asset/cache release references to v123.

## 2026-07-10 - Launch next 10 invite sprint

- Added a Launch Status Next 10 Invite Sprint so Andrew can see and copy the next outreach block directly from the launch screen.
- The sprint shows ranked follow-up leads only in Admin Operator View; public/guest-safe views show starter lanes for homeowner, worker, referral, auto, and career outreach without exposing private contact details.
- Bumped the local static asset/cache release references to v122.

## 2026-07-10 - Profile status receipt

- Added a role-aware Profile Status Receipt above the profile panels so John, Mike, and Admin views immediately explain what is visible, ready, pending, and safe to do next; public visitors still route to the locked login/profile prompt.
- Added a copyable Forge profile status receipt and smoke-test coverage for the new HTML, JS, and CSS hooks.
- Bumped the local static asset/cache release references to v121.

## 2026-07-10 - Demo close loop

- Added a reusable Demo Close Loop on Customer Status, Job Detail, and Messages so the live demo can move through status, bid detail, message handoff, and profile proof without extra explanation.
- Added a copyable Forge demo close loop receipt and smoke-test coverage for the new UI, JS, and CSS hooks.
- Bumped the local static asset/cache release references to v120.

## 2026-07-10 - Launch blocker receipt

- Added a Launch Status Public Launch Blocker Receipt that keeps controlled first-user demos separate from broad public launch readiness.
- The receipt shows demo-readiness score, remaining gates for backend lead delivery, admin authentication, backup, legal review, and security review, plus a copyable operator script.
- Bumped the local static asset/cache release references to v119.

## 2026-07-09 - Eden's Best marketplace checkpoint

- Added a first Forge marketplace slice: `/marketplace`, `/customer-dashboard`, richer customer job request fields, customer dashboard, provider/company profile fields, provider discovery actions, worker marketplace readiness, and a protected admin marketplace command center.
- Added Admitly presentation routes inside Forge at `/admitly`, `/admitly/demo`, and `/admitly/stanford` while keeping Admitly brand and claims separate from Forge. Stanford discussion copy explicitly avoids any endorsement, sponsorship, approval, or partnership claim.
- Added route-loader shells and smoke-test markers for the new marketplace and Admitly presentation surfaces.
- Scope remains local/static MVP only: no production auth, payments, dispatch, backend storage, or verified-provider claims were activated.

## 2026-07-09 - Forge account and quote lifecycle slice

- Added local role-based account shell on the Forge login screen for Customer, Individual Provider, Company Provider, and Admin Invite Request, with terms consent and explicit production-auth-required/no-password-storage MVP boundary.
- Added customer profile save flow on `/customer-dashboard` for contact info, preferred contact method, address, saved project locations, and profile image placeholder.
- Expanded quote submission with labor/material line items, exclusions, estimated start/completion dates, payment milestones, quote validity, and quote versioning.
- Added quote revise/withdraw actions plus job lifecycle actions for Awaiting Approval, Completed, and Disputed.
- Added account/onboarding visibility to the protected admin marketplace command center.

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
