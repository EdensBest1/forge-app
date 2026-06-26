# Deployment Plan

This plan explains how the app should go live once cloud storage, hosting, database, and credentials are ready.

## Current Rule

Do not deploy yet. Do not connect cloud storage, production databases, or production hosting until the approved provider, credentials, environment variables, and deployment target are confirmed.

## Source Code

- Primary source code should live in a GitHub repository.
- The repository should be clean before deployment.
- No secrets or `.env` files should be committed.

## Hosting

- Use Vercel or Netlify for frontend/app hosting, depending on the configured project.
- Deploy to staging first.
- Review staging before production approval.
- Deploy to production only after explicit approval.

## Database

- Use Supabase Postgres or another approved managed Postgres database.
- Confirm migrations are safe before applying them.
- Avoid destructive migrations unless explicitly approved.
- Confirm forms and admin review flows save correctly.

## File Storage

- Use the approved storage provider only: Supabase Storage, AWS S3, Cloudflare R2, or Google Cloud Storage.
- Do not hard-code credentials.
- Uploads should map to the proper business folder described in `docs/cloud-storage/CLOUD_STORAGE_PLAN.md`.

## Go-Live Flow

1. Confirm the git repo is clean.
2. Confirm environment variables are configured.
3. Confirm database migrations are safe.
4. Confirm the storage bucket exists.
5. Confirm upload paths are mapped.
6. Confirm no secrets are committed.
7. Confirm forms save correctly.
8. Confirm existing sections still work.
9. Confirm admin can review leads/provider applications.
10. Confirm production build passes.
11. Deploy to staging first.
12. Review staging.
13. Deploy to production only after approval.
