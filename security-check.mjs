import { access, readFile, readdir } from "node:fs/promises";

const textFiles = [
  "index.html",
  "app.js",
  "styles.css",
  "financial-readiness/index.html",
  "financial-readiness/financial-readiness.css",
  "service-worker.js",
  "netlify.toml",
  "vercel.json",
  "SUPABASE_SCHEMA.sql",
  "WEBHOOK_PAYLOADS.md",
  "ADMIN_AUTH_PLAN.md",
  "SECURITY_REVIEW_CHECKLIST.md"
];

const contents = Object.fromEntries(await Promise.all(textFiles.map(async (file) => [file, await readFile(file, "utf8")])));
const financialHtml = contents["financial-readiness/index.html"];
const files = await readdir(".");
const workflowPath = ".github/workflows/forge-checks.yml";
const workflowExists = await access(workflowPath).then(() => true, () => false);

const checks = [
  ["no exposed secret-looking keys", !/(sk_live_[a-z0-9]{16,}|AKIA[0-9A-Z]{16}|supabase_service_role\s*[:=]\s*['"][^'"]+)/i.test(Object.values(contents).join("\n"))],
  ["static CSP configured", contents["netlify.toml"].includes("Content-Security-Policy") && contents["vercel.json"].includes("Content-Security-Policy")],
  ["frame embedding blocked", contents["netlify.toml"].includes("frame-ancestors 'none'") && contents["vercel.json"].includes("X-Frame-Options")],
  ["permissions policy disables payment", contents["netlify.toml"].includes("payment=()") && contents["vercel.json"].includes("payment=()")],
  ["admin route guard present", contents["app.js"].includes("Log in as Forge Admin to open operator tools.") && contents["app.js"].includes("expireAdminSession")],
  ["legal page present", contents["index.html"].includes("Early Access Terms & Privacy") && contents["index.html"].includes("Do not enter passwords, payment cards")],
  ["public financial intake remains closed", financialHtml.includes("Public financial-document intake is not open") && !/<form\b/i.test(financialHtml)],
  ["credit commercialization remains blocked", financialHtml.includes("Forge does not currently sell or perform credit-repair services")],
  ["no password fields", !/type=\"password\"|type='password'/i.test(contents["index.html"])],
  ["no payment collection inputs", !/<input[^>]+(card|payment|bank|routing|ssn|social-security)/i.test(contents["index.html"])],
  ["supabase rls documented", contents["SUPABASE_SCHEMA.sql"].includes("enable row level security")],
  ["webhook payload safety documented", contents["WEBHOOK_PAYLOADS.md"].includes("Public Beta Safety")],
  ["admin auth plan present", contents["ADMIN_AUTH_PLAN.md"].includes("Minimum Public Beta Rule")],
  ["security checklist present", contents["SECURITY_REVIEW_CHECKLIST.md"].includes("Launch Decision")],
  ["deploy files present", files.includes("netlify.toml") && files.includes("vercel.json") && files.includes("robots.txt")],
  ["ci package scripts present", files.includes("package.json")],
  ["github checks workflow present", workflowExists],
  ["fresh cache version", contents["service-worker.js"].includes('FORGE_RELEASE = "133"')],
  ["html asset version", contents["index.html"].includes("styles.css?v=133") && contents["index.html"].includes("app.js?v=133")]
];

const failed = checks.filter(([, ok]) => !ok);

if (failed.length) {
  console.error("Forge security check failed.");
  for (const [label] of failed) console.error(`- ${label}`);
  process.exit(1);
}

console.log("Forge security check passed.");
