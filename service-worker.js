const CACHE_NAME = "forge-mvp-v122";
const CORE_ASSETS = [
  "./",
  "./request-help/",
  "./post-job/",
  "./worker-signup/",
  "./business/",
  "./auto/",
  "./road-rescue/",
  "./photography/",
  "./photography/request/",
  "./photography/apply/",
  "./photography-videography/",
  "./northstar-creative/",
  "./forge/capital/",
  "./forge/flex/",
  "./partners/flex/",
  "./manufacturing-nutraceuticals/",
  "./personal-driver/",
  "./private-driver/",
  "./forge-payments/",
  "./merchant-services/",
  "./local-products/",
  "./makers/",
  "./building/",
  "./admin/building-leads/",
  "./forge-academy/",
  "./forge-academy/apply/",
  "./forge-academy/employers/",
  "./forge-academy/schools/",
  "./dashboard/career/",
  "./trade-pathways/",
  "./trade-pathways/apply/",
  "./dashboard/trade-pathways/",
  "./admin/forge-academy/",
  "./admin/trade-pathways/",
  "./projects/",
  "./admin/projects/",
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
