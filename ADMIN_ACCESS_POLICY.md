# Forge Admin Access Policy

Generated: 2026-06-27

## Status

Template only. Hosted authentication and RBAC are still required before real operators, reviewers, admins, exports, webhooks, imports, backups, finance, or sensitive data.

## Public Surface Rule

- Public visitors should see the clean homepage, services, role cards, impact page, job posting, worker signup, business path, safety language, and login.
- Public visitors should not see raw admin, export, import, reset, backup, webhook, finance, or launch-control tools.
- Admin/demo entrypoints are hidden in public mode or behind admin-role display controls.

## Required Production Controls

- Hosted auth.
- Role-based access control.
- Audit logs for admin actions.
- Least-privilege access.
- Offboarding checklist for Google, Drive, Monday.com, GitHub, Vercel, Canva, Klaviyo, DocuSign, email, app admin, finance, and CRM access.
- Dual approval for money-sensitive actions.
