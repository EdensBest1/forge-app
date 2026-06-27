import assert from "node:assert/strict";
import { addOns, planTiers } from "../monetization/monetization-config.mjs";
import { calculateDiscoveryScore, filterDiscoveryRecords, paginateRecords, rankDiscoveryRecords } from "../monetization/discovery-ranking.mjs";

for (const app of ["forge", "stitch", "admitly"]) {
  assert.ok(planTiers.some((plan) => plan.app === app), `${app} tiers exist`);
  assert.ok(addOns.some((item) => item.app === app), `${app} add-ons exist`);
}

const verifiedForge = calculateDiscoveryScore({
  app: "forge",
  planId: "forge_elite_company",
  status: "active",
  profileCompletenessScore: 20,
  verificationStatus: "approved",
  reviewRating: 5,
  reviewCount: 30,
  responseSpeedScore: 10,
  activeBoostUntil: "2026-07-01T00:00:00.000Z",
  updatedAt: "2026-06-27T00:00:00.000Z"
}, { app: "forge", now: "2026-06-27T00:00:00.000Z" });
assert.ok(verifiedForge.score > 0);
assert.ok(verifiedForge.labels.includes("Verified"));
assert.ok(verifiedForge.labels.includes("Boosted"));

const unsafePaidForge = calculateDiscoveryScore({
  app: "forge",
  planId: "forge_elite_company",
  status: "active",
  safetyPenalty: 100,
  verificationStatus: "approved"
}, { app: "forge" });
assert.equal(unsafePaidForge.blockedReason, "blocked: safety penalty");

const unverifiedStitch = calculateDiscoveryScore({
  app: "stitch",
  planId: "stitch_diamond_enterprise_v2",
  status: "active",
  licenseStatus: "submitted",
  coaStatus: "approved",
  adminApprovalStatus: "approved",
  profileCompletenessScore: 20
}, { app: "stitch" });
assert.equal(unverifiedStitch.blockedReason, "blocked: Stitch license verification required");

const publicMinor = calculateDiscoveryScore({
  app: "admitly",
  planId: "admitly_elite_concierge",
  status: "active",
  isMinor: true,
  publicVisibility: true
}, { app: "admitly" });
assert.equal(publicMinor.blockedReason, "blocked: minor profiles cannot be public");

const records = Array.from({ length: 300 }, (_, index) => ({
  id: `record-${index}`,
  app: index % 2 ? "forge" : "admitly",
  category: index % 3 ? "roofing" : "college",
  city: index % 5 ? "Medford" : "Portland",
  state: "OR",
  status: "active",
  profileCompletenessScore: index % 20,
  verificationStatus: "approved",
  updatedAt: "2026-06-27T00:00:00.000Z"
}));
const filtered = filterDiscoveryRecords(records, { app: "forge", city: "Medford" });
const ranked = rankDiscoveryRecords(filtered, { app: "forge", city: "Medford" });
const page = paginateRecords(ranked, { limit: 25 });
assert.equal(page.items.length, 25);
assert.equal(page.nextCursor, 25);

console.log("Monetization engine check passed.");
