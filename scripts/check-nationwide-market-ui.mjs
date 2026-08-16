import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const paths = {
  home: "index.html",
  contractor: "contractors/index.html",
  medford: "markets/medford-or/index.html",
  losAngeles: "markets/los-angeles-ca/index.html",
  newYork: "markets/new-york-ny/index.html"
};
const pages = Object.fromEntries(await Promise.all(Object.entries(paths).map(async ([key, file]) => [key, await readFile(file, "utf8")])));
const css = await readFile("market-pages.css", "utf8");
const app = await readFile("app.js", "utf8");
const registry = await readFile("config/forge-route-registry.mjs", "utf8");

for (const [key, html] of Object.entries(pages)) {
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1"/i, `${key} must be responsive`);
  assert.match(html, /<link rel="canonical" href="https:\/\/hireonforge\.com\//i, `${key} must have a production canonical`);
  assert.match(html, /market-pages\.css\?v=133|styles\.css\?v=133/i, `${key} must use a release-versioned stylesheet`);
  assert.match(html, /No payment|No payments|payments are not|do not create payment|payment[^.]{0,80}never automated/i, `${key} must disclose the payment boundary`);
  assert.doesNotMatch(html, /five[- ]star|\b\d+[,+]\s*(?:jobs|contractors|customers|reviews)|guaranteed (?:results|work|contractors|matches)|all contractors are (?:licensed|insured)|Forge verified/i, `${key} must not publish unsupported proof`);
}

assert.match(pages.home, /id="jobCity"/);
assert.match(pages.home, /id="jobState"/);
assert.match(pages.home, /id="jobZip"/);
assert.match(pages.home, /id="workerCity"/);
assert.match(pages.home, /id="workerState"/);
assert.match(pages.home, /id="workerZip"/);
assert.doesNotMatch(pages.home, /id="jobLocation"|id="workerArea"/);
assert.doesNotMatch(pages.home, /id="jobCity"[^>]*value="Medford"|id="workerCity"[^>]*value="Medford"/i);
assert.match(pages.home, /License and insurance details remain self-reported until reviewed/);

assert.match(pages.contractor, /Join Forge as a contractor/i);
assert.match(pages.contractor, /Information supplied/);
assert.match(pages.contractor, /License review pending/);
assert.match(pages.contractor, /Insurance review pending/);
assert.match(pages.contractor, /Forge reviewed/);

const marketContracts = [
  [pages.medford, "Medford", "Oregon", "medford-or"],
  [pages.losAngeles, "Los Angeles", "California", "los-angeles-ca"],
  [pages.newYork, "New York", "New York", "new-york-ny"]
];
for (const [html, city, state, slug] of marketContracts) {
  assert.match(html, new RegExp(city, "i"));
  assert.match(html, new RegExp(state, "i"));
  assert.match(html, new RegExp(`city=${encodeURIComponent(city).replace(/%20/g, "(?:%20|\\+)")}`));
  assert.match(html, new RegExp(`state=${state === "Oregon" ? "OR" : state === "California" ? "CA" : "NY"}`));
  assert.match(registry, new RegExp(`/markets/${slug}`));
}
assert.match(registry, /\/contractors/);

assert.match(app, /forgeNationwideMarket\.normalizeLocation/);
assert.match(app, /forgeNationwideMarket\.normalizeContractor/);
assert.match(app, /verificationClaimAllowed:\s*false/);
assert.match(css, /background:\s*#fff/i);
assert.match(css, /@media \(max-width:\s*620px\)/i);
assert.match(css, /min-height:\s*44px/i);

console.log("Forge nationwide UI contract passed: honest city pages, nationwide customer and contractor forms, trust labels, responsive white surfaces, and no unsupported marketplace proof.");
