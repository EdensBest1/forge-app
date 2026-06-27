# Monday CRM Pipeline Check Results

Check date: 2026-06-27

## Monday Access

- `MONDAY_API_TOKEN`: missing
- `node scripts/monday/analyze-board.mjs`: expected blocked result, exit 2, missing credential message shown
- `node scripts/monday/export-private-leads.mjs`: expected blocked result, exit 2, missing credential message shown
- `node scripts/monday/score-oregon-operators.mjs`: expected blocked result, exit 2, missing private export message shown
- Monday board read: no
- Monday writeback: no

## Stitch

| Command | Result |
| --- | --- |
| `node --check scripts/monday/*.mjs` | passed |
| Monday helper behavior check | passed |
| `node --check lead-attribution.js` | passed |
| `npm run check` | passed, 294 syntax targets and 184 package checks |
| `npm run lint` | not available |
| `npm run typecheck` | not available |
| `npm run test` | not available |
| `npm run build` | not available |
| `npm audit` | passed, 0 vulnerabilities |

## Forge

| Command | Result |
| --- | --- |
| `node --check scripts/monday/*.mjs` | passed |
| Monday helper behavior check | passed |
| `node --check lead-attribution.js` | passed |
| `npm run check` | passed |
| `npm run lint` | not available |
| `npm run typecheck` | not available |
| `npm run test` | not available |
| `npm run build` | not available |
| `npm audit` | passed, 0 vulnerabilities |

## Notes

- No production deploy was performed.
- No SMS or email was sent.
- No Monday writes were performed.
- Contact counts and top-50 private exports remain blocked until `MONDAY_API_TOKEN` is available.
