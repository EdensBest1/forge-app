# Forge Money Security Controls

Generated: 2026-06-27

## Status

Template and control plan only. Forge does not collect payments in the public MVP and does not act as an escrow, bank, money transmitter, payment processor, lender, broker-dealer, or underwriter.

## Required Controls Before Any Money Movement

- No one-person payout flow.
- No single person may create a vendor, change payout account, approve invoice, and release payout.
- Bank account changes require callback verification and second approval.
- Every payout must connect to signed contract, invoice, approval, completion/job record, settlement statement, DocuSign envelope ID, Google Drive archive link, and Monday.com item.
- Every transaction needs an audit trail.
- Payment partner and counsel approval are required before direct fund handling.

## Current App Boundary

- Public hero states no payments collected in MVP.
- Merchant/payment/capital desk claims remain bounded as lead intake or referral review only.
- Legal binder money templates live in `legal/05_money_controls_and_fraud_prevention/`.
