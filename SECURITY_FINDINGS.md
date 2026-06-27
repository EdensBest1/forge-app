# Forge Security Findings

Date: 2026-06-27

Checkpoint commit before this pass: `9101abf`.

## Scope

This was a non-destructive public safety, clarity, and UI polish pass for the static Forge MVP. It did not remove routes, categories, forms, dashboards, legal language, or launch tooling. No production deployment was performed.

## Changes Made

- Added stricter Vercel and Netlify headers, including HSTS and a broader `Permissions-Policy`.
- Added client-side form guards: minimum submit time, duplicate-submit lock, honeypot, field-length limit, upload-size limit, and executable upload blocking.
- Simplified the public top navigation while preserving the underlying routes.
- Added public role cards, grouped service category cards, and clearer controlled-beta boundaries.
- Added SEO/share metadata and a keyboard skip link.

## Findings

- Admin/operator screens are protected only by the current demo/session role guard. This is suitable for a controlled demo, not for production access control.
- The public MVP does not collect passwords, card numbers, bank details, SSNs, or emergency-service requests.
- File uploads are still client-side demo fields. Production upload handling needs server-side type/size checks, malware scanning, private storage, and signed URLs.
- Static hosting cannot provide real rate limiting by itself. Server-side/API rate limiting is still required before real public traffic or backend intake.
- The current CSP still allows the static prototype pattern already used by the app. A future bundling pass should remove any remaining inline allowances if production build tooling is introduced.
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
- `vercel.json` JSON parse passed.
- Strict secret-pattern scan found no candidate real tokens or private keys.
- Unsafe-code scan found no `eval`, `new Function`, `dangerouslySetInnerHTML`, or `document.write`.
- `npm audit --audit-level=moderate` could not run because the static app has no lockfile (`ENOLOCK`).
- Live `https://hireonforge.com` and `https://www.hireonforge.com` returned 200.
- Live `http://hireonforge.com` and `http://www.hireonforge.com` returned 308 redirects to HTTPS.
