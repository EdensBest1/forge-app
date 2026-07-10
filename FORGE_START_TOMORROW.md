# Forge Start Tomorrow

Saved: June 26, 2026

## Start Here

Workspace:

`/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge`

Current build: `v121`

Local app:

- Home: `http://127.0.0.1:4174/?v=121#home`
- Perspective Demo: `http://127.0.0.1:4174/?v=121#perspective`
- Training & Careers: `http://127.0.0.1:4174/?v=121#opportunities`
- Forge Auto & Transport: `http://127.0.0.1:4174/auto?v=121`
- Admin Auto Ops / Operations Vault: `http://127.0.0.1:4174/?v=121&demo=admin#admin`

If the server is not running:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4174/?v=121#perspective
```

## What Is Saved

- Main app files: `index.html`, `styles.css`, `app.js`, `service-worker.js`
- Release checks: `smoke-test.mjs`, `security-check.mjs`, `release-check.mjs`
- Public beta docs: `RELEASE_CANDIDATE.md`, `FINAL_PUBLIC_GATE.md`, `PUBLIC_BETA_DEPLOY_RUNBOOK.md`
- Backend/security docs: `SUPABASE_SCHEMA.sql`, `WEBHOOK_PAYLOADS.md`, `ADMIN_AUTH_PLAN.md`, `SECURITY_REVIEW_CHECKLIST.md`
- Autos docs: `AUTO_DEALER_INTEGRATION.md`
- Handoff docs: `FORGE_CHECKPOINT.md`, `FORGE_NEXT_CHAT_HANDOFF.md`, this file
- Local zip snapshot: `saved-checkpoints/forge-v71-2026-06-26-auto-ops-vault-snapshot.zip`

## Current State

Forge v121 is a local static MVP. It is good for controlled demos and early signup conversations. It is not ready for broad public launch until the remaining gates are finished:

- Connect backend or Zapier lead delivery
- Enable production-grade admin authentication
- Export a fresh JSON backup before public beta
- Complete legal review
- Run final security review

## Tomorrow's Best Next Work

1. Open Launch Status and copy the Demo Run Order before showing Forge to someone.
2. Open Launch Status and copy the Show Plan for the safest short demo sequence.
3. Open Perspective Demo and use the Perspective Switch Rail to jump directly into John, Mike, Admin, or Public view.
4. Open Perspective Demo and copy the Phone Demo Fast Pass when showing Forge from a phone.
5. Open Profile Status and use the Perspective Switch to jump between John, Mike, Admin, and Public views.
6. Open Admin and use the Soft Launch Tomorrow panel.
7. Use Quick Capture for consented live conversations, then copy the triage script or latest lead handoff.
8. Open Job Detail and copy the proof ticket to show the job-to-bid-to-message path.
9. Open Messages and copy the reply kit so the selected-bid handoff has a clear next text/email.
10. Open Messages and copy the Message Proof Bridge so Detail, selected bid, reply, and Customer Status stay connected.
11. Open Customer Status and copy the Status to Message Bridge so the customer can see job, bid, message, and next action from one place.
12. Open Mike's Worker Dashboard and copy the Worker Opportunity Bridge so workers see profile, jobs, bid, message, and next action.
13. Open Profile Status and copy Profile Visibility so John, Mike, or Admin can understand what they see and what unlocks next.
14. Open Launch Status and copy the First-user Handoff receipt after every demo so the close, boundary, follow-up, and backup step are clear.
15. Use the Invite Kit to copy the right message for homeowners, workers, career applicants, auto leads, or referrals.
16. Open Training & Careers for people interested in trade schools, unions, apprenticeships, or blue-collar AI field jobs.
17. Open Forge Auto & Transport for Sell My Car, listing, consignment, transport, executive transport, auction sourcing, and Forge Platinum Auto Concierge demos.
18. Open Admin and review Auto Ops plus the Forge Operations Vault before any real partner routing.
19. Re-run:

```bash
npm run check
curl -I http://127.0.0.1:4174/
```

## Cloud Upload Target

Upload both:

- The full workspace folder
- `saved-checkpoints/forge-v71-2026-06-26-auto-ops-vault-snapshot.zip`

## New Chat Prompt

Use this tomorrow:

```text
This chat is for Forge. Please open /Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge/FORGE_START_TOMORROW.md and FORGE_NEXT_CHAT_HANDOFF.md, then continue from the v121 Forge MVP. Keep building toward tomorrow's soft launch, preserve existing work, run npm run check after code changes, and keep the wireframe style: white, Forge orange, and strong blue.
```
