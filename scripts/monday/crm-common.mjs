import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const BOARD_ID = process.env.MONDAY_BOARD_ID || "6658307629";
export const WORKSPACE_ID = process.env.MONDAY_WORKSPACE_ID || "5099718";
export const PRIVATE_DIR = path.join(process.cwd(), "private_crm_exports", `monday_${BOARD_ID}`);
export const PRIMARY_LANDING_SITE = process.env.CRM_PRIMARY_LANDING_SITE || "forge";

export const logicalFieldPatterns = {
  company_name: ["company", "business", "organization", "account"],
  owner_name: ["owner", "principal", "contact name"],
  license_holder_name: ["license holder", "licensee"],
  license_number: ["license number", "license #", "license id", "olcc"],
  license_type: ["license type", "license category", "type"],
  license_status: ["license status", "status"],
  phone: ["phone", "mobile", "cell"],
  email: ["email", "e-mail"],
  address: ["address", "street"],
  city: ["city"],
  county: ["county"],
  state: ["state"],
  website: ["website", "site", "url"],
  category: ["category", "segment"],
  notes: ["notes", "note"],
  source: ["source"],
  last_contacted: ["last contacted", "last contact"],
  consent_status_sms: ["sms consent", "text consent"],
  consent_status_email: ["email consent"],
  do_not_contact: ["do not contact", "dnc", "suppression", "suppressed"],
  outreach_stage: ["outreach stage", "stage"],
  assigned_landing_page: ["assigned landing", "landing page"],
  public_lead_code: ["public lead code", "lead code"],
  top_50_wave: ["top 50", "wave"],
  stitch_fit: ["stitch fit"],
  forge_fit: ["forge fit"],
  northstar_fit: ["northstar fit", "north star fit"]
};

export function ensurePrivateDir() {
  fs.mkdirSync(PRIVATE_DIR, { recursive: true });
}

export function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

export function normalizeComparable(value) {
  return normalizeText(value).toLowerCase();
}

export function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

export function normalizeEmail(value) {
  return normalizeComparable(value);
}

export function normalizeCompany(value) {
  return normalizeComparable(value)
    .replace(/\b(llc|inc|corp|corporation|company|co|ltd)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function toCsv(rows, preferredHeaders = []) {
  const headers = Array.from(new Set([...preferredHeaders, ...rows.flatMap((row) => Object.keys(row))]));
  return [headers.join(","), ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","))].join("\n");
}

export function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

export function writeCsv(filePath, rows, headers = []) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${toCsv(rows, headers)}\n`);
}

export async function mondayGraphql(token, query, variables) {
  const response = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, variables })
  });
  const body = await response.json();
  if (!response.ok || body.errors) {
    throw new Error(JSON.stringify(body.errors || body, null, 2));
  }
  return body.data;
}

export async function fetchMondayBoard(token) {
  const firstQuery = `
    query BoardRead($boardIds: [ID!]) {
      boards(ids: $boardIds) {
        id
        name
        workspace_id
        groups { id title }
        columns { id title type settings_str }
        items_page(limit: 500) {
          cursor
          items {
            id
            name
            group { id title }
            column_values { id text value type column { id title type } }
          }
        }
      }
    }
  `;
  const pageQuery = `
    query BoardPage($cursor: String!) {
      next_items_page(limit: 500, cursor: $cursor) {
        cursor
        items {
          id
          name
          group { id title }
          column_values { id text value type column { id title type } }
        }
      }
    }
  `;

  const data = await mondayGraphql(token, firstQuery, { boardIds: [BOARD_ID] });
  const board = data.boards?.[0];
  if (!board) throw new Error(`Monday board ${BOARD_ID} was not returned.`);

  const items = [...(board.items_page?.items || [])];
  let cursor = board.items_page?.cursor;
  while (cursor) {
    const page = await mondayGraphql(token, pageQuery, { cursor });
    items.push(...(page.next_items_page?.items || []));
    cursor = page.next_items_page?.cursor;
  }

  return { ...board, items };
}

export function inferLogicalField(column) {
  const haystack = normalizeComparable(`${column.id} ${column.title}`);
  for (const [logical, patterns] of Object.entries(logicalFieldPatterns)) {
    if (patterns.some((pattern) => haystack.includes(pattern))) return logical;
  }
  return "";
}

export function boardSchemaRows(board) {
  return (board.columns || []).map((column) => ({
    id: column.id,
    title: column.title,
    type: column.type,
    likely_mapped_field: inferLogicalField(column) || "unmapped"
  }));
}

export function flattenItem(item) {
  const columns = {};
  for (const value of item.column_values || []) {
    const title = value.column?.title || value.id;
    columns[value.id] = value.text || "";
    columns[title] = value.text || "";
  }
  return {
    monday_item_id: item.id,
    item_name: item.name,
    group_id: item.group?.id || "",
    group_title: item.group?.title || "",
    columns
  };
}

export function getLogicalValue(lead, logical) {
  const patterns = logicalFieldPatterns[logical] || [];
  const entries = Object.entries(lead.columns || {});
  const match = entries.find(([key]) => {
    const normalized = normalizeComparable(key);
    return patterns.some((pattern) => normalized.includes(pattern));
  });
  return normalizeText(match?.[1] || "");
}

export function publicLeadCode(existing, stableInput = "") {
  if (existing) return existing;
  const seed = stableInput || crypto.randomUUID();
  if (process.env.LEAD_CODE_SECRET) {
    return `lead_${crypto.createHmac("sha256", process.env.LEAD_CODE_SECRET).update(seed).digest("hex").slice(0, 16)}`;
  }
  if (stableInput) {
    return `lead_${crypto.createHash("sha256").update(seed).digest("hex").slice(0, 16)}`;
  }
  return `lead_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;
}

export function stitchLandingForCategory(category) {
  const stitch = {
    "Farm / Producer": "https://stitchmarketplace.com/go/farm",
    Processor: "https://stitchmarketplace.com/go/processor",
    Lab: "https://stitchmarketplace.com/go/lab",
    "Dispensary / Retailer": "https://stitchmarketplace.com/go/dispensary",
    Wholesaler: "https://stitchmarketplace.com/go/wholesaler",
    "Logistics / Transport": "https://stitchmarketplace.com/go/logistics",
    "Broker / Admin Review": "https://stitchmarketplace.com/go/broker"
  };
  return stitch[category] || "https://stitchmarketplace.com/go/broker";
}

export function forgeLandingForLead(lead, category) {
  const text = normalizeComparable(`${category} ${getLogicalValue(lead, "license_type")} ${getLogicalValue(lead, "category")} ${getLogicalValue(lead, "notes")} ${lead.item_name}`);
  if (/(contractor|worker|recruit|hire|staff)/.test(text)) return "https://hireonforge.com/go/contractor";
  if (/(auto|transport|delivery|driver|fleet)/.test(text)) return "https://hireonforge.com/go/auto";
  if (/(manufactur|packag|processor|nutraceutical|production)/.test(text)) return "https://hireonforge.com/go/manufacturing";
  if (/(creative|marketing|website|brand|photo|video|seo|ads|crm)/.test(text)) return "https://hireonforge.com/go/creative";
  if (/(farm|producer|grow|harvest|labor|facility|cleanup)/.test(text)) return "https://hireonforge.com/go/business";
  return "https://hireonforge.com/go/post-job";
}

export function northstarLandingForLead() {
  return "https://hireonforge.com/go/creative";
}

export function trackingUrl(baseUrl, { leadCode, category, licenseType }) {
  const url = new URL(baseUrl);
  url.searchParams.set("lead_code", leadCode);
  url.searchParams.set("utm_source", "monday");
  url.searchParams.set("utm_campaign", "oregon_operator_wave_1");
  url.searchParams.set("segment", category);
  url.searchParams.set("license_type", licenseType || "");
  return url.toString();
}

export function primaryLandingUrl({ stitchUrl, forgeUrl, northstarUrl }) {
  if (PRIMARY_LANDING_SITE === "stitch") return stitchUrl;
  if (PRIMARY_LANDING_SITE === "northstar") return northstarUrl;
  return forgeUrl;
}

export function landingForCategory(category) {
  return stitchLandingForCategory(category);
}

export function scoreLead(lead) {
  const status = normalizeComparable(getLogicalValue(lead, "license_status"));
  const licenseType = getLogicalValue(lead, "license_type") || getLogicalValue(lead, "category");
  const phone = normalizePhone(getLogicalValue(lead, "phone"));
  const email = normalizeEmail(getLogicalValue(lead, "email"));
  const county = normalizeComparable(getLogicalValue(lead, "county"));
  const website = normalizeComparable(getLogicalValue(lead, "website"));
  const dnc = normalizeComparable(getLogicalValue(lead, "do_not_contact"));
  const notes = normalizeComparable(getLogicalValue(lead, "notes"));
  const recentlyContacted = normalizeComparable(getLogicalValue(lead, "last_contacted"));
  let score = 0;
  const flags = [];

  if (/(active|current|approved|licensed)/.test(status)) score += 25;
  if (phone.length === 10) score += 15;
  else flags.push("phone_review");
  if (email.includes("@")) score += 10;
  else flags.push("email_review");
  if (licenseType) score += 15;
  if (/(jackson|josephine|southern oregon)/.test(county)) score += 10;
  if (!website || /(none|missing|no website|facebook only)/.test(website)) score += 10;
  if (/(farm|producer|processor|facility|harvest|labor|cleanup)/.test(`${licenseType} ${notes}`.toLowerCase())) score += 10;
  if (/(producer|processor|dispensary|retail|wholesale|lab|logistics)/.test(`${licenseType} ${notes}`.toLowerCase())) score += 10;
  if (score >= 55) score += 15;
  if (/(yes|true|do not|dnc|suppressed)/.test(dnc)) {
    flags.push("do_not_contact");
    score = -999;
  }
  if (recentlyContacted) score -= 10;

  return { score, flags };
}

export function normalizedCategory(lead) {
  const text = normalizeComparable(`${getLogicalValue(lead, "license_type")} ${getLogicalValue(lead, "category")} ${lead.item_name}`);
  if (/(producer|farm|grow|cultivat)/.test(text)) return "Farm / Producer";
  if (/(processor|manufactur|extract|edible|pre-roll|preroll)/.test(text)) return "Processor";
  if (/(lab|testing)/.test(text)) return "Lab";
  if (/(dispensary|retail)/.test(text)) return "Dispensary / Retailer";
  if (/(wholesale|distributor)/.test(text)) return "Wholesaler";
  if (/(logistic|transport|delivery)/.test(text)) return "Logistics / Transport";
  if (/(broker|admin)/.test(text)) return "Broker / Admin Review";
  return "Unknown / Needs Review";
}
