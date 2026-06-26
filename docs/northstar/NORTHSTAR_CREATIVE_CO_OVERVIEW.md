# NorthStar Creative Co. Overview

## Status

NorthStar Creative Co. is implemented and live in the Forge UI as the business growth, marketing, and operations section for blue-collar workers, service providers, contractors, and local businesses.

## Routes And UI

- Route: `/northstar-creative`
- Screen key: `northstar`
- Homepage/service card CTA: `Grow My Business`
- Primary CTA: `Get Marketing Help`
- Secondary CTA: `Build My Business System`

## Category Values

- Primary category: `northstar_creative`
- Secondary category: `northstar_marketing_operations`

## Services

Marketing services include websites, landing pages, branding, social media, short-form content, ads, Google Business Profile setup, SEO, review generation, print materials, and content calendars.

Business operations services include CRM setup, email/SMS, job tracking, lead pipeline setup, intake forms, estimate/invoice workflow, SOPs, hiring/onboarding documents, customer service scripts, sales scripts, appointment scheduling, and operations cleanup.

## Request Flow

The NorthStar request form captures:

- Name
- Business name
- Phone
- Email
- City
- Business/trade
- Current website
- Current social media link
- Services needed
- Monthly budget range
- Biggest current problem
- 30-90 day goal
- Contact consent

Submissions save to `state.northstarLeads`, send webhook type `northstar`, and appear in the admin NorthStar lane and follow-up queue.

## Admin Flow

Admin can review NorthStar leads, export CSV, update status, save notes, copy lead details, mark contacted, and move leads through `New`, `Contacted`, `Scoping`, `Proposal Needed`, `Proposal Sent`, and `Active`.

## Packages

- Starter Presence
- Lead Engine
- Authority Builder
- Operations OS
- Full-Service Growth Partner

## Launch Risks

- Do not collect ad-account passwords, CRM credentials, email/SMS API keys, payment details, private customer lists, or sensitive business documents inside the browser-only MVP.
- Add production backend delivery before broad launch.
- Add a service agreement, scope-of-work template, credential handling policy, privacy-policy updates, and fulfillment workflow before selling managed services at scale.
