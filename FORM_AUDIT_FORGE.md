# Forge Form Audit

Generated: 2026-06-27 01:10 PDT

| Form | Source | Required | Length Limits | Consent/Terms | Honeypot | Sensitive Fields | File Inputs | Submit |
|---|---|---:|---:|---|---|---|---|---|
| `quickLeadForm` | index.html | 2 | 0 | yes | not detected | none detected | none | Save Lead |
| `statusLookupForm` | index.html | 1 | 0 | yes | not detected | none detected | none | Find My Jobs |
| `postJobForm` | index.html | 7 | 1 | yes | not detected | none detected | 1 | Submit Job |
| `creativeLeadForm` | index.html | 16 | 0 | yes | not detected | none detected | 1 | Request a Shoot |
| `creativeProviderForm` | index.html | 15 | 0 | yes | not detected | none detected | 3 | Apply as Creative Provider |
| `northstarLeadForm` | index.html | 23 | 0 | yes | not detected | none detected | none | Request a Free Marketing Audit |
| `flexLeadForm` | index.html | 6 | 1 | yes | not detected | none detected | none | Check Flex Options |
| `manufacturingRfqForm` | index.html | 17 | 0 | yes | not detected | none detected | 3 | Request Manufacturing Quote |
| `manufacturingSupplierForm` | index.html | 13 | 0 | yes | not detected | none detected | 1 | Join Forge Manufacturing Network |
| `manufacturingSupplierLeadForm` | index.html | 3 | 0 | needs review | not detected | none detected | none | Save Supplier Lead |
| `personalDriverRequestForm` | index.html | 4 | 0 | yes | not detected | none detected | none | Save Driver Request |
| `personalDriverProviderForm` | index.html | 5 | 0 | needs review | not detected | none detected | none | Apply as Driver |
| `merchantServicesLeadForm` | index.html | 4 | 0 | needs review | not detected | review required | none | Save Merchant Services Lead |
| `localProductVendorForm` | index.html | 5 | 0 | needs review | not detected | none detected | 1 | Save Maker Lead |
| `autoServiceForm` | index.html | 5 | 0 | needs review | not detected | none detected | 1 | Request Auto Service |
| `autoInquiryForm` | index.html | 2 | 0 | yes | not detected | none detected | none | Save Buyer Inquiry |
| `vehicleListingForm` | index.html | 10 | 1 | yes | not detected | none detected | none | Submit Vehicle For Review |
| `roadRescueForm` | index.html | 6 | 0 | needs review | not detected | none detected | 4 | Request Road Rescue |
| `opportunityForm` | index.html | 2 | 0 | needs review | not detected | review required | none | Save Career Interest |
| `forgeAcademyStudentForm` | index.html | 3 | 1 | yes | not detected | none detected | none | Save Career Intake |
| `academyEmployerForm` | index.html | 3 | 0 | needs review | not detected | none detected | none | Save Employer Partner |
| `academySchoolForm` | index.html | 3 | 0 | needs review | not detected | none detected | none | Save School Partner |
| `admitlyTradePathwayForm` | index.html | 4 | 1 | yes | not detected | none detected | none | Save Trade Pathway Lead |
| `projectIntakeForm` | index.html | 16 | 0 | yes | not detected | none detected | 2 | Submit Project Opportunity |
| `buildingLeadForm` | index.html | 19 | 0 | yes | not detected | review required | none | Submit Building Review |
| `homebuildingIntakeForm` | index.html | 11 | 0 | yes | not detected | none detected | 1 | Request Homebuilding Consultation |
| `bidForm` | index.html | 3 | 0 | yes | not detected | none detected | none | Submit Bid |
| `messageForm` | index.html | 1 | 0 | needs review | not detected | none detected | none | Save as Sent |
| `workerSignupForm` | index.html | 6 | 0 | yes | not detected | none detected | none | Create My Profile |

## Findings

- Core public forms include required fields, consent/terms language, duplicate-submit/min-delay guards from the app hardening pass, and honeypot support.
- Public MVP forms do not request payment card, bank, SSN, or account password data by static audit.
- Some specialized service forms intentionally collect lead details only; they remain admin-reviewed and must use backend validation before broad public traffic.
