const FORGE_RELEASE = "133";
const CACHE_PREFIX = "forge-mvp-";
const CACHE_NAME = `${CACHE_PREFIX}v${FORGE_RELEASE}`;
const SHELL_URL = `/index.html?v=${FORGE_RELEASE}`;
const OFFLINE_URL = `/offline.html?v=${FORGE_RELEASE}`;
const CORE_ASSETS = [
  SHELL_URL,
  OFFLINE_URL,
  `/styles.css?v=${FORGE_RELEASE}`,
  `/app.js?v=${FORGE_RELEASE}`,
  `/csv-utils.js?v=${FORGE_RELEASE}`,
  `/lead-outbox.js?v=${FORGE_RELEASE}`,
  `/backup-recovery.js?v=${FORGE_RELEASE}`,
  `/nationwide-market.js?v=${FORGE_RELEASE}`,
  `/route-loader.js?v=${FORGE_RELEASE}`,
  "/manifest.webmanifest",
  "/assets/forge-icon.svg",
  "/assets/forge-hero-v133.avif",
  "/assets/forge-auto-services-hero-v133.avif",
  "/assets/forge-homebuilding-hero-v133.avif"
];

const PRIVATE_ROUTE_PATTERN = /^\/(?:api|admin|capture|reports|monetization-admin)(?:\/|$)/;

function isSameOrigin(url) {
  return url.origin === self.location.origin;
}

function isPrivateRoute(url) {
  return PRIVATE_ROUTE_PATTERN.test(url.pathname);
}

function isCurrentStaticAsset(url) {
  if (url.searchParams.get("v") !== FORGE_RELEASE) return false;
  return /\.(?:css|js)$/i.test(url.pathname);
}

function isCacheable(response, expectedType) {
  if (!response || !response.ok || response.type !== "basic") return false;
  const cacheControl = response.headers.get("cache-control") || "";
  const contentType = response.headers.get("content-type") || "";
  if (/\b(?:no-store|private)\b/i.test(cacheControl)) return false;
  return expectedType ? contentType.toLowerCase().includes(expectedType) : true;
}

async function installCoreAssets() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(CORE_ASSETS.map(async (url) => {
    const request = new Request(url, { cache: "reload", credentials: "same-origin" });
    const response = await fetch(request);
    const expectedType = url.includes("index.html") || url.includes("offline.html")
      ? "text/html"
      : url.includes(".css")
        ? "text/css"
        : url.includes(".js")
          ? "javascript"
          : "";
    if (!isCacheable(response, expectedType)) throw new Error(`Forge core asset rejected: ${url}`);
    await cache.put(request, response);
  }));
}

async function networkFirstNavigation(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (isCacheable(response, "text/html") && new URL(request.url).pathname === "/") {
      await cache.put(new Request(SHELL_URL), response.clone());
    }
    return response;
  } catch {
    return (await cache.match(new Request(SHELL_URL)))
      || (await cache.match(new Request(OFFLINE_URL)))
      || new Response("Forge is offline. Reconnect and try again.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" }
      });
  }
}

async function currentAsset(request) {
  const cached = await caches.match(request, { cacheName: CACHE_NAME });
  if (cached) return cached;
  const response = await fetch(request);
  const expectedType = request.url.includes(".css") ? "text/css" : "javascript";
  if (isCacheable(response, expectedType)) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("install", (event) => {
  event.waitUntil(installCoreAssets());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "FORGE_ACTIVATE_RELEASE" && event.data?.release === FORGE_RELEASE) {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (!isSameOrigin(url) || isPrivateRoute(url)) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (isCurrentStaticAsset(url)) {
    event.respondWith(currentAsset(request));
  }
});
