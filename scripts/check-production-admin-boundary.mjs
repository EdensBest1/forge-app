import { readFile } from "node:fs/promises";

const [app, styles, middleware] = await Promise.all([
  readFile("app.js", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("middleware.ts", "utf8")
]);

const checks = [
  ["operator demos are local-only", app.includes('const LOCAL_OPERATOR_HOSTS = new Set(["localhost", "127.0.0.1", "::1"])')],
  ["private operator rendering requires a trusted host", app.includes('operatorDemoAllowed() && state.session.role === "admin" && !state.settings.publicMode')],
  ["admin query shortcut is discarded on public hosts", app.includes('requestedDemoAccount?.role === "admin" && !operatorDemoAllowed() ? null : requestedDemoAccount')],
  ["public admin query is removed from the address bar", app.includes('url.searchParams.delete("demo")')],
  ["fresh-browser state is forced to Public View", app.includes("function enforcePublicOperatorBoundary()") && app.includes("state.settings.publicMode = true")],
  ["browser-stored admin sessions are discarded", app.includes('const unsafeSession = state.session?.role === "admin"') && app.includes("state.session = structuredClone(seedState.session)")],
  ["public admin login is denied", app.includes('role === "admin" && !operatorDemoAllowed()')],
  ["public Operator View toggle is denied", app.includes('function togglePublicMode() {\n  if (!operatorDemoAllowed())')],
  ["logout returns to guest Public View and clears demo shortcuts", app.includes('function logout()') && app.includes('clearDemoShortcut();') && app.includes('showToast("Logged out. Public View is on.")')],
  ["admin controls are hidden on public hosts", styles.includes('.operator-demo-locked [data-login-role="admin"]')],
  ["server middleware returns a closed 404", middleware.includes("status: 404") && middleware.includes("OPERATOR_AUTH_NOT_CONFIGURED")],
  ["direct /admin is intercepted before static files", middleware.includes('"/admin"')],
  ["nested /admin routes are intercepted before static files", middleware.includes('"/admin/:path*"')],
  ["direct /capture is intercepted before static files", middleware.includes('"/capture"')],
  ["direct /reports is intercepted before static files", middleware.includes('"/reports"')]
];

const failed = checks.filter(([, ok]) => !ok);
if (failed.length) {
  console.error("Forge production admin-boundary check failed.");
  failed.forEach(([label]) => console.error(`- ${label}`));
  process.exit(1);
}

console.log(`Forge production admin-boundary check passed (${checks.length} checks).`);
