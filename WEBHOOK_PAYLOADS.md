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
- `job` with `payload.category = "photography_videography"`: Photography & Videography customer request from `/photography/request`.
- `worker` with `payload.providerCategory = "photography_videography"`: Photography & Videography provider application from `/photography/apply`.
- `northstar`: NorthStar Creative Co. marketing and business-operations request from `/northstar-creative`.
- `forge-flex`: Forge Capital Desk lead for Flex referral follow-up from `/forge/capital`, `/forge/flex`, or `/partners/flex`.
- `opportunity`: Trade school, union/apprenticeship, or blue-collar AI job interest.
- `vehicle-seller`: Sell My Car on Forge, List My Vehicle, Consign My Vehicle, Wholesale Offer, Auction Vehicle Sourcing, or Forge Platinum Auto Concierge seller lead from `/auto`.
- `auto-service`: Forge Auto & Transport service, buyer request, transport, executive transport, repair, detailing, inspection, or auction sourcing request from `/auto`.
- `building`: Forge Building intake for home projects, major builds, or contractor finance review from `/building`.
- `building-seneca-review`: Building lead sent to Seneca Review only after admin status gate, customer consent, partner approval, and data-sharing approval.
- `building-flex-review`: Building finance lead sent to Flex Review only after finance eligibility, customer consent, partner approval, and data-sharing approval.
- `project`: Forge Projects intake for home projects, major renovations, development, commercial, land, or investment-backed opportunities.
- `project-seneca-review`: Forge-approved project lead sent to Seneca Review after OR/WA check, Forge Qualified status, and user consent.
- `referral`: Quick Capture referral or friend lead.
- `bid`: Worker bid on a job.
- `test`: Admin test lead from Lead Capture Setup.

## Job Payload

Expected fields: `id`, `title`, `category`, `location`, `urgency`, `budget`, `description`, `customer`, `phone`, `email`, `status`, `posted`, `notes`.

Map to `forge_job_leads`.

Photography & Videography requests include additional fields: `categorySlug`, `serviceType`, `desiredDate`, `shootStartTime`, `estimatedDuration`, `shootLocation`, `city`, `mediaType`, `deliveryDeadline`, `venueName`, `guestCount`, `numberOfLocations`, `indoorOutdoor`, `stylePreference`, `inspirationLink`, `inspirationUploads`, `shotList`, `secondShooterNeeded`, `droneRequested`, `rawFootageRequested`, `socialClipsRequested`, `sameDayPreviewRequested`, `termsAccepted`, `privacyAcknowledged`, and `creativeStatus`.

Map creative requests to `forge_job_leads` for the current MVP or to `creative_service_requests` when the backend supports the dedicated table.

## Worker Payload

Expected fields: `name`, `trade`, `phone`, `email`, `experience`, `area`, `status`.

Map to `forge_worker_leads`.

Photography & Videography provider applications include additional fields: `firstName`, `lastName`, `businessName`, `city`, `providerCategory`, `categorySlug`, `servicesOffered`, `portfolioLink`, `socialLink`, `yearsExperience`, `gearSummary`, `editingSoftware`, `availability`, `serviceArea`, `startingRate`, `weddingExperience`, `eventExperience`, `realEstateExperience`, `productExperience`, `droneCapability`, `droneCertificationUpload`, `insuranceUpload`, `sampleGalleryLinks`, `videoReelLink`, `profilePhotoUpload`, `bio`, `providerTermsAccepted`, `privacyAcknowledged`, `featured`, and `providerStatus`.

Map creative providers to `forge_worker_leads` for the current MVP or to `creative_provider_applications` when the backend supports the dedicated table.

## NorthStar Payload

Expected fields: `id`, `category`, `secondaryCategory`, `name`, `businessName`, `phone`, `email`, `city`, `trade`, `website`, `social`, `servicesNeeded`, `budget`, `problem`, `goal`, `consent`, `status`, `created`, and `adminNotes`.

Map to `northstar_marketing_operations_leads`.

Use `category = "northstar_creative"` and `secondaryCategory = "northstar_marketing_operations"` so NorthStar leads stay separate from general job leads and Photography & Videography requests.

Do not send payment details, ad-account passwords, CRM credentials, private customer lists, or sensitive business documents through the browser-only MVP.

## Forge Flex Payload

Expected fields: `source`, `partner`, `owner_name`, `business_name`, `email`, `phone`, `industry`, `city`, `state`, `lead_score`, `primary_need`, `interested_in_forge_services`, `interested_in_north_star_marketing`, `interested_in_payment_processing`, and `status`.

Map to `forge_flex_leads`.

Do not send SSNs, bank logins, full account numbers, personal credit score fields, uploads, or sensitive financial documents through Forge.

## Opportunity Payload

Expected fields: `id`, `name`, `phone`, `email`, `goal`, `experience`, `location`, `note`, `status`, `created`.

Map to `forge_opportunity_leads`.

## Vehicle Seller Payload

Expected fields: `id`, `intent`, `seller`, `phone`, `email`, `preferredContact`, `year`, `make`, `model`, `trim`, `price`, `privateLowestPrice`, `mileage`, `vin`, `exteriorColor`, `interiorColor`, `fuelType`, `drivetrain`, `transmission`, `plateState`, `location`, `sellTimeline`, `condition`, `running`, `titleStatus`, `loanLien`, `payoffAmount`, `accidentHistory`, `serviceRecords`, `smogStatus`, `keys`, `description`, `mechanicalIssues`, `cosmeticIssues`, `photoNotes`, `wantsReplacement`, `consentToPartnerContact`, `tags`, `assignedPartner`, `route`, `leadScore`, `reviewStatus`, `estimatedForgeRevenue`, and `adminNotes`.

Map to `forge_vehicle_seller_leads`.

Privacy rule: `privateLowestPrice`, `vin`, `loanLien`, `payoffAmount`, private partner routing, and admin notes are admin-only. Do not publish them on vehicle listing pages or send them to partners without customer consent and approved partner terms.

Public premium auto brand: `Forge Platinum Auto Concierge`. Do not include private partner names, company names, branding, logos, photos, or service claims in customer-facing payloads unless written approval and admin branding permission are confirmed.

## Auto Service Payload

Expected fields: `id`, `name`, `phone`, `email`, `vehicle`, `mileage`, `urgency`, `service`, `location`, `photoCount`, `notes`, `status`, and `created`.

Map to the current Forge Auto request queue or a future `forge_auto_service_requests` table.

Transport, executive transport, auction sourcing, repairs, inspections, and detailing must be routed to properly licensed or qualified partners where required.

## Project Payload

Expected fields: `id`, `contactName`, `phone`, `email`, `projectType`, `projectTitle`, `projectDescription`, `propertyAddress`, `city`, `state`, `county`, `budgetRange`, `timeline`, `projectStage`, `ownsProperty`, `hasPlans`, `hasPermits`, `needsFinancing`, `uploadPhotos`, `uploadDocuments`, `preferredContactMethod`, `consentToShareWithPartner`, `route`, `status`, `adminNote`, `created`.

Map to `project_leads`.

## Building Payload

Expected fields: `id`, `leadType`, `projectType`, `projectTitle`, `projectDescription`, `propertyAddress`, `city`, `county`, `state`, `zip`, `budgetRange`, `timeline`, `projectStage`, `ownsProperty`, `hasPlans`, `hasPermits`, `needsFinancing`, `businessName`, `ownerName`, `email`, `phone`, `website`, `industry`, `monthlyRevenueRange`, `yearsInBusiness`, `numberOfEmployees`, `financeNeed`, `preferredContactMethod`, `consentToReview`, `consentToContact`, `consentToShareWithApprovedPartners`, `status`, `assignedPartnerId`, and `adminNotes`.

Map to `building_leads`.

Do not send Building leads to Seneca, Flex, or any third-party partner unless customer consent is true and the selected partner has `approved = true` and `dataSharingApproved = true`. Do not mark a Building lead commissionable unless the assigned partner has `referralAgreementSigned = true`.

## Project Seneca Review Payload

Expected fields: same as Project Payload. Only send after `state` is `OR` or `WA`, `status` is `FORGE_QUALIFIED`, and `consentToShareWithPartner` is `true`.

Map to `partner_referrals` and keep construction/development contracts outside Forge.

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
- Confirm one real job, worker, project, opportunity, referral, and bid appear in the backend before public sharing.
