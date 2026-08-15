# Forge lead durability and local recovery

## Honest current state

Forge always preserves a browser-local copy of a submitted job or worker signup. The server endpoint returns `503 DURABLE_LEAD_STORE_NOT_CONFIGURED` when neither an approved server-side webhook nor a complete server-side database configuration exists. The UI then says that the lead was saved only in that browser. Production durability must not be represented as active until a provider is configured and a synthetic receipt is verified.

The automated check uses only synthetic records, an isolated temporary directory, a mode-`0600` newline-delimited JSON adapter, and a localhost webhook receiver. It does not use Supabase, customer data, credentials, or external infrastructure.

## Local export and recovery

From localhost operator mode, use **Export Backup** to download a `forge.local-backup.v1` JSON envelope. It contains an export timestamp, app version, record counts, and an integrity checksum. Import validates the size, schema, required collections, object keys, counts, and checksum before showing a replacement summary. The existing browser state changes only after the operator confirms. Legacy raw-state backups remain importable with an explicit legacy warning.

Keep exported files in an approved encrypted location. Never email them casually or commit them to Git because they may contain contact information. Run an export before any reset or import.

## Future one-step provider activation

After an approved no-cost or funded provider endpoint already exists and its privacy/security review is complete, the single activation input is the server-only `FORGE_LEAD_WEBHOOK_URL` environment variable. Add it to the Forge Vercel project for Preview first, redeploy, then run `npm run check:durable-leads` plus one synthetic preview submission. Promote only the already-verified artifact after the receiver shows one record and an idempotent retry shows no duplicate.

Alternatively, a future approved database can be activated by setting both server-only values `FORGE_SUPABASE_URL` and `FORGE_SUPABASE_SERVICE_ROLE_KEY`; partial configuration fails closed. The service-role key must never be exposed to the browser, copied into a public environment variable, or committed. No provider was provisioned as part of this work.

## Verification command

```sh
npm run check:durable-leads
```

This covers post-job and worker writes, consent and timestamps, idempotency, rate limiting, sensitive-field rejection, local-only honesty, bids/messages in backup recovery, export/import integrity, a mocked webhook receiver, and provider failure.
