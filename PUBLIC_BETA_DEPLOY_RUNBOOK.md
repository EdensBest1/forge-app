# Forge Public Beta Deploy Runbook

Use this when moving Forge from local MVP to a public beta intake link.

## 1. Preserve The Current MVP

- Open Admin.
- Export Backup JSON.
- Confirm `FORGE_CHECKPOINT.md` and `FORGE_NEXT_CHAT_HANDOFF.md` are current.

## 2. Connect Lead Capture

- Choose Zapier, an API route, or a Supabase Edge Function.
- Use `WEBHOOK_PAYLOADS.md` for payload mapping.
- If using Supabase, start with `SUPABASE_SCHEMA.sql`.
- Submit one test lead and confirm it appears outside the browser.

## 3. Protect Operator Access

- Use `ADMIN_AUTH_PLAN.md`.
- Protect Admin, Capture, Reports, exports, imports, backup, and webhook setup.
- Verify direct `#admin`, `#capture`, and `#reports` URLs require operator access in a fresh private browser.

## 4. Deploy Static Files

- Deploy with Netlify or Vercel.
- Use the included `netlify.toml` or `vercel.json`.
- Confirm HTTPS is active.
- Confirm security headers are present in production.

## 5. Run Local Checks

```bash
node --check app.js
node smoke-test.mjs
node security-check.mjs
```

## 6. Run Public Browser Checks

- Home opens.
- Post Job opens.
- Worker Signup opens.
- Job Status opens.
- Legal page opens.
- Admin routes do not expose operator data to public visitors.
- Public View hides operator-only controls.

## 7. Run One Real Flow

- Submit one job.
- Submit one worker signup.
- Capture one referral.
- Submit one bid.
- Choose a bid.
- Open Messages.
- Verify Lead Delivery Status and exports.

## 8. Launch Small

- Share with a small first-user batch.
- Keep payments outside Forge.
- Follow up manually.
- Export backups after outreach sprints.

## 9. Stop Conditions

Pause public sharing if:

- Leads do not appear in the backend.
- Admin routes show operator data to public visitors.
- Legal or safety language is missing.
- Security headers are absent.
- Any form begins collecting sensitive information.
