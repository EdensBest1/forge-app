export const FORGE_RELEASE = "v133";
export const FORGE_ORIGIN = "https://hireonforge.com";

const definitions = [];

function addRoute(route, lane, audience, primaryAction, status = "controlled-beta", options = {}) {
  definitions.push(Object.freeze({
    route,
    lane,
    audience,
    primaryAction,
    status,
    canonical: options.canonical || route,
    aliasOf: options.aliasOf || null,
    backPath: options.backPath || "/",
    notes: options.notes || ""
  }));
}

function addAlias(route, canonical, lane, audience, primaryAction, status = "controlled-beta", notes = "") {
  addRoute(route, lane, audience, primaryAction, status, { canonical, aliasOf: canonical, notes });
}

addRoute("/", "Core marketplace", "Customers, workers, and local businesses", "Choose a Forge path", "public");
addRoute("/forge", "Core marketplace", "Customers, workers, and local businesses", "Explore Forge services");
addRoute("/request-help", "Customer marketplace", "Customers", "Post a local request");
addAlias("/post-job", "/request-help", "Customer marketplace", "Customers", "Post a local request");
addRoute("/contractors", "Contractor marketplace", "General contractors, crews, specialty trades, and individual workers", "Create a nationwide contractor profile");
addRoute("/markets/medford-or", "Priority market", "Medford and Southern Oregon customers and contractors", "Post a Medford project or join as a contractor");
addRoute("/markets/los-angeles-ca", "Priority market", "Los Angeles customers and contractors", "Post a Los Angeles project or join as a contractor");
addRoute("/markets/new-york-ny", "Priority market", "New York City customers and contractors", "Post a New York project or join as a contractor");
addRoute("/marketplace", "Customer marketplace", "Customers", "Browse local opportunities and providers");
addRoute("/customer-dashboard", "Customer marketplace", "Returning customers", "Review locally saved job status");
addRoute("/worker-signup", "Worker marketplace", "Individual workers", "Create a worker profile");
addRoute("/forge/workers", "Worker marketplace", "Individual workers", "Choose a worker path");
addRoute("/forge/businesses", "Business ecosystem", "Companies and local businesses", "Choose a business path");
addRoute("/forge/services", "Core marketplace", "Customers", "Choose a service category");
addRoute("/forge/book", "Core marketplace", "Customers", "Start a service request");
addRoute("/pricing", "Core marketplace", "Customers, workers, and businesses", "Review current beta pricing boundaries");

addRoute("/go/post-job", "Campaign handoff", "Customers", "Continue to post a job");
addRoute("/go/worker", "Campaign handoff", "Workers", "Continue to worker signup");
addRoute("/go/business", "Campaign handoff", "Business owners", "Continue to business support");
addRoute("/go/contractor", "Campaign handoff", "Contractors", "Continue to business support");

addRoute("/auto", "Auto and transport", "Vehicle owners and buyers", "Choose auto help");
addRoute("/auto/request", "Auto and transport", "Vehicle owners and buyers", "Save an auto request");
addRoute("/forge/auto", "Auto and transport", "Vehicle buyers", "Save a vehicle request");
addRoute("/road-rescue", "Auto and transport", "Drivers", "Request non-emergency road help");
addRoute("/forge/mechanics", "Auto and transport", "Vehicle owners", "Choose mechanic help");
addRoute("/forge/mechanics/book", "Auto and transport", "Vehicle owners", "Save a mechanic request");
addRoute("/forge/mechanics/partner", "Auto and transport", "Mechanic shops", "Save partner interest");
addRoute("/forge/los-angeles/mechanics", "Auto and transport", "Los Angeles vehicle owners", "Choose mechanic help");
addRoute("/go/auto", "Campaign handoff", "Vehicle owners and buyers", "Continue to auto help");
addRoute("/personal-driver", "Driver services", "Customers", "Save driver-service interest");
addAlias("/private-driver", "/personal-driver", "Driver services", "Customers", "Save driver-service interest");

addRoute("/forge/barbers", "Personal services", "Barbershop customers", "Choose barbershop help");
addRoute("/forge/barbers/book", "Personal services", "Barbershop customers", "Save an appointment request");
addRoute("/forge/barbers/partner", "Personal services", "Barbershops", "Save partner interest");
addRoute("/forge/los-angeles/barbers", "Personal services", "Los Angeles barbershop customers", "Choose barbershop help");

addRoute("/photography", "Creative services", "Customers and local businesses", "Request a photo or video project");
addAlias("/photography-videography", "/photography", "Creative services", "Customers and local businesses", "Request a photo or video project");
addRoute("/photography/request", "Creative services", "Customers and local businesses", "Save a creative request");
addRoute("/photography/apply", "Creative services", "Creative providers", "Save provider interest");
addRoute("/northstar-creative", "NorthStar Creative Co.", "Local business owners", "Request a growth review");
addAlias("/business", "/northstar-creative", "NorthStar Creative Co.", "Local business owners", "Request a growth review");
addRoute("/forge/northstar", "NorthStar Creative Co.", "Local business owners", "Save growth-support interest");
addRoute("/go/creative", "Campaign handoff", "Customers and local businesses", "Continue to creative help");

addRoute("/forge/capital", "Forge Capital Desk", "Local business owners", "Save finance-readiness interest");
addAlias("/forge/flex", "/forge/capital", "Forge Capital Desk", "Local business owners", "Review inactive Flex readiness", "inactive", "Flex is a draft future-partner concept; no referral destination is active.");
addAlias("/partners/flex", "/forge/capital", "Forge Capital Desk", "Local business owners", "Review inactive Flex readiness", "inactive", "Flex is a draft future-partner concept; no referral destination is active.");
addRoute("/financial-readiness", "Financial readiness", "Individuals and business owners", "Review bookkeeping, tax-readiness, and official credit self-help resources", "public", { notes: "Information only. Public financial-document intake and paid credit repair are not offered." });
addRoute("/forge-payments", "Payments interest", "Local business owners", "Save merchant-services interest");
addAlias("/merchant-services", "/forge-payments", "Payments interest", "Local business owners", "Save merchant-services interest");

addRoute("/manufacturing-nutraceuticals", "Manufacturing and nutraceuticals", "Brands and product businesses", "Save manufacturing interest");
addAlias("/forge/manufacturing", "/manufacturing-nutraceuticals", "Manufacturing and nutraceuticals", "Brands and product businesses", "Save manufacturing interest");
addRoute("/go/manufacturing", "Campaign handoff", "Brands and product businesses", "Continue to manufacturing help");
addRoute("/suppliers/request-quote", "Supplier discovery", "Businesses", "Save a supplier quote request");
addRoute("/product-paths", "Supplier discovery", "Businesses", "Explore product paths");

addRoute("/local-products", "Local Products and Makers", "Local shoppers and makers", "Explore local-product interest");
addAlias("/makers", "/local-products", "Local Products and Makers", "Local shoppers and makers", "Explore local-product interest");

addRoute("/projects", "Projects", "Customers with larger projects", "Save a project request");
addRoute("/building", "Forge Building", "Owners, builders, and contractors", "Save a building request");
addRoute("/homebuilding", "Homebuilding", "Homeowners and developers", "Start homebuilding intake");
addRoute("/homebuilding/tracker", "Build Tracker", "Returning project customers", "Review synthetic project progress");

addRoute("/forge-academy", "Forge Academy and Career Plus", "Workers and students", "Choose a career pathway");
addRoute("/forge-academy/apply", "Forge Academy and Career Plus", "Workers and students", "Start a pathway application");
addRoute("/forge-academy/employers", "Forge Academy and Career Plus", "Employers", "Save employer interest");
addRoute("/forge-academy/schools", "Forge Academy and Career Plus", "Schools and training programs", "Save school interest");
addRoute("/dashboard/career", "Forge Academy and Career Plus", "Returning workers and students", "Review locally saved pathway status");
addRoute("/trade-pathways", "Admitly trade-pathways bridge", "Workers and students", "Explore trade pathways", "presentation-only");
addRoute("/trade-pathways/apply", "Admitly trade-pathways bridge", "Workers and students", "Start a trade-pathway packet", "presentation-only");
addRoute("/dashboard/trade-pathways", "Admitly trade-pathways bridge", "Returning workers and students", "Review synthetic pathway status", "presentation-only");
addRoute("/admitly", "Admitly presentation bridge", "Students, schools, and reviewers", "Explore the separate Admitly concept", "presentation-only");
addRoute("/admitly/apply", "Admitly presentation bridge", "Students", "Build a local application packet", "presentation-only");
addRoute("/admitly/athletes", "Admitly presentation bridge", "Student athletes", "Explore application support", "presentation-only");
addRoute("/admitly/barber-schools", "Admitly presentation bridge", "Barber-school applicants", "Explore application support", "presentation-only");
addRoute("/admitly/beauty-schools", "Admitly presentation bridge", "Beauty-school applicants", "Explore application support", "presentation-only");
addRoute("/admitly/college-weekly", "Admitly presentation bridge", "Presentation reviewers", "Review the concept", "presentation-only");
addRoute("/admitly/demo", "Admitly presentation bridge", "Presentation reviewers", "Review the separate Admitly demo", "presentation-only");
addRoute("/admitly/landscaping-schools", "Admitly presentation bridge", "Landscaping-program applicants", "Explore application support", "presentation-only");
addRoute("/admitly/schools", "Admitly presentation bridge", "Students", "Explore schools", "presentation-only");
addRoute("/admitly/stanford", "Admitly presentation bridge", "Presentation reviewers", "Review a non-affiliated discussion concept", "presentation-only", { notes: "No Stanford affiliation, endorsement, or approval is claimed." });
addRoute("/admitly/trade-schools", "Admitly presentation bridge", "Trade-school applicants", "Explore application support", "presentation-only");
addRoute("/forge/admitly", "Admitly presentation bridge", "Students and workers", "Explore the separate Admitly concept", "presentation-only");
addRoute("/forge/campus", "Career pathways", "Students", "Explore student opportunities");
addRoute("/forge/students", "Career pathways", "Students", "Explore student pathways");

addRoute("/forge/front-office", "Business ecosystem", "Local business owners", "Explore front-office support");
addRoute("/forge/partners", "Partner programs", "Potential business partners", "Review partner lanes");
addRoute("/forge/partners/apply", "Partner programs", "Potential business partners", "Save partner interest");

addRoute("/impact", "Impact and House of Heaven", "Community members", "Review impact intent", "presentation-only");
addRoute("/privacy", "Legal and safety", "All visitors", "Review privacy boundaries", "public");
addRoute("/terms", "Legal and safety", "All visitors", "Review beta terms", "public");
addRoute("/safety", "Legal and safety", "All visitors", "Review safety boundaries", "public");

export const routeDefinitions = Object.freeze(definitions);

export function normalizeRoute(route) {
  const value = String(route || "/").split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : "/";
}

export function isProtectedRoute(route) {
  return /^\/admin(?:\/|$)/.test(normalizeRoute(route)) || normalizeRoute(route) === "/monetization-admin";
}

export function resolveRouteMetadata(route) {
  const normalized = normalizeRoute(route);
  if (isProtectedRoute(normalized)) {
    return Object.freeze({
      route: normalized,
      lane: "Protected operations",
      audience: "Authorized Forge operators only",
      primaryAction: "Authenticate through a future approved operator system",
      status: "protected",
      canonical: normalized,
      aliasOf: null,
      backPath: "/",
      notes: "Unavailable on the public host while production operator authentication is not configured."
    });
  }
  return routeDefinitions.find((definition) => definition.route === normalized) || null;
}
