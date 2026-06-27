# Role Link Tracking Plan

Use public-safe lead codes only.

Example:

```text
https://stitchmarketplace.com/go/farm?lead_code=lead_abcd1234&utm_source=monday&utm_campaign=oregon_operator_wave_1&segment=Farm%20%2F%20Producer&license_type=Producer
```

## Implementation

- `scripts/monday/score-oregon-operators.mjs` creates stable public-safe lead codes from an existing code or a Monday item seed.
- The private assignment export includes Stitch, Forge, and North Star URLs so outreach can choose the right role-specific path without putting PII in the link.
- `lead-attribution.js` reads only approved query params.
- It stores approved attribution in localStorage.
- It decorates same-origin links so the params carry to internal CTAs.
- It adds hidden fields to any form already present.
- It does not send data to a third party.
- It does not identify a lead by phone, email, name, license number, or address.

## Missing Backend

The static funnel pages preserve attribution in-browser. A production backend endpoint for durable CRM event capture is still missing and must be added before automated analytics or Monday writeback.
