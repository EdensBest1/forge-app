# Forge Cloud Hard Drive Plan

Saved: June 26, 2026

## Goal

Keep Forge backed up outside the laptop so tomorrow's work can be recovered easily.

## Recommended Simple Setup

Use one cloud folder as the source of truth:

```text
Forge Cloud Drive/
  forge-app/
  forge-snapshots/
  forge-docs/
```

Good options:

- iCloud Drive if you want the fastest Mac-native setup.
- Google Drive if you want easy sharing and browser access.
- Dropbox if you want simple folder sync and file history.

## What To Upload First

Upload this workspace folder:

```text
/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge
```

Also upload the latest zip snapshot from:

```text
/Users/andrewoommern/Documents/Codex/2026-06-14/this-chat-is-for-forge/saved-checkpoints
```

Current snapshot:

```text
forge-v69-2026-06-26-opportunities-snapshot.zip
```

## Minimum Daily Backup Routine

At the end of each work session:

1. Run `npm run check`.
2. Update `FORGE_START_TOMORROW.md`.
3. Create a fresh zip snapshot in `saved-checkpoints`.
4. Upload or sync the whole Forge folder to the cloud drive.

## Better Next Step

After the cloud folder is set up, the stronger engineering move is to put Forge in a private GitHub repository. Cloud drive protects files. GitHub protects history, branches, and recovery from bad edits.

Use both:

- Cloud drive for hard-drive-style backup.
- Private GitHub repo for version history.
