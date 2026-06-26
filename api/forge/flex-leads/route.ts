type FlexLeadInput = {
  owner_name?: string;
  business_name?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  industry?: string;
  website?: string;
  years_in_business?: string;
  monthly_revenue_range?: string;
  monthly_spend_range?: string;
  employee_count?: string;
  primary_need?: string;
  interested_in_forge_job_leads?: boolean;
  interested_in_north_star_marketing?: boolean;
  interested_in_payment_processing?: boolean;
  interested_in_website_crm_automation?: boolean;
  consent_to_contact?: boolean;
  consent_to_receive_flex_referral?: boolean;
  referral_source?: string;
  notes?: string;
};

const requiredFields = [
  "owner_name",
  "business_name",
  "email",
  "industry",
  "consent_to_contact",
  "consent_to_receive_flex_referral"
] as const;

const forbiddenFieldPattern = /(ssn|social_security|bank_login|bank_password|account_number|routing_number|credit_score|financial_document|upload)/i;
const primaryNeedKeywords = ["credit", "cash-flow", "cash flow", "vendor payments", "ap", "payroll timing", "employee cards", "fuel", "equipment", "materials", "growth capital"];

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

function calculateLeadScore(lead: FlexLeadInput) {
  let score = 0;
  const spend = String(lead.monthly_spend_range || "").toLowerCase();
  const years = String(lead.years_in_business || "").toLowerCase();
  const employees = String(lead.employee_count || "").toLowerCase();
  const primaryNeed = String(lead.primary_need || "").toLowerCase();
  if (/\$10k|\$25k|\$50k|\+/.test(spend) && !/under/.test(spend)) score += 10;
  if (/1-2|3-5|5\+|10\+/.test(years)) score += 10;
  if (/2-5|6-20|21-50|51\+/.test(employees)) score += 10;
  if (primaryNeedKeywords.some((keyword) => primaryNeed.includes(keyword))) score += 10;
  if (lead.interested_in_forge_job_leads) score += 10;
  if (lead.interested_in_north_star_marketing) score += 10;
  if (lead.interested_in_payment_processing) score += 10;
  if (lead.interested_in_website_crm_automation) score += 10;
  return score;
}

async function postConfiguredWebhooks(payload: Record<string, unknown>) {
  const urls = [process.env.FORGE_GHL_WEBHOOK_URL, process.env.FORGE_ZAPIER_WEBHOOK_URL].filter(Boolean) as string[];
  await Promise.all(urls.map((url) => fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })));
}

export async function POST(request: Request) {
  const body = await request.json() as FlexLeadInput;
  const forbiddenKey = Object.keys(body).find((key) => forbiddenFieldPattern.test(key));
  if (forbiddenKey) {
    return json({ error: `Do not submit sensitive financial or identity data through Forge: ${forbiddenKey}` }, 400);
  }

  const missing = requiredFields.filter((field) => {
    const value = body[field];
    return typeof value === "boolean" ? value !== true : !String(value || "").trim();
  });
  if (missing.length) return json({ error: "Missing required fields", missing }, 400);

  const lead = {
    ...body,
    source: "forge_capital_desk",
    partner: "flex",
    lead_score: calculateLeadScore(body),
    status: "new"
  };
  const webhookPayload = {
    source: "forge_capital_desk",
    partner: "flex",
    owner_name: lead.owner_name,
    business_name: lead.business_name,
    email: lead.email,
    phone: lead.phone,
    industry: lead.industry,
    city: lead.city,
    state: lead.state,
    lead_score: lead.lead_score,
    primary_need: lead.primary_need,
    interested_in_forge_job_leads: Boolean(lead.interested_in_forge_job_leads),
    interested_in_north_star_marketing: Boolean(lead.interested_in_north_star_marketing),
    interested_in_payment_processing: Boolean(lead.interested_in_payment_processing),
    interested_in_website_crm_automation: Boolean(lead.interested_in_website_crm_automation),
    status: lead.status
  };

  await postConfiguredWebhooks(webhookPayload);

  return json({
    ok: true,
    lead,
    next: "Insert into public.forge_flex_leads from a server-owned Supabase client or Zapier action."
  }, 201);
}
