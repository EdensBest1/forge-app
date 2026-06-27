# CRM Data Handling Policy

This repo must never expose Oregon license-holder CRM private data.

## Private Data

Treat the following as private:
- Names of owners, contacts, license holders, and staff
- Phone numbers
- Email addresses
- Physical addresses
- License numbers
- Monday item payloads
- Notes that identify a person or business
- Consent, do-not-contact, and outreach history

## Where Private Data May Live

Private exports may live only in:

```text
private_crm_exports/monday_6658307629/
```

That folder is gitignored. Do not move raw CRM files into public docs, app pages, screenshots, or committed JSON.

## Public Reports May Include

- Total counts
- Category counts
- City/county counts
- License-status counts
- Suppression counts
- Anonymized lead codes
- Scoring logic
- Route assignment rules

## Public Reports Must Not Include

- Raw phone numbers
- Raw emails
- Owner names
- License-holder names
- Street addresses
- License numbers
- Monday raw item JSON
- Any token or API secret

## Consent And Do-Not-Contact Rules

- Do-not-contact records are disqualified from outreach.
- Suppressed records stay suppressed.
- SMS must be manual/consent-gated unless counsel and compliance approve another process.
- Email must include opt-out handling, truthful headers, non-deceptive subject lines, and a valid postal address.
- Do not put phone, email, owner name, or license number in URLs.

References:
- FTC CAN-SPAM business guide: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- FCC robocall/robotext consumer guide: https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts
