# Monday Board Schema Report

- Board ID: 6658307629
- Workspace ID: 5099718
- Board name: unavailable until `MONDAY_API_TOKEN` is set
- Board read: no
- Read-only mode confirmed: yes, planned
- Raw item values written to public repo: no

## Access Status

`MONDAY_API_TOKEN` was missing, so no Monday API request was made and no schema was read.

## Expected Logical Fields To Map

- company_name
- owner_name
- license_holder_name
- license_number
- license_type
- license_status
- phone
- email
- address
- city
- county
- state
- website
- category
- notes
- source
- last_contacted
- consent_status_sms
- consent_status_email
- do_not_contact
- outreach_stage
- assigned_landing_page
- top_50_wave
- stitch_fit
- forge_fit
- northstar_fit

Run `node scripts/monday/analyze-board.mjs` after setting the token to replace this placeholder with real board metadata and column mappings.
