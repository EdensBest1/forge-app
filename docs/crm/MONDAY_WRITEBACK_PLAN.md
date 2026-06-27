# Monday Writeback Plan

No Monday writes are approved or performed in this phase.

## Proposed Fields

- Normalized Category
- Stitch Segment
- Forge Segment
- NorthStar Segment
- Lead Score
- Top 50 Category Rank
- Wave
- Assigned Landing Page
- Public Lead Code
- Outreach Status
- Consent SMS
- Consent Email
- Do Not Contact
- Last Contacted
- Next Action
- Notes

## Write Rules

- Write back only after Andrew approves.
- Write back only non-sensitive routing and scoring fields.
- Never overwrite original lead data.
- Never write raw generated notes into private identity fields.
- Keep original Monday values recoverable.

## Example Mutation Shape

```graphql
mutation UpdateLead($boardId: ID!, $itemId: ID!, $columnValues: JSON!) {
  change_multiple_column_values(board_id: $boardId, item_id: $itemId, column_values: $columnValues) {
    id
  }
}
```

## Rollback Plan

Before writeback, export the affected item IDs and target column values to a private timestamped file under `private_crm_exports/monday_6658307629/`. If a write is wrong, use the private backup to restore only the routing/scoring fields.
