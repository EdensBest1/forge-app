# Admitly Trade Pathways

Admitly Trade Pathways is the Admitly-facing education and application lane for people planning college, trade school, apprenticeship, union, certification, CDL, healthcare certificate, construction, automotive, creative media, entrepreneurship, or blue-collar AI career pathways.

## MVP Surface

- Public route: `/trade-pathways`
- Apply route: `/trade-pathways/apply`
- Dashboard route: `/dashboard/trade-pathways`
- Admin route: `/admin/trade-pathways`
- App screen: `#trade-pathways`

The page keeps Admitly as the education brand with the line `Your Future. Admitted.` Forge is linked as the local jobs and workforce side, but the brands stay separate.

## Captured Lead Fields

- Full name, phone, email
- City and state
- Education level and optional age range
- Desired pathway and desired trade/career
- Timeline and funding need
- Work experience
- Resume text placeholder
- Essay, scholarship, and job/apprenticeship help flags
- Consent to contact
- Notes, status, priority

## Admin Flow

New leads enter the Admin Academy section as `Admitly Trade Pathways` leads. Admin can update status, add notes, copy the lead summary, and contact the applicant. Resume or job-help requests also create a local resume request queue item.

## Safety Rules

- Do not guarantee admission, employment, union acceptance, licensure, scholarship approval, financial aid, or placement.
- Do not collect IDs, Social Security numbers, payment information, passwords, official transcripts, or official documents in the browser MVP.
- Applicants must submit through official school, union, employer, apprenticeship, or program channels.
- Verify accreditation, tuition, outcomes, deadlines, licensing requirements, and financial aid details before recommending a program.

