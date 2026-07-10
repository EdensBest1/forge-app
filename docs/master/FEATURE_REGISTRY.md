# Feature Registry

This registry lists existing and planned features, business sections, and operational areas. Update it whenever a feature or major business section is added.

## Forge Blue-Collar Marketplace

- Planned/active direction: local services marketplace starting in Medford/Southern Oregon.
- Customers should be able to hire trusted local providers.
- Providers should be able to apply to offer services.
- Future work should reuse existing Forge components, routes, tables, and business logic.
- Implemented / Live in UI for a first marketplace slice: homepage marketplace paths, `/marketplace` provider/job discovery, `/customer-dashboard` local customer request view, richer job intake fields, provider/company profile fields, provider quote/invite/save actions, worker marketplace readiness, and admin marketplace command center.
- Implemented / Live in UI as local MVP account and quote lifecycle prototype: role-based account shells, customer profile save flow, quote line items/exclusions/milestones/versioning, quote revise/withdraw actions, and job statuses for Awaiting Approval, Completed, and Disputed.
- Implemented / Live in UI for launch safety: Launch Status now includes a Public Launch Blocker Receipt with copyable gates for backend lead delivery, admin auth, backup, legal review, and final security review.
- Implemented / Live in UI for demo closeout: Customer Status, Job Detail, and Messages now include a Demo Close Loop that keeps status, bid detail, message handoff, and profile proof visible and copyable.
- Implemented / Live in UI for profile clarity: Profile Status now includes a role-aware Profile Status Receipt for customer, worker, and admin views, while public visitors remain routed to the locked login/profile prompt.
- Implemented / Live in UI for first-200 outreach: Launch Status now includes a Next 10 Invite Sprint with ranked follow-up leads in Admin Operator View and public-safe starter lanes for homeowner, worker, referral, auto, and career outreach.
- Implemented / Live in UI for Public View safety: private operator/admin data surfaces redact unless Forge Admin is in Operator View.
- Implemented / Live in UI for public-share safety: Launch Status now includes a Public Share Safety Sweep with controlled-demo, Public View, backend, admin auth, backup, legal, and security gates.
- Still local/static MVP only: production auth, Supabase persistence, payment processing, live dispatch, background checks, verified-provider claims, contracts, insurance verification, notifications, and support workflows remain required before broad launch.

## Admitly Presentation Routes

- Implemented / Live in UI inside Forge for presentation only at `/admitly`, `/admitly/demo`, and `/admitly/stanford`.
- Admitly remains a separate product and brand from Forge; these routes are for Eden's Best ecosystem presentation flow, not Forge marketplace operations.
- Stanford discussion page must not use Stanford logos or imply Stanford endorsement, sponsorship, approval, partnership, affiliation, or pilot.
- Student waitlist and educator/counselor interest forms save local MVP leads only until a production Admitly backend and privacy policy are ready.

## Photography & Videography

- Implemented / Live in UI for weddings, events, business content, social media content, real estate shoots, family photos, church/community events, music videos, and creative projects.
- Dedicated route/page exists through `/photography`, `/photography/request`, `/photography/apply`, and the `/photography-videography` alias.
- Customer creative request form exists and saves customer leads with category value `photography_videography`.
- Creative provider application form exists and saves provider leads with provider/category metadata value `photography_videography`.
- Dennis may be referenced only as an example trusted local creative, not as the only provider.
- Do not include private contact information.

## S&A Auto

- Planned section for auto sales, transport, trailers, diesel trucks, vehicle sourcing, dealer-license workflow through approved existing dealership relationships, and transaction documents.

## Seneca Dev Co.

- Planned section for construction, development, big projects, home projects, Washington, Oregon, and partner project intake.
- Michael Hamilton / Seneca Dev Co. may be referenced as a construction/development partner example only, without private contact information.

## NorthStar Creative Co.

- Implemented / Live in UI as the Forge-connected business growth section for blue-collar workers, service providers, contractors, and local businesses.
- Dedicated route/page exists through `/northstar-creative`.
- Page positioning: `Forge helps you find work. North Star Creative Co. helps your business win more of it.`
- Customer/business owner request form exists and saves leads with category value `northstar_creative` and secondary category value `northstar_marketing_operations`.
- Provider signup asks whether North Star should help the provider get more jobs and grow the business, captures business-size classification, and can create a separate North Star lead without disrupting normal Forge provider signup.
- Lead classification exists for Small Provider, Growth Client, Trade Pro Client, Enterprise Prospect, and Urgent Follow-Up.
- Forge Marketing Score exists with website, Google Business, reviews, photos/videos, lead response speed, social proof, and CRM/follow-up categories totaling 100 points.
- Service packages exist for Forge Starter Presence, Forge Local Growth, North Star Trade Pro, and North Star Enterprise Growth Partner.
- Roofing is a priority vertical with dedicated services and recommended landing page templates.
- Homepage/service cards include North Star Creative Co. with CTA copy for growing a business.
- Admin dashboard includes North Star leads, CSV export, pipeline status review, notes, assigned owner, score, urgency, copy actions, and follow-up queue integration.
- North Star leads should be tracked separately from normal Forge job requests.
- Still requires production backend delivery, credential-safe operations workflow, service agreement, ad/account access policy, and final legal review before broad public launch.

## Forge Manufacturing + Nutraceuticals

- Implemented / Live in UI for vitamin, supplement, nutraceutical, private-label, contract-manufacturing, packaging, ingredient, formulation, lab, compliance, and fulfillment opportunities.
- Dedicated route/page exists through `/manufacturing-nutraceuticals` with `/forge/manufacturing` as an alias.
- Buyer RFQ form exists for product type, brand, formula status, dosage form, MOQ, packaging, ingredients, clean-label requirements, CBD/hemp flag, testing, certifications, launch date, budget, location preference, contact info, and spec upload placeholder.
- Supplier profile form exists for company/contact, location, service area, supplier type, capabilities, dosage forms, MOQ, certifications, facility type, turnaround, packaging, sourcing/formulation/testing/compliance/private-label/fulfillment support, website/contact, notes, and Verified by Forge placeholder.
- Admin dashboard includes Manufacturing RFQs and supplier profiles, CSV exports, status pipeline review, notes, copy actions, messages, reports, and follow-up queue integration.
- Operations Vault includes manufacturing onboarding, RFQ, vendor verification, quote comparison, launch, GMP/FDA, label/claims, COA/testing, packaging, PO, production, 3PL, scorecard, CRM follow-up, NDA, and non-circumvention placeholders.
- Thomasnet may be used only as a benchmark for supplier-discovery workflows. Do not scrape, copy, import, or reproduce proprietary Thomasnet listings, descriptions, profiles, categories, images, or data.
- Still requires production backend delivery, file storage, supplier verification workflow, legal/compliance review, insurance review, and final regulatory review before broad public launch.

## Personal Driver / Private Driver Services

- Implemented / Live in UI for scheduled personal rides, errands, appointments, airport rides, event rides, sober rides, executive rides, senior ride support, and recurring scheduled rides.
- Dedicated route/page exists through `/personal-driver` with `/private-driver` as an alias.
- Customer request form saves public-safe pickup/drop-off areas, date/time window, recurring status, passenger count, accessibility notes, private follow-up notes, and safety status.
- Driver provider form saves business/contact, service area, vehicle type, license status, insurance review, background-check status, availability, recurring rides, and safety notes.
- Admin dashboard includes Personal Driver request/provider tables and CSV exports.
- Safety boundary: Forge collects leads only. Emergency situations require 911. Driver matching stays manual until license, insurance, vehicle, background-check path, privacy, local legal requirements, and provider fit are reviewed.

## Forge Payments / Merchant Services

- Implemented / Live in UI for merchant-service interest capture at `/forge-payments` with `/merchant-services` as an alias.
- Business-owner form saves company/contact, industry, city, current processor, monthly volume, payment-operation needs, notes, and admin-only partner review notes.
- Admin dashboard includes merchant-services table and CSV export.
- Safety boundary: Forge is not a bank, payment processor, ISO, underwriter, broker-dealer, lender, escrow provider, or payment facilitator in this MVP. Do not collect bank logins, SSNs, full account numbers, card data, or sensitive financial documents in browser forms.

## Local Products / Makers

- Implemented / Live in UI for custom products, woodwork, handmade goods, local brands, blue-collar shop products, and maker/vendor leads at `/local-products` with `/makers` as an alias.
- Maker form saves brand/contact, product category, product description, city, fulfillment, wholesale interest, product photo summary, notes, and review status.
- Admin dashboard includes Local Products / Makers table and CSV export.
- Safety boundary: public listings remain preview-only until product photos, pricing, fulfillment, taxes, returns/refunds, and customer communication policies are reviewed.

## Worker Trust / Proof Ledger

- Implemented / Live in UI on provider directory cards and admin worker rows.
- Uses Green/Silver/Gold tier labels, rank steps, proof signals, and dispatch decision labels: Ready to Invite, Crew-Lead Ready, Mentor-Only, Supervised Helper, and Admin Review.
- This is a lightweight launch triage system, not a guarantee of safety, licensing, insurance, quality, or job outcome.

## Stitch

- Planned/active app and business section for Stitch-related product, revenue, market, operational, and deployment work.

## Payment Processing

- Planned section for payment readiness, payment processing providers, transaction flows, compliance needs, and go-live requirements.

## Legal/IP

- Planned section for trademarks, IP protection, contracts, employment docs, partnership agreements, vendor agreements, investor docs, compliance docs, and transaction templates.

## SOPs

- Planned section for operating procedures, repeatable workflows, admin review, intake handling, provider/customer support, and deployment procedures.

## Partner Programs

- Planned section for partner intake, approved partner categories, non-sensitive partner summaries, and collaboration workflows.

## Future Businesses

- Placeholder for future business ideas, partner sections, app concepts, and strategy documents.
