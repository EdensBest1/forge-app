import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [html, styles, app] = await Promise.all([
  readFile("index.html", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("app.js", "utf8")
]);

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "document IDs must be unique");
const idSet = new Set(ids);

for (const match of html.matchAll(/\baria-(?:labelledby|describedby|controls)=["']([^"']+)["']/gi)) {
  for (const id of match[1].trim().split(/\s+/)) assert.ok(idSet.has(id), "ARIA reference points to missing #" + id);
}

const controls = [...html.matchAll(/<(input|select|textarea)\b[^>]*>/gi)];
for (const match of controls) {
  const [tag, name] = match;
  if (/\btype=["']hidden["']/i.test(tag)) continue;
  const id = tag.match(/\bid=["']([^"']+)["']/i)?.[1] || "";
  const directName = /\baria-label(?:ledby)?=["'][^"']+["']/i.test(tag);
  const explicitLabel = id && html.includes('for="' + id + '"');
  const before = html.slice(0, match.index);
  const wrappedLabel = before.lastIndexOf("<label") > before.lastIndexOf("</label>");
  assert.ok(directName || explicitLabel || wrappedLabel, name + "#" + (id || "(no id)") + " needs an accessible name");
}

for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
  const attributes = match[1];
  const buttonText = match[2].replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/gi, " ").trim();
  assert.ok(/[a-z0-9]/i.test(buttonText) || /\baria-label=["'][^"']+["']/i.test(attributes), "symbol-only button needs an aria-label: " + (buttonText || "(empty)"));
}

assert.equal((html.match(/<main(?:\s|>)/gi) || []).length, 1, "the shell needs exactly one main landmark");
assert.match(html, /class="skip-link"/);
assert.match(styles, /:focus-visible/);
assert.match(styles, /prefers-reduced-motion:\s*reduce/);
assert.match(styles, /\.btn\.small\s*{[^}]*min-height:\s*44px/s);
assert.match(styles, /\.link-button\s*{[^}]*min-height:\s*44px/s);
assert.match(styles, /\.brand\s*{[^}]*min-height:\s*44px/s);
assert.match(app, /outboxRemovalReturnFocus/);
assert.match(app, /backupReviewTitle"\)\.focus/);
assert.match(app, /backupImport"\)\.focus/);
assert.match(app, /event\.key !== "Escape"/);

console.log("Forge accessibility contract passed: " + controls.length + " named controls, unique IDs, valid ARIA references, focus return, reduced motion, and 44px targets.");
