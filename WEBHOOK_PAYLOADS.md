# Forge Webhook Payloads

Forge sends webhook payloads from `sendLead(type, payload)` as JSON:

```json
{
  "type": "job",
  "payload": {},
  "app": "Forge MVP",
  "createdAt": "2026-06-24T00:00:00.000Z"
}
```

## Types

- `job`: New job poster lead from Post a Job.
- `worker`: Worker profile signup.
- `opportunity`: Trade school, union/apprenticeship, or blue-collar AI job interest.
- `referral`: Quick Capture referral or friend lead.
- `bid`: Worker bid on a job.
- `test`: Admin test lead from Lead Capture Setup.

## Job Payload

Expected fields: `id`, `title`, `category`, `location`, `urgency`, `budget`, `description`, `customer`, `phone`, `email`, `status`, `posted`, `notes`.

Map to `forge_job_leads`.

## Worker Payload

Expected fields: `name`, `trade`, `phone`, `email`, `experience`, `area`, `status`.

Map to `forge_worker_leads`.

## Opportunity Payload

Expected fields: `id`, `name`, `phone`, `email`, `goal`, `experience`, `location`, `note`, `status`, `created`.

Map to `forge_opportunity_leads`.

## Referral Payload

Expected fields: `id`, `name`, `phone`, `email`, `type`, `priority`, `note`, `status`, `created`.

Map to `forge_referral_leads`.

## Bid Payload

Expected fields: `id`, `jobId`, `worker`, `amount`, `timeline`, `message`, `rating`, `reviews`, `status`, `chosen`.

Map to `forge_bids`.

## Public Beta Safety

- Validate required fields server-side.
- Reject passwords, payment cards, bank information, SSNs, and uploaded sensitive documents.
- Keep service-role keys and admin credentials out of browser code.
- Log delivery attempts in `forge_delivery_events`.
- Confirm one real job, worker, opportunity, referral, and bid appear in the backend before public sharing.
