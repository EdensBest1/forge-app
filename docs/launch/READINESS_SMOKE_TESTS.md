# Readiness Smoke Tests

Generated: 2026-06-27

## Required Commands

```bash
node --check app.js
npm run check
npm audit
node scripts/check-premium-ui-controlled-beta-readiness.mjs
```

## Browser / Hosted Checks

- Local static server visual pass should verify the public first viewport, primary nav, Explore menu, and key CTAs.
- Passive curl header checks should be run on https://hireonforge.com and https://www.hireonforge.com.

## Status

Final command, curl, and browser results are recorded in `docs/launch/CHECK_RESULTS_PREMIUM_UI_CONTROLLED_BETA_READINESS.md`. The completed pass is green for Andrew review, with attorney review and production deployment still gated.
