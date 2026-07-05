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
  ["manifest version", manifest.version === "v107"],
  ["html asset version", html.includes("styles.css?v=107") && html.includes("app.js?v=107")],
  ["service worker version", serviceWorker.includes("forge-mvp-v107")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=107&demo=admin#admin")],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=107"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=107"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=107"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=107"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=107"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=107"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=107"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=107"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=107"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=107"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=107"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=107"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=107"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=107"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=107"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=107"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=107"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=107"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=107"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=107"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=107"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=107"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=107"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=107"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=107"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=107"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=107"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=107"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=107"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=107"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=107"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=107"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=107"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=107"],
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
