# Lead Attribution Implementation Report

## Query Params Captured

- `lead_code`
- `utm_source`
- `utm_campaign`
- `segment`
- `license_type`

## Pages

- Stitch `/go/farm`, `/go/processor`, `/go/lab`, `/go/dispensary`, `/go/wholesaler`, `/go/logistics`, `/go/broker`
- Forge `/go/post-job`, `/go/worker`, `/go/contractor`, `/go/business`, `/go/manufacturing`, `/go/auto`, `/go/creative`

## Behavior

- Approved params are stored in localStorage.
- Approved params are appended to same-origin links.
- Approved params are added as hidden fields to existing forms.
- No phone, email, owner name, address, or license number is allowed.

## Backend Status

No durable backend event endpoint is wired for these static pages yet. Attribution is preserved in-browser only.

## Missing Endpoint

Create a privacy-reviewed endpoint before real event sync:

```text
POST /api/lead-attribution-events
```

Allowed payload should include public lead code, route, event type, timestamp, and safe UTM fields only.
