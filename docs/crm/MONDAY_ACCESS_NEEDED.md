# Monday Access Needed

Monday board analysis was not run because `MONDAY_API_TOKEN` is not set in this local environment.

Set the token only in your local shell when you are ready for read-only CRM analysis:

```sh
export MONDAY_API_TOKEN="PASTE_TOKEN_HERE"
export MONDAY_BOARD_ID="6658307629"
export MONDAY_WORKSPACE_ID="5099718"
```

Rules:
- Do not commit the token.
- Do not paste the token into reports, chats, screenshots, or `.env` files.
- First run is read-only only.
- Raw names, phone numbers, emails, addresses, owner names, and license numbers must stay under `private_crm_exports/monday_6658307629/`.

Next commands after the token is set:

```sh
node scripts/monday/analyze-board.mjs
node scripts/monday/export-private-leads.mjs
node scripts/monday/score-oregon-operators.mjs
```

The Monday API path uses board metadata, groups, columns, `items_page`, and `next_items_page` cursor pagination.

Reference: https://developer.monday.com/api-reference/docs/querying-board-items
