# Forge Zapier Setup

Forge can send new job, worker, referral, and test leads to a Zapier Catch Hook URL.

## Where to paste the webhook

1. Open Forge.
2. Go to `Admin`.
3. Paste the Zapier Catch Hook URL into `Lead Capture Setup`.
4. Check `Send new job and worker leads to webhook`.
5. Click `Save Setup`.
6. Click `Send Test Lead`.

Forge still saves all leads locally if the webhook is empty or fails.

## Payload shape

Forge posts JSON shaped like this:

```json
{
  "type": "job",
  "payload": {
    "title": "Bathroom Faucet Replacement",
    "category": "Plumbing",
    "location": "Medford, OR",
    "urgency": "ASAP",
    "budget": "$150 - $250",
    "customer": "John Smith",
    "phone": "(541) 555-1234",
    "email": "john.smith@email.com",
    "status": "New",
    "notes": "New lead from Forge MVP."
  },
  "app": "Forge MVP",
  "createdAt": "2026-06-15T00:00:00.000Z"
}
```

`type` can be:

- `job`
- `worker`
- `referral`
- `test`

## Suggested Zap actions

- Create a row in Google Sheets or Airtable.
- Send yourself an email or text notification.
- Add the person to a CRM list.
- Create a follow-up task.

## Minimum sheet columns

- `createdAt`
- `type`
- `name/title`
- `phone`
- `email`
- `location/area`
- `status`
- `notes`
- `source`
