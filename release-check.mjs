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
  ["manifest version", manifest.version === "v96"],
  ["html asset version", html.includes("styles.css?v=96") && html.includes("app.js?v=96")],
  ["service worker version", serviceWorker.includes("forge-mvp-v96")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=96&demo=admin#admin")],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=96"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=96"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=96"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=96"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=96"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=96"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=96"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=96"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=96"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=96"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=96"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=96"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=96"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=96"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=96"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=96"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=96"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=96"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=96"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=96"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=96"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=96"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=96"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=96"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=96"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=96"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=96"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=96"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=96"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=96"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=96"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=96"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=96"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=96"],
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
