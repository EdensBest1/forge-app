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
  ["manifest version", manifest.version === "v104"],
  ["html asset version", html.includes("styles.css?v=104") && html.includes("app.js?v=104")],
  ["service worker version", serviceWorker.includes("forge-mvp-v104")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=104&demo=admin#admin")],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=104"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=104"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=104"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=104"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=104"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=104"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=104"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=104"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=104"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=104"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=104"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=104"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=104"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=104"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=104"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=104"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=104"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=104"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=104"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=104"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=104"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=104"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=104"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=104"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=104"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=104"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=104"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=104"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=104"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=104"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=104"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=104"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=104"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=104"],
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
