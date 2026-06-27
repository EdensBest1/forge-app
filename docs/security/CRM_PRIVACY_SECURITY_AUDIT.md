# CRM Privacy Security Audit

Audit date: 2026-06-27

## Summary

- No non-empty `MONDAY_API_TOKEN` assignments found in committed/public files: yes
- No private CRM export files committed: yes
- `.gitignore` protects `private_crm_exports/`: yes
- `.env.example` is the only tracked env file: yes
- Monday board was read: no
- Raw CRM PII committed: no

## Checks

| Check | Stitch result | Forge result |
| --- | --- | --- |
| Tracked env files | `.env.example` only | `.env.example` only |
| Tracked private exports | 0 | 0 |
| Non-empty Monday token assignments | 0 | 0 |
| Private export ignore check | passed | passed |
| Email pattern files | 28 existing public/template files | 5 existing public/template files |
| Phone pattern files | 16 existing public/template files | 3 existing public/template files |

## Findings

- Existing email/phone-like patterns are public contact placeholders, operational templates, or pre-existing docs, not Monday private CRM exports.
- No `private_crm_exports/` files are tracked.
- No Monday token value was found in committed/public files.
- No production deployment was performed.

## Fixes Applied

- Added private CRM export ignore patterns.
- Added read-only Monday scripts that fail with a clear missing-token message.
- Added stable public-safe lead codes based on non-PII Monday item seeds when no existing code is present.
- Added public-safe lead attribution capture for role landing pages.
- Added CRM policy docs prohibiting PII in public reports and URLs.
