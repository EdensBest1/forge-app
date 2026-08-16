import { readFile, access } from "node:fs/promises";

const manifest = JSON.parse(await readFile("release-manifest.json", "utf8"));
const html = await readFile("index.html", "utf8");
const app = await readFile("app.js", "utf8");
const serviceWorker = await readFile("service-worker.js", "utf8");
const packageJson = JSON.parse(await readFile("package.json", "utf8"));

const checks = [];

for (const file of manifest.requiredFiles) {
  checks.push([`required file ${file}`, access(file).then(() => true).catch(() => false)]);
}

const resolvedChecks = await Promise.all(checks.map(async ([label, promise]) => [label, await promise]));

const staticChecks = [
  ["manifest version", manifest.version === "v129"],
  ["html asset version", html.includes("styles.css?v=129") && html.includes("app.js?v=129")],
  ["backup recovery runtime", html.includes("backup-recovery.js?v=129") && serviceWorker.includes("./backup-recovery.js")],
  ["staged backup recovery review", html.includes("Local recovery dry run") && html.includes('data-action="confirm-backup-import"') && app.includes("showBackupRecoveryPreview")],
  ["service worker version", serviceWorker.includes("forge-mvp-v129")],
  ["admin entrypoint is localhost-only", manifest.entrypoints.admin === "http://127.0.0.1:4174/?v=129&demo=admin#admin"],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=129"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=129"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=129"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=129"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=129"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=129"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=129"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=129"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=129"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=129"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=129"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=129"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=129"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=129"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=129"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=129"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=129"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=129"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=129"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=129"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=129"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=129"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=129"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=129"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=129"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=129"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=129"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=129"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=129"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=129"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=129"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=129"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=129"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=129"],
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
