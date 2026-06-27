import fs from "node:fs";
import path from "node:path";
import { BOARD_ID, WORKSPACE_ID, boardSchemaRows, fetchMondayBoard } from "./crm-common.mjs";

const token = process.env.MONDAY_API_TOKEN;

if (!token) {
  console.error("Missing credential: set MONDAY_API_TOKEN before reading Monday board data.");
  console.error('Example: export MONDAY_API_TOKEN="PASTE_TOKEN_HERE"');
  process.exit(2);
}

const board = await fetchMondayBoard(token);
const rows = boardSchemaRows(board);
const mapped = rows.filter((row) => row.likely_mapped_field !== "unmapped").map((row) => row.likely_mapped_field);
const expected = [
  "company_name",
  "owner_name",
  "license_holder_name",
  "license_number",
  "license_type",
  "license_status",
  "phone",
  "email",
  "address",
  "city",
  "county",
  "state",
  "website",
  "category",
  "notes",
  "source",
  "last_contacted",
  "consent_status_sms",
  "consent_status_email",
  "do_not_contact",
  "outreach_stage",
  "assigned_landing_page",
  "top_50_wave",
  "stitch_fit",
  "forge_fit",
  "northstar_fit"
];
const missing = expected.filter((field) => !mapped.includes(field));

const report = `# Monday Board Schema Report

- Board ID: ${BOARD_ID}
- Workspace ID: ${WORKSPACE_ID}
- Board name: ${board.name}
- Read-only mode: yes
- Raw item values written to public repo: no

## Groups

${(board.groups || []).map((group) => `- ${group.title} (${group.id})`).join("\n") || "- None returned"}

## Columns

| ID | Title | Type | Likely mapped field |
| --- | --- | --- | --- |
${rows.map((row) => `| ${row.id} | ${row.title} | ${row.type} | ${row.likely_mapped_field} |`).join("\n")}

## Missing Expected Logical Fields

${missing.map((field) => `- ${field}`).join("\n") || "- None detected"}
`;

fs.mkdirSync(path.join(process.cwd(), "docs", "crm"), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), "docs", "crm", "MONDAY_BOARD_SCHEMA_REPORT.md"), report);
console.log(`Wrote docs/crm/MONDAY_BOARD_SCHEMA_REPORT.md for board ${BOARD_ID}.`);
