# Forge Product Truth — 2026-08-15

This is the canonical retained product map for the current Forge release. It reconciles the repository history, current implementation, handoffs, supplied prompts, route maps, registries, launch notes, and safety audits available to Codex. When older notes conflict with this file, the newer, safer statement here wins until Andrew explicitly changes it.

## Product and presentation truth

- Forge begins as a local-services marketplace for Medford and Southern Oregon: customers post work and workers or businesses find opportunities.
- The public experience must feel welcoming, calm, spacious, and easy to scan. White is the primary background. Dark color is limited to contained accents such as the footer; orange and blue are restrained action and trust colors.
- The homepage is an orientation layer, not a catalog dump. It foregrounds customer, worker, and business paths; explains the basic process; and places the broader ecosystem behind focused hubs and an expandable network index.
- All retained product lanes stay implemented and routable even when they are not individually expanded on the homepage.
- Forge is a controlled local-first beta. Public lead delivery, authentication, payments, verification, dispatch, regulated partner referrals, and other managed operations may be described only at their actual readiness level.
- A browser save is not a delivery. Only a valid versioned server/provider receipt may display `delivered`.
- No real customer data, private partner data, credentials, financial secrets, or live money movement belongs in this MVP or its verification fixtures.

## Product lane registry

| Lane | Current status | Public role and route | Non-negotiable boundary |
|---|---|---|---|
| Core marketplace | Controlled local-first beta | Home, `/request-help`, `/post-job`, `/worker-signup`, `/marketplace`, `/customer-dashboard` | Job/worker lead delivery fails closed without an approved durable destination. No verified-provider, payment, dispatch, insurance, or background-check claim. |
| Customer journey | Implemented local prototype | Post a job, review local status, quotes, messages, next-step receipts | Local records and demo roles are not production accounts or guaranteed fulfillment. |
| Worker and company journey | Implemented local prototype | Join Forge, profiles, opportunity discovery, bids/quotes, proof ledger | Green/Silver/Gold and dispatch labels are triage signals, not guarantees. |
| Business support | Implemented as a hub | `/business`, NorthStar, Building, Capital Desk | Present growth options clearly without implying active regulated partnerships. |
| NorthStar Creative Co. | Implemented lead-capture lane | `/northstar-creative` | Separate from normal job requests; requires approved backend, service terms, credential handling, and fulfillment operations before broad launch. |
| Capital Desk / future Flex referral | Local-interest capture implemented; Flex relationship remains draft/inactive | /forge/capital, /forge/flex, /partners/flex | Forge is not a bank, lender, broker, underwriter, credit decision maker, or Flex employee/official partner. Referral requires relationship, public-display, logo, agreement, data-sharing, language, operator, legal, explicit-consent, official-HTTPS-link, server-destination, and versioned-receipt gates together. Never collect credentials, SSNs, bank/card/account details, credit reports, or financial documents. |
| Finance needs retained in Capital Desk | Informational/local interest only | Business banking, credit readiness, expense management, cards, vendor bills, AP/AR, global payments, working capital, project finance, fuel, materials, equipment, inventory, labor, payroll timing, growth capital | Do not promise eligibility, approval, rate, funding, savings, or delivery to a partner. |
| Forge Building / Seneca | Implemented intake prototype; partner relationship remains draft | `/building`, `/homebuilding`, `/homebuilding/tracker` | Michael Hamilton / Seneca Dev Co. may appear only as a partner example without private details or endorsement claims. Finance links remain inactive without approval. |
| Auto & Transport / S&A Auto direction | Implemented prototype lanes | `/auto`, `/road-rescue`, dealer, buyer, seller, transport and concierge paths | Dealer-license, transaction, towing/dispatch, insurance, emergency, pricing, and ownership workflows require manual/legal approval. Emergencies direct to 911. |
| Photography & Videography / Creative | Implemented customer and provider intake | `/photography`, `/photography/request`, `/photography/apply`, `/photography-videography`, `/northstar-creative` | Dennis is an example creative, never the only provider. Rights, releases, storage, minors, drone/insurance, and vetting remain gated. |
| Manufacturing + Nutraceuticals | Implemented RFQ/supplier prototype | `/manufacturing-nutraceuticals`, `/forge/manufacturing` | No copied Thomasnet data. Supplier verification, uploads, GMP/FDA/claims/testing, insurance, and regulatory review remain required. CBD/hemp stays explicitly gated. |
| Forge Academy and Career Plus | Implemented local pathways | `/forge-academy`, apply/employer/school routes, `/dashboard/career` | Career placement, school acceptance, apprenticeship, credential, and job outcomes are not guaranteed. |
| Admitly bridge | Presentation routes only; separate product and brand | `/admitly`, `/admitly/demo`, `/admitly/stanford`, `/trade-pathways` | No Stanford logo or endorsement/affiliation/pilot claim. Admitly data and operations remain separate from Forge marketplace operations. |
| Personal / Private Driver | Implemented intake prototype | `/personal-driver`, `/private-driver` | No live matching until license, insurance, vehicle, background-check, privacy, local-law, and provider-fit review. Emergencies direct to 911. |
| Forge Payments / Merchant Services | Interest capture only | `/forge-payments`, `/merchant-services` | Forge is not a bank, processor, ISO, underwriter, payment facilitator, escrow provider, or broker-dealer. Never collect payment credentials or sensitive financial data. |
| Local Products / Makers | Preview/intake lane | `/local-products`, `/makers` | Public commerce waits for approved photos, pricing, taxes, fulfillment, returns/refunds, and support rules. |
| Product paths / supplier discovery | Implemented synthetic catalog mechanics | Product-path routes and supplier-code views | Supplier identities remain hidden, example data stays synthetic, markup rules remain covered by tests, and prohibited categories stay fenced. |
| Fencing & custom iron gates | Implemented service vertical | Marketplace/service paths | Keep normal contractor, quote, safety, licensing, and fulfillment boundaries. |
| Impact / House of Heaven | Public story and policy lane | Impact route/section | No unsupported donation, beneficiary, outcome, tax, or fund-flow claim. Money movement remains inactive. |
| Legal, SOPs, partner programs, future businesses | Retained planning and operator lanes | Legal/operations/admin documentation and protected surfaces | Protected operator routes stay unavailable in production until real authentication, auditing, recovery, and access policy exist. |
| Stitch | Separate repository/product | Protected preview only | Do not edit, merge, promote, or expose it during Forge work. |

## Superseded guidance and conflict resolution

- Older dark, dense, industrial, dashboard-like public treatments are superseded by the white, welcoming, spacious system. Existing internal/admin density may remain where operationally useful.
- Older homepage designs that exposed dozens of sections at once are superseded by progressive disclosure. The capabilities remain in routes and source; the homepage no longer makes visitors process the whole company at once.
- Older statements implying a request was “received,” “submitted,” or sent externally after a browser save are superseded by the verified receipt contract. Local preservation, retryable failure, rejected correction, unavailable delivery, and verified delivery must be distinct.
- Older Flex copy that sounds like an active referral channel, uses a placeholder referral URL, or names setup work before written approvals is superseded. Flex is a retained future financing partner concept only.
- Older broad-launch language is superseded by controlled-beta language until durable public delivery, production operator authentication, legal/privacy, monitoring, retention, incident response, and operational ownership all pass.
- Older instructions to activate a particular storage vendor are not current scope. Forge remains provider-neutral and fail-closed today.

## Release fences

1. Make a rollback checkpoint before risky work.
2. Preserve existing routes and data compatibility; prefer additive changes.
3. Run syntax, smoke, security, admin boundary, outbox, durable lead, Capital Desk, release, monetization, product-path, fencing, route, cache, public-quality, export, copy-truth, and release-fence coverage.
4. Verify desktop and mobile in a real browser, including overflow, console errors, focus, touch targets, local persistence, retry identity, and truthful receipts.
5. Release through the existing draft Forge PR and a protected preview. Do not merge the PR.
6. Promote the exact verified preview only if every gate passes; align both Forge domains and verify them independently.
7. Keep Stitch protected and unchanged.

## Source precedence

1. Explicit current user instruction.
2. Current safety, legal, security, and release gates.
3. This product-truth file and the current implementation/tests.
4. Newer dated handoffs, changelog entries, route maps, and registries.
5. Older design notes, screenshots, prompts, and archived plans.

Chat material that is not present in the repository, attached to the task, or retained in the current Codex context cannot be reconstructed verbatim. It should be added only when supplied; it must not be invented.
