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
  ["manifest version", manifest.version === "v90"],
  ["html asset version", html.includes("styles.css?v=90") && html.includes("app.js?v=90")],
  ["service worker version", serviceWorker.includes("forge-mvp-v90")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=90&demo=admin#admin")],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=90"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=90"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=90"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=90"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=90"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=90"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=90"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=90"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=90"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=90"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=90"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=90"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=90"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=90"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=90"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=90"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=90"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=90"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=90"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=90"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=90"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=90"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=90"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=90"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=90"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=90"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=90"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=90"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=90"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=90"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=90"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=90"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=90"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=90"],
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
