# Forge lead durability and local recovery

## Honest current state

Forge transactionally adds every valid public job or worker submission to `forge.lead-outbox.v1` in browser storage before attempting server delivery. The record keeps one request ID across retries, explicit consent evidence, timestamps, a bounded attempt count, a sanitized failure category, and—only after verification—a server receipt. The server endpoint returns `503 DURABLE_LEAD_STORE_NOT_CONFIGURED` when no approved durable destination exists. The UI then says **Saved on this device — delivery unavailable**. Production durability must not be represented as active until an approved destination is configured and a synthetic receipt is verified.

The automated checks use only synthetic records, isolated local test storage, and localhost/mock receivers. They do not use customer data, credentials, or external infrastructure.

## Public delivery receipt meanings

- **Saved on this device** means the validated lead is present in this browser's outbox. It does not mean Forge received it.
- **Checking delivery** means one request is currently in flight. Repeated clicks share that same attempt.
- **Delivered to Forge** appears only after `200` or `201` returns a `forge.lead-receipt.v1` body with the same request ID, canonical receipt timestamp, and at least one verified storage receipt target.
- **Delivery unavailable** means the server returned the documented fail-closed `503` contract for that same request ID.
- **Retryable failure** covers network, timeout, rate-limit, server, and invalid-receipt failures. The local copy remains intact and bounded backoff applies.
- **Correction required** covers permanent validation/origin failures. Forge does not loop or automatically retry them.

The Delivery Status screen shows synthetic-safe summaries, request IDs, attempt counts, retry timing, and retained receipts. Retry always revalidates the record and reuses its request ID. Export undelivered records before clearing site data. Treat the JSON export as sensitive because it can contain contact information. Removing an outbox entry requires an explicit confirmation and does not remove the original local job or worker profile.

## Local export and recovery

From localhost operator mode, use **Export Backup** to download a `forge.local-backup.v1` JSON envelope. It contains an export timestamp, app version, core record counts (including the delivery outbox), and an integrity checksum. Existing v1 envelopes without `leadOutbox` remain supported and migrate to an empty outbox. Import validates the file before opening an accessible recovery dry run. The dry run shows:

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

Forge rejects malformed JSON, files larger than 5 MB, unsupported schemas, invalid timestamps or app versions, malformed checksums, checksum/count mismatches, unsafe object keys, excessive nesting, arrays over 100,000 items, and backups with more than 100,000 total core records. The outbox independently isolates malformed, duplicate, future-schema, and overflow records instead of resetting unrelated browser state. Error messages describe the rejected boundary without echoing file content.

Keep exported files in an approved encrypted location. Never email them casually or commit them to Git because they may contain contact information. Run an export before any reset or import.

## Delivery reliability boundaries

Configured providers receive the same request ID in the record and `Idempotency-Key` header. Concurrent submissions with the same request ID share one in-flight provider write; completed warm-instance retries return the existing receipt. Provider requests have an eight-second default timeout, capped at 30 seconds when injected for a reviewed environment. The browser uses a ten-second request timeout, at most five manual attempts, and bounded backoff. Forge does not automatically retry provider failures, avoiding retry storms; a receiver must enforce idempotency if an operator later resubmits the same request.

Partial database configuration, provider timeouts, malformed responses, and non-success responses fail closed. The public response never includes a provider response body, credential, or rejected secret value.

## Future approved-provider activation

After an approved durable endpoint already exists and its privacy/security review is complete, the server-only `FORGE_LEAD_WEBHOOK_URL` input can be added to the Forge Vercel project for Preview first. Redeploy, run `npm run check`, then submit one synthetic preview lead and retry the same request ID. Promote only the exact verified artifact after the receiver shows one record, the browser shows a matching verified receipt, and the retry creates no duplicate.

No provider was installed, configured, connected, or provisioned as part of this work. Missing or partial configuration continues to fail closed.

## Rollback

The pre-outbox checkpoint is Git commit `f595ca9c5e1e7ca70a3ea9bc2a05e13dae8f530f`, local tag `checkpoint-before-forge-outbox-20260815`, and production deployment `dpl_E1uyFwGHcFjFAjs6nA1Z5r47ggYP`. To roll back code, create a new revert commit on the release branch; do not rewrite or force-push history. To roll back hosting, promote or re-alias that identified deployment, verify both production domains, then repeat the API, security-header, asset-hash, browser, and runtime-log checks. Existing browser state remains readable because the outbox field is additive and optional.

## Remaining public-launch blockers

- An approved durable destination and a real synthetic end-to-end delivery receipt are still required.
- Production-grade operator authentication remains required before `/admin`, `/capture`, or `/reports` can be exposed.
- Final legal/privacy and security approval remain required before broad public traffic.
- Operational ownership, monitoring, retention review, and tested incident recovery remain required.

## Verification command

```sh
npm run check:durable-leads
npm run check:lead-outbox
```

Together these cover job and worker enqueue-before-send behavior, stable request IDs, reload and migration, concurrent idempotency, receipt validation, fail-closed `503`, rate limiting, permanent rejection, sensitive-field and impossible-timestamp rejection, network/timeout/provider failures, bounded storage and retention, export UI, backup compatibility, and staged dry-run recovery.
