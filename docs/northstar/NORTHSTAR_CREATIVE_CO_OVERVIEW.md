# NorthStar Creative Co. Overview

## Status

North Star Creative Co. is implemented and live in the Forge UI as the business growth, marketing, and operations arm for blue-collar workers, service providers, contractors, and larger trade companies.

Forge is the marketplace. North Star Creative Co. is the marketing/growth arm. Small providers get profile, lead, review, and follow-up help. Larger companies get full-scale marketing, CRM, ads, recruiting, content, and growth systems.

## Routes And UI

- Route: `/northstar-creative`
- Screen key: `northstar`
- Page title: `Grow Your Business with North Star Creative Co.`
- Positioning: `Forge helps you find work. North Star Creative Co. helps your business win more of it.`
- Homepage/service card CTA: `Grow My Business`
- Primary CTA: `Request a Free Marketing Audit`
- Secondary CTA: `Get More Jobs`

## Category Values

- Primary category: `northstar_creative`
- Secondary category: `northstar_marketing_operations`

## Services

Marketing services include websites, landing pages, branding, social media, short-form content, ads, Google Business Profile setup, SEO, review generation, print materials, and content calendars.

Business operations services include CRM setup, email/SMS, job tracking, lead pipeline setup, intake forms, estimate/invoice workflow, SOPs, hiring/onboarding documents, customer service scripts, sales scripts, appointment scheduling, and operations cleanup.

## Request Flow

The North Star request form captures:

- Business name
- Owner/contact name
- Phone
- Email
- Website URL
- Google Business profile URL
- Service categories
- Service areas
- Years in business
- Number of employees
- Number of crews
- Monthly marketing budget
- Current ad spend
- Current monthly lead volume
- Main business problem
- Do you answer every call?
- Do you have a CRM?
- Do you need hiring/recruiting help?
- Do you want residential jobs, commercial jobs, or both?
- Do you need photos/videos?
- Do you want North Star to audit your marketing?
- Notes

The provider signup flow also asks:

- `Do you want North Star Creative Co. to help you get more jobs and grow your business?`
- Business-size classification: `Solo Operator`, `Small Local Business`, `Established Trade Company`, or `Enterprise / Anchor Contractor`

Provider signup can create a separate North Star lead when the provider requests leads, website help, Google Business help, ads, social media, photos/videos, CRM/follow-up, full-scale marketing, or a larger-company growth consultation.

Legacy request fields remain supported:

- Business name
- City
- Business/trade
- Current website
- Current social media link
- Services needed
- Monthly budget range
- Biggest current problem
- 30-90 day goal
- Contact consent

Submissions save to `state.northstarLeads`, send webhook type `northstar`, and appear in the admin North Star lane and follow-up queue. North Star leads must stay separate from normal Forge job requests.

## Forge Marketing Score

Every North Star lead receives a Forge Marketing Score:

- Website score: 0-20
- Google Business score: 0-20
- Reviews score: 0-20
- Photos/videos score: 0-10
- Lead response speed score: 0-10
- Social proof score: 0-10
- CRM/follow-up score: 0-10
- Total score: 100

Display copy: `Your business has a Forge Marketing Score. North Star Creative Co. can help improve your visibility, leads, reviews, and follow-up.`

Automatic lead classifications:

- Small Provider
- Growth Client
- Trade Pro Client
- Enterprise Prospect
- Urgent Follow-Up

## Admin Flow

Admin can review North Star leads, export CSV, update status, save notes, copy lead details, mark contacted, and move leads through `New`, `Needs Review`, `Contacted`, `Audit Scheduled`, `Proposal Needed`, `Proposal Sent`, `Won`, `Lost`, and `Nurture Later`.

The admin table tracks lead name, company, service category, business size, marketing need, score, budget, urgency, status, assigned owner, notes, and created date.

## Packages

- Forge Starter Presence
- Forge Local Growth
- North Star Trade Pro
- North Star Enterprise Growth Partner

## Roofing Priority Vertical

Roofing is a priority vertical for North Star because replacement, repair, emergency leak, commercial roofing, gutter, storm damage, HOA/property manager, and multi-family campaigns can become high-value client opportunities.

Recommended roofing landing page templates include:

- Roof Replacement Medford OR
- Roof Repair Medford OR
- Commercial Roofing Medford OR
- Metal Roofing Medford OR
- Emergency Roof Leak Repair Medford OR
- Gutter Installation Medford OR
- Roofing Contractor Grants Pass OR
- Roofing Contractor Ashland OR
- Roofing Contractor Central Point OR
- HOA Roofing Southern Oregon
- Multi-Family Roofing Southern Oregon
- Commercial Flat Roof Repair Southern Oregon

## Launch Risks

- Do not collect ad-account passwords, CRM credentials, email/SMS API keys, payment details, private customer lists, or sensitive business documents inside the browser-only MVP.
- Add production backend delivery before broad launch.
- Add a service agreement, scope-of-work template, credential handling policy, privacy-policy updates, and fulfillment workflow before selling managed services at scale.
