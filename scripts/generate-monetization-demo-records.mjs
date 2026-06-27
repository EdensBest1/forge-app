import { writeFile } from "node:fs/promises";
import { planTiers } from "../monetization/monetization-config.mjs";
import { rankDiscoveryRecords, paginateRecords } from "../monetization/discovery-ranking.mjs";

const countArg = process.argv.find((arg) => arg.startsWith("--count="));
const outArg = process.argv.find((arg) => arg.startsWith("--out="));
const count = countArg ? Number(countArg.split("=")[1]) : 40000;
const out = outArg?.split("=")[1];

const apps = ["forge", "stitch", "admitly"];
const cities = [
  ["Medford", "OR"],
  ["White City", "OR"],
  ["Grants Pass", "OR"],
  ["Portland", "OR"],
  ["Seattle", "WA"],
  ["New York", "NY"],
  ["Washington", "DC"]
];
const categories = {
  forge: ["roofing", "cleaning", "concrete", "masonry", "automotive", "photography", "manufacturing"],
  stitch: ["flower", "extracts", "edibles", "wholesale", "distribution", "lab"],
  admitly: ["college", "trade-school", "apprenticeship", "union", "scholarship", "essay"]
};

const records = Array.from({ length: count }, (_, index) => {
  const app = apps[index % apps.length];
  const [city, state] = cities[index % cities.length];
  const appPlans = planTiers.filter((plan) => plan.app === app);
  const plan = appPlans[index % appPlans.length];
  const verified = index % 5 !== 0;
  const suspended = index % 997 === 0;
  return {
    id: `demo-${app}-${index + 1}`,
    app,
    demo: true,
    name: `${app.toUpperCase()} Demo Profile ${index + 1}`,
    category: categories[app][index % categories[app].length],
    city,
    state,
    planId: plan.id,
    tierSlug: plan.slug,
    status: suspended ? "suspended" : "active",
    profileCompletenessScore: 8 + (index % 13),
    verificationStatus: verified ? "approved" : "not_started",
    licenseStatus: app === "stitch" ? (verified ? "approved" : "submitted") : "not_applicable",
    coaStatus: app === "stitch" ? (verified ? "approved" : "missing") : "not_applicable",
    adminApprovalStatus: app === "stitch" ? (verified ? "approved" : "needs_review") : "approved",
    reviewRating: 3 + ((index % 20) / 10),
    reviewCount: index % 90,
    responseSpeedScore: index % 11,
    activeBoostUntil: index % 8 === 0 ? "2026-07-27T00:00:00.000Z" : null,
    activeBoostWeight: 10 + (index % 10),
    complaints: index % 37 === 0 ? 1 : 0,
    isMinor: app === "admitly" && index % 6 === 0,
    publicVisibility: app === "admitly" ? false : true,
    createdAt: "2026-06-01T00:00:00.000Z",
    updatedAt: `2026-06-${String((index % 26) + 1).padStart(2, "0")}T00:00:00.000Z`
  };
});

const ranked = rankDiscoveryRecords(records, { app: "forge", city: "Medford", state: "OR", category: "roofing", now: "2026-06-27T00:00:00.000Z" });
const page = paginateRecords(ranked, { cursor: 0, limit: 50 });
const summary = {
  generated: records.length,
  apps: Object.fromEntries(apps.map((app) => [app, records.filter((record) => record.app === app).length])),
  rankedForgeSample: page.items.length,
  nextCursor: page.nextCursor,
  demoOnly: true
};

if (out) {
  await writeFile(out, JSON.stringify(records, null, 2));
  console.log(JSON.stringify({ ...summary, writtenTo: out }, null, 2));
} else {
  console.log(JSON.stringify(summary, null, 2));
}
