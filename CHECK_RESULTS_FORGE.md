# Forge Check Results

Generated: 2026-06-27 01:14 PDT

## 2026-06-27 06:30 PDT Legal/Ops/Funnel/Impact Pass

| Command | Result |
|---|---|
| `node --check app.js` | passed |
| `node --check route-loader.js` | passed |
| `npm run check` | passed |
| `npm run lint` | not available |
| `npm run typecheck` | not available |
| `npm run test` | not available |
| `npm run build` | not available |
| `npm audit --audit-level=high` | blocked: `ENOLOCK`, no lockfile |
| `curl -I https://hireonforge.com` | HTTP 200 over HTTPS; live deployment still older than this local pass |
| `curl -I https://www.hireonforge.com` | HTTP 200 over HTTPS; live deployment still older than this local pass |
| Local browser smoke `http://127.0.0.1:4174/` | passed: dark hero, impact strip, public CTAs, no `Log In / Admin` wording |
| Local browser smoke `http://127.0.0.1:4174/#login` | passed: public login screen hides the `Open Admin` card |
| Local browser smoke `http://127.0.0.1:4174/impact/` | passed: placeholder-only impact page |

Current status: local checks pass and public admin-demo exposure is improved locally. Production was not deployed and must be rechecked after Andrew approval.

## 2026-06-27 05:55 PDT Recheck

| Command | Result |
|---|---|
| `npm run check` | passed |
| `npm run lint` | not available |
| `npm run typecheck` | not available |
| `npm run test` | not available |
| `npm run build` | not available |
| `npm audit --audit-level=high` | blocked: `ENOLOCK`, no lockfile |
| `curl -I https://hireonforge.com` | HTTP 200 over HTTPS; HSTS/CSP/security headers present |
| `curl -I https://www.hireonforge.com` | HTTP 200 over HTTPS; HSTS/CSP/security headers present |
| Browser render of live `/` | loaded; failed public-readiness check because public admin-demo entrypoints remain visible |
| Vercel deployment read | no deploy performed; custom domain resolved to ready deployment `dpl_AaRLrstzWYwHkivMVPpf99FoNbkh` |

Current status: local checks pass, but public controlled-beta readiness is blocked by admin-demo exposure and visual-target cleanup.

## App

- Root: `/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge`
- Branch: `feature/forge-building-seneca-flex-network`
- Domain: `https://hireonforge.com`
- Framework: static HTML/CSS/JS MVP
- Package manager: npm with `package.json`; no lockfile present

## Commands

| Command | Result |
|---|---|
| `npm run check` | passed |
| `node --check app.js` | passed |
| `node --check route-loader.js` | passed |
| `node -e "JSON.parse(...vercel.json...)"` | passed |
| `git diff --check` | passed |
| `npm run lint` | not available |
| `npm run typecheck` | not available |
| `npm run test` | not available |
| `npm run build` | not available |
| `npm audit --audit-level=moderate` | blocked: `ENOLOCK`, no lockfile |

## Security Scans

- Strict token/private-key pattern scan: no matches.
- Unsafe runtime pattern scan for dynamic execution/document-writing helpers: no matches.
- Admin/report clean paths are noindexed in host config and blocked in `robots.txt`.

## Public Route Checks

- `/`, `/privacy/`, `/terms/`, and `/safety/` returned local 200.
- Existing service/category aliases remain covered by `npm run check`.
- Browser screenshot automation was attempted with Playwright and local Chrome, but Chrome aborted under the sandboxed launch; screenshots are unavailable from this environment.

## Status

Forge is check-clean for controlled public beta review, with the remaining risks documented in `PUBLIC_LAUNCH_RISK_REGISTER.md` and `SECURITY_FINDINGS.md`.
