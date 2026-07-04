import { readFile, access } from "node:fs/promises";

const manifest = JSON.parse(await readFile("release-manifest.json", "utf8"));
const html = await readFile("index.html", "utf8");
const serviceWorker = await readFile("service-worker.js", "utf8");
const packageJson = JSON.parse(await readFile("package.json", "utf8"));

const checks = [];

for (const file of manifest.requiredFiles) {
  checks.push([`required file ${file}`, access(file).then(() => true).catch(() => false)]);
}

const resolvedChecks = await Promise.all(checks.map(async ([label, promise]) => [label, await promise]));

const staticChecks = [
  ["manifest version", manifest.version === "v87"],
  ["html asset version", html.includes("styles.css?v=87") && html.includes("app.js?v=87")],
  ["service worker version", serviceWorker.includes("forge-mvp-v87")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=87&demo=admin#admin")],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=87"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=87"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=87"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=87"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=87"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=87"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=87"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=87"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=87"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=87"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=87"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=87"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=87"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=87"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=87"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=87"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=87"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=87"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=87"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=87"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=87"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=87"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=87"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=87"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=87"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=87"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=87"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=87"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=87"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=87"],
  ["package check script", packageJson.scripts?.check?.includes("check:release")],
  ["human gates listed", manifest.remainingHumanGates.length >= 5]
];

const failed = [...resolvedChecks, ...staticChecks].filter(([, ok]) => !ok);

if (failed.length) {
  console.error("Forge release check failed.");
  for (const [label] of failed) console.error(`- ${label}`);
  process.exit(1);
}

console.log("Forge release check passed.");
