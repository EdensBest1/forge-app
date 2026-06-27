# Forge Security Findings

Date: 2026-06-27

Checkpoint commit before this pass: `c8c2ce4`.

## 2026-06-27 06:25 PDT Legal/Ops/Funnel/Impact Hardening

- Default public mode is now on for first-time visitors.
- Public top navigation no longer says `Log In / Admin`; it says `Log In`.
- Admin login card is hidden from non-admin public display with `data-admin-control`.
- Added `ADMIN_ACCESS_POLICY.md` and `MONEY_SECURITY_CONTROLS.md`.
- Added legal binder templates under `legal/`, including DocuSign, Drive, Monday.com, Klaviyo, Canva, money-control, people-ops, anti-bypass, and state-matrix documentation.
- Added impact tracker docs and example ledger with placeholder-only public metrics.
- Added `.env.example` placeholders for DocuSign, Google Drive, Monday.com, Klaviyo, Canva, and related workflow variables without secret values.
- Remaining risk: hosted auth/RBAC, server-side enforcement, production database audit logs, rate limiting, and counsel/payment partner review are still required before real operations.

## 2026-06-27 05:55 PDT Passive Recheck

### Checked

- Live headers for `https://hireonforge.com` and `https://www.hireonforge.com`.
- Live rendered homepage and key hash routes with browser automation.
- Local source for hardcoded secrets, `.env` files, token/private-key patterns, unsafe dynamic execution helpers, `innerHTML`, query-param use, and exposed admin/demo surfaces.
- Existing project security/check scripts through `npm run check`.

### Passed

- HTTPS returns HTTP 200 on both apex and `www`.
- HSTS is present.
- CSP is present and includes `frame-ancestors 'none'`.
- `X-Content-Type-Options: nosniff` is present.
- `X-Frame-Options: DENY` is present.
- `Referrer-Policy: strict-origin-when-cross-origin` is present.
- `Permissions-Policy` is present.
- No committed real `.env` file was found.
- Strict token/private-key search found no candidate real tokens or private keys.
- Runtime scan did not identify `eval` or `new Function` use.
- Public forms reviewed did not collect card numbers, bank details, SSNs, passwords, or emergency-service details.

### Failed Or Risky

- Public site exposes `OPEN ADMIN`/admin follow-up demo entrypoints. This is the highest current public-readiness blocker.
- Admin/operator behavior is demo/session-gated only, not production hosted auth/RBAC.
- CSP allows `style-src 'unsafe-inline'` for current dynamic styles; this should be removed after a no-inline render pass.
- `innerHTML` rendering remains a review surface. Current escaping reduces risk, but future user-generated content must remain escaped and server-validated.
- Query-param/demo mode handling exists and should not be used as authorization.
- Both apex and `www` return 200; a canonical redirect would reduce duplicate public surfaces.
- `Server: Vercel` is exposed. This is expected platform behavior and not directly controllable in app code.
- `npm audit --audit-level=high` is blocked by missing lockfile (`ENOLOCK`).

### Next Required Security Actions

1. Hide, rename, or move public admin-demo entrypoints before controlled beta.
2. Add hosted auth, RBAC, server-side route enforcement, audit logs, rate limits, and production upload handling before real operations.
3. Remove inline-style CSP allowance after dynamic style rendering is refactored.
4. Add a lockfile or documented package audit workflow before claiming dependency audit coverage.

## Scope

This was a non-destructive public safety, clarity, and UI polish pass for the static Forge MVP. It did not remove routes, categories, forms, dashboards, legal language, or launch tooling. No production deployment was performed.

## Changes Made

- Added stricter Vercel and Netlify headers, including HSTS and a broader `Permissions-Policy`.
- Added client-side form guards: minimum submit time, duplicate-submit lock, honeypot, field-length limit, upload-size limit, and executable upload blocking.
- Simplified the public top navigation while preserving the underlying routes.
- Added public role cards, grouped service category cards, and clearer controlled-beta boundaries.
- Added SEO/share metadata and a keyboard skip link.
- Added a premium marketplace search preview, category/filter chips, job-status preview, provider trust cards, and a five-tab mobile navigation surface.
- Added noindex/noarchive headers for clean internal admin/report paths and blocked those clean paths in `robots.txt`.
- Added clean `/privacy/`, `/terms/`, and `/safety/` alias shells that route to the existing legal/safety screen.

## Findings

- Admin/operator screens are protected only by the current demo/session role guard. This is suitable for a controlled demo, not for production access control.
- The public MVP does not collect passwords, card numbers, bank details, SSNs, or emergency-service requests.
- File uploads are still client-side demo fields. Production upload handling needs server-side type/size checks, malware scanning, private storage, and signed URLs.
- Static hosting cannot provide real rate limiting by itself. Server-side/API rate limiting is still required before real public traffic or backend intake.
- The current CSP still allows `style-src 'unsafe-inline'` because the static app renders dynamic progress meters and gantt bars with numeric inline `style` attributes in `app.js`. A future bundling/no-inline pass should move those values to CSS variables/classes or a safer rendered component model and then remove the inline style allowance.
- `www.hireonforge.com` and `hireonforge.com` both respond with 200 over HTTPS. This is usable, but a future canonical redirect can reduce duplicate crawl/share surfaces.

## Required Before Real Users Or Sensitive Data

- Put admin routes, exports/imports, webhook setup, and reports behind hosted authentication and RBAC.
- Add server-side validation for every intake/API route.
- Add server/API rate limits, request logging, and abuse monitoring.
- Store real uploads in private storage with signed URLs and malware scanning.
- Re-run live header, DNS, browser, and full check-suite verification after any deployment.

## Verification Run

- `npm run check` passed.
- `node --check app.js` passed.
- `node --check route-loader.js` passed.
- `vercel.json` JSON parse passed.
- Strict secret-pattern scan found no candidate real tokens or private keys.
- Unsafe-code scan found no forbidden dynamic execution helpers or legacy document-writing calls in runtime app files.
- `npm audit --audit-level=moderate` could not run because the static app has no lockfile (`ENOLOCK`).
- Local `curl -I` checks for `/privacy/`, `/terms/`, and `/safety/` returned 200.
- Live `https://hireonforge.com` and `https://www.hireonforge.com` returned 200.
- Live `http://hireonforge.com` and `http://www.hireonforge.com` returned 308 redirects to HTTPS.
