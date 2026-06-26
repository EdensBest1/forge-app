# Forge Admin Auth Plan

The current Forge MVP has a client-side demo guard that prevents casual direct access to operator screens during local previews. That is not production authentication.

Before broad public traffic, protect admin-only capabilities outside the browser.

## Admin-Only Capabilities

- Admin dashboard and lead tables
- Capture Lead
- Reports
- CSV exports
- JSON backup export/import
- Webhook URL setup and test lead
- Public Deploy Preflight
- Security Review and backend handoff panels

## Recommended Options

1. Cloudflare Access in front of the deployed admin URL.
2. Netlify password protection or Netlify Identity for operator pages.
3. Vercel middleware with a server-side session check.
4. Supabase Auth plus row-level security and an `admin` role claim.
5. A small backend admin app separate from the public intake pages.

## Minimum Public Beta Rule

The public app may expose Home, Post Job, Worker Signup, Jobs, Status, Legal, and selected demo screens.

The following routes must require authenticated operator access before broad sharing:

- `#admin`
- `#capture`
- `#reports`

## Verification

- Open the deployed public link in a fresh private browser session.
- Visit `/#admin`, `/#capture`, and `/#reports` directly.
- Confirm each route requires authentication and does not render lead data.
- Confirm authenticated operator access still works through the intended protected path.
- Confirm exports, imports, backup, webhook setup, and delivery status are unavailable to public visitors.
