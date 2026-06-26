# Forge MVP

Forge is a local, static MVP based on the 10-screen Forge wireframe.

Open `index.html` in a browser to use it. Demo jobs, selected bids, and worker profile updates persist in `localStorage`.

## Demo logins

- Mike Jones: worker / contractor view with jobs, bids, profile, and worker dashboard
- John Smith: job poster view with job status and bid review
- Forge Admin: operator view with leads, referrals, exports, follow-up queue, and Zapier setup

## Working screens

- Homepage: "Post the job. Get the crew."
- Forge Autos screen for buying and selling local cars with dealer partners, including JoCo Auto Sales, Chevelles Auto Sales, and Shasta Lake Auto Sales
- Forge Autos soft-launch lead route for buyer inquiry, dealer handoff, safety boundary, and follow-up
- Auto dealer setup checklist and `AUTO_DEALER_INTEGRATION.md` for approved dealer contact, inventory, terms, and compliance setup
- Auto buyer inquiry form and queue for routing vehicle interest to dealer partners
- Photography & Videography routes at `/photography`, `/photography/request`, and `/photography/apply` for customer creative requests and approved local creative provider applications
- Demo login screen with worker, job poster, and admin roles
- Perspective Demo screen for showing Forge as John, Mike, or Admin
- Perspective Demo now includes an Auto marketplace proof path, Autos cue card, and shareable Autos link
- Shareable perspective links that auto-open John, Mike, or Admin's side of Forge
- Shareable Links board with direct open/copy actions for each main role and readiness view
- Guided 3-minute demo script with copyable talking points
- Live demo cue cards with role-specific opener, proof, ask, and copy action
- Best Demo Path shortcuts for homeowner, worker, and operator walkthroughs
- After-demo outcome cards for asking for a job post, worker signup, or referral
- MVP Ready Today checklist and copyable demo pack
- Copyable close-ask script for turning a demo into a job, worker signup, or referral
- First-user Start Here path chooser for job posters, workers, and returning job posters
- Copy First User Links action for sharing post, worker, status, and home routes
- Profile Status screen with role-specific readiness meters, Status Brief cards, copyable brief, and next actions for Mike, John, and Admin
- Post a Job: 3-step wizard with validation
- Confirmation screen after job posting or worker signup
- Confirmation screen now explains what Forge does next for jobs, workers, referrals, and bids
- Confirmation screen now includes a first-user handoff message and copy action after jobs, worker signups, referrals, and bids
- Jobs listing: filters and job cards
- Job detail and bids: choose a bid and move the job forward
- Job detail now shows a Job-to-Bid Flow tracker so first users can see posted, bids received, bid chosen, and message/schedule status
- Job detail now includes a copyable Job Flow Brief showing current state, best next action, and message proof
- Selected-bid handoff panel with price, timeline, next message, and copy action
- Worker / contractor signup
- Worker dashboard
- Admin dashboard with job leads and worker leads
- Admin Safety Center with backup, consent, webhook, and public-demo checks
- Admin launch gate for separating controlled first-user beta signups from broad public launch readiness
- Copyable Launch Gate note for explaining what is safe now and what still needs backend/hosting/trust infrastructure
- Admin Public Deploy Preflight for static hosting security config, lead capture backend, admin protection, backups, terms, and payments-off checks
- Admin public beta readiness score with remaining blocker list before final security review
- Admin Lead Delivery Status panel showing local-only, webhook-ready, last delivery, and public beta delivery readiness
- Copyable Lead Delivery Status summary
- Admin Soft Launch Tomorrow panel with copyable controlled-launch plan
- Admin Soft Launch Invite Kit with copyable homeowner, worker, Autos, and referral messages
- Admin Launch Day Run Sheet with copyable before-sharing, first-5-asks, midday, evening, and stop-rule steps
- Admin Backend Handoff panel with copyable backend connection instructions
- `SUPABASE_SCHEMA.sql` and `WEBHOOK_PAYLOADS.md` for turning the static MVP into backend-backed public beta intake
- Admin Auth Handoff panel with copyable production-auth plan
- `ADMIN_AUTH_PLAN.md` for protecting admin, capture, reports, exports, imports, backup, and webhook setup
- Copyable Security Review pack and `SECURITY_REVIEW_CHECKLIST.md` for the final public-readiness review
- `security-check.mjs` executable local security preflight and Admin Copy Check Command action
- Public beta deploy runbook and Admin Copy Runbook action
- Release candidate packet with `release-manifest.json`, `RELEASE_CANDIDATE.md`, `release-check.mjs`, and Admin Copy RC Packet action
- `package.json` check scripts and GitHub Actions workflow for repeatable release verification
- Admin Final Public Gate cards and `FINAL_PUBLIC_GATE.md` for the 99% stop/go decision before broad launch
- Netlify and Vercel static deploy config files with conservative security headers
- Early Access Terms & Privacy screen linked from job posting, worker signup, and the homepage footer
- Operator route guard and fresh-load admin session expiry before admin, capture, or reports screens
- Admin Launch Command view for first-200 outreach lanes and top daily action
- Admin Outreach Recap showing what moved today from the activity log
- Admin Next 10 Batch for focused outreach sprints with Complete Sprint logging
- Admin Session History for reviewing recent completed outreach sprints
- Optional Zapier/webhook lead forwarding
- CSV export for job and worker leads
- Full JSON backup export
- Backup freshness tracking before resets and demos
- JSON backup import
- Copyable invite text for sharing with early users
- First-user signup readiness panel that explains controlled beta use, what is safe to collect, and what still needs public-launch infrastructure
- Copyable signup checklist for inviting the first controlled group without collecting payments
- Admin follow-up templates, lead statuses, notes, and activity log
- Public View / Operator View toggle
- Unified follow-up queue with call, text, and email actions
- Follow-up queue cards preview the recommended next message before copy/text/email
- Follow-up queue priority scores rank who to contact first and why
- Today’s Follow-Up strip surfaces the top 3 contacts from the ranked queue
- Follow-up progress snapshot shows needs-touch, contacted, moving, and first-200 totals
- Move Forward actions advance jobs, workers, and referrals into visible progress states
- Training & Careers screen for trade schools, union/apprenticeships, and blue-collar AI field jobs
- Career interest form, application plan copy, career lead queue, and follow-up integration
- Worker bid submission flow
- Admin bid activity table and bid export
- Public job status lookup for job posters
- Job status lookup has privacy guidance and no-match recovery actions
- Auto-loaded customer status for the John Smith demo login
- Forge Messages screen with role-aware threads, next-step context, copyable drafts, and sent message log
- Forge Reports screen with traction stats, launch health, and next actions
- In-app demo script for showing Forge quickly
- Quick Capture screen for saving friend/referral leads in the moment
- Early access and follow-up consent notes on job, worker, and quick capture forms
- First 200 launch tracker for job posters, workers, career leads, referrals, and total early network progress
- Copyable first-200 launch invite with progress, asks, and direct start links
- Public onboarding panel explaining what happens after someone posts, joins, or sends a referral
- Referral lead table, pipeline, copy text, and export
- Lightweight PWA manifest and offline cache for local/server previews
- Responsive mobile tab bar
- Phone polish for safe-area spacing, compact first-screen benefits, and steadier mobile touch targets
- MVP launch timeline

## Quick checks

```bash
node --check app.js
node smoke-test.mjs
node security-check.mjs
node release-check.mjs
npm run check
```

## Launch docs

- `ZAPIER_SETUP.md`
- `LAUNCH_WORKFLOW.md`
- `SECURITY_REVIEW_CHECKLIST.md`
- `security-check.mjs`
- `PUBLIC_BETA_DEPLOY_RUNBOOK.md`
- `FINAL_PUBLIC_GATE.md`
- `AUTO_DEALER_INTEGRATION.md`
- `RELEASE_CANDIDATE.md`
- `release-manifest.json`
- `release-check.mjs`
- `package.json`
- `.github/workflows/forge-checks.yml`
- `ADMIN_AUTH_PLAN.md`
- `SUPABASE_SCHEMA.sql`
- `WEBHOOK_PAYLOADS.md`
- `netlify.toml`
- `vercel.json`
