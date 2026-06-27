import fs from "node:fs";
import path from "node:path";
import {
  PRIVATE_DIR,
  forgeLandingForLead,
  getLogicalValue,
  normalizeCompany,
  normalizeEmail,
  normalizePhone,
  normalizedCategory,
  northstarLandingForLead,
  primaryLandingUrl,
  publicLeadCode,
  scoreLead,
  stitchLandingForCategory,
  trackingUrl,
  writeCsv
} from "./crm-common.mjs";

const sourcePath = process.argv[2] || path.join(PRIVATE_DIR, "all_leads.private.json");

if (!fs.existsSync(sourcePath)) {
  console.error(`Missing private export: ${sourcePath}`);
  console.error("Run scripts/monday/export-private-leads.mjs after MONDAY_API_TOKEN is set, or provide a private JSON export path.");
  process.exit(2);
}

const payload = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const leads = payload.leads || [];
const seen = new Map();
const deduped = [];
const duplicates = [];

for (const lead of leads) {
  const license = getLogicalValue(lead, "license_number").toLowerCase();
  const phone = normalizePhone(getLogicalValue(lead, "phone"));
  const email = normalizeEmail(getLogicalValue(lead, "email"));
  const companyAddress = `${normalizeCompany(getLogicalValue(lead, "company_name") || lead.item_name)}|${getLogicalValue(lead, "address").toLowerCase()}`;
  const ownerPhone = `${getLogicalValue(lead, "owner_name").toLowerCase()}|${phone}`;
  const keys = [license && `license:${license}`, phone && `phone:${phone}`, email && `email:${email}`, companyAddress.length > 1 && `company_address:${companyAddress}`, ownerPhone.length > 1 && `owner_phone:${ownerPhone}`].filter(Boolean);
  const duplicateKey = keys.find((key) => seen.has(key));
  if (duplicateKey) {
    duplicates.push({ ...lead, duplicate_reason: duplicateKey, duplicate_of: seen.get(duplicateKey).monday_item_id });
    continue;
  }
  for (const key of keys) seen.set(key, lead);
  deduped.push(lead);
}

const scored = deduped.map((lead) => {
  const category = normalizedCategory(lead);
  const score = scoreLead(lead);
  const licenseType = getLogicalValue(lead, "license_type");
  const leadCode = publicLeadCode(getLogicalValue(lead, "public_lead_code"), `monday:${payload.board_id || "6658307629"}:${lead.monday_item_id}`);
  const stitchUrl = trackingUrl(stitchLandingForCategory(category), { leadCode, category, licenseType });
  const forgeUrl = trackingUrl(forgeLandingForLead(lead, category), { leadCode, category, licenseType });
  const northstarUrl = trackingUrl(northstarLandingForLead(lead), { leadCode, category, licenseType });
  const assignedLandingPage = primaryLandingUrl({ stitchUrl, forgeUrl, northstarUrl });
  return {
    ...lead,
    lead_code: leadCode,
    normalized_category: category,
    lead_score: score.score,
    flags: score.flags.join(";"),
    stitch_landing_page: stitchUrl,
    forge_landing_page: forgeUrl,
    northstar_landing_page: northstarUrl,
    assigned_landing_page: assignedLandingPage
  };
});

const byCategory = new Map();
for (const lead of scored) {
  if (!byCategory.has(lead.normalized_category)) byCategory.set(lead.normalized_category, []);
  byCategory.get(lead.normalized_category).push(lead);
}

const top50 = [];
for (const [category, rows] of byCategory) {
  rows.sort((a, b) => b.lead_score - a.lead_score);
  rows.slice(0, 50).forEach((lead, index) => top50.push({ ...lead, top_50_category_rank: index + 1, wave: "Wave 1" }));
}

const privateHeaders = ["monday_item_id", "item_name", "group_title", "normalized_category", "lead_score", "flags", "lead_code", "assigned_landing_page", "stitch_landing_page", "forge_landing_page", "northstar_landing_page", "top_50_category_rank", "wave"];
writeCsv(path.join(PRIVATE_DIR, "deduped_leads.private.csv"), scored, privateHeaders);
writeCsv(path.join(PRIVATE_DIR, "duplicates.private.csv"), duplicates, ["monday_item_id", "item_name", "group_title", "duplicate_reason", "duplicate_of"]);
writeCsv(path.join(PRIVATE_DIR, "top_50_by_category.private.csv"), top50, privateHeaders);
writeCsv(path.join(PRIVATE_DIR, "landing_page_assignments.private.csv"), top50, ["monday_item_id", "lead_code", "normalized_category", "assigned_landing_page", "stitch_landing_page", "forge_landing_page", "northstar_landing_page", "wave"]);

const countsBy = (rows, getter) => {
  const counts = new Map();
  for (const row of rows) {
    const key = getter(row) || "Unknown / Needs Review";
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
};

const phonePresent = scored.filter((lead) => normalizePhone(getLogicalValue(lead, "phone")).length === 10).length;
const emailPresent = scored.filter((lead) => normalizeEmail(getLogicalValue(lead, "email")).includes("@")).length;
const dnc = scored.filter((lead) => /do_not_contact/.test(lead.flags)).length;
const categoryCounts = countsBy(scored, (lead) => lead.normalized_category);
const statusCounts = countsBy(scored, (lead) => getLogicalValue(lead, "license_status"));
const countyCounts = countsBy(scored, (lead) => getLogicalValue(lead, "county") || getLogicalValue(lead, "city"));

fs.mkdirSync(path.join(process.cwd(), "docs", "crm"), { recursive: true });
fs.writeFileSync(
  path.join(process.cwd(), "docs", "crm", "MONDAY_CONTACT_COUNT_REPORT.md"),
  `# Monday Contact Count Report

- Total Monday items: ${leads.length}
- Total unique potential contacts: ${scored.length}
- Unique companies: ${new Set(scored.map((lead) => normalizeCompany(getLogicalValue(lead, "company_name") || lead.item_name)).filter(Boolean)).size}
- Unique license holders: ${new Set(scored.map((lead) => getLogicalValue(lead, "license_holder_name")).filter(Boolean)).size}
- Phone-present count: ${phonePresent}
- Email-present count: ${emailPresent}
- Both-phone-and-email count: ${scored.filter((lead) => normalizePhone(getLogicalValue(lead, "phone")).length === 10 && normalizeEmail(getLogicalValue(lead, "email")).includes("@")).length}
- Missing-phone count: ${scored.length - phonePresent}
- Missing-email count: ${scored.length - emailPresent}
- Do-not-contact/suppressed count: ${dnc}
- Number eligible for Wave 1: ${top50.length}
- Number eligible for later waves: ${Math.max(0, scored.length - top50.length)}

## Category Counts

${categoryCounts.map(([key, value]) => `- ${key}: ${value}`).join("\n")}

## License Status Counts

${statusCounts.map(([key, value]) => `- ${key}: ${value}`).join("\n")}

## City/County Counts

${countyCounts.map(([key, value]) => `- ${key}: ${value}`).join("\n")}

No raw phone numbers, emails, owner names, addresses, or license numbers are included in this public report.
`
);

fs.writeFileSync(
  path.join(process.cwd(), "docs", "crm", "MONDAY_DUPLICATE_SUMMARY.md"),
  `# Monday Duplicate Summary

- Total duplicates found: ${duplicates.length}
- Duplicate handling: preserved in private duplicate report, not deleted.
- Private duplicate report: private_crm_exports/monday_${payload.board_id || "6658307629"}/duplicates.private.csv

No raw PII is included in this public report.
`
);

fs.writeFileSync(
  path.join(process.cwd(), "docs", "crm", "TOP_50_SELECTION_SUMMARY.md"),
  `# Top 50 Selection Summary

- Top 50 selected per category: ${top50.length > 0 ? "yes" : "no"}
- Private export: private_crm_exports/monday_${payload.board_id || "6658307629"}/top_50_by_category.private.csv
- Raw PII committed: no

## Selected Counts By Category

${countsBy(top50, (lead) => lead.normalized_category).map(([key, value]) => `- ${key}: ${value}`).join("\n") || "- None"}

## Scoring Logic

See docs/crm/LEAD_SCORING_MODEL.md. Do-not-contact records are disqualified. Unresolved duplicates are held for manual review.
`
);

console.log(`Scored ${scored.length} unique leads and selected ${top50.length} Wave 1 rows.`);
