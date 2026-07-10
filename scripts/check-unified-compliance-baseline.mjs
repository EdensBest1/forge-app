import { readFile } from "node:fs/promises";

const baselinePath = "docs/compliance/UNIFIED_SOC2_ISO27001_GDPR_BASELINE.md";
const registerPath = "docs/compliance/CONTROL_REGISTER_STARTER.csv";

const [baseline, register, authPlan, securityChecklist] = await Promise.all([
  readFile(baselinePath, "utf8"),
  readFile(registerPath, "utf8"),
  readFile("ADMIN_AUTH_PLAN.md", "utf8"),
  readFile("SECURITY_REVIEW_CHECKLIST.md", "utf8")
]);

const requiredBaselinePhrases = [
  "SOC 2 is an independent CPA attestation report, not a certification.",
  "ISO/IEC 27001:2022",
  "GDPR is law, not a voluntary security standard.",
  "Non-negotiable production rule",
  "client-side demo guards are not accepted as production controls",
  "Admitly and student-data overlay",
  "Do not knowingly collect personal information from children under 13",
  "do not advertise “FERPA compliant” without an exact documented basis",
  "not sufficient to claim SOC 2, ISO/IEC 27001 certification, GDPR compliance, FERPA compliance, or production readiness",
  "Prohibited public claims"
];

const allowedStatuses = new Set([
  "not_started",
  "designed",
  "implemented_not_tested",
  "operating",
  "exception_open",
  "failed",
  "not_applicable_with_rationale"
]);

const requiredControlIds = new Set([
  "GOV-01",
  "GOV-02",
  "DAT-01",
  "IAM-01",
  "IAM-02",
  "CRY-01",
  "SDL-01",
  "LOG-01",
  "VUL-01",
  "TPR-01",
  "PRI-01",
  "MIN-01",
  "EDU-01",
  "MKT-01",
  "IR-01",
  "BCP-01",
  "HR-01",
  "AUD-01"
]);

const failures = [];

for (const phrase of requiredBaselinePhrases) {
  if (!baseline.includes(phrase)) failures.push(`baseline is missing required statement: ${phrase}`);
}

if (!authPlan.includes("client-side demo guard") || !authPlan.includes("That is not production authentication")) {
  failures.push("ADMIN_AUTH_PLAN.md must continue to state that the client-side demo guard is not production authentication");
}

for (const phrase of [
  "Confirm no passwords, payment cards, bank info, SSNs, or sensitive documents are collected.",
  "Confirm no admin route is exposed without authentication."
]) {
  if (!securityChecklist.includes(phrase)) failures.push(`SECURITY_REVIEW_CHECKLIST.md is missing: ${phrase}`);
}

const lines = register.trim().split(/\r?\n/);
const header = lines.shift()?.split(",") ?? [];
const idIndex = header.indexOf("control_id");
const statusIndex = header.indexOf("status");

if (idIndex < 0 || statusIndex < 0) failures.push("control register must include control_id and status columns");

const seen = new Set();
const statusById = new Map();
for (const [offset, line] of lines.entries()) {
  if (!line.trim()) continue;
  const columns = line.split(",");
  const controlId = columns[idIndex]?.trim();
  const status = columns[statusIndex]?.trim();
  const rowNumber = offset + 2;

  if (!controlId) failures.push(`row ${rowNumber} has no control_id`);
  if (seen.has(controlId)) failures.push(`duplicate control_id: ${controlId}`);
  seen.add(controlId);
  statusById.set(controlId, status);

  if (!allowedStatuses.has(status)) {
    failures.push(`row ${rowNumber} (${controlId || "unknown"}) has unsupported status: ${status || "blank"}`);
  }
}

for (const controlId of requiredControlIds) {
  if (!seen.has(controlId)) failures.push(`missing required control: ${controlId}`);
}

if (statusById.get("IAM-01") !== "failed") {
  failures.push("IAM-01 must remain failed until hosted server-side authentication and authorization evidence exists");
}

const publicFiles = ["index.html"];
const prohibitedClaims = [
  /\bSOC\s*2\s+certified\b/i,
  /\bISO(?:\/IEC)?\s*27001\s+certified\b/i,
  /\bGDPR\s+certified\b/i,
  /\bFERPA\s+(?:certified|compliant)\b/i,
  /\bCOPPA\s+(?:certified|compliant)\b/i,
  /\bfully\s+compliant\b/i,
  /\bguaranteed\s+compliant\b/i
];

for (const path of publicFiles) {
  let text;
  try {
    text = await readFile(path, "utf8");
  } catch {
    failures.push(`missing public-facing file required for claim scan: ${path}`);
    continue;
  }
  for (const pattern of prohibitedClaims) {
    if (pattern.test(text)) failures.push(`${path} contains prohibited unsupported compliance claim: ${pattern}`);
  }
}

if (failures.length) {
  console.error("Unified Forge/Admitly compliance-baseline integrity check failed.");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Unified Forge/Admitly compliance-baseline integrity check passed (${seen.size} controls).`);
console.log("This check protects the baseline and claim language; it is not a SOC 2 report, ISO certification, or legal-compliance determination.");
