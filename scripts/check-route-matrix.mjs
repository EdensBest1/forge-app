import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { FORGE_RELEASE, isProtectedRoute, resolveRouteMetadata, routeDefinitions } from "../config/forge-route-registry.mjs";

async function walk(directory = ".") {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(file));
    else if (entry.name === "index.html") files.push(file);
  }
  return files;
}

function routeForFile(file) {
  if (file === "index.html") return "/";
  return `/${path.dirname(file).split(path.sep).join("/")}`;
}

const files = (await walk()).sort();
const discoveredRoutes = new Set();
const statusCounts = new Map();

for (const file of files) {
  const route = routeForFile(file);
  const html = await readFile(file, "utf8");
  const metadata = resolveRouteMetadata(route);
  assert.ok(metadata, `${route} is missing from the Forge route registry`);
  discoveredRoutes.add(route);
  statusCounts.set(metadata.status, (statusCounts.get(metadata.status) || 0) + 1);

  assert.match(html, /<title>[^<]+<\/title>/i, `${route} needs a descriptive title`);
  assert.match(html, /<meta\s+name=["']viewport["']/i, `${route} needs a viewport declaration`);

  const loaderOwned = /(?:^|\/)route-loader\.js(?:\?[^"']*)?["']/i.test(html);
  if (loaderOwned) {
    assert.match(html, new RegExp(`route-loader\\.js\\?v=${FORGE_RELEASE.slice(1)}`), `${route} must request the current route loader`);
  } else {
    assert.match(html, /<main(?:\s|>)/i, `${route} needs a main landmark`);
    assert.match(html, /<h1(?:\s|>)/i, `${route} needs a page heading`);
  }

  if (isProtectedRoute(route)) {
    assert.equal(metadata.status, "protected", `${route} must remain protected`);
  } else {
    assert.doesNotMatch(html, /href=["']\/admin(?:\/|["'])/i, `${route} must not link visitors into operator routes`);
    assert.ok(metadata.audience && metadata.lane && metadata.primaryAction, `${route} needs complete ownership metadata`);
  }
}

for (const definition of routeDefinitions) {
  assert.ok(discoveredRoutes.has(definition.route), `${definition.route} is registered but has no route file`);
  assert.ok(["public", "controlled-beta", "presentation-only", "inactive"].includes(definition.status), `${definition.route} has an invalid public status`);
  if (definition.aliasOf) {
    assert.ok(resolveRouteMetadata(definition.aliasOf), `${definition.route} points to an unknown canonical route`);
    assert.notEqual(definition.aliasOf, definition.route, `${definition.route} cannot alias itself`);
  }
}

console.log(`Forge route matrix passed: ${files.length} routes (${[...statusCounts].map(([status, count]) => `${count} ${status}`).join(", ")}).`);
