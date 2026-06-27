# Landing Page Assignment Rules

Do not put phone numbers, emails, owner names, license numbers, or private CRM details in URLs.

## Stitch URLs

- Farm / Producer: `https://stitchmarketplace.com/go/farm`
- Processor: `https://stitchmarketplace.com/go/processor`
- Lab: `https://stitchmarketplace.com/go/lab`
- Dispensary / Retailer: `https://stitchmarketplace.com/go/dispensary`
- Wholesaler: `https://stitchmarketplace.com/go/wholesaler`
- Logistics / Transport: `https://stitchmarketplace.com/go/logistics`
- Broker / Admin Review: `https://stitchmarketplace.com/go/broker`

## Forge URLs

- Farm jobs / labor: `https://hireonforge.com/go/business`
- Worker/contractor recruitment: `https://hireonforge.com/go/contractor`
- Post jobs: `https://hireonforge.com/go/post-job`
- Auto/transport: `https://hireonforge.com/go/auto`
- Manufacturing: `https://hireonforge.com/go/manufacturing`
- Creative/marketing: `https://hireonforge.com/go/creative`

## North Star URL

- `https://hireonforge.com/go/creative`

## Private Export Columns

The scoring script writes separate private columns for:

- `stitch_landing_page`
- `forge_landing_page`
- `northstar_landing_page`
- `assigned_landing_page`

In this Forge repo, `assigned_landing_page` defaults to the Forge path unless `CRM_PRIMARY_LANDING_SITE` is set to `stitch` or `northstar` before running the private scoring script.

## Safe Tracking Params

Allowed:
- `lead_code`
- `utm_source=monday`
- `utm_campaign=oregon_operator_wave_1`
- `segment`
- `license_type`

Forbidden:
- phone
- email
- owner name
- license number
- address

Lead codes are public-safe identifiers derived from an existing public lead code when available, otherwise from a stable Monday item seed. They must never be generated from phone, email, owner name, address, or license number.
