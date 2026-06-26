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
- `opportunity`: Trade school, union/apprenticeship, or blue-collar AI job interest.
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

## Opportunity Payload

Expected fields: `id`, `name`, `phone`, `email`, `goal`, `experience`, `location`, `note`, `status`, `created`.

Map to `forge_opportunity_leads`.

## Project Payload

Expected fields: `id`, `contactName`, `phone`, `email`, `projectType`, `projectTitle`, `projectDescription`, `propertyAddress`, `city`, `state`, `county`, `budgetRange`, `timeline`, `projectStage`, `ownsProperty`, `hasPlans`, `hasPermits`, `needsFinancing`, `uploadPhotos`, `uploadDocuments`, `preferredContactMethod`, `consentToShareWithPartner`, `route`, `status`, `adminNote`, `created`.

Map to `project_leads`.

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
