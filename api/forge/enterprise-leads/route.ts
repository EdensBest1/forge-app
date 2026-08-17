declare const process: {
  env: Record<string, string | undefined>;
};

type EnterpriseLeadInput = {
  company_name?: string;
  contact_name?: string;
  business_email?: string;
  business_phone?: string;
  company_website?: string;
  city?: string;
  state?: string;
  service_area?: string;
  industry?: string;
  workforce_needs?: string;
  estimated_headcount?: string;
  start_timing?: string;
  project_duration?: string;
  shift_requirements?: string;
  licenses_or_certifications?: string;
  interested_in_forge_app_demo?: boolean;
  interested_in_managed_pilot?: boolean;
  interested_in_flex_intro?: boolean;
  consent_to_contact?: boolean;
  referral_source?: string;
  notes?: string;
  company_fax?: string;
};

const requiredFields = [
  "company_name",
  "contact_name",
  "business_email",
  "workforce_needs",
  "consent_to_contact"
] as const;

const forbiddenFieldPattern =
  /(ssn|social_security|bank_login|bank_password|account_number|routing_number|credit_card|driver_license_number|passport|medical_record|background_report|password|secret|api_key|token)/i;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    }
  });
}

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

function validBusinessEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 320;
}

function calculateLeadScore(lead: EnterpriseLeadInput) {
  let score = 0;
  const headcount = clean(lead.estimated_headcount).toLowerCase();
  const timing = clean(lead.start_timing).toLowerCase();
  const needs = clean(lead.workforce_needs).toLowerCase();
  const industries = [
    "construction",
    "facility",
    "property",
    "roof",
    "hvac",
    "electrical",
    "plumb",
    "logistics",
    "warehouse",
    "manufactur",
    "utility",
    "hospitality",
    "landscap"
  ];

  if (/10|11|20|21|50|51|100|\+/.test(headcount)) score += 20;
  if (/asap|immediate|this week|30 days|1 month/.test(timing)) score += 15;
  if (industries.some((keyword) => needs.includes(keyword))) score += 15;
  if (lead.interested_in_forge_app_demo) score += 15;
  if (lead.interested_in_managed_pilot) score += 20;
  if (lead.interested_in_flex_intro) score += 5;
  if (clean(lead.company_website)) score += 10;

  return Math.min(score, 100);
}

async function persistToSupabase(payload: Record<string, unknown>) {
  const baseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!baseUrl || !serviceRoleKey) {
    return { configured: false, persisted: false };
  }

  try {
    const response = await fetch(`${baseUrl}/rest/v1/forge_enterprise_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: "return=representation"
      },
      body: JSON.stringify(payload)
    });
    const text = await response.text();
    if (!response.ok) {
      return {
        configured: true,
        persisted: false,
        status: response.status,
        error: text.slice(0, 300)
      };
    }
    let rows: Array<Record<string, unknown>> = [];
    try {
      rows = JSON.parse(text) as Array<Record<string, unknown>>;
    } catch {}
    return {
      configured: true,
      persisted: true,
      id: rows[0]?.id || null
    };
  } catch (error) {
    return {
      configured: true,
      persisted: false,
      error: String((error as Error)?.message || error).slice(0, 300)
    };
  }
}

async function postConfiguredWebhooks(payload: Record<string, unknown>) {
  const urls = [
    process.env.FORGE_ENTERPRISE_GHL_WEBHOOK_URL,
    process.env.FORGE_ENTERPRISE_ZAPIER_WEBHOOK_URL,
    process.env.FORGE_GHL_WEBHOOK_URL,
    process.env.FORGE_ZAPIER_WEBHOOK_URL
  ].filter(Boolean) as string[];

  const results = await Promise.allSettled(
    [...new Set(urls)].map(async (url) => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`Webhook ${response.status}`);
      return response.status;
    })
  );

  return {
    configured: urls.length > 0,
    attempted: results.length,
    succeeded: results.filter((result) => result.status === "fulfilled").length,
    failed: results.filter((result) => result.status === "rejected").length
  };
}

export async function POST(request: Request) {
  let body: EnterpriseLeadInput;
  try {
    body = (await request.json()) as EnterpriseLeadInput;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  if (clean(body.company_fax)) {
    return json({ ok: true, accepted: false }, 202);
  }

  const forbiddenKey = Object.keys(body).find((key) => forbiddenFieldPattern.test(key));
  if (forbiddenKey) {
    return json(
      {
        error: `Do not submit sensitive personal, financial, credential, or background-check data through this form: ${forbiddenKey}`
      },
      400
    );
  }

  const missing = requiredFields.filter((field) => {
    const value = body[field];
    return typeof value === "boolean" ? value !== true : !clean(value);
  });
  if (missing.length) return json({ error: "Missing required fields", missing }, 400);

  const businessEmail = clean(body.business_email, 320).toLowerCase();
  if (!validBusinessEmail(businessEmail)) return json({ error: "Enter a valid business email" }, 400);

  const lead = {
    source: "forge_enterprise_workforce",
    company_name: clean(body.company_name, 200),
    contact_name: clean(body.contact_name, 160),
    business_email: businessEmail,
    business_phone: clean(body.business_phone, 80),
    company_website: clean(body.company_website, 500),
    city: clean(body.city, 120),
    state: clean(body.state, 80),
    service_area: clean(body.service_area, 500),
    industry: clean(body.industry, 160),
    workforce_needs: clean(body.workforce_needs, 4000),
    estimated_headcount: clean(body.estimated_headcount, 120),
    start_timing: clean(body.start_timing, 160),
    project_duration: clean(body.project_duration, 160),
    shift_requirements: clean(body.shift_requirements, 1000),
    licenses_or_certifications: clean(body.licenses_or_certifications, 1000),
    interested_in_forge_app_demo: Boolean(body.interested_in_forge_app_demo),
    interested_in_managed_pilot: Boolean(body.interested_in_managed_pilot),
    interested_in_flex_intro: Boolean(body.interested_in_flex_intro),
    consent_to_contact: body.consent_to_contact === true,
    referral_source: clean(body.referral_source, 200),
    notes: clean(body.notes, 4000),
    lead_score: calculateLeadScore(body),
    status: "new",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const [persistence, webhook] = await Promise.all([
    persistToSupabase(lead),
    postConfiguredWebhooks(lead)
  ]);
  const accepted = persistence.persisted || webhook.succeeded > 0;

  if (!accepted) {
    return json(
      {
        ok: false,
        accepted: false,
        error: "Forge enterprise intake storage is not currently available.",
        persistence: {
          configured: persistence.configured,
          persisted: persistence.persisted
        },
        webhook
      },
      503
    );
  }

  return json(
    {
      ok: true,
      accepted: true,
      lead: {
        company_name: lead.company_name,
        contact_name: lead.contact_name,
        business_email: "[stored securely]",
        lead_score: lead.lead_score,
        status: lead.status
      },
      persistence: {
        configured: persistence.configured,
        persisted: persistence.persisted,
        id: persistence.id || null
      },
      webhook,
      next:
        "Review the lead in the authorized CRM, verify scope and procurement requirements, and schedule a human-led discovery call. No worker availability, pricing, placement, financial approval, or partnership is guaranteed by form submission."
    },
    201
  );
}
