import assert from "node:assert/strict";

await import("../nationwide-market.js");

const market = globalThis.ForgeNationwide;
assert.ok(market);
assert.equal(market.US_STATES.length, 51);
assert.ok(market.US_STATES.some((state) => state.code === "DC"));
assert.deepEqual(market.PRIORITY_MARKETS.map((entry) => entry.slug), ["medford-or", "los-angeles-ca", "new-york-ny"]);

const medford = market.normalizeLocation({ city: "Medford", state: "Oregon", zip: "97501", county: "Jackson" });
const losAngeles = market.normalizeLocation({ city: "Los Angeles", state: "CA", zip: "90012", county: "Los Angeles" });
const newYork = market.normalizeLocation({ city: "New York", state: "New York", zip: "10001", county: "New York" });
const austin = market.normalizeLocation({ city: "Austin", state: "Texas", zip: "78701" });
assert.equal(medford.marketSlug, "medford-or");
assert.equal(losAngeles.marketSlug, "los-angeles-ca");
assert.equal(newYork.marketSlug, "new-york-ny");
assert.equal(austin.marketSlug, "nationwide-intake");
assert.match(austin.marketStatus, /coverage not yet confirmed/i);

const contractor = market.normalizeContractor({
  profileType: "Company / Crew",
  displayName: "Synthetic Nationwide General Contractor",
  legalBusinessName: "Synthetic Nationwide GC LLC",
  contactMethod: "Forge Message",
  city: "Los Angeles",
  state: "CA",
  zip: "90012",
  county: "Los Angeles",
  serviceRadiusMiles: 75,
  primaryServiceArea: "Los Angeles County",
  additionalServiceAreas: ["Pasadena", "Long Beach"],
  travelAvailability: "Up to 75 miles after project review",
  remoteAvailability: "On-site",
  services: ["Remodeling", "General contracting"],
  projectTypes: ["Residential remodel", "Commercial improvement"],
  residentialCommercial: "Residential and commercial",
  licenseNumber: "SYNTHETIC-CA-001",
  licenseState: "CA",
  selfReportedLicenseStatus: "Current, self-reported",
  selfReportedInsuranceStatus: "Current, self-reported",
  yearsExperience: 12,
  crewSize: 8,
  typicalProjectSize: "$50,000-$500,000",
  availability: "Open for reviewed opportunities",
  portfolioLink: "https://example.test/synthetic-portfolio",
  consent: true,
  privacyAcknowledged: true
});
assert.equal(contractor.trustState, "License review pending");
assert.equal(contractor.verificationClaimAllowed, false);
assert.notEqual(contractor.trustState, "Forge reviewed");

const job = market.normalizeJob({
  title: "Synthetic kitchen and structural remodel",
  category: "Remodeling",
  city: "Los Angeles",
  state: "CA",
  zip: "90017",
  propertyType: "Single-family home",
  projectType: "Residential remodel",
  scope: "Synthetic acceptance-test project only.",
  timing: "Planning for next quarter",
  budgetRange: "$100,000-$250,000",
  contactPreference: "Forge Message"
});
const match = market.compatible(contractor, job);
assert.equal(match.eligible, true);
assert.equal(match.serviceMatch, true);
assert.equal(match.geographyMatch, true);
assert.match(match.reason, /human review/i);
assert.equal(job.deliveryClaimAllowed, false);
assert.equal(job.paymentAllowed, false);

const distantJob = market.normalizeJob({ title: "Synthetic roof repair", category: "Roofing", city: "New York", state: "NY", zip: "10001" });
assert.equal(market.compatible(contractor, distantJob).eligible, false);

assert.throws(() => market.normalizeContractor({ ...contractor, bankAccount: "rejected" }), /Sensitive field rejected/);
assert.throws(() => market.normalizeLocation({ city: "Toronto", state: "ON", zip: "M5V 1E3" }), /valid U.S. state/);

const workflow = market.createJobWorkflow();
const created = workflow.change({
  requestId: "forge-job-synthetic-001",
  action: "create",
  actor: "customer",
  idempotencyKey: "idem:job:create:001",
  payload: {
    title: "Synthetic kitchen and structural remodel",
    category: "Remodeling",
    city: "Los Angeles",
    state: "CA",
    zip: "90017",
    propertyType: "Single-family home",
    projectType: "Residential remodel",
    scope: "Synthetic acceptance-test project only.",
    timing: "Planning for next quarter",
    budgetRange: "$100,000-$250,000",
    contactPreference: "Forge Message"
  }
});
assert.equal(created.job.status, "Saved on this device");
const duplicate = workflow.change({
  requestId: "forge-job-synthetic-001",
  action: "create",
  actor: "customer",
  idempotencyKey: "idem:job:create:001",
  payload: {
    title: "Synthetic kitchen and structural remodel",
    category: "Remodeling",
    city: "Los Angeles",
    state: "CA",
    zip: "90017",
    propertyType: "Single-family home",
    projectType: "Residential remodel",
    scope: "Synthetic acceptance-test project only.",
    timing: "Planning for next quarter",
    budgetRange: "$100,000-$250,000",
    contactPreference: "Forge Message"
  }
});
assert.equal(duplicate.idempotentReplay, true);
assert.equal(duplicate.job.version, created.job.version);

const interest = workflow.change({ requestId: created.job.id, action: "express_interest", actor: "contractor", expectedVersion: 1, idempotencyKey: "idem:interest:001" });
const quote = workflow.change({ requestId: created.job.id, action: "submit_quote", actor: "contractor", expectedVersion: interest.job.version, idempotencyKey: "idem:quote:001", payload: { amount: 125000, timeline: "12-16 weeks", scope: "Synthetic scope", contractorTrustState: contractor.trustState } });
const revision = workflow.change({ requestId: created.job.id, action: "request_revision", actor: "customer", expectedVersion: quote.job.version, idempotencyKey: "idem:revision:001" });
const revised = workflow.change({ requestId: created.job.id, action: "submit_quote", actor: "contractor", expectedVersion: revision.job.version, idempotencyKey: "idem:quote:002", payload: { amount: 119000, timeline: "14-18 weeks", scope: "Revised synthetic scope", contractorTrustState: contractor.trustState } });
const reviewed = workflow.change({ requestId: created.job.id, action: "review_quote", actor: "customer", expectedVersion: revised.job.version, idempotencyKey: "idem:review:001" });
assert.equal(reviewed.job.status, "Customer review");
assert.equal(reviewed.job.quotes.length, 2);
assert.equal(reviewed.paymentAllowed, false);
assert.equal(reviewed.dispatchAllowed, false);
assert.throws(() => workflow.change({ requestId: created.job.id, action: "cancel", actor: "contractor", expectedVersion: reviewed.job.version, idempotencyKey: "idem:unauthorized:cancel" }), /not allowed/);
assert.throws(() => workflow.change({ requestId: created.job.id, action: "cancel", actor: "customer", expectedVersion: 1, idempotencyKey: "idem:stale:cancel" }), /Version conflict/);

const restored = market.createJobWorkflow(workflow.snapshot());
assert.equal(restored.get(created.job.id).status, "Customer review");
const disputed = restored.change({ requestId: created.job.id, action: "dispute", actor: "customer", expectedVersion: reviewed.job.version, idempotencyKey: "idem:dispute:001" });
assert.equal(disputed.job.status, "Disputed");

console.log("Forge nationwide market check passed: 50 states + DC, three priority markets, honest contractor trust, location/category matching, quote/revision/recovery/dispute, and payment/dispatch hard-off.");
