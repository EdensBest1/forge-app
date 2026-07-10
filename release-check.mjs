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
  ["manifest version", manifest.version === "v122"],
  ["html asset version", html.includes("styles.css?v=122") && html.includes("app.js?v=122")],
  ["service worker version", serviceWorker.includes("forge-mvp-v122")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=122&demo=admin#admin")],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=122"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=122"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=122"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=122"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=122"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=122"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=122"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=122"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=122"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=122"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=122"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=122"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=122"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=122"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=122"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=122"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=122"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=122"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=122"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=122"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=122"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=122"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=122"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=122"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=122"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=122"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=122"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=122"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=122"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=122"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=122"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=122"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=122"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=122"],
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
