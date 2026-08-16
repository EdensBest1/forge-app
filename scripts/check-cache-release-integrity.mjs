import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";

const RELEASE = "133";
const [workerSource, routeLoader, html, app, manifest] = await Promise.all([
  readFile("service-worker.js", "utf8"),
  readFile("route-loader.js", "utf8"),
  readFile("index.html", "utf8"),
  readFile("app.js", "utf8"),
  readFile("release-manifest.json", "utf8")
]);

assert.match(workerSource, new RegExp(`FORGE_RELEASE = ["']${RELEASE}["']`));
assert.match(routeLoader, new RegExp(`FORGE_RELEASE = ["']${RELEASE}["']`));
assert.match(html, new RegExp(`name=["']forge-release["'] content=["']v${RELEASE}["']`));
assert.match(html, new RegExp(`styles\\.css\\?v=${RELEASE}`));
assert.match(html, new RegExp(`app\\.js\\?v=${RELEASE}`));
assert.match(app, new RegExp(`PUBLIC_LINK_VERSION = ["']${RELEASE}["']`));
assert.equal(JSON.parse(manifest).version, `v${RELEASE}`);
assert.doesNotMatch(workerSource.match(/const CORE_ASSETS = \[[\s\S]*?\];/)?.[0] || "", /\/api|\/admin|\/capture|\/reports/);

class TestHeaders {
  constructor(values = {}) {
    this.values = new Map(Object.entries(values).map(([name, value]) => [name.toLowerCase(), String(value)]));
  }
  get(name) { return this.values.get(String(name).toLowerCase()) || null; }
}

class TestResponse {
  constructor(body = "", options = {}) {
    this.body = String(body);
    this.status = options.status ?? 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.type = options.type || "basic";
    this.headers = new TestHeaders(options.headers || {});
  }
  clone() { return new TestResponse(this.body, { status: this.status, type: this.type, headers: Object.fromEntries(this.headers.values) }); }
  async text() { return this.body; }
}

class TestRequest {
  constructor(input, options = {}) {
    const prior = typeof input === "string" ? null : input;
    this.url = new URL(typeof input === "string" ? input : input.url, "https://hireonforge.com").href;
    this.method = options.method || prior?.method || "GET";
    this.mode = options.mode || prior?.mode || "same-origin";
    this.credentials = options.credentials || prior?.credentials || "same-origin";
  }
}

function keyFor(request) {
  return typeof request === "string" ? new URL(request, "https://hireonforge.com").href : request.url;
}

const stores = new Map([
  ["forge-mvp-v131", new Map()],
  ["forge-mvp-v132", new Map()],
  ["unrelated-application-cache", new Map()]
]);
const writes = [];
const listeners = new Map();
let fetchMode = "ok";
let claimCount = 0;
let skipWaitingCount = 0;

function contentTypeFor(url) {
  if (/\.css(?:\?|$)/.test(url)) return "text/css; charset=utf-8";
  if (/\.js(?:\?|$)/.test(url)) return "text/javascript; charset=utf-8";
  if (/\.(?:avif|png|svg)(?:\?|$)/.test(url)) return "image/avif";
  if (/manifest/.test(url)) return "application/manifest+json";
  return "text/html; charset=utf-8";
}

async function mockFetch(request) {
  const url = keyFor(request);
  if (fetchMode === "offline") throw new TypeError("offline");
  if (fetchMode === "error") return new TestResponse("temporary error", { status: 503, headers: { "content-type": "text/html" } });
  return new TestResponse(url.includes("index.html") ? '<meta name="forge-release" content="v133">' : "asset", {
    headers: { "content-type": contentTypeFor(url), "cache-control": "public, max-age=60" }
  });
}

function cache(name) {
  if (!stores.has(name)) stores.set(name, new Map());
  const store = stores.get(name);
  return {
    async put(request, response) {
      const key = keyFor(request);
      writes.push({ name, key });
      store.set(key, response.clone());
    },
    async match(request) { return store.get(keyFor(request)); }
  };
}

const context = vm.createContext({
  URL,
  Request: TestRequest,
  Response: TestResponse,
  fetch: mockFetch,
  caches: {
    open: async (name) => cache(name),
    keys: async () => [...stores.keys()],
    delete: async (name) => stores.delete(name),
    match: async (request, options = {}) => {
      if (options.cacheName) return stores.get(options.cacheName)?.get(keyFor(request));
      for (const store of stores.values()) if (store.has(keyFor(request))) return store.get(keyFor(request));
      return undefined;
    }
  },
  self: {
    location: { origin: "https://hireonforge.com" },
    clients: { claim: async () => { claimCount += 1; } },
    skipWaiting: () => { skipWaitingCount += 1; },
    addEventListener(type, listener) { listeners.set(type, listener); }
  }
});

vm.runInContext(workerSource, context, { filename: "service-worker.js" });

async function dispatchLifecycle(type, data) {
  let promise = Promise.resolve();
  listeners.get(type)({ data, waitUntil(value) { promise = Promise.resolve(value); } });
  await promise;
}

async function dispatchFetch(url, options = {}) {
  let responsePromise = null;
  const request = new TestRequest(url, options);
  listeners.get("fetch")({ request, respondWith(value) { responsePromise = Promise.resolve(value); } });
  return responsePromise ? responsePromise : null;
}

await dispatchLifecycle("install");
assert.ok(stores.get("forge-mvp-v133").has("https://hireonforge.com/index.html?v=133"));
assert.ok(stores.get("forge-mvp-v133").has("https://hireonforge.com/offline.html?v=133"));
assert.equal(skipWaitingCount, 0, "an update must wait for an explicit user refresh");

await dispatchLifecycle("activate");
assert.equal(stores.has("forge-mvp-v131"), false);
assert.equal(stores.has("forge-mvp-v132"), false);
assert.equal(stores.has("unrelated-application-cache"), true);
assert.equal(claimCount, 1);

const writesBeforePrivate = writes.length;
assert.equal(await dispatchFetch("https://hireonforge.com/api/forge/flex-leads", { mode: "same-origin" }), null);
assert.equal(await dispatchFetch("https://hireonforge.com/admin", { mode: "navigate" }), null);
assert.equal(writes.length, writesBeforePrivate, "API and protected routes must bypass Forge caches");

assert.equal(await dispatchFetch("https://example.test/styles.css?v=133"), null, "cross-origin assets must bypass the cache");
assert.equal(await dispatchFetch("https://hireonforge.com/styles.css?v=132"), null, "old-version assets must bypass the current cache");
assert.equal((await dispatchFetch("https://hireonforge.com/styles.css?v=133")).status, 200);

fetchMode = "offline";
const offline = await dispatchFetch("https://hireonforge.com/request-help", { mode: "navigate" });
assert.equal(offline.status, 200);
assert.match(await offline.text(), /forge-release/);

fetchMode = "error";
const writesBeforeError = writes.length;
const errorResponse = await dispatchFetch("https://hireonforge.com/", { mode: "navigate" });
assert.equal(errorResponse.status, 503);
assert.equal(writes.length, writesBeforeError, "error responses must never enter the cache");

listeners.get("message")({ data: { type: "FORGE_ACTIVATE_RELEASE", release: "132" } });
assert.equal(skipWaitingCount, 0);
listeners.get("message")({ data: { type: "FORGE_ACTIVATE_RELEASE", release: "133" } });
assert.equal(skipWaitingCount, 1);

console.log("Forge cache/release integrity passed: safe upgrade, current assets, network-first navigation, offline shell, and private/API/error exclusion.");
