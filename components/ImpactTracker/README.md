# ImpactTracker Component Notes

Generated: 2026-06-27

This static app currently renders the impact tracker as a public trust strip plus `/impact/` page. Future framework-based components should read from `data/impact-ledger.example.json` shape and never invent numbers.

Public fallback copy:

"Impact tracker coming soon - verified updates will be published after launch."

Required source fields:

- children_fed
- meals_funded
- orphanage_projects_supported
- church_projects_supported
- india_projects
- worldwide_projects
- last_updated
- verified_by
- source_archive_url
