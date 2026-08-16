import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const [html, styles, app, worker, routeLoader] = await Promise.all([
  readFile("index.html", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("app.js", "utf8"),
  readFile("service-worker.js", "utf8"),
  readFile("route-loader.js", "utf8")
]);

for (const token of [
  "--surface", "--surface-soft", "--text", "--text-muted", "--forge-blue", "--forge-orange",
  "--state-success", "--state-warning", "--state-unavailable", "--state-rejected", "--state-error",
  "--space-1", "--space-8", "--content-reading", "--content-wide", "--focus-ring", "--touch-target"
]) assert.ok(styles.includes(token), `missing design token ${token}`);

assert.match(styles, /--surface:\s*#ffffff/i);
assert.match(styles, /body,[\s\S]*?\.screen,[\s\S]*?background:\s*#fff/i);
assert.match(styles, /--touch-target:\s*44px/i);
assert.match(styles, /prefers-reduced-motion:\s*reduce/i);
assert.match(styles, /\.home-hero\s+\.hero-actions\s+\.btn\.ghost\s*{\s*display:\s*none/i);

const hero = html.match(/<section class="home-hero">([\s\S]*?)<\/section>/)?.[1] || "";
const visibleHeroActions = [...hero.matchAll(/<button class="btn (?!ghost)([^"]*)"[^>]*>([^<]+)<\/button>/g)];
assert.equal(visibleHeroActions.length, 2, "the homepage hero must expose exactly two primary actions");
assert.deepEqual(visibleHeroActions.map((match) => match[2].trim()), ["Post a Job", "Join as a Worker"]);

for (const legacyClass of [
  "marketplace-entry-panel", "vertical-showroom-panel", "browse-all-services-panel", "job-trust-panel",
  "start-path-panel", "audience-split", "share-panel", "signup-readiness-panel", "founding-panel",
  "next-steps-panel", "home-jobs", "forge-positioning-panel", "airbnb-cleaning-panel",
  "service-verticals-panel", "timeline", "demo-script"
]) assert.match(styles, new RegExp(`${legacyClass}[\\s\\S]{0,700}display:\\s*none\\s*!important`), `${legacyClass} must remain out of the public homepage flow`);

assert.match(html, /Built for Medford and Southern Oregon/);
assert.match(html, /No payments collected in this early-access release/);
assert.match(html, /Flex referral is not active/);
assert.match(html, /name="forge-release" content="v133"/);
assert.doesNotMatch(html, /REPLACE-WITH-OFFICIAL|placeholder\.example|javascript:/i);
assert.match(app, /flexPartnerApproved:\s*false/);
assert.doesNotMatch(app, /mode:\s*["']no-cors["']/);
assert.match(app, /type !== "test" \|\| !operatorDemoAllowed\(\)/);
const flexPolicy = app.match(/id:\s*"flex",[\s\S]{0,2200}?\n\s*},/)?.[0] || "";
assert.match(flexPolicy, /approved:\s*false/);
assert.match(flexPolicy, /dataSharingApproved:\s*false/);
assert.match(flexPolicy, /publicDisplayEnabled:\s*false/);
assert.match(flexPolicy, /logoUseApproved:\s*false/);
assert.match(flexPolicy, /referralAgreementSigned:\s*false/);
assert.match(flexPolicy, /officialPartnerLanguageApproved:\s*false/);
assert.match(flexPolicy, /operatorApproved:\s*false/);
assert.match(flexPolicy, /legalApproved:\s*false/);
assert.match(worker, /PRIVATE_ROUTE_PATTERN/);
assert.match(routeLoader, /Forge app shell release mismatch/);

const images = [...html.matchAll(/<img\b([^>]*)>/gi)];
assert.ok(images.length > 0);
for (const [, attributes] of images) {
  assert.match(attributes, /\balt="[^"]+"/i, "every public image needs useful alternative text");
  assert.match(attributes, /\bwidth="\d+"/i, "every raster image needs an intrinsic width");
  assert.match(attributes, /\bheight="\d+"/i, "every raster image needs an intrinsic height");
}

const assetSizes = Object.fromEntries(await Promise.all([
  "assets/forge-hero-v133.avif",
  "assets/forge-auto-services-hero-v133.avif",
  "assets/forge-homebuilding-hero-v133.avif"
].map(async (file) => [file, (await stat(file)).size])));
for (const [file, bytes] of Object.entries(assetSizes)) assert.ok(bytes <= 160 * 1024, `${file} exceeds the v133 image budget`);

console.log(`Forge public-quality contract passed: white/spacious tokens, two hero actions, truthful boundaries, reduced motion, and ${images.length} dimensioned images.`);
