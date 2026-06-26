# Admitly / Forge Career Bridge

The career bridge lets Admitly and Forge work together without merging the brands.

## Brand Separation

- Admitly owns education planning, admissions support, scholarship/grant discovery, essays, school comparison, and application organization.
- Forge owns Medford and Southern Oregon blue-collar services, local work opportunities, workforce relationships, worker profiles, and employer/community follow-up.
- Forge Academy is the Forge-facing career surface.
- Admitly Trade Pathways is the Admitly-facing pathway surface.

## Data Model

Additive tables in `SUPABASE_SCHEMA.sql`:

- `trade_pathway_leads`
- `forge_academy_leads`
- `forge_career_profiles`
- `school_partners`
- `employer_training_partners`
- `resume_requests`

All new tables have RLS enabled. Public beta recommendation remains server-owned write routes, Zapier actions, or Supabase Edge Functions using server-side credentials.

## Lead Routing

1. Admitly lead enters `trade_pathway_leads`.
2. Forge Academy worker/student lead enters `forge_academy_leads`.
3. Resume or Career+ interest creates a `resume_requests` item.
4. Employer and school/program partners enter separate partner queues.
5. Admin confirms consent, verifies official program or employer details, then follows up outside the browser MVP.

## Boundaries

No admission, employment, union acceptance, licensure, scholarship, financial aid, or placement guarantee is allowed. Do not store IDs, SSNs, payment information, passwords, official transcripts, or official documents in the MVP.

