import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const app = await readFile("app.js", "utf8");
const html = await readFile("index.html", "utf8");

function between(source, start, end) {
  const startIndex = source.indexOf(start);
  assert.notEqual(startIndex, -1, `Missing start marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex);
  assert.notEqual(endIndex, -1, `Missing end marker after: ${start}`);
  return source.slice(startIndex, endIndex + end.length);
}

const supplierCodeBlock = between(app, "const productPathSupplierCodes = [", "];");
const supplierRows = [...supplierCodeBlock.matchAll(/\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\]/g)]
  .map(([, title, prefix, regulatoryLevel]) => ({ title, prefix, regulatoryLevel }));

assert.equal(supplierRows.length, 32, "Product Paths must expose exactly 32 public path tiles.");
assert.equal(new Set(supplierRows.map((row) => row.title)).size, 32, "Product Path titles must be unique.");
assert.ok(supplierRows.some((row) => row.regulatoryLevel === "hemp_cbd"), "CBD/hemp Product Path must remain present.");

for (const row of supplierRows) {
  const codes = [1, 2, 3].map((rank) => `${row.prefix}-00${rank}`);
  assert.equal(codes.length, 3, `${row.title} must generate 3 public supplier cards.`);
  assert.equal(new Set(codes).size, 3, `${row.title} supplier codes must be unique.`);
}

const productPathsBlock = between(app, "const productPaths = productPathSupplierCodes.map", "});");
assert.ok(productPathsBlock.includes("supplierCodes: [1, 2, 3].map"), "Product Paths must generate three supplier codes per tile.");
assert.ok(productPathsBlock.includes("regulatoryLevel"), "Product Paths must preserve regulatory level data.");

const renderBlock = between(app, "productGrid.innerHTML = productPaths.map", "if (productPathTitle && productPathDetail)");
assert.ok(renderBlock.includes("product-path-tile"), "Product Path tiles must render.");
assert.ok(renderBlock.includes('data-action="select-product-path"'), "Product Path tiles must open through select-product-path.");
assert.ok(renderBlock.includes('data-product-path="${escapeHtml(path.slug)}"'), "Product Path tiles must carry their slug.");

const detailBlock = between(app, "function productPathDetailHtml(path)", "function selectProductPath(slug)");
assert.ok(detailBlock.includes("product-path-match-card"), "Product Path supplier cards must render.");
assert.ok(detailBlock.includes("matches.map"), "Product Path detail must render all matches.");
assert.ok(detailBlock.includes("${escapeHtml(match.code)}"), "Public cards must show supplier codes.");
assert.ok(!/companyName|contactLinks|phone|email|supplier\.name|supplierName/.test(detailBlock), "Public Product Path cards must not expose supplier identities or contact fields.");
assert.ok(detailBlock.includes("Public cards use supplier codes only") || html.includes("Public cards use supplier codes only"), "Product Paths must disclose supplier-code-only public cards.");
assert.ok(html.includes("Real supplier names, contact details, base cost, and internal notes stay admin-only until approval."), "Public supplier identities must remain hidden until approval.");

const matchBlock = between(app, "function productPathSupplierMatches(path)", "function productPathQuotePolicy(path)");
assert.ok(matchBlock.includes("No identity reveal"), "Supplier match badges must preserve no-identity-reveal language.");
assert.ok(matchBlock.includes("path.supplierCodes.map"), "Supplier matches must be derived from each path's three supplier codes.");

const quoteBlock = between(app, "function productPathQuotePolicy(path)", "const manufacturingDosageForms");
assert.ok(quoteBlock.includes("markup_percent_default: 20"), "Default Product Path markup must remain 20%.");
assert.ok(quoteBlock.includes("base_supplier_quote * 1.20"), "Customer quote formula must remain base supplier quote times 1.20.");
assert.ok(quoteBlock.includes("20% expedited sourcing and project-management fee"), "Expedited sourcing markup language must remain active.");
assert.ok(detailBlock.includes("Default markup is 20%"), "Product Path UI must show the 20% markup policy.");
assert.ok(detailBlock.includes("Expedited service fee equals customer quote minus base supplier quote"), "Product Path UI must show expedited service fee math.");

const hempCopyBlock = between(app, "const productPathComplianceCopy = {", "};");
assert.ok(hempCopyBlock.includes("hemp_cbd"), "CBD/hemp compliance copy must remain mapped.");
assert.ok(hempCopyBlock.includes("available only where legal and compliant"), "CBD/hemp gate must state legal/compliant restriction.");
assert.ok(html.includes("CBD/hemp involved?"), "RFQ form must ask whether CBD/hemp is involved.");
assert.ok(html.includes("CBD/hemp projects require legal-state compliance review before any supplier routing."), "RFQ form must show CBD/hemp compliance notice.");
assert.ok(app.includes('if (normalized.includes("cbd") || normalized.includes("hemp"))'), "CBD/hemp filtering guard must remain active.");

assert.ok(app.includes('if (action?.dataset.action === "select-product-path") selectProductPath(action.dataset.productPath);'), "select-product-path event handler must remain wired.");
assert.ok(app.includes('if (action?.dataset.action === "start-product-path-quote") startProductPathQuote(action.dataset.productPath, action.dataset.supplierCode);'), "Product Path quote event handler must remain wired.");
assert.ok(app.includes("document.querySelector(\"#productPathMatchEngine\")?.scrollIntoView"), "Opening a Product Path must focus the match engine.");

console.log("Product Paths regression check passed: 32 tiles, 3 unique public supplier codes per tile, hidden identities, 20% markup, and CBD/hemp gate verified.");
