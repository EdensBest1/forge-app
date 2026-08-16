import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";

const source = await readFile("csv-utils.js", "utf8");
const context = vm.createContext({});
vm.runInContext(source, context, { filename: "csv-utils.js" });
const csv = context.ForgeCsv;

for (const payload of ["=2+3", "+cmd|' /C calc'!A0", "-10+20", "@SUM(1,1)", " \t=HYPERLINK(\"https://example.test\")", "\r=1+1"]) {
  assert.match(csv.cell(payload), /^"'/, `formula-like value was not neutralized: ${JSON.stringify(payload)}`);
}
assert.equal(csv.cell('Synthetic "Builder"'), '"Synthetic ""Builder"""');
assert.equal(csv.cell("line one\nline two"), '"line one\nline two"');
assert.equal(csv.cell({ safe: "synthetic" }), '"{""safe"":""synthetic""}"');
assert.equal(csv.cell("541-555-0100"), '"541-555-0100"');

console.log("Forge export safety passed: spreadsheet formulas neutralized and quotes/newlines/objects escaped.");
