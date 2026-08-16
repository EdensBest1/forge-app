import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const files = [
  "index.html",
  "app.js",
  "docs/forge-capital-desk-readme.md",
  "forge-flex-capital-desk-outreach.md",
  "docs/forge-flex-capital-desk-outreach.md"
];
const content = Object.fromEntries(await Promise.all(files.map(async (file) => [file, await readFile(file, "utf8")])));
const publicCopy = `${content["index.html"]}\n${content["app.js"]}`;
const capitalCopy = files.map((file) => content[file]).join("\n");

for (const prohibited of [
  /through our Flex referral channel/i,
  /send (?:you )?the official Flex referral link/i,
  /we can refer qualified business owners/i,
  /Flex handles eligibility, approval, onboarding, activation/i,
  /guaranteed (?:approval|funding|placement|safety|quality)/i,
  /Stanford (?:partner|endorsed|approved)\b/i
]) assert.doesNotMatch(capitalCopy, prohibited);

assert.doesNotMatch(content["index.html"], /\btrusted\b/i, "public HTML must not imply unproven provider trust");
assert.match(publicCopy, /Flex remains (?:a draft|an inactive|inactive)/i);
assert.match(publicCopy, /not a financing application/i);
assert.match(publicCopy, /not (?:been )?sent to Flex/i);
assert.match(publicCopy, /No Stanford endorsement, sponsorship, approval, or partnership is claimed/i);
assert.match(publicCopy, /Verified by Forge:[^<]*<\/strong>\s*Placeholder status only/i);
assert.match(publicCopy, /Triage signal only\. Provider-supplied information is not a verified license, insurance policy, background check, safety guarantee, quality guarantee, or outcome guarantee/i);
assert.match(publicCopy, /trustReviewStatus === "reviewed"/);

console.log("Forge copy-truth check passed: inactive partners, non-affiliation, local/delivered distinctions, and unproven-provider claims remain explicit.");
