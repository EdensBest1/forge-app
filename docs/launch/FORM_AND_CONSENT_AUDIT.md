# Form And Consent Audit

Generated: 2026-06-27

## Form Inventory

- Forms in index.html: 29
- Required field markers in index.html: 222
- Consent mentions across index.html and app.js: 256
- Guard functions present: yes
- Honeypot guard present: yes
- Duplicate submit guard present: yes
- File upload guard present: yes

## Current Controls

- installFormGuards adds a honeypot to guarded forms.
- validateGuardedForm blocks too-fast submissions, duplicate submits, honeypot fills, oversized text fields, oversized files, and executable file uploads.
- Many forms include explicit contact, partner-sharing, finance-referral, or safety consent language.
- Finance and merchant services flows warn users not to submit bank logins, SSNs, full account numbers, card data, or sensitive documents.

## Remaining Before Production

- Confirm every public form has final attorney-reviewed privacy, terms, consent, and required disclosure language.
- Confirm backend storage, retention, deletion, and export behavior before collecting real sensitive data.
