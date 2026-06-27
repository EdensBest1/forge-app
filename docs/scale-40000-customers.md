# Scale Plan: 40,000 Customers / Profiles / Leads

The safe demo-scale path is script-driven and avoids committing large generated data files.

## Demo Generator

Run:

```bash
npm run demo:monetization:40000
```

The script generates 40,000 safe fake records across Forge, Stitch, and Admitly in memory and prints a summary. To intentionally write a file:

```bash
node scripts/generate-monetization-demo-records.mjs --count=40000 --out=/tmp/monetization-demo-records.json
```

Do not commit the generated 40,000-record output unless there is a specific test fixture need.

## Pagination

Use cursor pagination through `paginateRecords(records, { cursor, limit })`. Admin and discovery views should default to 50 records and cap at 250 records per page.

## Filters

Supported filter dimensions:

- app
- category
- city
- state
- tier/plan
- verification status
- status

## Required Indexes

When moved to Supabase/Postgres, add indexes for:

- app
- category
- city
- state
- tier / plan_id
- verification_status
- status
- created_at
- updated_at
- ranking_score
- active_boost_until

Composite indexes likely needed:

- `(app, category, state, ranking_score desc)`
- `(app, city, category, ranking_score desc)`
- `(app, verification_status, status)`
- `(app, active_boost_until)`

## UI Strategy

- Do not render 40,000 records at once.
- Public discovery pages lazy-load pages.
- Admin lists default to paginated tables.
- Search/filter state should be serializable in URL params.
- Ranking should run server-side or on paginated result candidates once the backend is live.

## Risks

- Browser localStorage is not a production data layer.
- Large local arrays can freeze UI if rendered without pagination.
- Paid ranking must be recalculated when verification, complaints, safety, license, COA, or boost status changes.

