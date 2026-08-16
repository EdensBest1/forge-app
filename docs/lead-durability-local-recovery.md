# Forge lead durability and local recovery

## Honest current state

Forge always preserves a browser-local copy of a submitted job or worker signup. The server endpoint returns `503 DURABLE_LEAD_STORE_NOT_CONFIGURED` when neither an approved server-side webhook nor a complete server-side database configuration exists. The UI then says that the lead was saved only in that browser. Production durability must not be represented as active until a provider is configured and a synthetic receipt is verified.

The automated check uses only synthetic records, an isolated temporary directory, a mode-`0600` newline-delimited JSON adapter, and a localhost webhook receiver. It does not use Supabase, customer data, credentials, or external infrastructure.

## Local export and recovery

From localhost operator mode, use **Export Backup** to download a `forge.local-backup.v1` JSON envelope. It contains an export timestamp, app version, core record counts, and an integrity checksum. Import validates the file before opening an accessible recovery dry run. The dry run shows:

- schema and app version;
- creation time;
- checksum status;
- current and replacement core-record totals; and
- a collection-by-collection replacement delta.

Nothing is written during file selection or the dry run. The operator must choose **Replace local device data** before the existing browser state changes. Cancel, Escape, validation failure, or a failed read leaves the current device state intact. Legacy raw-state backups remain importable, but the dry run explicitly warns that they have no checksum.

### Recovery runbook

1. Work only from localhost operator mode. Public deployments keep operator routes and controls unavailable.
2. Export the current device state before starting an import.
3. Select the candidate JSON file with **Import Backup**.
4. Confirm the schema, app version, creation time, checksum state, totals, and collection deltas in the dry run.
5. Cancel if the source is unexpected, the legacy warning appears unexpectedly, or any count looks wrong.
6. Choose **Replace local device data** only after the review is complete.
7. Confirm the Admin screen returns, the import activity entry exists, and the expected jobs, workers, bids, and messages are present.
8. Export a fresh post-recovery backup and retain both files until the restored copy has been independently reviewed.

Forge rejects malformed JSON, files larger than 5 MB, unsupported schemas, invalid timestamps or app versions, malformed checksums, checksum/count mismatches, unsafe object keys, excessive nesting, arrays over 100,000 items, and backups with more than 100,000 total core records. Error messages describe the rejected boundary without echoing file content.

Keep exported files in an approved encrypted location. Never email them casually or commit them to Git because they may contain contact information. Run an export before any reset or import.

## Delivery reliability boundaries

Configured providers receive the same request ID in the record and `Idempotency-Key` header. Concurrent submissions with the same request ID share one in-flight provider write; completed warm-instance retries return the existing receipt. Provider requests have an eight-second default timeout, capped at 30 seconds when injected for a reviewed environment. Forge does not automatically retry provider failures, avoiding retry storms; a receiver must enforce idempotency if an operator later resubmits the same request.

Partial database configuration, provider timeouts, malformed responses, and non-success responses fail closed. The public response never includes a provider response body, credential, or rejected secret value.

## Future one-step provider activation

After an approved no-cost or funded provider endpoint already exists and its privacy/security review is complete, the single activation input is the server-only `FORGE_LEAD_WEBHOOK_URL` environment variable. Add it to the Forge Vercel project for Preview first, redeploy, then run `npm run check:durable-leads` plus one synthetic preview submission. Promote only the already-verified artifact after the receiver shows one record and an idempotent retry shows no duplicate.

Alternatively, a future approved database can be activated by setting both server-only values `FORGE_SUPABASE_URL` and `FORGE_SUPABASE_SERVICE_ROLE_KEY`; partial configuration fails closed. The service-role key must never be exposed to the browser, copied into a public environment variable, or committed. No provider was provisioned as part of this work.

## Verification command

```sh
npm run check:durable-leads
```

This covers post-job and worker writes, consent and timestamps, sequential and concurrent idempotency, provider idempotency headers, rate limiting, sensitive-field rejection, local-only honesty, bids/messages in backup recovery, staged dry-run recovery, malformed/oversized/unsafe/tampered/excessive backup rejection, a mocked webhook receiver, partial configuration, provider timeout, malformed provider response, and provider failure.
