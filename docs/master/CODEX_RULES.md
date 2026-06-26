# Codex Rules

These rules are permanent safety instructions for future Codex work in this repository.

## Required Safety Rules

- Always checkpoint first.
- Additive only unless explicitly approved.
- Never delete existing work.
- Never overwrite business logic.
- Never remove existing sections.
- Never change styling globally unless asked.
- Never expose private contact information.
- Never add secrets to the repo.
- Every task must end with files changed, tests run, and risks.

## Required Workflow

Before making changes, Codex must inspect the existing project and understand the current structure. If an existing feature, route, form, table, deployment, environment variable, or business workflow might be affected, stop and explain before changing it.

For each task:

1. Read this file.
2. Create a git checkpoint/commit when the project is a git repo, or a local checkpoint archive when it is not.
3. Inspect the relevant files before editing.
4. Add only the requested feature.
5. Reuse existing components, tables, routes, styling, and helper logic where possible.
6. Avoid destructive migrations or irreversible data changes.
7. Run lint, typecheck, tests, or build commands if available.
8. Update `docs/master/CHANGELOG.md`.
9. Update `docs/master/FEATURE_REGISTRY.md` if a feature was added.
10. Report files changed, tests run, and risks.

## Privacy And Secrets

Do not commit `.env` files, cloud credentials, API keys, database passwords, private phone numbers, private emails, private addresses, or sensitive personal details. Use `.env.example` only for documenting required variable names without real values.
