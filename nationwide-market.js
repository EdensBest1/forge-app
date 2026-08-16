(function initForgeNationwide(global) {
  "use strict";

  const VERSION = "forge.nationwide-market.v1";
  const TRUST_STATES = Object.freeze([
    "Information supplied",
    "Review pending",
    "License review pending",
    "Insurance review pending",
    "Forge reviewed",
    "Verification expired",
    "Suspended"
  ]);
  const JOB_STATES = Object.freeze([
    "Draft",
    "Saved on this device",
    "Receiving interest",
    "Quote received",
    "Revision requested",
    "Quote revised",
    "Customer review",
    "Canceled",
    "Disputed"
  ]);
  const US_STATES = Object.freeze([
    ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
    ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["DC", "District of Columbia"],
    ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"],
    ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"],
    ["ME", "Maine"], ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
    ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
    ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
    ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"], ["OR", "Oregon"],
    ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"], ["SD", "South Dakota"],
    ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"],
    ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"]
  ].map(([code, name]) => Object.freeze({ code, name })));
  const STATE_BY_CODE = new Map(US_STATES.map((state) => [state.code, state]));
  const STATE_CODE_BY_NAME = new Map(US_STATES.map((state) => [state.name.toUpperCase(), state.code]));
  const PRIORITY_MARKETS = Object.freeze([
    Object.freeze({
      slug: "medford-or",
      city: "Medford",
      state: "OR",
      region: "Medford and Southern Oregon",
      status: "Focused marketplace development",
      summary: "Local-first development for residential projects, repairs, remodeling, homebuilding, fencing, excavation, and specialty trades across Southern Oregon."
    }),
    Object.freeze({
      slug: "los-angeles-ca",
      city: "Los Angeles",
      state: "CA",
      region: "Los Angeles County",
      status: "Focused marketplace development",
      summary: "Focused intake for remodeling, commercial improvements, property maintenance, creative services, and licensed specialty-trade opportunities across Los Angeles."
    }),
    Object.freeze({
      slug: "new-york-ny",
      city: "New York",
      state: "NY",
      region: "New York City",
      status: "Focused marketplace development",
      summary: "Focused intake for apartment and commercial improvements, maintenance, project coordination, and licensed specialty-trade opportunities across New York City."
    })
  ]);

  const SECRET_KEYS = Object.freeze([
    "password", "secret", "token", "servicerole", "socialsecurity", "taxid", "bankaccount",
    "routingnumber", "cardnumber", "governmentid", "driverlicenseimage", "insurancedocument"
  ]);

  function clean(value, max = 240) {
    const text = String(value || "").trim();
    if (text.length > max) throw new Error(`Field exceeds ${max} characters.`);
    return text;
  }

  function rejectSensitive(value, path = "record") {
    if (!value || typeof value !== "object") return;
    for (const [key, child] of Object.entries(value)) {
      const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
      if (["__proto__", "constructor", "prototype"].includes(key) || normalizedKey === "ssn" || SECRET_KEYS.some((blocked) => normalizedKey.includes(blocked))) {
        throw new Error(`Sensitive field rejected at ${path}.${key}.`);
      }
      rejectSensitive(child, `${path}.${key}`);
    }
  }

  function stateCode(value) {
    const normalized = clean(value, 40).toUpperCase().replaceAll(".", "");
    const code = STATE_BY_CODE.has(normalized) ? normalized : STATE_CODE_BY_NAME.get(normalized);
    if (!code) throw new Error("Choose a valid U.S. state or Washington, D.C.");
    return code;
  }

  function zipCode(value) {
    const normalized = clean(value, 10);
    if (!/^\d{5}(?:-\d{4})?$/.test(normalized)) throw new Error("Enter a valid U.S. ZIP code.");
    return normalized;
  }

  function normalizeLocation(input = {}) {
    rejectSensitive(input);
    const city = clean(input.city, 100);
    if (!city) throw new Error("City is required.");
    const state = stateCode(input.state);
    const zip = zipCode(input.zip);
    const county = clean(input.county, 120);
    const priorityMarket = PRIORITY_MARKETS.find((market) => market.city.toLowerCase() === city.toLowerCase() && market.state === state) || null;
    return Object.freeze({
      city,
      state,
      zip,
      county,
      label: `${city}, ${state} ${zip}`,
      marketSlug: priorityMarket?.slug || "nationwide-intake",
      marketStatus: priorityMarket?.status || "Nationwide intake · coverage not yet confirmed"
    });
  }

  function list(value, max = 24) {
    const rows = Array.isArray(value) ? value : String(value || "").split(",");
    return Object.freeze([...new Set(rows.map((item) => clean(item, 120)).filter(Boolean))].slice(0, max));
  }

  function normalizeContractor(input = {}) {
    rejectSensitive(input);
    const location = normalizeLocation(input);
    const services = list(input.services || input.tradeCategories);
    if (!services.length) throw new Error("At least one service is required.");
    const radius = Number(input.serviceRadiusMiles);
    if (!Number.isInteger(radius) || radius < 1 || radius > 500) throw new Error("Service radius must be between 1 and 500 miles.");
    const profileType = clean(input.profileType || "Company / Crew", 60);
    const displayName = clean(input.displayName || input.businessName || input.name, 140);
    if (!displayName) throw new Error("A person or business display name is required.");
    const licenseNumber = clean(input.licenseNumber, 80);
    const licenseState = licenseNumber ? stateCode(input.licenseState || location.state) : "";
    const selfReportedLicenseStatus = clean(input.selfReportedLicenseStatus || "Not supplied", 80);
    const selfReportedInsuranceStatus = clean(input.selfReportedInsuranceStatus || "Not supplied", 80);
    const initialTrustState = licenseNumber && /current|active/i.test(selfReportedLicenseStatus)
      ? "License review pending"
      : /provided|current|active/i.test(selfReportedInsuranceStatus)
        ? "Insurance review pending"
        : "Information supplied";
    return Object.freeze({
      schema: VERSION,
      profileType,
      displayName,
      legalBusinessName: clean(input.legalBusinessName, 180),
      contactMethod: clean(input.contactMethod || "Forge Message", 60),
      location,
      serviceRadiusMiles: radius,
      primaryServiceArea: clean(input.primaryServiceArea || location.label, 180),
      additionalServiceAreas: list(input.additionalServiceAreas),
      travelAvailability: clean(input.travelAvailability || "Within stated service area", 120),
      remoteAvailability: clean(input.remoteAvailability || "On-site", 40),
      services,
      projectTypes: list(input.projectTypes),
      residentialCommercial: clean(input.residentialCommercial || "Residential and commercial", 60),
      licenseNumber,
      licenseState,
      selfReportedLicenseStatus,
      selfReportedInsuranceStatus,
      yearsExperience: Math.max(0, Math.min(80, Number(input.yearsExperience || 0))),
      crewSize: Math.max(1, Math.min(500, Number(input.crewSize || 1))),
      typicalProjectSize: clean(input.typicalProjectSize || "Estimate after review", 120),
      availability: clean(input.availability || "Availability supplied during follow-up", 160),
      portfolioLink: clean(input.portfolioLink, 500),
      consent: input.consent === true,
      privacyAcknowledged: input.privacyAcknowledged === true,
      trustState: initialTrustState,
      verificationClaimAllowed: false
    });
  }

  function normalizeJob(input = {}) {
    rejectSensitive(input);
    const location = normalizeLocation(input);
    const category = clean(input.category, 120);
    const title = clean(input.title, 160);
    if (!category || !title) throw new Error("Job title and category are required.");
    return Object.freeze({
      schema: VERSION,
      title,
      category,
      location,
      propertyType: clean(input.propertyType || "Other", 100),
      projectType: clean(input.projectType || "One-time Job", 100),
      scope: clean(input.scope || input.description, 1500),
      timing: clean(input.timing || "Flexible", 120),
      budgetRange: clean(input.budgetRange || "Estimate after review", 120),
      contactPreference: clean(input.contactPreference || "Forge Message", 60),
      onSite: input.onSite !== false,
      status: "Saved on this device",
      deliveryClaimAllowed: false,
      paymentAllowed: false,
      dispatchAllowed: false
    });
  }

  function compatible(contractor, job) {
    const serviceMatch = contractor.services.some((service) => {
      const left = service.toLowerCase();
      const right = `${job.category} ${job.title} ${job.projectType}`.toLowerCase();
      return right.includes(left) || left.includes(job.category.toLowerCase());
    });
    const exactCity = contractor.location.city.toLowerCase() === job.location.city.toLowerCase() && contractor.location.state === job.location.state;
    const stateMatch = contractor.location.state === job.location.state;
    const areaText = `${contractor.primaryServiceArea} ${contractor.additionalServiceAreas.join(" ")}`.toLowerCase();
    const namedArea = areaText.includes(job.location.city.toLowerCase()) || areaText.includes(job.location.zip);
    const remoteMatch = job.onSite === false && /remote|both/i.test(contractor.remoteAvailability);
    const geographyMatch = exactCity || namedArea || (stateMatch && contractor.serviceRadiusMiles >= 50) || remoteMatch;
    const eligible = Boolean(serviceMatch && geographyMatch && !["Suspended", "Verification expired"].includes(contractor.trustState));
    return Object.freeze({
      eligible,
      score: (serviceMatch ? 50 : 0) + (exactCity ? 30 : namedArea ? 24 : stateMatch ? 14 : remoteMatch ? 12 : 0) + (/available|open|now/i.test(contractor.availability) ? 8 : 0),
      serviceMatch,
      geographyMatch,
      trustState: contractor.trustState,
      reason: eligible ? "Category and stated service area are compatible; human review is still required." : "Category, service area, availability, or trust state does not currently match."
    });
  }

  function createJobWorkflow(snapshot) {
    const state = snapshot ? structuredClone(snapshot) : { schema: VERSION, jobs: {}, claims: {} };
    if (state.schema !== VERSION) throw new Error("Unsupported Forge nationwide workflow snapshot.");
    function change({ requestId, action, actor, expectedVersion, idempotencyKey, payload = {} }) {
      rejectSensitive(payload);
      if (!/^[a-zA-Z0-9:_-]{12,160}$/.test(String(idempotencyKey || ""))) throw new Error("Stable idempotency key required.");
      const fingerprint = JSON.stringify([requestId, action, actor, expectedVersion, payload]);
      const prior = state.claims[idempotencyKey];
      if (prior) {
        if (prior.fingerprint !== fingerprint) throw new Error("Idempotency conflict.");
        return Object.freeze({ ...structuredClone(prior.result), idempotentReplay: true });
      }
      let record = state.jobs[requestId];
      if (action === "create") {
        if (record) throw new Error("Request ID already exists.");
        record = { id: requestId, ...normalizeJob(payload), version: 1, quotes: [], history: [{ action: "created", actor: "customer", version: 1 }] };
        state.jobs[requestId] = record;
      } else {
        if (!record) throw new Error("Job is unavailable.");
        if (record.version !== expectedVersion) throw new Error("Version conflict. Reload before retrying.");
        const transitions = {
          express_interest: { roles: ["contractor"], from: ["Saved on this device", "Receiving interest"], to: "Receiving interest" },
          submit_quote: { roles: ["contractor"], from: ["Saved on this device", "Receiving interest", "Revision requested"], to: record.status === "Revision requested" ? "Quote revised" : "Quote received" },
          request_revision: { roles: ["customer"], from: ["Quote received", "Quote revised", "Customer review"], to: "Revision requested" },
          review_quote: { roles: ["customer"], from: ["Quote received", "Quote revised"], to: "Customer review" },
          cancel: { roles: ["customer"], from: ["Saved on this device", "Receiving interest", "Quote received", "Revision requested", "Quote revised", "Customer review"], to: "Canceled" },
          dispute: { roles: ["customer", "contractor"], from: ["Customer review"], to: "Disputed" }
        };
        const rule = transitions[action];
        if (!rule || !rule.roles.includes(actor) || !rule.from.includes(record.status)) throw new Error("State transition is not allowed.");
        if (action === "submit_quote") {
          const amount = Number(payload.amount);
          if (!Number.isFinite(amount) || amount <= 0) throw new Error("Quote amount must be greater than zero.");
          record.quotes.push({ amount, timeline: clean(payload.timeline, 120), scope: clean(payload.scope, 1000), revision: record.quotes.length + 1, contractorTrustState: clean(payload.contractorTrustState || "Information supplied", 80) });
        }
        record.status = rule.to;
        record.version += 1;
        record.history.push({ action, actor, version: record.version });
      }
      const result = { job: structuredClone(record), paymentAllowed: false, dispatchAllowed: false };
      state.claims[idempotencyKey] = { fingerprint, result: structuredClone(result) };
      return Object.freeze({ ...result, idempotentReplay: false });
    }
    return Object.freeze({ change, snapshot: () => structuredClone(state), get: (requestId) => structuredClone(state.jobs[requestId] || null) });
  }

  global.ForgeNationwide = Object.freeze({
    VERSION,
    TRUST_STATES,
    JOB_STATES,
    US_STATES,
    PRIORITY_MARKETS,
    stateCode,
    normalizeLocation,
    normalizeContractor,
    normalizeJob,
    compatible,
    createJobWorkflow
  });
})(globalThis);
