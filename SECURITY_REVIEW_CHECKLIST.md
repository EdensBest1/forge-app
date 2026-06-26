# Forge Security Review Checklist

Use this before moving Forge from controlled beta to a public link.

## Deployment Surface

- Verify HTTPS-only public hosting.
- Confirm Netlify or Vercel security headers are active in production.
- Confirm no admin route is exposed without authentication.
- Confirm service worker cache version matches the deployed assets.

## Data And Privacy

- Submit one job, worker profile, referral, and bid; verify each saves locally and forwards only to the intended webhook/backend.
- Confirm no passwords, payment cards, bank info, SSNs, or sensitive documents are collected.
- Confirm Early Access Terms & Privacy is visible from home, post job, and worker signup.
- Export a JSON backup before and after real beta testing.

## Operator Workflow

- Open admin through the intended admin login/demo path only.
- Verify direct `#admin`, `#capture`, and `#reports` URLs route non-admin visitors to login.
- Verify Public View hides operator-only controls before handing the app to someone else.

## User Flow

- Test post job -> confirmation -> status lookup.
- Test worker signup -> confirmation -> worker dashboard.
- Test job detail -> choose bid -> messages handoff.
- Test mobile home, post, signup, jobs, status, and legal screens.

## Launch Decision

Public beta is acceptable only after lead capture, admin protection, legal copy, backups, and security headers all pass.
