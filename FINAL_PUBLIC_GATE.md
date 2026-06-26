# Forge Final Public Gate

Current release candidate: `v71`

Forge is ready for controlled first-user beta demos with people Andrew can personally follow up with. Do not treat it as broad public-launch ready until every hold item below is complete.

## Ready Now

- Controlled first-user signups with clear early-access expectations.
- No payments collected in the MVP.
- Static deploy config prepared for Netlify and Vercel.
- Admin Safety Center, Public Deploy Preflight, release packet, and local verification commands are in place.
- Personal Driver, Merchant Services, and Local Products lanes are ready for controlled lead capture only.
- Worker Trust / Proof Ledger is visible for triage and admin review, but does not replace verification.

## Hold Before Public Launch

- Connect and verify Zapier, Supabase, or another backend so leads do not live only in one browser.
- Protect admin, capture, reports, export, import, backup, and webhook setup with production authentication.
- Export a fresh JSON backup immediately before public beta testing.
- Complete final legal review of the Early Access Terms & Privacy copy.
- Complete driver-specific legal/insurance/background/vehicle/local-rule review before matching Personal Driver requests.
- Complete merchant-services compliance and partner-language review before any payment/processor referral claims or payment processing.
- Complete local-products policy review for pricing, tax, fulfillment, product photos, refunds, and customer communication before public marketplace listings.
- Connect production storage for any real file uploads; current file fields are browser-only summaries.
- Run the full security review checklist and `npm run check` against the release candidate.

## Launch Decision

Use Forge now for a small, controlled first-user group. Share a broad public link only after lead delivery, production admin auth, backup, legal review, and final security review pass.
