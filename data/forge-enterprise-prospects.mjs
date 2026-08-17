const CATEGORY = {
  "partner": {
    "segment": "Strategic channel / fintech partner",
    "demand": "Partnerships, distribution, operations",
    "pitch": "Forge can introduce qualified construction and wholesale business owners, propose a managed workforce pilot, and demonstrate the Forge/Nexus operating layer."
  },
  "facilities": {
    "segment": "Facilities, property, or hospitality operations",
    "demand": "Facilities maintenance, HVAC, electrical, janitorial, landscaping, turnover, and project labor",
    "pitch": "Offer a controlled regional pilot using verified providers, employer intake, matching, dispatch, proof of work, and enterprise reporting."
  },
  "construction": {
    "segment": "Construction, engineering, or infrastructure",
    "demand": "Qualified trades, project crews, field support, equipment operators, safety support, and specialty subcontractor capacity",
    "pitch": "Offer a project-specific workforce and specialty-provider pilot with app-based intake, verification, scheduling, backup coverage, and reporting."
  },
  "supply": {
    "segment": "Equipment, building products, or industrial distribution",
    "demand": "Branch, warehouse, delivery, field-service, installation, maintenance, and contractor-network support",
    "pitch": "Use Forge to organize local worker/provider capacity and route verified service demand through a managed app workflow."
  },
  "homebuilding": {
    "segment": "Homebuilding and development",
    "demand": "Trade partners, punch-list crews, warranty service, landscaping, cleaning, roofing, and turnover support",
    "pitch": "Offer a market-specific pilot for qualified trades and completion services with controlled matching, evidence, and reporting."
  },
  "environment_utility": {
    "segment": "Environmental services or utilities",
    "demand": "Field technicians, drivers, operators, maintenance, construction support, restoration, and emergency-response capacity",
    "pitch": "Propose only scoped, qualification-controlled workforce support with required licensing, insurance, safety, and procurement review."
  },
  "logistics": {
    "segment": "Logistics and fulfillment",
    "demand": "Warehouse, delivery, fleet, facilities, maintenance, loading, and field-operations support",
    "pitch": "Offer a local managed pilot for verified workers/providers, scheduling, exception handling, backup coverage, and performance reporting."
  }
};
const SEED = [
  ["Flex", "https://www.flex.one/contact", "partner", "National / Global", "Priority 1"],
  ["CBRE", "https://www.cbre.com/", "facilities", "National", "Priority 1"],
  ["JLL", "https://www.jll.com/", "facilities", "National", "Priority 1"],
  ["Cushman & Wakefield", "https://www.cushmanwakefield.com/", "facilities", "National", "Priority 1"],
  ["ABM Industries", "https://www.abm.com/", "facilities", "National", "Priority 1"],
  ["EMCOR Group", "https://www.emcorgroup.com/", "facilities", "National", "Priority 1"],
  ["BrightView", "https://www.brightview.com/", "facilities", "National", "Priority 1"],
  ["Comfort Systems USA", "https://comfortsystemsusa.com/", "facilities", "National", "Priority 1"],
  ["Quanta Services", "https://www.quantaservices.com/", "construction", "National", "Priority 1"],
  ["MasTec", "https://www.mastec.com/", "construction", "National", "Priority 1"],
  ["AECOM", "https://aecom.com/", "construction", "National / Global", "Priority 1"],
  ["Jacobs", "https://www.jacobs.com/", "construction", "National / Global", "Priority 1"],
  ["Turner Construction", "https://www.turnerconstruction.com/", "construction", "National", "Priority 1"],
  ["Skanska USA", "https://www.usa.skanska.com/", "construction", "National", "Priority 1"],
  ["DPR Construction", "https://www.dpr.com/", "construction", "National", "Priority 1"],
  ["Kiewit", "https://www.kiewit.com/", "construction", "National", "Priority 1"],
  ["Fluor", "https://www.fluor.com/", "construction", "National / Global", "Priority 2"],
  ["Bechtel", "https://www.bechtel.com/", "construction", "National / Global", "Priority 2"],
  ["Hensel Phelps", "https://www.henselphelps.com/", "construction", "National", "Priority 1"],
  ["McCarthy Building Companies", "https://www.mccarthy.com/", "construction", "National", "Priority 1"],
  ["Swinerton", "https://www.swinerton.com/", "construction", "West / National", "Priority 1"],
  ["PCL Construction", "https://www.pcl.com/", "construction", "National", "Priority 1"],
  ["Clark Construction", "https://www.clarkconstruction.com/", "construction", "National", "Priority 1"],
  ["Balfour Beatty US", "https://www.balfourbeattyus.com/", "construction", "National", "Priority 2"],
  ["Suffolk Construction", "https://www.suffolk.com/", "construction", "National", "Priority 2"],
  ["Tutor Perini", "https://www.tutorperini.com/", "construction", "National", "Priority 2"],
  ["Granite Construction", "https://www.graniteconstruction.com/", "construction", "West / National", "Priority 1"],
  ["Primoris Services", "https://www.prim.com/", "construction", "National", "Priority 1"],
  ["MYR Group", "https://www.myrgroup.com/", "construction", "National", "Priority 1"],
  ["IES Holdings", "https://www.ies-corporate.com/", "construction", "National", "Priority 2"],
  ["United Rentals", "https://www.unitedrentals.com/", "supply", "National", "Priority 1"],
  ["Sunbelt Rentals", "https://www.sunbeltrentals.com/", "supply", "National", "Priority 1"],
  ["Builders FirstSource", "https://www.bldr.com/", "supply", "National", "Priority 1"],
  ["Ferguson", "https://www.ferguson.com/", "supply", "National", "Priority 1"],
  ["Core & Main", "https://www.coreandmain.com/", "supply", "National", "Priority 2"],
  ["Grainger", "https://www.grainger.com/", "supply", "National", "Priority 2"],
  ["Fastenal", "https://www.fastenal.com/", "supply", "National", "Priority 2"],
  ["Prologis", "https://www.prologis.com/", "facilities", "National / Global", "Priority 1"],
  ["Irvine Company", "https://www.irvinecompany.com/", "facilities", "Orange County / California", "Priority 1"],
  ["Brookfield Properties", "https://www.brookfieldproperties.com/", "facilities", "National", "Priority 1"],
  ["Related California", "https://www.relatedcalifornia.com/", "facilities", "California", "Priority 1"],
  ["FivePoint Holdings", "https://www.fivepoint.com/", "facilities", "California", "Priority 1"],
  ["Lennar", "https://www.lennar.com/", "homebuilding", "National", "Priority 1"],
  ["KB Home", "https://www.kbhome.com/", "homebuilding", "National / California", "Priority 1"],
  ["D.R. Horton", "https://www.drhorton.com/", "homebuilding", "National", "Priority 1"],
  ["Toll Brothers", "https://www.tollbrothers.com/", "homebuilding", "National / California", "Priority 1"],
  ["Shea Homes", "https://www.sheahomes.com/", "homebuilding", "West / California", "Priority 1"],
  ["Waste Management", "https://www.wm.com/", "environment_utility", "National", "Priority 1"],
  ["Republic Services", "https://www.republicservices.com/", "environment_utility", "National", "Priority 1"],
  ["Clean Harbors", "https://www.cleanharbors.com/", "environment_utility", "National", "Priority 1"],
  ["Veolia North America", "https://www.veolianorthamerica.com/", "environment_utility", "National", "Priority 2"],
  ["Southern California Edison", "https://www.sce.com/", "environment_utility", "Southern California", "Priority 1"],
  ["Pacific Gas and Electric", "https://www.pge.com/", "environment_utility", "Northern California", "Priority 2"],
  ["Los Angeles Department of Water and Power", "https://www.ladwp.com/", "environment_utility", "Los Angeles", "Priority 1"],
  ["Southern California Gas Company", "https://www.socalgas.com/", "environment_utility", "Southern California", "Priority 1"],
  ["Marriott International", "https://www.marriott.com/", "facilities", "National", "Priority 2"],
  ["Hilton", "https://www.hilton.com/", "facilities", "National", "Priority 2"],
  ["Amazon Operations", "https://www.amazon.jobs/en/teams/operations-technology", "logistics", "National", "Priority 2"],
  ["UPS", "https://www.ups.com/", "logistics", "National", "Priority 2"],
  ["FedEx", "https://www.fedex.com/", "logistics", "National", "Priority 2"],
];

export const enterpriseProspects = SEED.map(([company, url, category, geography, priority], index) => {
  const defaults = CATEGORY[category];
  const flex = company === 'Flex';
  return {
    account_id: `ENT-${String(index + 1).padStart(3, '0')}`,
    company,
    segment: defaults.segment,
    geography,
    potential_workforce_or_service_demand: defaults.demand,
    forge_pitch_angle: defaults.pitch,
    official_source_url: url,
    public_business_email: flex ? 'support@flex.one' : '',
    public_business_phone: flex ? '(833) 353-9267' : '',
    contact_verification_status: flex ? 'Verified public contact' : 'Contact route to verify',
    priority,
    status: flex ? 'outreach_ready_pending_human_approval' : 'research'
  };
});

export const enterpriseProspectDatabase = {
  version: '1.0.0',
  campaign: 'Forge Enterprise Workforce + App Launch',
  created_at: '2026-08-17',
  record_count: enterpriseProspects.length,
  data_standard: 'Official public business sources only. Demand is a hypothesis, not a claim of a current opening. Do not infer private contact data.',
  accounts: enterpriseProspects
};
