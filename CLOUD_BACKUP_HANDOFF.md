# Forge Cloud Backup Handoff

This is the next-step plan for turning the local Forge workspace into a safer cloud-backed work setup before soft launch.

## Current Saved State

- Local git history is the source of truth for code changes.
- Admin includes `Export Backup JSON` and `Import Backup` for browser-local MVP data.
- Public-beta checks are available through `npm run check`.
- No cloud drive, remote git repository, or production database is connected from this local workspace yet.

## Recommended Cloud Layers

1. **Code backup:** push this repo to a private GitHub repository or another private git remote.
2. **Workspace archive:** save a dated zip of the project folder to iCloud Drive, Google Drive, Dropbox, or another cloud drive.
3. **Lead/data backup:** export `forge-mvp-backup.json` from Admin before and after every real outreach sprint.
4. **Production data:** move real user leads into Supabase, Zapier, or a server-owned API before broad public traffic.
5. **Deployment backup:** deploy only after lead delivery, admin auth, backups, legal copy, and security review pass.

## Soft Launch Backup Routine

Before outreach:

- Run `npm run check`.
- Open Admin and export `forge-mvp-backup.json`.
- Confirm Public View is enabled before showing the app to anyone outside the operator/admin flow.

After outreach:

- Export a fresh `forge-mvp-backup.json`.
- Save the export to the chosen cloud drive folder.
- Commit any code changes with a clear message.
- Do not store IDs, SSNs, payment cards, passwords, bank details, official transcripts, title documents, or other sensitive records in the browser MVP.

## Suggested Folder Names

- `Forge/Code Backups`
- `Forge/MVP Data Backups`
- `Forge/Launch Docs`
- `Forge/Security Reviews`

## Stop Conditions

Do not broaden the launch if any of these are missing:

- Production admin authentication
- Verified lead delivery
- Current backup
- Final legal review
- Final security review
- Clear public beta language

