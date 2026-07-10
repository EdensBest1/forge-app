# Forge Next Chat Handoff

Saved: June 26, 2026

## Where the work lives

Workspace:

`/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge`

Main app files:

- `index.html`
- `styles.css`
- `app.js`
- `service-worker.js`
- `smoke-test.mjs`
- `security-check.mjs`
- `release-check.mjs`
- `package.json`
- `.github/workflows/forge-checks.yml`
- `FINAL_PUBLIC_GATE.md`
- `README.md`
- `FORGE_CHECKPOINT.md`
- `FORGE_START_TOMORROW.md`
- `CLOUD_HARDDRIVE_PLAN.md`

This workspace is a git repository. A checkpoint commit was created before the Auto/Ops Vault changes: `e725ed0` (`checkpoint before forge auto and operations vault`).

For tomorrow, start with `FORGE_START_TOMORROW.md`.

Current local snapshot:

`saved-checkpoints/forge-v71-2026-06-26-auto-ops-vault-snapshot.zip`

## Current build

Forge is at `v119`.

Open locally:

- Home: `http://127.0.0.1:4174/?v=119#home`
- Best demo start: `http://127.0.0.1:4174/?v=119#perspective`
- Homeowner demo: `http://127.0.0.1:4174/?v=119&demo=customer#status`
- Worker demo: `http://127.0.0.1:4174/?v=119&demo=worker#worker`
- Training & Careers: `http://127.0.0.1:4174/?v=119#opportunities`
- Forge Auto & Transport: `http://127.0.0.1:4174/auto?v=119`
- Admin demo: `http://127.0.0.1:4174/?v=119&demo=admin#admin`

If the browser shows an older version, refresh. The app uses service worker cache `forge-mvp-v119`.

## What has been built

- Wireframe-style Forge homepage matching the white/orange/Facebook-blue mockup direction.
- v71 adds Forge Auto & Transport paths for Sell My Car on Forge, List My Vehicle, Consign My Vehicle, Request a Vehicle, Transport My Vehicle, Book Executive Transport, Forge Platinum Auto Concierge, and Auction Vehicle Sourcing.
- v71 adds a much stronger Sell My Car on Forge intake with title/lien/payoff, private lowest price, condition/running status, accident/service details, photo notes, replacement-vehicle interest, consent, routing tags, lead score, and admin route.
- v71 adds Forge Platinum Auto Concierge as the public premium auto brand while keeping the private Portland luxury auto partner record internal/admin-only.
- v71 adds Admin Auto Ops: Vehicle Seller Leads, Vehicle Listing Review, Forge Platinum Deal Desk, Auction Deal Desk, and auto revenue review cards.
- v71 adds Forge Operations Vault: admin-only SOPs, checklists, templates, search/filter, and copy actions. Legal templates are marked as requiring attorney review before use.
- v71 updates `SUPABASE_SCHEMA.sql`, `WEBHOOK_PAYLOADS.md`, smoke tests, security/release checks, and service worker cache to match the new Auto/Ops work.
- Forge Autos buy/sell vehicle marketplace with local listings, sell form, buyer inquiry queue, buyer safety note, seller contact handoff, and dealer partner handoffs.
- First-user Start Here path chooser for job posters, workers, and returning job posters.
- Copy First User Links action for sharing post, worker, status, and home routes.
- First-user signup readiness panel explains that controlled beta signups are okay now, while wider public launch still needs hosting/backend/trust infrastructure.
- Copy Signup Checklist gives Andrew a clean script for inviting the first controlled group without taking payments in the MVP.
- Admin Safety Center now has a Launch Gate summary that clearly marks controlled beta signups as ready and broad public launch as on hold until infrastructure is connected.
- Copy Launch Gate gives Andrew a concise note for explaining safe first-user use versus public launch blockers.
- Confirmation screen now shows a First-user Handoff box and Copy Handoff action after a job, worker signup, referral, or bid is saved.
- Job detail now has a Job-to-Bid Flow tracker showing posted, bids received, bid chosen, and message/schedule status for first-user demos.
- Admin Safety Center now includes Public Deploy Preflight with checks for static host security config, lead capture backend, admin protection, backups, terms, and payments-off status.
- Added `netlify.toml`, `vercel.json`, and `robots.txt` so a static public beta deploy has conservative security headers prepared.
- v47 adds an Early Access Terms & Privacy screen linked from job posting, worker signup, and the homepage footer.
- v47 adds an operator route guard and fresh-load admin session expiry before admin, capture, or reports screens.
- v48 adds Admin Lead Delivery Status showing whether the next signup stays local or attempts webhook delivery, plus last delivery state and copyable status summary.
- v49 adds a Copy Security Review action in Admin Public Deploy Preflight plus `SECURITY_REVIEW_CHECKLIST.md`.
- v50 adds an Admin public beta readiness score plus a remaining blocker list so the route to 99% is visible.
- v51 adds Backend Handoff in Admin, plus `SUPABASE_SCHEMA.sql` and `WEBHOOK_PAYLOADS.md` for backend/Zapier/Supabase connection.
- v52 adds Admin Auth Handoff in Admin plus `ADMIN_AUTH_PLAN.md` for production admin protection.
- v53 adds `security-check.mjs` and a Copy Check Command action in Admin Public Deploy Preflight.
- v54 adds `PUBLIC_BETA_DEPLOY_RUNBOOK.md` and a Copy Runbook action in Admin Public Deploy Preflight.
- v55 adds release candidate packet files: `release-manifest.json`, `RELEASE_CANDIDATE.md`, `release-check.mjs`, plus Admin Copy RC Packet.
- v56 adds `package.json` check scripts and `.github/workflows/forge-checks.yml` for CI-style release verification.
- v57 adds Admin Final Public Gate cards and `FINAL_PUBLIC_GATE.md` for the 99% stop/go decision before broad launch.
- v58 adds Perspective Demo live cue cards with role-specific opener, proof, ask, and copy action.
- v59 adds Profile Status Brief cards with a copyable role-specific status handoff.
- v60 adds a copyable Job Flow Brief on Job Detail for current state, best next action, and message proof.
- v61 adds Forge Autos for buying and selling local cars with listings, sell form, and seller contact handoff.
- v62 adds auto dealer partners: JoCo Auto Sales, Chevelles Auto Sales, and Shasta Lake Auto Sales, with copyable dealer handoffs.
- v63 adds auto dealer setup checklist cards plus `AUTO_DEALER_INTEGRATION.md` for approved contact, inventory, terms, and compliance setup.
- v64 adds Auto buyer inquiry form and queue for routing vehicle interest to dealer partners.
- v65 folds Autos into the Perspective Demo with an Auto marketplace proof path, Autos cue card, shareable Autos link, demo-pack link, and readiness check.
- v66 adds an Admin Soft Launch Tomorrow panel and Autos soft-launch lead route for controlled first-user outreach.
- v67 adds a Soft Launch Invite Kit with copyable homeowner, worker, Autos, and referral outreach messages.
- v68 adds a Launch Day Run Sheet with copyable before-sharing, first-5-asks, midday, evening, and stop-rule steps.
- v69 adds Training & Careers for trade school, union/apprenticeship, and blue-collar AI job interest, including a safe application plan, career lead form, copyable career lead queue, Admin follow-up integration, and mobile layout verification.
- Confirmation next-step handoff for jobs, workers, referrals, and bids.
- Job status lookup privacy guidance and no-match recovery actions.
- Demo accounts for Mike Jones, John Smith, and Forge Admin.
- Perspective Demo with best demo paths, shareable role links, direct readiness links, demo pack, and close ask.
- First 200 launch tracker on Home and Admin.
- Copy Launch Invite with current progress, the three asks, and direct start links.
- Public “What happens next” onboarding panel for job posters, workers, and referrals.
- Early access and follow-up consent notes on job, worker, and quick capture forms.
- Post-a-job wizard, confirmation screen, job listing, job detail, bids, bid choice, Job Flow Brief, selected-bid handoff, and job-to-message flow.
- Worker signup, worker dashboard, worker bid form, and worker readiness profile.
- Admin dashboard with first-200 pipeline, Safety Center, Launch Command view, Outreach Recap, Next 10 Batch, Session History, Zapier/webhook setup, backup/export/import, follow-up queue, lead pipelines, bid activity, outreach templates, reports, and activity log.
- Follow-up queue cards now preview the recommended next message before copy/text/email.
- Follow-up queue cards are ranked by priority score and explain why each person is next.
- Today’s Follow-Up strip surfaces the top 3 contacts from the ranked queue.
- Follow-up progress snapshot shows needs-touch, contacted, moving, and first-200 totals.
- Move Forward actions advance jobs to Matching, workers to Ready, and referrals to Converted.
- Messages screen with role-aware threads, active conversation context, last touch, next step, copy draft, and sent-message log.
- Profile Status with readiness meters, Status Brief cards, copyable brief, and next actions for each role.
- Mobile tab bar, phone safe-area spacing, compact first-screen benefits, and responsive layout polish.
- Local persistence through `localStorage`.

## Last verified

These passed after v119:

```bash
node --check app.js
node smoke-test.mjs
node security-check.mjs
node release-check.mjs
npm run check
curl -I http://127.0.0.1:4174/
```

Automated verification after v119 also covers:

- Perspective Demo renders the One-click proof switchboard for Customer, Worker, Operator, and Auto proof paths.
- The switchboard is covered by `smoke-test.mjs` for HTML, JS, and CSS selectors.
- Customer Status renders a proof summary for job posted, bids received, selected bid, and message handoff.
- The customer proof summary is covered by `smoke-test.mjs` for HTML, JS, and CSS selectors.
- v92 adds direct Customer Status proof actions: choose suggested bid, copy status proof, and open the message thread from the proof summary.
- v93 adds a Message proof receipt with copyable closeout text and direct links back to Customer Status and Job Detail.
- v94 adds a Perspective Demo readiness receipt for controlled demos, public launch boundary, first-user count, backup state, and Public View state.
- v95 adds mobile demo shortcuts for Customer Status and Messages so the phone proof path matches the Status -> Message handoff flow.
- v96 adds the four-step Phone Demo Order: John Status, John Messages, Mike Worker proof, then Launch Boundary.
- v97 adds the First 200 launch queue for target count, demo-ready leads, follow-up-needed leads, and manual safety review.
- v98 adds the confirmation next-touch receipt for owner, queue, copyable follow-up, manual review, and backup closeout.
- v99 adds the Admin follow-up command strip for queue, sprint, closeout, and backup actions.
- v100 adds the Profile command strip for role, readiness, proof, boundary, and copyable profile command handoff.
- v101 adds the Job Detail closeout receipt for job, bid, message, and final next action with copyable closeout text.
- v102 adds the Phone Demo closeout strip for Copy Ask, Capture, and Launch Boundary.
- v103 adds the Launch Status final first-user checklist for proof, capture, follow-up, backup, and safe handoff mode.
- v104 adds the Launch Status first-user send board for homeowner, worker, auto, career, and business/project links with guardrails.
- v105 adds the Quick Capture triage board for consent, lane selection, latest lead copy, and backup closeout.
- v106 adds the Job Detail proof ticket for posted job, bids, selected choice, and message handoff proof.
- v107 adds the Product Paths Supplier Match Engine/fencing regression coverage and a Messages reply kit for copying the next schedule/status reply from the active thread.
- v108 adds a Launch Status demo run order with a copyable six-step first-user walkthrough: Perspective Demo, John Status, Job Detail, Messages reply kit, Mike Worker, and Capture.
- v109 adds Profile visibility cards so John, Mike, Admin, and visitor views explain what the person sees, what Forge sees, and what unlocks next.
- v110 adds a Launch Status First-user Handoff receipt with proof, next touch, boundary, backup cards, and a copyable safe follow-up note for controlled demos.
- v111 adds a Messages proof bridge that ties Job Detail, selected bid, reply, and Customer Status into one copyable demo path.
- v112 adds a Perspective Demo Phone Fast Pass with four one-tap proof steps and a copyable one-minute phone demo script.
- v113 adds a Profile Status perspective switcher for John, Mike, Admin, and Public views with a copyable profile perspective lens.
- v114 adds a Launch Status Show Plan for safe mode, proof, capture, and stop rule with a copyable demo checklist.
- v115 adds a Job Detail handoff rail so status, bid choice, message, and closeout are visible before deeper proof panels.
- v116 adds Status to Message Bridge cards on Customer Status and a Message Thread Bridge on Messages so job, bid, message, and status stay connected across the demo flow.
- v117 adds a Worker Opportunity Bridge on Mike's dashboard so profile, jobs, bid, message, and next action are visible from the worker perspective.
- v118 adds a Perspective Switch Rail at the top of Perspective Demo so John, Mike, Admin, and Public views are one tap away with a copyable switch script.
- v119 adds a Launch Status Public Launch Blocker Receipt so controlled demos, lead delivery, admin auth, backup, legal review, and security review gates are visible and copyable from one panel.
- The in-app browser did not attach during the previous v90 switchboard heartbeat pass, so no browser screenshot was recorded for that specific switchboard change.

The preceding browser pass confirmed:

- Home loads at `?v=89#home` with `styles.css?v=89` and `app.js?v=89`.
- The redesigned homepage marketplace renders 8 premium Medford launch service cards: Roofing, HVAC, Electrical, Plumbing, Concrete & Asphalt, Remodeling, Excavation, and Tree Service.
- The homepage search renders with 80 service suggestions and routes matched service intent into the existing post-job flow.
- Browse All Services renders 15 lower-priority service chips behind the premium category grid.
- Desktop verification at 1280px confirmed no horizontal overflow and no console errors.
- Mobile verification at 390px confirmed the premium cards stack cleanly, the search becomes one column, and no horizontal overflow appears.
- Admin loads at `?v=89&demo=admin#admin`.
- Perspective Demo loads at `?v=89#perspective`.
- Training & Careers loads at `?v=89#opportunities`.
- Forge Auto & Transport loads at `/auto?v=89`.
- Route-loader aliases are available for `/request-help`, `/post-job`, `/worker-signup`, and `/business`.
- Copy/action templates remain covered by `npm run check`.
- Home shows a Start Here path chooser with Post Job, Join Worker List, Training & Careers, and Check Status routes.
- Copy First User Links copies the post, worker, careers, status, and home routes plus early-access note.
- Confirmation screen explains what Forge does next after job, worker, referral, and bid submissions.
- Status lookup explains that it only checks saved MVP leads and gives Post Job / Copy First User Links actions when no match is found.
- Admin Safety Center shows backup, consent, webhook, and public-demo checks.
- Launch Command shows job poster, worker, career lead, and referral outreach lanes with need-touch/contacted/moving counts.
- Outreach Recap summarizes today's recorded contact, movement, captured-lead, and proof actions from the activity log.
- Next 10 Batch shows a focused outreach sprint list with contact/copy/contacted/move-forward controls, Copy Batch, and Complete Sprint logging.
- Session History shows recent completed outreach sprints parsed from the activity log, with Copy History and Copy Note.
- Job Detail shows a selected-bid handoff panel with price, timeline, next message, and Copy Handoff.
- Export Backup JSON records backup freshness for reset/demo safety.
- Post job, worker signup, and quick capture screens show clear early access/follow-up consent language.
- Phone layout keeps the home benefits compact and the bottom tab bar clear of safe-area controls.
- Follow-up queue shows 6 cards and 6 next-message previews in the current local data.
- Today’s Follow-Up shows 3 top contacts in the current local data.
- Follow-up Progress shows 4 summary cards in Admin.
- Copy Queue includes message text.

## Suggested next work

1. Cloud backup:
   - Upload this workspace folder to a cloud drive.
   - Keep zip snapshots in `saved-checkpoints`.
   - Consider moving Forge into a private GitHub repository for version history.

2. Strengthen the first-200 admin workflow:
   - Consider a simple contact history per lead after a real backend is connected.
   - Add a simple "batch start" marker if outreach sessions need start/end timing later.

3. Prepare for real first users:
   - Consider adding a backend-backed public intake link before real production launch.
   - Review the early access language with a real privacy/terms policy before production.
   - Add a stronger onboarding confirmation once a real backend is connected.

4. Data and launch safety:
   - Consider connecting Zapier once the user has the webhook ready.
   - Eventually move from localStorage to Supabase or another backend before real production use.

5. Visual polish:
   - Do a full mobile screenshot pass.
   - Tighten any long text on small screens.
   - Keep the wireframe colors: white, Forge orange, strong blue.

## New chat prompt

Use this in a new chat:

“This chat is for Forge. Please open `/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge/FORGE_START_TOMORROW.md` and `/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge/FORGE_NEXT_CHAT_HANDOFF.md`, then continue from the v119 Forge MVP. Keep building toward giving it to the first 200 users. Preserve existing work, run `npm run check` after code changes, and keep the wireframe style: white, orange, and strong blue.”
