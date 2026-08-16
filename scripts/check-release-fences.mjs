import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const [packageJson, packageLock, html, app, middleware, vercel, capitalDocs, capitalEntrypoint] = await Promise.all([
  readFile("package.json", "utf8").then(JSON.parse),
  readFile("package-lock.json", "utf8").then(JSON.parse),
  readFile("index.html", "utf8"),
  readFile("app.js", "utf8"),
  readFile("middleware.ts", "utf8"),
  readFile("vercel.json", "utf8"),
  readFile("docs/forge-capital-desk-readme.md", "utf8"),
  readFile("api/forge/flex-leads.ts", "utf8")
]);

assert.equal(Object.keys(packageJson.dependencies || {}).length, 0, "v133 must not add runtime dependencies");
assert.equal(Object.keys(packageJson.devDependencies || {}).length, 0, "v133 must not add development dependencies");
assert.equal(Object.keys(packageLock.packages || {}).length, 1, "the lockfile must remain dependency-free");
assert.equal(packageLock.packages[""]?.version, packageJson.version, "package and lockfile versions must agree");
assert.doesNotMatch(html, /<script[^>]+src=["']https?:\/\//i, "public pages must not load third-party scripts");
assert.doesNotMatch(app, /mode:\s*["']no-cors["']/i, "opaque browser delivery is prohibited");
assert.doesNotMatch(html + app, /supabase(?:Url|Key)|createClient\s*\(/i, "the public client must not activate Supabase");
assert.match(capitalDocs, /inactive/i, "Capital Desk documentation must keep Flex inactive");
assert.match(app, /Reset blocked\. Export Backup JSON for all \$\{leadCount\} saved leads first\./, "lead reset must fail closed without a current backup");
assert.match(app, /DELETE \$\{leadCount\} LEADS/, "lead reset must require an exact typed destructive confirmation");
assert.match(capitalEntrypoint, /from\s+["']\.\/flex-leads\/route\.js["']/, "the Vercel function must import the emitted JavaScript route module");

for (const route of ["/admin", "/capture", "/reports", "/monetization-admin"]) {
  assert.ok(middleware.includes(`"${route}"`), `${route} must be locked by middleware`);
  assert.ok(vercel.includes(`${route}/:path*`), `${route} must receive private cache and robots headers`);
}

let staleHtmlPresent = true;
try {
  await access("index 2.html");
} catch {
  staleHtmlPresent = false;
}
assert.equal(staleHtmlPresent, false, "the stale v114 HTML snapshot must not remain a public route");

console.log("Forge release fences passed: zero dependencies, no opaque delivery, no public storage activation, protected operator routes, preserved leads, and inactive Flex.");
