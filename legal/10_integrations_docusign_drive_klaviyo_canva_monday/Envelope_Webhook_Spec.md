# Envelope Webhook Spec

Generated: 2026-06-27

**Template only - attorney review required before external use.**

## Webhook Events

- `envelope.sent`
- `envelope.delivered`
- `envelope.completed`
- `envelope.declined`
- `envelope.voided`

## Required Fields

- envelope_id
- template_name
- signer_email
- signer_name
- company
- monday_item_id
- google_drive_folder
- signed_pdf_url
- certificate_url
- signed_timestamp
- next_action

Never log private keys, OAuth tokens, or completed documents into public logs.
