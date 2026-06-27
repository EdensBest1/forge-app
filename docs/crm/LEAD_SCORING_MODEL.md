# Lead Scoring Model

This score selects controlled Wave 1 outreach candidates. It does not authorize outreach by itself.

## Positive Score

- Active/current license: +25
- Phone present: +15
- Email present: +10
- License type confidently mapped: +15
- Southern Oregon/Jackson/Josephine priority: +10
- No website or weak marketing: +10 for North Star
- Likely farm/facility labor need: +10 for Forge
- Likely inventory/deal-flow need: +10 for Stitch
- Multiple-service fit: +15

## Holds And Reductions

- Do-not-contact: disqualify
- Invalid phone/email: flag or reduce
- Duplicate unresolved: hold for manual review
- Recently contacted: reduce or hold
- Unknown category: manual review before Wave 1

## Ranking

Score within each normalized category, then select the top 50 eligible records per category. Preserve all excluded records for later review; do not delete them.
