# Cloud Storage Plan

This plan explains where uploaded files, chat exports, business documents, contracts, images, logos, SOPs, legal documents, and future project files should eventually live in the cloud.

## Current Rule

Do not upload anything to cloud storage yet unless credentials and the approved provider are configured. Do not hard-code cloud credentials. Do not commit `.env` files. Create `.env.example` only when implementation work needs documented environment variables.

## Recommended Future Platform Structure

Primary source code:

- GitHub repository

Production hosting:

- Vercel or Netlify for frontend/app hosting

Database:

- Supabase Postgres or another approved managed Postgres database

File/object storage:

- Supabase Storage, AWS S3, Cloudflare R2, or Google Cloud Storage

## Recommended Bucket/Folder Structure

Once storage is ready, use this folder structure:

- `/master-context`
- `/chat-exports`
- `/business-plans`
- `/legal`
- `/sops`
- `/contracts`
- `/partner-documents`
- `/forge`
- `/stitch`
- `/s-and-a-auto`
- `/northstar-creative`
- `/seneca-dev-co`
- `/photography-videography`
- `/images`
- `/logos`
- `/uploads`
- `/customer-leads`
- `/provider-applications`
- `/archive`

## Important Cloud Rules

- Do not upload anything to cloud storage yet unless credentials and the approved provider are configured.
- Do not hard-code cloud credentials.
- Do not commit `.env` files.
- Create `.env.example` only.
- Prepare the app so cloud storage can be connected later.
- When cloud storage is ready, uploaded files should go to the proper business folder, not random storage paths.
