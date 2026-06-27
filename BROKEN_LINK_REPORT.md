# Broken Link Report

Generated: 2026-06-27 01:10 PDT

## Summary

- Forge: no broken required public shell paths found in local HEAD checks for `/`, `/privacy/`, `/terms/`, and `/safety/`. Existing service alias shells are covered by Forge smoke tests.
- Stitch: no broken required public shell paths found in local HEAD checks for `/`, `/privacy/`, `/terms/`, and `/safety/`. Hash routes are covered by Stitch smoke/browser-smoke checks.
- Browser screenshot automation was attempted with Playwright and local Chrome, but Chrome aborted under the sandboxed automation launch. Screenshots are therefore marked unavailable from this environment.

## Notes

- Clean `/admin` style paths are intentionally not promoted publicly.
- Admin/internal review routes are either hidden from public nav, gated visually, noindexed, or documented as auth TODOs.
