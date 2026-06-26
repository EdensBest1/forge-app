# Forge Public Beta Release Candidate

Current release candidate: `v69`

Open locally:

- Home: `http://127.0.0.1:4174/?v=69#home`
- Admin: `http://127.0.0.1:4174/?v=69&demo=admin#admin`
- Training & Careers: `http://127.0.0.1:4174/?v=69#opportunities`
- Legal: `http://127.0.0.1:4174/?v=69#legal`

Run before public beta:

```bash
node --check app.js
node smoke-test.mjs
node security-check.mjs
node release-check.mjs
npm run check
```

## Release Contents

- Static Forge MVP app
- Forge Autos buy/sell vehicle marketplace
- Training & Careers intake for trade school, union/apprenticeship, and blue-collar AI job interest
- Auto dealer integration checklist
- Perspective Demo live cue cards
- PWA manifest and service worker
- Netlify and Vercel deploy configs
- Public beta deploy runbook
- Final public gate checklist
- Security review checklist
- Admin auth plan
- Supabase schema
- Webhook payload documentation

## Human Gates Still Required

- Connect and verify backend or Zapier lead delivery.
- Enable production-grade admin authentication.
- Export a fresh JSON backup before public beta.
- Complete final legal review.
- Run final security review.
