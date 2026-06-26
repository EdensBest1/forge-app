# Forge MVP Checkpoint

Last checkpoint: June 26, 2026

## Open the MVP

- Main app: http://127.0.0.1:4174/#home
- Demo login: http://127.0.0.1:4174/#login
- Perspective demo: http://127.0.0.1:4174/#perspective
- Profile status: http://127.0.0.1:4174/#profile
- Best demo start: http://127.0.0.1:4174/#perspective
- Homeowner direct demo: http://127.0.0.1:4174/?v=71&demo=customer#status
- Worker direct demo: http://127.0.0.1:4174/?v=71&demo=worker#worker
- Admin direct demo: http://127.0.0.1:4174/?v=71&demo=admin#admin
- Training & Careers: http://127.0.0.1:4174/?v=71#opportunities
- Forge Auto & Transport: http://127.0.0.1:4174/auto?v=71

## Demo Accounts

- Mike Jones: worker / contractor perspective
- John Smith: homeowner / job poster perspective
- Forge Admin: operator perspective

## Current MVP Features

- Wireframe-style Forge homepage
- Forge Auto & Transport now includes Sell My Car on Forge, List My Vehicle, Consign My Vehicle, Request a Vehicle, Transport My Vehicle, Book Executive Transport, Forge Platinum Auto Concierge, and Auction Vehicle Sourcing paths.
- Sell My Car on Forge now captures richer vehicle seller intake: title/lien/payoff status, private lowest price, condition, running status, accident/service details, photo notes, replacement-vehicle interest, partner consent, routing tags, lead score, and admin route.
- Forge Platinum Auto Concierge is the public premium auto brand. The private Portland luxury auto partner record stays internal/admin-only and is not public branding.
- Admin now includes Auto Ops with Vehicle Seller Leads, Vehicle Listing Review, Forge Platinum Deal Desk, Auction Deal Desk, and revenue review cards.
- Admin now includes Forge Operations Vault with internal SOP/checklist/template documents and copy actions. Legal templates are marked as requiring attorney review before use.
- `SUPABASE_SCHEMA.sql` now includes `forge_vehicle_seller_leads`, `forge_operations_vault_documents`, and a private admin-only luxury auto partner seed.
- `WEBHOOK_PAYLOADS.md` now documents `vehicle-seller` and `auto-service` payloads and privacy rules.
- Forge Autos buy/sell vehicle marketplace with local listings, sell form, seller contact handoff, and dealer partners: JoCo Auto Sales, Chevelles Auto Sales, and Shasta Lake Auto Sales
- Training & Careers screen for trade school, union/apprenticeship, and blue-collar AI job interest
- Career interest form, career lead queue, copyable application plan, and copyable career lead handoff
- Career leads are included in Admin stats, first-200 progress, Launch Command, Follow-Up Queue, Messages, Daily Brief, and soft-launch invite copy
- Forge Autos soft-launch lead route for buyer inquiry, dealer handoff, safety boundary, and follow-up
- Auto dealer setup checklist and `AUTO_DEALER_INTEGRATION.md` for approved dealer contact, inventory, terms, and compliance setup
- Auto buyer inquiry form and queue for routing vehicle interest to dealer partners
- Perspective Demo includes an Auto marketplace proof path, Autos cue card, shareable Autos link, and Autos readiness check
- First-user Start Here path chooser for job posters, workers, career applicants, and returning job posters
- Copy First User Links action for sharing post, worker, status, and home routes
- First-user signup readiness panel for controlled beta signups, safe collection boundaries, and public-launch infrastructure reminders
- Copy Signup Checklist action for inviting friends and early local users without collecting payments in the MVP
- Post-a-job wizard
- Confirmation next-step handoff for jobs, workers, referrals, and bids
- Confirmation screen includes a first-user handoff message and copy action after jobs, worker signups, referrals, and bids
- Job listing and job detail
- Job detail has a Job-to-Bid Flow tracker for posted, bids received, bid chosen, and message/schedule status
- Job detail includes a copyable Job Flow Brief showing current state, best next action, and message proof
- Bid submission and bid selection
- Selected-bid handoff panel with price, timeline, next message, and copy action
- Worker signup/profile form
- Worker dashboard
- Admin dashboard
- Admin Safety Center with backup, consent, webhook, and public-demo checks
- Admin launch gate for separating controlled first-user beta signups from broad public launch readiness
- Copyable Launch Gate note for explaining what is safe now and what still needs backend/hosting/trust infrastructure
- Admin Public Deploy Preflight for static hosting security config, lead capture backend, admin protection, backups, terms, and payments-off checks
- Admin public beta readiness score with remaining blocker list before final security review
- Admin Lead Delivery Status panel showing local-only, webhook-ready, last delivery, and public beta delivery readiness
- Copyable Lead Delivery Status summary
- Admin Soft Launch Tomorrow panel with copyable controlled-launch plan for tomorrow
- Admin Soft Launch Invite Kit with copyable homeowner, worker, Careers, Autos, and referral messages
- Admin Launch Day Run Sheet with copyable before-sharing, first-5-asks, midday, evening, and stop-rule steps
- Browser verification previously confirmed the Training & Careers screen renders without console errors and without mobile horizontal overflow.
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
- Quick lead capture
- Early access and follow-up consent notes on job, worker, and quick capture forms
- First 200 launch tracker on Home and Admin, now including career leads
- Copy Launch Invite action with first-200 progress, asks, and direct start links
- Public “What happens next” onboarding panel for job posters, workers, and referrals
- Referral queue
- Follow-up queue
- Follow-up queue cards show the recommended next message before copying/texting
- Follow-up queue is sorted by priority score and explains why each person is next
- Today’s Follow-Up strip shows the top 3 contacts to handle first
- Follow-up progress snapshot shows needs-touch, contacted, moving, and first-200 totals
- Move Forward actions advance jobs to Matching, workers to Ready, career leads to Packet Started/Applied, and referrals to Converted
- Zapier webhook setup field
- CSV exports and JSON backup/import
- Backup freshness tracking before resets and demos
- Public / Operator view
- Job status lookup
- Job status lookup has privacy guidance and no-match recovery actions
- Messages screen with role-aware threads
- Messages screen now shows active conversation context, last touch, and next step
- Reports screen with traction stats and next actions
- Profile Status screen for Mike, John, and Admin
- Profile Status now includes a role-specific readiness meter, Status Brief cards, copyable brief, and next action
- Perspective Demo screen for showing Forge from each person’s point of view
- Guided 3-minute walkthrough on the Perspective Demo screen
- Copyable demo script for showing Forge to friends, workers, and job posters
- Live demo cue cards with role-specific opener, proof, ask, and copy action
- Best Demo Path shortcuts for opening the right proof screen by audience
- Best Demo Path includes an Autos route for buyer, seller, dealer, and inquiry proof
- Shareable Links board with open/copy actions for each main role and readiness view
- Copy First 200 plan for early recruiting and follow-up
- John Smith demos now prioritize the seeded bid-ready job before newer local test jobs
- After-demo outcome cards for post-a-job, worker signup, and referral asks
- Mobile tab bar includes a Demo entry for fast phone demos
- Mobile tab bar has clearer active styling and tighter small-screen labels
- Mobile layout now respects phone safe areas and keeps the first-screen benefit strip compact
- Active navigation highlights current screen across mobile, top nav, and dashboards
- MVP Ready Today checklist with completion score on the Perspective screen
- Copy Demo Pack action with demo links, sequence, asks, and current MVP counts
- Copy Demo Pack now includes role readiness links and a close-ask script
- Copy Close Ask action for the final thirty seconds of a live demo
- Copy Link actions for John, Mike, and Admin that open the right perspective automatically
- Choosing a bid now creates a confirmation, moves the job to In Progress, and saves a message trail
- Service worker cache version: forge-mvp-v71

## Verification Commands

```bash
node --check app.js
node smoke-test.mjs
node security-check.mjs
node release-check.mjs
npm run check
curl -I http://127.0.0.1:4174/
```

## Notes

- The workspace is a git repository. A checkpoint commit was created before this Auto/Ops Vault work: `e725ed0` (`checkpoint before forge auto and operations vault`).
- A dedicated next-chat handoff was also saved as `FORGE_NEXT_CHAT_HANDOFF.md`.
- A tomorrow-start handoff was saved as `FORGE_START_TOMORROW.md`.
- A cloud backup plan was saved as `CLOUD_HARDDRIVE_PLAN.md`.
- A local zip snapshot was saved as `saved-checkpoints/forge-v71-2026-06-26-auto-ops-vault-snapshot.zip`.
- The local server was running on port 4174 when this checkpoint was written.
- If the browser shows an older version, refresh the page. The service worker cache has been bumped to force newer assets.
