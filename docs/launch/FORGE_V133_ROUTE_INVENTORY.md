# Forge v133 Route Inventory

Date: 2026-08-15

The executable source of truth is config/forge-route-registry.mjs. scripts/check-route-matrix.mjs discovers every tracked index.html route, requires exactly one registry owner, verifies title/viewport/landmark expectations, validates aliases, and forbids public links into admin routes.

## Status vocabulary

- public: legal, safety, and primary orientation pages suitable for normal access
- controlled-beta: implemented local-first product surface with explicit operational limits
- presentation-only: concept/presentation surface, not an operational promise
- inactive: preserved concept whose partner action is unavailable
- protected: operator route intercepted server-side while production authentication is unavailable

## Core and marketplace

| Lane | Routes | Audience and action |
| --- | --- | --- |
| Core marketplace | /, /forge, /forge/services, /forge/book, /pricing | Customers, workers, businesses; orient and choose a service |
| Customer marketplace | /request-help, /post-job alias, /marketplace, /customer-dashboard | Post a request, browse, or review local status |
| Worker marketplace | /worker-signup, /forge/workers | Join Forge or choose a worker path |
| Business ecosystem | /forge/businesses, /forge/front-office | Choose business support |
| Campaign handoff | /go/post-job, /go/worker, /go/business, /go/contractor | Continue from a focused campaign path |

## Service and product lanes

| Lane | Routes | Release boundary |
| --- | --- | --- |
| Auto and transport | /auto, /auto/request, /forge/auto, /road-rescue, /forge/mechanics, /forge/mechanics/book, /forge/mechanics/partner, /forge/los-angeles/mechanics, /go/auto | Lead capture and presentation only; no emergency dispatch, transaction, insurance, or fulfillment promise |
| Driver services | /personal-driver, /private-driver alias | No live match until license, insurance, vehicle, background, privacy, legal, and fit review |
| Personal services | /forge/barbers, /forge/barbers/book, /forge/barbers/partner, /forge/los-angeles/barbers | Controlled-beta interest paths |
| Creative services | /photography, /photography-videography alias, /photography/request, /photography/apply, /go/creative | Releases, rights, storage, minors, drones, insurance, and vetting remain gated |
| NorthStar Creative Co. | /northstar-creative, /business alias, /forge/northstar | Separate growth-interest lane; no credential collection or active service promise |
| Forge Capital Desk | /forge/capital; inactive aliases /forge/flex and /partners/flex | Local finance-readiness interest only; Flex referral inactive |
| Payments interest | /forge-payments, /merchant-services alias | Forge is not a processor, bank, ISO, underwriter, escrow provider, or payment facilitator |
| Manufacturing and nutraceuticals | /manufacturing-nutraceuticals, /forge/manufacturing alias, /go/manufacturing | Supplier verification, regulated claims, testing, insurance, and compliance remain gated |
| Supplier discovery | /suppliers/request-quote, /product-paths | Synthetic/original data only; no copied directory data |
| Local Products and Makers | /local-products, /makers alias | Preview and intake only; commerce policies remain gated |
| Projects and building | /projects, /building, /homebuilding, /homebuilding/tracker | Local intake/tracker prototype; partner and financing paths require approval |

## Education and presentation

| Lane | Routes | Release boundary |
| --- | --- | --- |
| Forge Academy and Career Plus | /forge-academy, /forge-academy/apply, /forge-academy/employers, /forge-academy/schools, /dashboard/career | No placement, acceptance, credential, apprenticeship, or outcome guarantee |
| Admitly trade-pathways bridge | /trade-pathways, /trade-pathways/apply, /dashboard/trade-pathways | Presentation-only; separate product and data boundary |
| Admitly presentation bridge | /admitly, /admitly/apply, /admitly/athletes, /admitly/barber-schools, /admitly/beauty-schools, /admitly/college-weekly, /admitly/demo, /admitly/landscaping-schools, /admitly/schools, /admitly/stanford, /admitly/trade-schools, /forge/admitly | Presentation-only; no Stanford endorsement, affiliation, approval, or pilot |
| Career pathways | /forge/campus, /forge/students | Controlled-beta orientation |

## Partner, impact, legal, and campaign paths

| Lane | Routes | Release boundary |
| --- | --- | --- |
| Partner programs | /forge/partners, /forge/partners/apply | Interest only; no relationship implied |
| Impact and House of Heaven | /impact | Presentation-only; no current donation, beneficiary, tax, or outcome claim |
| Legal and safety | /privacy, /terms, /safety | Public boundary and policy pages |

## Protected routes

The protected convention covers /admin and every /admin/** path, /capture and nested paths, /reports and nested paths, and /monetization-admin and nested paths. These return a no-store JSON 404 while operator authentication is unavailable. Public navigation does not link visitors into them.

## Alias behavior

Aliases retain their own descriptive title, description, robots state, and canonical destination while loading the v133 shell. Every route has a predictable home/back path. A route shell refuses an HTML response that lacks the v133 release marker, preventing mixed-version rendering.
