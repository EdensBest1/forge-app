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

const verticalBlock = between(app, 'id: "fencing_iron_gates"', "  },\n  {");

const requiredCategories = [
  "Fencing & Custom Iron Gates",
  "Fencing",
  "Fence Repair",
  "Custom Iron Gates",
  "Gate Repair",
  "Ranch / Farm Fencing",
  "Privacy Fencing",
  "Security Gates",
  "Welding Tie-In",
  "Driveway Gate",
  "Access Gate"
];

for (const category of requiredCategories) {
  assert.ok(verticalBlock.includes(`"${category}"`), `Fencing category surface missing: ${category}`);
}

for (const providerType of [
  "Fence Contractor",
  "Gate Installer",
  "Custom Iron Gate Fabricator",
  "Welding Contractor",
  "Ranch/Farm Fencing Crew",
  "Gate Repair Provider"
]) {
  assert.ok(verticalBlock.includes(`"${providerType}"`), `Provider surface missing: ${providerType}`);
}

for (const filter of [
  "Fence repair",
  "Custom iron gates",
  "Gate repair",
  "Ranch fencing",
  "Privacy fencing",
  "Security gates",
  "Welding",
  "Licensed",
  "Insured",
  "Measurements ready"
]) {
  assert.ok(verticalBlock.includes(`"${filter}"`), `Filter/search surface missing: ${filter}`);
}

for (const providerField of [
  'name: "servicesOffered"',
  'label: "Fencing and gate services offered"',
  'name: "weldingTieIn"',
  'label: "Welding/custom iron capability"',
  'name: "portfolioPhotos"'
]) {
  assert.ok(verticalBlock.includes(providerField), `Provider detail field missing: ${providerField}`);
}

for (const jobField of [
  'name: "fenceGateType"',
  'label: "Fence/gate type"',
  "Custom iron gate",
  "Gate repair",
  "Ranch/farm fencing",
  "Security gate",
  "Welding tie-in",
  'name: "linearFeet"',
  'name: "gateCount"',
  'name: "propertyLineKnown"',
  'name: "accessNotes"'
]) {
  assert.ok(verticalBlock.includes(jobField), `Lead/request field missing: ${jobField}`);
}

assert.ok(app.includes("serviceVerticals.push"), "Service verticals must feed the global service list.");
assert.ok(app.includes("serviceVerticalCategoryOptions = uniqueValues(serviceVerticals.flatMap((vertical) => vertical.categories))"), "Fencing categories must feed category surfaces.");
assert.ok(app.includes("const categories = uniqueValues"), "Global category list must be built.");
assert.ok(app.includes("...serviceVerticalCategoryOptions"), "Global category list must include service vertical categories.");
assert.ok(app.includes('"Fencing"') && app.includes('"Custom iron gates"'), "Browse/search category surfaces must include fencing and custom iron gates.");

assert.ok(app.includes('fillSelect("#jobCategory", ["", ...categories], "Select a category")'), "Job category selector must include service categories.");
assert.ok(app.includes('fillSelect("#workerTradeCategories", categories)'), "Worker trade categories must include fencing/custom iron gates.");
assert.ok(app.includes('fillSelect("#workerServiceVertical", [["", "General Forge worker"], ...serviceVerticals.map((vertical) => [vertical.id, vertical.title])])'), "Provider service vertical selector must include fencing/custom iron gates.");
assert.ok(app.includes('fillSelect("#providerVerticalFilter", ["All Provider Types", ...serviceVerticals.map((vertical) => [vertical.id, vertical.title])])'), "Provider filter selector must include fencing/custom iron gates.");
assert.ok(app.includes('fillSelect("#adminTradeCategoryFilter", ["All Categories", ...categories])'), "Admin category filter must include fencing/custom iron gates.");

const renderServiceBlock = between(app, "function renderServiceVerticals()", "function renderServiceJobFields()");
assert.ok(renderServiceBlock.includes("serviceVerticals.map"), "Service card surfaces must render all service verticals.");
assert.ok(renderServiceBlock.includes("vertical.categories.slice"), "Service cards must expose category chips.");
assert.ok(renderServiceBlock.includes('data-action="start-service-job"'), "Service cards must open lead/request flow.");
assert.ok(renderServiceBlock.includes('data-action="browse-service-jobs"'), "Service cards must open service management/job browsing.");
assert.ok(renderServiceBlock.includes('data-action="join-service-provider"'), "Service cards must open provider signup.");

const jobFieldsBlock = between(app, "function renderServiceJobFields()", "function renderProviderServiceFields()");
assert.ok(jobFieldsBlock.includes("vertical.jobFields.map"), "Service detail surfaces must render fencing job fields.");
assert.ok(jobFieldsBlock.includes("Detailed scope for bids"), "Service detail panel must remain active.");

const providerFieldsBlock = between(app, "function renderProviderServiceFields()", "function serviceFieldMarkup");
assert.ok(providerFieldsBlock.includes("vertical.providerTypes.map"), "Provider surfaces must render fencing provider types.");
assert.ok(providerFieldsBlock.includes("vertical.providerFields.map"), "Provider surfaces must render fencing provider fields.");
assert.ok(providerFieldsBlock.includes("vertical.tags.map"), "Provider surfaces must render fencing tags.");

const providerDirectoryBlock = between(app, "function renderProviderDirectory()", "function workerTrustProfile");
assert.ok(providerDirectoryBlock.includes("activeVertical?.filters"), "Provider filter/search surfaces must use active vertical filters.");
assert.ok(providerDirectoryBlock.includes("providerMatchesFilter"), "Provider directory must support fencing filters.");
assert.ok(providerDirectoryBlock.includes("providerSearchText"), "Provider directory must support fencing search.");

const flowBlock = between(app, "function startServiceJob(verticalId", "function browseServiceCategory(category)");
assert.ok(flowBlock.includes("setFieldValue(\"#jobCategory\", category)"), "Lead/request flow must set fencing category.");
assert.ok(flowBlock.includes("renderServiceJobFields()"), "Lead/request flow must render fencing service detail fields.");
assert.ok(flowBlock.includes("setFieldValue(\"#providerVerticalFilter\", vertical.id)"), "Service management flow must select fencing provider filter.");
assert.ok(flowBlock.includes("setFieldValue(\"#workerServiceVertical\", vertical.id)"), "Provider flow must select fencing vertical.");
assert.ok(flowBlock.includes("setSelectedValues(\"#workerTradeCategories\""), "Provider flow must set fencing trade categories.");

assert.ok(app.includes('vertical?.id === "fencing_iron_gates"'), "Service detail safety gate must include fencing/custom iron gates.");
assert.ok(app.includes("Fencing and custom iron gate work may require property-line"), "Fencing service detail safety copy must remain present.");
assert.ok(app.includes("serviceDetailRows(job.serviceDetails, vertical.jobFields)"), "Job detail view must render fencing service detail rows.");
assert.ok(app.includes('const serviceDetails = vertical ? collectServiceDetails("data-service-job-field") : {};'), "Job submission must collect fencing detail fields.");
assert.ok(app.includes("serviceVerticalTitle: vertical?.title"), "Lead/request records must store the fencing service vertical title.");
assert.ok(app.includes("adminTradeCategoryFilter"), "Admin/service management category filter must be present.");
assert.ok(html.includes("workerTradeCategories"), "Provider signup trade category field must exist in HTML.");
assert.ok(html.includes("providerVerticalFilter"), "Provider filter field must exist in HTML.");
assert.ok(html.includes("adminTradeCategoryFilter"), "Admin/service management category filter must exist in HTML.");

console.log("Fencing/custom iron gates coverage check passed across category, provider, filter/search, detail, lead/request, and admin/service management surfaces.");
