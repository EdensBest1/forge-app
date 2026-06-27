# Forge Auth TODO

Forge currently has a demo role/session guard for operator screens. That is not production authentication.

Before sharing with real users or storing sensitive lead data:

- Protect `#admin`, `#capture`, `#reports`, exports/imports, webhook setup, and deployment tooling with hosted auth.
- Use RBAC roles for public visitor, worker, customer, business, and admin/operator.
- Move privileged checks out of browser-only state and into middleware or backend handlers.
- Keep public pages limited to home, post job, worker signup, jobs, status, legal, privacy, terms, and selected demo views.
- Verify direct URL access to admin/operator routes from a private browser session.
- Preserve the existing `ADMIN_AUTH_PLAN.md` as the detailed implementation plan.

