# Oregon Operator Pipeline Architecture

## Stages

1. Imported from Monday
2. Deduped
3. Category mapped
4. Scored
5. Top 50 selected
6. Landing page assigned
7. Consent review
8. Manual call/text approval
9. Link sent
10. Page viewed
11. Request submitted
12. Doc packet assigned
13. DocuSign sent
14. Signed
15. Admin review
16. Stitch onboarding / Forge job / North Star consult
17. Active customer
18. Nurture / referral / impact update

## System Boundaries

- Monday remains source CRM until writeback is approved.
- Raw exports stay private and gitignored.
- Stitch and Forge landing pages capture only public-safe attribution params.
- Klaviyo is planned only; no real API connection is active.
- No production deployment was performed for this pipeline.
