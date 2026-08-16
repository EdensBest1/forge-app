import { readFile, access } from "node:fs/promises";

const manifest = JSON.parse(await readFile("release-manifest.json", "utf8"));
const html = await readFile("index.html", "utf8");
const app = await readFile("app.js", "utf8");
const outbox = await readFile("lead-outbox.js", "utf8");
const serviceWorker = await readFile("service-worker.js", "utf8");
const packageJson = JSON.parse(await readFile("package.json", "utf8"));

const checks = [];

for (const file of manifest.requiredFiles) {
  checks.push([`required file ${file}`, access(file).then(() => true).catch(() => false)]);
}

const resolvedChecks = await Promise.all(checks.map(async ([label, promise]) => [label, await promise]));

const staticChecks = [
  ["manifest version", manifest.version === "v132"],
  ["html asset version", html.includes("styles.css?v=132") && html.includes("app.js?v=132")],
  ["backup recovery runtime", html.includes("backup-recovery.js?v=132") && serviceWorker.includes("./backup-recovery.js")],
  ["lead outbox runtime", html.includes("lead-outbox.js?v=132") && serviceWorker.includes("./lead-outbox.js") && outbox.includes("forge.lead-outbox.v1")],
  ["honest delivery status", html.includes("Know what is saved here and what actually reached Forge") && app.includes("renderLeadOutbox")],
  ["staged backup recovery review", html.includes("Local recovery dry run") && html.includes('data-action="confirm-backup-import"') && app.includes("showBackupRecoveryPreview")],
  ["service worker version", serviceWorker.includes("forge-mvp-v132")],
  ["admin entrypoint is localhost-only", manifest.entrypoints.admin === "http://127.0.0.1:4174/?v=132&demo=admin#admin"],
  ["request help alias", manifest.entrypoints.requestHelp === "/request-help?v=132"],
  ["post job alias", manifest.entrypoints.postJobAlias === "/post-job?v=132"],
  ["worker signup alias", manifest.entrypoints.workerSignupAlias === "/worker-signup?v=132"],
  ["business help alias", manifest.entrypoints.businessHelp === "/business?v=132"],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=132"],
  ["road rescue entrypoint", manifest.entrypoints.roadRescue === "/road-rescue?v=132"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=132"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=132"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=132"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=132"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=132"],
  ["forge capital entrypoint", manifest.entrypoints.forgeCapital === "/forge/capital?v=132"],
  ["forge flex alias", manifest.entrypoints.forgeFlex === "/forge/flex?v=132"],
  ["partners flex alias", manifest.entrypoints.partnersFlex === "/partners/flex?v=132"],
  ["personal driver entrypoint", manifest.entrypoints.personalDriver === "/personal-driver?v=132"],
  ["private driver alias", manifest.entrypoints.privateDriver === "/private-driver?v=132"],
  ["forge payments entrypoint", manifest.entrypoints.forgePayments === "/forge-payments?v=132"],
  ["merchant services alias", manifest.entrypoints.merchantServices === "/merchant-services?v=132"],
  ["local products entrypoint", manifest.entrypoints.localProducts === "/local-products?v=132"],
  ["makers alias", manifest.entrypoints.makers === "/makers?v=132"],
  ["building entrypoint", manifest.entrypoints.building === "/building?v=132"],
  ["admin building leads entrypoint", manifest.entrypoints.adminBuildingLeads === "/admin/building-leads?v=132"],
  ["forge academy entrypoint", manifest.entrypoints.forgeAcademy === "/forge-academy?v=132"],
  ["forge academy apply entrypoint", manifest.entrypoints.forgeAcademyApply === "/forge-academy/apply?v=132"],
  ["forge academy employers entrypoint", manifest.entrypoints.forgeAcademyEmployers === "/forge-academy/employers?v=132"],
  ["forge academy schools entrypoint", manifest.entrypoints.forgeAcademySchools === "/forge-academy/schools?v=132"],
  ["forge career dashboard entrypoint", manifest.entrypoints.forgeCareerDashboard === "/dashboard/career?v=132"],
  ["admitly trade pathways entrypoint", manifest.entrypoints.admitlyTradePathways === "/trade-pathways?v=132"],
  ["admitly trade pathways apply entrypoint", manifest.entrypoints.admitlyTradePathwaysApply === "/trade-pathways/apply?v=132"],
  ["admitly trade pathways dashboard entrypoint", manifest.entrypoints.admitlyTradePathwaysDashboard === "/dashboard/trade-pathways?v=132"],
  ["admin forge academy entrypoint", manifest.entrypoints.adminForgeAcademy === "/admin/forge-academy?v=132"],
  ["admin trade pathways entrypoint", manifest.entrypoints.adminTradePathways === "/admin/trade-pathways?v=132"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=132"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=132"],
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
