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
  ["manifest version", manifest.version === "v71"],
  ["html asset version", html.includes("styles.css?v=73") && html.includes("app.js?v=73")],
  ["service worker version", serviceWorker.includes("forge-mvp-v73")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=71&demo=admin#admin")],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=71"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=71"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=71"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=71"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=71"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=71"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=71"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=71"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=71"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=71"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=71"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=71"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=71"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=71"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=71"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=71"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=71"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=71"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=71"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=71"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=71"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=71"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=71"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=71"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=71"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=71"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=71"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=71"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=71"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=71"],
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
