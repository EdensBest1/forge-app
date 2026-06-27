import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));

const failures = [];
const pass = (condition, message) => {
  if (!condition) failures.push(message);
};

const index = read("index.html");
const styles = read("styles.css");
const vercel = read("vercel.json");
const netlify = read("netlify.toml");

const header = index.match(/<header class="home-top"[\s\S]*?<\/header>/)?.[0] || "";
const requiredDesktopItems = ["Services", "For Workers", "For Businesses", "Impact", "Safety"];
const requiredExploreItems = [
  "Perspectives",
  "Auto",
  "Road Rescue",
  "Photography & Videography",
  "NorthStar",
  "Capital Desk",
  "Manufacturing",
  "Personal Driver",
  "Payments",
  "Products",
  "Forge Academy",
  "Building / Development"
];
const requiredDocs = [
  "docs/launch/CONTROLLED_BETA_READINESS_BASELINE.md",
  "docs/ux/PUBLIC_UI_POLISH_REPORT.md",
  "docs/product/MARKETPLACE_DEPTH_GAP_ANALYSIS.md",
  "docs/launch/PUBLIC_ROUTE_MAP.md",
  "docs/launch/BROKEN_LINK_AND_CTA_AUDIT.md",
  "docs/security/ADMIN_RBAC_READINESS.md",
  "docs/security/DEPENDENCY_AUDIT_READINESS.md",
  "docs/security/SECURITY_HEADERS_AUDIT.md",
  "docs/launch/FORM_AND_CONSENT_AUDIT.md",
  "docs/integrations/INTEGRATION_READINESS_AUDIT.md",
  "docs/impact/IMPACT_TRACKER_READINESS_AUDIT.md",
  "docs/launch/READINESS_SMOKE_TESTS.md",
  "docs/launch/GOOGLE_DRIVE_ARCHIVE_STAGING_REPORT.md",
  "docs/launch/CHECK_RESULTS_PREMIUM_UI_CONTROLLED_BETA_READINESS.md",
  "FINAL_UPDATE_FOR_ANDREW.md"
];

pass(header.includes('class="public-nav"'), "Desktop public nav is missing.");
pass(header.includes('class="header-actions"'), "Header actions cluster is missing.");
pass(header.includes('class="search-pill"'), "Search pill is missing.");
pass(header.includes('class="explore-menu"'), "Explore mega-menu is missing.");
pass(header.includes("Post a Job"), "Post a Job CTA is missing.");
pass(header.includes("Join as Worker"), "Join as Worker CTA is missing.");

for (const label of requiredDesktopItems) {
  pass(header.includes(label), `Desktop nav is missing ${label}.`);
}

for (const label of requiredExploreItems) {
  pass(header.includes(label), `Explore mega-menu is missing ${label}.`);
}

pass(styles.includes(".public-nav"), "Public nav styles are missing.");
pass(styles.includes(".explore-panel"), "Explore panel styles are missing.");
pass(styles.includes("@media (max-width: 900px)") && styles.includes(".public-nav,\n  .search-pill"), "Tablet header compaction styles are missing.");
pass(styles.includes("@media (max-width: 560px)") && styles.includes(".explore-panel"), "Mobile Explore panel styles are missing.");
pass(exists("docs/design-reference/forge/wireframes/Screenshot 2026-06-27 at 6.42.24 AM.png"), "Prompt-provided Forge header screenshot is missing from design references.");
pass(exists("package-lock.json"), "package-lock.json is missing.");
pass(!exists(".env"), ".env must not be present in the repo.");
pass(vercel.includes("Cross-Origin-Opener-Policy") && vercel.includes("Cross-Origin-Resource-Policy"), "Vercel COOP/CORP headers are missing.");
pass(netlify.includes("Cross-Origin-Opener-Policy") && netlify.includes("Cross-Origin-Resource-Policy"), "Netlify COOP/CORP headers are missing.");
pass(vercel.includes("unsafe-inline"), "Forge CSP should explicitly document current inline style dependency until refactored.");
pass(!vercel.includes("unsafe-eval"), "CSP must not allow unsafe-eval.");

for (const file of requiredDocs) {
  pass(exists(file), `Readiness document is missing: ${file}`);
}

if (failures.length) {
  console.error("Premium UI controlled-beta readiness check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Premium UI controlled-beta readiness check passed for Forge.");
