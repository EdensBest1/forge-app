const CACHE_NAME = "forge-mvp-v70";
const CORE_ASSETS = [
  "./",
  "./auto/",
  "./photography-videography/",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./route-loader.js",
  "./homebuilding/index.html",
  "./homebuilding/tracker/index.html",
  "./manifest.webmanifest",
  "./assets/forge-icon.svg",
  "./assets/forge-hero.png",
  "./assets/forge-auto-services-hero.png",
  "./assets/forge-homebuilding-hero.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});
