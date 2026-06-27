import path from "node:path";
import { BOARD_ID, PRIVATE_DIR, ensurePrivateDir, fetchMondayBoard, flattenItem, writeCsv, writeJson } from "./crm-common.mjs";

const token = process.env.MONDAY_API_TOKEN;

if (!token) {
  console.error("Missing credential: set MONDAY_API_TOKEN before exporting private Monday data.");
  console.error('Example: export MONDAY_API_TOKEN="PASTE_TOKEN_HERE"');
  process.exit(2);
}

ensurePrivateDir();
const board = await fetchMondayBoard(token);
const leads = board.items.map(flattenItem);

writeJson(path.join(PRIVATE_DIR, "all_leads.private.json"), {
  board_id: BOARD_ID,
  exported_at: new Date().toISOString(),
  private_data_notice: "Contains private CRM data. Do not commit.",
  leads
});

writeCsv(
  path.join(PRIVATE_DIR, "all_leads.private.csv"),
  leads.map((lead) => ({
    monday_item_id: lead.monday_item_id,
    item_name: lead.item_name,
    group_title: lead.group_title,
    columns_json: JSON.stringify(lead.columns)
  })),
  ["monday_item_id", "item_name", "group_title", "columns_json"]
);

console.log(`Exported ${leads.length} private leads to ${PRIVATE_DIR}.`);
