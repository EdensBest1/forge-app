# Security Headers Audit

Generated: 2026-06-27

## Header Read

- CSP is present with script-src self and no unsafe-eval.
- style-src unsafe-inline remains because current dynamic visual meters use inline style attributes.
- HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP, and CORP are configured for Vercel and Netlify.

## Required Before Production

- Re-run passive curl header checks on https://hireonforge.com and https://www.hireonforge.com.
- Confirm the deployed headers match the local static config after any production deploy.
- Do not weaken CSP, frame, or robots controls without Andrew approval and a written reason.
