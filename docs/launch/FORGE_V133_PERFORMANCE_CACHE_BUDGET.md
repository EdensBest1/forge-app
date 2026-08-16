# Forge v133 Performance and Cache Budget

Date: 2026-08-15

## Current asset facts

| Asset | v133 bytes | Policy |
| --- | ---: | --- |
| index.html | 338,946 | Large legacy single-shell architecture; no unbounded growth |
| styles.css | 302,670 | One consolidated token layer; avoid duplicate override systems |
| app.js | 1,127,780 | Dependency-free legacy shell; new work should be route-aware or extracted |
| service-worker.js | 4,204 | Small, auditable cache policy |
| route-loader.js | 4,120 | Small release-validating loader |
| csv-utils.js | 560 | Shared export safety |
| primary hero AVIF | 94,023 | Under 160 KB image budget |
| auto hero AVIF | 116,958 | Under 160 KB image budget |
| homebuilding hero AVIF | 76,537 | Under 160 KB image budget |

The retained PNG fallbacks are approximately 2.0–2.2 MB each. Modern browsers receive AVIF through picture/source selection, reducing each primary transfer by more than 94%. The fallbacks remain for compatibility and are not part of the preferred transfer path.

## Runtime budget

- Exactly one initial full render.
- Static select options hydrate once per page load.
- No duplicate renderer calls in the main render path.
- No third-party runtime scripts.
- No added package dependencies.
- Hero media has intrinsic dimensions; below-fold media is lazy.
- Public navigation must not perform a network request for private operator data.
- Future significant features should move toward lane-specific modules instead of extending the central shell indefinitely.

## Cache policy

- Navigations are network-first.
- Only same-origin, current-version CSS and JavaScript enter the runtime asset cache.
- API, admin, capture, reports, monetization-admin, cross-origin, private, no-store, and non-success responses bypass storage.
- The offline page is the only navigation fallback.
- Activation removes only old Forge-owned caches and preserves unrelated origin caches.
- A waiting worker activates only after the user chooses Refresh, preventing an involuntary mid-form reload.
- The route loader requests the shell with no-store and rejects the wrong content type or a shell without the v133 marker.

## Executable guardrails

- scripts/check-cache-release-integrity.mjs simulates install, activation, deletion scope, navigation fallback, private/API bypass, old-version bypass, error non-caching, and explicit activation.
- scripts/check-public-quality.mjs enforces image size/dimensions, reduced motion, the white token contract, and the two-action hero.
- scripts/check-release-fences.mjs enforces zero dependencies, no opaque no-cors delivery, no public storage activation, protected operator routes, and inactive Flex.

## Future performance work

The main shell is intentionally preserved for compatibility, but its size is technical debt. A later approved change can extract product-lane modules, split CSS by public/operator ownership, and introduce route-level loading budgets. Such a migration requires parity tests for every registry route and must not alter current local data keys or delivery contracts.
