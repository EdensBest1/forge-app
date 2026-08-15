import { readFile } from "node:fs/promises";

const [app, styles, vercel] = await Promise.all([
  readFile("app.js", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("vercel.json", "utf8").then(JSON.parse)
]);

const rewrites = new Map((vercel.rewrites || []).map((rule) => [rule.source, rule.destination]));
const lockedRoute = "/api/forge/operator-locked";

const checks = [
  ["operator demos are local-only", app.includes('const LOCAL_OPERATOR_HOSTS = new Set(["localhost", "127.0.0.1", "::1"])')],
  ["private operator rendering requires a trusted host", app.includes('operatorDemoAllowed() && state.session.role === "admin" && !state.settings.publicMode')],
  ["admin query shortcut is discarded on public hosts", app.includes('requestedDemoAccount?.role === "admin" && !operatorDemoAllowed() ? null : requestedDemoAccount')],
  ["public admin query is removed from the address bar", app.includes('url.searchParams.delete("demo")')],
  ["fresh-browser state is forced to Public View", app.includes("function enforcePublicOperatorBoundary()") && app.includes("state.settings.publicMode = true")],
  ["browser-stored admin sessions are discarded", app.includes('const unsafeSession = state.session?.role === "admin"') && app.includes("state.session = structuredClone(seedState.session)")],
  ["public admin login is denied", app.includes('role === "admin" && !operatorDemoAllowed()')],
  ["public Operator View toggle is denied", app.includes('function togglePublicMode() {\n  if (!operatorDemoAllowed())')],
  ["logout returns to guest Public View", app.includes('function logout()') && app.includes('showToast("Logged out. Public View is on.")')],
  ["admin controls are hidden on public hosts", styles.includes('.operator-demo-locked [data-login-role="admin"]')],
  ["direct /admin fails closed at the server", rewrites.get("/admin") === lockedRoute],
  ["nested /admin routes fail closed at the server", rewrites.get("/admin/:path*") === lockedRoute],
  ["direct /capture fails closed at the server", rewrites.get("/capture") === lockedRoute],
  ["direct /reports fails closed at the server", rewrites.get("/reports") === lockedRoute]
];

const failed = checks.filter(([, ok]) => !ok);
if (failed.length) {
  console.error("Forge production admin-boundary check failed.");
  failed.forEach(([label]) => console.error(`- ${label}`));
  process.exit(1);
}

console.log(`Forge production admin-boundary check passed (${checks.length} checks).`);
