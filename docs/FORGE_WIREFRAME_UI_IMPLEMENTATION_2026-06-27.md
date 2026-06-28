# Forge Wireframe UI Implementation - 2026-06-27

## Wireframe Access

I can visually access Andrew's attached Forge wireframe/mockup. It is one composite image showing 10 key screens plus an MVP launch timeline:

- Homepage
- Post a Job - Step 1
- Post a Job - Step 2
- Post a Job - Step 3
- Jobs Listing Page
- Job Detail + Bids
- Worker / Contractor Sign Up
- Worker Dashboard
- Admin Dashboard
- Mobile View - Homepage

The mockup includes desktop marketplace screens, multi-step form screens, dashboard screens, and a mobile app-style homepage.

## What The Wireframe Requires

Forge should feel like a practical local marketplace app for Medford and Southern Oregon, not a generic SaaS site. The visual source of truth is:

- White primary background
- Strong royal/Facebook-style blue for navigation, dashboards, trust sections, and secondary CTAs
- Forge orange for primary CTAs, submit actions, price ranges, conversion points, and active accents
- Compact rounded cards with light borders and subtle shadows
- Dense but clean marketplace layouts
- Clear customer, worker/provider, and admin perspectives
- Mobile-first screens that feel like an app
- Local trust language and real marketplace examples

## Current Forge UI Gaps

Before this wireframe implementation pass, Forge already had the MVP routes, forms, dashboards, status screens, service lanes, and safety copy, but several areas needed visual alignment:

- Some older styling still used non-wireframe accent colors for marketplace price signals.
- The design needed a single shared wireframe token layer to keep all core screens consistent.
- Homepage, job flow, listings, detail, worker signup, dashboards, and mobile navigation needed to read as one product family.
- The implementation needed a documented source-of-truth handoff so the next chat can continue without losing the mockup direction.

## Design Tokens To Use

Core tokens established for this wireframe layer:

- `--wire-bg`: white app background
- `--wire-blue`: strong royal/Facebook-style blue
- `--wire-blue-dark`: deeper dashboard/sidebar blue
- `--wire-orange`: Forge orange for CTAs and price/budget emphasis
- `--wire-soft`: light blue panel background
- `--wire-line`: light gray-blue borders
- `--wire-shadow`: subtle card shadow

Usage rules:

- Orange: Post a Job, submit, create profile, choose bid, price ranges, budget highlights, active accents
- Blue: nav bars, sidebars, secondary CTAs, dashboard structure, trust/status sections
- White: primary app surfaces and cards
- Light blue/gray: background panels, filters, table headers, form separation
- Avoid purple gradients, dark tech themes, beige palettes, decorative blobs, and unrelated color systems

## Screens To Update

The Forge wireframe pass covers these screens:

- Homepage: logo, headline, CTAs, worker image panel, benefit cards, popular jobs, blue trust/footer strip
- Post Job Step 1: category, job title, description, progress indicator, blue next action
- Post Job Step 2: location, timeline, budget, upload photos, back/next, orange budget emphasis
- Post Job Step 3: contact info, terms, review/summary, orange submit action
- Jobs Listing: blue top bar, filters, compact job cards, orange price ranges, bids, status
- Job Detail + Bids: job details, bid cards, message and choose bid actions, bidder quality signals
- Worker Signup: photo panel, form, skill/service selectors, verification/profile status, orange create action
- Worker Dashboard: blue sidebar, metric cards, recent jobs, bids/messages/profile status
- Admin Dashboard: blue sidebar, stats cards, job leads, worker/provider status, demo/admin clarity
- Mobile Homepage: compact header, CTAs, popular jobs preview, bottom app navigation

## Files Likely Involved

Primary implementation files:

- `index.html`
- `styles.css`
- `app.js`
- `smoke-test.mjs`
- `docs/FORGE_WIREFRAME_UI_IMPLEMENTATION_2026-06-27.md`

The current pass keeps the implementation local and reversible.

## What Was Preserved

The implementation must preserve existing Forge work, including:

- Customer, worker/provider, and admin routes
- Post job, jobs listing, job detail, bidding, messaging, status, profile, launch, and safety flows
- Home services, trades, construction, cleaning, Airbnb cleaning, dump truck/run services, asphalt/concrete/stone/masonry/pavers
- Forge Auto, Road Rescue, Photography/Videography, NorthStar Creative Co., Manufacturing/Nutraceuticals, Forge Academy/Admitly, building/home projects
- Paid tiers, profile boosts, verification/proof language, and trust/safety language where present
- Existing local data structures and demo records
- Existing deploy, security, release, and backend handoff documentation

## What Requires Andrew Review Before Deployment

Andrew should review these items before public launch:

- Visual match against the original wireframe image on desktop and mobile
- Homepage first impression and local Medford/Southern Oregon tone
- Worker/provider signup clarity, especially profile status and verification language
- Job-to-bid-to-message demo path
- Admin dashboard demo labels and operational readiness
- Forge Auto placement and whether dealer names are presented exactly as intended
- Safety, privacy, controlled-beta, and no-live-payment language
- Full public security review and backend/auth readiness before deployment

This is a local UI/UX implementation pass only. It does not deploy Forge, push to GitHub, change DNS, change production services, modify Supabase, configure Stripe, or alter environment variables.
