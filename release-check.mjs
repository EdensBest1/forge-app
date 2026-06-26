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
  ["manifest version", manifest.version === "v70"],
  ["html asset version", html.includes("styles.css?v=70") && html.includes("app.js?v=70")],
  ["service worker version", serviceWorker.includes("forge-mvp-v70")],
  ["admin entrypoint", manifest.entrypoints.admin.includes("?v=70&demo=admin#admin")],
  ["autos entrypoint", manifest.entrypoints.autos === "/auto?v=70"],
  ["photography entrypoint", manifest.entrypoints.photography === "/photography?v=70"],
  ["photography request entrypoint", manifest.entrypoints.photographyRequest === "/photography/request?v=70"],
  ["photography apply entrypoint", manifest.entrypoints.photographyApply === "/photography/apply?v=70"],
  ["photography videography alias", manifest.entrypoints.photographyVideography === "/photography-videography?v=70"],
  ["northstar creative entrypoint", manifest.entrypoints.northstarCreative === "/northstar-creative?v=70"],
  ["homebuilding entrypoint", manifest.entrypoints.homebuilding === "/homebuilding?v=70"],
  ["build tracker entrypoint", manifest.entrypoints.homebuildingTracker === "/homebuilding/tracker?v=70"],
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
