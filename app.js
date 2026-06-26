const STORAGE_KEY = "forge.wireframe.mvp.v1";

const CREATIVE_CATEGORY_VALUE = "photography_videography";
const CREATIVE_CATEGORY_LABEL = "Photography & Videography";
const CREATIVE_CATEGORY_SLUG = "photography-videography";
const NORTHSTAR_CATEGORY_VALUE = "northstar_creative";
const NORTHSTAR_OPERATIONS_CATEGORY_VALUE = "northstar_marketing_operations";
const NORTHSTAR_CATEGORY_LABEL = "NorthStar Creative Co.";
const yesNoOptions = ["No", "Yes"];
const serviceJobStatusLabels = ["Open for bids", "Bid submitted", "Provider selected", "Scheduled", "In progress", "Completed", "Cancelled"];
const serviceVerticals = [
  {
    id: "cleaning",
    title: "Home Cleaning & Airbnb Turnovers",
    shortTitle: "Cleaning",
    publicHeadline: "Need help turning your home into an Airbnb-ready property?",
    publicSubheadline: "Home cleaning, guest-ready resets, laundry, linens, restocking, and recurring short-term rental cleaning.",
    publicBody: "Forge helps homeowners, landlords, and property managers find reliable cleaning pros for Airbnb turnovers, guest-ready resets, laundry, linens, restocking, and recurring short-term rental cleaning.",
    ctas: ["Post an Airbnb Cleaning Job", "Find Cleaning Help", "Join as a Cleaning Provider"],
    categories: [
      "Home Cleaning & Airbnb Turnovers",
      "Residential Cleaning",
      "Airbnb / Short-Term Rental Turnover",
      "Deep Cleaning",
      "Move-In / Move-Out Cleaning",
      "Post-Construction Cleaning",
      "Office / Commercial Cleaning",
      "Rental Property Cleaning",
      "Garage / Shop Cleaning",
      "Window Cleaning",
      "Laundry / Linen Support",
      "Restocking / Supply Check",
      "Same-Day Turnover Cleaning"
    ],
    providerTypes: [
      "Independent Cleaner",
      "Cleaning Lady / Housekeeper",
      "Cleaning Business",
      "Airbnb Turnover Specialist",
      "Property Cleaning Crew",
      "Commercial Cleaner"
    ],
    tags: ["women-owned", "family-owned", "solo cleaner", "Airbnb specialist", "deep clean specialist", "commercial specialist"],
    filters: ["Airbnb turnover specialists", "Same-day available", "Laundry included", "Supplies included", "Recurring cleaning", "Move-out cleaning", "Deep cleaning", "Commercial cleaning", "Service area", "Starting price", "Women-owned", "Solo cleaner", "Family-owned"],
    checklist: [
      "Clean bathrooms",
      "Clean kitchen",
      "Change bedsheets",
      "Wash / replace towels",
      "Restock toilet paper, paper towels, soap, coffee, and basics",
      "Remove trash",
      "Check damages",
      "Take before/after photos",
      "Reset furniture",
      "Confirm guest-ready condition before check-in"
    ],
    providerFields: [
      { name: "businessName", label: "Business / profile name" },
      { name: "ownerName", label: "Owner / contact name" },
      { name: "serviceArea", label: "Service area" },
      { name: "cleaningTypes", label: "Type of cleaning offered", type: "textarea" },
      { name: "airbnbExperience", label: "Airbnb turnover experience", type: "select", options: yesNoOptions },
      { name: "yearsExperience", label: "Years of experience" },
      { name: "availableDays", label: "Available days" },
      { name: "sameDayAvailability", label: "Emergency / same-day availability", type: "select", options: yesNoOptions },
      { name: "teamSize", label: "Team size" },
      { name: "suppliesProvided", label: "Supplies provided", type: "select", options: yesNoOptions },
      { name: "laundryOffered", label: "Laundry / linens offered", type: "select", options: yesNoOptions },
      { name: "restockingOffered", label: "Restocking offered", type: "select", options: yesNoOptions },
      { name: "beforeAfterPhotos", label: "Before/after photos offered", type: "select", options: yesNoOptions },
      { name: "insuredBonded", label: "Insurance / bonded", type: "select", options: yesNoOptions },
      { name: "minimumPrice", label: "Starting price or minimum job price" },
      { name: "bio", label: "Bio / description", type: "textarea" },
      { name: "profilePhoto", label: "Upload photo or logo", type: "file", accept: "image/*" }
    ],
    jobFields: [
      { name: "propertyType", label: "Property type", type: "select", options: ["House", "Apartment", "Airbnb", "Office", "Rental", "Commercial", "Construction site", "Other"] },
      { name: "bedrooms", label: "Bedrooms" },
      { name: "bathrooms", label: "Bathrooms" },
      { name: "squareFootage", label: "Square footage" },
      { name: "cleaningType", label: "Cleaning type needed", type: "select", options: ["Residential Cleaning", "Airbnb / Short-Term Rental Turnover", "Deep Cleaning", "Move-In / Move-Out Cleaning", "Post-Construction Cleaning", "Office / Commercial Cleaning", "Rental Property Cleaning", "Same-Day Turnover Cleaning", "Other"] },
      { name: "recurring", label: "One-time or recurring", type: "select", options: ["One-time", "Recurring", "Not sure"] },
      { name: "desiredDate", label: "Desired date", type: "date" },
      { name: "desiredTimeWindow", label: "Desired time window" },
      { name: "airbnbDeadline", label: "Deadline / guest check-in time if Airbnb" },
      { name: "isAirbnbTurnover", label: "Is this an Airbnb turnover?", type: "select", options: yesNoOptions },
      { name: "laundryNeeded", label: "Laundry needed?", type: "select", options: yesNoOptions },
      { name: "linensNeeded", label: "Linens needed?", type: "select", options: yesNoOptions },
      { name: "restockingNeeded", label: "Restocking needed?", type: "select", options: yesNoOptions },
      { name: "trashRemovalNeeded", label: "Trash removal needed?", type: "select", options: yesNoOptions },
      { name: "dishesNeeded", label: "Dishes needed?", type: "select", options: yesNoOptions },
      { name: "fridgeCleaningNeeded", label: "Fridge cleaning needed?", type: "select", options: yesNoOptions },
      { name: "ovenCleaningNeeded", label: "Oven cleaning needed?", type: "select", options: yesNoOptions },
      { name: "windowsNeeded", label: "Windows needed?", type: "select", options: yesNoOptions },
      { name: "petsInHome", label: "Pets in home?", type: "select", options: yesNoOptions },
      { name: "customerSupplies", label: "Supplies provided by customer?", type: "select", options: yesNoOptions },
      { name: "additionalDetails", label: "Additional details", type: "textarea" }
    ]
  },
  {
    id: "hauling",
    title: "Dump Truck, Dump Runs & Hauling",
    shortTitle: "Hauling",
    publicHeadline: "Forge Dump Truck, Dump Runs & Hauling",
    publicSubheadline: "Post hauling jobs and get bids from local dump truck drivers, trailer owners, and cleanup crews.",
    publicBody: "Whether you need a dump run, gravel delivered, construction debris hauled, dirt moved, or a jobsite cleaned up, Forge helps connect customers with local hauling providers who can bid on the job.",
    ctas: ["Post a Hauling Job", "Find Dump Truck Help", "Join as a Hauling Provider"],
    categories: [
      "Dump Truck Services",
      "Dump Runs",
      "Junk Removal",
      "Construction Debris Hauling",
      "Yard Debris Hauling",
      "Dirt Hauling",
      "Gravel Delivery",
      "Rock Delivery",
      "Sand Delivery",
      "Topsoil Delivery",
      "Mulch / Bark Delivery",
      "Brush Removal",
      "Appliance Hauling",
      "Jobsite Cleanup",
      "Trailer Hauling",
      "Material Delivery"
    ],
    providerTypes: ["Dump Truck Operator", "Dump Run Provider", "Junk Removal Business", "Construction Debris Hauler", "Material Delivery Driver", "Trailer Hauling Provider", "Site Cleanup Crew"],
    tags: ["dump truck", "dump trailer", "same-day", "material delivery", "junk removal", "construction cleanup", "yard cleanup"],
    filters: ["Dump truck", "Dump trailer", "Same-day available", "Material delivery", "Junk removal", "Construction cleanup", "Yard cleanup", "Max load size", "Service area", "Minimum trip charge"],
    checklist: ["Confirm pickup access", "Confirm load type", "Confirm dump destination", "Confirm disposal fees", "Confirm number of loads", "Verify trailer or dump truck access"],
    providerFields: [
      { name: "businessName", label: "Business / profile name" },
      { name: "ownerName", label: "Owner / contact name" },
      { name: "serviceArea", label: "Service area" },
      { name: "truckType", label: "Truck type" },
      { name: "trailerAvailable", label: "Trailer available", type: "select", options: yesNoOptions },
      { name: "dumpTrailerAvailable", label: "Dump trailer available", type: "select", options: yesNoOptions },
      { name: "dumpTruckAvailable", label: "Dump truck available", type: "select", options: yesNoOptions },
      { name: "maxLoadSize", label: "Max load size" },
      { name: "materialDelivery", label: "Material delivery offered", type: "select", options: yesNoOptions },
      { name: "dumpRuns", label: "Dump runs offered", type: "select", options: yesNoOptions },
      { name: "constructionDebris", label: "Construction debris hauling", type: "select", options: yesNoOptions },
      { name: "yardDebris", label: "Yard debris hauling", type: "select", options: yesNoOptions },
      { name: "junkRemoval", label: "Junk removal", type: "select", options: yesNoOptions },
      { name: "applianceHauling", label: "Appliance hauling", type: "select", options: yesNoOptions },
      { name: "sameDayAvailability", label: "Same-day availability", type: "select", options: yesNoOptions },
      { name: "availableDays", label: "Available days" },
      { name: "minimumTripCharge", label: "Minimum trip charge" },
      { name: "pricePerLoad", label: "Price per load if applicable" },
      { name: "insurance", label: "Insurance", type: "select", options: yesNoOptions },
      { name: "licenseInfo", label: "License / registration info if applicable" },
      { name: "bio", label: "Bio / description", type: "textarea" },
      { name: "equipmentPhoto", label: "Upload truck/equipment photo", type: "file", accept: "image/*" }
    ],
    jobFields: [
      { name: "pickupLocation", label: "Pickup location" },
      { name: "dropoffLocation", label: "Drop-off location or dump destination if known" },
      { name: "haulingJobType", label: "Type of job", type: "select", options: ["Dump run", "Junk removal", "Construction debris", "Dirt hauling", "Gravel delivery", "Rock delivery", "Sand delivery", "Topsoil delivery", "Yard debris", "Appliance hauling", "Jobsite cleanup", "Other"] },
      { name: "materialType", label: "Material type" },
      { name: "loadSize", label: "Estimated load size" },
      { name: "numberOfLoads", label: "Number of loads if known" },
      { name: "heavyEquipmentNeeded", label: "Is heavy equipment needed?", type: "select", options: yesNoOptions },
      { name: "loadingHelpNeeded", label: "Is loading help needed?", type: "select", options: yesNoOptions },
      { name: "materialPiled", label: "Is the material already piled up?", type: "select", options: yesNoOptions },
      { name: "accessNotes", label: "Access notes", type: "textarea", placeholder: "Driveway, gate, steep road, narrow road, soft ground, trailer access" },
      { name: "desiredDate", label: "Desired date", type: "date" },
      { name: "desiredTimeWindow", label: "Desired time window" },
      { name: "urgencyDetail", label: "Urgency", type: "select", options: ["Flexible", "This week", "Same-day", "Emergency"] },
      { name: "additionalDetails", label: "Additional details", type: "textarea" }
    ]
  },
  {
    id: "asphalt_concrete",
    title: "Asphalt, Concrete, Driveways & Pavement",
    shortTitle: "Concrete & Asphalt",
    publicHeadline: "Forge Asphalt, Concrete, Driveways & Pavement",
    publicSubheadline: "Get bids from local crews for driveways, slabs, pavement repairs, sealcoating, and concrete work.",
    publicBody: "Forge helps homeowners, businesses, landlords, and property owners post asphalt, concrete, driveway, and pavement jobs so local contractors can bid based on the real scope and dollar value of the work.",
    ctas: ["Post a Driveway or Concrete Job", "Find Asphalt & Concrete Help", "Join as a Concrete or Asphalt Provider"],
    categories: ["Asphalt", "Concrete", "Driveways", "Pavement", "Parking Pads", "Concrete Pads", "Sidewalks", "Walkways", "Driveway Repair", "Asphalt Patch", "Sealcoating", "Grading for Driveways", "Gravel Driveways", "Concrete Removal", "Asphalt Removal", "Small Slabs", "Curbs", "Drainage Around Driveways"],
    providerTypes: ["Concrete Contractor", "Asphalt Contractor", "Driveway Contractor", "Pavement Repair Provider", "Sealcoating Provider", "Gravel Driveway Provider", "Concrete Removal Crew", "Small Slab Contractor"],
    tags: ["concrete", "asphalt", "driveway", "sealcoating", "pavement repair", "gravel driveway", "drainage", "demo"],
    filters: ["Concrete", "Asphalt", "Driveways", "Sealcoating", "Gravel driveway", "Pavement repair", "Demo/removal", "Drainage", "Licensed", "Insured", "Service area", "Minimum job price"],
    checklist: ["Confirm dimensions", "Confirm current surface", "Confirm base prep", "Confirm drainage", "Confirm demo/removal", "Confirm access and traffic needs"],
    providerFields: [
      { name: "businessName", label: "Business / profile name" },
      { name: "ownerName", label: "Owner / contact name" },
      { name: "serviceArea", label: "Service area" },
      { name: "servicesOffered", label: "Services offered", type: "textarea" },
      { name: "yearsExperience", label: "Years of experience" },
      { name: "residentialWork", label: "Residential work", type: "select", options: yesNoOptions },
      { name: "commercialWork", label: "Commercial work", type: "select", options: yesNoOptions },
      { name: "drivewayWork", label: "Driveway work", type: "select", options: yesNoOptions },
      { name: "asphaltWork", label: "Asphalt work", type: "select", options: yesNoOptions },
      { name: "concreteWork", label: "Concrete work", type: "select", options: yesNoOptions },
      { name: "gravelDrivewayWork", label: "Gravel driveway work", type: "select", options: yesNoOptions },
      { name: "sealcoating", label: "Sealcoating offered", type: "select", options: yesNoOptions },
      { name: "demoRemoval", label: "Demo/removal offered", type: "select", options: yesNoOptions },
      { name: "gradingPrep", label: "Grading/prep offered", type: "select", options: yesNoOptions },
      { name: "drainageWork", label: "Drainage work offered", type: "select", options: yesNoOptions },
      { name: "equipmentAvailable", label: "Equipment available", type: "textarea" },
      { name: "crewSize", label: "Crew size" },
      { name: "minimumJobPrice", label: "Minimum job price" },
      { name: "licenseInfo", label: "License info if applicable" },
      { name: "insurance", label: "Insurance", type: "select", options: yesNoOptions },
      { name: "bonded", label: "Bonded", type: "select", options: yesNoOptions },
      { name: "portfolioPhotos", label: "Portfolio / past project photos", type: "file", accept: "image/*" },
      { name: "bio", label: "Bio / description", type: "textarea" }
    ],
    jobFields: [
      { name: "propertyType", label: "Property type", type: "select", options: ["Residential", "Commercial", "Rental", "Farm", "Shop", "Other"] },
      { name: "serviceNeeded", label: "Service needed", type: "select", options: ["Asphalt", "Concrete", "Driveway", "Pavement repair", "Sealcoating", "Gravel driveway", "Sidewalk", "Slab", "Patio", "Removal", "Drainage", "Other"] },
      { name: "dimensions", label: "Approximate dimensions" },
      { name: "squareFootage", label: "Square footage if known" },
      { name: "currentSurface", label: "Current surface", type: "select", options: ["Dirt", "Gravel", "Asphalt", "Concrete", "Broken concrete", "Grass", "Other"] },
      { name: "finishedSurface", label: "Desired finished surface" },
      { name: "removalNeeded", label: "Is removal/demo needed?", type: "select", options: yesNoOptions },
      { name: "gradingNeeded", label: "Is grading/prep needed?", type: "select", options: yesNoOptions },
      { name: "drainageNeeded", label: "Is drainage needed?", type: "select", options: yesNoOptions },
      { name: "trafficType", label: "Vehicle traffic type", type: "select", options: ["Cars", "Trucks", "RV", "Trailers", "Heavy equipment"] },
      { name: "desiredDate", label: "Desired date", type: "date" },
      { name: "additionalDetails", label: "Additional details", type: "textarea" }
    ]
  },
  {
    id: "masonry_pavers",
    title: "Stonework, Masonry, Pavers & Hardscaping",
    shortTitle: "Masonry & Pavers",
    publicHeadline: "Forge Stonework, Masonry, Pavers & Hardscaping",
    publicSubheadline: "Find local crews for pavers, retaining walls, patios, walkways, stonework, brick, block, and hardscape projects.",
    publicBody: "Forge helps property owners post stonework, masonry, paver, and hardscaping jobs so skilled local providers can bid on real projects with clear scope, photos, budget, and timing.",
    ctas: ["Post a Stonework or Paver Job", "Find Masonry Help", "Join as a Hardscape Provider"],
    categories: ["Stonework", "Masonry", "Pavers", "Hardscaping", "Retaining Walls", "Patio Pavers", "Walkway Pavers", "Fire Pits", "Outdoor Steps", "Brick Work", "Block Work", "Rock Walls", "Decorative Stone", "Landscape Borders", "Drainage Stone", "Gravel Paths"],
    providerTypes: ["Masonry Contractor", "Stonework Specialist", "Paver Installer", "Hardscape Contractor", "Retaining Wall Builder", "Patio / Walkway Installer", "Brick / Block Contractor"],
    tags: ["masonry", "pavers", "stonework", "retaining walls", "patios", "walkways", "hardscaping", "brick", "block"],
    filters: ["Pavers", "Stonework", "Masonry", "Retaining walls", "Patios", "Walkways", "Brick/block", "Hardscaping", "Drainage", "Licensed", "Insured", "Service area", "Minimum job price"],
    checklist: ["Confirm material", "Confirm dimensions", "Confirm base prep", "Confirm drainage", "Confirm removal/demo", "Confirm access for equipment"],
    providerFields: [
      { name: "businessName", label: "Business / profile name" },
      { name: "ownerName", label: "Owner / contact name" },
      { name: "serviceArea", label: "Service area" },
      { name: "servicesOffered", label: "Services offered", type: "textarea" },
      { name: "yearsExperience", label: "Years of experience" },
      { name: "residentialWork", label: "Residential work", type: "select", options: yesNoOptions },
      { name: "commercialWork", label: "Commercial work", type: "select", options: yesNoOptions },
      { name: "paversOffered", label: "Pavers offered", type: "select", options: yesNoOptions },
      { name: "stoneWalls", label: "Stone walls offered", type: "select", options: yesNoOptions },
      { name: "retainingWalls", label: "Retaining walls offered", type: "select", options: yesNoOptions },
      { name: "brickBlock", label: "Brick/block work offered", type: "select", options: yesNoOptions },
      { name: "outdoorLiving", label: "Outdoor living/fire pit work offered", type: "select", options: yesNoOptions },
      { name: "drainagePrep", label: "Drainage/hardscape prep offered", type: "select", options: yesNoOptions },
      { name: "equipmentAvailable", label: "Equipment available", type: "textarea" },
      { name: "crewSize", label: "Crew size" },
      { name: "minimumJobPrice", label: "Minimum job price" },
      { name: "licenseInfo", label: "License info if applicable" },
      { name: "insurance", label: "Insurance", type: "select", options: yesNoOptions },
      { name: "bonded", label: "Bonded", type: "select", options: yesNoOptions },
      { name: "portfolioPhotos", label: "Portfolio / past project photos", type: "file", accept: "image/*" },
      { name: "bio", label: "Bio / description", type: "textarea" }
    ],
    jobFields: [
      { name: "propertyType", label: "Property type", type: "select", options: ["Residential", "Commercial", "Rental", "Farm", "Shop", "Other"] },
      { name: "serviceNeeded", label: "Service needed", type: "select", options: ["Stonework", "Masonry", "Pavers", "Retaining wall", "Patio", "Walkway", "Outdoor steps", "Fire pit", "Brick work", "Block work", "Decorative stone", "Gravel path", "Other"] },
      { name: "dimensions", label: "Approximate dimensions" },
      { name: "footage", label: "Square footage or linear footage if known" },
      { name: "currentCondition", label: "Current surface/condition", type: "textarea" },
      { name: "desiredMaterial", label: "Desired material" },
      { name: "removalNeeded", label: "Is removal/demo needed?", type: "select", options: yesNoOptions },
      { name: "basePrepNeeded", label: "Is base prep needed?", type: "select", options: yesNoOptions },
      { name: "drainageNeeded", label: "Is drainage needed?", type: "select", options: yesNoOptions },
      { name: "desiredDate", label: "Desired date", type: "date" },
      { name: "additionalDetails", label: "Additional details", type: "textarea" }
    ]
  }
];
const serviceVerticalCategoryOptions = uniqueValues(serviceVerticals.flatMap((vertical) => vertical.categories));
const optionalExtraServiceCategories = [
  "Fencing",
  "Custom iron gates",
  "Photography and videography",
  "Personal drivers",
  "Pothole help / roadside support",
  "Home repair",
  "Landscaping",
  "Tree trimming",
  "Pressure washing",
  "Gutter cleaning",
  "Painting",
  "Roofing",
  "Handyman work",
  "Moving help",
  "Appliance install",
  "Property maintenance"
];
const categories = uniqueValues(["Handyman", "Landscaping", "Junk Removal", "Moving", "Painting", "Plumbing", "Electrical", "Cleaning", ...serviceVerticalCategoryOptions, ...optionalExtraServiceCategories, CREATIVE_CATEGORY_LABEL, NORTHSTAR_CATEGORY_LABEL]);
const jobStatuses = uniqueValues(["New", "Submitted", "Pending", "Contacted", "Matching", "Quoted", "Accepted", "Assigned", "In Progress", "Completed", "Canceled", ...serviceJobStatusLabels]);
const workerStatuses = ["New", "Submitted", "Contacted", "Ready", "Approved", "Rejected", "Suspended", "Paused"];
const referralStatuses = ["New", "Contacted", "Converted", "Later"];
const roadRescueStatuses = ["New", "Contacted", "Provider Notified", "Matched", "Closed"];
const creativeRequestStatuses = ["submitted", "reviewing", "quoted", "accepted", "assigned", "completed", "canceled"];
const creativeProviderStatuses = ["draft", "submitted", "under_review", "approved", "rejected", "suspended"];
const flexLeadStatuses = [
  "new",
  "contacted",
  "qualified",
  "not_qualified",
  "flex_link_sent",
  "application_started",
  "activated",
  "commission_expected",
  "commission_paid",
  "forge_upsell_offered",
  "forge_client_won",
  "closed_lost"
];
const FORGE_ENV = typeof window !== "undefined" ? window.FORGE_ENV || {} : {};
const FLEX_REFERRAL_URL_PLACEHOLDER = "https://REPLACE-WITH-APPROVED-FLEX-REFERRAL-LINK";
const FLEX_APP_URL = FORGE_ENV.FLEX_APP_URL || "";
const NEXT_PUBLIC_FLEX_REFERRAL_URL = FORGE_ENV.NEXT_PUBLIC_FLEX_REFERRAL_URL || FLEX_REFERRAL_URL_PLACEHOLDER;
const FLEX_PARTNER_MODE = "referral";
const FORGE_CAPITAL_DESK_ENABLED = true;
const FORGE_LEAD_NOTIFY_EMAIL = "admin@forge.local";
const FORGE_GHL_WEBHOOK_URL = FORGE_ENV.FORGE_GHL_WEBHOOK_URL || "";
const FORGE_ZAPIER_WEBHOOK_URL = FORGE_ENV.FORGE_ZAPIER_WEBHOOK_URL || "";
const FLEX_COMPLIANCE_COPY = "Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Forge may route eligible business owners to approved finance partner review only when consent, written approval, and data-sharing requirements are in place. Finance products are subject to eligibility, approval, fees, terms, and conditions. Do not submit bank logins, SSNs, full account numbers, or sensitive financial documents through Forge.";
const BUILDING_COMPLIANCE_COPY = "Forge is a marketplace and project coordination platform. Forge is not the contractor of record, lender, bank, broker-dealer, financial advisor, or credit provider. Partner routing is subject to project fit, customer consent, licensing, insurance, eligibility, written partner approval, and separate agreements between the customer and the applicable partner. Forge does not publicly claim official partnerships, use partner logos, or share customer information with third-party partners unless the required approvals and consent are in place.";
const flexIndustries = ["Contractor / builder", "Landscaping", "Roofing", "Fencing / iron gates", "Auto shop", "Transport / diesel", "Creative / agency", "Restaurant", "Local service business", "Other"];
const flexYearsOptions = ["Under 1 year", "1-2 years", "3-5 years", "5+ years"];
const flexRevenueRanges = ["Under $10k", "$10k - $25k", "$25k - $75k", "$75k - $150k", "$150k+"];
const flexSpendRanges = ["Under $5k", "$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"];
const flexEmployeeRanges = ["Just me", "2-5", "6-20", "21-50", "51+"];
const flexNeedOptions = [
  "Business credit",
  "Cash-flow help",
  "Vendor payments",
  "Employee cards",
  "Business banking tools",
  "Expense management",
  "Growth capital",
  "Fuel/material/equipment spending",
  "Payroll timing",
  "Not sure yet"
];
const flexPrimaryNeedKeywords = ["credit", "cash-flow", "cash flow", "vendor payments", "ap", "payroll timing", "employee cards", "fuel", "equipment", "materials", "growth capital"];
const providerGrowthToolOptions = [
  "I want business credit / cash-flow tools",
  "I want help with vendor bills / AP automation",
  "I want employee cards / expense controls",
  "I want business banking tools",
  "I want growth capital",
  "I want more customer leads through Forge",
  "I want marketing through North Star Creative Co.",
  "I want website / CRM / automation setup",
  "I want payment processing help"
];
const providerFinanceToolLabels = providerGrowthToolOptions.slice(0, 5);
const homebuildingStatuses = [
  "New Project Lead",
  "Needs More Info",
  "Forge Qualified",
  "Sent to Seneca",
  "Partner Reviewing",
  "Accepted by Partner",
  "Proposal Requested",
  "Site Visit Scheduled",
  "Contract Pending",
  "Won",
  "Lost",
  "Not a Fit",
  "Routed to Forge Pro"
];
const projectStatuses = [
  "NEW",
  "NEEDS_MORE_INFO",
  "FORGE_QUALIFIED",
  "MAJOR_PROJECT_REVIEW",
  "SENT_TO_SENECA",
  "PARTNER_REVIEWING",
  "ACCEPTED_BY_PARTNER",
  "PROPOSAL_REQUESTED",
  "SITE_VISIT_SCHEDULED",
  "CONTRACT_PENDING",
  "WON",
  "LOST",
  "NOT_A_FIT",
  "ROUTED_TO_FORGE_PRO"
];
const buildingLeadTypeOptions = [
  ["HOME_PROJECT", "Home project"],
  ["MAJOR_BUILD", "Major build"],
  ["CONTRACTOR_FINANCE", "Contractor finance"]
];
const buildingLeadStatuses = [
  "NEW_BUILDING_LEAD",
  "HOME_PROJECT_REVIEW",
  "ROUTED_TO_FORGE_PRO",
  "MAJOR_PROJECT_REVIEW",
  "NEEDS_MORE_INFO",
  "FORGE_QUALIFIED",
  "CUSTOMER_CONSENT_REQUESTED",
  "CUSTOMER_CONSENT_APPROVED",
  "SENECA_REVIEW_ELIGIBLE",
  "SENT_TO_SENECA",
  "SENECA_REVIEWING",
  "SENECA_ACCEPTED",
  "SENECA_DECLINED",
  "FLEX_REVIEW_ELIGIBLE",
  "SENT_TO_FLEX",
  "FLEX_REVIEWING",
  "FLEX_ACCEPTED",
  "FLEX_DECLINED",
  "PROPOSAL_REQUESTED",
  "SITE_VISIT_SCHEDULED",
  "CONTRACT_PENDING",
  "WON",
  "LOST",
  "NOT_A_FIT"
];
const projectTypeOptions = [
  ["HOME_REPAIR", "Home repair"],
  ["REMODEL", "Remodel"],
  ["ADU", "ADU"],
  ["GARAGE_SHOP", "Garage / shop"],
  ["FENCING_GATES", "Fencing / gates"],
  ["COMMERCIAL_TI", "Commercial TI"],
  ["MULTIFAMILY", "Multifamily"],
  ["MIXED_USE", "Mixed-use"],
  ["LAND_DEVELOPMENT", "Land development"],
  ["INVESTMENT_PROPERTY", "Investment property"],
  ["OTHER", "Other"]
];
const buildingProjectTypeOptions = [
  ["HOME_REPAIR", "Home repair"],
  ["REMODEL", "Remodel"],
  ["FENCING_GATES", "Fencing / custom gates"],
  ["DECK_PATIO", "Deck / patio"],
  ["CONCRETE", "Concrete"],
  ["ROOFING", "Roofing"],
  ["PAINTING", "Painting"],
  ["LANDSCAPING", "Landscaping"],
  ["ADU", "ADU"],
  ["GARAGE_SHOP", "Garage / shop"],
  ["TENANT_IMPROVEMENT", "Tenant improvement"],
  ["COMMERCIAL", "Commercial"],
  ["MULTIFAMILY", "Multifamily"],
  ["MIXED_USE", "Mixed-use"],
  ["LAND_DEVELOPMENT", "Land development"],
  ["INVESTMENT_PROPERTY", "Investment property"],
  ["CONTRACTOR_FINANCE", "Contractor finance"],
  ["OTHER", "Other"]
];
const budgetRangeOptions = [
  ["UNDER_10K", "Under $10k"],
  ["TEN_TO_50K", "$10k - $50k"],
  ["FIFTY_TO_150K", "$50k - $150k"],
  ["ONE_FIFTY_TO_500K", "$150k - $500k"],
  ["FIVE_HUNDRED_TO_2M", "$500k - $2M"],
  ["TWO_M_PLUS", "$2M+"]
];
const buildingBudgetRangeOptions = [
  ...budgetRangeOptions,
  ["NOT_SURE", "Not sure"]
];
const projectStageOptions = [
  ["IDEA_ONLY", "Idea only"],
  ["OWN_PROPERTY", "Own property"],
  ["UNDER_CONTRACT", "Under contract"],
  ["HAVE_PLANS", "Have plans"],
  ["HAVE_PERMITS", "Have permits"],
  ["READY_TO_BUILD", "Ready to build"],
  ["NEEDS_DESIGN", "Needs design"],
  ["NEEDS_FINANCING", "Needs financing"]
];
const buildingProjectStageOptions = [
  ["IDEA_ONLY", "Idea only"],
  ["OWN_PROPERTY", "Own property"],
  ["UNDER_CONTRACT", "Under contract"],
  ["HAVE_PLANS", "Have plans"],
  ["HAVE_PERMITS", "Have permits"],
  ["NEED_DESIGN_HELP", "Need design help"],
  ["NEED_CONSTRUCTION_HELP", "Need construction help"],
  ["NEED_FINANCING", "Need financing"],
  ["READY_TO_START", "Ready to start"],
  ["NOT_SURE", "Not sure"]
];
const financeNeedOptions = [
  ["", "No finance need selected"],
  ["BUSINESS_BANKING", "Business banking"],
  ["BUSINESS_CREDIT", "Business credit"],
  ["EXPENSE_MANAGEMENT", "Expense management"],
  ["VENDOR_PAYMENTS", "Vendor payments"],
  ["BILL_PAY", "Bill pay"],
  ["WORKING_CAPITAL", "Working capital"],
  ["AP_AUTOMATION", "AP automation"],
  ["AR_AUTOMATION", "AR automation"],
  ["GLOBAL_PAYMENTS", "Global payments"],
  ["PROJECT_FINANCING", "Project financing"],
  ["NOT_SURE", "Not sure"]
];
const majorProjectTypes = ["COMMERCIAL", "COMMERCIAL_TI", "MULTIFAMILY", "MIXED_USE", "LAND_DEVELOPMENT", "INVESTMENT_PROPERTY"];
const forgeProsProjectTypes = ["HOME_REPAIR", "REMODEL", "FENCING_GATES", "DECK_PATIO", "CONCRETE", "ROOFING", "PAINTING", "LANDSCAPING", "ADU", "GARAGE_SHOP", "TENANT_IMPROVEMENT"];
const majorProjectBudgets = ["ONE_FIFTY_TO_500K", "FIVE_HUNDRED_TO_2M", "TWO_M_PLUS"];
const under150kProjectBudgets = ["UNDER_10K", "TEN_TO_50K", "FIFTY_TO_150K"];
const partnerDocumentTypes = ["W9", "INSURANCE", "LICENSE", "BUSINESS_LICENSE", "REFERRAL_AGREEMENT", "LOGO_PERMISSION", "NDA", "NON_CIRCUMVENT", "DATA_SHARING_AGREEMENT", "OTHER"];
const buildingHelpItems = [
  "Home repairs",
  "Remodels",
  "Fencing and custom gates",
  "Decks and patios",
  "Concrete",
  "Roofing",
  "Painting",
  "Landscaping",
  "ADUs",
  "Garages and shops",
  "Tenant improvements",
  "Commercial improvements",
  "Multifamily opportunities",
  "Mixed-use projects",
  "Land development",
  "Investor-backed builds",
  "Contractor finance",
  "Business banking and expense tools",
  "Vendor payments and bill pay",
  "Working capital review"
];
const buildingPublicCards = [
  {
    title: "Home Projects",
    body: "For homeowners and property owners who need trusted help with repairs, upgrades, remodels, fencing, gates, decks, concrete, landscaping, painting, roofing, garages, shops, ADUs, and tenant improvements.",
    bestFor: ["Home repairs", "Remodels", "Fencing and gates", "Concrete and exterior work", "Landscaping", "Garages, shops, and ADUs", "Small business improvements"],
    button: "Start a Home Project",
    action: "focus-building-home"
  },
  {
    title: "Major Builds & Development",
    body: "For larger property, investor, commercial, multifamily, mixed-use, and land development opportunities that need a higher level of review. Forge can collect project details, qualify the opportunity, organize documents, and route serious projects to approved construction, development, or operating partners when there is a fit.",
    bestFor: ["Multifamily projects", "Mixed-use projects", "Commercial improvements", "Apartment upgrades", "Land development", "Investor-backed construction", "Major renovations", "Oregon and Washington opportunities"],
    button: "Submit a Major Build",
    action: "focus-building-major"
  },
  {
    title: "Contractor Finance & Business Tools",
    body: "For contractors, builders, service businesses, and project operators who need stronger systems for cash flow, bill pay, vendor payments, expense cards, working capital, and business finance operations. Forge can collect a finance request and route qualified business owners to approved finance partner review when available.",
    bestFor: ["Contractors", "Builders", "Service businesses", "Blue-collar companies", "Project operators", "Businesses with payroll, invoices, vendors, or material costs"],
    button: "Request Business Finance Review",
    action: "open-building-finance-review"
  },
  {
    title: "Forge Partner Network",
    body: "Forge is building a relationship-driven network of construction, development, finance, marketing, logistics, and operating partners. Small jobs need reliable pros. Big projects need serious operators. Forge helps sort the difference.",
    bestFor: [],
    button: "Open Building Intake",
    action: "focus-building-home"
  }
];
const buildingInternalSalesCopy = "Forge is building a blue-collar project engine for Oregon and Washington. It is not just a place to find a handyman. Small jobs go to verified local pros. Bigger projects go through a higher-level review so they can be routed to serious development, construction, finance, and operating partners when there is a fit. Because of Andrew's relationships, Forge is being built around real operators who understand construction, development, business finance, and execution. The goal is to help property owners get projects done, help contractors get more work, and help serious partners find qualified opportunities without wasting time.";
const buildingNorthStarConnectionCopy = "North Star Creative Co. can support Forge Building by generating leads, landing pages, local ads, social content, outreach campaigns, contractor signups, project-owner campaigns, and partner introductions.";
const autoServiceGroups = [
  {
    title: "Mechanic Services",
    label: "Repair and maintenance",
    items: [
      "Oil changes",
      "Brake service",
      "Battery replacement",
      "Diagnostics",
      "Engine repair coordination",
      "Diesel truck service",
      "Suspension work",
      "Tune-ups",
      "Pre-purchase inspections",
      "Fleet maintenance"
    ]
  },
  {
    title: "Cool Car Services",
    label: "Detail, build, customize",
    items: [
      "Auto detailing",
      "Ceramic coating",
      "Window tinting",
      "Paint correction",
      "Wraps and graphics",
      "Lift kits",
      "Wheels and tires",
      "Audio systems",
      "Lighting upgrades",
      "Off-road builds",
      "Performance upgrades",
      "Classic car support"
    ]
  },
  {
    title: "Vehicle Sales",
    label: "Dealer and buyer support",
    items: [
      "S&A Auto partnership",
      "Dealer partner inventory",
      "Truck sales",
      "Diesel truck sales",
      "Auction-sourced vehicles",
      "Buyer requests",
      "Vehicle listing pages",
      "Financing partner referrals"
    ]
  },
  {
    title: "Transport & Logistics",
    label: "Pickup, hauling, delivery",
    items: [
      "Local vehicle pickup",
      "Long-distance vehicle transport",
      "Trailer hauling",
      "Dealer-to-customer delivery",
      "Auction pickup",
      "Fleet moves"
    ]
  }
];
const autoTransportServiceCards = [
  {
    title: "Sell My Car on Forge",
    tag: "sell_my_car",
    body: "Submit your vehicle once and let Forge help route it to the right buyer, partner, or selling path.",
    action: "focus-vehicle-listing",
    formTarget: "Sell My Car on Forge"
  },
  {
    title: "List My Vehicle",
    tag: "list_vehicle",
    body: "Create a reviewed public listing with safe contact handoff, admin approval, and privacy boundaries.",
    action: "focus-vehicle-listing",
    formTarget: "List My Vehicle"
  },
  {
    title: "Consign My Vehicle",
    tag: "consign_vehicle",
    body: "Ask Forge to review whether a partner consignment path may fit the vehicle and seller timeline.",
    action: "focus-vehicle-listing",
    formTarget: "Consign My Vehicle"
  },
  {
    title: "Request a Vehicle",
    tag: "request_vehicle",
    body: "Tell Forge what you want to buy so the request can be matched with dealer partners and available inventory.",
    action: "focus-auto-request",
    formTarget: "Buyer requests"
  },
  {
    title: "Transport My Vehicle",
    tag: "transport_needed",
    body: "Request local pickup, dealer delivery, long-distance transport, auction pickup, or fleet movement help.",
    action: "focus-auto-request",
    formTarget: "Long-distance vehicle transport"
  },
  {
    title: "Book Executive Transport",
    tag: "executive_transport",
    body: "Capture premium ride, event, airport, business, or white-glove transport requests for partner review.",
    action: "focus-auto-request",
    formTarget: "Executive transport"
  },
  {
    title: "Forge Platinum Auto Concierge",
    tag: "luxury_or_exotic",
    body: "Premium vehicle sourcing, selling, consignment, and white-glove transport for high-value auto needs.",
    action: "focus-auto-request",
    formTarget: "Forge Platinum Auto Concierge"
  },
  {
    title: "Auction Vehicle Sourcing",
    tag: "auction_sourcing",
    body: "Capture auction sourcing, pickup, transport, inspection, and partner review needs before any purchase path.",
    action: "focus-auto-request",
    formTarget: "Auction Vehicle Sourcing"
  }
];
const autoLeadCategoryLabels = [
  "sell_my_car",
  "list_vehicle",
  "consign_vehicle",
  "wholesale_offer",
  "auction_sourcing",
  "luxury_or_exotic",
  "standard_vehicle",
  "truck_or_commercial",
  "transport_needed",
  "financing_needed",
  "title_help_needed",
  "high_priority_review"
];
const autoReviewStatuses = ["New Lead", "Needs Review", "Approved Public Listing", "Partner Review", "Contacted", "Closed"];
const autoMonetizationSettings = [
  ["Private sale lead", "Flat listing or success fee after written terms"],
  ["Dealer / partner route", "Referral or lead fee only after partner agreement"],
  ["Consignment", "Partner consignment fee share after written terms"],
  ["Transport", "Partner referral or coordination fee after written terms"],
  ["Platinum Concierge", "Premium concierge or partner success fee after written terms"],
  ["Auction sourcing", "Sourcing fee, inspection coordination, or partner referral after written terms"]
];
const operationsVaultDocuments = [
  {
    id: "forge-master-operating-manual",
    category: "Master Business Operations",
    title: "Forge Master Operating Manual",
    type: "Operating Manual",
    owner: "Forge Admin",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["core", "admin", "launch"],
    checklist: ["Protect customer data", "Route licensed work to qualified partners", "Log every lead", "Use admin review before third-party sharing"],
    body: "Forge collects blue-collar marketplace demand, organizes it by category, and routes qualified opportunities to the right internal queue or approved partner path. Operators must verify consent, keep public claims conservative, and record every handoff in the admin dashboard."
  },
  {
    id: "daily-operations-checklist",
    category: "Master Business Operations",
    title: "Forge Daily Operations Checklist",
    type: "Checklist",
    owner: "Operations",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["daily", "follow-up"],
    checklist: ["Review new leads", "Prioritize urgent safety issues", "Copy follow-up queue", "Confirm webhook/export backup", "Log outreach notes"],
    body: "Open Admin, review Launch Command, process urgent auto/road/job requests first, contact new leads, update statuses, export a backup, and copy the recap before ending the session."
  },
  {
    id: "weekly-operations-review",
    category: "Master Business Operations",
    title: "Forge Weekly Operations Review",
    type: "Review Template",
    owner: "Operations",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["weekly", "metrics"],
    checklist: ["Lead volume", "Response time", "Partner bottlenecks", "Safety issues", "Revenue opportunities"],
    body: "Summarize total leads by category, conversion movement, response delays, partner readiness, user complaints, safety flags, and next week's top three growth actions."
  },
  {
    id: "monthly-business-review",
    category: "Master Business Operations",
    title: "Forge Monthly Business Review",
    type: "Review Template",
    owner: "Founder",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["monthly", "strategy"],
    checklist: ["Revenue", "Lead quality", "Active partners", "User feedback", "Public readiness"],
    body: "Review revenue potential, actual closed outcomes, category expansion, partner risk, operational load, customer trust, public launch gates, and the next month of experiments."
  },
  {
    id: "service-category-launch-checklist",
    category: "Master Business Operations",
    title: "Forge Service Category Launch Checklist",
    type: "Checklist",
    owner: "Product",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["launch", "category"],
    checklist: ["Public copy approved", "Intake form tested", "Admin table exists", "Safety boundary present", "Webhook payload documented"],
    body: "Before launching a new Forge category, confirm public copy, intake fields, admin review path, partner boundaries, privacy notes, webhook fields, and backup/export path."
  },
  {
    id: "customer-intake-sop",
    category: "Customer Operations",
    title: "Customer Intake SOP",
    type: "SOP",
    owner: "Customer Ops",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["customer", "intake"],
    checklist: ["Confirm contact info", "Capture scope", "Capture location", "Capture timeline", "Capture consent"],
    body: "Ask only for information needed to route the request. Confirm consent, explain Forge is coordinating a beta intake, avoid guarantees, and save a clear next action in the lead record."
  },
  {
    id: "customer-qualification-checklist",
    category: "Customer Operations",
    title: "Customer Qualification Checklist",
    type: "Checklist",
    owner: "Customer Ops",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["qualification"],
    checklist: ["Need is real", "Location serviceable", "Timeline clear", "Budget range present", "Safety/legal issue flagged"],
    body: "A qualified request has a real customer, reachable contact, clear scope, serviceable location, rough budget or price expectation, and no unresolved safety/legal blocker."
  },
  {
    id: "customer-follow-up-sop",
    category: "Customer Operations",
    title: "Customer Follow-Up SOP",
    type: "SOP",
    owner: "Customer Ops",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["follow-up"],
    checklist: ["Respond quickly", "Restate request", "Confirm next step", "Set follow-up date", "Log outcome"],
    body: "Follow up with a simple message that restates the request, confirms Forge received it, explains that partner fit must be reviewed, and sets the next follow-up action."
  },
  {
    id: "quote-request-sop",
    category: "Customer Operations",
    title: "Quote Request SOP",
    type: "SOP",
    owner: "Customer Ops",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["quote", "partner"],
    checklist: ["Scope ready", "Photos attached or requested", "Budget range noted", "Partner consent recorded", "No price guarantee"],
    body: "Prepare clean scope notes and send only to approved partners after consent. Do not quote licensed services on Forge's behalf unless Forge is actually performing that service through a proper legal setup."
  },
  {
    id: "scheduling-sop",
    category: "Customer Operations",
    title: "Scheduling SOP",
    type: "SOP",
    owner: "Customer Ops",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["scheduling"],
    checklist: ["Confirm availability", "Confirm location", "Confirm arrival window", "Confirm contact", "Log schedule note"],
    body: "Coordinate only confirmed time windows, avoid overpromising availability, and keep both customer and provider contact details clear in the admin record."
  },
  {
    id: "job-completion-sop",
    category: "Customer Operations",
    title: "Job Completion SOP",
    type: "SOP",
    owner: "Customer Ops",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["completion", "reviews"],
    checklist: ["Confirm work status", "Capture feedback", "Ask for photos if appropriate", "Log payment handled outside MVP", "Request review"],
    body: "After completion, confirm the outcome, capture customer feedback, request a review/testimonial when appropriate, and record any issue requiring follow-up."
  },
  {
    id: "customer-complaint-sop",
    category: "Customer Operations",
    title: "Customer Complaint SOP",
    type: "SOP",
    owner: "Customer Ops",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["complaints", "safety"],
    checklist: ["Acknowledge", "Collect facts", "Pause routing if needed", "Escalate safety issues", "Document resolution"],
    body: "Treat complaints as safety and trust events. Acknowledge quickly, gather facts, avoid assigning blame too early, pause risky partner routing, and document the resolution path."
  },
  {
    id: "auto-seller-intake-sop",
    category: "Auto Operations",
    title: "Forge Auto Seller Intake SOP",
    type: "SOP",
    owner: "Auto Ops",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["sell_my_car", "vehicle"],
    checklist: ["Seller contact", "Vehicle facts", "Title/lien status", "Condition disclosure", "Photos or notes", "Consent"],
    body: "Vehicle seller intake must capture price, mileage, condition, title status, lien/payoff risk, private lowest price, photos/notes, and consent before routing to a dealer, Platinum partner, auction, or public listing review."
  },
  {
    id: "platinum-partner-routing-sop",
    category: "Partner Routing",
    title: "Forge Platinum Partner Routing SOP",
    type: "SOP",
    owner: "Auto Ops",
    status: "Internal only",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["platinum", "luxury", "partner"],
    checklist: ["Use Forge Platinum public brand", "Hide private partner names", "Verify consent", "Confirm partner approval", "Log handoff"],
    body: "Forge Platinum Auto Concierge is the customer-facing brand. Private partner names, company names, logos, photos, and service claims stay internal unless written approval and admin branding permission are confirmed."
  },
  {
    id: "vehicle-listing-review-checklist",
    category: "Auto Operations",
    title: "Vehicle Listing Review Checklist",
    type: "Checklist",
    owner: "Auto Ops",
    status: "Ready for beta",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["public listing", "privacy"],
    checklist: ["Remove private lowest price", "Remove payoff details", "Avoid title guarantees", "Confirm seller consent", "Mark reviewed status"],
    body: "Public listings may show year, make, model, asking price, mileage, location, basic condition, and approved seller route. Private lowest price, lien/payoff details, VIN, admin notes, and private partner routing stay internal."
  },
  {
    id: "auction-sourcing-worksheet",
    category: "Auto Operations",
    title: "Auction Sourcing Worksheet",
    type: "Worksheet",
    owner: "Auto Ops",
    status: "Draft v1",
    version: "1.0",
    reviewed: "2026-06-26",
    tags: ["auction_sourcing"],
    checklist: ["Target vehicle", "Budget ceiling", "Inspection need", "Transport need", "Dealer/auction partner"],
    body: "Record the target vehicle, budget ceiling, auction source, inspection requirements, transport needs, buyer consent, and partner handoff. Do not imply Forge owns auction access unless properly arranged."
  },
  {
    id: "partner-referral-agreement-template",
    category: "Legal / Contracts",
    title: "Partner Referral Agreement Template",
    type: "Template - requires attorney review before use",
    owner: "Legal",
    status: "Attorney review required",
    version: "0.1",
    reviewed: "2026-06-26",
    tags: ["legal", "partner"],
    checklist: ["Parties", "Services", "Fees", "Data sharing", "Compliance", "Termination"],
    body: "Template only. Define partner services, referral fee rules, customer consent, data handling, licensing responsibilities, insurance, dispute process, and termination. Do not use publicly until reviewed by an attorney."
  }
];
const autoServiceOptions = [
  ...autoServiceGroups.flatMap((group) => group.items),
  ...autoTransportServiceCards.map((card) => card.formTarget),
  "Executive transport",
  "Forge Platinum Auto Concierge"
].filter((item, index, list) => list.indexOf(item) === index);
const ROAD_RESCUE_SERVICE_TYPE = "road_rescue";
const roadRescueServices = [
  {
    title: "Pothole Impact Help",
    subtitle: "Hit a pothole? Forge can help you get connected to roadside, tire, wheel, tow, and repair support."
  },
  { title: "Flat Tire / Tire Change", subtitle: "Find tire change, mobile tire, or replacement support." },
  { title: "Tow Truck Needed", subtitle: "Route tow requests to available local towing providers." },
  { title: "Wheel, Rim, or Alignment Damage", subtitle: "Connect with wheel, rim, alignment, and inspection help." },
  { title: "Jump Start", subtitle: "Request battery jump support from local roadside providers." },
  { title: "Lockout Help", subtitle: "Connect with lockout providers where available and appropriate." },
  { title: "Fuel Delivery", subtitle: "Ask for fuel delivery help when the vehicle is safely stopped." },
  { title: "Road Hazard Report Help", subtitle: "Document location, photos, lane, direction, and time for public agency reporting." },
  { title: "Mechanic Inspection", subtitle: "Get connected for diagnostic and safety inspection after roadside damage." },
  { title: "Insurance / Damage Photo Checklist", subtitle: "Organize photos and notes without legal or insurance advice." }
];
const roadRescueHelpItems = [
  "Tire change or tire replacement",
  "Tow truck support",
  "Rim and wheel repair",
  "Alignment inspection",
  "Suspension inspection",
  "Mechanic diagnosis",
  "Mobile roadside help",
  "Damage photo checklist",
  "Road hazard report guidance"
];
const roadRescueIssueOptions = [
  ["pothole", "Hit a pothole"],
  ["flat_tire", "Flat tire"],
  ["wheel_damage", "Bent rim"],
  ["alignment", "Vehicle shaking"],
  ["alignment", "Steering wheel pulling"],
  ["wheel_damage", "Suspension noise"],
  ["mechanic_inspection", "Fluid leak"],
  ["tow", "Vehicle will not drive"],
  ["tow", "Need tow"],
  ["flat_tire", "Need tire change"],
  ["mechanic_inspection", "Need mechanic inspection"],
  ["jump_start", "Need jump start"],
  ["lockout", "Lockout help"],
  ["fuel_delivery", "Fuel delivery"],
  ["road_hazard_report", "Road hazard report help"],
  ["other", "Other"]
];
const roadRescueServiceRequestedOptions = [
  "Call me now",
  "Send roadside help",
  "Send tow truck",
  "Connect me with tire shop",
  "Connect me with wheel/rim repair",
  "Connect me with mechanic",
  "Help me document damage",
  "Help me report the pothole"
];
const roadRescueProviderTypes = [
  "Tow companies",
  "Mobile mechanics",
  "Tire shops",
  "Wheel/rim repair shops",
  "Alignment shops",
  "Auto repair shops",
  "Mobile tire-change providers",
  "S&A Auto / partner auto support",
  "Road hazard documentation helpers",
  "Insurance claim photo helpers, only if compliant and not giving legal advice"
];
const creativeServiceTypes = [
  {
    title: "Wedding Photography",
    description: "Full wedding-day coverage, ceremony photos, reception photos, couple portraits, family portraits, and edited galleries."
  },
  {
    title: "Wedding Videography",
    description: "Ceremony coverage, highlight films, speeches, reception moments, and edited wedding videos."
  },
  {
    title: "Engagement & Couples Shoots",
    description: "Engagement photos, anniversary shoots, proposal shoots, and couple portraits."
  },
  {
    title: "Event Photography",
    description: "Birthday parties, church events, fundraisers, conferences, sports events, concerts, and community events."
  },
  {
    title: "Business Content",
    description: "Content for small businesses, job sites, blue-collar companies, restaurants, gyms, auto dealers, real estate teams, and local brands."
  },
  {
    title: "Social Media Reels & Short-Form Video",
    description: "Instagram reels, TikTok videos, YouTube shorts, behind-the-scenes content, product demos, and business promo clips."
  },
  {
    title: "Real Estate & Property Photography",
    description: "Home listings, rental properties, land, commercial spaces, construction progress, and property walkthrough content."
  },
  {
    title: "Product & Brand Photography",
    description: "Product photos, lifestyle shots, e-commerce images, food photos, apparel shoots, and branded content."
  },
  {
    title: "Editing Only",
    description: "Photo editing, video editing, highlight reels, color correction, captions, and social media exports."
  },
  {
    title: "Drone Photo/Video Add-On",
    description: "Aerial photo and video add-on only for providers who submit proper drone qualifications, insurance, and approval."
  }
];
const creativeProjectTypes = creativeServiceTypes.map((service) => service.title);
const creativeBudgetOptions = ["Quote first", "Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+"];
const creativeMediaOptions = ["Photo", "Video", "Both photo and video"];
const creativeDeliveryOptions = ["Flexible", "Same day", "24-48 hours", "3-7 days", "1-2 weeks", "2-4 weeks", "Custom deadline"];
const creativeIndoorOutdoorOptions = ["Not sure", "Indoor", "Outdoor", "Both indoor and outdoor"];
const creativeNeedOptions = ["Not sure", "Yes", "No"];
const creativeProviderDroneOptions = ["No", "Yes - FAA Part 107 / qualified", "Yes - pending approval", "Not sure"];
const creativeProviderDisciplines = ["Photography", "Videography", "Both photography and videography"];
const creativeProviderExperienceOptions = ["New provider", "1-2 years", "3-5 years", "5+ years", "10+ years"];
const northstarMarketingServices = [
  "Website design",
  "Landing pages",
  "Logo and brand refresh",
  "Social media posts",
  "Instagram/Facebook content",
  "Short-form video content",
  "Photography/video coordination",
  "Google Business Profile setup",
  "Local SEO",
  "Paid ads",
  "Lead generation campaigns",
  "Email/SMS follow-up",
  "Review generation",
  "Before/after project showcases",
  "Flyers and print materials",
  "Business cards",
  "Canva templates",
  "Content calendar"
];
const northstarOperationsServices = [
  "CRM setup",
  "Klaviyo/email setup",
  "Job tracking",
  "Lead pipeline setup",
  "Customer intake forms",
  "Estimate/invoice workflow",
  "Follow-up automations",
  "SOP creation",
  "Hiring/onboarding documents",
  "Customer service scripts",
  "Sales scripts",
  "Admin dashboard planning",
  "Provider onboarding",
  "Appointment scheduling",
  "Operations cleanup",
  "Business system setup"
];
const northstarServiceOptions = [
  "Website",
  "Branding/logo",
  "Social media",
  "Ads",
  "Google Business Profile",
  "SEO",
  "Photography/video",
  "CRM",
  "Klaviyo/email/SMS",
  "Job tracking",
  "SOPs",
  "Business operations",
  "Not sure / need help deciding"
];
const northstarBudgetOptions = ["Not sure yet", "Under $500/month", "$500 - $1,500/month", "$1,500 - $3,000/month", "$3,000 - $7,500/month", "$7,500+/month", "Project-based quote"];
const northstarPackages = [
  {
    name: "Starter Presence",
    fit: "For a business that needs to look real online.",
    includes: ["Simple landing page", "Basic branding cleanup", "Google Business Profile checklist", "Lead form", "Basic social profile cleanup"]
  },
  {
    name: "Lead Engine",
    fit: "For a business that wants more jobs.",
    includes: ["Landing page", "Ads/funnel setup", "Social content plan", "Lead form", "Follow-up automation", "CRM pipeline"]
  },
  {
    name: "Authority Builder",
    fit: "For a business that wants to become known locally.",
    includes: ["Full website", "Brand kit", "Content calendar", "Before/after project content", "Review system", "Local SEO", "Email/SMS follow-up"]
  },
  {
    name: "Operations OS",
    fit: "For a business that needs systems.",
    includes: ["CRM", "Job tracking", "Intake forms", "Estimate/invoice workflow", "SOPs", "Hiring/onboarding documents", "Admin dashboard planning", "Follow-up automations"]
  },
  {
    name: "Full-Service Growth Partner",
    fit: "For businesses that want NorthStar to help run marketing and operations together.",
    includes: ["Website", "Ads", "Content", "CRM", "Follow-up", "Job tracking", "Reporting"]
  }
];
const northstarStatuses = ["New", "Contacted", "Scoping", "Proposal Needed", "Proposal Sent", "Active", "Paused", "Closed"];
const autoDealers = [
  {
    id: "s-and-a-auto",
    name: "S&A Auto",
    region: "Southern Oregon",
    role: "Forge Auto sales partnership",
    status: "Featured sales partner",
    note: "Use S&A Auto as the featured sales partnership for buyer requests, truck sales, diesel truck sales, and dealer inventory validation.",
    setup: ["Approved contact", "Lead intake phone/email", "Inventory and listing source", "Dealer terms", "Financing referral boundary", "Response expectation"]
  },
  {
    id: "joco-auto-sales",
    name: "JoCo Auto Sales",
    region: "Medford, OR",
    role: "Medford dealer partner",
    status: "Primary local sales path",
    note: "Use JoCo Auto Sales as the first Medford dealer option for buyer and seller handoff.",
    setup: ["Approved contact", "Lead intake phone/email", "Inventory source", "Dealer terms", "Response expectation"]
  },
  {
    id: "chevelles-auto-sales",
    name: "Chevelles Auto Sales",
    region: "Southern Oregon / Northern California",
    role: "Dealer partner",
    status: "Partner lead",
    note: "Add approved contact details and inventory feed before public launch.",
    setup: ["Approved contact", "Lead intake phone/email", "Inventory source", "Dealer terms", "Response expectation"]
  },
  {
    id: "shasta-lake-auto-sales",
    name: "Shasta Lake Auto Sales",
    region: "Shasta Lake, CA",
    role: "Dealer partner",
    status: "Partner lead",
    note: "Add approved contact details and inventory feed before public launch.",
    setup: ["Approved contact", "Lead intake phone/email", "Inventory source", "Dealer terms", "Response expectation"]
  }
];
const opportunityTracks = [
  {
    id: "trade-school",
    name: "Trade school",
    label: "School path",
    examples: "Welding, electrical, HVAC, diesel, CDL, machining, medical tech.",
    next: "Choose two programs, collect deadlines, ask about financial aid, and list required documents."
  },
  {
    id: "union-apprenticeship",
    name: "Union / apprenticeship",
    label: "Earn while learning",
    examples: "IBEW, plumbers and pipefitters, carpenters, laborers, operators, sheet metal.",
    next: "Find intake windows, application fee, aptitude test, interview prep, and local contact."
  },
  {
    id: "blue-collar-ai",
    name: "Blue-collar AI jobs",
    label: "Field tech + AI",
    examples: "Robotics tech, construction tech, drone inspection, utility inspection, manufacturing automation.",
    next: "Match current trade skills to AI tools, safety certs, entry-level field roles, and training gaps."
  }
];
const opportunitySteps = [
  ["1", "Pick a lane", "Trade school, union/apprenticeship, or AI-enabled blue-collar job."],
  ["2", "Collect requirements", "Deadline, location, age/license rules, documents, tests, fees, and contact."],
  ["3", "Build the packet", "Resume, work history, references, certifications, questions, and follow-up date."],
  ["4", "Apply outside Forge", "Submit only through the official school, union, employer, or program channel."],
  ["5", "Follow up", "Save the next date and contact so Forge can help the operator keep momentum."]
];
const routeByScreen = {
  autos: "/auto",
  "road-rescue": "/road-rescue",
  creative: "/photography",
  "creative-request": "/photography/request",
  "creative-apply": "/photography/apply",
  northstar: "/northstar-creative",
  capital: "/forge/capital",
  building: "/building",
  "admin-building-leads": "/admin/building-leads",
  projects: "/projects",
  "admin-projects": "/admin/projects",
  homebuilding: "/homebuilding",
  "homebuilding-tracker": "/homebuilding/tracker"
};
const screenByPath = {
  "/auto": "autos",
  "/auto/": "autos",
  "/road-rescue": "road-rescue",
  "/road-rescue/": "road-rescue",
  "/photography": "creative",
  "/photography/": "creative",
  "/photography/request": "creative-request",
  "/photography/request/": "creative-request",
  "/photography/apply": "creative-apply",
  "/photography/apply/": "creative-apply",
  "/photography-videography": "creative",
  "/photography-videography/": "creative",
  "/northstar-creative": "northstar",
  "/northstar-creative/": "northstar",
  "/forge/capital": "capital",
  "/forge/capital/": "capital",
  "/forge/flex": "capital",
  "/forge/flex/": "capital",
  "/partners/flex": "capital",
  "/partners/flex/": "capital",
  "/building": "building",
  "/building/": "building",
  "/admin/building-leads": "admin-building-leads",
  "/admin/building-leads/": "admin-building-leads",
  "/projects": "projects",
  "/projects/": "projects",
  "/admin/projects": "admin-projects",
  "/admin/projects/": "admin-projects",
  "/homebuilding": "homebuilding",
  "/homebuilding/": "homebuilding",
  "/homebuilding/tracker": "homebuilding-tracker",
  "/homebuilding/tracker/": "homebuilding-tracker"
};
const buildTrackerFeatures = [
  {
    title: "Live Build Timeline",
    items: ["Gantt-style timeline", "Project phases", "Start and end dates", "Delays and dependencies", "Completion percentage"]
  },
  {
    title: "Contractor Visibility",
    items: ["General contractor", "Project manager", "Subcontractors", "Trade partners", "Daily crew list", "Contact permissions"]
  },
  {
    title: "Budget Dashboard",
    items: ["Original budget", "Approved budget", "Paid to date", "Remaining balance", "Category breakdown", "Over/under budget alerts"]
  },
  {
    title: "Expense Reports",
    items: ["Materials", "Labor", "Permits", "Equipment rentals", "Subcontractors", "Logistics/delivery", "Change orders"]
  },
  {
    title: "Photo & Video Updates",
    items: ["Daily site photos", "Before/after milestones", "Inspection photos", "Uploaded documents", "Customer approval checkpoints"]
  },
  {
    title: "Change Orders",
    items: ["Customer approval required", "Scope change", "Price change", "Timeline impact", "Digital signature placeholder"]
  },
  {
    title: "Documents Vault",
    items: ["Plans", "Permits", "Contracts", "Insurance certificates", "Inspection reports", "Receipts", "Warranty documents"]
  }
];
const buildTrackerDemoProject = {
  sampleLabel: "Sample data only",
  project: "Sample Custom Home Build",
  location: "Medford, Oregon",
  status: "Framing Phase",
  completion: 38,
  estimatedCompletion: "24 weeks",
  currentPhase: "Framing",
  nextPhase: "Roofing",
  scheduleNote: "Sample schedule shows a framing inspection dependency before roofing can begin.",
  phases: [
    { name: "Land review", start: "May 4", end: "May 8", weekStart: 1, duration: 1, completion: 100, status: "Complete", dependency: "None", delay: "On track" },
    { name: "Design & plans", start: "May 11", end: "May 22", weekStart: 2, duration: 2, completion: 100, status: "Complete", dependency: "Land review", delay: "On track" },
    { name: "Permits", start: "May 25", end: "Jun 5", weekStart: 4, duration: 2, completion: 100, status: "Complete", dependency: "Design & plans", delay: "On track" },
    { name: "Site prep", start: "Jun 8", end: "Jun 12", weekStart: 6, duration: 1, completion: 100, status: "Complete", dependency: "Permits", delay: "On track" },
    { name: "Foundation", start: "Jun 15", end: "Jun 26", weekStart: 7, duration: 2, completion: 92, status: "Complete", dependency: "Site prep", delay: "Inspection closed in sample data" },
    { name: "Framing", start: "Jun 29", end: "Jul 17", weekStart: 9, duration: 3, completion: 42, status: "Active", dependency: "Foundation signoff", delay: "Demo note: one weather day absorbed" },
    { name: "Roofing", start: "Jul 20", end: "Jul 31", weekStart: 12, duration: 2, completion: 0, status: "Queued", dependency: "Framing inspection", delay: "Dependency pending" },
    { name: "Rough electrical", start: "Aug 3", end: "Aug 7", weekStart: 14, duration: 1, completion: 0, status: "Queued", dependency: "Roof dry-in", delay: "On track" },
    { name: "Rough plumbing", start: "Aug 10", end: "Aug 14", weekStart: 15, duration: 1, completion: 0, status: "Queued", dependency: "Framing access", delay: "On track" },
    { name: "HVAC", start: "Aug 17", end: "Aug 21", weekStart: 16, duration: 1, completion: 0, status: "Queued", dependency: "Rough-in coordination", delay: "On track" },
    { name: "Exterior systems", start: "Aug 24", end: "Sep 4", weekStart: 17, duration: 2, completion: 0, status: "Queued", dependency: "Roofing", delay: "On track" },
    { name: "Insulation", start: "Sep 7", end: "Sep 11", weekStart: 19, duration: 1, completion: 0, status: "Queued", dependency: "Rough-in inspections", delay: "On track" },
    { name: "Drywall", start: "Sep 14", end: "Sep 25", weekStart: 20, duration: 2, completion: 0, status: "Queued", dependency: "Insulation", delay: "On track" },
    { name: "Interior finishes", start: "Sep 28", end: "Oct 23", weekStart: 22, duration: 4, completion: 0, status: "Queued", dependency: "Drywall finish", delay: "On track" },
    { name: "Landscaping", start: "Oct 12", end: "Oct 30", weekStart: 24, duration: 3, completion: 0, status: "Queued", dependency: "Exterior access", delay: "Parallel path" },
    { name: "Final inspection", start: "Nov 2", end: "Nov 6", weekStart: 27, duration: 1, completion: 0, status: "Queued", dependency: "All trades complete", delay: "On track" },
    { name: "Final walkthrough", start: "Nov 9", end: "Nov 13", weekStart: 28, duration: 1, completion: 0, status: "Queued", dependency: "Final inspection", delay: "On track" }
  ],
  budget: {
    original: 640000,
    approved: 662500,
    paidToDate: 249350,
    remaining: 413150,
    alerts: ["Framing is $4,250 over demo baseline.", "Roofing remains unspent until dry-in approval."],
    categories: [
      { name: "Land/site prep", approved: 58000, spent: 55500 },
      { name: "Permits/design", approved: 42000, spent: 39800 },
      { name: "Foundation", approved: 76500, spent: 74800 },
      { name: "Framing", approved: 118000, spent: 86450 },
      { name: "Roofing", approved: 52000, spent: 0 },
      { name: "Electrical", approved: 44500, spent: 0 },
      { name: "Plumbing", approved: 39500, spent: 0 },
      { name: "HVAC", approved: 36000, spent: 0 },
      { name: "Exterior", approved: 68500, spent: 0 },
      { name: "Interior finishes", approved: 92000, spent: 0 },
      { name: "Landscaping", approved: 25500, spent: 0 },
      { name: "Contingency", approved: 10000, spent: 0 }
    ]
  },
  expenses: [
    { category: "Materials", description: "Demo framing lumber package", amount: 38250, status: "Submitted", date: "Sample Jun 24" },
    { category: "Labor", description: "Demo framing crew labor", amount: 18400, status: "Paid", date: "Sample Jun 25" },
    { category: "Permits", description: "Sample building permit bundle", amount: 12800, status: "Paid", date: "Sample May 28" },
    { category: "Equipment rentals", description: "Demo lift and site equipment", amount: 4200, status: "Approved", date: "Sample Jun 21" },
    { category: "Subcontractors", description: "Sample foundation subcontractor invoice", amount: 31800, status: "Paid", date: "Sample Jun 20" },
    { category: "Logistics/delivery", description: "Demo lumber delivery and staging", amount: 1850, status: "Submitted", date: "Sample Jun 23" },
    { category: "Change orders", description: "Sample upgraded window package", amount: 22500, status: "Needs approval", date: "Sample Jun 26" }
  ],
  team: [
    { role: "General contractor", assignment: "Demo GC role", today: "Site coordination", permission: "Customer can message through Forge" },
    { role: "Project manager", assignment: "Demo PM role", today: "Framing checklist", permission: "Customer can request updates" },
    { role: "Subcontractors", assignment: "Demo framing subcontractor", today: "Wall framing and sheathing", permission: "Contact through project manager" },
    { role: "Trade partners", assignment: "Demo electrical, plumbing, HVAC queue", today: "Rough-in scheduling", permission: "Contact hidden until assigned" },
    { role: "Daily crew list", assignment: "Framing crew: 5 scheduled", today: "Main level framing", permission: "View only" }
  ],
  updates: [
    { type: "Photo", title: "Daily site photos", body: "Sample framing photos uploaded for the main level.", date: "Sample Jun 26", checkpoint: "Customer view" },
    { type: "Video", title: "Before/after milestone", body: "Sample walkthrough clip from foundation complete to framing start.", date: "Sample Jun 25", checkpoint: "Milestone archive" },
    { type: "Inspection", title: "Foundation inspection photos", body: "Sample inspection images attached to foundation closeout.", date: "Sample Jun 24", checkpoint: "Reviewed" },
    { type: "Document", title: "Uploaded documents", body: "Sample engineered truss packet added to the document vault.", date: "Sample Jun 23", checkpoint: "Filed" },
    { type: "Approval", title: "Customer approval checkpoint", body: "Sample window package change order is awaiting approval.", date: "Sample Jun 26", checkpoint: "Action needed" }
  ],
  documents: [
    { type: "Plans", count: 4, latest: "Sample floor plan v3" },
    { type: "Permits", count: 3, latest: "Sample building permit" },
    { type: "Contracts", count: 2, latest: "Sample construction agreement" },
    { type: "Insurance certificates", count: 2, latest: "Sample GC certificate" },
    { type: "Inspection reports", count: 3, latest: "Sample foundation report" },
    { type: "Receipts", count: 8, latest: "Sample lumber delivery receipt" },
    { type: "Warranty documents", count: 1, latest: "Sample roofing warranty placeholder" }
  ],
  changeOrder: {
    title: "Sample upgraded window package",
    status: "Customer approval required",
    scope: "Upgrade standard window package to higher efficiency sample option.",
    priceChange: 22500,
    timelineImpact: "Adds 3 sample days if approved after framing inspection.",
    signature: "Digital signature placeholder only"
  }
};
const demoAccounts = [
  {
    role: "worker",
    name: "Mike Jones",
    label: "Worker / Contractor",
    screen: "worker",
    publicMode: true,
    visible: "Jobs, bid form, worker dashboard, and profile"
  },
  {
    role: "customer",
    name: "John Smith",
    label: "Job Poster",
    screen: "status",
    publicMode: true,
    visible: "Post a job, job status, job detail, and bids"
  },
  {
    role: "admin",
    name: "Forge Admin",
    label: "Operator",
    screen: "admin",
    publicMode: false,
    visible: "Admin dashboard, lead capture, exports, and Zapier setup"
  }
];
const perspectiveCards = [
  {
    role: "customer",
    name: "John Smith",
    audience: "Homeowner / Job Poster",
    status: "Job posted, bids available",
    landing: "status",
    profile: "profile",
    headline: "John wants the faucet fixed.",
    body: "Show how a homeowner checks job status, reviews bids, messages Forge, and chooses next steps.",
    screens: ["Job Status", "Job Detail", "Messages", "Profile Status"]
  },
  {
    role: "worker",
    name: "Mike Jones",
    audience: "Worker / Contractor",
    status: "Ready for bids",
    landing: "worker",
    profile: "profile",
    headline: "Mike wants paid local work.",
    body: "Show how a worker sees available jobs, submits a bid, checks messages, and confirms profile readiness.",
    screens: ["Worker Dashboard", "Available Jobs", "Submit Bid", "Profile Status"]
  },
  {
    role: "admin",
    name: "Forge Admin",
    audience: "Operator",
    status: "Operator active",
    landing: "admin",
    profile: "profile",
    headline: "Admin keeps the marketplace moving.",
    body: "Show lead follow-up, worker readiness, messages, exports, reports, and quick capture for real conversations.",
    screens: ["Admin Dashboard", "Follow-Up Queue", "Reports", "Messages"]
  }
];
const demoPaths = [
  {
    title: "Homeowner proof",
    role: "customer",
    name: "John Smith",
    summary: "Show John checking his faucet job, reviewing bids, and opening the next message.",
    steps: ["Job status", "Bid review", "Choose a bid", "Message next step"],
    actions: [
      ["Open Status", "status"],
      ["Review Bids", "detail"],
      ["Messages", "messages"]
    ]
  },
  {
    title: "Worker proof",
    role: "worker",
    name: "Mike Jones",
    summary: "Show Mike's worker dashboard, available jobs, bid form, and readiness profile.",
    steps: ["Worker dashboard", "Available jobs", "Submit bid", "Profile readiness"],
    actions: [
      ["Dashboard", "worker"],
      ["Jobs", "jobs"],
      ["Bid Form", "bid"]
    ]
  },
  {
    title: "Operator proof",
    role: "admin",
    name: "Forge Admin",
    summary: "Show the operating view: leads, follow-up, reports, messages, and capture.",
    steps: ["Admin dashboard", "Follow-up queue", "Reports", "Quick capture"],
    actions: [
      ["Admin", "admin"],
      ["Capture", "capture"],
      ["Reports", "reports"]
    ]
  },
  {
    title: "Forge Auto services proof",
    role: "customer",
    name: "John Smith",
    summary: "Show a customer requesting service, browsing vehicles, checking the dealer path, and creating an inquiry for follow-up.",
    steps: ["Request auto service", "Browse vehicles", "Dealer partner", "Buyer inquiry"],
    actions: [
      ["Open Auto", "auto"],
      ["Dealer Setup", "auto"],
      ["Buyer Queue", "auto"]
    ]
  },
  {
    title: "Training and careers proof",
    role: "customer",
    name: "Career Applicant",
    summary: "Show how Forge captures interest for schools, unions, apprenticeships, and blue-collar AI jobs.",
    steps: ["Choose path", "Save interest", "Copy plan", "Follow up"],
    actions: [
      ["Open Careers", "opportunities"],
      ["Application Plan", "opportunities"],
      ["Save Interest", "opportunities"]
    ]
  },
  {
    title: "NorthStar business growth proof",
    role: "customer",
    name: "Local Business Owner",
    summary: "Show how a contractor or service business requests marketing, CRM, lead follow-up, job tracking, and business operations help.",
    steps: ["Open NorthStar", "Pick services", "Save growth request", "Review in Admin"],
    actions: [
      ["Open NorthStar", "northstar"],
      ["Marketing Help", "northstar"],
      ["Admin Review", "admin"]
    ]
  }
];

const seedState = {
  activeJobId: "bathroom-vanity",
  activeMessageThreadId: "job-bathroom-vanity",
  settings: {
    webhookUrl: "",
    webhookEnabled: false,
    webhookLastStatus: "Local only",
    webhookLastAt: "",
    webhookLastType: "",
    publicMode: false,
    senecaPartnerApproved: false,
    flexPartnerApproved: false,
    lastBackupAt: "",
    lastBackupLeadCount: 0
  },
  session: {
    role: "guest",
    name: "",
    label: "Visitor"
  },
  worker: {
    name: "Mike Jones",
    trade: "Handyman",
    phone: "(541) 555-9876",
    email: "mike.jones@email.com",
    experience: "5+ years",
    area: "Medford, OR"
  },
  workers: [
    {
      name: "Mike Jones",
      trade: "Handyman",
      phone: "(541) 555-9876",
      email: "mike.jones@email.com",
      experience: "5+ years",
      area: "Medford, OR",
      status: "Ready"
    },
    {
      name: "Rosa Martinez",
      trade: "Landscaping",
      phone: "(541) 555-0148",
      email: "rosa@example.com",
      experience: "2-4 years",
      area: "Central Point, OR",
      status: "New"
    }
  ],
  referrals: [
    {
      id: "sample-referral",
      name: "Dana's friend",
      phone: "(541) 555-8812",
      email: "",
      type: "Knows someone",
      priority: "Warm",
      note: "May know a handyman and a restaurant owner who need odd jobs covered.",
      status: "New",
      created: "Today"
    }
  ],
  jobs: [
    {
      id: "fence-repair",
      title: "Fence Repair",
      category: "Handyman",
      location: "Medford, OR",
      urgency: "ASAP",
      budget: "$250 - $400",
      bids: 3,
      status: "Pending",
      posted: "May 15",
      description: "Need a section of wooden fence repaired.",
      customer: "Sarah K.",
      phone: "(541) 555-2290",
      email: "sarah@example.com",
      notes: "Ask for fence photos before matching."
    },
    {
      id: "lawn-cleanup",
      title: "Lawn Mowing & Cleanup",
      category: "Landscaping",
      location: "Central Point, OR",
      urgency: "This week",
      budget: "$100 - $150",
      bids: 5,
      status: "In Progress",
      posted: "May 16",
      description: "Front and back yard, edging and cleanup.",
      customer: "Central Point Homeowner",
      phone: "(541) 555-8031",
      email: "homeowner@example.com",
      notes: "Good recurring maintenance candidate."
    },
    {
      id: "bathroom-vanity",
      title: "Bathroom Faucet Replacement",
      category: "Plumbing",
      location: "Medford, OR",
      urgency: "ASAP",
      budget: "$150 - $250",
      bids: 3,
      status: "New",
      posted: "May 15, 2024",
      description: "Need to replace an old bathroom faucet with a new one. I already have the faucet. Just need labor and basic materials if needed.",
      customer: "John Smith",
      phone: "(541) 555-1234",
      email: "john.smith@email.com",
      notes: ""
    }
  ],
  bids: [
    { id: "bid-iron", jobId: "bathroom-vanity", worker: "Iron Valley Plumbing", amount: "$200", timeline: "Tomorrow", message: "Can handle the faucet replacement and basic materials.", rating: "4.8", reviews: 20, status: "Submitted", chosen: false },
    { id: "bid-rogue", jobId: "bathroom-vanity", worker: "Rogue Home Pros", amount: "$175", timeline: "2 days", message: "Available this week. Faucet install only.", rating: "4.6", reviews: 10, status: "Submitted", chosen: false },
    { id: "bid-mike-jones", jobId: "bathroom-vanity", worker: "Mike Jones", amount: "$150", timeline: "Today", message: "Can come today if the faucet is already on site.", rating: "4.9", reviews: 12, status: "Submitted", chosen: false }
  ],
  messages: [
    {
      id: "msg-demo-john",
      threadId: "job-bathroom-vanity",
      to: "John Smith",
      from: "Forge Admin",
      body: "Hi John, Forge has 3 bids ready for your bathroom faucet replacement. You can review the job detail and choose a bid when ready.",
      sentAt: "Today",
      status: "Sent"
    }
  ],
  vehicles: [
    {
      id: "auto-camry",
      year: "2016",
      make: "Toyota",
      model: "Camry SE",
      price: "$8,900",
      mileage: "104,000 miles",
      location: "Medford, OR",
      seller: "Dana R.",
      dealerId: "joco-auto-sales",
      phone: "(541) 555-4410",
      email: "dana@example.com",
      description: "Clean title, commuter car, good tires, recent oil change. Ready for a local buyer to inspect.",
      status: "Available",
      posted: "Today"
    },
    {
      id: "auto-f150",
      year: "2012",
      make: "Ford",
      model: "F-150 XLT",
      price: "$12,500",
      mileage: "138,000 miles",
      location: "Central Point, OR",
      seller: "Rogue Valley Seller",
      dealerId: "chevelles-auto-sales",
      phone: "(541) 555-7712",
      email: "truck@example.com",
      description: "Work truck with tow package. Buyer should inspect, verify title, and confirm maintenance records.",
      status: "Available",
      posted: "Today"
    },
    {
      id: "auto-ram-diesel",
      year: "2018",
      make: "Ram",
      model: "3500 Diesel",
      price: "$39,900",
      mileage: "86,000 miles",
      location: "Medford, OR",
      seller: "Forge Truck Partner",
      dealerId: "s-and-a-auto",
      phone: "(541) 555-8800",
      email: "trucks@example.com",
      description: "Diesel truck lead for towing, work, and fleet buyers. Route title, financing, inspection, and delivery details through a qualified dealer partner.",
      status: "Available",
      posted: "Today"
    }
  ],
  autoInquiries: [
    {
      id: "auto-inquiry-demo",
      vehicleId: "auto-camry",
      vehicleTitle: "2016 Toyota Camry SE",
      dealerId: "joco-auto-sales",
      buyer: "Sample Buyer",
      phone: "(541) 555-0188",
      email: "",
      note: "Wants to know if the title is clean and whether a Saturday test drive is possible.",
      status: "New",
      created: "Today"
    }
  ],
  autoRequests: [
    {
      id: "auto-request-demo",
      name: "Sample Auto Customer",
      phone: "(541) 555-0199",
      email: "",
      vehicle: "2018 Ram 3500 Diesel",
      mileage: "86,000 miles",
      service: "Diesel truck service",
      location: "Medford, OR",
      urgency: "This week",
      photos: "0 photos selected",
      notes: "Wants a diesel inspection, brake check, and transport quote before buying.",
      status: "New",
      created: "Today"
    }
  ],
  roadRescueRequests: [],
  projectLeads: [
    {
      id: "project-demo",
      contactName: "Sample Property Owner",
      phone: "(541) 555-7710",
      email: "owner@example.com",
      projectType: "MULTIFAMILY",
      projectTitle: "Sample Oregon multifamily review",
      projectDescription: "Early review for a small multifamily opportunity with site control and design questions.",
      propertyAddress: "Demo property address",
      city: "Medford",
      state: "OR",
      county: "Jackson",
      budgetRange: "ONE_FIFTY_TO_500K",
      timeline: "3-6 months",
      projectStage: "OWN_PROPERTY",
      ownsProperty: "yes",
      hasPlans: "no",
      hasPermits: "no",
      needsFinancing: "unsure",
      uploadPhotos: "0 photos selected",
      uploadDocuments: "0 documents selected",
      preferredContactMethod: "Phone",
      consentToShareWithPartner: true,
      status: "MAJOR_PROJECT_REVIEW",
      route: "Major Projects Review",
      adminNote: "Demo major project lead. Forge must approve before any third-party sharing.",
      created: "Today"
    }
  ],
  projectLeadNotes: [
    {
      id: "project-note-demo",
      projectLeadId: "project-demo",
      author: "Forge Admin",
      body: "Confirm scope, ownership, budget source, license/insurance requirements, and partner sharing consent before routing.",
      created: "Today"
    }
  ],
  partners: [
    {
      id: "seneca-development-co",
      name: "Seneca Development Co.",
      subtitle: "Major Project & Development Partner",
      region: "Portland, OR",
      focus: "Multifamily, mixed-use, construction, development, and operations",
      contactRelationshipNote: "Michael Hamilton relationship - pending approval.",
      partnerType: "MAJOR_PROJECT_DEVELOPMENT",
      approved: false,
      publicDisplayEnabled: false,
      logoUseApproved: false,
      referralAgreementSigned: false,
      dataSharingApproved: false,
      officialPartnerLanguageApproved: false,
      featureFlag: "senecaPartnerApproved",
      status: "Draft partner record",
      publicDisplayRule: "Do not show Seneca publicly as an official partner unless approved is true and publicDisplayEnabled is true.",
      adminDescription: "Seneca Development Co. is being tracked as a potential major-project and development partner candidate for serious real estate, construction, multifamily, mixed-use, and development opportunities in Oregon and Washington. No public partnership claim, logo use, customer data sharing, or official language is allowed until written approval is recorded.",
      bestFit: ["Multifamily development", "Mixed-use development", "Apartment upgrades", "Commercial property improvements", "Land development", "Investor-backed builds", "Major renovations", "Portland metro / Oregon / Southwest Washington opportunities"],
      disclaimer: "Partner routing is subject to approval, project fit, licensing, insurance, and written partner agreement."
    },
    {
      id: "flex",
      name: "Flex",
      subtitle: "Business Finance Candidate",
      region: "Configurable through FLEX_APP_URL or Forge Capital Desk",
      focus: "Business banking, expense management, bill pay, vendor payments, working capital, and finance operations",
      contactRelationshipNote: "Zaid relationship - pending approval.",
      partnerType: "BUSINESS_FINANCE",
      approved: false,
      publicDisplayEnabled: false,
      logoUseApproved: false,
      referralAgreementSigned: false,
      dataSharingApproved: false,
      officialPartnerLanguageApproved: false,
      featureFlag: "flexPartnerApproved",
      status: "Draft partner record",
      publicDisplayRule: "Do not show Flex publicly as an official partner unless approved is true and publicDisplayEnabled is true.",
      adminDescription: "Flex is being tracked as a potential contractor finance and business-tools partner candidate for builders, contractors, service businesses, and project operators who need business banking, credit, expense management, bill pay, vendor payments, working capital, AP/AR automation, and related business finance tools. No public partnership claim, logo use, customer data sharing, or official language is allowed until written approval is recorded.",
      bestFit: ["Contractors", "Builders", "Remodelers", "Blue-collar service businesses", "Project operators", "Businesses with vendor payments", "Businesses with cash-flow gaps", "Businesses needing expense controls", "Businesses needing AP/AR automation"],
      disclaimer: "Finance partner routing is subject to written approval, consent, eligibility, partner terms, and data-sharing approval. Forge is not a lender, bank, broker-dealer, financial advisor, or credit provider."
    },
    {
      id: "marc-portland-luxury-auto-partner",
      name: "Private Luxury Auto Partner",
      internalNickname: "Marc - Portland Luxury Auto Partner",
      customerFacingBrand: "Forge Platinum Auto Concierge",
      subtitle: "Luxury Auto Fulfillment Candidate",
      region: "Portland, Lake Oswego, Beaverton, Vancouver WA, and broader Oregon by admin approval",
      focus: "Luxury car sourcing, exotic vehicle selling, premium SUV support, consignment, auction sourcing, and white-glove transport",
      contactRelationshipNote: "Private internal auto partner candidate. Do not publish personal or company branding without written approval.",
      partnerType: "luxury_auto_partner",
      approved: false,
      publicDisplayEnabled: false,
      logoUseApproved: false,
      referralAgreementSigned: false,
      dataSharingApproved: false,
      officialPartnerLanguageApproved: false,
      brandingPermissionConfirmed: false,
      featureFlag: "forgePlatinumAutoConcierge",
      status: "Internal candidate record",
      publicDisplayRule: "Do not publicly display the internal partner name, company name, branding, logo, photos, or services unless written approval and admin branding permission are confirmed. Forge Platinum Auto Concierge remains the customer-facing brand.",
      adminDescription: "Marc is approved as a potential Portland-area luxury automotive fulfillment partner for Forge Platinum Auto Concierge. Do not publicly display Marc's name, company name, branding, logo, photos, or services unless written approval and admin branding permission are confirmed. Forge Platinum remains the customer-facing brand.",
      bestFit: ["Luxury cars", "Exotic vehicles", "Premium SUVs", "Executive transport", "High-value consignment", "Auction vehicle sourcing", "Portland metro auto needs"],
      disclaimer: "Partner routing is subject to customer consent, partner approval, licensing, written agreement, and admin branding permission."
    }
  ],
  partnerReferrals: [],
  partnerDocuments: [
    {
      id: "seneca-docs-required",
      partnerId: "seneca-development-co",
      required: partnerDocumentTypes,
      received: [],
      status: "Pending written partner agreement"
    },
    {
      id: "flex-docs-required",
      partnerId: "flex",
      required: partnerDocumentTypes,
      received: [],
      status: "Pending finance partner configuration"
    }
  ],
  buildingLeads: [],
  homebuildingLeads: [],
  northstarLeads: [
    {
      id: "northstar-demo",
      category: NORTHSTAR_CATEGORY_VALUE,
      secondaryCategory: NORTHSTAR_OPERATIONS_CATEGORY_VALUE,
      name: "Sample Contractor",
      businessName: "Rogue Valley Remodel Co.",
      phone: "(541) 555-3344",
      email: "owner@example.com",
      city: "Medford, OR",
      trade: "Remodeling contractor",
      website: "",
      social: "",
      servicesNeeded: ["Website", "CRM", "Job tracking", "Review generation"],
      budget: "$1,500 - $3,000/month",
      problem: "Leads come from referrals but follow-up is inconsistent and there is no job pipeline.",
      goal: "Look professional online, capture more remodel leads, and track estimates over the next 90 days.",
      consent: true,
      status: "New",
      created: "Today",
      adminNotes: ""
    }
  ],
  flexLeads: [
    {
      id: "flex-demo",
      created_at: "Today",
      updated_at: "Today",
      owner_name: "Sample Shop Owner",
      business_name: "Rogue Valley Auto Works",
      email: "owner@example.com",
      phone: "(541) 555-4422",
      city: "Medford",
      state: "OR",
      industry: "Auto shop",
      website: "",
      years_in_business: "3-5 years",
      monthly_revenue_range: "$75k - $150k",
      monthly_spend_range: "$25k - $50k",
      employee_count: "6-20",
      primary_need: "Fuel, equipment, materials, employee cards",
      interested_in_forge_job_leads: true,
      interested_in_north_star_marketing: false,
      interested_in_payment_processing: true,
      interested_in_website_crm_automation: false,
      consent_to_contact: true,
      consent_to_receive_flex_referral: true,
      referral_source: "demo",
      flex_referral_url_sent: "",
      lead_score: 60,
      status: "new",
      notes: "Demo Capital Desk lead. Use only for local MVP proof."
    }
  ],
  opportunityLeads: [
    {
      id: "opportunity-demo",
      name: "Sample Applicant",
      phone: "(541) 555-2233",
      email: "",
      goal: "Union / apprenticeship",
      experience: "Some hands-on experience",
      location: "Medford, OR",
      note: "Interested in electrical apprenticeship and blue-collar AI field-tech work.",
      status: "New",
      created: "Today"
    }
  ],
  activity: [
    { at: "Today", text: "Forge MVP opened for early lead capture." },
    { at: "Today", text: "Demo worker and job leads loaded." }
  ],
  lastConfirmation: {
    type: "welcome",
    title: "Forge is ready for early signups.",
    body: "Post a job or join the worker list to see the MVP collect real local leads.",
    details: ["Job leads save to Admin", "Worker leads save to Admin", "CSV exports are ready"],
    nextSteps: ["Choose why you came to Forge", "Submit a real job or worker profile", "Forge keeps the next follow-up visible"],
    primary: { label: "Post a Job", screen: "post" },
    secondary: { label: "Join as a Worker", screen: "signup" }
  }
};

const timeline = [
  ["Week 1", "Foundation", ["Connect Supabase", "Build job posting flow", "Admin lead dashboard", "Email notifications"]],
  ["Week 2", "Jobs & Workers", ["Worker sign up", "Jobs listing live", "Basic bidding system", "Messaging system"]],
  ["Week 3", "Payments Setup", ["Payments & deposits", "Job management", "Worker dashboard", "Mobile optimization"]],
  ["Week 4", "Trust & Safety", ["Reviews & ratings", "Dispute resolution", "Advanced filters", "Performance polish"]],
  ["Week 5", "Launch", ["Final testing", "Go live", "Start marketing", "Gather feedback"]]
];

const demoSteps = [
  ["1", "Post a job", "Show how a homeowner submits work in three steps.", "post"],
  ["2", "Browse jobs", "Show workers the available job list and filters.", "jobs"],
  ["3", "Submit a bid", "Show how a worker sends price and timeline.", "bid"],
  ["4", "Check status", "Show a job poster where bids appear.", "status"],
  ["5", "Admin follow-up", "Show how Forge captures and follows up with leads.", "admin"],
  ["6", "Perspective demo", "Pick a role and show Forge from that person’s side.", "perspective"],
  ["7", "Training & careers", "Show how a person can save school, union, apprenticeship, or AI job interest.", "opportunities"]
];
const demoGuide = [
  ["1", "Start with the person", "Ask whether they are posting work, looking for work, or helping operate Forge."],
  ["2", "Open their perspective", "Pick John, Mike, or Admin and show only the screens that matter to them first."],
  ["3", "Show the proof", "Open Profile Status, job/bid status, Messages, then the next action."],
  ["4", "Capture commitment", "Ask them to post a real job, join as a worker, or give you one referral."]
];
const demoCueCards = [
  {
    role: "customer",
    audience: "Homeowner",
    opener: "You should be able to see what is happening with your job without chasing people.",
    proof: "Open John, show job status, bids, selected handoff, and the next message.",
    ask: "Would you post one real job so Forge can help you find the first crew?"
  },
  {
    role: "worker",
    audience: "Worker",
    opener: "You should be able to find local paid work without guessing who is serious.",
    proof: "Open Mike, show available jobs, bid flow, profile readiness, and messages.",
    ask: "Would you join the worker list and bid on one early job when it fits?"
  },
  {
    role: "admin",
    audience: "Operator",
    opener: "Forge is useful only if every lead has a next action and nothing falls through.",
    proof: "Open Admin, show first-200 lanes, follow-up queue, reports, safety, and exports.",
    ask: "Who is one homeowner, worker, or business owner we should capture today?"
  },
  {
    role: "career",
    demoRole: "customer",
    screen: "opportunities",
    audience: "Career Applicant",
    opener: "Forge can help someone turn blue-collar ambition into an organized application plan.",
    proof: "Open Training & Careers, show trade school, union/apprenticeship, and blue-collar AI paths, then save interest.",
    ask: "Would you save your career goal so Forge can help you follow up with the right program or employer?"
  },
  {
    role: "autos",
    demoRole: "customer",
    screen: "auto",
    audience: "Auto buyer / seller",
    opener: "Forge Auto can capture vehicle service, sales, repair, transport, detailing, and customization demand without pretending to be the licensed provider.",
    proof: "Open Forge Auto, show the service request form, service categories, listings, dealer network, buyer inquiry queue, and partner setup checklist.",
    ask: "Which auto partner, mechanic, transport provider, or dealer contact should we confirm first?"
  }
];
const startPaths = [
  {
    label: "I have work to post",
    title: "Post one real job.",
    body: "Tell Forge what needs to get done, your location, budget, and contact info.",
    next: "Forge saves the job, starts matching workers, and keeps the next message visible.",
    screen: "post",
    action: "Post Job",
    tone: "orange"
  },
  {
    label: "I am building or improving a home",
    title: "Forge Homebuilding & Development.",
    body: "Start a home build, ADU, remodel, investor project, or contractor partnership request.",
    next: "Forge saves project context and helps route next steps through trusted builders, trades, and support partners.",
    screen: "homebuilding",
    action: "Homebuilding",
    tone: "ghost"
  },
  {
    label: "I have a project opportunity",
    title: "Open Forge Projects.",
    body: "Submit a home project, major renovation, multifamily, mixed-use, commercial, land, or investment-backed project.",
    next: "Forge routes smaller work to Forge Pros and larger opportunities to Major Projects Review before partner routing.",
    screen: "projects",
    action: "Projects",
    tone: "blue"
  },
  {
    label: "I need a photographer or videographer",
    title: "Book a local creative.",
    body: "Request coverage for weddings, events, business content, real estate, social media, family photos, or community work.",
    next: "Forge saves the creative brief and routes it to approved local photographers and videographers.",
    screen: "creative",
    action: "Hire a Photographer",
    tone: "orange"
  },
  {
    label: "I want paid local work",
    title: "Join the worker list.",
    body: "Create a basic worker profile with trade, service area, phone, and email.",
    next: "Forge saves readiness status so workers can be matched to early jobs.",
    screen: "signup",
    action: "Join Worker List",
    tone: "blue"
  },
  {
    label: "My business needs breathing room",
    title: "Forge Capital Desk.",
    body: "Tell Forge what your business needs and request approved finance partner review when available.",
    next: "Forge collects basic contact info and consent, then keeps any partner review behind approval and data-sharing gates.",
    screen: "capital",
    action: "Finance Review",
    tone: "orange"
  },
  {
    label: "I want training or a better job",
    title: "Plan a blue-collar career move.",
    body: "Save interest in trade school, union apprenticeship, or blue-collar AI field work.",
    next: "Forge organizes the application path and keeps the follow-up visible for the operator.",
    screen: "opportunities",
    action: "Explore Careers",
    tone: "ghost"
  },
  {
    label: "I already posted",
    title: "Check job status.",
    body: "Look up posted jobs, bids, messages, and the active selected-bid handoff.",
    next: "Forge shows what changed and the next step to move the job forward.",
    screen: "status",
    action: "Check Status",
    tone: "ghost"
  }
];

let state = loadState();
let postStep = 1;
let statusMatches = [];

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)) || structuredClone(seedState));
  } catch {
    return normalizeState(structuredClone(seedState));
  }
}

function normalizeState(value) {
  const next = { ...structuredClone(seedState), ...value };
  next.settings = { ...seedState.settings, ...(value?.settings || {}) };
  next.session = { ...seedState.session, ...(value?.session || {}) };
  next.activeMessageThreadId = value?.activeMessageThreadId || seedState.activeMessageThreadId;
  next.jobs = value?.jobs || seedState.jobs;
  next.bids = value?.bids || seedState.bids;
  next.messages = value?.messages || seedState.messages;
  next.vehicles = value?.vehicles || seedState.vehicles;
  next.autoInquiries = value?.autoInquiries || seedState.autoInquiries;
  next.autoRequests = value?.autoRequests || seedState.autoRequests;
  next.roadRescueRequests = value?.roadRescueRequests || seedState.roadRescueRequests;
  next.projectLeads = value?.projectLeads || seedState.projectLeads;
  next.projectLeadNotes = value?.projectLeadNotes || seedState.projectLeadNotes;
  next.partners = value?.partners || seedState.partners;
  next.partnerReferrals = value?.partnerReferrals || seedState.partnerReferrals;
  next.partnerDocuments = value?.partnerDocuments || seedState.partnerDocuments;
  next.buildingLeads = value?.buildingLeads || seedState.buildingLeads;
  next.homebuildingLeads = value?.homebuildingLeads || seedState.homebuildingLeads;
  next.northstarLeads = value?.northstarLeads || seedState.northstarLeads;
  next.flexLeads = value?.flexLeads || seedState.flexLeads;
  next.opportunityLeads = value?.opportunityLeads || seedState.opportunityLeads;
  next.worker = normalizeDemoWorker(value?.worker || seedState.worker);
  next.workers = value?.workers || [next.worker, ...seedState.workers.slice(1)];
  next.referrals = value?.referrals || seedState.referrals;
  next.jobs = next.jobs.map((job) => normalizeServiceJob({ notes: "", phone: "", email: "", customer: "Unknown", ...job }));
  next.bids = next.bids.map((bid) => normalizeServiceBid({ id: `${bid.jobId}-${bid.worker}`, timeline: "TBD", message: "", status: "Submitted", rating: "New", reviews: 0, chosen: false, ...bid }));
  next.bids = next.bids.map((bid) => bid.worker === "Medford Handyman" ? { ...bid, id: "bid-mike-jones", worker: "Mike Jones" } : bid);
  next.workers = next.workers.map((worker) => normalizeServiceProvider({ status: "New", ...normalizeDemoWorker(worker) }));
  ensureMikeJones(next);
  next.referrals = next.referrals.map((referral) => ({ status: "New", priority: "Warm", note: "", email: "", ...referral }));
  next.messages = next.messages.map((message) => ({ status: "Sent", sentAt: "Today", from: "Forge", ...message }));
  next.vehicles = next.vehicles.map((vehicle) => ({ status: "Available", posted: "Today", email: "", dealerId: "s-and-a-auto", ...vehicle }));
  next.autoInquiries = next.autoInquiries.map((inquiry) => ({ status: "New", created: "Today", email: "", note: "", dealerId: "s-and-a-auto", ...inquiry }));
  next.autoRequests = next.autoRequests.map((request) => ({ status: "New", created: "Today", email: "", notes: "", photos: "0 photos selected", ...request }));
  next.roadRescueRequests = next.roadRescueRequests.map((request) => ({
    service_type: ROAD_RESCUE_SERVICE_TYPE,
    issue_type: "pothole",
    issueTypes: [],
    issueLabels: [],
    status: "New",
    created: "Today",
    email: "",
    notes: "",
    photos: "0 photos selected",
    providerNotification: "",
    ...request
  }));
  next.projectLeads = next.projectLeads.map((lead) => normalizeProjectLead({
    contactName: "Project owner",
    phone: "",
    email: "",
    projectType: "OTHER",
    projectTitle: "Untitled project",
    projectDescription: "",
    propertyAddress: "",
    city: "",
    state: "OR",
    county: "",
    budgetRange: "UNDER_10K",
    timeline: "Flexible",
    projectStage: "IDEA_ONLY",
    ownsProperty: "unknown",
    hasPlans: "unknown",
    hasPermits: "unknown",
    needsFinancing: "unknown",
    uploadPhotos: "0 photos selected",
    uploadDocuments: "0 documents selected",
    preferredContactMethod: "Phone",
    consentToShareWithPartner: false,
    status: "NEW",
    created: "Today",
    adminNote: "",
    ...lead
  }));
  next.projectLeadNotes = next.projectLeadNotes.map((note) => ({ author: "Forge Admin", body: "", created: "Today", ...note }));
  next.partners = next.partners.map((partner) => normalizePartner(partner));
  ensureDraftPartnerRecords(next);
  next.partnerReferrals = next.partnerReferrals.map((referral) => ({ status: "PENDING", created: "Today", ...referral }));
  next.partnerDocuments = next.partnerDocuments.map((document) => ({ required: partnerDocumentTypes, received: [], status: "Pending", ...document }));
  ensurePartnerDocumentPlaceholders(next);
  next.buildingLeads = next.buildingLeads.map((lead) => normalizeBuildingLead(lead));
  next.homebuildingLeads = next.homebuildingLeads.map((lead) => normalizeHomebuildingLead({ status: "New", created: "Today", email: "", notes: "", uploads: "0 files selected", ...lead }));
  next.northstarLeads = next.northstarLeads.map((lead) => ({ status: "New", created: "Today", email: "", adminNotes: "", servicesNeeded: [], category: NORTHSTAR_CATEGORY_VALUE, secondaryCategory: NORTHSTAR_OPERATIONS_CATEGORY_VALUE, ...lead }));
  next.flexLeads = next.flexLeads.map((lead) => normalizeFlexLead(lead));
  next.opportunityLeads = next.opportunityLeads.map((lead) => ({ status: "New", created: "Today", email: "", note: "", location: "Medford, OR", ...lead }));
  next.activity = value?.activity || seedState.activity;
  next.lastConfirmation = value?.lastConfirmation || seedState.lastConfirmation;
  return next;
}

function normalizePartner(partner) {
  return {
    id: "",
    name: "",
    subtitle: "",
    region: "",
    focus: "",
    contactRelationshipNote: "",
    partnerType: "GENERAL",
    approved: false,
    publicDisplayEnabled: false,
    logoUseApproved: false,
    referralAgreementSigned: false,
    dataSharingApproved: false,
    officialPartnerLanguageApproved: false,
    featureFlag: "",
    status: "Draft partner record",
    publicDisplayRule: "Do not show publicly as an official partner unless approved is true and publicDisplayEnabled is true.",
    adminDescription: "",
    bestFit: [],
    disclaimer: "",
    ...partner
  };
}

function ensureDraftPartnerRecords(next) {
  for (const seedPartner of seedState.partners) {
    const index = next.partners.findIndex((partner) => partner.id === seedPartner.id);
    if (index >= 0) {
      next.partners[index] = normalizePartner({ ...seedPartner, ...next.partners[index] });
    } else {
      next.partners.push(normalizePartner(seedPartner));
    }
  }
}

function ensurePartnerDocumentPlaceholders(next) {
  for (const seedDocument of seedState.partnerDocuments) {
    if (!next.partnerDocuments.some((document) => document.partnerId === seedDocument.partnerId)) {
      next.partnerDocuments.push({ ...seedDocument });
    }
  }
}

function normalizeFlexLead(lead) {
  const next = {
    id: lead.id || `flex-${Date.now()}`,
    created_at: lead.created_at || lead.created || "Today",
    updated_at: lead.updated_at || lead.updated || "Today",
    owner_name: "",
    business_name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    industry: "",
    website: "",
    years_in_business: "",
    monthly_revenue_range: "",
    monthly_spend_range: "",
    employee_count: "",
    primary_need: "",
    interested_in_forge_job_leads: false,
    interested_in_north_star_marketing: false,
    interested_in_payment_processing: false,
    interested_in_website_crm_automation: false,
    consent_to_contact: false,
    consent_to_receive_flex_referral: false,
    referral_source: "forge_capital_desk",
    flex_referral_url_sent: "",
    lead_score: 0,
    status: "new",
    notes: "",
    ...lead
  };
  next.status = flexLeadStatuses.includes(next.status) ? next.status : "new";
  next.interested_in_forge_job_leads = Boolean(lead.interested_in_forge_job_leads ?? lead.interested_in_forge_services ?? next.interested_in_forge_job_leads);
  next.interested_in_forge_services = next.interested_in_forge_job_leads;
  next.interested_in_north_star_marketing = Boolean(next.interested_in_north_star_marketing);
  next.interested_in_payment_processing = Boolean(next.interested_in_payment_processing);
  next.interested_in_website_crm_automation = Boolean(next.interested_in_website_crm_automation);
  next.consent_to_contact = Boolean(next.consent_to_contact);
  next.consent_to_receive_flex_referral = Boolean(next.consent_to_receive_flex_referral);
  next.lead_score = calculateFlexLeadScore(next);
  return next;
}

function calculateFlexLeadScore(lead) {
  let score = 0;
  const spend = String(lead.monthly_spend_range || "").toLowerCase();
  const years = String(lead.years_in_business || "").toLowerCase();
  const employees = String(lead.employee_count || "").toLowerCase();
  const primaryNeed = String(lead.primary_need || "").toLowerCase();
  if (/\$10k|\$25k|\$50k|\+/.test(spend) && !/under/.test(spend)) score += 10;
  if (/1-2|3-5|5\+|10\+/.test(years)) score += 10;
  if (/2-5|6-20|21-50|51\+/.test(employees)) score += 10;
  if (flexPrimaryNeedKeywords.some((keyword) => primaryNeed.includes(keyword))) score += 10;
  if (lead.interested_in_forge_job_leads || lead.interested_in_forge_services) score += 10;
  if (lead.interested_in_north_star_marketing) score += 10;
  if (lead.interested_in_payment_processing) score += 10;
  if (lead.interested_in_website_crm_automation) score += 10;
  return score;
}

function flexReferralUrl() {
  return NEXT_PUBLIC_FLEX_REFERRAL_URL || FLEX_REFERRAL_URL_PLACEHOLDER;
}

function flexStatusLabel(status) {
  return humanize(String(status || "new").replaceAll("_", " "));
}

function flexLeadWebhookPayload(lead) {
  return {
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
    interested_in_forge_job_leads: lead.interested_in_forge_job_leads,
    interested_in_north_star_marketing: lead.interested_in_north_star_marketing,
    interested_in_payment_processing: lead.interested_in_payment_processing,
    interested_in_website_crm_automation: lead.interested_in_website_crm_automation,
    status: lead.status
  };
}

function normalizeProjectLead(lead) {
  const route = projectLeadRouting(lead);
  const existingStatus = projectStatuses.includes(lead.status) ? lead.status : "NEW";
  const status = existingStatus === "NEW" ? route.initialStatus : existingStatus;
  return {
    ...lead,
    projectType: projectTypeOptions.some(([value]) => value === lead.projectType) ? lead.projectType : "OTHER",
    budgetRange: budgetRangeOptions.some(([value]) => value === lead.budgetRange) ? lead.budgetRange : "UNDER_10K",
    projectStage: projectStageOptions.some(([value]) => value === lead.projectStage) ? lead.projectStage : "IDEA_ONLY",
    state: normalizeProjectState(lead.state),
    consentToShareWithPartner: Boolean(lead.consentToShareWithPartner),
    status,
    route: route.route,
    senecaReviewAllowed: route.senecaReviewAllowed(status)
  };
}

function projectLeadRouting(lead) {
  const budgetRange = lead.budgetRange || "UNDER_10K";
  const projectType = lead.projectType || "OTHER";
  const stateValue = normalizeProjectState(lead.state);
  const major = majorProjectBudgets.includes(budgetRange) || majorProjectTypes.includes(projectType);
  const forgePros = under150kProjectBudgets.includes(budgetRange) && forgeProsProjectTypes.includes(projectType);
  const initialStatus = forgePros ? "ROUTED_TO_FORGE_PRO" : major ? "MAJOR_PROJECT_REVIEW" : "NEW";
  const route = forgePros ? "Normal Forge Pros" : major ? "Major Projects Review" : "Project Intake Review";
  return {
    initialStatus,
    route,
    major,
    forgePros,
    senecaReviewAllowed: (status) => ["OR", "WA"].includes(stateValue)
      && status === "FORGE_QUALIFIED"
      && Boolean(lead.consentToShareWithPartner)
  };
}

function normalizeBuildingLead(lead) {
  const defaults = {
    id: `building-${Date.now()}`,
    createdAt: "Today",
    updatedAt: "Today",
    leadType: "HOME_PROJECT",
    projectType: "HOME_REPAIR",
    projectTitle: "Untitled building request",
    projectDescription: "",
    propertyAddress: "",
    city: "",
    county: "",
    state: "OR",
    zip: "",
    budgetRange: "NOT_SURE",
    timeline: "Flexible",
    projectStage: "NOT_SURE",
    ownsProperty: "not_sure",
    hasPlans: "not_sure",
    hasPermits: "not_sure",
    needsFinancing: "not_sure",
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    monthlyRevenueRange: "",
    yearsInBusiness: "",
    numberOfEmployees: "",
    financeNeed: "",
    preferredContactMethod: "Phone",
    consentToReview: false,
    consentToContact: false,
    consentToShareWithApprovedPartners: false,
    status: "NEW_BUILDING_LEAD",
    assignedPartnerId: "",
    adminNotes: ""
  };
  const next = { ...defaults, ...lead };
  const route = buildingLeadRouting(next);
  next.leadType = buildingLeadTypeOptions.some(([value]) => value === next.leadType) ? next.leadType : "HOME_PROJECT";
  next.projectType = buildingProjectTypeOptions.some(([value]) => value === next.projectType) ? next.projectType : "OTHER";
  next.budgetRange = buildingBudgetRangeOptions.some(([value]) => value === next.budgetRange) ? next.budgetRange : "NOT_SURE";
  next.projectStage = buildingProjectStageOptions.some(([value]) => value === next.projectStage) ? next.projectStage : "NOT_SURE";
  next.state = normalizeProjectState(next.state);
  next.consentToReview = Boolean(next.consentToReview);
  next.consentToContact = Boolean(next.consentToContact);
  next.consentToShareWithApprovedPartners = Boolean(next.consentToShareWithApprovedPartners);
  next.status = buildingLeadStatuses.includes(next.status) && next.status !== "NEW_BUILDING_LEAD" ? next.status : route.initialStatus;
  next.route = route.route;
  next.senecaEligible = route.senecaEligible;
  next.flexEligible = route.flexEligible;
  next.partnerEligibility = buildingPartnerEligibility(next);
  return next;
}

function buildingLeadRouting(lead) {
  const projectType = lead.projectType || "OTHER";
  const budgetRange = lead.budgetRange || "NOT_SURE";
  const financePresent = Boolean(lead.financeNeed) || lead.leadType === "CONTRACTOR_FINANCE" || projectType === "CONTRACTOR_FINANCE";
  const smallHome = forgeProsProjectTypes.includes(projectType) && under150kProjectBudgets.includes(budgetRange);
  const major = majorProjectTypes.includes(projectType) || majorProjectBudgets.includes(budgetRange);
  const initialStatus = financePresent ? "FLEX_REVIEW_ELIGIBLE" : smallHome ? "HOME_PROJECT_REVIEW" : major ? "MAJOR_PROJECT_REVIEW" : "NEW_BUILDING_LEAD";
  const route = financePresent ? "Finance Partner Review" : smallHome ? "Home Project Review" : major ? "Major Projects Review" : "Building Lead Review";
  return {
    initialStatus,
    route,
    smallHome,
    major,
    financePresent,
    senecaEligible: major,
    flexEligible: financePresent
  };
}

function buildingPartnerEligibility(lead) {
  const route = buildingLeadRouting(lead);
  const missingConsent = !lead.consentToShareWithApprovedPartners;
  const senecaReady = canSendBuildingToSeneca(lead);
  const flexReady = canSendBuildingToFlex(lead);
  if (senecaReady) return "Seneca ready";
  if (flexReady) return "Flex ready";
  if (route.senecaEligible && missingConsent) return "Consent missing";
  if (route.flexEligible && missingConsent) return "Consent missing";
  if (route.senecaEligible || route.flexEligible) return "Blocked by approval";
  return "Forge review";
}

function normalizeProjectState(value) {
  const raw = String(value || "").trim().toUpperCase();
  if (["OREGON", "OR"].includes(raw)) return "OR";
  if (["WASHINGTON", "WA"].includes(raw)) return "WA";
  return raw || "OR";
}

function projectOptionLabel(options, value) {
  return options.find(([option]) => option === value)?.[1] || humanize(String(value || "Unknown").toLowerCase());
}

function projectStatusLabel(status) {
  return humanize(String(status || "NEW").toLowerCase());
}

function buildingStatusLabel(status) {
  return humanize(String(status || "NEW_BUILDING_LEAD").toLowerCase());
}

function senecaPartner() {
  return (state.partners || []).find((partner) => partner.id === "seneca-development-co") || seedState.partners[0];
}

function flexPartner() {
  return (state.partners || []).find((partner) => partner.id === "flex") || seedState.partners.find((partner) => partner.id === "flex");
}

function isSenecaPartnerApproved() {
  const partner = senecaPartner();
  return Boolean(state.settings.senecaPartnerApproved && partner?.approved && partner?.dataSharingApproved);
}

function isFlexPartnerApproved() {
  const partner = flexPartner();
  return Boolean(state.settings.flexPartnerApproved && partner?.approved && partner?.dataSharingApproved);
}

function canPubliclyDisplayPartner(partner) {
  return Boolean(partner?.approved && partner?.publicDisplayEnabled);
}

function partnerCommissionAllowed(partner) {
  return Boolean(partner?.referralAgreementSigned);
}

function normalizeHomebuildingLead(lead) {
  const stage = lead.stage || inferHomebuildingStage(lead);
  const locationState = normalizeLocationState(lead.locationState || lead.state || lead.location);
  const routed = homebuildingRouting({ ...lead, stage, locationState });
  return {
    ...lead,
    stage,
    locationState,
    leadScore: routed.leadScore,
    routingLane: routed.routingLane,
    senecaEligible: routed.senecaEligible,
    status: routed.initialStatus(lead.status)
  };
}

function homebuildingRouting(lead) {
  const budget = homebuildingBudgetRange(lead.budget);
  const normalizedType = normalizeRoutingText(lead.type);
  const normalizedStage = normalizeRoutingText(lead.stage || inferHomebuildingStage(lead));
  const majorTypes = ["multifamily", "mixed use", "commercial", "land development", "investment property", "investor build", "multi unit project"];
  const majorStages = ["own property", "under contract", "have plans", "have permits"];
  const minorRepair = budget.max > 0 && budget.max < 150000 && /home repair|handyman/.test(normalizedType);
  const majorProject = budget.major || majorTypes.includes(normalizedType) || majorStages.includes(normalizedStage);
  const leadScore = homebuildingLeadScore(lead, budget, normalizedType, normalizedStage, minorRepair);
  const locationState = normalizeLocationState(lead.locationState || lead.state || lead.location);
  const routingLane = minorRepair ? "Normal Forge Pros First" : majorProject ? "Major Projects Review" : "Homebuilding Review";
  return {
    routingLane,
    leadScore,
    senecaEligible: ["OR", "WA"].includes(locationState) && leadScore >= 70,
    initialStatus: (existingStatus) => {
      if (homebuildingStatuses.includes(existingStatus) && existingStatus !== "New") return existingStatus;
      return minorRepair ? "Routed to Forge Pro" : "New Project Lead";
    }
  };
}

function homebuildingLeadScore(lead, budget, normalizedType, normalizedStage, minorRepair) {
  let score = 20;
  if (budget.min >= 1000000) score += 35;
  else if (budget.min >= 500000) score += 32;
  else if (budget.min >= 250000) score += 28;
  else if (budget.major) score += 24;
  else if (budget.max > 0 && budget.max < 150000) score += 5;
  else score += 10;

  if (["multifamily", "mixed use", "commercial", "land development", "investment property", "investor build", "multi unit project"].includes(normalizedType)) score += 22;
  else if (!/home repair|handyman/.test(normalizedType) && normalizedType) score += 12;

  if (["own property", "under contract", "have plans", "have permits"].includes(normalizedStage)) score += 22;
  else if (["looking for land", "exploring"].includes(normalizedStage)) score += 6;

  if (["OR", "WA"].includes(normalizeLocationState(lead.locationState || lead.state || lead.location))) score += 10;
  if (lead.phone && lead.email) score += 8;
  if ((lead.notes || "").trim().length > 30) score += 4;
  if (!/^0 file/.test(lead.uploads || "0 files selected")) score += 4;

  return Math.max(0, Math.min(minorRepair ? 65 : 100, score));
}

function homebuildingBudgetRange(value) {
  const label = String(value || "").toLowerCase();
  if (label.includes("under") && label.includes("100")) return { min: 0, max: 99999, major: false };
  if (label.includes("100") && label.includes("150")) return { min: 100000, max: 149999, major: false };
  if (label.includes("100") && label.includes("250")) return { min: 100000, max: 250000, major: true };
  if (label.includes("150") && label.includes("250")) return { min: 150000, max: 250000, major: true };
  if (label.includes("250") && label.includes("500")) return { min: 250000, max: 500000, major: true };
  if (label.includes("500") && label.includes("1m")) return { min: 500000, max: 1000000, major: true };
  if (label.includes("1m")) return { min: 1000000, max: Number.POSITIVE_INFINITY, major: true };
  return { min: 0, max: 0, major: false };
}

function inferHomebuildingStage(lead) {
  if (normalizeRoutingText(lead.land) === "under contract") return "Under contract";
  if (normalizeRoutingText(lead.land) === "yes") return "Own property";
  if (["yes", "in progress"].includes(normalizeRoutingText(lead.plans))) return "Have plans";
  if (normalizeRoutingText(lead.land) === "looking for land") return "Looking for land";
  return "Exploring";
}

function normalizeLocationState(value) {
  const raw = String(value || "").trim();
  const upper = raw.toUpperCase();
  if (["OR", "OREGON"].includes(upper) || /\bOR\b|OREGON/i.test(raw)) return "OR";
  if (["WA", "WASHINGTON"].includes(upper) || /\bWA\b|WASHINGTON/i.test(raw)) return "WA";
  if (["CA", "CALIFORNIA"].includes(upper) || /\bCA\b|CALIFORNIA/i.test(raw)) return "CA";
  if (["ID", "IDAHO"].includes(upper) || /\bID\b|IDAHO/i.test(raw)) return "ID";
  return upper && upper.length <= 3 ? upper : "Other";
}

function normalizeRoutingText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[/-]/g, " ")
    .replace(/\s+/g, " ");
}

function normalizeDemoWorker(worker) {
  if (!worker) return structuredClone(seedState.worker);
  if (worker.name === "Mike Johnson" || worker.email === "mike.johnson@email.com") {
    return {
      ...worker,
      name: "Mike Jones",
      email: "mike.jones@email.com"
    };
  }
  return worker;
}

function ensureMikeJones(next) {
  const mike = { ...seedState.worker, status: "Ready" };
  const existingIndex = next.workers.findIndex((worker) => samePerson(worker.name, "Mike Jones") || samePerson(worker.email, mike.email));
  if (existingIndex >= 0) {
    next.workers[existingIndex] = { ...mike, ...next.workers[existingIndex], name: "Mike Jones", email: mike.email };
  } else {
    next.workers.unshift(mike);
  }
  if (!next.worker || samePerson(next.worker.name, "Mike Johnson") || samePerson(next.worker.email, "mike.johnson@email.com")) {
    next.worker = { ...mike };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function categoryValue(category) {
  if (category === CREATIVE_CATEGORY_LABEL) return CREATIVE_CATEGORY_VALUE;
  if (category === NORTHSTAR_CATEGORY_LABEL) return NORTHSTAR_CATEGORY_VALUE;
  return category;
}

function categoryLabel(category) {
  if (category === CREATIVE_CATEGORY_VALUE) return CREATIVE_CATEGORY_LABEL;
  if (category === NORTHSTAR_CATEGORY_VALUE || category === NORTHSTAR_OPERATIONS_CATEGORY_VALUE) return NORTHSTAR_CATEGORY_LABEL;
  return category;
}

function categoryMatches(jobCategory, selectedCategory) {
  return selectedCategory === "All Categories"
    || jobCategory === selectedCategory
    || categoryLabel(jobCategory) === selectedCategory;
}

function serviceVerticalById(id) {
  return serviceVerticals.find((vertical) => vertical.id === id) || null;
}

function serviceVerticalForCategory(category) {
  const label = categoryLabel(category);
  return serviceVerticals.find((vertical) => vertical.categories.includes(label) || vertical.title === label || vertical.shortTitle === label) || null;
}

function serviceVerticalForProvider(worker) {
  return serviceVerticalById(worker?.serviceVertical)
    || serviceVerticalForCategory(worker?.providerCategory)
    || serviceVerticalForCategory(worker?.trade)
    || serviceVerticalForCategory(worker?.category)
    || null;
}

function isServiceVerticalJob(job) {
  return Boolean(serviceVerticalById(job?.serviceVertical) || serviceVerticalForCategory(job?.category));
}

function isServiceVerticalProvider(worker) {
  return Boolean(serviceVerticalForProvider(worker));
}

function normalizeServiceJob(job) {
  const vertical = serviceVerticalById(job.serviceVertical) || serviceVerticalForCategory(job.category || job.categoryLabel);
  if (!vertical) return job;
  return {
    serviceVertical: vertical.id,
    serviceVerticalTitle: vertical.title,
    serviceDetails: {},
    servicePhotoSummary: "0 photos selected",
    status: job.status || "Open for bids",
    ...job,
    categoryLabel: job.categoryLabel || categoryLabel(job.category)
  };
}

function normalizeServiceProvider(worker) {
  const vertical = serviceVerticalForProvider(worker);
  if (!vertical) return worker;
  return {
    serviceVertical: vertical.id,
    serviceVerticalTitle: vertical.title,
    providerType: worker.providerType || vertical.providerTypes[0],
    profileDetails: {},
    tags: [],
    serviceArea: worker.area || worker.serviceArea || "",
    ...worker
  };
}

function normalizeServiceBid(bid) {
  return {
    earliestAvailability: "",
    estimatedDuration: "",
    crewMembers: "",
    materialsIncluded: "No",
    suppliesIncluded: "No",
    equipmentIncluded: "No",
    dumpFeesIncluded: "No",
    laundryIncluded: "No",
    restockingIncluded: "No",
    recurringAvailable: "No",
    experienceNote: "",
    ...bid
  };
}

function isCreativeJob(job) {
  return categoryValue(job?.category) === CREATIVE_CATEGORY_VALUE;
}

function isCreativeProvider(worker) {
  return categoryValue(worker?.providerCategory || worker?.category || worker?.trade) === CREATIVE_CATEGORY_VALUE
    || categoryValue(worker?.trade) === CREATIVE_CATEGORY_VALUE
    || worker?.trade === CREATIVE_CATEGORY_LABEL;
}

function normalizeScreen(screen) {
  if (screen === "auto" || screen === "autos") return "autos";
  if (["road-rescue", "road_rescue", "roadrescue", "road-help", "road-help-request", "pothole-help"].includes(screen)) return "road-rescue";
  if (["photo", "photos", "video", "creative", "photography", "photography-videography", CREATIVE_CATEGORY_VALUE, CREATIVE_CATEGORY_SLUG].includes(screen)) return "creative";
  if (["photography/request", "photography-request", "creative-request", "request-shoot"].includes(screen)) return "creative-request";
  if (["photography/apply", "photography-apply", "creative-apply", "apply-photographer"].includes(screen)) return "creative-apply";
  if (["northstar", "northstar-creative", "northstar-creative-co", "business-growth", "marketing", NORTHSTAR_CATEGORY_VALUE, NORTHSTAR_OPERATIONS_CATEGORY_VALUE].includes(screen)) return "northstar";
  if (["capital", "forge/capital", "forge-flex", "forge/flex", "partners/flex", "flex", "capital-desk"].includes(screen)) return "capital";
  if (["building", "forge-building", "buildings"].includes(screen)) return "building";
  if (["admin/building-leads", "building-leads", "admin-building"].includes(screen)) return "admin-building-leads";
  if (screen === "admin/projects") return "admin-projects";
  return screen || "home";
}

function visibleScreenFor(screen) {
  return ["creative-request", "creative-apply"].includes(screen) ? "creative" : screen;
}

function screenExists(screen) {
  return Boolean(document.querySelector(`[data-screen="${visibleScreenFor(normalizeScreen(screen))}"]`));
}

function navigate(screen, options = {}) {
  screen = normalizeScreen(screen);
  const operatorScreens = ["admin", "admin-projects", "admin-building-leads", "capture", "reports"];
  if (screen === "profile" && state.session.role === "guest") {
    showToast("Log in to view profile status.");
    screen = "login";
  }
  if (screen === "messages" && state.session.role === "guest") {
    showToast("Log in to open Forge Messages.");
    screen = "login";
  }
  if (operatorScreens.includes(screen) && state.session.role !== "admin") {
    showToast("Log in as Forge Admin to open operator tools.");
    screen = "login";
  } else if (state.settings.publicMode && state.session.role !== "admin" && operatorScreens.includes(screen)) {
    showToast("Operator tools are hidden in Public View.");
    screen = "home";
  }
  if (options.jobId) state.activeJobId = options.jobId;
  if (screen === "status" && state.session.role === "customer") loadCustomerStatus(state.session.name);
  if (screen === "messages" && options.threadId) state.activeMessageThreadId = options.threadId;
  const visibleScreen = visibleScreenFor(screen);
  document.querySelectorAll(".screen").forEach((node) => node.classList.toggle("active", node.dataset.screen === visibleScreen));
  history.replaceState(null, "", screenUrl(screen));
  render();
  if (screen === "creative-request") {
    focusAutoPanel("#creativeLeadSection", "#creativeName");
  } else if (screen === "creative-apply") {
    focusAutoPanel("#creativeProviderSection", "#creativeProviderFirstName");
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function screenUrl(screen) {
  screen = normalizeScreen(screen);
  const query = location.search || "";
  if (location.protocol === "file:") return `#${screen === "autos" ? "auto" : screen}`;
  if (routeByScreen[screen]) return `${routeByScreen[screen]}${query}`;
  return `/${query}#${screen}`;
}

function appBaseUrl() {
  const url = new URL(location.href);
  url.hash = "";
  url.search = "";
  if (["/auto", "/auto/", "/road-rescue", "/road-rescue/", "/photography", "/photography/", "/photography/request", "/photography/request/", "/photography/apply", "/photography/apply/", "/photography-videography", "/photography-videography/", "/northstar-creative", "/northstar-creative/", "/forge/capital", "/forge/capital/", "/forge/flex", "/forge/flex/", "/partners/flex", "/partners/flex/", "/building", "/building/", "/admin/building-leads", "/admin/building-leads/", "/projects", "/projects/", "/admin/projects", "/admin/projects/", "/homebuilding", "/homebuilding/", "/homebuilding/tracker", "/homebuilding/tracker/"].includes(url.pathname)) url.pathname = "/";
  return url.toString().replace(/\/$/, "");
}

function render() {
  renderSession();
  renderSelects();
  renderTimeline();
  renderDemoSteps();
  renderStartPaths();
  renderDemoGuide();
  renderDemoCueCards();
  renderDemoPath();
  renderDemoLinks();
  renderPerspective();
  renderDemoOutcomes();
  renderFinishChecklist();
  renderWorkerProfile();
  renderProfileStatus();
  renderPostWizard();
  renderJobs();
  renderCreativePage();
  renderNorthStarPage();
  renderCapitalPage();
  renderProviderGrowthTools();
  renderServiceVerticals();
  renderServiceJobFields();
  renderProviderServiceFields();
  renderProviderDirectory();
  renderAutos();
  renderRoadRescue();
  renderOpportunities();
  renderBuildingPage();
  renderAdminBuildingLeadsPage();
  renderProjectsPage();
  renderAdminProjectsPage();
  renderHomebuildingPage();
  renderBuildTrackerPage();
  renderDetail();
  renderBidForm();
  renderStatusResults();
  renderMessages();
  renderDashboards();
  renderConfirmation();
  renderSettings();
  renderSafetyCenter();
  renderDeliveryStatus();
  renderSoftLaunchPlan();
  renderSoftLaunchInvites();
  renderSoftLaunchRunSheet();
  renderBackendHandoff();
  renderAuthHandoff();
  renderLaunchCommandCenter();
  renderOutreachRecap();
  renderOutreachBatch();
  renderSessionHistory();
  renderAdminExtras();
  renderFlexLeadsAdmin();
  renderLaunchGoals();
  renderFounding200();
  renderReports();
  renderViewMode();
  renderFollowUpQueue();
  renderNavigationState();
}

function renderNavigationState() {
  const activeScreen = document.querySelector(".screen.active")?.dataset.screen || "home";
  document.querySelectorAll("[data-nav]").forEach((node) => {
    const isActive = visibleScreenFor(normalizeScreen(node.dataset.nav)) === activeScreen;
    node.classList.toggle("active", isActive);
    if (node.matches("button, a")) {
      node.setAttribute("aria-current", isActive ? "page" : "false");
    }
  });
}

function renderSession() {
  const allowedRoles = ["guest", ...demoAccounts.map((account) => account.role)];
  const role = allowedRoles.includes(state.session?.role) ? state.session.role : "guest";
  const session = { ...seedState.session, ...state.session, role };
  const account = demoAccounts.find((item) => item.role === role) || null;
  document.body.classList.remove("role-guest", "role-worker", "role-customer", "role-admin");
  document.body.classList.add(`role-${role}`);
  document.body.classList.toggle("is-authenticated", role !== "guest");

  const loginButton = document.querySelector("#loginButton");
  if (loginButton) loginButton.textContent = role === "guest" ? "Log In" : "Switch User";

  const banner = document.querySelector("#userBanner");
  if (!banner) return;
  banner.classList.toggle("hidden", role === "guest");
  if (role === "guest") {
    banner.innerHTML = "";
    return;
  }
  banner.innerHTML = `
    <div>
      <span>${escapeHtml(account?.label || session.label)}</span>
      <strong>${escapeHtml(session.name)}</strong>
      <small>${escapeHtml(account?.visible || "Forge demo tools")}</small>
    </div>
    <div class="user-banner-actions">
      <button class="btn blue small" type="button" data-nav="profile">Profile Status</button>
      <button class="btn ghost small" type="button" data-action="switch-user">Switch User</button>
      <button class="btn ghost small" type="button" data-action="logout">Log Out</button>
    </div>
  `;
}

function renderWorkerProfile() {
  const form = document.querySelector("#workerSignupForm");
  if (!form || form.contains(document.activeElement)) return;
  const worker = state.session.role === "worker"
    ? findWorkerByName(state.session.name) || state.worker
    : state.worker;
  setFieldValue("#workerName", worker.name);
  setFieldValue("#workerTrade", worker.trade);
  setFieldValue("#workerPhone", worker.phone);
  setFieldValue("#workerEmail", worker.email);
  setFieldValue("#workerExperience", worker.experience);
  setFieldValue("#workerArea", worker.area);
  setFieldValue("#workerServiceVertical", worker.serviceVertical);
}

function renderProfileStatus() {
  const profile = getProfileStatus();
  renderMiniProfile("#workerProfileMini", state.session.role === "worker" ? profile : null);
  renderMiniProfile("#customerProfileMini", state.session.role === "customer" ? profile : null);
  renderMiniProfile("#adminProfileMini", state.session.role === "admin" ? profile : null);

  const name = document.querySelector("#profileName");
  if (!name) return;
  document.querySelector("#profileRole").textContent = profile.roleLabel;
  name.textContent = profile.name;
  document.querySelector("#profileStatusPill").textContent = profile.status;
  document.querySelector("#profileSummary").textContent = profile.summary;
  document.querySelector("#profileReadiness").innerHTML = readinessCard(profile);
  document.querySelector("#profileBrief").innerHTML = profileBriefRows(profile).map((item) => `
    <article>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
  document.querySelector("#profileMeta").innerHTML = profile.meta.map(([label, value]) => `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </article>
  `).join("");
  document.querySelector("#profileChecklist").innerHTML = profile.checklist.map(([done, label]) => `
    <article class="${done ? "done" : ""}">
      <span>${done ? "✓" : "!"}</span>
      <strong>${escapeHtml(label)}</strong>
    </article>
  `).join("");
  document.querySelector("#profileActions").innerHTML = profile.actions.map(([label, screen]) => `
    <button class="btn ${screen === "profile" ? "ghost" : "blue"}" type="button" data-nav="${screen}">${escapeHtml(label)}</button>
  `).join("");
  document.querySelector("#profileActivity").innerHTML = state.activity.slice(0, 5).map((item) => `
    <article>
      <span>${escapeHtml(item.at)}</span>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("") || `<p class="muted">No activity yet.</p>`;
}

function renderMiniProfile(selector, profile) {
  const target = document.querySelector(selector);
  if (!target) return;
  target.classList.toggle("hidden", !profile);
  if (!profile) {
    target.innerHTML = "";
    return;
  }
  target.innerHTML = `
    <div>
      <span>Profile Status</span>
      <strong>${escapeHtml(profile.name)}</strong>
      <p>${escapeHtml(profile.status)} · ${escapeHtml(profile.short)}</p>
      <div class="mini-readiness"><i style="width: ${profileReadiness(profile)}%"></i></div>
    </div>
    <button class="btn ghost small" type="button" data-nav="profile">View Status</button>
  `;
}

function readinessCard(profile) {
  const readiness = profileReadiness(profile);
  const next = profile.checklist.find(([done]) => !done)?.[1] || profile.nextAction || "Ready for the next demo step";
  return `
    <article>
      <div>
        <span class="split-label">Readiness</span>
        <strong>${readiness}% ready</strong>
        <p>${escapeHtml(profile.nextAction || next)}</p>
      </div>
      <div class="readiness-meter" aria-label="${readiness}% ready"><i style="width: ${readiness}%"></i></div>
    </article>
  `;
}

function profileReadiness(profile) {
  const total = profile.checklist.length || 1;
  const done = profile.checklist.filter(([complete]) => complete).length;
  return Math.round((done / total) * 100);
}

function profileBriefRows(profile) {
  const readiness = profileReadiness(profile);
  if (state.session.role === "worker") {
    const worker = findWorkerByName(profile.name) || state.worker;
    const bids = state.bids.filter((bid) => samePerson(bid.worker, worker.name));
    return [
      {
        label: "Standing",
        title: `${readiness}% ready for local jobs`,
        body: `${profile.name} is visible as ${profile.status.toLowerCase()} for ${worker.trade} work in ${worker.area}.`
      },
      {
        label: "Proof",
        title: bids.length ? `${bids.length} bid${bids.length === 1 ? "" : "s"} submitted` : "No bids yet",
        body: bids.length ? "Open Messages to keep active bid conversations moving." : "Open Jobs and submit one bid so the worker side shows real activity."
      },
      {
        label: "Next",
        title: "Move one job forward",
        body: profile.nextAction
      }
    ];
  }
  if (state.session.role === "customer") {
    const jobs = state.jobs.filter((job) => samePerson(job.customer, profile.name));
    const latest = jobs[0];
    const bids = latest ? state.bids.filter((bid) => bid.jobId === latest.id) : [];
    const chosen = bids.find((bid) => bid.chosen);
    return [
      {
        label: "Standing",
        title: latest ? `${latest.status} job` : "No job posted",
        body: latest ? `${latest.title} has ${bids.length} bid${bids.length === 1 ? "" : "s"} available in Forge.` : "Post one job to create a homeowner status trail."
      },
      {
        label: "Proof",
        title: chosen ? "Bid chosen" : bids.length ? "Bids ready to review" : "Waiting for bids",
        body: chosen ? `${chosen.worker} is selected; open Messages for the schedule handoff.` : bids.length ? "Open Job Detail to compare bids and choose the next handoff." : "Use Status Lookup after posting to see bids and messages."
      },
      {
        label: "Next",
        title: "Keep the job moving",
        body: profile.nextAction
      }
    ];
  }
  if (state.session.role === "admin") {
    const needsTouch = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
    return [
      {
        label: "Standing",
        title: `${readiness}% operator ready`,
        body: `${state.jobs.length} jobs, ${state.workers.length} workers, and ${state.referrals.length} referrals are visible in Admin.`
      },
      {
        label: "Proof",
        title: `${needsTouch} lead${needsTouch === 1 ? "" : "s"} need touch`,
        body: "Open the Follow-Up Queue or Launch Command to decide who gets contacted next."
      },
      {
        label: "Next",
        title: "Run the next outreach move",
        body: profile.nextAction
      }
    ];
  }
  return [
    {
      label: "Standing",
      title: "Choose a demo account",
      body: "Profile Status unlocks after choosing John, Mike, or Forge Admin."
    },
    {
      label: "Proof",
      title: "Role-specific views",
      body: "Each demo account opens the screens that person would actually use."
    },
    {
      label: "Next",
      title: "Start with login",
      body: profile.nextAction
    }
  ];
}

function getProfileStatus() {
  if (state.session.role === "worker") return workerProfileStatus();
  if (state.session.role === "customer") return customerProfileStatus();
  if (state.session.role === "admin") return adminProfileStatus();
  return {
    roleLabel: "Visitor",
    name: "Guest",
    status: "Not logged in",
    short: "Choose a demo account",
    summary: "Log in as Mike Jones, John Smith, or Forge Admin to see profile status.",
    nextAction: "Choose a demo login to unlock a role-specific profile.",
    meta: [["Role", "Guest"], ["Access", "Public View"]],
    checklist: [[false, "Choose a demo login"], [false, "Open profile status"]],
    actions: [["Log In", "login"]]
  };
}

function workerProfileStatus() {
  const worker = findWorkerByName(state.session.name) || state.worker;
  const bids = state.bids.filter((bid) => samePerson(bid.worker, worker.name));
  const chosen = bids.filter((bid) => bid.chosen);
  const status = worker.status || "Ready";
  return {
    roleLabel: "Worker / Contractor",
    name: worker.name,
    status,
    short: `${worker.trade} in ${worker.area}`,
    summary: `${worker.name} is listed as ${status.toLowerCase()} for local ${worker.trade.toLowerCase()} work and can submit bids from the jobs feed.`,
    nextAction: bids.length > 0 ? "Open Messages and keep active job conversations moving." : "Submit one bid so the profile shows real job activity.",
    meta: [
      ["Trade", worker.trade],
      ["Service Area", worker.area],
      ["Experience", worker.experience],
      ["Bids Submitted", String(bids.length)],
      ["Jobs Won", String(chosen.length)],
      ["Contact", worker.phone]
    ],
    checklist: [
      [Boolean(worker.name), "Name saved"],
      [Boolean(worker.phone && worker.email), "Contact info saved"],
      [Boolean(worker.trade && worker.area), "Trade and service area saved"],
      [bids.length > 0, "At least one bid submitted"]
    ],
    actions: [["Browse Jobs", "jobs"], ["Submit Bid", "bid"], ["Messages", "messages"], ["Edit Profile", "signup"]]
  };
}

function customerProfileStatus() {
  const jobs = state.jobs.filter((job) => samePerson(job.customer, state.session.name));
  const latest = jobs[0];
  const bidCount = jobs.reduce((sum, job) => sum + state.bids.filter((bid) => bid.jobId === job.id).length, 0);
  return {
    roleLabel: "Job Poster",
    name: state.session.name,
    status: latest?.status || "No active job",
    short: `${jobs.length} job${jobs.length === 1 ? "" : "s"} · ${bidCount} bid${bidCount === 1 ? "" : "s"}`,
    summary: latest
      ? `${state.session.name} has ${latest.title} in ${latest.status.toLowerCase()} status with ${bidCount} total bid${bidCount === 1 ? "" : "s"} across posted jobs.`
      : `${state.session.name} does not have a job posted yet in this browser.`,
    nextAction: bidCount > 0 ? "Review bids, choose a worker, then open Messages for the next step." : "Post a job or wait for bids to arrive.",
    meta: [
      ["Posted Jobs", String(jobs.length)],
      ["Latest Job", latest?.title || "None"],
      ["Latest Status", latest?.status || "None"],
      ["Bids Received", String(bidCount)],
      ["Phone", latest?.phone || "Not saved"],
      ["Email", latest?.email || "Not saved"]
    ],
    checklist: [
      [jobs.length > 0, "Job request saved"],
      [Boolean(latest?.phone && latest?.email), "Contact info saved"],
      [bidCount > 0, "Bids are available"],
      [Boolean(latest), "Status lookup ready"]
    ],
    actions: [["Check Status", "status"], ["View Job", latest ? "detail" : "post"], ["Messages", "messages"], ["Post Job", "post"]]
  };
}

function adminProfileStatus() {
  const openJobs = state.jobs.filter((job) => job.status !== "Completed").length;
  const readyWorkers = state.workers.filter((worker) => ["Ready", "Contacted"].includes(worker.status)).length;
  return {
    roleLabel: "Operator",
    name: state.session.name || "Forge Admin",
    status: "Operator Active",
    short: `${state.jobs.length} jobs · ${state.workers.length} workers`,
    summary: "Forge Admin can see lead status, worker readiness, referrals, messages, reports, exports, and Zapier setup.",
    nextAction: "Use Reports or Follow-Up Queue to decide who needs attention next.",
    meta: [
      ["Job Leads", String(state.jobs.length)],
      ["Open Jobs", String(openJobs)],
      ["Worker Leads", String(state.workers.length)],
      ["Ready Workers", String(readyWorkers)],
      ["Referrals", String(state.referrals.length)],
      ["Messages", String(state.messages.length)]
    ],
    checklist: [
      [state.jobs.length > 0, "Job leads loaded"],
      [state.workers.length > 0, "Worker leads loaded"],
      [state.referrals.length > 0, "Referral queue started"],
      [Boolean(state.settings.webhookUrl) || !state.settings.webhookEnabled, "Webhook setup is not blocking local capture"]
    ],
    actions: [["Admin Dashboard", "admin"], ["Reports", "reports"], ["Messages", "messages"], ["Capture Lead", "capture"]]
  };
}

function setFieldValue(selector, value) {
  const field = document.querySelector(selector);
  if (field && value) field.value = value;
}

function fieldValue(selector) {
  return document.querySelector(selector)?.value?.trim() || "";
}

function fieldChecked(selector) {
  return Boolean(document.querySelector(selector)?.checked);
}

function fieldSelectedValues(selector) {
  return Array.from(document.querySelector(selector)?.selectedOptions || []).map((option) => option.value).filter(Boolean);
}

function renderSelects() {
  fillSelect("#jobCategory", ["", ...categories], "Select a category");
  fillSelect("#listingCategory", ["All Categories", ...categories]);
  fillSelect("#workerServiceVertical", [["", "General Forge worker"], ...serviceVerticals.map((vertical) => [vertical.id, vertical.title])]);
  fillSelect("#providerVerticalFilter", ["All Provider Types", ...serviceVerticals.map((vertical) => [vertical.id, vertical.title])]);
  fillSelect("#creativeProjectType", ["", ...creativeProjectTypes], "Select a service type");
  fillSelect("#creativeBudget", creativeBudgetOptions);
  fillSelect("#creativeMediaType", creativeMediaOptions);
  fillSelect("#creativeDeliveryDeadline", creativeDeliveryOptions);
  fillSelect("#creativeIndoorOutdoor", creativeIndoorOutdoorOptions);
  fillSelect("#creativeSecondShooter", creativeNeedOptions);
  fillSelect("#creativeDrone", creativeNeedOptions);
  fillSelect("#creativeRawFootage", creativeNeedOptions);
  fillSelect("#creativeSocialClips", creativeNeedOptions);
  fillSelect("#creativeSameDayPreview", creativeNeedOptions);
  fillSelect("#creativeProviderDiscipline", creativeProviderDisciplines);
  fillSelect("#creativeProviderExperience", creativeProviderExperienceOptions);
  fillSelect("#creativeProviderDroneCapability", creativeProviderDroneOptions);
  fillSelect("#northstarServices", northstarServiceOptions);
  fillSelect("#northstarBudget", northstarBudgetOptions);
  fillSelect("#flexIndustry", ["", ...flexIndustries], "Select an industry");
  fillSelect("#flexYearsInBusiness", ["", ...flexYearsOptions], "Select years");
  fillSelect("#flexMonthlyRevenue", ["", ...flexRevenueRanges], "Select revenue");
  fillSelect("#flexMonthlySpend", ["", ...flexSpendRanges], "Select spend");
  fillSelect("#flexEmployeeCount", ["", ...flexEmployeeRanges], "Select team size");
  fillSelect("#flexPrimaryNeed", ["", ...flexNeedOptions], "Select primary need");
  fillSelect("#flexStatusFilter", ["All Statuses", ...flexLeadStatuses.map((status) => [status, flexStatusLabel(status)])]);
  fillSelect("#projectType", projectTypeOptions);
  fillSelect("#projectBudgetRange", budgetRangeOptions);
  fillSelect("#projectStage", projectStageOptions);
  fillSelect("#buildingLeadType", buildingLeadTypeOptions);
  fillSelect("#buildingProjectType", buildingProjectTypeOptions);
  fillSelect("#buildingBudgetRange", buildingBudgetRangeOptions);
  fillSelect("#buildingProjectStage", buildingProjectStageOptions);
  fillSelect("#buildingFinanceNeed", financeNeedOptions);
  fillSelect("#buildingStatusFilter", ["All Statuses", ...buildingLeadStatuses.map((status) => [status, buildingStatusLabel(status)])]);
  fillSelect("#buildingLeadTypeFilter", ["All Lead Types", ...buildingLeadTypeOptions]);
  fillSelect("#buildingProjectTypeFilter", ["All Project Types", ...buildingProjectTypeOptions]);
  fillSelect("#buildingBudgetFilter", ["All Budgets", ...buildingBudgetRangeOptions]);
}

function fillSelect(selector, items, placeholder = "") {
  const select = document.querySelector(selector);
  if (!select) return;
  const current = select.value;
  select.innerHTML = items.map((item, index) => {
    const value = Array.isArray(item) ? item[0] : item;
    const label = Array.isArray(item) ? item[1] : item || placeholder;
    const disabled = value === "" ? " disabled" : "";
    const selected = value === "" && !current ? " selected" : "";
    return `<option value="${escapeHtml(value)}"${disabled}${selected}>${escapeHtml(label)}</option>`;
  }).join("");
  const values = items.map((item) => Array.isArray(item) ? item[0] : item);
  if (current && values.includes(current)) select.value = current;
}

function renderTimeline() {
  document.querySelector("#timelineGrid").innerHTML = timeline.map(([week, title, items]) => `
    <article class="timeline-card">
      <h3>${week}<br />${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderDemoSteps() {
  const target = document.querySelector("#demoSteps");
  if (!target) return;
  target.innerHTML = demoSteps.map(([num, title, body, screen]) => `
    <button type="button" data-nav="${screen}">
      <strong>${num}</strong>
      <span>${escapeHtml(title)}</span>
      <small>${escapeHtml(body)}</small>
    </button>
  `).join("");
}

function renderStartPaths() {
  const target = document.querySelector("#startPathGrid");
  if (!target) return;
  target.innerHTML = startPaths.map((path) => `
    <article class="start-path-card">
      <span class="split-label">${escapeHtml(path.label)}</span>
      <h3>${escapeHtml(path.title)}</h3>
      <p>${escapeHtml(path.body)}</p>
      <div class="path-next">
        <span>What happens next</span>
        <p>${escapeHtml(path.next)}</p>
      </div>
      <button class="btn ${escapeHtml(path.tone)} small" type="button" data-nav="${escapeHtml(path.screen)}">${escapeHtml(path.action)}</button>
    </article>
  `).join("");
}

function renderDemoGuide() {
  const target = document.querySelector("#demoGuideSteps");
  if (!target) return;
  target.innerHTML = demoGuide.map(([num, title, body]) => `
    <article>
      <strong>${escapeHtml(num)}</strong>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>
    </article>
  `).join("");
}

function renderDemoCueCards() {
  const target = document.querySelector("#demoCueGrid");
  if (!target) return;
  target.innerHTML = demoCueCards.map((card) => `
    <article>
      <span class="split-label">${escapeHtml(card.audience)}</span>
      <h3>${escapeHtml(card.opener)}</h3>
      <p><strong>Proof:</strong> ${escapeHtml(card.proof)}</p>
      <p><strong>Ask:</strong> ${escapeHtml(card.ask)}</p>
      <button class="btn ghost small" type="button" data-action="copy-demo-cue" data-demo-cue-role="${escapeHtml(card.role)}">Copy Cue</button>
    </article>
  `).join("");
}

function renderDemoPath() {
  const target = document.querySelector("#demoPathGrid");
  if (!target) return;
  target.innerHTML = demoPaths.map((path) => `
    <article class="demo-route-card">
      <div>
        <span class="split-label">${escapeHtml(path.name)}</span>
        <h3>${escapeHtml(path.title)}</h3>
        <p>${escapeHtml(path.summary)}</p>
      </div>
      <ol class="demo-route-steps">
        ${path.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
      <div class="hero-actions">
        ${path.actions.map(([label, screen]) => `<button class="btn ghost small" type="button" data-login-role="${path.role}" data-login-name="${escapeHtml(path.name)}" data-login-screen="${screen}">${escapeHtml(label)}</button>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderDemoLinks() {
  const target = document.querySelector("#demoLinkGrid");
  if (!target) return;
  const links = [
    ["John Smith", "Homeowner view", "customer", "status"],
    ["John Smith", "Readiness", "customer", "profile"],
    ["Mike Jones", "Worker view", "worker", "worker"],
    ["Mike Jones", "Readiness", "worker", "profile"],
    ["Forge Admin", "Operator view", "admin", "admin"],
    ["Forge Admin", "Readiness", "admin", "profile"],
    ["Forge Auto Services", "Auto services", "customer", "auto"],
    ["Forge Careers", "Training & careers", "customer", "opportunities"]
  ];
  target.innerHTML = links.map(([name, label, role, screen]) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(name)}</span>
        <strong>${escapeHtml(label)}</strong>
        <p>${escapeHtml(roleDemoLink(role, screen))}</p>
      </div>
      <div class="hero-actions">
        <button class="btn blue small" type="button" data-login-role="${role}" data-login-name="${escapeHtml(name)}" data-login-screen="${screen}">Open</button>
        <button class="btn ghost small" type="button" data-action="copy-demo-link" data-demo-role="${role}" data-demo-screen="${screen}" data-demo-label="${escapeHtml(name)} ${escapeHtml(label)}">Copy</button>
      </div>
    </article>
  `).join("");
}

function renderPerspective() {
  const target = document.querySelector("#perspectiveGrid");
  if (!target) return;
  target.innerHTML = perspectiveCards.map((card) => `
    <article class="perspective-card">
      <div>
        <span class="split-label">${escapeHtml(card.audience)}</span>
        <h2>${escapeHtml(card.name)}</h2>
        <strong>${escapeHtml(card.status)}</strong>
        <p>${escapeHtml(card.headline)} ${escapeHtml(card.body)}</p>
      </div>
      <div class="perspective-screens">
        ${card.screens.map((screen) => `<span>${escapeHtml(screen)}</span>`).join("")}
      </div>
      <div class="hero-actions">
        <button class="btn blue" type="button" data-login-role="${card.role}" data-login-name="${escapeHtml(card.name)}" data-login-screen="${card.landing}">View as ${escapeHtml(card.name.split(" ")[0])}</button>
        <button class="btn ghost" type="button" data-login-role="${card.role}" data-login-name="${escapeHtml(card.name)}" data-login-screen="${card.profile}">Profile Status</button>
        <button class="btn ghost" type="button" data-action="copy-perspective-link" data-perspective-role="${card.role}">Copy Link</button>
      </div>
    </article>
  `).join("");
}

function renderDemoOutcomes() {
  const target = document.querySelector("#demoOutcomeGrid");
  if (!target) return;
  const outcomes = [
    ["Post one real job", `${state.jobs.length}/10 job leads`, "Ask for a small real job they would actually pay to solve.", "post", "Start Job Post"],
    ["Join worker list", `${state.workers.length}/20 workers`, "Ask a local worker to create a profile and bid on one demo job.", "signup", "Worker Signup"],
    ["Give one referral", `${state.referrals.length}/25 referrals`, "Ask for one homeowner, worker, or business owner who should see Forge.", "capture", "Capture Referral"]
  ];
  target.innerHTML = outcomes.map(([title, count, body, screen, action]) => `
    <article>
      <strong>${escapeHtml(count)}</strong>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      <button class="btn ghost small" type="button" data-nav="${screen}">${escapeHtml(action)}</button>
    </article>
  `).join("");
}

function renderFinishChecklist() {
  const target = document.querySelector("#finishChecklist");
  if (!target) return;
  const checks = [
    ["Perspective demo", true, "John, Mike, and Admin can each be opened from one screen."],
    ["Profile status", true, "Each role has a visible profile/status view."],
    ["Job flow", state.jobs.length > 0, "A homeowner can post or inspect a job."],
    ["Bid flow", state.bids.length > 0, "Workers can submit bids and customers can choose one."],
    ["Message trail", state.messages.length > 0, "Messages are saved for follow-up after key actions."],
    ["Forge Auto Services", state.vehicles.length > 0 && state.autoInquiries.length > 0 && (state.autoRequests || []).length > 0, "Forge Auto has service requests, partner categories, dealer listings, buyer inquiry capture, and handoff queues."],
    ["Forge Projects", (state.projectLeads || []).length > 0, "Projects has public intake, major review routing, Forge Pros routing, and Seneca review gating."],
    ["Admin follow-up", state.jobs.length > 0 && state.workers.length > 0, "Admin can manage jobs, workers, referrals, exports, and reports."],
    ["Mobile demo", true, "Bottom tab bar includes Demo, Post, Jobs, Messages, and Profile."],
    ["Launch ask", true, "After-demo cards ask for a job, worker signup, or referral."]
  ];
  const complete = checks.filter(([, done]) => done).length;
  target.innerHTML = `
    <article class="finish-score">
      <strong>${complete}/${checks.length}</strong>
      <span>Ready checks complete</span>
    </article>
    ${checks.map(([title, done, body]) => `
      <article class="${done ? "done" : ""}">
        <span>${done ? "✓" : "!"}</span>
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(body)}</p>
        </div>
      </article>
    `).join("")}
  `;
}

function renderPostWizard() {
  document.querySelector("#postProgress").innerHTML = [1, 2, 3, 4].map((step) => `<span class="${step <= postStep ? "active" : ""}">${step}</span>`).join("");
  document.querySelectorAll(".step-panel").forEach((panel) => panel.classList.toggle("active", Number(panel.dataset.step) === postStep));
  document.querySelector("#postBack").classList.toggle("hidden", postStep === 1);
  document.querySelector("#postNext").classList.toggle("hidden", postStep === 3);
  document.querySelector("#postSubmit").classList.toggle("hidden", postStep !== 3);
}

function renderJobs() {
  const category = document.querySelector("#listingCategory")?.value || "All Categories";
  const budget = document.querySelector("#listingBudget")?.value || "All Budgets";
  const date = document.querySelector("#listingDate")?.value || "All Dates";
  const jobs = state.jobs.filter((job) => {
    return categoryMatches(job.category, category)
      && (budget === "All Budgets" || job.budget === budget)
      && (date === "All Dates" || job.urgency === date);
  });

  document.querySelector("#jobFeed").innerHTML = jobs.map((job) => `
    <article class="job-row">
      <div class="avatar">${job.title.slice(0, 1)}</div>
      <div>
        <h3>${escapeHtml(job.title)}</h3>
        ${job.serviceVerticalTitle ? `<span class="job-service-pill">${escapeHtml(job.serviceVerticalTitle)}</span>` : ""}
        <p>${escapeHtml(job.location)} &nbsp; ${escapeHtml(job.urgency)}</p>
        <p>${escapeHtml(job.description)}</p>
      </div>
      <div class="job-price">
        ${escapeHtml(job.budget)}
        <small>${job.bids} bids</small>
        <button type="button" data-detail="${job.id}">View Job -></button>
        <button type="button" data-bid-job="${job.id}">Bid Job -></button>
      </div>
    </article>
  `).join("") || `<article class="job-row"><div></div><div><h3>No jobs match these filters.</h3><p>Clear filters or post the first job.</p></div></article>`;
}

function renderCreativePage() {
  const serviceGrid = document.querySelector("#creativeServiceGrid");
  const leadList = document.querySelector("#creativeLeadList");
  const providerList = document.querySelector("#creativeProviderList");
  if (!serviceGrid || !leadList || !providerList) return;

  serviceGrid.innerHTML = creativeServiceTypes.map((service) => `
    <article>
      <span>${escapeHtml(CREATIVE_CATEGORY_LABEL)}</span>
      <strong>${escapeHtml(service.title)}</strong>
      <p>${escapeHtml(service.description)}</p>
    </article>
  `).join("");

  const creativeLeads = state.jobs.filter(isCreativeJob);
  leadList.innerHTML = creativeLeads.slice(0, 4).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(creativeStatusText(lead.creativeStatus || lead.status))} · ${escapeHtml(lead.mediaType || "Creative request")}</span>
        <strong>${escapeHtml(lead.customer)} · ${escapeHtml(lead.projectType || lead.title)}</strong>
        <p>${escapeHtml(lead.location)} · ${escapeHtml(lead.budget)} · ${escapeHtml(lead.desiredDate || lead.urgency || "Date flexible")}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-creative-lead" data-creative-lead-id="${escapeHtml(lead.id)}">Copy Lead</button>
    </article>
  `).join("") || `<article><p class="muted">No photography or videography requests yet.</p></article>`;

  const creativeProviders = state.workers.filter(isCreativeProvider);
  providerList.innerHTML = creativeProviders.slice(0, 4).map((provider) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(creativeStatusText(provider.providerStatus || provider.status))} · ${escapeHtml(provider.discipline || CREATIVE_CATEGORY_LABEL)}</span>
        <strong>${escapeHtml(provider.name)}</strong>
        <p>${escapeHtml(provider.area || provider.service_area || "Service area pending")} · ${escapeHtml(provider.experience || "Experience pending")}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-creative-provider" data-creative-provider-email="${escapeHtml(provider.email)}">Copy Provider</button>
    </article>
  `).join("") || `<article><p class="muted">No creative providers have applied yet.</p></article>`;
}

function renderNorthStarPage() {
  const marketingGrid = document.querySelector("#northstarMarketingGrid");
  const operationsGrid = document.querySelector("#northstarOperationsGrid");
  const packageGrid = document.querySelector("#northstarPackageGrid");
  const leadList = document.querySelector("#northstarLeadList");
  if (!marketingGrid || !operationsGrid || !packageGrid || !leadList) return;

  marketingGrid.innerHTML = northstarMarketingServices.map((service) => `<span>${escapeHtml(service)}</span>`).join("");
  operationsGrid.innerHTML = northstarOperationsServices.map((service) => `<span>${escapeHtml(service)}</span>`).join("");
  packageGrid.innerHTML = northstarPackages.map((item) => `
    <article>
      <span class="split-label">${escapeHtml(item.fit)}</span>
      <h3>${escapeHtml(item.name)}</h3>
      <ul>${item.includes.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
    </article>
  `).join("");
  leadList.innerHTML = (state.northstarLeads || []).slice(0, 4).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.budget || "Budget pending")}</span>
        <strong>${escapeHtml(lead.businessName)} · ${escapeHtml(lead.trade)}</strong>
        <p>${escapeHtml(lead.city)} · ${escapeHtml((lead.servicesNeeded || []).join(", ") || "Services pending")}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-northstar-lead" data-northstar-id="${escapeHtml(lead.id)}">Copy Lead</button>
    </article>
  `).join("") || `<article><p class="muted">No NorthStar requests yet.</p></article>`;
}

function renderCapitalPage() {
  const helps = document.querySelector("#flexWhoHelpsList");
  const problems = document.querySelector("#flexProblemsList");
  const mayHelp = document.querySelector("#flexMayHelpList");
  const steps = document.querySelector("#flexHowItWorks");
  const recent = document.querySelector("#flexRecentLeads");
  const compliance = document.querySelectorAll("[data-flex-compliance]");
  if (!helps || !problems || !mayHelp || !steps || !recent) return;

  compliance.forEach((node) => {
    node.textContent = FLEX_COMPLIANCE_COPY;
  });

  helps.innerHTML = [
    "Built for contractors, builders, landscapers, roofers, fencing companies, iron gate companies, auto shops, transport companies, diesel truck operators, photographers, videographers, agencies, restaurants, and service businesses that spend money before they get paid."
  ].map((item) => `<p>${escapeHtml(item)}</p>`).join("");

  problems.innerHTML = [
    "Materials are due before customer payment clears",
    "Fuel, labor, and vendor bills hit before invoices are paid",
    "Employees need controlled spending cards",
    "The owner wants cleaner expense tracking",
    "The business needs better systems before scaling"
  ].map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  mayHelp.innerHTML = [
    "Business credit and cash-flow tools",
    "Vendor payments, AP workflows, and timing support",
    "Employee cards and controlled expense management",
    "Fuel, materials, equipment, and growth-capital planning",
    "Cleaner spend visibility before a business scales"
  ].map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  steps.innerHTML = [
    "Tell Forge what your business needs.",
    "Forge checks whether you look like a fit.",
    "Forge checks consent, partner approval, and data-sharing approval.",
    "If a finance partner is approved and configured, Forge can share the next review step.",
    "The finance partner handles eligibility, approval, onboarding, activation, and support.",
    "Forge can also help with leads, marketing, websites, CRM, hiring, and operations."
  ].map((item, index) => `
    <article>
      <strong>${index + 1}</strong>
      <span>${escapeHtml(item)}</span>
    </article>
  `).join("");

  recent.innerHTML = (state.flexLeads || []).slice(0, 3).map((lead) => `
    <article>
      <span class="flex-status ${escapeHtml(lead.status)}">${escapeHtml(flexStatusLabel(lead.status))}</span>
      <strong>${escapeHtml(lead.business_name)}</strong>
      <p>${escapeHtml(lead.industry)} · ${escapeHtml(lead.city || "City pending")} · score ${lead.lead_score}</p>
    </article>
  `).join("") || `<article><p class="muted">No Capital Desk leads yet.</p></article>`;
}

function renderProviderGrowthTools() {
  const target = document.querySelector("#providerGrowthTools");
  if (!target) return;
  target.innerHTML = providerGrowthToolOptions.map((label, index) => `
    <label class="check-row provider-growth-option">
      <input type="checkbox" name="providerGrowthTools" value="${escapeHtml(label)}" data-finance-tool="${providerFinanceToolLabels.includes(label) ? "true" : "false"}" />
      ${escapeHtml(label)}
    </label>
  `).join("");
}

function renderServiceVerticals() {
  const cards = document.querySelectorAll("[data-service-vertical-cards]");
  const chipTargets = document.querySelectorAll("[data-service-category-chips]");
  const statusTargets = document.querySelectorAll("[data-service-status-labels]");
  const airbnbChecklist = document.querySelector("#airbnbTurnoverChecklist");
  const safetyTargets = document.querySelectorAll("[data-service-safety-notes]");

  cards.forEach((target) => {
    target.innerHTML = serviceVerticals.map((vertical) => `
      <article class="service-vertical-card">
        <span class="split-label">${escapeHtml(vertical.shortTitle)}</span>
        <h3>${escapeHtml(vertical.publicHeadline)}</h3>
        <p>${escapeHtml(vertical.publicSubheadline)}</p>
        <p>${escapeHtml(vertical.publicBody)}</p>
        <div class="service-category-mini">
          ${vertical.categories.slice(0, 8).map((category) => `<span>${escapeHtml(category)}</span>`).join("")}
        </div>
        <div class="hero-actions">
          <button class="btn orange small" type="button" data-action="start-service-job" data-service-vertical="${escapeHtml(vertical.id)}">${escapeHtml(vertical.ctas[0])}</button>
          <button class="btn ghost small" type="button" data-action="browse-service-jobs" data-service-vertical="${escapeHtml(vertical.id)}">${escapeHtml(vertical.ctas[1])}</button>
          <button class="btn blue small" type="button" data-action="join-service-provider" data-service-vertical="${escapeHtml(vertical.id)}">${escapeHtml(vertical.ctas[2])}</button>
        </div>
      </article>
    `).join("");
  });

  chipTargets.forEach((target) => {
    target.innerHTML = serviceVerticalCategoryOptions.map((category) => `
      <button type="button" data-action="choose-service-category" data-service-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
    `).join("");
  });

  statusTargets.forEach((target) => {
    target.innerHTML = serviceJobStatusLabels.map((status) => `<span>${escapeHtml(status)}</span>`).join("");
  });

  if (airbnbChecklist) {
    const cleaning = serviceVerticalById("cleaning");
    airbnbChecklist.innerHTML = cleaning.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  safetyTargets.forEach((target) => {
    target.innerHTML = [
      "Forge helps connect customers with local service providers. Customers should verify references, insurance, licensing, access instructions, property details, and final scope before allowing entry or approving work.",
      "Service providers should confirm scope, price, access instructions, photos, timing, cancellation terms, disposal fees, material costs, permit responsibility, and payment terms before accepting work.",
      "Some asphalt, concrete, masonry, driveway, hauling, grading, and hardscape jobs may require permits, utility locates, licensed contractors, insurance, traffic control, or code compliance. Customers and providers are responsible for confirming local requirements before work begins."
    ].map((note) => `<p>${escapeHtml(note)}</p>`).join("");
  });
}

function renderServiceJobFields() {
  const target = document.querySelector("#serviceJobFields");
  if (!target) return;
  const vertical = serviceVerticalForCategory(document.querySelector("#jobCategory")?.value);
  target.classList.toggle("hidden", !vertical);
  if (!vertical) {
    target.innerHTML = "";
    return;
  }
  target.innerHTML = `
    <section class="dynamic-service-panel">
      <span class="split-label">${escapeHtml(vertical.title)}</span>
      <h2>Detailed scope for bids</h2>
      <p class="muted">These details help local providers bid on dollar value, scope, timing, and service type.</p>
      <div class="dynamic-field-grid">
        ${vertical.jobFields.map((field) => serviceFieldMarkup(field, "serviceJob", "data-service-job-field")).join("")}
      </div>
    </section>
  `;
}

function renderProviderServiceFields() {
  const target = document.querySelector("#providerProfileFields");
  if (!target) return;
  const selectedVerticalId = document.querySelector("#workerServiceVertical")?.value;
  const vertical = serviceVerticalById(selectedVerticalId) || serviceVerticalForCategory(fieldValue("#workerTrade"));
  target.classList.toggle("hidden", !vertical);
  if (!vertical) {
    target.innerHTML = "";
    return;
  }
  target.innerHTML = `
    <section class="dynamic-service-panel">
      <span class="split-label">${escapeHtml(vertical.title)}</span>
      <h2>Provider profile details</h2>
      <label>Provider type
        <select id="workerProviderType" required>
          ${vertical.providerTypes.map((type) => `<option>${escapeHtml(type)}</option>`).join("")}
        </select>
      </label>
      <div class="dynamic-field-grid">
        ${vertical.providerFields.map((field) => serviceFieldMarkup(field, "providerProfile", "data-provider-profile-field")).join("")}
      </div>
      <div class="tag-check-grid">
        ${vertical.tags.map((tag) => `
          <label class="check-row">
            <input type="checkbox" name="workerTags" value="${escapeHtml(tag)}" />
            ${escapeHtml(tag)}
          </label>
        `).join("")}
      </div>
    </section>
  `;
}

function serviceFieldMarkup(field, idPrefix, dataAttr) {
  const id = `${idPrefix}-${field.name}`;
  const common = `${dataAttr}="${escapeHtml(field.name)}"`;
  if (field.type === "textarea") {
    return `<label>${escapeHtml(field.label)}<textarea id="${escapeHtml(id)}" ${common} rows="3" placeholder="${escapeHtml(field.placeholder || "")}"></textarea></label>`;
  }
  if (field.type === "select") {
    return `<label>${escapeHtml(field.label)}<select id="${escapeHtml(id)}" ${common}>${(field.options || []).map((option) => `<option>${escapeHtml(option)}</option>`).join("")}</select></label>`;
  }
  if (field.type === "file") {
    return `<label>${escapeHtml(field.label)}<input id="${escapeHtml(id)}" ${common} type="file" ${field.accept ? `accept="${escapeHtml(field.accept)}"` : ""} multiple /></label>`;
  }
  return `<label>${escapeHtml(field.label)}<input id="${escapeHtml(id)}" ${common} type="${escapeHtml(field.type || "text")}" placeholder="${escapeHtml(field.placeholder || "")}" /></label>`;
}

function renderProviderDirectory() {
  const directory = document.querySelector("#providerDirectory");
  const filterOptions = document.querySelector("#providerFilterOptions");
  if (!directory || !filterOptions) return;

  const selectedVerticalId = document.querySelector("#providerVerticalFilter")?.value || "All Provider Types";
  const activeVertical = serviceVerticalById(selectedVerticalId);
  const filters = activeVertical?.filters || uniqueValues(serviceVerticals.flatMap((vertical) => vertical.filters));
  const activeFilters = Array.from(document.querySelectorAll("input[name='providerFilter']:checked")).map((input) => input.value);
  const search = normalizeLookup(document.querySelector("#providerSearch")?.value || "");
  const serviceArea = normalizeLookup(document.querySelector("#providerServiceArea")?.value || "");

  filterOptions.innerHTML = filters.map((filter) => `
    <label class="check-row provider-filter-chip">
      <input type="checkbox" name="providerFilter" value="${escapeHtml(filter)}" ${activeFilters.includes(filter) ? "checked" : ""} />
      ${escapeHtml(filter)}
    </label>
  `).join("");

  const providers = state.workers.filter((worker) => {
    const vertical = serviceVerticalForProvider(worker);
    const text = normalizeLookup(providerSearchText(worker));
    const matchesVertical = !activeVertical || vertical?.id === activeVertical.id;
    const matchesSearch = !search || text.includes(search);
    const matchesArea = !serviceArea || normalizeLookup(worker.area || worker.serviceArea || worker.service_area || "").includes(serviceArea);
    const matchesFilters = activeFilters.every((filter) => providerMatchesFilter(worker, filter));
    return matchesVertical && matchesSearch && matchesArea && matchesFilters;
  });

  directory.innerHTML = providers.map((worker) => {
    const vertical = serviceVerticalForProvider(worker);
    const details = worker.profileDetails || {};
    return `
      <article class="provider-directory-card">
        <div>
          <span class="split-label">${escapeHtml(vertical?.title || worker.trade || "Forge worker")}</span>
          <h3>${escapeHtml(worker.businessName || worker.name)}</h3>
          <p>${escapeHtml(worker.providerType || worker.trade)} · ${escapeHtml(worker.area || worker.serviceArea || "Service area pending")}</p>
          <div class="service-category-mini">
            ${(worker.tags || []).slice(0, 6).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            ${details.minimumPrice || details.minimumTripCharge || details.minimumJobPrice ? `<span>${escapeHtml(details.minimumPrice || details.minimumTripCharge || details.minimumJobPrice)}</span>` : ""}
          </div>
        </div>
        <div class="lead-actions">
          ${contactLinks(worker.phone, worker.email, workerTemplate(worker))}
          <button class="btn ghost small" type="button" data-action="copy-worker-direct" data-worker-email="${escapeHtml(worker.email)}">Copy</button>
        </div>
      </article>
    `;
  }).join("") || `<article class="provider-directory-card"><div><h3>No providers match these filters.</h3><p>Clear filters or invite the first provider for this service.</p></div></article>`;
}

function providerSearchText(worker) {
  return [
    worker.name,
    worker.businessName,
    worker.trade,
    worker.providerType,
    worker.area,
    worker.serviceArea,
    worker.serviceVerticalTitle,
    ...(worker.tags || []),
    ...Object.values(worker.profileDetails || {})
  ].join(" ");
}

function providerMatchesFilter(worker, filter) {
  const text = normalizeLookup(providerSearchText(worker));
  const normalized = normalizeLookup(filter);
  if (["service area", "max load size", "minimum trip charge", "starting price", "minimum job price"].includes(normalized)) return true;
  return text.includes(normalized)
    || normalized.split(/\s+/).some((part) => part.length > 3 && text.includes(part));
}

function renderAutos() {
  const stats = document.querySelector("#autoStats");
  const listings = document.querySelector("#autoListings");
  const serviceGrid = document.querySelector("#autoServiceGrid");
  const transportGrid = document.querySelector("#autoTransportServiceGrid");
  const requestList = document.querySelector("#autoRequestList");
  const dealers = document.querySelector("#autoDealerGrid");
  const setup = document.querySelector("#autoDealerSetup");
  const route = document.querySelector("#autoLeadRoute");
  const inquiryList = document.querySelector("#autoInquiryList");
  if (!stats || !listings) return;
  const vehicles = state.vehicles || [];
  const requests = state.autoRequests || [];
  fillSelect("#vehicleDealer", autoDealers.map((dealer) => dealer.name));
  fillSelect("#autoInquiryVehicle", vehicles.map((vehicle) => vehicleTitle(vehicle)));
  fillSelect("#autoServiceNeeded", autoServiceOptions);
  stats.innerHTML = [
    ["Service Requests", String(requests.length)],
    ["Vehicle Listings", String(vehicles.length)],
    ["Available", String(vehicles.filter((vehicle) => vehicle.status === "Available").length)],
    ["Partners", String(autoDealers.length)],
    ["Buyer Leads", String((state.autoInquiries || []).length)]
  ].map(([label, value]) => `
    <article>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
    </article>
  `).join("");
  if (serviceGrid) {
    serviceGrid.innerHTML = autoServiceGroups.map((group) => `
      <article>
        <span>${escapeHtml(group.label)}</span>
        <h3>${escapeHtml(group.title)}</h3>
        <ul>
          ${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  }
  if (transportGrid) {
    transportGrid.innerHTML = autoTransportServiceCards.map((card) => `
      <article>
        <span>${escapeHtml(card.tag)}</span>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.body)}</p>
        <button class="btn ghost small" type="button" data-action="start-auto-path" data-auto-path="${escapeHtml(card.formTarget)}">${card.action === "focus-vehicle-listing" ? "Open Seller Form" : "Open Request Form"}</button>
      </article>
    `).join("");
  }
  if (requestList) {
    requestList.innerHTML = requests.map((request) => `
      <article>
        <div>
          <span>${escapeHtml(request.status)} · ${escapeHtml(request.urgency)} · ${escapeHtml(request.location)}</span>
          <strong>${escapeHtml(request.name)} needs ${escapeHtml(request.service)}</strong>
          <p>${escapeHtml(request.vehicle)} · ${escapeHtml(request.mileage)} · ${escapeHtml(request.notes || "No note saved yet.")}</p>
        </div>
        <button class="btn ghost small" type="button" data-action="copy-auto-service" data-auto-request-id="${escapeHtml(request.id)}">Copy Request</button>
      </article>
    `).join("") || `<p class="muted">No auto service requests yet.</p>`;
  }
  if (dealers) {
    dealers.innerHTML = autoDealers.map((dealer) => `
      <article>
        <span>${escapeHtml(dealer.region)}</span>
        <strong>${escapeHtml(dealer.name)}</strong>
        <p>${escapeHtml(dealer.status)} · ${escapeHtml(dealer.note)}</p>
        <button class="btn ghost small" type="button" data-action="copy-auto-dealer" data-dealer-id="${escapeHtml(dealer.id)}">Copy Dealer Handoff</button>
      </article>
    `).join("");
  }
  if (setup) {
    setup.innerHTML = autoDealers.map((dealer) => `
      <article>
        <span>${escapeHtml(dealer.name)}</span>
        <strong>${escapeHtml(dealer.status)}</strong>
        <ul>
          ${dealer.setup.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  }
  if (route) {
    route.innerHTML = autoLeadRouteRows().map((item) => `
      <article>
        <span>${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `).join("");
  }
  if (inquiryList) {
    inquiryList.innerHTML = (state.autoInquiries || []).map((inquiry) => `
      <article>
        <div>
          <span>${escapeHtml(inquiry.status)} · ${escapeHtml(autoDealerName(inquiry.dealerId))}</span>
          <strong>${escapeHtml(inquiry.buyer)} wants ${escapeHtml(inquiry.vehicleTitle)}</strong>
          <p>${escapeHtml(inquiry.note || "No note saved yet.")}</p>
        </div>
        <button class="btn ghost small" type="button" data-action="copy-auto-inquiry" data-inquiry-id="${escapeHtml(inquiry.id)}">Copy Inquiry</button>
      </article>
    `).join("") || `<p class="muted">No buyer inquiries yet.</p>`;
  }
  listings.innerHTML = vehicles.map((vehicle) => `
    <article class="auto-card">
      <div class="auto-badge">${escapeHtml(vehicle.make.slice(0, 1))}</div>
      <div>
        <span class="split-label">${escapeHtml(vehicle.status)} · ${escapeHtml(vehicle.location)} · ${escapeHtml(autoDealerName(vehicle.dealerId))}</span>
        <h2>${escapeHtml(vehicle.year)} ${escapeHtml(vehicle.make)} ${escapeHtml(vehicle.model)} ${escapeHtml(vehicle.trim || "")}</h2>
        <p>${escapeHtml(vehicle.description)}</p>
        <div class="auto-meta">
          <span>${escapeHtml(vehicle.mileage)}</span>
          <span>Seller: ${escapeHtml(vehicle.seller)}</span>
          <span>Dealer: ${escapeHtml(autoDealerName(vehicle.dealerId))}</span>
          <span>Review: ${escapeHtml(vehicle.reviewStatus || "Public listing")}</span>
          <span>Posted: ${escapeHtml(vehicle.posted)}</span>
        </div>
      </div>
      <div class="auto-price">
        <strong>${escapeHtml(vehicle.price)}</strong>
        <button type="button" data-action="copy-vehicle-contact" data-vehicle-id="${escapeHtml(vehicle.id)}">Copy Seller Info</button>
      </div>
    </article>
  `).join("") || `<article class="auto-card"><div></div><div><h2>No vehicles listed yet.</h2><p>Post the first car for sale.</p></div></article>`;
}

function renderRoadRescue() {
  const serviceGrid = document.querySelector("#roadRescueServiceGrid");
  const issueGrid = document.querySelector("#roadRescueIssueGrid");
  const helpList = document.querySelector("#roadRescueHelpList");
  const providerGrid = document.querySelector("#roadRescueProviderGrid");
  const requestList = document.querySelector("#roadRescueRequestList");
  if (!serviceGrid || !issueGrid || !helpList || !providerGrid || !requestList) return;

  fillSelect("#roadRescueServiceRequested", roadRescueServiceRequestedOptions);
  serviceGrid.innerHTML = roadRescueServices.map((service, index) => `
    <article class="${index === 0 ? "highlight" : ""}">
      <span>${index === 0 ? "First priority" : "Roadside option"}</span>
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.subtitle)}</p>
    </article>
  `).join("");
  helpList.innerHTML = roadRescueHelpItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  issueGrid.innerHTML = roadRescueIssueOptions.map(([value, label], index) => `
    <label class="check-row">
      <input type="checkbox" name="roadRescueIssue" value="${escapeHtml(value)}" data-label="${escapeHtml(label)}" ${index === 0 ? "data-primary-issue=\"true\"" : ""} />
      ${escapeHtml(label)}
    </label>
  `).join("");
  providerGrid.innerHTML = roadRescueProviderTypes.map((provider) => `
    <article>
      <span>Provider</span>
      <strong>${escapeHtml(provider)}</strong>
    </article>
  `).join("");
  const requests = state.roadRescueRequests || [];
  requestList.innerHTML = requests.map((request) => `
    <article>
      <div>
        <span>${escapeHtml(request.status)} · ${escapeHtml(request.serviceRequested || request.service_requested || "Road help")} · ${escapeHtml(request.location || "Location pending")}</span>
        <strong>${escapeHtml(request.name)} needs ${escapeHtml(roadRescueIssueSummary(request))}</strong>
        <p>${escapeHtml(roadRescueVehicleText(request))} · ${escapeHtml(request.notes || "No notes saved yet.")}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-road-rescue-request" data-road-rescue-id="${escapeHtml(request.id)}">Copy Request</button>
    </article>
  `).join("") || `<p class="muted">No Road Rescue requests yet.</p>`;
}

function renderOpportunities() {
  const stats = document.querySelector("#opportunityStats");
  const trackGrid = document.querySelector("#opportunityTrackGrid");
  const stepGrid = document.querySelector("#opportunityStepGrid");
  const leadList = document.querySelector("#opportunityLeadList");
  if (!stats || !trackGrid || !stepGrid || !leadList) return;
  const leads = state.opportunityLeads || [];
  fillSelect("#opportunityGoal", opportunityTracks.map((track) => track.name));
  const activeGoals = new Set(leads.map((lead) => lead.goal).filter(Boolean));
  stats.innerHTML = [
    ["Career Leads", String(leads.length)],
    ["Trade School", String(leads.filter((lead) => lead.goal === "Trade school").length)],
    ["Union / Apprenticeship", String(leads.filter((lead) => lead.goal === "Union / apprenticeship").length)],
    ["AI Field Jobs", String(leads.filter((lead) => lead.goal === "Blue-collar AI jobs").length)]
  ].map(([label, value]) => `
    <article>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
    </article>
  `).join("");
  trackGrid.innerHTML = opportunityTracks.map((track) => `
    <article class="${activeGoals.has(track.name) ? "active" : ""}">
      <span>${escapeHtml(track.label)}</span>
      <strong>${escapeHtml(track.name)}</strong>
      <p>${escapeHtml(track.examples)}</p>
      <small>${escapeHtml(track.next)}</small>
    </article>
  `).join("");
  stepGrid.innerHTML = opportunitySteps.map(([num, title, body]) => `
    <article>
      <strong>${escapeHtml(num)}</strong>
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(body)}</p>
      </div>
    </article>
  `).join("");
  leadList.innerHTML = leads.map((lead) => `
    <article>
      <div>
        <span>${escapeHtml(lead.status)} · ${escapeHtml(lead.goal)}</span>
        <strong>${escapeHtml(lead.name)} · ${escapeHtml(lead.location)}</strong>
        <p>${escapeHtml(lead.note || lead.experience || "No note saved yet.")}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-opportunity-lead" data-opportunity-id="${escapeHtml(lead.id)}">Copy Lead</button>
    </article>
  `).join("") || `<p class="muted">No career interest saved yet.</p>`;
}

function renderBuildingPage() {
  const helpList = document.querySelector("#buildingHelpList");
  const publicCards = document.querySelector("#buildingPublicCards");
  const timeline = document.querySelector("#buildingStatusTimeline");
  const leadList = document.querySelector("#buildingLeadList");
  const compliance = document.querySelectorAll("[data-building-compliance]");
  if (!helpList || !publicCards || !timeline || !leadList) return;
  compliance.forEach((node) => {
    node.textContent = BUILDING_COMPLIANCE_COPY;
  });
  helpList.innerHTML = buildingHelpItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  publicCards.innerHTML = buildingPublicCards.map((card) => `
    <article>
      <span class="split-label">${escapeHtml(card.title)}</span>
      <h2>${escapeHtml(card.title)}</h2>
      <p>${escapeHtml(card.body)}</p>
      ${card.bestFor.length ? `<strong>Best for:</strong><ul>${card.bestFor.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
      <button class="btn ${card.action === "focus-building-major" ? "blue" : ["focus-building-finance", "open-building-finance-review"].includes(card.action) ? "ghost" : "orange"} small" type="button" data-action="${escapeHtml(card.action)}">${escapeHtml(card.button)}</button>
    </article>
  `).join("");
  timeline.innerHTML = ["NEW_BUILDING_LEAD", "HOME_PROJECT_REVIEW", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED", "CUSTOMER_CONSENT_APPROVED", "SENECA_REVIEW_ELIGIBLE", "FLEX_REVIEW_ELIGIBLE", "WON"].map((status, index) => `
    <article>
      <span>${index + 1}</span>
      <strong>${escapeHtml(buildingStatusLabel(status))}</strong>
      <p>${escapeHtml(buildingStatusTimelineBody(status))}</p>
    </article>
  `).join("");
  leadList.innerHTML = (state.buildingLeads || []).slice(0, 5).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(buildingStatusLabel(lead.status))} · ${escapeHtml(lead.route)}</span>
        <strong>${escapeHtml(lead.projectTitle)}</strong>
        <p>${escapeHtml(projectOptionLabel(buildingProjectTypeOptions, lead.projectType))} · ${escapeHtml(lead.city || "City pending")}, ${escapeHtml(lead.state)} · ${escapeHtml(projectOptionLabel(buildingBudgetRangeOptions, lead.budgetRange))}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-building-lead" data-building-id="${escapeHtml(lead.id)}">Copy Building Lead</button>
    </article>
  `).join("") || `<article><p class="muted">No Building requests submitted yet.</p></article>`;
  renderBuildingRoutePreview();
  renderBuildingConditionalSections();
}

function buildingStatusTimelineBody(status) {
  const rows = {
    NEW_BUILDING_LEAD: "Forge saves the request and checks whether it belongs in home project, major project, or finance review.",
    HOME_PROJECT_REVIEW: "Smaller jobs route toward verified local pros before any larger partner review.",
    MAJOR_PROJECT_REVIEW: "Large budgets, commercial work, land, multifamily, mixed-use, or investment builds receive higher-level review.",
    FORGE_QUALIFIED: "Forge has enough context to consider next steps, partner fit, licensing, insurance, and consent.",
    CUSTOMER_CONSENT_APPROVED: "Customer consent is recorded before any third-party partner sharing.",
    SENECA_REVIEW_ELIGIBLE: "A major project can be marked eligible while Seneca remains draft and unapproved.",
    FLEX_REVIEW_ELIGIBLE: "A finance request can be marked eligible while Flex remains draft and unapproved.",
    WON: "Forge records the outcome only after separate agreements and proper partner approvals."
  };
  return rows[status] || "Forge keeps the next review step visible.";
}

function buildingDraftFromForm() {
  return {
    id: `building-${Date.now()}`,
    createdAt: "Today",
    updatedAt: "Today",
    leadType: document.querySelector("#buildingLeadType")?.value || "HOME_PROJECT",
    projectType: document.querySelector("#buildingProjectType")?.value || "HOME_REPAIR",
    projectTitle: fieldValue("#buildingProjectTitle") || "Untitled building request",
    projectDescription: fieldValue("#buildingProjectDescription"),
    propertyAddress: fieldValue("#buildingPropertyAddress"),
    city: fieldValue("#buildingCity"),
    county: fieldValue("#buildingCounty"),
    state: fieldValue("#buildingState") || "OR",
    zip: fieldValue("#buildingZip"),
    budgetRange: document.querySelector("#buildingBudgetRange")?.value || "NOT_SURE",
    timeline: fieldValue("#buildingTimeline") || "Flexible",
    projectStage: document.querySelector("#buildingProjectStage")?.value || "NOT_SURE",
    ownsProperty: document.querySelector("#buildingOwnsProperty")?.value || "not_sure",
    hasPlans: document.querySelector("#buildingHasPlans")?.value || "not_sure",
    hasPermits: document.querySelector("#buildingHasPermits")?.value || "not_sure",
    needsFinancing: document.querySelector("#buildingNeedsFinancing")?.value || "not_sure",
    businessName: fieldValue("#buildingBusinessName") || fieldValue("#buildingCompanyName"),
    ownerName: fieldValue("#buildingOwnerName"),
    email: fieldValue("#buildingEmail"),
    phone: fieldValue("#buildingPhone"),
    website: fieldValue("#buildingWebsite"),
    industry: fieldValue("#buildingIndustry"),
    monthlyRevenueRange: fieldValue("#buildingMonthlyRevenueRange"),
    yearsInBusiness: fieldValue("#buildingYearsInBusiness"),
    numberOfEmployees: fieldValue("#buildingNumberOfEmployees"),
    financeNeed: document.querySelector("#buildingFinanceNeed")?.value || "",
    preferredContactMethod: document.querySelector("#buildingPreferredContactMethod")?.value || "Phone",
    consentToReview: fieldChecked("#buildingConsentReview"),
    consentToContact: fieldChecked("#buildingConsentContact"),
    consentToShareWithApprovedPartners: fieldChecked("#buildingConsentShare"),
    status: "NEW_BUILDING_LEAD",
    assignedPartnerId: "",
    adminNotes: ""
  };
}

function renderBuildingRoutePreview() {
  const target = document.querySelector("#buildingRoutePreview");
  if (!target) return;
  const lead = normalizeBuildingLead(buildingDraftFromForm());
  target.innerHTML = `
    <article>
      <span>Routing preview</span>
      <strong>${escapeHtml(lead.route)}</strong>
      <p>${escapeHtml(buildingStatusLabel(lead.status))} · ${escapeHtml(lead.partnerEligibility)} · ${lead.consentToShareWithApprovedPartners ? "Partner-review consent captured" : "No third-party sharing without consent"}</p>
    </article>
  `;
}

function renderBuildingConditionalSections() {
  const financeFields = document.querySelector("#buildingFinanceFields");
  if (!financeFields) return;
  const leadType = document.querySelector("#buildingLeadType")?.value || "";
  const projectType = document.querySelector("#buildingProjectType")?.value || "";
  const financeNeed = document.querySelector("#buildingFinanceNeed")?.value || "";
  financeFields.classList.toggle("active", leadType === "CONTRACTOR_FINANCE" || projectType === "CONTRACTOR_FINANCE" || Boolean(financeNeed));
}

function renderAdminBuildingLeadsPage() {
  const stats = document.querySelector("#adminBuildingStats");
  const fullTable = document.querySelector("#adminBuildingFullTable");
  const fullPipeline = document.querySelector("#adminBuildingFullPipeline");
  const partnerSummary = document.querySelector("#adminBuildingPartnerSummary");
  const partnerBadge = document.querySelector("#adminBuildingPartnerBadge");
  const partnerCards = document.querySelector("#adminBuildingPartnerCards");
  const internalCopy = document.querySelector("#buildingInternalSalesCopy");
  const northstarCopy = document.querySelector("#buildingNorthStarConnection");
  if (!stats || !fullTable || !fullPipeline || !partnerSummary || !partnerBadge || !partnerCards) return;
  const leads = filteredBuildingLeads();
  const allLeads = state.buildingLeads || [];
  stats.innerHTML = statCards([
    ["Building Leads", allLeads.length],
    ["Home Review", allLeads.filter((lead) => lead.status === "HOME_PROJECT_REVIEW").length],
    ["Major Review", allLeads.filter((lead) => lead.status === "MAJOR_PROJECT_REVIEW").length],
    ["Finance Eligible", allLeads.filter((lead) => lead.status === "FLEX_REVIEW_ELIGIBLE").length],
    ["Consent Approved", allLeads.filter((lead) => lead.status === "CUSTOMER_CONSENT_APPROVED" || lead.consentToShareWithApprovedPartners).length]
  ]);
  renderTable("#adminBuildingFullTable", buildingTableRows(leads));
  fullPipeline.innerHTML = buildingLeadCards(leads);
  const seneca = senecaPartner();
  const flex = flexPartner();
  partnerSummary.textContent = "Seneca Development Co. and Flex are draft/admin-only partner candidates. Do not use official partner language, logos, public claims, or customer data sharing until written approvals, data-sharing approval, consent, and separate agreements are recorded.";
  partnerBadge.textContent = canPubliclyDisplayPartner(seneca) || canPubliclyDisplayPartner(flex) ? "Review flags" : "Draft only";
  partnerCards.innerHTML = [seneca, flex].map((partner) => `
    <article>
      <span>${escapeHtml(partner.status || "Draft partner record")}</span>
      <strong>${escapeHtml(partner.name)}</strong>
      <p>${escapeHtml(partner.contactRelationshipNote || "")}</p>
      <p>${escapeHtml(partner.adminDescription || "")}</p>
      <small>Approved: ${partner.approved ? "true" : "false"} · Public display: ${partner.publicDisplayEnabled ? "true" : "false"} · Data sharing: ${partner.dataSharingApproved ? "true" : "false"} · Referral agreement: ${partner.referralAgreementSigned ? "true" : "false"}</small>
    </article>
  `).join("");
  if (internalCopy) internalCopy.textContent = buildingInternalSalesCopy;
  if (northstarCopy) northstarCopy.textContent = buildingNorthStarConnectionCopy;
}

function filteredBuildingLeads() {
  const status = document.querySelector("#buildingStatusFilter")?.value || "All Statuses";
  const leadType = document.querySelector("#buildingLeadTypeFilter")?.value || "All Lead Types";
  const projectType = document.querySelector("#buildingProjectTypeFilter")?.value || "All Project Types";
  const stateFilter = normalizeLookup(document.querySelector("#buildingStateFilter")?.value || "");
  const budget = document.querySelector("#buildingBudgetFilter")?.value || "All Budgets";
  const eligibility = document.querySelector("#buildingPartnerEligibilityFilter")?.value || "All Partner Eligibility";
  return (state.buildingLeads || []).filter((lead) => {
    const normalized = normalizeBuildingLead(lead);
    const statusOk = status === "All Statuses" || normalized.status === status;
    const leadTypeOk = leadType === "All Lead Types" || normalized.leadType === leadType;
    const projectTypeOk = projectType === "All Project Types" || normalized.projectType === projectType;
    const stateOk = !stateFilter || normalizeLookup(normalized.state).includes(stateFilter);
    const budgetOk = budget === "All Budgets" || normalized.budgetRange === budget;
    const eligibilityOk = eligibility === "All Partner Eligibility"
      || (eligibility === "Seneca eligible" && normalized.senecaEligible)
      || (eligibility === "Flex eligible" && normalized.flexEligible)
      || (eligibility === "Blocked by approval" && normalized.partnerEligibility === "Blocked by approval")
      || (eligibility === "Consent missing" && normalized.partnerEligibility === "Consent missing");
    return statusOk && leadTypeOk && projectTypeOk && stateOk && budgetOk && eligibilityOk;
  });
}

function buildingTableRows(leads) {
  return leads.map((lead) => ({
    title: lead.projectTitle,
    leadType: projectOptionLabel(buildingLeadTypeOptions, lead.leadType),
    projectType: projectOptionLabel(buildingProjectTypeOptions, lead.projectType),
    city: `${lead.city || "Pending"}, ${lead.state}`,
    budget: projectOptionLabel(buildingBudgetRangeOptions, lead.budgetRange),
    route: lead.route,
    eligibility: lead.partnerEligibility,
    status: buildingStatusLabel(lead.status)
  }));
}

function buildingLeadCards(leads) {
  return leads.map((lead) => {
    const normalized = normalizeBuildingLead(lead);
    return `
      <article class="lead-card project-lead-card building-lead-card">
        <div>
          <span class="split-label">${escapeHtml(buildingStatusLabel(normalized.status))} · ${escapeHtml(normalized.route)}</span>
          <h3>${escapeHtml(normalized.projectTitle)}</h3>
          <p>${escapeHtml(normalized.ownerName || normalized.businessName || "Contact pending")} · ${escapeHtml(normalized.city || "City pending")}, ${escapeHtml(normalized.state)} · ${escapeHtml(projectOptionLabel(buildingBudgetRangeOptions, normalized.budgetRange))}</p>
        </div>
        <label>Status
          <select data-building-status="${escapeHtml(normalized.id)}">
            ${buildingLeadStatuses.map((status) => `<option value="${status}" ${status === normalized.status ? "selected" : ""}>${escapeHtml(buildingStatusLabel(status))}</option>`).join("")}
          </select>
        </label>
        <label>Admin notes
          <textarea data-building-notes="${escapeHtml(normalized.id)}" rows="3" placeholder="Scope, consent, partner eligibility, approval flags, finance handoff">${escapeHtml(normalized.adminNotes || "")}</textarea>
        </label>
        <div class="lead-actions">
          ${contactLinks(normalized.phone, normalized.email, buildingLeadFollowUpText(normalized))}
          <button class="btn ghost small" type="button" data-action="copy-building-lead" data-building-id="${escapeHtml(normalized.id)}">Copy</button>
          <button class="btn ghost small" type="button" data-action="mark-building-needs-info" data-building-id="${escapeHtml(normalized.id)}">Mark Needs More Info</button>
          <button class="btn blue small" type="button" data-action="qualify-building-lead" data-building-id="${escapeHtml(normalized.id)}">Mark Forge Qualified</button>
          <button class="btn ghost small" type="button" data-action="route-building-forge-pro" data-building-id="${escapeHtml(normalized.id)}">Route to Forge Pro</button>
          <button class="btn ghost small" type="button" data-action="major-building-review" data-building-id="${escapeHtml(normalized.id)}">Mark Major Project Review</button>
          <button class="btn ghost small" type="button" data-action="request-building-consent" data-building-id="${escapeHtml(normalized.id)}">Request Customer Consent</button>
          <button class="btn ghost small" type="button" data-action="approve-building-consent" data-building-id="${escapeHtml(normalized.id)}">Mark Customer Consent Approved</button>
          <button class="btn ghost small" type="button" data-action="building-seneca-eligible" data-building-id="${escapeHtml(normalized.id)}">Mark Seneca Review Eligible</button>
          ${canSendBuildingToSeneca(normalized) ? `<button class="btn orange small" type="button" data-action="send-building-seneca" data-building-id="${escapeHtml(normalized.id)}">Send to Seneca Review</button>` : ""}
          <button class="btn ghost small" type="button" data-action="building-flex-eligible" data-building-id="${escapeHtml(normalized.id)}">Mark Flex Review Eligible</button>
          ${canSendBuildingToFlex(normalized) ? `<button class="btn orange small" type="button" data-action="send-building-flex" data-building-id="${escapeHtml(normalized.id)}">Send to Flex Review</button>` : ""}
          <button class="btn ghost small" type="button" data-action="building-proposal-requested" data-building-id="${escapeHtml(normalized.id)}">Mark Proposal Requested</button>
          <button class="btn ghost small" type="button" data-action="building-site-visit" data-building-id="${escapeHtml(normalized.id)}">Mark Site Visit Scheduled</button>
          <button class="btn ghost small" type="button" data-action="building-contract-pending" data-building-id="${escapeHtml(normalized.id)}">Mark Contract Pending</button>
          <button class="btn blue small" type="button" data-action="building-won" data-building-id="${escapeHtml(normalized.id)}">Mark Won</button>
          <button class="btn ghost small" type="button" data-action="building-lost" data-building-id="${escapeHtml(normalized.id)}">Mark Lost</button>
          <button class="btn ghost small" type="button" data-action="building-not-fit" data-building-id="${escapeHtml(normalized.id)}">Mark Not A Fit</button>
        </div>
        <p class="muted">${escapeHtml(buildingPartnerReadinessText(normalized))}</p>
      </article>
    `;
  }).join("") || `<article class="lead-card"><p class="muted">No Building leads match these filters.</p></article>`;
}

function renderProjectsPage() {
  const statusTimeline = document.querySelector("#projectStatusTimeline");
  const leadList = document.querySelector("#projectLeadList");
  const spotlight = document.querySelector("#senecaSpotlight");
  if (!statusTimeline || !leadList || !spotlight) return;
  const leads = state.projectLeads || [];
  statusTimeline.innerHTML = ["NEW", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED", "PARTNER_REVIEWING", "SITE_VISIT_SCHEDULED", "CONTRACT_PENDING", "WON"].map((status, index) => `
    <article>
      <span>${index + 1}</span>
      <strong>${escapeHtml(projectStatusLabel(status))}</strong>
      <p>${escapeHtml(projectStatusTimelineBody(status))}</p>
    </article>
  `).join("");
  spotlight.innerHTML = renderSenecaSpotlight();
  leadList.innerHTML = leads.slice(0, 5).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(projectStatusLabel(lead.status))} · ${escapeHtml(lead.route)}</span>
        <strong>${escapeHtml(lead.projectTitle)}</strong>
        <p>${escapeHtml(projectOptionLabel(projectTypeOptions, lead.projectType))} · ${escapeHtml(lead.city)}, ${escapeHtml(lead.state)} · ${escapeHtml(projectOptionLabel(budgetRangeOptions, lead.budgetRange))}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-project-lead" data-project-id="${escapeHtml(lead.id)}">Copy Project</button>
    </article>
  `).join("") || `<article><p class="muted">No project opportunities submitted yet.</p></article>`;
  renderProjectRoutePreview();
}

function renderSenecaSpotlight() {
  const partner = senecaPartner();
  const publicDisplay = canPubliclyDisplayPartner(partner);
  return `
    <div>
      <span class="split-label">${publicDisplay ? "Approved partner spotlight" : "Major project review"}</span>
      <h2>${escapeHtml(publicDisplay ? partner.name : "Approved Partner Review")}</h2>
      <strong>${escapeHtml(publicDisplay ? partner.subtitle || "Major Project & Development Partner" : "Development, construction, finance, and operating partner review")}</strong>
      <p>${publicDisplay
        ? "For larger real estate and development opportunities, Forge can route qualified leads to approved development partners for review after consent and fit checks."
        : "For larger real estate and development opportunities, Forge can prepare qualified leads for development partner review after Forge approval, project fit, customer consent, written partner approval, and separate partner agreements."}</p>
      <p class="partner-disclaimer">${escapeHtml(partner.disclaimer || "Partner routing is subject to approval, project fit, licensing, insurance, and written partner agreement.")}</p>
    </div>
    <div class="partner-badges">
      <span>${publicDisplay ? "Approved" : "No public partner claim"}</span>
      <span>${escapeHtml(partner.region || "OR / WA review")}</span>
      <span>Consent required</span>
    </div>
  `;
}

function projectStatusTimelineBody(status) {
  const rows = {
    NEW: "Forge saves the project opportunity and checks whether it belongs with Forge Pros or Major Projects Review.",
    MAJOR_PROJECT_REVIEW: "Large budgets, multifamily, mixed-use, commercial, land, or investment projects are reviewed by Forge first.",
    FORGE_QUALIFIED: "Forge has enough scope, consent, and readiness to consider partner routing.",
    SENT_TO_SENECA: "After Forge approval, customer consent, partner approval, and data-sharing approval, a qualified OR/WA lead can be sent for approved partner review.",
    PARTNER_REVIEWING: "A partner reviews fit, licensing, insurance, scope, schedule, and written agreement requirements.",
    SITE_VISIT_SCHEDULED: "The client and qualified contractor or partner coordinate any site visit outside Forge as needed.",
    CONTRACT_PENDING: "Any construction or development contract remains between the client and the licensed contractor or development partner.",
    WON: "Forge records the outcome and any agreed referral or success fee only when governed by written agreement."
  };
  return rows[status] || "Forge keeps the next status visible.";
}

function projectDraftFromForm() {
  return {
    id: `project-${Date.now()}`,
    contactName: document.querySelector("#projectContactName")?.value.trim() || "Project owner",
    phone: document.querySelector("#projectContactPhone")?.value.trim() || "",
    email: document.querySelector("#projectContactEmail")?.value.trim() || "",
    projectType: document.querySelector("#projectType")?.value || "OTHER",
    projectTitle: document.querySelector("#projectTitle")?.value.trim() || "Untitled project",
    projectDescription: document.querySelector("#projectDescription")?.value.trim() || "",
    propertyAddress: document.querySelector("#propertyAddress")?.value.trim() || "",
    city: document.querySelector("#projectCity")?.value.trim() || "",
    state: document.querySelector("#projectState")?.value || "OR",
    county: document.querySelector("#projectCounty")?.value.trim() || "",
    budgetRange: document.querySelector("#projectBudgetRange")?.value || "UNDER_10K",
    timeline: document.querySelector("#projectTimeline")?.value.trim() || "Flexible",
    projectStage: document.querySelector("#projectStage")?.value || "IDEA_ONLY",
    ownsProperty: document.querySelector("#ownsProperty")?.value || "unknown",
    hasPlans: document.querySelector("#hasPlans")?.value || "unknown",
    hasPermits: document.querySelector("#hasPermits")?.value || "unknown",
    needsFinancing: document.querySelector("#needsFinancing")?.value || "unknown",
    uploadPhotos: selectedFileSummary("#uploadPhotos", "photo"),
    uploadDocuments: selectedFileSummary("#uploadDocuments", "document"),
    preferredContactMethod: document.querySelector("#preferredContactMethod")?.value || "Phone",
    consentToShareWithPartner: Boolean(document.querySelector("#consentToShareWithPartner")?.checked),
    status: "NEW",
    created: "Today",
    adminNote: ""
  };
}

function renderProjectRoutePreview() {
  const target = document.querySelector("#projectRoutePreview");
  if (!target) return;
  const draft = projectDraftFromForm();
  const routed = projectLeadRouting(draft);
  const normalized = normalizeProjectLead(draft);
  target.innerHTML = `
    <article>
      <span>Routing preview</span>
      <strong>${escapeHtml(routed.route)}</strong>
      <p>${escapeHtml(projectStatusLabel(normalized.status))}${routed.senecaReviewAllowed("FORGE_QUALIFIED") ? " · Major partner review can be considered after Forge approval and consent" : " · Partner sharing requires OR/WA, Forge Qualified status, and consent"}</p>
    </article>
  `;
}

function renderAdminProjectsPage() {
  const stats = document.querySelector("#adminProjectStats");
  const table = document.querySelector("#adminProjectsFullTable");
  const pipeline = document.querySelector("#adminProjectsFullPipeline");
  const summary = document.querySelector("#adminSenecaPartnerSummary");
  const badge = document.querySelector("#adminSenecaPartnerBadge");
  const docs = document.querySelector("#adminPartnerDocuments");
  if (!stats || !table || !pipeline || !summary || !badge || !docs) return;
  const leads = state.projectLeads || [];
  const partner = senecaPartner();
  const approved = isSenecaPartnerApproved();
  stats.innerHTML = statCards([
    ["Projects", leads.length],
    ["Major Review", leads.filter((lead) => lead.status === "MAJOR_PROJECT_REVIEW").length],
    ["Forge Qualified", leads.filter((lead) => lead.status === "FORGE_QUALIFIED").length],
    ["Seneca Referrals", (state.partnerReferrals || []).filter((referral) => referral.partnerId === "seneca-development-co").length],
    ["Forge Pros", leads.filter((lead) => lead.status === "ROUTED_TO_FORGE_PRO").length]
  ]);
  renderTable("#adminProjectsFullTable", projectTableRows(leads));
  pipeline.innerHTML = projectLeadCards(leads);
  summary.textContent = approved
    ? `${partner.name} is enabled for approved partner routing. Continue to require consent, licensing, insurance, and written agreement.`
    : `${partner.name} is a draft partner record only. Do not present Seneca as an approved or official partner until senecaPartnerApproved is true and written approval is in place.`;
  badge.textContent = approved ? "Approved" : "Draft";
  docs.innerHTML = (state.partnerDocuments || []).filter((document) => document.partnerId === "seneca-development-co").map((document) => `
    <article>
      <span>${escapeHtml(document.status)}</span>
      <strong>Required partner documents</strong>
      <p>${escapeHtml((document.required || partnerDocumentTypes).join(", "))}</p>
      <small>Received: ${escapeHtml((document.received || []).join(", ") || "None")}</small>
    </article>
  `).join("");
}

function projectTableRows(leads) {
  return leads.map((lead) => ({
    title: lead.projectTitle,
    type: projectOptionLabel(projectTypeOptions, lead.projectType),
    city: `${lead.city}, ${lead.state}`,
    budget: projectOptionLabel(budgetRangeOptions, lead.budgetRange),
    stage: projectOptionLabel(projectStageOptions, lead.projectStage),
    route: lead.route,
    status: projectStatusLabel(lead.status)
  }));
}

function projectLeadFollowUpText(lead) {
  if (!lead) return "No project leads yet.";
  return [
    `Hi ${lead.contactName}, this is Forge.`,
    `I saved your project opportunity: ${lead.projectTitle}.`,
    `Route: ${lead.route} (${projectStatusLabel(lead.status)}).`,
    `Scope: ${projectOptionLabel(projectTypeOptions, lead.projectType)} in ${lead.city}, ${lead.state}; budget ${projectOptionLabel(budgetRangeOptions, lead.budgetRange)}; stage ${projectOptionLabel(projectStageOptions, lead.projectStage)}.`,
    lead.consentToShareWithPartner ? "You gave consent for Forge to share project details with third-party partners after Forge review." : "Forge does not have consent to share this with third-party partners yet.",
    canSendProjectToSeneca(lead) ? "This lead is eligible for approved major partner review in admin." : "Major partner review requires OR/WA, Forge Qualified status, consent to share, partner approval, and data-sharing approval.",
    isSenecaPartnerApproved() ? "A major-project partner route is enabled in Forge." : "Named partner candidates are draft/admin-only and should not be presented as official approved partners until written approval and public-display approval are in place.",
    "Forge is a lead marketplace and project coordinator, not the contractor of record.",
    "Construction work must be accepted only by properly licensed and insured contractors where required.",
    "Can you confirm the best time to review the project details?"
  ].join(" ");
}

function projectLeadCards(leads) {
  return leads.map((lead) => `
    <article class="lead-card project-lead-card">
      <div>
        <span class="split-label">${escapeHtml(projectStatusLabel(lead.status))} · ${escapeHtml(lead.route)}</span>
        <h3>${escapeHtml(lead.projectTitle)}</h3>
        <p>${escapeHtml(lead.contactName)} · ${escapeHtml(lead.city)}, ${escapeHtml(lead.state)} · ${escapeHtml(projectOptionLabel(budgetRangeOptions, lead.budgetRange))}</p>
      </div>
      <label>Status
        <select data-project-status="${escapeHtml(lead.id)}">
          ${projectStatuses.map((status) => `<option value="${status}" ${status === lead.status ? "selected" : ""}>${escapeHtml(projectStatusLabel(status))}</option>`).join("")}
        </select>
      </label>
      <label>Admin note
        <textarea data-project-note="${escapeHtml(lead.id)}" rows="2" placeholder="Scope, consent, license/insurance, partner fit">${escapeHtml(lead.adminNote || "")}</textarea>
      </label>
      <div class="lead-actions">
        ${contactLinks(lead.phone, lead.email, projectLeadFollowUpText(lead))}
        <button class="btn ghost small" type="button" data-action="copy-project-lead" data-project-id="${escapeHtml(lead.id)}">Copy</button>
        <button class="btn blue small" type="button" data-action="qualify-project-lead" data-project-id="${escapeHtml(lead.id)}">Forge Qualified</button>
        <button class="btn ghost small" type="button" data-action="mark-project-needs-info" data-project-id="${escapeHtml(lead.id)}">Needs Info</button>
        ${canSendProjectToSeneca(lead) ? `<button class="btn orange small" type="button" data-action="send-project-seneca" data-project-id="${escapeHtml(lead.id)}">Send to Seneca Review</button>` : ""}
      </div>
      <p class="muted">${escapeHtml(projectPartnerReadinessText(lead))}</p>
    </article>
  `).join("") || `<article class="lead-card"><p class="muted">No project opportunities yet.</p></article>`;
}

function canSendProjectToSeneca(lead) {
  const partner = senecaPartner();
  return projectLeadRouting(lead).senecaReviewAllowed(lead.status)
    && Boolean(partner?.approved)
    && Boolean(partner?.dataSharingApproved);
}

function projectPartnerReadinessText(lead) {
  if (lead.status !== "FORGE_QUALIFIED") return "Major partner review requires Forge Qualified status.";
  if (!["OR", "WA"].includes(lead.state)) return "Major partner review is limited to Oregon and Washington leads.";
  if (!lead.consentToShareWithPartner) return "Partner routing requires user consent to share project details.";
  return canSendProjectToSeneca(lead)
    ? "Ready for approved partner routing review."
    : "Eligible for major partner review only; named candidates are draft/admin-only or missing data-sharing approval, so do not send customer data.";
}

function renderHomebuildingPage() {
  const target = document.querySelector("#homebuildingFeatureGrid");
  if (target) target.innerHTML = buildTrackerFeatures.map((feature) => TrackerFeatureCard(feature)).join("");
  renderHomebuildingRoutePreview();
}

function TrackerFeatureCard(feature) {
  return `
    <article class="tracker-feature-card">
      <span class="split-label">Forge Build Tracker</span>
      <h2>${escapeHtml(feature.title)}</h2>
      <ul>
        ${feature.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function homebuildingDraftFromForm() {
  return {
    name: document.querySelector("#homebuildingName")?.value.trim() || "Project lead",
    phone: document.querySelector("#homebuildingPhone")?.value.trim() || "",
    email: document.querySelector("#homebuildingEmail")?.value.trim() || "",
    location: document.querySelector("#homebuildingLocation")?.value.trim() || "",
    locationState: document.querySelector("#homebuildingState")?.value || "",
    type: document.querySelector("#homebuildingType")?.value || "",
    budget: document.querySelector("#homebuildingBudget")?.value || "",
    timeline: document.querySelector("#homebuildingTimeline")?.value || "",
    stage: document.querySelector("#homebuildingStage")?.value || "",
    land: document.querySelector("#homebuildingLand")?.value || "",
    plans: document.querySelector("#homebuildingPlans")?.value || "",
    uploads: `${document.querySelector("#homebuildingUploads")?.files?.length || 0} files selected`,
    notes: document.querySelector("#homebuildingNotes")?.value.trim() || ""
  };
}

function renderHomebuildingRoutePreview() {
  const target = document.querySelector("#homebuildingRoutePreview");
  if (!target) return;
  const routed = homebuildingRouting(homebuildingDraftFromForm());
  target.innerHTML = `
    <article>
      <span>Route</span>
      <strong>${escapeHtml(routed.routingLane)}</strong>
      <p>Lead score ${routed.leadScore}/100${routed.senecaEligible ? " · Major partner review may be eligible after consent and approval checks" : ""}</p>
    </article>
  `;
}

function renderBuildTrackerPage() {
  const target = document.querySelector("#buildTrackerDashboard");
  if (!target) return;
  target.innerHTML = BuildTrackerDashboard(buildTrackerDemoProject);
}

function BuildTrackerDashboard(project) {
  return `
    <section class="build-tracker-dashboard" aria-label="Forge Build Tracker demo dashboard">
      ${ProjectSummaryCard(project)}
      ${GanttTimeline(project.phases)}
      ${BudgetDashboard(project.budget)}
      ${ExpenseReportTable(project.expenses)}
      ${ProjectTeamCard(project.team)}
      ${LatestUpdatesCard(project.updates)}
      ${DocumentVaultCard(project.documents)}
      ${ChangeOrderCard(project.changeOrder)}
    </section>
  `;
}

function ProjectSummaryCard(project) {
  const summaryRows = [
    ["Project", project.project],
    ["Location", project.location],
    ["Status", project.status],
    ["Completion", `${project.completion}%`],
    ["Estimated completion", project.estimatedCompletion]
  ];
  return `
    <article class="tracker-card project-summary-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">${escapeHtml(project.sampleLabel)}</span>
          <h2>Project summary</h2>
        </div>
        <strong class="tracker-status">${escapeHtml(project.status)}</strong>
      </div>
      <div class="project-summary-main">
        <div>
          <h3>${escapeHtml(project.project)}</h3>
          <p>${escapeHtml(project.location)} · ${escapeHtml(project.scheduleNote)}</p>
        </div>
        <div class="tracker-progress" aria-label="${project.completion}% complete">
          <strong>${project.completion}%</strong>
          <span><i style="width: ${project.completion}%"></i></span>
          <small>Overall completion</small>
        </div>
      </div>
      <div class="project-summary-grid">
        ${summaryRows.map(([label, value]) => `
          <article>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </article>
        `).join("")}
      </div>
      <div class="tracker-next-step">
        <span>What is next</span>
        <strong>${escapeHtml(project.nextPhase)}</strong>
        <p>Next phase begins after ${escapeHtml(project.currentPhase.toLowerCase())} dependency checks are marked complete in this demo dashboard.</p>
      </div>
    </article>
  `;
}

function GanttTimeline(phases) {
  const maxWeek = Math.max(...phases.map((phase) => phase.weekStart + phase.duration - 1));
  const weekMarks = Array.from({ length: maxWeek }, (_, index) => index + 1);
  return `
    <article class="tracker-card gantt-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Gantt-style timeline</span>
          <h2>Construction timeline</h2>
        </div>
        <strong class="tracker-status">Sample phases</strong>
      </div>
      <div class="gantt-scroll" style="--weeks: ${maxWeek}">
        <div class="gantt-week-header">
          <span>Phase</span>
          ${weekMarks.map((week) => `<b>${week}</b>`).join("")}
          <em>Status</em>
        </div>
        ${phases.map((phase, index) => `
          <div class="gantt-row ${phaseStateClass(phase.status)}">
            <div class="gantt-phase-name">
              <strong>${index + 1}. ${escapeHtml(phase.name)}</strong>
              <small>${escapeHtml(phase.start)} - ${escapeHtml(phase.end)} · ${phase.completion}%</small>
            </div>
            <div class="gantt-track">
              <span class="gantt-bar" style="--start: ${phase.weekStart}; --span: ${phase.duration}">
                <i style="width: ${phase.completion}%"></i>
              </span>
            </div>
            <div class="gantt-meta">
              <span>${escapeHtml(phase.status)}</span>
              <small>Depends on: ${escapeHtml(phase.dependency)}</small>
              <small>${escapeHtml(phase.delay)}</small>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function BudgetDashboard(budget) {
  const summary = [
    ["Original budget", budget.original],
    ["Approved budget", budget.approved],
    ["Paid to date", budget.paidToDate],
    ["Remaining balance", budget.remaining]
  ];
  return `
    <article class="tracker-card budget-dashboard-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Budget dashboard</span>
          <h2>Budget tracking</h2>
        </div>
        <strong class="tracker-status">${formatMoney(budget.remaining)} remaining</strong>
      </div>
      <div class="budget-summary-grid">
        ${summary.map(([label, value]) => `
          <article>
            <span>${escapeHtml(label)}</span>
            <strong>${formatMoney(value)}</strong>
          </article>
        `).join("")}
      </div>
      <div class="budget-category-grid">
        ${budget.categories.map((category) => {
          const used = Math.min(100, Math.round((category.spent / category.approved) * 100));
          const variance = category.approved - category.spent;
          return `
            <article>
              <div>
                <strong>${escapeHtml(category.name)}</strong>
                <span>${formatMoney(category.spent)} / ${formatMoney(category.approved)}</span>
              </div>
              <div class="budget-meter" aria-label="${used}% used"><i style="width: ${used}%"></i></div>
              <small>${variance >= 0 ? `${formatMoney(variance)} available` : `${formatMoney(Math.abs(variance))} over`}</small>
            </article>
          `;
        }).join("")}
      </div>
      <div class="budget-alerts">
        ${budget.alerts.map((alert) => `<p>${escapeHtml(alert)}</p>`).join("")}
      </div>
    </article>
  `;
}

function ExpenseReportTable(expenses) {
  return `
    <article class="tracker-card expense-report-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Expense reports</span>
          <h2>Submitted sample expenses</h2>
        </div>
        <strong class="tracker-status">${expenses.length} rows</strong>
      </div>
      <div class="table-card tracker-table-card">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            ${expenses.map((expense) => `
              <tr>
                <td>${escapeHtml(expense.category)}</td>
                <td>${escapeHtml(expense.description)}</td>
                <td>${escapeHtml(expense.date)}</td>
                <td class="status">${escapeHtml(expense.status)}</td>
                <td>${formatMoney(expense.amount)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function ProjectTeamCard(team) {
  return `
    <article class="tracker-card project-team-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Contractor visibility</span>
          <h2>Team working on project</h2>
        </div>
        <strong class="tracker-status">Demo roles</strong>
      </div>
      <div class="team-list">
        ${team.map((member) => `
          <article>
            <span>${escapeHtml(member.role)}</span>
            <strong>${escapeHtml(member.assignment)}</strong>
            <p>${escapeHtml(member.today)}</p>
            <small>${escapeHtml(member.permission)}</small>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function LatestUpdatesCard(updates) {
  return `
    <article class="tracker-card latest-updates-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Photo & video updates</span>
          <h2>Latest updates</h2>
        </div>
        <strong class="tracker-status">Demo media log</strong>
      </div>
      <div class="updates-list">
        ${updates.map((update) => `
          <article>
            <span>${escapeHtml(update.type)} · ${escapeHtml(update.date)}</span>
            <strong>${escapeHtml(update.title)}</strong>
            <p>${escapeHtml(update.body)}</p>
            <small>${escapeHtml(update.checkpoint)}</small>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function DocumentVaultCard(documents) {
  return `
    <article class="tracker-card document-vault-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Documents vault</span>
          <h2>Plans, permits, receipts, and reports</h2>
        </div>
        <strong class="tracker-status">Sample files</strong>
      </div>
      <div class="document-grid">
        ${documents.map((document) => `
          <article>
            <span>${escapeHtml(document.type)}</span>
            <strong>${document.count}</strong>
            <p>${escapeHtml(document.latest)}</p>
          </article>
        `).join("")}
      </div>
    </article>
  `;
}

function ChangeOrderCard(changeOrder) {
  return `
    <article class="tracker-card change-order-card">
      <div class="tracker-card-heading">
        <div>
          <span class="split-label">Change orders</span>
          <h2>${escapeHtml(changeOrder.title)}</h2>
        </div>
        <strong class="tracker-status">${escapeHtml(changeOrder.status)}</strong>
      </div>
      <div class="change-order-grid">
        <article>
          <span>Scope change</span>
          <p>${escapeHtml(changeOrder.scope)}</p>
        </article>
        <article>
          <span>Price change</span>
          <strong>${formatMoney(changeOrder.priceChange)}</strong>
        </article>
        <article>
          <span>Timeline impact</span>
          <p>${escapeHtml(changeOrder.timelineImpact)}</p>
        </article>
      </div>
      <div class="signature-placeholder">
        <span>${escapeHtml(changeOrder.signature)}</span>
        <button class="btn ghost small" type="button" disabled>Awaiting demo approval</button>
      </div>
    </article>
  `;
}

function phaseStateClass(status) {
  return status.toLowerCase().replaceAll(" ", "-");
}

function formatMoney(value) {
  return `$${Number(value || 0).toLocaleString()}`;
}

function vehicleTitle(vehicle) {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
}

function autoDealerName(dealerId) {
  return autoDealers.find((dealer) => dealer.id === dealerId)?.name || autoDealers[0].name;
}

function autoDealerByName(name) {
  return autoDealers.find((dealer) => dealer.name === name) || autoDealers[0];
}

function autoPartnerById(id) {
  return (state.partners || []).find((partner) => partner.id === id) || seedState.partners.find((partner) => partner.id === id);
}

function vehicleLookupText(vehicle) {
  return normalizeLookup([
    vehicle.year,
    vehicle.make,
    vehicle.model,
    vehicle.trim,
    vehicle.description,
    vehicle.condition,
    vehicle.location,
    vehicle.fuelType,
    vehicle.drivetrain
  ].filter(Boolean).join(" "));
}

function moneyNumber(value) {
  return Number(String(value || "").replace(/[^\d.]/g, "")) || 0;
}

function isLuxuryVehicle(vehicle) {
  const text = vehicleLookupText(vehicle);
  const luxuryTerms = ["porsche", "ferrari", "lamborghini", "mclaren", "aston martin", "bentley", "rolls", "maserati", "mercedes", "amg", "bmw", "audi", "lexus", "tesla", "range rover", "land rover", "cadillac escalade", "platinum", "exotic", "luxury"];
  return luxuryTerms.some((term) => text.includes(term)) || moneyNumber(vehicle.price) >= 50000 || vehicle.intent === "Forge Platinum Auto Concierge";
}

function isTruckOrCommercial(vehicle) {
  const text = vehicleLookupText(vehicle);
  return ["truck", "diesel", "f150", "f-150", "f250", "f-250", "f350", "f-350", "ram", "silverado", "sierra", "commercial", "fleet", "work van", "cargo van"].some((term) => text.includes(term));
}

function isPortlandMetroVehicle(vehicle) {
  const text = vehicleLookupText(vehicle);
  return ["portland", "lake oswego", "beaverton", "vancouver wa", "vancouver, wa", "tigard", "gresham", "oregon city"].some((term) => text.includes(term));
}

function isSouthernOregonVehicle(vehicle) {
  const text = vehicleLookupText(vehicle);
  return ["medford", "southern oregon", "grants pass", "white city", "central point", "ashland", "eagle point", "rogue valley"].some((term) => text.includes(term));
}

function vehicleNeedsTitleHelp(vehicle) {
  const text = normalizeLookup([vehicle.titleStatus, vehicle.loanLien, vehicle.payoffAmount].filter(Boolean).join(" "));
  return ["lien", "payoff", "lost", "salvage", "rebuilt", "title help", "unsure", "yes"].some((term) => text.includes(term));
}

function vehicleLeadTags(vehicle) {
  const tags = new Set();
  const intent = normalizeLookup(vehicle.intent || "");
  if (intent.includes("sell")) tags.add("sell_my_car");
  if (intent.includes("list")) tags.add("list_vehicle");
  if (intent.includes("consign")) tags.add("consign_vehicle");
  if (intent.includes("wholesale")) tags.add("wholesale_offer");
  if (intent.includes("auction")) tags.add("auction_sourcing");
  if (isLuxuryVehicle(vehicle)) tags.add("luxury_or_exotic");
  if (isTruckOrCommercial(vehicle)) tags.add("truck_or_commercial");
  if (!isLuxuryVehicle(vehicle) && !isTruckOrCommercial(vehicle)) tags.add("standard_vehicle");
  if (normalizeLookup(vehicle.description || "").includes("transport")) tags.add("transport_needed");
  if (vehicle.wantsReplacement) tags.add("request_vehicle");
  if (vehicleNeedsTitleHelp(vehicle)) tags.add("title_help_needed");
  if (vehicle.sellTimeline === "ASAP" || isLuxuryVehicle(vehicle) || vehicleNeedsTitleHelp(vehicle)) tags.add("high_priority_review");
  return autoLeadCategoryLabels.filter((tag) => tags.has(tag)).concat([...tags].filter((tag) => !autoLeadCategoryLabels.includes(tag)));
}

function vehicleAssignedPartner(vehicle) {
  if (isLuxuryVehicle(vehicle) && isPortlandMetroVehicle(vehicle)) return "Forge Platinum Auto Concierge";
  if (isLuxuryVehicle(vehicle)) return "Forge Platinum Auto Concierge";
  if (isSouthernOregonVehicle(vehicle) || isTruckOrCommercial(vehicle)) return "S&A Auto / Southern Oregon Auto Operations";
  return autoDealerName(vehicle.dealerId);
}

function vehicleLeadRoute(vehicle) {
  const parts = [];
  if (isLuxuryVehicle(vehicle)) parts.push("Forge Platinum review");
  if (isSouthernOregonVehicle(vehicle) || isTruckOrCommercial(vehicle)) parts.push("Southern Oregon dealer review");
  if (vehicleNeedsTitleHelp(vehicle)) parts.push("Title/help review before partner handoff");
  if (vehicle.wantsReplacement) parts.push("Create linked Request a Vehicle lead");
  if (!parts.length) parts.push("Vehicle listing review");
  return parts.join(" · ");
}

function vehicleLeadScore(vehicle) {
  let score = 20;
  if (isLuxuryVehicle(vehicle)) score += 30;
  if (isTruckOrCommercial(vehicle)) score += 18;
  if (isSouthernOregonVehicle(vehicle) || isPortlandMetroVehicle(vehicle)) score += 12;
  if (vehicleNeedsTitleHelp(vehicle)) score += 10;
  if (vehicle.sellTimeline === "ASAP") score += 10;
  if (vehicle.consentToPartnerContact) score += 10;
  return Math.min(100, score);
}

function autoLeadRouteRows() {
  return [
    {
      label: "1. Customer request",
      title: "Capture the vehicle need first",
      body: "Save contact info, vehicle details, mileage, service needed, location, urgency, photos count, and notes."
    },
    {
      label: "2. Partner path",
      title: "Route to the qualified partner",
      body: "Send repair, detailing, transport, inspection, and sales requests to trusted mechanics, auto partners, transport providers, or dealer partners."
    },
    {
      label: "3. Safety boundary",
      title: "Forge is not the licensed provider",
      body: "Licensed or qualified partners handle regulated sales, financing, repair, towing, transport, and insurance-related work where required."
    },
    {
      label: "4. Follow-up",
      title: "Keep the queue visible",
      body: "Use Copy Service Queue, Copy Buyer Queue, and dealer handoffs so no Forge Auto request gets lost."
    }
  ];
}

function renderDetail() {
  const job = state.jobs.find((item) => item.id === state.activeJobId) || state.jobs[0];
  const bids = state.bids.filter((bid) => bid.jobId === job.id);
  const chosenBid = bids.find((bid) => bid.chosen);
  document.querySelector("#jobDetail").innerHTML = `
    <button class="back-link" type="button" data-nav="jobs">← Back to Jobs</button>
    <h1>${escapeHtml(job.title)}</h1>
    <p>${escapeHtml(job.location)} &nbsp; ${escapeHtml(job.urgency)}</p>
    <div class="detail-price">${escapeHtml(job.budget)}</div>
    <h2>Job Description</h2>
    <p>${escapeHtml(job.description)}</p>
    ${serviceJobDetailPanel(job)}
    <div class="detail-meta">
      <div><span>Category</span><strong>${escapeHtml(categoryLabel(job.category))}</strong></div>
      <div><span>Posted</span><strong>${escapeHtml(job.posted)}</strong></div>
      <div><span>Job ID</span><strong>#JOB-${job.id.slice(0, 4).toUpperCase()}</strong></div>
      <div><span>Status</span><strong>${escapeHtml(job.status)}</strong></div>
    </div>
    ${jobFlowTracker(job, bids, chosenBid)}
    ${jobFlowBrief(job, bids, chosenBid)}
    <div class="hero-actions">
      <button class="btn ghost" type="button" data-action="message">Message Bidders</button>
      <button class="btn blue" type="button" data-bid-job="${job.id}">Submit a Bid</button>
      <button class="btn orange" type="button" data-action="choose-best">Choose a Bid</button>
    </div>
    ${chosenBid ? chosenBidHandoff(job, chosenBid) : ""}
  `;
  document.querySelector("#detailBidCount").textContent = bids.length;
  document.querySelector("#bidList").innerHTML = bids.map((bid, index) => `
    <article class="bid-row">
      <div>
        <h3>${escapeHtml(bid.worker)}</h3>
        <p><span class="stars">★ ★ ★ ★ ☆</span> ${bid.rating} (${bid.reviews}) · ${escapeHtml(bid.timeline)} ${bid.chosen ? " · Chosen" : ""}</p>
        <p>${escapeHtml(bid.message)}</p>
        ${bidDetailMeta(bid)}
      </div>
      <div>
        <strong>${escapeHtml(bid.amount)}</strong>
        <button class="link-button" type="button" data-choose-bid="${index}">Choose</button>
      </div>
    </article>
  `).join("") || `<p class="muted">No bids yet.</p>`;
}

function serviceJobDetailPanel(job) {
  const vertical = serviceVerticalById(job.serviceVertical) || serviceVerticalForCategory(job.category);
  if (!vertical) return "";
  const rows = serviceDetailRows(job.serviceDetails, vertical.jobFields);
  return `
    <section class="service-detail-panel">
      <div>
        <span class="split-label">${escapeHtml(vertical.title)}</span>
        <h2>Service scope details</h2>
        <p>${escapeHtml(job.servicePhotoSummary || "0 photos selected")}</p>
      </div>
      <div class="service-detail-grid">
        ${rows.map(([label, value]) => `
          <article>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </article>
        `).join("") || `<article><span>Scope</span><strong>Details pending</strong></article>`}
      </div>
    </section>
  `;
}

function bidDetailMeta(bid) {
  const rows = [
    ["Earliest availability", bid.earliestAvailability],
    ["Estimated duration", bid.estimatedDuration],
    ["Crew members", bid.crewMembers],
    ["Materials included", bid.materialsIncluded],
    ["Supplies included", bid.suppliesIncluded],
    ["Equipment included", bid.equipmentIncluded],
    ["Dump fees included", bid.dumpFeesIncluded],
    ["Laundry included", bid.laundryIncluded],
    ["Restocking included", bid.restockingIncluded],
    ["Recurring available", bid.recurringAvailable],
    ["Experience note", bid.experienceNote]
  ].filter(([, value]) => String(value || "").trim());
  if (!rows.length) return "";
  return `
    <div class="bid-detail-meta">
      ${rows.map(([label, value]) => `<span><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</span>`).join("")}
    </div>
  `;
}

function jobFlowTracker(job, bids, chosenBid) {
  return `
    <section class="job-flow">
      <span class="split-label">Job-to-bid flow</span>
      <h2>Where this job stands now</h2>
      <div class="job-flow-grid">
        ${jobFlowSteps(job, bids, chosenBid).map((step, index) => `
          <article class="${step.state}">
            <strong>${index + 1}</strong>
            <div>
              <span>${escapeHtml(step.label)}</span>
              <p>${escapeHtml(step.body)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function jobFlowSteps(job, bids, chosenBid) {
  const hasBids = bids.length > 0;
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  return [
    {
      label: "Job posted",
      body: `${job.customer || "Customer"} submitted ${job.title}.`,
      state: "done"
    },
    {
      label: "Bids received",
      body: hasBids ? `${bids.length} bid${bids.length === 1 ? "" : "s"} ready to review.` : "Waiting for the first worker bid.",
      state: hasBids ? "done" : "active"
    },
    {
      label: "Bid chosen",
      body: chosenBid ? `${chosenBid.worker} is selected at ${chosenBid.amount}.` : "Choose a bid when the customer is ready.",
      state: chosenBid ? "done" : hasBids ? "active" : "waiting"
    },
    {
      label: "Message / schedule",
      body: chosenBid && hasMessage ? "Handoff message is saved for scheduling." : "Open Messages after a bid is chosen.",
      state: chosenBid && hasMessage ? "active" : "waiting"
    }
  ];
}

function jobFlowBrief(job, bids, chosenBid) {
  const rows = jobFlowBriefRows(job, bids, chosenBid);
  return `
    <section class="job-flow-brief">
      <div class="job-flow-brief-heading">
        <div>
          <span class="split-label">Next handoff</span>
          <h2>What should happen after this job?</h2>
        </div>
        <button class="btn ghost small" type="button" data-action="copy-job-flow-brief" data-job-id="${escapeHtml(job.id)}">Copy Flow Brief</button>
      </div>
      <div class="job-flow-brief-grid">
        ${rows.map((row) => `
          <article class="${row.ok ? "ready" : "waiting"}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function jobFlowBriefRows(job, bids, chosenBid) {
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const bestBid = chosenBid || bids[0];
  return [
    {
      label: "Current",
      title: chosenBid ? "Bid selected" : bids.length ? "Ready to choose" : "Waiting for bids",
      body: chosenBid
        ? `${chosenBid.worker} is selected at ${chosenBid.amount}; the job is ${job.status}.`
        : bids.length
          ? `${bids.length} bid${bids.length === 1 ? "" : "s"} are available for ${job.customer || "the customer"} to compare.`
          : "No worker bid has been submitted yet.",
      ok: Boolean(chosenBid || bids.length)
    },
    {
      label: "Best next",
      title: chosenBid ? "Open Messages" : bids.length ? "Choose one bid" : "Invite workers",
      body: chosenBid
        ? "Use the saved message thread to confirm schedule and arrival details."
        : bids.length
          ? `${bestBid.worker}'s ${bestBid.amount} bid is ready to review first.`
          : "Send this job to one or two workers, then come back to compare bids.",
      ok: Boolean(chosenBid)
    },
    {
      label: "Proof",
      title: hasMessage ? "Message trail saved" : "Message trail pending",
      body: hasMessage
        ? "Forge has a job message thread that can carry the scheduling handoff."
        : "Choose a bid to create the scheduling message and move the job forward.",
      ok: hasMessage
    }
  ];
}

function chosenBidHandoff(job, bid) {
  const message = bidHandoffText(job, bid);
  return `
    <section class="handoff-card">
      <span class="split-label">Selected bid handoff</span>
      <h2>${escapeHtml(bid.worker)} is the active next step.</h2>
      <div class="handoff-grid">
        <div><span>Price</span><strong>${escapeHtml(bid.amount)}</strong></div>
        <div><span>Timeline</span><strong>${escapeHtml(bid.timeline)}</strong></div>
        <div><span>Status</span><strong>${escapeHtml(job.status)}</strong></div>
      </div>
      <p>${escapeHtml(message)}</p>
      <div class="hero-actions">
        <button class="btn blue small" type="button" data-message-thread="job-${escapeHtml(job.id)}">Open Messages</button>
        <button class="btn ghost small" type="button" data-action="copy-bid-handoff" data-job-id="${escapeHtml(job.id)}">Copy Handoff</button>
      </div>
    </section>
  `;
}

function bidHandoffText(job, bid) {
  const saved = state.messages.find((message) => message.threadId === `job-${job.id}` && message.body.includes(bid.worker));
  return saved?.body || `${job.customer || "The customer"} chose ${bid.worker}'s ${bid.amount} bid for ${job.title}. Next step: confirm schedule and arrival details.`;
}

function renderBidForm() {
  fillSelect("#bidJobSelect", state.jobs.map((job) => job.title));
  const job = state.jobs.find((item) => item.id === state.activeJobId);
  if (job) document.querySelector("#bidJobSelect").value = job.title;
  const workerName = document.querySelector("#bidWorkerName");
  const canPrefill = workerName && document.activeElement !== workerName
    && (!workerName.value.trim() || ["Medford Handyman", "Mike Johnson", "Mike Jones"].includes(workerName.value.trim()));
  if (state.session.role === "worker" && canPrefill) workerName.value = state.session.name;
}

function renderStatusResults() {
  const target = document.querySelector("#statusResults");
  if (!target) return;
  const lookup = document.querySelector("#statusLookup");
  if (lookup && state.session.role === "customer" && !lookup.value) lookup.value = customerLookupValue(state.session.name);
  target.innerHTML = statusMatches.map((job) => {
    const bids = state.bids.filter((bid) => bid.jobId === job.id);
    return `
      <article class="status-card">
        <span class="split-label">${escapeHtml(job.status)}</span>
        <h3>${escapeHtml(job.title)}</h3>
        <p>${escapeHtml(job.location)} · ${escapeHtml(job.budget)}</p>
        <p>${bids.length} bid${bids.length === 1 ? "" : "s"} received</p>
        <div class="lead-actions">
          <button class="btn blue small" type="button" data-detail="${job.id}">View Detail</button>
          <button class="btn ghost small" type="button" data-message-thread="job-${job.id}">Message Forge</button>
        </div>
      </article>
    `;
  }).join("") || statusEmptyState();
}

function statusEmptyState() {
  const searched = Boolean(document.querySelector("#statusLookup")?.value.trim());
  return `
    <article class="status-card status-empty">
      <span class="split-label">${searched ? "No match yet" : "Start lookup"}</span>
      <h3>${searched ? "Forge did not find a job for that contact." : "Enter the phone or email used on the job."}</h3>
      <p>${searched ? "Try another phone/email, post a new job, or send the first-user links so the person can choose the right path." : "Once a job is saved, this view shows bids, messages, selected-bid handoff, and next steps."}</p>
      <div class="lead-actions">
        <button class="btn orange small" type="button" data-nav="post">Post a Job</button>
        <button class="btn ghost small" type="button" data-action="copy-first-user-links">Copy First User Links</button>
      </div>
    </article>
  `;
}

function renderMessages() {
  const list = document.querySelector("#messageThreadList");
  const select = document.querySelector("#messageThreadSelect");
  const body = document.querySelector("#messageBody");
  const summary = document.querySelector("#messageSummary");
  const sentList = document.querySelector("#sentMessageList");
  if (!list || !select || !body || !summary || !sentList) return;

  const threads = getMessageThreads();
  if (!threads.find((thread) => thread.id === state.activeMessageThreadId)) {
    state.activeMessageThreadId = threads[0]?.id || "";
  }
  const active = threads.find((thread) => thread.id === state.activeMessageThreadId);
  list.innerHTML = threads.map((thread) => `
    <button class="${thread.id === state.activeMessageThreadId ? "active" : ""}" type="button" data-message-thread="${escapeHtml(thread.id)}">
      <strong>${escapeHtml(thread.title)}</strong>
      <span>${escapeHtml(thread.subtitle)}</span>
      <small>${escapeHtml(thread.kind)}</small>
    </button>
  `).join("") || `<article class="queue-card"><h3>No message threads yet.</h3><p>Post a job or create a worker lead to start one.</p></article>`;
  select.innerHTML = threads.map((thread) => `<option value="${escapeHtml(thread.id)}" ${thread.id === state.activeMessageThreadId ? "selected" : ""}>${escapeHtml(thread.title)}</option>`).join("");
  if (active && document.activeElement !== body) body.value = active.draft;
  summary.innerHTML = active ? messageSummary(active) : `<p class="muted">Choose a conversation to see the next follow-up.</p>`;
  const orderedMessages = [
    ...state.messages.filter((message) => message.threadId === state.activeMessageThreadId),
    ...state.messages.filter((message) => message.threadId !== state.activeMessageThreadId)
  ].slice(0, 8);
  sentList.innerHTML = orderedMessages.map((message) => `
    <article>
      <span>${escapeHtml(message.sentAt)} · ${escapeHtml(message.status)}</span>
      <strong>${escapeHtml(message.to)}</strong>
      <p>${escapeHtml(message.body)}</p>
    </article>
  `).join("") || `<p class="muted">No sent messages yet.</p>`;
}

function messageSummary(thread) {
  const related = messageContext(thread);
  const lastMessage = state.messages.find((message) => message.threadId === thread.id);
  return `
    <article>
      <div>
        <span class="split-label">${escapeHtml(thread.kind)}</span>
        <h3>${escapeHtml(thread.title)}</h3>
        <p>${escapeHtml(related.detail)}</p>
      </div>
      <div class="message-next">
        <span>Next step</span>
        <strong>${escapeHtml(related.next)}</strong>
        <small>${escapeHtml(lastMessage ? `Last touch: ${lastMessage.sentAt}` : "No saved message yet")}</small>
      </div>
      <div class="hero-actions">
        ${related.jobId ? `<button class="btn ghost small" type="button" data-detail="${escapeHtml(related.jobId)}">Open Job</button>` : ""}
        ${related.screen ? `<button class="btn ghost small" type="button" data-nav="${escapeHtml(related.screen)}">${escapeHtml(related.action)}</button>` : ""}
      </div>
    </article>
  `;
}

function messageContext(thread) {
  if (thread.id.startsWith("job-")) {
    const jobId = thread.id.replace("job-", "");
    const job = state.jobs.find((item) => item.id === jobId);
    const bids = state.bids.filter((bid) => bid.jobId === jobId);
    const chosen = bids.find((bid) => bid.chosen);
    return {
      jobId,
      detail: job ? `${job.customer} · ${job.status} · ${bids.length} bid${bids.length === 1 ? "" : "s"}` : thread.subtitle,
      next: chosen ? `Confirm schedule with ${chosen.worker}` : bids.length ? "Help the customer choose a bid" : "Get this job in front of workers"
    };
  }
  if (thread.id.startsWith("worker-")) {
    return {
      screen: "admin",
      action: "Open Admin",
      detail: thread.subtitle,
      next: "Confirm availability and readiness for paid jobs"
    };
  }
  if (thread.id.startsWith("opportunity-")) {
    return {
      screen: "opportunities",
      action: "Open Careers",
      detail: thread.subtitle,
      next: "Confirm the path and official application requirements"
    };
  }
  if (thread.id.startsWith("project-")) {
    return {
      screen: "admin-projects",
      action: "Open Projects",
      detail: thread.subtitle,
      next: "Confirm route, consent, license/insurance boundary, and partner review readiness"
    };
  }
  if (thread.id.startsWith("road-rescue-")) {
    return {
      screen: "road-rescue",
      action: "Open Road Rescue",
      detail: thread.subtitle,
      next: "Confirm safety, location, provider availability, and documentation needs"
    };
  }
  return {
    screen: "capture",
    action: "Capture Lead",
    detail: thread.subtitle,
    next: "Turn this contact into a job, worker, or referral"
  };
}

function getMessageThreads() {
  const role = state.session.role;
  if (role === "worker") {
    return state.jobs.map((job) => ({
      id: `job-${job.id}`,
      title: job.title,
      subtitle: `${job.customer} · ${job.budget}`,
      kind: "Worker to job poster",
      to: job.customer,
      draft: workerJobMessage(job)
    }));
  }
  if (role === "customer") {
    const jobs = state.jobs.filter((job) => samePerson(job.customer, state.session.name));
    const projects = (state.projectLeads || []).filter((lead) => samePerson(lead.contactName, state.session.name));
    return [
      ...jobs.map((job) => ({
      id: `job-${job.id}`,
      title: job.title,
      subtitle: `${job.status} · ${job.bids} bids`,
      kind: "Job poster to Forge",
      to: "Forge Admin",
      draft: customerJobMessage(job)
      })),
      ...projects.map((lead) => ({
        id: `project-${lead.id}`,
        title: lead.projectTitle,
        subtitle: `${projectStatusLabel(lead.status)} · ${lead.route}`,
        kind: "Project owner to Forge",
        to: "Forge Projects",
        draft: projectLeadFollowUpText(lead)
      }))
    ];
  }
  return [
    ...state.jobs.map((job) => ({
      id: `job-${job.id}`,
      title: job.title,
      subtitle: `${job.customer} · ${job.status}`,
      kind: "Job lead",
      to: job.customer,
      draft: jobTemplate(job)
    })),
    ...state.workers.map((worker) => ({
      id: `worker-${worker.email}`,
      title: worker.name,
      subtitle: `${worker.trade} · ${worker.status}`,
      kind: "Worker lead",
      to: worker.name,
      draft: workerTemplate(worker)
    })),
    ...state.referrals.map((lead) => ({
      id: `referral-${lead.id}`,
      title: lead.name,
      subtitle: `${lead.type} · ${lead.priority}`,
      kind: "Referral",
      to: lead.name,
      draft: referralTemplate(lead)
    })),
    ...(state.homebuildingLeads || []).map((lead) => ({
      id: `homebuilding-${lead.id}`,
      title: lead.name,
      subtitle: `${lead.routingLane || "Homebuilding Review"} · ${lead.status}`,
      kind: "Homebuilding lead",
      to: lead.name,
      draft: homebuildingLeadText(lead)
    })),
    ...(state.buildingLeads || []).map((lead) => ({
      id: `building-${lead.id}`,
      title: lead.projectTitle,
      subtitle: `${buildingStatusLabel(lead.status)} · ${lead.route}`,
      kind: "Building lead",
      to: lead.ownerName || lead.businessName || lead.email,
      draft: buildingLeadText(lead)
    })),
    ...(state.projectLeads || []).map((lead) => ({
      id: `project-${lead.id}`,
      title: lead.projectTitle,
      subtitle: `${projectStatusLabel(lead.status)} · ${lead.route}`,
      kind: "Project lead",
      to: lead.contactName,
      draft: projectLeadFollowUpText(lead)
    })),
    ...(state.northstarLeads || []).map((lead) => ({
      id: `northstar-${lead.id}`,
      title: lead.businessName,
      subtitle: `${lead.status} · ${lead.trade}`,
      kind: "Business growth lead",
      to: lead.name,
      draft: northstarLeadText(lead)
    })),
    ...(state.flexLeads || []).map((lead) => ({
      id: `flex-${lead.id}`,
      title: lead.business_name,
      subtitle: `${flexStatusLabel(lead.status)} · score ${lead.lead_score}`,
      kind: "Capital Desk lead",
      to: lead.owner_name,
      draft: flexOutreachText(lead)
    })),
    ...(state.roadRescueRequests || []).map((request) => ({
      id: `road-rescue-${request.id}`,
      title: `${request.name} - ${roadRescueIssueSummary(request)}`,
      subtitle: `${request.status} · ${request.location}`,
      kind: "Road Rescue lead",
      to: request.name,
      draft: roadRescueCustomerText(request)
    })),
    ...(state.opportunityLeads || []).map((lead) => ({
      id: `opportunity-${lead.id}`,
      title: lead.name,
      subtitle: `${lead.goal} · ${lead.status}`,
      kind: "Career lead",
      to: lead.name,
      draft: opportunityLeadText(lead)
    }))
  ];
}

function renderDashboards() {
  const sessionWorkerName = state.session.role === "worker" ? state.session.name : state.worker.name;
  const workerBids = state.bids.filter((bid) => samePerson(bid.worker, sessionWorkerName));
  const activeBids = state.session.role === "worker" ? workerBids.length : state.bids.length;
  const chosenBids = workerBids.filter((bid) => bid.chosen);
  const newJobs = state.jobs.filter((job) => job.status === "New").length;
  const activeJobs = state.jobs.length;
  const workers = state.workers.length;
  const referrals = state.referrals.length;
  const careerLeads = (state.opportunityLeads || []).length;
  const homebuildingLeads = (state.homebuildingLeads || []).length;
  const buildingLeads = (state.buildingLeads || []).length;
  const projectLeads = (state.projectLeads || []).length;
  const creativeRequests = state.jobs.filter(isCreativeJob);
  const creativeProviders = state.workers.filter(isCreativeProvider);
  const northstarLeads = state.northstarLeads || [];
  const roadRescueRequests = state.roadRescueRequests || [];
  const flexLeads = state.flexLeads || [];
  const hotLeads = state.referrals.filter((lead) => lead.priority === "Hot").length + state.jobs.filter((job) => job.status === "New").length;

  const workerTitle = document.querySelector("#workerDashboardTitle");
  if (workerTitle) workerTitle.textContent = state.session.role === "worker" ? `${sessionWorkerName}'s Dashboard` : "Dashboard";

  document.querySelector("#workerStats").innerHTML = statCards([
    ["Active Bids", activeBids],
    ["Open Jobs", activeJobs],
    ["Jobs Won", chosenBids.length],
    ["Earnings", chosenBids.length ? "$2,450" : "$0"]
  ]);
  document.querySelector("#adminStats").innerHTML = statCards([
    ["New Jobs", newJobs],
    ["Workers", workers],
    ["Creative Requests", creativeRequests.length],
    ["Creative Providers", creativeProviders.length],
    ["NorthStar", northstarLeads.length],
    ["Road Rescue", roadRescueRequests.length],
    ["Flex Leads", flexLeads.length],
    ["Referrals", referrals],
    ["Career Leads", careerLeads],
    ["Homebuilding", homebuildingLeads],
    ["Building", buildingLeads],
    ["Projects", projectLeads],
    ["Hot Leads", hotLeads]
  ]);

  renderTable("#workerJobsTable", state.jobs.slice(0, 4).map((job) => {
    const bid = workerBids.find((item) => item.jobId === job.id);
    return {
      job: job.title,
      location: job.location,
      price: job.budget,
      status: bid ? `Bid ${bid.amount}` : job.status
    };
  }));

  renderTable("#adminLeadsTable", state.jobs.slice(0, 5).map((job) => ({
    customer: job.customer,
    job: job.title,
    category: categoryLabel(job.category),
    location: job.location,
    phone: job.phone,
    time: job.posted,
    status: job.status
  })));

  renderTable("#adminWorkersTable", state.workers.map((worker) => ({
    name: worker.name,
    trade: worker.trade,
    phone: worker.phone,
    area: worker.area,
    status: worker.status
  })));

  renderTable("#adminCreativeRequestsTable", creativeRequests.map((lead) => ({
    customer: lead.customer,
    service: lead.projectType || lead.title,
    date: lead.desiredDate || lead.urgency,
    location: lead.location,
    budget: lead.budget,
    status: creativeStatusText(lead.creativeStatus || lead.status)
  })));

  renderTable("#adminCreativeProvidersTable", creativeProviders.map((provider) => ({
    name: provider.name,
    business: provider.businessName || "",
    services: provider.servicesOffered || provider.shootTypes || provider.discipline,
    area: provider.area || provider.service_area,
    portfolio: provider.portfolioLink || "",
    status: creativeStatusText(provider.providerStatus || provider.status)
  })));

  renderTable("#adminNorthstarTable", northstarLeads.map((lead) => ({
    business: lead.businessName,
    owner: lead.name,
    trade: lead.trade,
    services: (lead.servicesNeeded || []).join(", "),
    budget: lead.budget,
    status: lead.status
  })));

  renderTable("#adminRoadRescueTable", roadRescueRequests.map((request) => ({
    customer: request.name,
    phone: request.phone,
    issue: roadRescueIssueSummary(request),
    service: request.serviceRequested,
    location: request.location,
    safe: request.vehicleSafe,
    status: request.status
  })));

  renderFlexLeadsAdmin();

  renderTable("#adminReferralsTable", state.referrals.map((lead) => ({
    name: lead.name,
    type: lead.type,
    phone: lead.phone,
    priority: lead.priority,
    status: lead.status
  })));

  renderTable("#adminHomebuildingTable", (state.homebuildingLeads || []).map((lead) => ({
    name: lead.name,
    project: lead.type,
    location: lead.location,
    budget: lead.budget,
    route: lead.routingLane,
    score: lead.leadScore,
    timeline: lead.timeline,
    status: lead.status
  })));

  renderTable("#adminBuildingLeadsTable", buildingTableRows(state.buildingLeads || []));

  renderTable("#adminProjectsTable", projectTableRows(state.projectLeads || []));

  renderTable("#adminBidsTable", state.bids.map((bid) => ({
    job: state.jobs.find((job) => job.id === bid.jobId)?.title || "Unknown job",
    worker: bid.worker,
    amount: bid.amount,
    timeline: bid.timeline,
    status: bid.chosen ? "Chosen" : bid.status
  })));
  renderLeadPipelines();
}

function renderConfirmation() {
  const confirmation = state.lastConfirmation || seedState.lastConfirmation;
  document.querySelector("#confirmKicker").textContent = confirmation.type === "worker"
    ? "Worker signup saved"
    : confirmation.type === "job"
      ? "Job lead saved"
      : confirmation.type === "referral"
        ? "Quick lead saved"
        : confirmation.type === "bid"
          ? "Bid saved"
          : confirmation.type === "vehicle"
            ? "Vehicle listing saved"
            : confirmation.type === "auto-inquiry"
              ? "Auto buyer inquiry saved"
              : confirmation.type === "auto-service"
                ? "Auto service request saved"
                : confirmation.type === "opportunity"
                  ? "Career interest saved"
                  : confirmation.type === "project"
                    ? "Project opportunity saved"
                  : confirmation.type === "homebuilding"
                    ? "Homebuilding request saved"
                    : confirmation.type === "creative"
                      ? "Creative request saved"
                      : confirmation.type === "creative-provider"
                        ? "Creative provider saved"
                        : confirmation.type === "northstar"
                          ? "NorthStar request saved"
                          : confirmation.type === "flex"
                            ? "Capital Desk lead saved"
                  : "Forge is ready";
  document.querySelector("#confirmTitle").textContent = confirmation.title;
  document.querySelector("#confirmBody").textContent = confirmation.body;
  document.querySelector("#confirmDetails").innerHTML = confirmation.details.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  document.querySelector("#confirmNextSteps").innerHTML = confirmNextSteps(confirmation).map((item, index) => `
    <article>
      <strong>${index + 1}</strong>
      <span>${escapeHtml(item)}</span>
    </article>
  `).join("");
  document.querySelector("#confirmHandoff").innerHTML = `
    <span class="split-label">First-user handoff</span>
    <strong>${escapeHtml(confirmationHandoffTitle(confirmation))}</strong>
    <p>${escapeHtml(confirmationHandoffText(confirmation))}</p>
  `;
  configureConfirmButton("#confirmPrimary", confirmation.primary);
  configureConfirmButton("#confirmSecondary", confirmation.secondary);
}

function confirmNextSteps(confirmation) {
  if (confirmation.nextSteps?.length) return confirmation.nextSteps;
  if (confirmation.type === "job") return ["Forge saves this job to Admin", "Workers can review and bid", "You can check job status with your phone or email"];
  if (confirmation.type === "worker") return ["Forge saves your worker profile", "The operator can follow up with available jobs", "Your readiness status appears on the worker dashboard"];
  if (confirmation.type === "referral") return ["Forge saves the referral in Admin", "The lead appears in the Next 10 outreach queue", "The operator can call, text, email, or move it forward"];
  if (confirmation.type === "bid") return ["Forge attaches this bid to the job", "The customer can compare bids on Job Detail", "Messages keep the next handoff visible"];
  if (confirmation.type === "auto-service") return ["Forge saves this auto service request", "The operator can route it to a qualified auto partner", "Licensed or qualified partners handle regulated sales, repair, towing, transport, financing, and insurance work where required"];
  if (confirmation.type === "vehicle") return ["Forge saves this vehicle listing", "Buyers can copy seller follow-up info", "Buyer and seller verify title, condition, and payment outside Forge"];
  if (confirmation.type === "auto-inquiry") return ["Forge saves this buyer inquiry", "The dealer handoff can be copied from Autos", "Dealer, buyer, and seller verify title, condition, financing, and payment outside Forge"];
  if (confirmation.type === "opportunity") return ["Forge saves this career interest", "The operator can copy an application plan and follow up", "Official applications happen through the school, union, employer, or program"];
  if (confirmation.type === "project") return ["Forge saves and routes this project opportunity", "Smaller home projects route to normal Forge Pros while major projects move to Major Projects Review", "Third-party partner sharing requires consent, Forge approval, and written partner agreement"];
  if (confirmation.type === "homebuilding") return ["Forge saves and pre-screens this project lead", "Accepted major leads stay inside Forge until consent and approved-partner gates pass", "All contracts remain between the client and the approved partner or licensed contractor"];
  if (confirmation.type === "creative") return ["Forge saves this photography_videography request", "The operator can match it with approved local creatives", "Customer contact info stays for booking and provider matching"];
  if (confirmation.type === "creative-provider") return ["Forge saves this photography_videography provider application", "The operator reviews portfolio, availability, and provider terms", "Approved providers can be matched to creative requests"];
  if (confirmation.type === "northstar") return ["Forge saves this as a NorthStar Creative Co. business growth lead", "Admin can review marketing and operations needs", "NorthStar can scope websites, branding, CRM, lead follow-up, job tracking, and operations support"];
  if (confirmation.type === "flex") return ["Forge saves this as a Forge Capital Desk lead", "Finance partner routing stays pending until consent and approval gates pass", "Approved finance partners handle eligibility, approval, onboarding, activation, and product support"];
  return ["Choose a path", "Save the right info", "Keep the next follow-up visible"];
}

function confirmationHandoffTitle(confirmation) {
  if (confirmation.type === "job") return "Tell the job poster what happens next.";
  if (confirmation.type === "worker") return "Tell the worker how early access works.";
  if (confirmation.type === "referral") return "Tell the referral why you saved their info.";
  if (confirmation.type === "bid") return "Tell both sides where the bid went.";
  if (confirmation.type === "auto-service") return "Tell the customer how Forge Auto routing works.";
  if (confirmation.type === "vehicle") return "Tell the seller how the auto listing works.";
  if (confirmation.type === "auto-inquiry") return "Tell the buyer what happens next.";
  if (confirmation.type === "opportunity") return "Tell the applicant how Forge will help organize the next step.";
  if (confirmation.type === "project") return "Tell the project owner how Forge routes project opportunities.";
  if (confirmation.type === "homebuilding") return "Tell the project owner how Forge pre-screens and refers major leads.";
  if (confirmation.type === "creative") return "Tell the customer how Forge creative matching works.";
  if (confirmation.type === "creative-provider") return "Tell the provider how approved-provider review works.";
  if (confirmation.type === "northstar") return "Tell the business owner how NorthStar growth support works.";
  if (confirmation.type === "flex") return "Tell the business owner how finance partner review works.";
  return "Use this as the next message.";
}

function confirmationHandoffText(confirmation) {
  const steps = confirmNextSteps(confirmation);
  const detail = confirmation.details?.[0] ? ` (${confirmation.details[0]})` : "";
  if (confirmation.type === "job") {
    return `Forge saved your job${detail}. The team will match it with local workers, keep bids visible in Job Status, and follow up by text, phone, or email. No payment is collected in this MVP.`;
  }
  if (confirmation.type === "worker") {
    return `Forge saved your worker profile${detail}. You are on the early access list, and the team can follow up when local jobs fit your trade. No payment or account password is needed for this MVP.`;
  }
  if (confirmation.type === "referral") {
    return `Forge saved this referral${detail}. The operator can follow up, track the next action, and move the lead into the first 200 launch list.`;
  }
  if (confirmation.type === "bid") {
    return `Forge saved this bid${detail}. The job poster can compare it on the job detail screen, and Messages keep the next schedule handoff visible.`;
  }
  if (confirmation.type === "auto-service") {
    return `Forge saved this auto service request${detail}. The operator can route it to a trusted auto partner, mechanic, transport provider, or dealership partner. Regulated work must be handled by properly licensed or qualified partners where required.`;
  }
  if (confirmation.type === "vehicle") {
    return `Forge saved this vehicle listing${detail}. Buyers can copy the seller contact info, but title, inspection, financing, and payment stay outside Forge in this MVP.`;
  }
  if (confirmation.type === "auto-inquiry") {
    return `Forge saved this buyer inquiry${detail}. The dealer partner can follow up, but title, inspection, financing, and payment stay outside Forge in this MVP.`;
  }
  if (confirmation.type === "opportunity") {
    return `Forge saved this career interest${detail}. The operator can help organize trade school, union, apprenticeship, or AI field-job next steps, but official applications and documents stay outside Forge in this MVP.`;
  }
  if (confirmation.type === "project") {
    return `Forge saved this project opportunity${detail}. Forge is a lead marketplace and project coordinator, not the contractor of record. Smaller home projects can route to normal Forge Pros; larger development, multifamily, mixed-use, commercial, and investment-backed projects go through Major Projects Review. Forge needs user consent before sharing project details with third-party partners, and partner names, logos, testimonials, or case studies require written permission. Construction work must be accepted only by properly licensed and insured contractors where required.`;
  }
  if (confirmation.type === "homebuilding") {
    return `Forge saved this homebuilding request${detail}. Forge pre-screens qualified project leads and keeps accepted major leads inside Forge until customer consent, partner approval, and data-sharing gates pass. Any approved partner may accept or decline review. Any referral or success fee must be governed by a separate written agreement. All construction and development contracts remain between the client and the approved partner or licensed contractor. Forge is not the contractor of record. Sensitive documents and payment details stay outside Forge in this MVP.`;
  }
  if (confirmation.type === "creative") {
    return `Forge saved this photography and videography request${detail}. The operator can match it with approved local creative providers without publishing private contact information.`;
  }
  if (confirmation.type === "creative-provider") {
    return `Forge saved this creative provider application${detail}. The operator can review portfolio, availability, insurance or licensing notes, and provider terms before matching the provider with customers.`;
  }
  if (confirmation.type === "northstar") {
    return `Forge saved this NorthStar Creative Co. request${detail}. Admin can review the business, services needed, budget, biggest problem, and 30-90 day goal, then NorthStar can scope the right marketing and operations support.`;
  }
  if (confirmation.type === "flex") {
    return `Forge saved this Capital Desk lead${detail}. Forge may route eligible business owners to approved finance partner review only when consent, written approval, and data-sharing requirements are in place. Finance partners handle eligibility, approval, onboarding, activation, and support. Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker.`;
  }
  return `Forge is ready for controlled first-user signups. Next: ${steps.join(" ")}`;
}

function configureConfirmButton(selector, config) {
  const button = document.querySelector(selector);
  button.textContent = config.label;
  delete button.dataset.nav;
  delete button.dataset.detail;
  delete button.dataset.action;
  delete button.dataset.flexLeadId;
  if (config.jobId) {
    button.dataset.detail = config.jobId;
  } else if (config.action) {
    button.dataset.action = config.action;
    if (config.flexLeadId) button.dataset.flexLeadId = config.flexLeadId;
  } else {
    button.dataset.nav = config.screen || "home";
  }
}

function renderSettings() {
  const webhookUrl = document.querySelector("#webhookUrl");
  const webhookEnabled = document.querySelector("#webhookEnabled");
  if (!webhookUrl || !webhookEnabled) return;
  webhookUrl.value = state.settings.webhookUrl || "";
  webhookEnabled.checked = Boolean(state.settings.webhookEnabled);
  const publicToggle = document.querySelector("#publicModeToggle");
  if (publicToggle) publicToggle.textContent = state.settings.publicMode ? "Operator View" : "Public View";
}

function renderSafetyCenter() {
  const target = document.querySelector("#safetyChecklist");
  const gate = document.querySelector("#launchGate");
  const deploy = document.querySelector("#deployChecklist");
  const readiness = document.querySelector("#publicReadinessScore");
  const finalGate = document.querySelector("#finalSecurityGate");
  if (gate) {
    gate.innerHTML = launchGateRows().map((item) => `
      <article class="launch-gate-card ${item.ok ? "ready" : "blocked"}">
        <span>${item.label}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `).join("");
  }
  if (deploy) {
    deploy.innerHTML = deployPreflightRows().map((item) => `
      <article class="deploy-item ${item.ok ? "ready" : "blocked"}">
        <span>${item.ok ? "Ready" : "Required"}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `).join("");
  }
  if (readiness) {
    const summary = publicReadinessSummary();
    readiness.innerHTML = `
      <article>
        <span class="split-label">Public beta readiness</span>
        <strong>${summary.score}%</strong>
        <p>${escapeHtml(summary.body)}</p>
      </article>
      <div>
        <h3>Remaining blockers</h3>
        <ul>${summary.blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    `;
  }
  if (finalGate) {
    finalGate.innerHTML = finalSecurityGateRows().map((item) => `
      <article class="${item.ok ? "ready" : "hold"}">
        <span>${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </article>
    `).join("");
  }
  if (target) target.innerHTML = safetyChecks().map((item) => `
    <article class="safety-item ${item.ok ? "safe" : "attention"}">
      <span>${item.ok ? "Ready" : "Check"}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderDeliveryStatus() {
  const target = document.querySelector("#deliveryStatus");
  if (!target) return;
  target.innerHTML = deliveryStatusRows().map((item) => `
    <article class="${item.ok ? "ready" : "attention"}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderSoftLaunchPlan() {
  const target = document.querySelector("#softLaunchPlan");
  if (!target) return;
  target.innerHTML = softLaunchRows().map((item) => `
    <article class="${item.ok ? "ready" : "attention"}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function renderSoftLaunchInvites() {
  const target = document.querySelector("#softLaunchInviteKit");
  if (!target) return;
  target.innerHTML = softLaunchInviteRows().map((item) => `
    <article class="ready">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
      <button class="btn ghost small" type="button" data-action="copy-soft-launch-invite" data-invite-role="${escapeHtml(item.role)}">Copy Invite</button>
    </article>
  `).join("");
}

function renderSoftLaunchRunSheet() {
  const target = document.querySelector("#softLaunchRunSheet");
  if (!target) return;
  target.innerHTML = softLaunchRunSheetRows().map((item) => `
    <article class="ready">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function softLaunchRows() {
  const leadCount = totalLeadCount();
  const webhookReady = state.settings.webhookEnabled && Boolean(state.settings.webhookUrl);
  const backupCurrent = state.settings.lastBackupAt && Number(state.settings.lastBackupLeadCount || 0) >= leadCount;
  return [
    {
      label: "Tomorrow",
      title: "Controlled soft launch only",
      body: "Invite people Andrew can personally follow up with: job posters, workers, referrals, career applicants, and a small number of auto buyers or sellers.",
      ok: true
    },
    {
      label: "Demo start",
      title: "Open Perspective Demo first",
      body: "Start at the role picker, then choose homeowner, worker, admin, Autos, or Training & Careers depending on who is looking at the app.",
      ok: true
    },
    {
      label: "Lead capture",
      title: webhookReady ? "Webhook enabled" : "Local capture until backend is connected",
      body: webhookReady
        ? "Submit one test lead tomorrow and confirm it reaches the connected destination before broader outreach."
        : "Leads save locally. Keep the batch small, export backups, and connect Zapier or backend before wider sharing.",
      ok: webhookReady
    },
    {
      label: "Backup",
      title: backupCurrent ? "Backup current" : "Export backup before outreach",
      body: backupCurrent
        ? `Current backup covers ${state.settings.lastBackupLeadCount} leads. Export again after tomorrow's outreach.`
        : "Use Export Backup JSON before and after tomorrow's first-user conversations.",
      ok: Boolean(backupCurrent)
    },
    {
      label: "Safety",
      title: "Payments and trust stay outside the MVP",
      body: "Do not collect deposits, card numbers, bank details, title documents, or sensitive identity documents inside this MVP.",
      ok: true
    },
    {
      label: "Close",
      title: "End every demo with one ask",
      body: "Ask for one real job, one worker signup, one referral, one career applicant, or one approved dealer contact.",
      ok: true
    }
  ];
}

function softLaunchInviteRows() {
  return [
    {
      role: "homeowner",
      label: "Homeowner",
      title: "Ask for one real job",
      body: "Best for friends, family, restaurant owners, landlords, or anyone who has a small repair or yard job."
    },
    {
      role: "worker",
      label: "Worker",
      title: "Ask them to join the worker list",
      body: "Best for handymen, cleaners, landscapers, movers, painters, plumbers, and side-work crews."
    },
    {
      role: "autos",
      label: "Auto",
      title: "Ask about vehicle service, sales, or transport",
      body: "Best for people who need auto repair, inspection, detailing, customization, transport, a vehicle sale, or an auto partner contact."
    },
    {
      role: "creative",
      label: "Creative",
      title: "Ask about photo or video work",
      body: "Best for weddings, events, business branding, social media, real estate, family shoots, churches, and community content."
    },
    {
      role: "northstar",
      label: "NorthStar",
      title: "Ask about business growth help",
      body: "Best for contractors, blue-collar providers, and local businesses that need websites, branding, ads, CRM, lead follow-up, job tracking, or operations."
    },
    {
      role: "capital",
      label: "Capital Desk",
      title: "Ask about Flex referral fit",
      body: "Best for business owners who spend on materials, fuel, payroll, vendor bills, employee cards, equipment, or growth before they get paid."
    },
    {
      role: "career",
      label: "Careers",
      title: "Ask about a school, union, or AI job path",
      body: "Best for people who want a trade school, apprenticeship, union, or AI-enabled field career next step."
    },
    {
      role: "referral",
      label: "Referral",
      title: "Ask for one introduction",
      body: "Best when someone does not need Forge today but knows a homeowner, worker, creative, seller, or dealer contact."
    }
  ];
}

function softLaunchRunSheetRows() {
  return [
    {
      label: "Before sharing",
      title: "Open Admin, copy plan, export backup",
      body: "Start with Admin, copy the Soft Launch Plan, and export a JSON backup before collecting new leads."
    },
    {
      label: "First 5 asks",
      title: "Use the Invite Kit",
      body: "Send one homeowner invite, one worker invite, one creative invite, one NorthStar invite, one Capital Desk invite, one Careers invite, one Autos invite, then one referral ask."
    },
    {
      label: "After each reply",
      title: "Save the lead immediately",
      body: "Use Post Job, Worker Signup, Photography & Videography, NorthStar Creative Co., Forge Capital Desk, Training & Careers, Autos inquiry, or Quick Capture so the reply becomes a visible follow-up item."
    },
    {
      label: "Midday check",
      title: "Review Follow-Up Queue",
      body: "Open Admin, check Today’s Follow-Up and Next 10 Batch, then move any warm lead forward."
    },
    {
      label: "Evening close",
      title: "Copy recap and export backup",
      body: "Copy Outreach Recap, export Backup JSON, and note what needs backend, dealer, or worker follow-up next."
    },
    {
      label: "Stop rule",
      title: "Do not broaden the link yet",
      body: "Keep it controlled until backend delivery, admin protection, legal review, and final security checks are done."
    }
  ];
}

function deliveryStatusRows() {
  const enabled = Boolean(state.settings.webhookEnabled);
  const hasUrl = Boolean(state.settings.webhookUrl);
  const status = state.settings.webhookLastStatus || "Local only";
  return [
    {
      label: enabled && hasUrl ? "Webhook on" : "Local only",
      title: enabled && hasUrl ? "Next lead attempts webhook delivery" : "Next lead stays in this browser",
      body: enabled && hasUrl
        ? "Forge will save locally first, then try to send the lead to the saved webhook URL."
        : "Forge will save the lead locally only. Connect Zapier or a backend before broad public sharing.",
      ok: enabled && hasUrl
    },
    {
      label: "Last delivery",
      title: status,
      body: state.settings.webhookLastAt
        ? `${state.settings.webhookLastType || "Lead"} at ${state.settings.webhookLastAt}.`
        : "No webhook delivery attempt has been recorded yet.",
      ok: ["Sent", "Attempted"].includes(status)
    },
    {
      label: "Public beta",
      title: enabled && hasUrl ? "Lead capture can leave the browser" : "Backend still required",
      body: enabled && hasUrl
        ? "Run a real signup test and confirm it appears in Zapier before sharing publicly."
        : "Public beta should wait until this is connected or the deploy is clearly local-intake only.",
      ok: enabled && hasUrl
    }
  ];
}

function renderBackendHandoff() {
  const target = document.querySelector("#backendHandoff");
  if (!target) return;
  target.innerHTML = backendHandoffRows().map((item) => `
    <article>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function backendHandoffRows() {
  return [
    {
      label: "Database",
      title: "Supabase schema prepared with Projects migration",
      body: "Use SUPABASE_SCHEMA.sql for core marketplace, creative, NorthStar, and public beta tables, plus migrations/20260626_projects.sql for ProjectLead, ProjectLeadNote, Partner, PartnerReferral, and PartnerDocument."
    },
    {
      label: "Payloads",
      title: "Webhook contract documented",
      body: "Use WEBHOOK_PAYLOADS.md to map Forge's job, worker, referral, bid, and test payloads into Zapier or backend tables."
    },
    {
      label: "Security",
      title: "Server-side intake required",
      body: "Public traffic should write through Zapier, an API route, or a Supabase Edge Function rather than exposing admin credentials."
    }
  ];
}

function renderAuthHandoff() {
  const target = document.querySelector("#authHandoff");
  if (!target) return;
  target.innerHTML = authHandoffRows().map((item) => `
    <article>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
}

function authHandoffRows() {
  return [
    {
      label: "Recommended",
      title: "Protect admin at the host or backend",
      body: "Use Cloudflare Access, Netlify password protection, Vercel middleware, Supabase Auth, or a server-side admin route before public launch."
    },
    {
      label: "Do not use",
      title: "Browser-only demo state is not production auth",
      body: "The current demo guard improves safety for previews, but production admin access must be enforced before the app reaches strangers."
    },
    {
      label: "Minimum test",
      title: "Direct admin URLs must require auth",
      body: "Verify #admin, #capture, and #reports cannot show operator data unless the operator has authenticated through the intended protected path."
    }
  ];
}

function launchGateRows() {
  const leadCount = totalLeadCount();
  const webhookReady = state.settings.webhookEnabled && Boolean(state.settings.webhookUrl);
  return [
    {
      label: "First-user beta",
      ok: true,
      title: "Ready for controlled signups",
      body: `Use Forge with people you can personally follow up with. Current local launch list: ${leadCount}/200 leads.`
    },
    {
      label: "Public launch",
      ok: false,
      title: "Do not send broadly yet",
      body: webhookReady
        ? "Zapier capture is ready, but public hosting, database, authentication, backups, and final trust workflow still need to be connected."
        : "Connect Zapier or a backend before wider sharing, then add public hosting, authentication, backups, and the final trust workflow."
    }
  ];
}

function publicReadinessSummary() {
  const blockers = publicReadinessBlockers();
  const score = Math.max(88, 99 - (blockers.length * 3));
  return {
    score,
    body: "The product surface is close for a public beta, but Forge should not be treated as fully public-ready until the remaining blockers are cleared and the final security review passes.",
    blockers
  };
}

function publicReadinessBlockers() {
  const blockers = [];
  const webhookReady = state.settings.webhookEnabled && Boolean(state.settings.webhookUrl);
  const backupCurrent = state.settings.lastBackupAt && Number(state.settings.lastBackupLeadCount || 0) >= totalLeadCount();
  if (!webhookReady) blockers.push("Connect and verify Zapier or a backend so public leads leave this browser.");
  blockers.push("Add production-grade admin authentication before broad traffic.");
  if (!backupCurrent) blockers.push("Export a current JSON backup before public beta testing.");
  blockers.push("Complete final legal review of early-access terms and privacy language.");
  blockers.push("Run the full security review checklist before announcing the public link.");
  return blockers;
}

function finalSecurityGateRows() {
  const webhookReady = state.settings.webhookEnabled && Boolean(state.settings.webhookUrl);
  const backupCurrent = state.settings.lastBackupAt && Number(state.settings.lastBackupLeadCount || 0) >= totalLeadCount();
  return [
    {
      label: "Use now",
      title: "Controlled first-user beta",
      body: "Invite people Andrew can personally follow up with. Keep payments off, make the beta status clear, and export backups after outreach.",
      ok: true
    },
    {
      label: "Must pass",
      title: "Lead delivery verified",
      body: webhookReady
        ? "Webhook is enabled; submit a real test lead and confirm it appears in the intended backend or Zapier destination."
        : "Connect Zapier, Supabase, or another backend so public leads do not live only in this browser.",
      ok: webhookReady
    },
    {
      label: "Must pass",
      title: "Admin protected",
      body: "Before a public link goes out, protect admin, capture, reports, export, import, backup, and webhook setup with production authentication.",
      ok: false
    },
    {
      label: "Must pass",
      title: "Backup and legal review",
      body: backupCurrent
        ? "Backup is current; still complete final legal review and the security review checklist before broad marketing."
        : "Export a fresh JSON backup, then complete final legal review and the security review checklist before broad marketing.",
      ok: Boolean(backupCurrent)
    }
  ];
}

function deployPreflightRows() {
  const webhookReady = state.settings.webhookEnabled && Boolean(state.settings.webhookUrl);
  const backupCurrent = state.settings.lastBackupAt && Number(state.settings.lastBackupLeadCount || 0) >= totalLeadCount();
  return [
    {
      title: "Static host security config",
      ok: true,
      body: "Security headers are prepared for Netlify and Vercel static deploys."
    },
    {
      title: "Lead capture backend",
      ok: webhookReady,
      body: webhookReady
        ? "Webhook capture is enabled, so early public leads can leave this browser."
        : "Connect Zapier or a real backend before sharing with people outside a controlled demo."
    },
    {
      title: "Client admin gate",
      ok: true,
      body: "Operator routes now require the Forge Admin session instead of opening from a guessed URL."
    },
    {
      title: "Backup before launch",
      ok: Boolean(backupCurrent),
      body: backupCurrent
        ? "A current JSON backup exists for the saved local leads."
        : "Export a JSON backup before deploying or importing real user data."
    },
    {
      title: "Terms and privacy",
      ok: true,
      body: "Early-access terms and privacy copy is now available in-app; get final legal review before broad marketing."
    },
    {
      title: "Payments off",
      ok: true,
      body: "No payment is collected in this MVP, which keeps public beta risk lower."
    }
  ];
}

function safetyChecks() {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = leadCount === 0 || (state.settings.lastBackupAt && backupCount >= leadCount);
  const webhookSafe = !state.settings.webhookEnabled || Boolean(state.settings.webhookUrl);
  return [
    {
      title: "Backup status",
      ok: Boolean(backupCurrent),
      body: backupCurrent
        ? state.settings.lastBackupAt
          ? `Last JSON backup: ${state.settings.lastBackupAt} with ${backupCount} leads saved.`
          : "No new leads yet. Export a backup after the first real signup."
        : `Export a JSON backup now. Forge has ${leadCount} leads and the last backup covered ${backupCount}.`
    },
    {
      title: "Contact consent",
      ok: true,
      body: "Job, worker, and quick-capture forms explain early access follow-up by text, phone, or email."
    },
    {
      title: "Webhook safety",
      ok: webhookSafe,
      body: webhookSafe
        ? state.settings.webhookEnabled
          ? "Webhook capture is enabled with a saved URL."
          : "Webhook capture is off, so leads remain local until Zapier is ready."
        : "Webhook capture is checked but no URL is saved. Save a URL or turn webhook capture off."
    },
    {
      title: "Public demo mode",
      ok: state.settings.publicMode || state.session.role === "admin",
      body: state.settings.publicMode
        ? "Public View is on, so operator-only screens are hidden from visitors."
        : "Operator View is on. Use Public View before handing the app to someone else."
    }
  ];
}

function totalLeadCount() {
  return state.jobs.length + state.workers.length + state.referrals.length + (state.northstarLeads || []).length + (state.roadRescueRequests || []).length + (state.flexLeads || []).length + (state.opportunityLeads || []).length + (state.homebuildingLeads || []).length + (state.buildingLeads || []).length + (state.projectLeads || []).length;
}

function renderLaunchCommandCenter() {
  const target = document.querySelector("#launchCommandCenter");
  if (!target) return;
  target.innerHTML = launchCommandRows().map((row) => {
    const total = Math.max(1, row.total);
    const contactedPct = Math.min(100, Math.round((row.contacted / total) * 100));
    const movingPct = Math.min(100, Math.round((row.moving / total) * 100));
    return `
      <article class="launch-command-card">
        <div>
          <span class="split-label">${escapeHtml(row.label)}</span>
          <h3>${row.needTouch} need touch</h3>
          <p>${escapeHtml(row.next)}</p>
        </div>
        <div class="command-metrics">
          <div><strong>${row.total}</strong><span>Total</span></div>
          <div><strong>${row.contacted}</strong><span>Contacted</span></div>
          <div><strong>${row.moving}</strong><span>Moving</span></div>
        </div>
        <div class="command-meter" aria-label="${escapeHtml(row.label)} progress">
          <i style="width: ${contactedPct}%"></i>
          <b style="width: ${movingPct}%"></b>
        </div>
        <button class="btn ghost small" type="button" data-nav="${row.screen}">${escapeHtml(row.action)}</button>
      </article>
    `;
  }).join("");
}

function launchCommandRows() {
  return [
    {
      label: "Job posters",
      total: state.jobs.length,
      needTouch: state.jobs.filter((job) => ["New", "Pending"].includes(job.status)).length,
      contacted: state.jobs.filter((job) => job.status === "Contacted").length,
      moving: state.jobs.filter((job) => ["Matching", "In Progress", "Completed"].includes(job.status)).length,
      next: "Get every real job confirmed, then move the best ones into matching.",
      screen: "post",
      action: "Post Job"
    },
    {
      label: "Workers",
      total: state.workers.length,
      needTouch: state.workers.filter((worker) => worker.status === "New").length,
      contacted: state.workers.filter((worker) => worker.status === "Contacted").length,
      moving: state.workers.filter((worker) => worker.status === "Ready").length,
      next: "Confirm availability, service area, and the first job they can bid on.",
      screen: "signup",
      action: "Add Worker"
    },
    {
      label: "Career leads",
      total: (state.opportunityLeads || []).length,
      needTouch: (state.opportunityLeads || []).filter((lead) => ["New", "Packet Started"].includes(lead.status)).length,
      contacted: (state.opportunityLeads || []).filter((lead) => lead.status === "Contacted").length,
      moving: (state.opportunityLeads || []).filter((lead) => ["Packet Started", "Applied"].includes(lead.status)).length,
      next: "Clarify the path, copy the application plan, and move the applicant toward official program or employer channels.",
      screen: "opportunities",
      action: "Career Path"
    },
    {
      label: "Homebuilding",
      total: (state.homebuildingLeads || []).length,
      needTouch: (state.homebuildingLeads || []).filter((lead) => ["New Project Lead", "Needs More Info"].includes(lead.status)).length,
      contacted: (state.homebuildingLeads || []).filter((lead) => ["Needs More Info", "Forge Qualified", "Sent to Seneca"].includes(lead.status)).length,
      moving: (state.homebuildingLeads || []).filter((lead) => ["Partner Reviewing", "Accepted by Partner", "Proposal Requested", "Site Visit Scheduled", "Contract Pending", "Won"].includes(lead.status)).length,
      next: "Clarify scope, land, plans, budget, timeline, and the right licensed contractor path.",
      screen: "homebuilding",
      action: "Homebuilding"
    },
    {
      label: "Projects",
      total: (state.projectLeads || []).length,
      needTouch: (state.projectLeads || []).filter((lead) => ["NEW", "NEEDS_MORE_INFO", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(lead.status)).length,
      contacted: (state.projectLeads || []).filter((lead) => ["NEEDS_MORE_INFO", "FORGE_QUALIFIED", "SENT_TO_SENECA"].includes(lead.status)).length,
      moving: (state.projectLeads || []).filter((lead) => ["PARTNER_REVIEWING", "ACCEPTED_BY_PARTNER", "PROPOSAL_REQUESTED", "SITE_VISIT_SCHEDULED", "CONTRACT_PENDING", "WON", "ROUTED_TO_FORGE_PRO"].includes(lead.status)).length,
      next: "Route smaller projects to Forge Pros and push qualified major projects through Major Projects Review before partner sharing.",
      screen: "admin-projects",
      action: "Projects Queue"
    },
    {
      label: "NorthStar",
      total: (state.northstarLeads || []).length,
      needTouch: (state.northstarLeads || []).filter((lead) => ["New", "Scoping", "Proposal Needed"].includes(lead.status)).length,
      contacted: (state.northstarLeads || []).filter((lead) => ["Contacted", "Scoping", "Proposal Needed", "Proposal Sent"].includes(lead.status)).length,
      moving: (state.northstarLeads || []).filter((lead) => ["Proposal Sent", "Active"].includes(lead.status)).length,
      next: "Scope marketing and operations needs, then package the right NorthStar build or growth support.",
      screen: "northstar",
      action: "NorthStar"
    },
    {
      label: "Road Rescue",
      total: (state.roadRescueRequests || []).length,
      needTouch: (state.roadRescueRequests || []).filter((request) => ["New", "Contacted"].includes(request.status)).length,
      contacted: (state.roadRescueRequests || []).filter((request) => ["Contacted", "Provider Notified", "Matched"].includes(request.status)).length,
      moving: (state.roadRescueRequests || []).filter((request) => ["Provider Notified", "Matched", "Closed"].includes(request.status)).length,
      next: "Confirm safety, location, requested service, and provider availability before routing.",
      screen: "road-rescue",
      action: "Road Rescue"
    },
    {
      label: "Capital Desk",
      total: (state.flexLeads || []).length,
      needTouch: (state.flexLeads || []).filter((lead) => ["new", "qualified"].includes(lead.status)).length,
      contacted: (state.flexLeads || []).filter((lead) => ["contacted", "flex_link_sent"].includes(lead.status)).length,
      moving: (state.flexLeads || []).filter((lead) => ["application_started", "activated", "commission_expected", "commission_paid", "forge_upsell_offered", "forge_client_won"].includes(lead.status)).length,
      next: "Confirm consent, keep any finance partner handoff behind approval gates, and look for Forge or NorthStar upsell fit.",
      screen: "capital",
      action: "Capital Desk"
    },
    {
      label: "Referrals",
      total: state.referrals.length,
      needTouch: state.referrals.filter((lead) => ["New", "Later"].includes(lead.status)).length,
      contacted: state.referrals.filter((lead) => lead.status === "Contacted").length,
      moving: state.referrals.filter((lead) => lead.status === "Converted").length,
      next: "Turn warm introductions into either a posted job, worker signup, or partner lead.",
      screen: "capture",
      action: "Capture Referral"
    }
  ];
}

function renderOutreachRecap() {
  const target = document.querySelector("#outreachRecap");
  if (!target) return;
  const summary = outreachRecapSummary();
  target.innerHTML = `
    <article class="recap-score">
      <span>${escapeHtml(summary.label)}</span>
      <strong>${summary.total}</strong>
      <p>${escapeHtml(summary.total === 1 ? "recorded action" : "recorded actions")}</p>
    </article>
    <article><strong>${summary.contacted}</strong><span>Contacted</span><p>Calls, texts, emails, or saved messages.</p></article>
    <article><strong>${summary.moved}</strong><span>Moved</span><p>Bids chosen, leads moved forward, or referrals converted.</p></article>
    <article><strong>${summary.captured}</strong><span>Captured</span><p>New job, worker, career, or referral leads saved.</p></article>
    <article class="recap-list">
      <span>Recent proof</span>
      ${summary.items.length
        ? summary.items.slice(0, 4).map((item) => `<p><strong>${escapeHtml(item.at)}</strong> ${escapeHtml(item.text)}</p>`).join("")
        : `<p>No outreach actions recorded for this local day yet.</p>`}
    </article>
  `;
}

function outreachRecapSummary() {
  const label = new Date().toLocaleString([], { month: "short", day: "numeric" });
  const items = state.activity.filter((item) => String(item.at || "").startsWith(label));
  const text = (item) => String(item.text || "").toLowerCase();
  return {
    label,
    items,
    total: items.length,
    contacted: items.filter((item) => /contacted|message saved|sent to webhook|attempted via webhook/.test(text(item))).length,
    moved: items.filter((item) => /moved forward|converted|bid selected|in progress|ready|application packet/.test(text(item))).length,
    captured: items.filter((item) => /new job lead|new worker lead|northstar lead|road rescue request|homebuilding lead|project lead|career interest|quick lead|referral/.test(text(item))).length
  };
}

function renderOutreachBatch() {
  const target = document.querySelector("#outreachBatch");
  if (!target) return;
  const rows = outreachBatchRows();
  target.innerHTML = rows.map((row, index) => `
    <article class="batch-row">
      <strong>${index + 1}</strong>
      <div>
        <span class="split-label">${escapeHtml(row.kind)} · ${escapeHtml(row.priority)} · score ${row.score}</span>
        <h3>${escapeHtml(row.person)}</h3>
        <p>${escapeHtml(row.title)} · ${escapeHtml(row.reason)}</p>
      </div>
      <div class="batch-actions">
        ${contactLinks(row.phone, row.email, row.message)}
        <button class="btn ghost small" type="button" data-action="${row.copyAction}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">Copy</button>
        <button class="btn blue small" type="button" data-action="${row.action}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">Contacted</button>
        <button class="btn orange small" type="button" data-action="${row.forwardAction}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">${escapeHtml(row.forwardLabel)}</button>
      </div>
    </article>
  `).join("") || `<article class="batch-empty"><h3>No outreach batch yet.</h3><p>Capture a new lead or switch the queue to All Statuses.</p></article>`;
}

function outreachBatchRows() {
  return filteredFollowUpRows("All Lead Types", "Needs Follow-Up").slice(0, 10);
}

function renderSessionHistory() {
  const target = document.querySelector("#sessionHistory");
  if (!target) return;
  const sessions = outreachSessionHistory();
  target.innerHTML = sessions.map((session) => `
    <article class="session-card">
      <div>
        <span>${escapeHtml(session.at)}</span>
        <strong>${session.reviewed} reviewed</strong>
        <p>${session.contacted} contact actions · ${session.moved} moved forward · ${session.remaining} still need touch</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-session-note" data-session-index="${session.index}">Copy Note</button>
    </article>
  `).join("") || `<article class="session-empty"><h3>No completed sprints yet.</h3><p>Use Complete Sprint after a Next 10 outreach session to save the summary here.</p></article>`;
}

function outreachSessionHistory() {
  return state.activity
    .map((item, index) => ({ ...item, index }))
    .filter((item) => String(item.text || "").startsWith("Outreach sprint completed:"))
    .map((item) => {
      const match = item.text.match(/completed: (\d+) people .*?, (\d+) contact actions today, (\d+) moved forward, (\d+) still need touch/);
      return {
        index: item.index,
        at: item.at,
        text: item.text,
        reviewed: match?.[1] || "0",
        contacted: match?.[2] || "0",
        moved: match?.[3] || "0",
        remaining: match?.[4] || "0"
      };
    })
    .slice(0, 5);
}

function renderLeadPipelines() {
  document.querySelector("#adminJobPipeline").innerHTML = state.jobs.slice(0, 6).map((job) => `
    <article class="lead-card">
      <div>
        <span class="split-label">${escapeHtml(job.status)} · ${escapeHtml(categoryLabel(job.category))}</span>
        <h3>${escapeHtml(job.title)}</h3>
        <p>${escapeHtml(job.customer)} · ${escapeHtml(job.phone || "No phone yet")}</p>
      </div>
      <label>Status
        <select data-job-status="${job.id}">
          ${jobStatuses.map((status) => `<option ${status === job.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>Notes
        <textarea data-job-notes="${job.id}" rows="2" placeholder="Follow-up notes">${escapeHtml(job.notes || "")}</textarea>
      </label>
      <div class="lead-actions">
        ${contactLinks(job.phone, job.email, jobTemplate(job))}
        <button class="btn ghost small" type="button" data-action="copy-job-direct" data-job-id="${job.id}">Copy Text</button>
        <button class="btn blue small" type="button" data-action="mark-job-contacted" data-job-id="${job.id}">Mark Contacted</button>
      </div>
    </article>
  `).join("");

  document.querySelector("#adminWorkerPipeline").innerHTML = state.workers.map((worker) => `
    <article class="lead-card">
      <div>
        <span class="split-label">${escapeHtml(worker.status)}</span>
        <h3>${escapeHtml(worker.name)}</h3>
        <p>${escapeHtml(worker.trade)} · ${escapeHtml(worker.phone)}</p>
      </div>
      <label>Status
        <select data-worker-status="${escapeHtml(worker.email)}">
          ${workerStatuses.map((status) => `<option ${status === worker.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <p class="muted">${escapeHtml(worker.area)} · ${escapeHtml(worker.experience)}</p>
      <div class="lead-actions">
        ${contactLinks(worker.phone, worker.email, workerTemplate(worker))}
        <button class="btn ghost small" type="button" data-action="copy-worker-direct" data-worker-email="${escapeHtml(worker.email)}">Copy Text</button>
        <button class="btn blue small" type="button" data-action="mark-worker-contacted" data-worker-email="${escapeHtml(worker.email)}">Mark Contacted</button>
      </div>
    </article>
  `).join("");

  const creativeRequestsTarget = document.querySelector("#adminCreativeRequestsPipeline");
  if (creativeRequestsTarget) {
    const creativeRequests = state.jobs.filter(isCreativeJob);
    creativeRequestsTarget.innerHTML = creativeRequests.map((lead) => {
      const status = normalizedCreativeRequestStatus(lead);
      return `
        <article class="lead-card">
          <div>
            <span class="split-label">${escapeHtml(creativeStatusText(status))} · ${escapeHtml(lead.mediaType || "Creative request")}</span>
            <h3>${escapeHtml(lead.projectType || lead.title)}</h3>
            <p>${escapeHtml(lead.customer)} · ${escapeHtml(lead.phone || "No phone yet")} · ${escapeHtml(lead.location || "Location pending")}</p>
          </div>
          <label>Creative status
            <select data-creative-request-status="${escapeHtml(lead.id)}">
              ${creativeRequestStatuses.map((item) => `<option value="${escapeHtml(item)}" ${item === status ? "selected" : ""}>${escapeHtml(creativeStatusText(item))}</option>`).join("")}
            </select>
          </label>
          <label>Admin notes
            <textarea data-creative-request-notes="${escapeHtml(lead.id)}" rows="2" placeholder="Quote, provider match, delivery, or follow-up notes">${escapeHtml(lead.adminNotes || "")}</textarea>
          </label>
          <div class="lead-actions">
            ${contactLinks(lead.phone, lead.email, jobTemplate(lead))}
            <button class="btn ghost small" type="button" data-action="copy-creative-lead" data-creative-lead-id="${escapeHtml(lead.id)}">Copy Lead</button>
          </div>
        </article>
      `;
    }).join("") || `<article class="lead-card"><p class="muted">No creative requests yet.</p></article>`;
  }

  const creativeProvidersTarget = document.querySelector("#adminCreativeProvidersPipeline");
  if (creativeProvidersTarget) {
    const creativeProviders = state.workers.filter(isCreativeProvider);
    creativeProvidersTarget.innerHTML = creativeProviders.map((provider) => {
      const status = normalizedCreativeProviderStatus(provider);
      return `
        <article class="lead-card">
          <div>
            <span class="split-label">${escapeHtml(creativeStatusText(status))} · ${provider.featured ? "Featured" : "Not featured"}</span>
            <h3>${escapeHtml(provider.name || "Local Creative Provider")}</h3>
            <p>${escapeHtml(provider.servicesOffered || provider.shootTypes || provider.discipline || CREATIVE_CATEGORY_LABEL)} · ${escapeHtml(provider.phone || "No phone yet")}</p>
          </div>
          <label>Provider status
            <select data-creative-provider-status="${escapeHtml(provider.email)}">
              ${creativeProviderStatuses.map((item) => `<option value="${escapeHtml(item)}" ${item === status ? "selected" : ""}>${escapeHtml(creativeStatusText(item))}</option>`).join("")}
            </select>
          </label>
          <label class="check-row"><input type="checkbox" data-creative-provider-featured="${escapeHtml(provider.email)}" ${provider.featured ? "checked" : ""} /> Featured provider</label>
          <label>Admin notes
            <textarea data-creative-provider-notes="${escapeHtml(provider.email)}" rows="2" placeholder="Portfolio review, insurance, drone approval, or follow-up notes">${escapeHtml(provider.adminNotes || "")}</textarea>
          </label>
          <div class="lead-actions">
            ${contactLinks(provider.phone, provider.email, workerTemplate(provider))}
            <button class="btn ghost small" type="button" data-action="copy-creative-provider" data-creative-provider-email="${escapeHtml(provider.email)}">Copy Provider</button>
          </div>
        </article>
      `;
    }).join("") || `<article class="lead-card"><p class="muted">No creative provider applications yet.</p></article>`;
  }

  const northstarTarget = document.querySelector("#adminNorthstarPipeline");
  if (northstarTarget) {
    northstarTarget.innerHTML = (state.northstarLeads || []).map((lead) => `
      <article class="lead-card">
        <div>
          <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(NORTHSTAR_OPERATIONS_CATEGORY_VALUE)}</span>
          <h3>${escapeHtml(lead.businessName)}</h3>
          <p>${escapeHtml(lead.name)} · ${escapeHtml(lead.trade)} · ${escapeHtml(lead.phone || "No phone yet")}</p>
        </div>
        <label>Status
          <select data-northstar-status="${escapeHtml(lead.id)}">
            ${northstarStatuses.map((status) => `<option ${status === lead.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>Admin notes
          <textarea data-northstar-notes="${escapeHtml(lead.id)}" rows="2" placeholder="Scope, package, proposal, CRM, or follow-up notes">${escapeHtml(lead.adminNotes || "")}</textarea>
        </label>
        <div class="lead-actions">
          ${contactLinks(lead.phone, lead.email, northstarLeadText(lead))}
          <button class="btn ghost small" type="button" data-action="copy-northstar-lead" data-northstar-id="${escapeHtml(lead.id)}">Copy Lead</button>
          <button class="btn blue small" type="button" data-action="mark-northstar-contacted" data-northstar-id="${escapeHtml(lead.id)}">Mark Contacted</button>
          <button class="btn orange small" type="button" data-action="move-northstar-forward" data-northstar-id="${escapeHtml(lead.id)}">Move Forward</button>
        </div>
      </article>
    `).join("") || `<article class="lead-card"><p class="muted">No NorthStar leads yet.</p></article>`;
  }

  const roadRescueTarget = document.querySelector("#adminRoadRescuePipeline");
  if (roadRescueTarget) {
    roadRescueTarget.innerHTML = (state.roadRescueRequests || []).map((request) => `
      <article class="lead-card">
        <div>
          <span class="split-label">${escapeHtml(request.status)} · ${escapeHtml(request.serviceRequested || "Road help")}</span>
          <h3>${escapeHtml(request.name)}</h3>
          <p>${escapeHtml(roadRescueIssueSummary(request))} · ${escapeHtml(request.location || "Location pending")} · ${escapeHtml(roadRescueVehicleText(request))}</p>
        </div>
        <label>Status
          <select data-road-rescue-status="${escapeHtml(request.id)}">
            ${roadRescueStatuses.map((status) => `<option ${status === request.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>Notes
          <textarea data-road-rescue-notes="${escapeHtml(request.id)}" rows="2" placeholder="Provider, safety, location, or documentation notes">${escapeHtml(request.notes || "")}</textarea>
        </label>
        <div class="lead-actions">
          ${contactLinks(request.phone, request.email, roadRescueCustomerText(request))}
          <button class="btn ghost small" type="button" data-action="copy-road-rescue-request" data-road-rescue-id="${escapeHtml(request.id)}">Copy Request</button>
          <button class="btn blue small" type="button" data-action="mark-road-rescue-contacted" data-road-rescue-id="${escapeHtml(request.id)}">Mark Contacted</button>
          <button class="btn orange small" type="button" data-action="move-road-rescue-forward" data-road-rescue-id="${escapeHtml(request.id)}">Provider Notified</button>
        </div>
      </article>
    `).join("") || `<article class="lead-card"><p class="muted">No Road Rescue requests yet.</p></article>`;
  }

  document.querySelector("#adminReferralPipeline").innerHTML = state.referrals.map((lead) => `
    <article class="lead-card">
      <div>
        <span class="split-label">${escapeHtml(lead.priority)} · ${escapeHtml(lead.status)}</span>
        <h3>${escapeHtml(lead.name)}</h3>
        <p>${escapeHtml(lead.type)} · ${escapeHtml(lead.phone)}</p>
      </div>
      <label>Status
        <select data-referral-status="${escapeHtml(lead.id)}">
          ${referralStatuses.map((status) => `<option ${status === lead.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>Notes
        <textarea data-referral-notes="${escapeHtml(lead.id)}" rows="2" placeholder="Follow-up notes">${escapeHtml(lead.note || "")}</textarea>
      </label>
      <div class="lead-actions">
        ${contactLinks(lead.phone, lead.email, referralTemplate(lead))}
        <button class="btn ghost small" type="button" data-action="copy-referral-direct" data-referral-id="${escapeHtml(lead.id)}">Copy Text</button>
        <button class="btn blue small" type="button" data-action="mark-referral-contacted" data-referral-id="${escapeHtml(lead.id)}">Mark Contacted</button>
      </div>
    </article>
  `).join("");

  document.querySelector("#adminHomebuildingPipeline").innerHTML = (state.homebuildingLeads || []).map((lead) => `
    <article class="lead-card">
      <div>
        <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.routingLane || "Homebuilding Review")}</span>
        <h3>${escapeHtml(lead.name)}</h3>
        <p>${escapeHtml(lead.type)} · ${escapeHtml(lead.location)} · score ${escapeHtml(lead.leadScore ?? "N/A")} · Forge pre-screens; partner review requires consent and approval</p>
      </div>
      <label>Status
        <select data-homebuilding-status="${escapeHtml(lead.id)}">
          ${homebuildingStatuses.map((status) => `<option ${status === lead.status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </label>
      <label>Notes
        <textarea data-homebuilding-notes="${escapeHtml(lead.id)}" rows="2" placeholder="Follow-up notes">${escapeHtml(lead.notes || "")}</textarea>
      </label>
      <div class="lead-actions">
        ${contactLinks(lead.phone, lead.email, homebuildingLeadText(lead))}
        ${canSendHomebuildingToSeneca(lead) && lead.status !== "Sent to Seneca" ? `<button class="btn orange small" type="button" data-action="send-homebuilding-seneca" data-homebuilding-id="${escapeHtml(lead.id)}">Send to Seneca Review</button>` : ""}
        <button class="btn ghost small" type="button" data-action="copy-homebuilding-lead" data-homebuilding-id="${escapeHtml(lead.id)}">Copy Text</button>
        <button class="btn blue small" type="button" data-action="mark-homebuilding-contacted" data-homebuilding-id="${escapeHtml(lead.id)}">Needs More Info</button>
      </div>
    </article>
  `).join("") || `<article class="lead-card"><p class="muted">No homebuilding leads yet.</p></article>`;

  const adminProjectsPipeline = document.querySelector("#adminProjectsPipeline");
  if (adminProjectsPipeline) adminProjectsPipeline.innerHTML = projectLeadCards(state.projectLeads || []);

  const adminBuildingPipeline = document.querySelector("#adminBuildingLeadsPipeline");
  if (adminBuildingPipeline) adminBuildingPipeline.innerHTML = buildingLeadCards(state.buildingLeads || []);
}

function filteredFlexLeads() {
  const status = document.querySelector("#flexStatusFilter")?.value || "All Statuses";
  const industry = normalizeLookup(document.querySelector("#flexIndustryFilter")?.value || "");
  const city = normalizeLookup(document.querySelector("#flexCityFilter")?.value || "");
  const leadState = normalizeLookup(document.querySelector("#flexStateFilter")?.value || "");
  const minScore = Number(document.querySelector("#flexScoreFilter")?.value || 0);
  return (state.flexLeads || []).filter((lead) => {
    const statusOk = status === "All Statuses" || lead.status === status;
    const industryOk = !industry || normalizeLookup(lead.industry).includes(industry);
    const cityOk = !city || normalizeLookup(lead.city).includes(city);
    const stateOk = !leadState || normalizeLookup(lead.state).includes(leadState);
    const scoreOk = Number(lead.lead_score || 0) >= minScore;
    return statusOk && industryOk && cityOk && stateOk && scoreOk;
  });
}

function renderFlexLeadsAdmin() {
  const table = document.querySelector("#adminFlexLeadsTable");
  if (!table) return;
  const leads = filteredFlexLeads();
  if (!leads.length) {
    table.innerHTML = "<tbody><tr><td>No Flex leads match these filters.</td></tr></tbody>";
    return;
  }
  table.innerHTML = `
    <thead>
      <tr>
        <th>Lead</th>
        <th>Need</th>
        <th>Score</th>
        <th>Status</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      ${leads.map((lead) => `
        <tr>
          <td>
            <strong>${escapeHtml(lead.business_name)}</strong><br />
            <span>${escapeHtml(lead.owner_name)} · ${escapeHtml(lead.email)}</span><br />
            <span>${escapeHtml(lead.city || "City pending")}${lead.state ? `, ${escapeHtml(lead.state)}` : ""} · ${escapeHtml(lead.industry)}</span>
          </td>
          <td>
            <span>${escapeHtml(lead.primary_need || "Need pending")}</span><br />
            <small>${escapeHtml(lead.monthly_spend_range || "Spend pending")} · ${escapeHtml(lead.years_in_business || "Years pending")} · ${escapeHtml(lead.employee_count || "Team pending")}</small>
          </td>
          <td><strong>${lead.lead_score}</strong></td>
          <td>
            <span class="flex-status ${escapeHtml(lead.status)}">${escapeHtml(flexStatusLabel(lead.status))}</span>
            <select data-flex-status="${escapeHtml(lead.id)}">
              ${flexLeadStatuses.map((status) => `<option value="${escapeHtml(status)}" ${status === lead.status ? "selected" : ""}>${escapeHtml(flexStatusLabel(status))}</option>`).join("")}
            </select>
          </td>
          <td><textarea data-flex-notes="${escapeHtml(lead.id)}" rows="3" placeholder="Outreach, consent, Flex handoff, or upsell notes">${escapeHtml(lead.notes || "")}</textarea></td>
          <td>
            <div class="lead-actions">
              ${contactLinks(lead.phone, lead.email, flexOutreachText(lead))}
              <button class="btn ghost small" type="button" data-action="copy-flex-outreach" data-flex-id="${escapeHtml(lead.id)}">Copy outreach message</button>
              <button class="btn blue small" type="button" data-action="open-flex-referral" data-flex-lead-id="${escapeHtml(lead.id)}">Open Flex Referral Link</button>
              <button class="btn ghost small" type="button" data-action="create-flex-upsell-task" data-flex-id="${escapeHtml(lead.id)}">Create Forge Upsell Task</button>
            </div>
          </td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function contactLinks(phone, email, message) {
  const cleanPhone = String(phone || "").replace(/[^\d+]/g, "");
  const sms = cleanPhone ? `<a class="btn ghost small" href="sms:${cleanPhone}?&body=${encodeURIComponent(message)}">Text</a>` : "";
  const call = cleanPhone ? `<a class="btn ghost small" href="tel:${cleanPhone}">Call</a>` : "";
  const mail = email ? `<a class="btn ghost small" href="mailto:${encodeURIComponent(email)}?subject=Forge follow-up&body=${encodeURIComponent(message)}">Email</a>` : "";
  return `${call}${sms}${mail}`;
}

function renderAdminExtras() {
  const latestJob = state.jobs[0];
  const latestWorker = state.workers[0];
  document.querySelector("#jobTemplatePreview").textContent = jobTemplate(latestJob);
  document.querySelector("#workerTemplatePreview").textContent = workerTemplate(latestWorker);
  document.querySelector("#activityLog").innerHTML = state.activity.slice(0, 14).map((item) => `
    <article>
      <span>${escapeHtml(item.at)}</span>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `).join("") || `<article><span>Now</span><p>No activity yet.</p></article>`;
}

function renderLaunchGoals() {
  const goals = [
    ["Job leads", state.jobs.length, 10],
    ["Workers", state.workers.length, 20],
    ["NorthStar", (state.northstarLeads || []).length, 10],
    ["Capital Desk", (state.flexLeads || []).length, 10],
    ["Road Rescue", (state.roadRescueRequests || []).length, 10],
    ["Homebuilding", (state.homebuildingLeads || []).length, 10],
    ["Projects", (state.projectLeads || []).length, 10],
    ["Referrals", state.referrals.length, 25]
  ];
  const target = document.querySelector("#launchGoals");
  if (!target) return;
  target.innerHTML = goals.map(([label, value, goal]) => {
    const pct = Math.min(100, Math.round((value / goal) * 100));
    return `
      <article>
        <strong>${value}/${goal}</strong>
        <span>${label}</span>
        <div class="mini-meter"><i style="width:${pct}%"></i></div>
      </article>
    `;
  }).join("");
}

function foundingSegments() {
  return [
    ["Job posters", state.jobs.length, 60, "People with real work to post.", "post", "Post Job"],
    ["Workers", state.workers.length, 60, "Local pros ready to bid or take jobs.", "signup", "Join Worker List"],
    ["Homebuilding", (state.homebuildingLeads || []).length, 25, "People planning builds, ADUs, remodels, and contractor partnerships.", "homebuilding", "Homebuilding"],
    ["Projects", (state.projectLeads || []).length, 25, "Home projects and major OR/WA project opportunities ready for routing.", "projects", "Projects"],
    ["NorthStar", (state.northstarLeads || []).length, 20, "Blue-collar businesses that need marketing, CRM, lead follow-up, job tracking, or operations help.", "northstar", "NorthStar"],
    ["Capital Desk", (state.flexLeads || []).length, 20, "Business owners who need breathing room, cash-flow tools, cards, bill pay, or Flex referral follow-up.", "capital", "Capital Desk"],
    ["Road Rescue", (state.roadRescueRequests || []).length, 20, "Neighbors who need pothole, roadside, tire, tow, wheel, or mechanic help.", "road-rescue", "Road Rescue"],
    ["Career leads", (state.opportunityLeads || []).length, 25, "People applying to trade schools, unions, apprenticeships, and blue-collar AI jobs.", "opportunities", "Career Path"],
    ["Referrals", state.referrals.length, 30, "Introductions to job posters, workers, career applicants, and local businesses.", "capture", "Capture Referral"]
  ];
}

function renderFounding200() {
  const segments = foundingSegments();
  const total = segments.reduce((sum, [, value]) => sum + value, 0);
  const goal = segments.reduce((sum, [, , segmentGoal]) => sum + segmentGoal, 0);
  const cards = [
    ["First 200", total, goal, "Total early users and warm leads in Forge.", "perspective", "Demo Links"],
    ...segments
  ];
  ["#homeFoundingGrid", "#adminFoundingGrid"].forEach((selector) => {
    const target = document.querySelector(selector);
    if (!target) return;
    target.innerHTML = cards.map(([label, value, cardGoal, body, screen, action]) => {
      const pct = Math.min(100, Math.round((value / cardGoal) * 100));
      return `
        <article>
          <div>
            <span>${escapeHtml(label)}</span>
            <strong>${value}/${cardGoal}</strong>
            <p>${escapeHtml(body)}</p>
          </div>
          <div class="founding-meter"><i style="width: ${pct}%"></i></div>
          <button class="btn ghost small" type="button" data-nav="${screen}">${escapeHtml(action)}</button>
        </article>
      `;
    }).join("");
  });
}

function renderViewMode() {
  document.body.classList.toggle("public-mode", Boolean(state.settings.publicMode));
  const fab = document.querySelector("#operatorFab");
  if (fab) fab.textContent = state.settings.publicMode ? "Operator View" : "Public View";
}

function renderFollowUpQueue() {
  const typeFilter = document.querySelector("#queueTypeFilter")?.value || "All Lead Types";
  const statusFilter = document.querySelector("#queueStatusFilter")?.value || "Needs Follow-Up";
  const rows = filteredFollowUpRows(typeFilter, statusFilter);
  renderFollowUpProgress();
  renderTodayFollowUp(rows.slice(0, 3));

  const target = document.querySelector("#followUpQueue");
  if (!target) return;
  target.innerHTML = rows.map((row) => `
    <article class="queue-card">
      <div>
        <span class="split-label">${escapeHtml(row.kind)} · ${escapeHtml(row.priority)}</span>
        <h3>${escapeHtml(row.person)}</h3>
        <p>${escapeHtml(row.title)} · ${escapeHtml(row.status)}</p>
      </div>
      <div class="queue-rank">
        <strong>${row.score}</strong>
        <span>${escapeHtml(row.reason)}</span>
      </div>
      <div class="queue-next">
        <span>Next message</span>
        <p>${escapeHtml(row.message)}</p>
      </div>
      <div class="lead-actions">
        ${contactLinks(row.phone, row.email, row.message)}
        <button class="btn ghost small" type="button" data-action="${row.copyAction}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">Copy</button>
        <button class="btn blue small" type="button" data-action="${row.action}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">Contacted</button>
        <button class="btn orange small" type="button" data-action="${row.forwardAction}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">${escapeHtml(row.forwardLabel)}</button>
      </div>
    </article>
  `).join("") || `<article class="queue-card"><div><h3>No leads match this filter.</h3><p>Switch to All Statuses or capture a new lead.</p></div></article>`;
}

function renderFollowUpProgress() {
  const target = document.querySelector("#followUpProgress");
  if (!target) return;
  const total = totalLeadCount();
  const needsFollowUp = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  const contacted = state.jobs.filter((job) => job.status === "Contacted").length
    + state.workers.filter((worker) => worker.status === "Contacted").length
    + state.referrals.filter((lead) => lead.status === "Contacted").length
    + (state.northstarLeads || []).filter((lead) => ["Contacted", "Scoping", "Proposal Needed", "Proposal Sent"].includes(lead.status)).length
    + (state.roadRescueRequests || []).filter((request) => ["Contacted", "Provider Notified", "Matched"].includes(request.status)).length
    + (state.opportunityLeads || []).filter((lead) => lead.status === "Contacted").length
    + (state.projectLeads || []).filter((lead) => ["NEEDS_MORE_INFO", "FORGE_QUALIFIED", "SENT_TO_SENECA"].includes(lead.status)).length;
  const moving = state.jobs.filter((job) => ["Matching", "In Progress", "Completed"].includes(job.status)).length
    + state.workers.filter((worker) => worker.status === "Ready").length
    + state.referrals.filter((lead) => lead.status === "Converted").length
    + (state.northstarLeads || []).filter((lead) => ["Proposal Sent", "Active"].includes(lead.status)).length
    + (state.roadRescueRequests || []).filter((request) => ["Provider Notified", "Matched", "Closed"].includes(request.status)).length
    + (state.opportunityLeads || []).filter((lead) => ["Packet Started", "Applied"].includes(lead.status)).length
    + (state.projectLeads || []).filter((lead) => ["PARTNER_REVIEWING", "ACCEPTED_BY_PARTNER", "PROPOSAL_REQUESTED", "SITE_VISIT_SCHEDULED", "CONTRACT_PENDING", "WON", "ROUTED_TO_FORGE_PRO"].includes(lead.status)).length;
  const rows = [
    ["Need touch", needsFollowUp, "People still waiting for first follow-up."],
    ["Contacted", contacted, "People already reached by call, text, or email."],
    ["Moving", moving, "Leads that are ready, matching, in progress, or converted."],
    ["First 200", `${total}/200`, "Total early network progress."]
  ];
  target.innerHTML = rows.map(([label, value, body]) => `
    <article>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(body)}</p>
    </article>
  `).join("");
}

function filteredFollowUpRows(typeFilter = "All Lead Types", statusFilter = "Needs Follow-Up") {
  return [
    ...state.jobs.map((job) => ({
      id: job.id,
      kind: "Jobs",
      title: job.title,
      person: job.customer,
      phone: job.phone,
      email: job.email,
      status: job.status,
      priority: job.status === "New" ? "Hot" : "Warm",
      message: jobTemplate(job),
      action: "mark-job-contacted",
      forwardAction: "move-job-forward",
      forwardLabel: job.status === "Matching" ? "Moving" : "Move Forward",
      copyAction: "copy-job-direct",
      dataName: "jobId"
    })),
    ...state.workers.map((worker) => ({
      id: worker.email,
      kind: "Workers",
      title: worker.trade,
      person: worker.name,
      phone: worker.phone,
      email: worker.email,
      status: worker.status,
      priority: worker.status === "New" ? "Hot" : "Warm",
      message: workerTemplate(worker),
      action: "mark-worker-contacted",
      forwardAction: "move-worker-forward",
      forwardLabel: worker.status === "Ready" ? "Ready" : "Move Forward",
      copyAction: "copy-worker-direct",
      dataName: "workerEmail"
    })),
    ...state.referrals.map((lead) => ({
      id: lead.id,
      kind: "Referrals",
      title: lead.type,
      person: lead.name,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: lead.priority,
      message: referralTemplate(lead),
      action: "mark-referral-contacted",
      forwardAction: "move-referral-forward",
      forwardLabel: lead.status === "Converted" ? "Converted" : "Move Forward",
      copyAction: "copy-referral-direct",
      dataName: "referralId"
    })),
    ...(state.homebuildingLeads || []).map((lead) => ({
      id: lead.id,
      kind: "Homebuilding",
      title: lead.type,
      person: lead.name,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: lead.status === "New" ? "Hot" : "Warm",
      message: homebuildingLeadText(lead),
      action: "mark-homebuilding-contacted",
      forwardAction: "move-homebuilding-forward",
      forwardLabel: lead.status === "Site Visit Scheduled" ? "Site Visit Scheduled" : "Move Forward",
      copyAction: "copy-homebuilding-lead",
      dataName: "homebuildingId"
    })),
    ...(state.buildingLeads || []).map((lead) => ({
      id: lead.id,
      kind: "Building",
      title: `${projectOptionLabel(buildingLeadTypeOptions, lead.leadType)} · ${lead.route}`,
      person: lead.ownerName || lead.businessName || "Building contact",
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: ["NEW_BUILDING_LEAD", "HOME_PROJECT_REVIEW", "MAJOR_PROJECT_REVIEW", "FLEX_REVIEW_ELIGIBLE"].includes(lead.status) ? "Hot" : "Warm",
      message: buildingLeadText(lead),
      action: "mark-building-needs-info",
      forwardAction: "qualify-building-lead",
      forwardLabel: lead.status === "FORGE_QUALIFIED" ? "Qualified" : "Forge Qualify",
      copyAction: "copy-building-lead",
      dataName: "buildingId"
    })),
    ...(state.projectLeads || []).map((lead) => ({
      id: lead.id,
      kind: "Projects",
      title: `${projectOptionLabel(projectTypeOptions, lead.projectType)} · ${lead.route}`,
      person: lead.contactName,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: ["NEW", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(lead.status) ? "Hot" : "Warm",
      message: projectLeadText(lead),
      action: "mark-project-needs-info",
      forwardAction: "qualify-project-lead",
      forwardLabel: lead.status === "FORGE_QUALIFIED" ? "Qualified" : "Forge Qualify",
      copyAction: "copy-project-lead",
      dataName: "projectId"
    })),
    ...(state.northstarLeads || []).map((lead) => ({
      id: lead.id,
      kind: "NorthStar",
      title: `${lead.businessName} · ${(lead.servicesNeeded || []).join(", ") || "Business growth help"}`,
      person: lead.name,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: ["New", "Proposal Needed"].includes(lead.status) ? "Hot" : "Warm",
      message: northstarLeadText(lead),
      action: "mark-northstar-contacted",
      forwardAction: "move-northstar-forward",
      forwardLabel: lead.status === "Active" ? "Active" : "Move Forward",
      copyAction: "copy-northstar-lead",
      dataName: "northstarId"
    })),
    ...(state.roadRescueRequests || []).map((request) => ({
      id: request.id,
      kind: "Road Rescue",
      title: `${roadRescueIssueSummary(request)} · ${request.serviceRequested || "Road help"}`,
      person: request.name,
      phone: request.phone,
      email: request.email,
      status: request.status,
      priority: request.emergency === "Yes" || request.vehicleSafe === "No" ? "Hot" : "Warm",
      message: roadRescueCustomerText(request),
      action: "mark-road-rescue-contacted",
      forwardAction: "move-road-rescue-forward",
      forwardLabel: request.status === "Provider Notified" ? "Notified" : "Provider Notified",
      copyAction: "copy-road-rescue-request",
      dataName: "roadRescueId"
    })),
    ...(state.flexLeads || []).map((lead) => ({
      id: lead.id,
      kind: "Capital Desk",
      title: `${lead.business_name} · ${lead.primary_need || "Flex referral"}`,
      person: lead.owner_name,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: ["new", "qualified"].includes(lead.status) || Number(lead.lead_score || 0) >= 40 ? "Hot" : "Warm",
      message: flexOutreachText(lead),
      action: "mark-flex-contacted",
      forwardAction: "move-flex-forward",
      forwardLabel: lead.status === "flex_link_sent" ? "Link Sent" : "Move Forward",
      copyAction: "copy-flex-outreach",
      dataName: "flexId"
    })),
    ...(state.opportunityLeads || []).map((lead) => ({
      id: lead.id,
      kind: "Careers",
      title: lead.goal,
      person: lead.name,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: lead.status === "New" ? "Hot" : "Warm",
      message: opportunityLeadText(lead),
      action: "mark-opportunity-contacted",
      forwardAction: "move-opportunity-forward",
      forwardLabel: lead.status === "Applied" ? "Applied" : "Move Forward",
      copyAction: "copy-opportunity-lead",
      dataName: "opportunityId"
    }))
  ].filter((row) => {
    const typeOk = typeFilter === "All Lead Types" || row.kind === typeFilter;
    const statusOk = statusFilter === "All Statuses"
      || (statusFilter === "Needs Follow-Up" && ["New", "Pending", "Contacted", "Scoping", "Proposal Needed", "new", "qualified", "New Project Lead", "Needs More Info", "NEW", "NEEDS_MORE_INFO", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(row.status))
      || row.status === statusFilter
      || row.priority === statusFilter;
    return typeOk && statusOk;
  }).map((row) => ({
    ...row,
    score: followUpScore(row),
    reason: followUpReason(row)
  })).sort((left, right) => right.score - left.score);
}

function renderTodayFollowUp(rows) {
  const target = document.querySelector("#todayFollowUp");
  if (!target) return;
  target.innerHTML = `
    <div>
      <span class="split-label">Today’s follow-up</span>
      <h3>Contact these first</h3>
    </div>
    <div class="today-follow-up-grid">
      ${rows.map((row, index) => `
        <article>
          <strong>${index + 1}</strong>
          <div>
            <span>${escapeHtml(row.kind)} · ${row.score}</span>
            <h4>${escapeHtml(row.person)}</h4>
            <p>${escapeHtml(row.reason)}</p>
          </div>
          <button class="btn ghost small" type="button" data-action="${row.copyAction}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">Copy</button>
          <button class="btn orange small" type="button" data-action="${row.forwardAction}" data-${kebab(row.dataName)}="${escapeHtml(row.id)}">${escapeHtml(row.forwardLabel)}</button>
        </article>
      `).join("") || `<article><strong>0</strong><div><h4>No follow-ups</h4><p>Capture or import leads to build today’s list.</p></div></article>`}
    </div>
  `;
}

function followUpScore(row) {
  const priorityScore = row.priority === "Hot" ? 40 : row.priority === "Warm" ? 24 : 12;
  const statusScores = {
    New: 30,
    NEW: 30,
    new: 30,
    Pending: 26,
    "Proposal Needed": 28,
    Scoping: 24,
    "Proposal Sent": 18,
    MAJOR_PROJECT_REVIEW: 28,
    FORGE_QUALIFIED: 26,
    qualified: 26,
    NEEDS_MORE_INFO: 24,
    Matching: 20,
    Ready: 18,
    "Packet Started": 18,
    "Forge Qualified": 18,
    flex_link_sent: 18,
    "Partner Reviewing": 16,
    Contacted: 8,
    contacted: 8
  };
  const statusScore = statusScores[row.status] || 4;
  const kindScore = row.kind === "Projects" ? 16 : row.kind === "Building" ? 16 : row.kind === "Jobs" ? 15 : row.kind === "Homebuilding" ? 14 : row.kind === "Capital Desk" ? 14 : row.kind === "NorthStar" ? 13 : row.kind === "Workers" ? 12 : row.kind === "Careers" ? 11 : 10;
  const contactScore = (row.phone ? 6 : 0) + (row.email ? 3 : 0);
  return priorityScore + statusScore + kindScore + contactScore;
}

function followUpReason(row) {
  const first = row.priority === "Hot" ? "Hot lead" : `${row.priority} lead`;
  const second = ["New", "Pending", "Scoping", "Proposal Needed", "new", "qualified", "New Project Lead", "Needs More Info", "NEW", "NEEDS_MORE_INFO", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(row.status) ? "needs first touch" : `${projectStatuses.includes(row.status) ? projectStatusLabel(row.status).toLowerCase() : row.status.toLowerCase()} status`;
  const third = row.kind === "Jobs" ? "creates demand"
    : row.kind === "Projects" ? "may route to Forge Pros, Major Projects Review, or partner review"
    : row.kind === "Homebuilding" ? "opens a build or contractor path"
      : row.kind === "Capital Desk" ? "needs consent-safe Flex referral follow-up"
      : row.kind === "Building" ? "needs Building route, consent, or partner-eligibility review"
      : row.kind === "NorthStar" ? "opens marketing and operations revenue"
      : row.kind === "Workers" ? "adds supply"
        : row.kind === "Careers" ? "builds the training and AI jobs lane"
          : "can introduce more people";
  return `${first} · ${second} · ${third}`;
}

function renderReports() {
  const stats = document.querySelector("#reportStats");
  const actions = document.querySelector("#reportActions");
  const health = document.querySelector("#reportHealth");
  if (!stats || !actions || !health) return;
  const openJobs = state.jobs.filter((job) => !["Completed"].includes(job.status));
  const readyWorkers = state.workers.filter((worker) => ["Ready", "Contacted"].includes(worker.status));
  const hotReferrals = state.referrals.filter((lead) => lead.priority === "Hot" || lead.status === "New");
  const activeNorthStar = (state.northstarLeads || []).filter((lead) => !["Closed"].includes(lead.status));
  const activeFlex = (state.flexLeads || []).filter((lead) => !["closed_lost", "commission_paid"].includes(lead.status));
  const activeHomebuilding = (state.homebuildingLeads || []).filter((lead) => !["Closed"].includes(lead.status));
  const activeProjects = (state.projectLeads || []).filter((lead) => !["WON", "LOST", "NOT_A_FIT"].includes(lead.status));
  const chosenBids = state.bids.filter((bid) => bid.chosen);

  stats.innerHTML = statCards([
    ["Job Leads", state.jobs.length],
    ["Workers", state.workers.length],
    ["NorthStar", (state.northstarLeads || []).length],
    ["Capital Desk", (state.flexLeads || []).length],
    ["Homebuilding", (state.homebuildingLeads || []).length],
    ["Projects", (state.projectLeads || []).length],
    ["Bids", state.bids.length],
    ["Messages", state.messages.length]
  ]);

  actions.innerHTML = [
    ...openJobs.slice(0, 3).map((job) => reportItem(job.customer, `${job.title} needs ${job.status === "New" ? "matching" : "follow-up"}.`)),
    ...activeNorthStar.slice(0, 2).map((lead) => reportItem(lead.businessName, `${lead.name} needs NorthStar ${lead.status.toLowerCase()} follow-up for ${lead.trade}.`)),
    ...activeFlex.slice(0, 2).map((lead) => reportItem(lead.business_name, `${flexStatusLabel(lead.status)} Capital Desk lead with score ${lead.lead_score}.`)),
    ...activeProjects.slice(0, 2).map((lead) => reportItem(lead.contactName, `${lead.projectTitle} needs ${projectStatusLabel(lead.status)} review in Projects.`)),
    ...activeHomebuilding.slice(0, 2).map((lead) => reportItem(lead.name, `${lead.type} needs project review and partner routing.`)),
    ...readyWorkers.slice(0, 2).map((worker) => reportItem(worker.name, `${worker.trade} is ${worker.status.toLowerCase()} for jobs.`)),
    ...hotReferrals.slice(0, 2).map((lead) => reportItem(lead.name, `${lead.priority} referral: ${lead.type}.`))
  ].join("") || reportItem("No urgent action", "The current queue is clear.");

  health.innerHTML = [
    reportItem("Supply", `${state.workers.length} worker lead${state.workers.length === 1 ? "" : "s"} against ${state.jobs.length} job lead${state.jobs.length === 1 ? "" : "s"}.`),
    reportItem("Demand", `${openJobs.length} open job${openJobs.length === 1 ? "" : "s"} still need movement.`),
    reportItem("NorthStar", `${activeNorthStar.length} marketing or operations lead${activeNorthStar.length === 1 ? "" : "s"} still need scoping, proposal, or delivery movement.`),
    reportItem("Capital Desk", `${activeFlex.length} Flex referral lead${activeFlex.length === 1 ? "" : "s"} still need consent-safe follow-up.`),
    reportItem("Projects", `${activeProjects.length} project opportunit${activeProjects.length === 1 ? "y" : "ies"} still need routing or review.`),
    reportItem("Homebuilding", `${activeHomebuilding.length} build or contractor project${activeHomebuilding.length === 1 ? "" : "s"} still need review.`),
    reportItem("Trust", `${chosenBids.length} chosen bid${chosenBids.length === 1 ? "" : "s"} and ${state.bids.length} total bid${state.bids.length === 1 ? "" : "s"}.`)
  ].join("");
}

function reportItem(title, body) {
  return `
    <article>
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(body)}</p>
    </article>
  `;
}

function statCards(rows) {
  return rows.map(([label, value]) => `<article class="dashboard-card"><strong>${value}</strong><span>${label}</span></article>`).join("");
}

function renderTable(selector, rows) {
  const table = document.querySelector(selector);
  if (!rows.length) {
    table.innerHTML = "<tbody><tr><td>No rows yet.</td></tr></tbody>";
    return;
  }
  const headers = Object.keys(rows[0]);
  table.innerHTML = `
    <thead><tr>${headers.map((header) => `<th>${humanize(header)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${headers.map((header) => `<td class="${header === "status" ? "status" : ""}">${escapeHtml(row[header])}</td>`).join("")}</tr>`).join("")}</tbody>
  `;
}

function postJobFromForm() {
  const title = document.querySelector("#jobTitle").value.trim();
  const selectedCategory = document.querySelector("#jobCategory").value;
  const vertical = serviceVerticalForCategory(selectedCategory);
  const serviceDetails = vertical ? collectServiceDetails("data-service-job-field") : {};
  const photoSummary = selectedFileSummary("#jobPhotos", "photo");
  const job = {
    id: `${Date.now()}`,
    title,
    category: categoryValue(selectedCategory),
    categoryLabel: categoryLabel(selectedCategory),
    serviceVertical: vertical?.id || "",
    serviceVerticalTitle: vertical?.title || "",
    serviceDetails,
    servicePhotoSummary: photoSummary,
    location: document.querySelector("#jobLocation").value.trim(),
    urgency: document.querySelector("#jobUrgency").value,
    budget: document.querySelector("#jobBudget").value,
    bids: 0,
    status: vertical ? "Open for bids" : "New",
    posted: "Today",
    description: document.querySelector("#jobDescription").value.trim() || "New Forge job lead ready for bids.",
    customer: document.querySelector("#customerName").value.trim(),
    phone: document.querySelector("#customerPhone").value.trim(),
    email: document.querySelector("#customerEmail").value.trim(),
    notes: vertical ? `New ${vertical.title} lead from Forge MVP.` : "New lead from Forge MVP."
  };
  state.jobs.unshift(job);
  state.activeJobId = job.id;
  addActivity(`New job lead posted: ${job.title} by ${job.customer}.`);
  state.lastConfirmation = {
    type: "job",
    title: "Your job is posted.",
    body: "Forge saved the job lead and added it to the available jobs and admin dashboard.",
    details: [
      `${job.title} in ${job.location}`,
      `${job.budget} budget range`,
      `${job.urgency} timeline`,
      vertical ? `${vertical.title} · ${photoSummary}` : photoSummary
    ],
    nextSteps: [
      "Forge saves this job to the local Admin queue",
      "Workers can review the job and submit bids",
      "Use Check Job Status to see bids and messages"
    ],
    primary: { label: "View Job Detail", jobId: job.id },
    secondary: { label: "Open Admin Leads", screen: "admin" }
  };
  saveState();
  sendLead("job", job);
  showToast("Job submitted. It is now live in Available Jobs and Admin.");
  document.querySelector("#postJobForm").reset();
  postStep = 1;
  navigate("confirm");
}

function submitProjectLead() {
  const lead = normalizeProjectLead(projectDraftFromForm());
  state.projectLeads.unshift(lead);
  addActivity(`Project lead saved: ${lead.projectTitle} in ${lead.city}, ${lead.state}. Route: ${lead.route}.`);
  state.lastConfirmation = {
    type: "project",
    title: "Project opportunity saved.",
    body: `Forge saved this project and routed it to ${lead.route}.`,
    details: [
      `${projectOptionLabel(projectTypeOptions, lead.projectType)} · ${lead.city}, ${lead.state}`,
      `${projectOptionLabel(budgetRangeOptions, lead.budgetRange)} · ${lead.timeline}`,
      `${projectOptionLabel(projectStageOptions, lead.projectStage)} · ${projectStatusLabel(lead.status)}`,
      lead.consentToShareWithPartner ? "Partner sharing consent captured" : "No third-party sharing consent yet"
    ],
    nextSteps: [
      lead.status === "ROUTED_TO_FORGE_PRO" ? "Route this smaller home project to normal Forge Pros first" : "Review scope in Major Projects Admin queue",
      "Verify licensing and insurance before any contractor accepts construction work",
      "Get user consent and written partner agreement before any third-party routing"
    ],
    primary: { label: "Open Projects Admin", screen: "admin-projects" },
    secondary: { label: "Back to Projects", screen: "projects" }
  };
  saveState();
  sendLead("project", lead);
  document.querySelector("#projectIntakeForm").reset();
  setFieldValue("#projectState", "OR");
  showToast("Project opportunity saved.");
  navigate("confirm");
}

function submitBuildingLead() {
  const lead = normalizeBuildingLead(buildingDraftFromForm());
  state.buildingLeads.unshift(lead);
  addActivity(`Building lead saved: ${lead.projectTitle} in ${lead.city || "city pending"}, ${lead.state}. Route: ${lead.route}.`);
  state.lastConfirmation = {
    type: "building",
    title: "Building review saved.",
    body: `Forge saved this Building request and routed it to ${lead.route}.`,
    details: [
      `${projectOptionLabel(buildingLeadTypeOptions, lead.leadType)} · ${projectOptionLabel(buildingProjectTypeOptions, lead.projectType)}`,
      `${lead.city || "City pending"}, ${lead.state} · ${projectOptionLabel(buildingBudgetRangeOptions, lead.budgetRange)}`,
      `${buildingStatusLabel(lead.status)} · ${lead.partnerEligibility}`,
      lead.consentToShareWithApprovedPartners ? "Approved-partner sharing consent captured" : "No third-party sharing consent yet"
    ],
    nextSteps: [
      lead.status === "HOME_PROJECT_REVIEW" ? "Review as a smaller home project and route to verified local pros when appropriate" : lead.status === "FLEX_REVIEW_ELIGIBLE" ? "Review as a contractor finance request inside Forge before any finance partner routing" : "Review as a Major Projects Review candidate",
      "Do not share customer data with Seneca, Flex, or any partner unless consent and approval flags are true",
      "Use Building Leads admin to qualify, request consent, or mark partner-review eligibility"
    ],
    primary: { label: "Open Building Admin", screen: "admin-building-leads" },
    secondary: { label: "Back to Building", screen: "building" }
  };
  saveState();
  sendLead("building", lead);
  document.querySelector("#buildingLeadForm").reset();
  setFieldValue("#buildingState", "OR");
  showToast("Building review saved.");
  navigate("confirm");
}

function canMarkBuildingSenecaEligible(lead) {
  return ["MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(lead.status);
}

function canSendBuildingToSeneca(lead) {
  const partner = senecaPartner();
  return canMarkBuildingSenecaEligible(lead)
    && Boolean(lead.consentToShareWithApprovedPartners)
    && Boolean(partner?.approved)
    && Boolean(partner?.dataSharingApproved);
}

function canMarkBuildingFlexEligible(lead) {
  return lead.leadType === "CONTRACTOR_FINANCE" || Boolean(lead.financeNeed);
}

function canSendBuildingToFlex(lead) {
  const partner = flexPartner();
  return canMarkBuildingFlexEligible(lead)
    && Boolean(lead.consentToShareWithApprovedPartners)
    && Boolean(partner?.approved)
    && Boolean(partner?.dataSharingApproved);
}

function buildingPartnerReadinessText(lead) {
  if (lead.status === "SENT_TO_SENECA" || lead.status === "SENT_TO_FLEX") return "Lead was marked sent only after consent and partner approval checks passed.";
  if (lead.senecaEligible && !lead.consentToShareWithApprovedPartners) return "Seneca Review can only move past eligibility after customer consent is recorded.";
  if (lead.flexEligible && !lead.consentToShareWithApprovedPartners) return "Flex Review can only move past eligibility after customer consent is recorded.";
  if (lead.senecaEligible && !canSendBuildingToSeneca(lead)) return "Seneca is draft/admin-only or missing data-sharing approval. Admin may mark eligible, not send.";
  if (lead.flexEligible && !canSendBuildingToFlex(lead)) return "Flex is draft/admin-only or missing data-sharing approval. Admin may mark eligible, not send.";
  if (canSendBuildingToSeneca(lead) || canSendBuildingToFlex(lead)) return "Approved partner routing is available after final admin review.";
  return "Forge review stays inside Forge unless consent and partner approval gates pass.";
}

function selectedFileSummary(selector, noun = "file") {
  const count = document.querySelector(selector)?.files?.length || 0;
  return `${count} ${noun}${count === 1 ? "" : "s"} selected`;
}

function collectServiceDetails(attributeName) {
  return Array.from(document.querySelectorAll(`[${attributeName}]`)).reduce((details, field) => {
    const key = field.getAttribute(attributeName);
    if (!key) return details;
    if (field.type === "file") {
      details[key] = `${field.files?.length || 0} file${field.files?.length === 1 ? "" : "s"} selected`;
      return details;
    }
    details[key] = field.value?.trim?.() || field.value || "";
    return details;
  }, {});
}

function serviceDetailRows(details = {}, fields = []) {
  return fields
    .map((field) => [field.label, details[field.name]])
    .filter(([, value]) => String(value || "").trim());
}

function submitCreativeLead() {
  const projectType = fieldValue("#creativeProjectType");
  const desiredDate = fieldValue("#creativeDesiredDate");
  const shootLocation = fieldValue("#creativeShootLocation");
  const city = fieldValue("#creativeCity");
  const description = fieldValue("#creativeDescription");
  const shootStartTime = fieldValue("#creativeShootStartTime");
  const deliveryDeadline = fieldValue("#creativeDeliveryDeadline");
  const lead = {
    id: `${Date.now()}`,
    title: `${CREATIVE_CATEGORY_LABEL}: ${projectType}`,
    category: CREATIVE_CATEGORY_VALUE,
    categoryLabel: CREATIVE_CATEGORY_LABEL,
    categorySlug: CREATIVE_CATEGORY_SLUG,
    projectType,
    serviceType: projectType,
    desiredDate: desiredDate || "Date flexible",
    shootStartTime,
    estimatedDuration: fieldValue("#creativeDuration"),
    deliveryDeadline,
    shootLocation,
    city,
    location: shootLocation || city,
    urgency: desiredDate || "Flexible",
    budget: fieldValue("#creativeBudget"),
    mediaType: fieldValue("#creativeMediaType"),
    venueName: fieldValue("#creativeVenueName"),
    guestCount: fieldValue("#creativeGuestCount"),
    numberOfLocations: fieldValue("#creativeLocationCount"),
    indoorOutdoor: fieldValue("#creativeIndoorOutdoor"),
    stylePreference: fieldValue("#creativeStylePreference"),
    shotList: fieldValue("#creativeShotList"),
    secondShooterNeeded: fieldValue("#creativeSecondShooter"),
    droneRequested: fieldValue("#creativeDrone"),
    rawFootageRequested: fieldValue("#creativeRawFootage"),
    socialClipsRequested: fieldValue("#creativeSocialClips"),
    sameDayPreviewRequested: fieldValue("#creativeSameDayPreview"),
    bids: 0,
    status: "Submitted",
    creativeStatus: "submitted",
    posted: "Today",
    description,
    customer: fieldValue("#creativeName"),
    phone: fieldValue("#creativePhone"),
    email: fieldValue("#creativeEmail"),
    inspirationLink: fieldValue("#creativeInspirationLink"),
    inspirationUploads: selectedFileSummary("#creativeInspirationFiles"),
    consent: fieldChecked("#creativeConsent"),
    termsAccepted: fieldChecked("#creativeTerms"),
    privacyAcknowledged: fieldChecked("#creativePrivacy"),
    notes: "New photography_videography lead from Forge creative intake."
  };
  state.jobs.unshift(lead);
  state.activeJobId = lead.id;
  addActivity(`Creative lead saved: ${lead.customer} needs ${lead.projectType} in ${lead.location}.`);
  state.lastConfirmation = {
    type: "creative",
    title: "Creative request saved.",
    body: "Forge saved the photography and videography request for local provider matching.",
    details: [
      `${lead.customer} · ${lead.projectType}`,
      `${lead.location} · ${lead.desiredDate}${shootStartTime ? ` at ${shootStartTime}` : ""}`,
      `${lead.mediaType} · ${lead.budget} · ${deliveryDeadline || "delivery flexible"}`
    ],
    nextSteps: [
      "Forge saves this as a photography_videography job lead",
      "The operator can match the request with approved local creatives",
      "Customer contact info is used only for booking and provider matching"
    ],
    primary: { label: "View Job Detail", jobId: lead.id },
    secondary: { label: "Open Creative Page", screen: "creative" }
  };
  saveState();
  sendLead("job", lead);
  showToast("Creative request saved.");
  document.querySelector("#creativeLeadForm").reset();
  setFieldValue("#creativeCity", "Medford, OR");
  navigate("confirm");
}

function submitCreativeProvider() {
  const firstName = fieldValue("#creativeProviderFirstName");
  const lastName = fieldValue("#creativeProviderLastName");
  const businessName = fieldValue("#creativeProviderCompanyName");
  const name = [firstName, lastName].filter(Boolean).join(" ") || businessName || "Local Creative Provider";
  const serviceArea = fieldValue("#creativeProviderArea");
  const servicesOffered = fieldValue("#creativeProviderShoots");
  const yearsExperience = fieldValue("#creativeProviderExperience");
  const provider = {
    name,
    firstName,
    lastName,
    businessName,
    trade: CREATIVE_CATEGORY_LABEL,
    category: CREATIVE_CATEGORY_VALUE,
    providerCategory: CREATIVE_CATEGORY_VALUE,
    categorySlug: CREATIVE_CATEGORY_SLUG,
    phone: fieldValue("#creativeProviderPhone"),
    email: fieldValue("#creativeProviderEmail"),
    city: fieldValue("#creativeProviderCity"),
    experience: yearsExperience,
    yearsExperience,
    area: serviceArea,
    service_area: serviceArea,
    serviceArea,
    discipline: CREATIVE_CATEGORY_LABEL,
    servicesOffered,
    shootTypes: servicesOffered,
    portfolioLink: fieldValue("#creativeProviderPortfolio"),
    socialLink: fieldValue("#creativeProviderSocial"),
    gearSummary: fieldValue("#creativeProviderEquipment"),
    equipmentNotes: fieldValue("#creativeProviderEquipment"),
    editingSoftware: fieldValue("#creativeProviderEditingSoftware"),
    availability: fieldValue("#creativeProviderAvailability"),
    startingRate: fieldValue("#creativeProviderStartingRate"),
    weddingExperience: fieldValue("#creativeProviderWeddingExperience"),
    eventExperience: fieldValue("#creativeProviderEventExperience"),
    realEstateExperience: fieldValue("#creativeProviderRealEstateExperience"),
    productExperience: fieldValue("#creativeProviderProductExperience"),
    droneCapability: fieldValue("#creativeProviderDroneCapability"),
    droneCertificationUpload: selectedFileSummary("#creativeProviderDroneCertification"),
    insuranceUpload: selectedFileSummary("#creativeProviderInsuranceUpload"),
    sampleGalleryLinks: fieldValue("#creativeProviderSampleGalleries"),
    videoReelLink: fieldValue("#creativeProviderVideoReel"),
    profilePhotoUpload: selectedFileSummary("#creativeProviderProfilePhoto"),
    bio: fieldValue("#creativeProviderBio"),
    insuranceNotes: fieldValue("#creativeProviderInsurance"),
    termsAccepted: fieldChecked("#creativeProviderTerms"),
    providerTermsAccepted: fieldChecked("#creativeProviderTerms"),
    privacyAcknowledged: fieldChecked("#creativeProviderPrivacy"),
    status: "Submitted",
    providerStatus: "submitted",
    featured: false
  };
  state.worker = provider;
  const existingWorker = state.workers.findIndex((worker) => String(worker.email || "").toLowerCase() === provider.email.toLowerCase());
  if (existingWorker >= 0) {
    state.workers[existingWorker] = provider;
  } else {
    state.workers.unshift(provider);
  }
  addActivity(`Creative provider application saved: ${provider.name} (${provider.servicesOffered || provider.discipline}).`);
  state.lastConfirmation = {
    type: "creative-provider",
    title: "Creative provider application saved.",
    body: "Forge saved this photographer or videographer application for approved-provider review.",
    details: [
      `${provider.name} · ${provider.servicesOffered || provider.discipline}`,
      `${provider.area} service area`,
      `${provider.experience} experience`
    ],
    nextSteps: [
      "Forge saves this as a photography_videography provider lead",
      "The operator reviews portfolio, availability, and provider terms",
      "Approved providers can be matched with customer creative requests"
    ],
    primary: { label: "Open Creative Page", screen: "creative" },
    secondary: { label: "Open Admin Leads", screen: "admin" }
  };
  saveState();
  sendLead("worker", provider);
  showToast("Creative provider application saved.");
  document.querySelector("#creativeProviderForm").reset();
  setFieldValue("#creativeProviderCity", "Medford, OR");
  setFieldValue("#creativeProviderArea", "Medford, OR");
  navigate("confirm");
}

function submitNorthStarLead() {
  const lead = {
    id: `northstar-${Date.now()}`,
    category: NORTHSTAR_CATEGORY_VALUE,
    secondaryCategory: NORTHSTAR_OPERATIONS_CATEGORY_VALUE,
    name: fieldValue("#northstarName"),
    businessName: fieldValue("#northstarCompanyName"),
    phone: fieldValue("#northstarPhone"),
    email: fieldValue("#northstarEmail"),
    city: fieldValue("#northstarCity"),
    trade: fieldValue("#northstarTrade"),
    website: fieldValue("#northstarWebsite"),
    social: fieldValue("#northstarSocial"),
    servicesNeeded: fieldSelectedValues("#northstarServices"),
    budget: fieldValue("#northstarBudget"),
    problem: fieldValue("#northstarProblem"),
    goal: fieldValue("#northstarGoal"),
    consent: fieldChecked("#northstarConsent"),
    status: "New",
    created: "Today",
    adminNotes: ""
  };
  state.northstarLeads.unshift(lead);
  addActivity(`NorthStar lead saved: ${lead.businessName} needs ${lead.servicesNeeded.join(", ") || "business growth help"}.`);
  state.lastConfirmation = {
    type: "northstar",
    title: "NorthStar request saved.",
    body: "Forge saved this marketing and business-operations request for NorthStar review.",
    details: [
      `${lead.businessName} · ${lead.trade}`,
      `${lead.city} · ${lead.budget}`,
      (lead.servicesNeeded || []).join(", ") || "Services to scope"
    ],
    nextSteps: [
      "Forge routes this as a northstar_marketing_operations lead",
      "Admin reviews the business, current bottleneck, budget, and 30-90 day goal",
      "NorthStar can scope the right website, marketing, CRM, lead follow-up, job tracking, or operations package"
    ],
    primary: { label: "Open Admin Leads", screen: "admin" },
    secondary: { label: "Back to NorthStar", screen: "northstar" }
  };
  saveState();
  sendLead("northstar", lead);
  showToast("NorthStar request saved.");
  document.querySelector("#northstarLeadForm").reset();
  setFieldValue("#northstarCity", "Medford, OR");
  navigate("confirm");
}

function submitFlexLead() {
  const lead = normalizeFlexLead({
    id: `flex-${Date.now()}`,
    created_at: "Today",
    updated_at: "Today",
    owner_name: fieldValue("#flexOwnerName"),
    business_name: fieldValue("#flexCompanyName"),
    email: fieldValue("#flexEmail"),
    phone: fieldValue("#flexPhone"),
    city: fieldValue("#flexCity"),
    state: fieldValue("#flexState").toUpperCase(),
    industry: fieldValue("#flexIndustry"),
    website: fieldValue("#flexWebsite"),
    years_in_business: fieldValue("#flexYearsInBusiness"),
    monthly_revenue_range: fieldValue("#flexMonthlyRevenue"),
    monthly_spend_range: fieldValue("#flexMonthlySpend"),
    employee_count: fieldValue("#flexEmployeeCount"),
    primary_need: fieldValue("#flexPrimaryNeed"),
    interested_in_forge_services: fieldChecked("#flexInterestedForge"),
    interested_in_north_star_marketing: fieldChecked("#flexInterestedNorthstar"),
    interested_in_payment_processing: fieldChecked("#flexInterestedProcessorHelp"),
    consent_to_contact: fieldChecked("#flexConsentToContact"),
    consent_to_receive_flex_referral: fieldChecked("#flexConsentReferral"),
    referral_source: "forge_capital_desk",
    flex_referral_url_sent: "",
    status: "new",
    notes: fieldValue("#flexNotes")
  });
  state.flexLeads.unshift(lead);
  addActivity(`Flex Capital Desk lead saved: ${lead.business_name} (${lead.industry}) score ${lead.lead_score}.`);
  state.lastConfirmation = {
    type: "flex",
    title: "Forge Capital Desk lead saved.",
    body: "Forge saved your basic business information and consent. Finance partner routing stays pending until approval and data-sharing gates are true.",
    details: [
      `${lead.business_name} · ${lead.industry}`,
      `${lead.primary_need || "Need pending"} · score ${lead.lead_score}`,
      lead.consent_to_receive_flex_referral ? "Finance partner review consent captured" : "Finance partner review consent not captured"
    ],
    nextSteps: [
      "Forge stores the basic lead and consent details",
      "Use admin review before any configured finance partner link is opened",
      "Approved finance partners handle eligibility, approval, onboarding, activation, and product support"
    ],
    primary: { label: "Open Capital Desk", screen: "capital" },
    secondary: { label: "Talk to Forge Capital Desk", screen: "capital" }
  };
  saveState();
  sendLead("forge-flex", flexLeadWebhookPayload(lead));
  showToast("Capital Desk lead saved.");
  document.querySelector("#flexLeadForm").reset();
  renderCapitalPage();
  navigate("confirm");
}

function selectedProviderGrowthTools() {
  return Array.from(document.querySelectorAll('input[name="providerGrowthTools"]:checked')).map((input) => input.value);
}

function maybeCreateProviderFlexLead(worker, selectedTools) {
  const financeTools = selectedTools.filter((tool) => providerFinanceToolLabels.includes(tool));
  if (!financeTools.length) return null;
  const cityState = String(worker.area || "").split(",").map((part) => part.trim());
  const lead = normalizeFlexLead({
    id: `flex-provider-${Date.now()}`,
    created_at: "Today",
    updated_at: "Today",
    owner_name: worker.name,
    business_name: `${worker.name} / ${worker.trade}`,
    email: worker.email,
    phone: worker.phone,
    city: cityState[0] || "",
    state: cityState[1] || "",
    industry: worker.trade,
    years_in_business: worker.experience === "New" ? "Under 1 year" : worker.experience,
    employee_count: "Just me",
    primary_need: financeTools.join(", "),
    interested_in_forge_services: selectedTools.includes("I want more customer leads through Forge"),
    interested_in_north_star_marketing: selectedTools.includes("I want marketing through North Star Creative Co."),
    interested_in_payment_processing: selectedTools.includes("I want payment processing help"),
    consent_to_contact: true,
    consent_to_receive_flex_referral: false,
    referral_source: "provider_onboarding",
    status: "new",
    notes: "Provider onboarding finance interest. Collect explicit Flex referral consent before sending any referral link."
  });
  const existingIndex = (state.flexLeads || []).findIndex((item) => item.referral_source === "provider_onboarding" && item.email.toLowerCase() === worker.email.toLowerCase());
  if (existingIndex >= 0) {
    state.flexLeads[existingIndex] = { ...state.flexLeads[existingIndex], ...lead, id: state.flexLeads[existingIndex].id, created_at: state.flexLeads[existingIndex].created_at };
  } else {
    state.flexLeads.unshift(lead);
  }
  addActivity(`Provider finance interest flagged for Capital Desk: ${worker.name}.`);
  return lead;
}

function currentStepValid() {
  const panel = document.querySelector(`.step-panel[data-step="${postStep}"]`);
  const fields = Array.from(panel.querySelectorAll("input, select, textarea"));
  return fields.every((field) => field.reportValidity());
}

function loginAs(role, name, screen) {
  const account = demoAccounts.find((item) => item.role === role) || demoAccounts[0];
  state.session = {
    role: account.role,
    name: name || account.name,
    label: account.label
  };
  state.settings.publicMode = account.publicMode;
  if (account.role === "worker") syncWorkerSession(state.session.name);
  if (account.role === "customer") loadCustomerStatus(state.session.name);
  addActivity(`${state.session.name} logged in as ${account.label}.`);
  saveState();
  navigate(screen || account.screen);
  showToast(`Logged in as ${state.session.name}.`);
}

function logout() {
  state.session = structuredClone(seedState.session);
  state.settings.publicMode = true;
  addActivity("Demo user logged out to Public View.");
  saveState();
  navigate("home");
  showToast("Logged out. Public View is on.");
}

function syncWorkerSession(name) {
  const demoWorker = { ...seedState.worker, name, status: "Ready" };
  const existingIndex = state.workers.findIndex((worker) => samePerson(worker.name, name) || samePerson(worker.email, demoWorker.email));
  if (existingIndex >= 0) {
    state.workers[existingIndex] = { ...demoWorker, ...state.workers[existingIndex], name, email: demoWorker.email };
    state.worker = state.workers[existingIndex];
    return;
  }
  state.worker = demoWorker;
  state.workers.unshift(demoWorker);
}

function loadCustomerStatus(name) {
  const lookup = customerLookupValue(name);
  statusMatches = state.jobs
    .filter((job) => samePerson(job.customer, name))
    .sort((left, right) => customerDemoJobPriority(right) - customerDemoJobPriority(left));
  if (statusMatches[0]) {
    state.activeJobId = statusMatches[0].id;
    state.activeMessageThreadId = `job-${statusMatches[0].id}`;
  }
  setFieldValue("#statusLookup", lookup);
}

function customerDemoJobPriority(job) {
  const bids = state.bids.filter((bid) => bid.jobId === job.id).length;
  const seededDemo = job.id === "bathroom-vanity" ? 100 : 0;
  const statusWeight = job.status === "In Progress" ? 20 : job.status === "Matching" ? 12 : 0;
  return seededDemo + bids * 10 + statusWeight;
}

function customerLookupValue(name) {
  const job = state.jobs.find((item) => samePerson(item.customer, name));
  return job?.phone || job?.email || "";
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function focusAutoPanel(panelSelector, fieldSelector) {
  const panel = document.querySelector(panelSelector);
  if (!panel) return;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
  const field = fieldSelector ? document.querySelector(fieldSelector) : null;
  if (field) window.setTimeout(() => field.focus(), 350);
}

function focusBuildingForm(leadType, projectType) {
  setFieldValue("#buildingLeadType", leadType);
  setFieldValue("#buildingProjectType", projectType);
  if (leadType === "CONTRACTOR_FINANCE") {
    setFieldValue("#buildingFinanceNeed", "WORKING_CAPITAL");
    setFieldValue("#buildingBudgetRange", "NOT_SURE");
  }
  renderBuildingRoutePreview();
  renderBuildingConditionalSections();
  focusAutoPanel("#buildingLeadForm", "#buildingProjectTitle");
}

function configuredFlexAppUrl() {
  const url = String(FLEX_APP_URL || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function createPendingBuildingFinanceLead() {
  const lead = normalizeBuildingLead({
    id: `building-finance-${Date.now()}`,
    createdAt: "Today",
    updatedAt: "Today",
    leadType: "CONTRACTOR_FINANCE",
    projectType: "CONTRACTOR_FINANCE",
    projectTitle: "Contractor finance review request",
    projectDescription: "Public Building finance CTA selected. FLEX_APP_URL is not configured and no internal Flex flow is available, so Forge retained this request in Building admin review.",
    budgetRange: "NOT_SURE",
    timeline: "Flexible",
    projectStage: "NEED_FINANCING",
    state: "OR",
    financeNeed: "WORKING_CAPITAL",
    preferredContactMethod: "Phone",
    consentToReview: true,
    consentToContact: false,
    consentToShareWithApprovedPartners: false,
    adminNotes: "Flex integration pending configuration. Do not share this lead with Flex or any third-party finance partner until customer consent, partner approval, and data-sharing approval are recorded."
  });
  state.buildingLeads.unshift(lead);
  addActivity("Building finance fallback lead saved because FLEX_APP_URL and internal Flex flow were unavailable.");
  saveState();
  render();
  showToast("Finance request saved inside Forge review.");
  return lead;
}

function openBuildingFinanceReview() {
  if (screenExists("capital")) {
    navigate("capital");
    focusAutoPanel("#flexLeadFormSection", "#flexOwnerName");
    if (!configuredFlexAppUrl()) {
      addActivity("Building finance review opened in Forge Capital Desk. FLEX_APP_URL is not configured; external Flex integration remains pending.");
      saveState();
    }
    return;
  }
  const url = configuredFlexAppUrl();
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Configured Flex app link opened.");
    return;
  }
  focusBuildingForm("CONTRACTOR_FINANCE", "CONTRACTOR_FINANCE");
  const lead = createPendingBuildingFinanceLead();
  state.lastConfirmation = {
    type: "building",
    title: "Finance review saved inside Forge.",
    body: "Forge kept this finance request in the Building admin review queue because no approved Flex connection is configured.",
    details: [
      `${projectOptionLabel(buildingLeadTypeOptions, lead.leadType)} · ${projectOptionLabel(buildingProjectTypeOptions, lead.projectType)}`,
      `${buildingStatusLabel(lead.status)} · ${lead.partnerEligibility}`,
      "No third-party sharing consent captured"
    ],
    nextSteps: [
      "Collect customer contact details before follow-up",
      "Configure FLEX_APP_URL or use Forge Capital Desk before any external Flex handoff",
      "Require consent, partner approval, and data-sharing approval before partner sharing"
    ],
    primary: { label: "Open Building Admin", screen: "admin-building-leads" },
    secondary: { label: "Back to Building", screen: "building" }
  };
  navigate("confirm");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function humanize(value) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function creativeStatusText(status) {
  return String(status || "submitted")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizedCreativeRequestStatus(lead) {
  const status = String(lead?.creativeStatus || lead?.status || "submitted").toLowerCase().replaceAll(" ", "_");
  return creativeRequestStatuses.includes(status) ? status : "submitted";
}

function normalizedCreativeProviderStatus(provider) {
  const status = String(provider?.providerStatus || provider?.status || "submitted").toLowerCase().replaceAll(" ", "_");
  return creativeProviderStatuses.includes(status) ? status : "submitted";
}

function findWorkerByName(name) {
  return state.workers.find((worker) => samePerson(worker.name, name));
}

function samePerson(left, right) {
  return String(left || "").trim().toLowerCase() === String(right || "").trim().toLowerCase();
}

document.addEventListener("click", (event) => {
  const login = event.target.closest("[data-login-role]");
  if (login) {
    loginAs(login.dataset.loginRole, login.dataset.loginName, login.dataset.loginScreen);
    return;
  }

  const nav = event.target.closest("[data-nav]");
  if (nav) navigate(nav.dataset.nav);

  const detail = event.target.closest("[data-detail]");
  if (detail) navigate("detail", { jobId: detail.dataset.detail });

  const bidJob = event.target.closest("[data-bid-job]");
  if (bidJob) navigate("bid", { jobId: bidJob.dataset.bidJob });

  const messageThread = event.target.closest("[data-message-thread]");
  if (messageThread) {
    state.activeMessageThreadId = messageThread.dataset.messageThread;
    saveState();
    navigate("messages", { threadId: messageThread.dataset.messageThread });
    return;
  }

  const action = event.target.closest("[data-action]");
  if (action?.dataset.action === "login") navigate("login");
  if (action?.dataset.action === "switch-user") navigate("login");
  if (action?.dataset.action === "logout") logout();
  if (action?.dataset.action === "message") navigate("messages", { threadId: `job-${state.activeJobId}` });
  if (action?.dataset.action === "choose-best") showToast("Pick one of the bids on the right.");
  if (action?.dataset.action === "export-jobs") exportCsv("forge-job-leads.csv", state.jobs);
  if (action?.dataset.action === "export-workers") exportCsv("forge-worker-leads.csv", state.workers);
  if (action?.dataset.action === "export-creative-requests") exportCsv("forge-creative-requests.csv", state.jobs.filter(isCreativeJob));
  if (action?.dataset.action === "export-creative-providers") exportCsv("forge-creative-providers.csv", state.workers.filter(isCreativeProvider));
  if (action?.dataset.action === "export-northstar") exportCsv("forge-northstar-leads.csv", state.northstarLeads || []);
  if (action?.dataset.action === "export-road-rescue") exportCsv("forge-road-rescue-leads.csv", state.roadRescueRequests || []);
  if (action?.dataset.action === "export-flex-leads") exportCsv("forge-flex-leads.csv", state.flexLeads || []);
  if (action?.dataset.action === "export-referrals") exportCsv("forge-referral-leads.csv", state.referrals);
  if (action?.dataset.action === "export-homebuilding") exportCsv("forge-homebuilding-leads.csv", state.homebuildingLeads || []);
  if (action?.dataset.action === "export-building-leads") exportCsv("forge-building-leads.csv", state.buildingLeads || []);
  if (action?.dataset.action === "export-projects") exportCsv("forge-project-leads.csv", state.projectLeads || []);
  if (action?.dataset.action === "export-bids") exportCsv("forge-bids.csv", state.bids);
  if (action?.dataset.action === "export-backup") exportBackup();
  if (action?.dataset.action === "toggle-public-mode") togglePublicMode();
  if (action?.dataset.action === "copy-daily-brief") copyDailyBrief();
  if (action?.dataset.action === "copy-delivery-status") copyDeliveryStatus();
  if (action?.dataset.action === "copy-backend-handoff") copyBackendHandoff();
  if (action?.dataset.action === "copy-auth-handoff") copyAuthHandoff();
  if (action?.dataset.action === "copy-profile-brief") copyProfileBrief();
  if (action?.dataset.action === "copy-follow-up-queue") copyFollowUpQueue();
  if (action?.dataset.action === "copy-safety-checklist") copySafetyChecklist();
  if (action?.dataset.action === "copy-launch-gate") copyLaunchGate();
  if (action?.dataset.action === "copy-soft-launch") copySoftLaunchPlan();
  if (action?.dataset.action === "copy-soft-launch-invite") copySoftLaunchInvite(action.dataset.inviteRole);
  if (action?.dataset.action === "copy-soft-launch-invite-kit") copySoftLaunchInviteKit();
  if (action?.dataset.action === "copy-soft-launch-run-sheet") copySoftLaunchRunSheet();
  if (action?.dataset.action === "copy-deploy-plan") copyDeployPlan();
  if (action?.dataset.action === "copy-rc-packet") copyReleaseCandidatePacket();
  if (action?.dataset.action === "copy-launch-runbook") copyLaunchRunbook();
  if (action?.dataset.action === "copy-security-command") copySecurityCommand();
  if (action?.dataset.action === "copy-final-gate") copyFinalSecurityGate();
  if (action?.dataset.action === "copy-security-review") copySecurityReviewPack();
  if (action?.dataset.action === "copy-launch-command") copyLaunchCommand();
  if (action?.dataset.action === "copy-outreach-recap") copyOutreachRecap();
  if (action?.dataset.action === "copy-outreach-batch") copyOutreachBatch();
  if (action?.dataset.action === "complete-outreach-sprint") completeOutreachSprint();
  if (action?.dataset.action === "copy-session-history") copySessionHistory();
  if (action?.dataset.action === "copy-session-note") copySessionNote(action.dataset.sessionIndex);
  if (action?.dataset.action === "copy-message-draft") copyMessageDraft();
  if (action?.dataset.action === "copy-demo-script") copyDemoScript();
  if (action?.dataset.action === "copy-demo-cue") copyDemoCue(action.dataset.demoCueRole);
  if (action?.dataset.action === "copy-demo-pack") copyDemoPack();
  if (action?.dataset.action === "copy-close-ask") copyCloseAsk();
  if (action?.dataset.action === "copy-confirmation-handoff") copyConfirmationHandoff();
  if (action?.dataset.action === "copy-demo-link") copyDemoLink(action.dataset.demoRole, action.dataset.demoScreen, action.dataset.demoLabel);
  if (action?.dataset.action === "copy-perspective-link") copyPerspectiveLink(action.dataset.perspectiveRole);
  if (action?.dataset.action === "copy-first-200") copyFirst200Plan();
  if (action?.dataset.action === "copy-first-user-links") copyFirstUserLinks();
  if (action?.dataset.action === "copy-signup-checklist") copySignupChecklist();
  if (action?.dataset.action === "copy-creative-brief") copyCreativeBrief();
  if (action?.dataset.action === "copy-creative-queue") copyCreativeQueue();
  if (action?.dataset.action === "copy-creative-lead") copyCreativeLead(action.dataset.creativeLeadId);
  if (action?.dataset.action === "copy-creative-provider") copyCreativeProvider(action.dataset.creativeProviderEmail);
  if (action?.dataset.action === "focus-creative-lead") focusAutoPanel("#creativeLeadSection", "#creativeName");
  if (action?.dataset.action === "focus-creative-provider") focusAutoPanel("#creativeProviderSection", "#creativeProviderFirstName");
  if (action?.dataset.action === "focus-northstar-intake") focusAutoPanel("#northstarIntakeSection", "#northstarName");
  if (action?.dataset.action === "focus-northstar-packages") focusAutoPanel("#northstarPackages", null);
  if (action?.dataset.action === "copy-northstar-brief") copyNorthStarBrief();
  if (action?.dataset.action === "copy-northstar-queue") copyNorthStarQueue();
  if (action?.dataset.action === "copy-northstar-lead") copyNorthStarLead(action.dataset.northstarId);
  if (action?.dataset.action === "focus-flex-form") focusAutoPanel("#flexLeadFormSection", "#flexOwnerName");
  if (action?.dataset.action === "copy-flex-brief") copyFlexBrief();
  if (action?.dataset.action === "copy-flex-queue") copyFlexQueue();
  if (action?.dataset.action === "copy-flex-outreach") copyFlexOutreach(action.dataset.flexId);
  if (action?.dataset.action === "open-flex-referral") openFlexReferral(action.dataset.flexLeadId);
  if (action?.dataset.action === "create-flex-upsell-task") createFlexUpsellTask(action.dataset.flexId);
  if (action?.dataset.action === "copy-auto-market-brief") copyAutoMarketBrief();
  if (action?.dataset.action === "copy-auto-dealer-plan") copyAutoDealerPlan();
  if (action?.dataset.action === "copy-auto-dealer-setup") copyAutoDealerSetup();
  if (action?.dataset.action === "copy-auto-dealer") copyAutoDealer(action.dataset.dealerId);
  if (action?.dataset.action === "copy-auto-service") copyAutoServiceRequest(action.dataset.autoRequestId);
  if (action?.dataset.action === "copy-auto-service-queue") copyAutoServiceQueue();
  if (action?.dataset.action === "copy-vehicle-contact") copyVehicleContact(action.dataset.vehicleId);
  if (action?.dataset.action === "copy-auto-inquiry") copyAutoInquiry(action.dataset.inquiryId);
  if (action?.dataset.action === "copy-auto-inquiry-queue") copyAutoInquiryQueue();
  if (action?.dataset.action === "focus-auto-request") focusAutoPanel("#autoRequestSection", "#autoFullName");
  if (action?.dataset.action === "focus-vehicle-listing") focusAutoPanel("#vehicleListingForm", "#vehicleYear");
  if (action?.dataset.action === "focus-auto-partners") focusAutoPanel("#autoDealerGrid", null);
  if (action?.dataset.action === "focus-road-rescue-request") focusAutoPanel("#roadRescueRequestSection", "#roadRescueName");
  if (action?.dataset.action === "focus-road-hazard") focusAutoPanel("#roadHazardHelper", null);
  if (action?.dataset.action === "copy-road-rescue-request") copyRoadRescueRequest(action.dataset.roadRescueId);
  if (action?.dataset.action === "copy-road-rescue-queue") copyRoadRescueQueue();
  if (action?.dataset.action === "copy-road-hazard-city") copyRoadHazardReport("City");
  if (action?.dataset.action === "copy-road-hazard-county") copyRoadHazardReport("County");
  if (action?.dataset.action === "copy-road-hazard-state") copyRoadHazardReport("State / ODOT");
  if (action?.dataset.action === "copy-road-damage-checklist") copyRoadDamageChecklist();
  if (action?.dataset.action === "scroll-homebuilding-intake") focusAutoPanel("#homebuildingIntake", "#homebuildingName");
  if (action?.dataset.action === "scroll-homebuilding-contractors") focusAutoPanel("#homebuildingContractors", null);
  if (action?.dataset.action === "copy-opportunity-plan") copyOpportunityPlan();
  if (action?.dataset.action === "copy-opportunity-lead") copyOpportunityLead(action.dataset.opportunityId);
  if (action?.dataset.action === "copy-opportunity-leads") copyOpportunityLeads();
  if (action?.dataset.action === "focus-project-intake") focusAutoPanel("#projectIntakeForm", "#projectContactName");
  if (action?.dataset.action === "focus-project-major") focusAutoPanel("#projectIntakeForm", "#projectType");
  if (action?.dataset.action === "focus-project-partner") focusAutoPanel("#projectsPartnerSpotlight", null);
  if (action?.dataset.action === "copy-project-lead") copyProjectLead(action.dataset.projectId);
  if (action?.dataset.action === "copy-projects-queue") copyProjectsQueue();
  if (action?.dataset.action === "focus-building-home") focusBuildingForm("HOME_PROJECT", "HOME_REPAIR");
  if (action?.dataset.action === "focus-building-major") focusBuildingForm("MAJOR_BUILD", "MULTIFAMILY");
  if (action?.dataset.action === "focus-building-finance") focusBuildingForm("CONTRACTOR_FINANCE", "CONTRACTOR_FINANCE");
  if (action?.dataset.action === "open-building-finance-review") openBuildingFinanceReview();
  if (action?.dataset.action === "copy-building-lead") copyBuildingLead(action.dataset.buildingId);
  if (action?.dataset.action === "copy-building-queue") copyBuildingQueue();
  if (action?.dataset.action === "save-webhook") saveWebhookSettings();
  if (action?.dataset.action === "test-webhook") sendTestWebhook();
  if (action?.dataset.action === "copy-invite") copyInviteText();
  if (action?.dataset.action === "copy-job-template") copyText(jobTemplate(state.jobs[0]), "Job follow-up copied.");
  if (action?.dataset.action === "copy-worker-template") copyText(workerTemplate(state.workers[0]), "Worker follow-up copied.");
  if (action?.dataset.action === "copy-job-direct") copyJobDirect(action.dataset.jobId);
  if (action?.dataset.action === "copy-job-flow-brief") copyJobFlowBrief(action.dataset.jobId);
  if (action?.dataset.action === "copy-bid-handoff") copyBidHandoff(action.dataset.jobId);
  if (action?.dataset.action === "copy-worker-direct") copyWorkerDirect(action.dataset.workerEmail);
  if (action?.dataset.action === "copy-referral-direct") copyReferralDirect(action.dataset.referralId);
  if (action?.dataset.action === "copy-homebuilding-lead") copyHomebuildingLead(action.dataset.homebuildingId);
  if (action?.dataset.action === "send-homebuilding-seneca") sendHomebuildingToSeneca(action.dataset.homebuildingId);
  if (action?.dataset.action === "mark-project-needs-info") markProjectNeedsInfo(action.dataset.projectId);
  if (action?.dataset.action === "qualify-project-lead") qualifyProjectLead(action.dataset.projectId);
  if (action?.dataset.action === "send-project-seneca") sendProjectToSeneca(action.dataset.projectId);
  if (action?.dataset.action === "mark-building-needs-info") setBuildingLeadStatus(action.dataset.buildingId, "NEEDS_MORE_INFO", "Marked Needs More Info.");
  if (action?.dataset.action === "qualify-building-lead") setBuildingLeadStatus(action.dataset.buildingId, "FORGE_QUALIFIED", "Marked Forge Qualified.");
  if (action?.dataset.action === "route-building-forge-pro") setBuildingLeadStatus(action.dataset.buildingId, "ROUTED_TO_FORGE_PRO", "Routed to Forge Pro.");
  if (action?.dataset.action === "major-building-review") setBuildingLeadStatus(action.dataset.buildingId, "MAJOR_PROJECT_REVIEW", "Marked Major Project Review.");
  if (action?.dataset.action === "request-building-consent") setBuildingLeadStatus(action.dataset.buildingId, "CUSTOMER_CONSENT_REQUESTED", "Customer consent requested.");
  if (action?.dataset.action === "approve-building-consent") setBuildingLeadStatus(action.dataset.buildingId, "CUSTOMER_CONSENT_APPROVED", "Customer consent approved.");
  if (action?.dataset.action === "building-seneca-eligible") setBuildingLeadStatus(action.dataset.buildingId, "SENECA_REVIEW_ELIGIBLE", "Marked Seneca Review Eligible only. Do not send without partner approval and data-sharing approval.");
  if (action?.dataset.action === "send-building-seneca") sendBuildingToSeneca(action.dataset.buildingId);
  if (action?.dataset.action === "building-flex-eligible") setBuildingLeadStatus(action.dataset.buildingId, "FLEX_REVIEW_ELIGIBLE", "Marked Flex Review Eligible only. Do not send without partner approval and data-sharing approval.");
  if (action?.dataset.action === "send-building-flex") sendBuildingToFlex(action.dataset.buildingId);
  if (action?.dataset.action === "building-proposal-requested") setBuildingLeadStatus(action.dataset.buildingId, "PROPOSAL_REQUESTED", "Proposal requested.");
  if (action?.dataset.action === "building-site-visit") setBuildingLeadStatus(action.dataset.buildingId, "SITE_VISIT_SCHEDULED", "Site visit scheduled.");
  if (action?.dataset.action === "building-contract-pending") setBuildingLeadStatus(action.dataset.buildingId, "CONTRACT_PENDING", "Contract pending.");
  if (action?.dataset.action === "building-won") setBuildingLeadStatus(action.dataset.buildingId, "WON", "Marked Won.");
  if (action?.dataset.action === "building-lost") setBuildingLeadStatus(action.dataset.buildingId, "LOST", "Marked Lost.");
  if (action?.dataset.action === "building-not-fit") setBuildingLeadStatus(action.dataset.buildingId, "NOT_A_FIT", "Marked Not A Fit.");
  if (action?.dataset.action === "mark-job-contacted") markJobContacted(action.dataset.jobId);
  if (action?.dataset.action === "mark-worker-contacted") markWorkerContacted(action.dataset.workerEmail);
  if (action?.dataset.action === "mark-referral-contacted") markReferralContacted(action.dataset.referralId);
  if (action?.dataset.action === "mark-homebuilding-contacted") markHomebuildingContacted(action.dataset.homebuildingId);
  if (action?.dataset.action === "mark-opportunity-contacted") markOpportunityContacted(action.dataset.opportunityId);
  if (action?.dataset.action === "mark-northstar-contacted") markNorthStarContacted(action.dataset.northstarId);
  if (action?.dataset.action === "mark-road-rescue-contacted") markRoadRescueContacted(action.dataset.roadRescueId);
  if (action?.dataset.action === "mark-flex-contacted") markFlexContacted(action.dataset.flexId);
  if (action?.dataset.action === "move-job-forward") moveJobForward(action.dataset.jobId);
  if (action?.dataset.action === "move-worker-forward") moveWorkerForward(action.dataset.workerEmail);
  if (action?.dataset.action === "move-referral-forward") moveReferralForward(action.dataset.referralId);
  if (action?.dataset.action === "move-homebuilding-forward") moveHomebuildingForward(action.dataset.homebuildingId);
  if (action?.dataset.action === "move-opportunity-forward") moveOpportunityForward(action.dataset.opportunityId);
  if (action?.dataset.action === "move-northstar-forward") moveNorthStarForward(action.dataset.northstarId);
  if (action?.dataset.action === "move-road-rescue-forward") moveRoadRescueForward(action.dataset.roadRescueId);
  if (action?.dataset.action === "move-flex-forward") moveFlexForward(action.dataset.flexId);
  if (action?.dataset.action === "clear-activity") clearActivity();
  if (action?.dataset.action === "reset-demo") resetDemoData();

  const chooseBid = event.target.closest("[data-choose-bid]");
  if (chooseBid) {
    const job = state.jobs.find((item) => item.id === state.activeJobId);
    const bids = state.bids.filter((bid) => bid.jobId === state.activeJobId);
    const selectedBid = bids[Number(chooseBid.dataset.chooseBid)];
    if (!job || !selectedBid) return;
    bids.forEach((bid) => bid.chosen = false);
    selectedBid.chosen = true;
    selectedBid.status = "Selected";
    job.status = isServiceVerticalJob(job) ? "Provider selected" : "In Progress";
    state.activeMessageThreadId = `job-${job.id}`;
    state.messages.unshift({
      id: `${Date.now()}`,
      threadId: `job-${job.id}`,
      to: selectedBid.worker,
      from: job.customer || "Forge customer",
      body: `${job.customer || "The customer"} chose ${selectedBid.worker}'s ${selectedBid.amount} bid for ${job.title}. Next step: confirm schedule and arrival details.`,
      sentAt: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
      status: "Sent"
    });
    state.lastConfirmation = {
      type: "bid",
      title: "Bid chosen.",
      body: `Forge moved the job to ${job.status} and saved a message so the next step is clear.`,
      details: [
        `${selectedBid.worker} · ${selectedBid.amount}`,
        `${job.title} is ${job.status}`,
        `${selectedBid.timeline} timeline`
      ],
      primary: { label: "Open Messages", screen: "messages" },
      secondary: { label: "View Job Detail", jobId: job.id }
    };
    addActivity(`Bid selected for ${job.title}: ${selectedBid.worker}.`);
    saveState();
    showToast(`Bid chosen. Job moved to ${job.status}.`);
    navigate("confirm");
  }
});

document.addEventListener("change", (event) => {
  if (event.target.closest("#homebuildingIntakeForm")) renderHomebuildingRoutePreview();
  if (event.target.closest("#projectIntakeForm")) renderProjectRoutePreview();
  if (event.target.closest("#buildingLeadForm")) {
    renderBuildingRoutePreview();
    renderBuildingConditionalSections();
  }

  const jobStatus = event.target.closest("[data-job-status]");
  if (jobStatus) {
    const job = state.jobs.find((item) => item.id === jobStatus.dataset.jobStatus);
    if (job) job.status = jobStatus.value;
    addActivity(`Job status changed: ${job?.title || "job"} -> ${jobStatus.value}.`);
    saveState();
    renderDashboards();
    showToast("Job status updated.");
  }

  const workerStatus = event.target.closest("[data-worker-status]");
  if (workerStatus) {
    const worker = state.workers.find((item) => item.email === workerStatus.dataset.workerStatus);
    if (worker) worker.status = workerStatus.value;
    addActivity(`Worker status changed: ${worker?.name || "worker"} -> ${workerStatus.value}.`);
    saveState();
    renderDashboards();
    showToast("Worker status updated.");
  }

  const creativeRequestStatus = event.target.closest("[data-creative-request-status]");
  if (creativeRequestStatus) {
    const lead = state.jobs.find((item) => item.id === creativeRequestStatus.dataset.creativeRequestStatus && isCreativeJob(item));
    if (lead) {
      lead.creativeStatus = creativeRequestStatus.value;
      lead.status = creativeStatusText(creativeRequestStatus.value);
    }
    addActivity(`Creative request status changed: ${lead?.projectType || "request"} -> ${creativeStatusText(creativeRequestStatus.value)}.`);
    saveState();
    renderDashboards();
    renderCreativePage();
    showToast("Creative request status updated.");
  }

  const creativeProviderStatus = event.target.closest("[data-creative-provider-status]");
  if (creativeProviderStatus) {
    const provider = state.workers.find((item) => item.email === creativeProviderStatus.dataset.creativeProviderStatus && isCreativeProvider(item));
    if (provider) {
      provider.providerStatus = creativeProviderStatus.value;
      provider.status = creativeStatusText(creativeProviderStatus.value);
    }
    addActivity(`Creative provider status changed: ${provider?.name || "provider"} -> ${creativeStatusText(creativeProviderStatus.value)}.`);
    saveState();
    renderDashboards();
    renderCreativePage();
    showToast("Creative provider status updated.");
  }

  const creativeProviderFeatured = event.target.closest("[data-creative-provider-featured]");
  if (creativeProviderFeatured) {
    const provider = state.workers.find((item) => item.email === creativeProviderFeatured.dataset.creativeProviderFeatured && isCreativeProvider(item));
    if (provider) provider.featured = creativeProviderFeatured.checked;
    addActivity(`Creative provider featured changed: ${provider?.name || "provider"} -> ${creativeProviderFeatured.checked ? "featured" : "not featured"}.`);
    saveState();
    renderDashboards();
    renderCreativePage();
    showToast("Creative provider updated.");
  }

  const northstarStatus = event.target.closest("[data-northstar-status]");
  if (northstarStatus) {
    const lead = (state.northstarLeads || []).find((item) => item.id === northstarStatus.dataset.northstarStatus);
    if (lead) lead.status = northstarStatus.value;
    addActivity(`NorthStar lead status changed: ${lead?.businessName || "lead"} -> ${northstarStatus.value}.`);
    saveState();
    renderDashboards();
    renderNorthStarPage();
    showToast("NorthStar status updated.");
  }

  const roadRescueStatus = event.target.closest("[data-road-rescue-status]");
  if (roadRescueStatus) {
    const request = (state.roadRescueRequests || []).find((item) => item.id === roadRescueStatus.dataset.roadRescueStatus);
    if (request) request.status = roadRescueStatus.value;
    addActivity(`Road Rescue status changed: ${request?.name || "request"} -> ${roadRescueStatus.value}.`);
    saveState();
    renderDashboards();
    renderRoadRescue();
    showToast("Road Rescue status updated.");
  }

  const flexStatus = event.target.closest("[data-flex-status]");
  if (flexStatus) {
    const lead = (state.flexLeads || []).find((item) => item.id === flexStatus.dataset.flexStatus);
    if (lead) {
      lead.status = flexStatus.value;
      lead.updated_at = "Today";
    }
    addActivity(`Flex lead status changed: ${lead?.business_name || "lead"} -> ${flexStatusLabel(flexStatus.value)}.`);
    saveState();
    renderFlexLeadsAdmin();
    renderCapitalPage();
    showToast("Flex status updated.");
  }

  const referralStatus = event.target.closest("[data-referral-status]");
  if (referralStatus) {
    const referral = state.referrals.find((item) => item.id === referralStatus.dataset.referralStatus);
    if (referral) referral.status = referralStatus.value;
    addActivity(`Referral status changed: ${referral?.name || "lead"} -> ${referralStatus.value}.`);
    saveState();
    renderDashboards();
    showToast("Referral status updated.");
  }

  const homebuildingStatus = event.target.closest("[data-homebuilding-status]");
  if (homebuildingStatus) {
    const lead = (state.homebuildingLeads || []).find((item) => item.id === homebuildingStatus.dataset.homebuildingStatus);
    if (lead) lead.status = homebuildingStatus.value;
    addActivity(`Homebuilding lead status changed: ${lead?.name || "lead"} -> ${homebuildingStatus.value}.`);
    saveState();
    renderDashboards();
    showToast("Homebuilding status updated.");
  }

  const projectStatus = event.target.closest("[data-project-status]");
  if (projectStatus) {
    const lead = (state.projectLeads || []).find((item) => item.id === projectStatus.dataset.projectStatus);
    if (lead) {
      lead.status = projectStatus.value;
      lead.senecaReviewAllowed = canSendProjectToSeneca(lead);
      addProjectNote(lead.id, `Status changed to ${projectStatusLabel(projectStatus.value)}.`);
    }
    addActivity(`Project lead status changed: ${lead?.projectTitle || "project"} -> ${projectStatusLabel(projectStatus.value)}.`);
    saveState();
    render();
    showToast("Project status updated.");
  }

  const buildingStatus = event.target.closest("[data-building-status]");
  if (buildingStatus) {
    setBuildingLeadStatus(buildingStatus.dataset.buildingStatus, buildingStatus.value, `Status changed to ${buildingStatusLabel(buildingStatus.value)}.`);
  }

  const messageThread = event.target.closest("#messageThreadSelect");
  if (messageThread) {
    state.activeMessageThreadId = messageThread.value;
    saveState();
    renderMessages();
  }
});

document.querySelector("#backupImport").addEventListener("change", importBackup);

document.addEventListener("input", (event) => {
  if (event.target.closest("#homebuildingIntakeForm")) renderHomebuildingRoutePreview();
  if (event.target.closest("#projectIntakeForm")) renderProjectRoutePreview();
  if (event.target.closest("#buildingLeadForm")) {
    renderBuildingRoutePreview();
    renderBuildingConditionalSections();
  }
  if (event.target.closest("#flexIndustryFilter") || event.target.closest("#flexCityFilter") || event.target.closest("#flexStateFilter")) renderFlexLeadsAdmin();
  if (event.target.closest("#buildingStateFilter")) renderAdminBuildingLeadsPage();

  const notes = event.target.closest("[data-job-notes]");
  const creativeRequestNotes = event.target.closest("[data-creative-request-notes]");
  const creativeProviderNotes = event.target.closest("[data-creative-provider-notes]");
  const northstarNotes = event.target.closest("[data-northstar-notes]");
  const roadRescueNotes = event.target.closest("[data-road-rescue-notes]");
  const flexNotes = event.target.closest("[data-flex-notes]");
  const referralNotes = event.target.closest("[data-referral-notes]");
  const homebuildingNotes = event.target.closest("[data-homebuilding-notes]");
  const buildingNotes = event.target.closest("[data-building-notes]");
  const projectNote = event.target.closest("[data-project-note]");
  if (notes) {
    const job = state.jobs.find((item) => item.id === notes.dataset.jobNotes);
    if (!job) return;
    job.notes = notes.value;
    saveState();
  }
  if (creativeRequestNotes) {
    const lead = state.jobs.find((item) => item.id === creativeRequestNotes.dataset.creativeRequestNotes && isCreativeJob(item));
    if (!lead) return;
    lead.adminNotes = creativeRequestNotes.value;
    saveState();
  }
  if (creativeProviderNotes) {
    const provider = state.workers.find((item) => item.email === creativeProviderNotes.dataset.creativeProviderNotes && isCreativeProvider(item));
    if (!provider) return;
    provider.adminNotes = creativeProviderNotes.value;
    saveState();
  }
  if (northstarNotes) {
    const lead = (state.northstarLeads || []).find((item) => item.id === northstarNotes.dataset.northstarNotes);
    if (!lead) return;
    lead.adminNotes = northstarNotes.value;
    saveState();
  }
  if (roadRescueNotes) {
    const request = (state.roadRescueRequests || []).find((item) => item.id === roadRescueNotes.dataset.roadRescueNotes);
    if (!request) return;
    request.notes = roadRescueNotes.value;
    saveState();
  }
  if (flexNotes) {
    const lead = (state.flexLeads || []).find((item) => item.id === flexNotes.dataset.flexNotes);
    if (!lead) return;
    lead.notes = flexNotes.value;
    lead.updated_at = "Today";
    saveState();
  }
  if (referralNotes) {
    const referral = state.referrals.find((item) => item.id === referralNotes.dataset.referralNotes);
    if (!referral) return;
    referral.note = referralNotes.value;
    saveState();
  }
  if (homebuildingNotes) {
    const lead = (state.homebuildingLeads || []).find((item) => item.id === homebuildingNotes.dataset.homebuildingNotes);
    if (!lead) return;
    lead.notes = homebuildingNotes.value;
    saveState();
  }
  if (buildingNotes) {
    const lead = (state.buildingLeads || []).find((item) => item.id === buildingNotes.dataset.buildingNotes);
    if (!lead) return;
    lead.adminNotes = buildingNotes.value;
    lead.updatedAt = "Today";
    saveState();
  }
  if (projectNote) {
    const lead = (state.projectLeads || []).find((item) => item.id === projectNote.dataset.projectNote);
    if (!lead) return;
    lead.adminNote = projectNote.value;
    saveState();
  }
});

window.addEventListener("hashchange", () => {
  const screen = normalizeScreen(location.hash.replace("#", "") || "home");
  if (screenExists(screen)) {
    navigate(screen);
  }
});

document.querySelector("#postNext").addEventListener("click", () => {
  if (!currentStepValid()) return;
  if (postStep < 3) {
    postStep += 1;
    renderPostWizard();
  }
});

document.querySelector("#postBack").addEventListener("click", () => {
  if (postStep > 1) {
    postStep -= 1;
    renderPostWizard();
  }
});

document.querySelector("#postJobForm").addEventListener("submit", (event) => {
  event.preventDefault();
  postJobFromForm();
});

document.querySelector("#creativeLeadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitCreativeLead();
});

document.querySelector("#creativeProviderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitCreativeProvider();
});

document.querySelector("#northstarLeadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitNorthStarLead();
});

document.querySelector("#flexLeadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitFlexLead();
});

document.querySelector("#projectIntakeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitProjectLead();
});

document.querySelector("#buildingLeadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitBuildingLead();
});

document.querySelector("#vehicleListingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const dealer = autoDealerByName(document.querySelector("#vehicleDealer").value);
  const vehicle = {
    id: `vehicle-${Date.now()}`,
    year: document.querySelector("#vehicleYear").value.trim(),
    make: document.querySelector("#vehicleMake").value.trim(),
    model: document.querySelector("#vehicleModel").value.trim(),
    price: document.querySelector("#vehiclePrice").value.trim(),
    mileage: document.querySelector("#vehicleMileage").value.trim(),
    location: document.querySelector("#vehicleLocation").value.trim(),
    description: document.querySelector("#vehicleDescription").value.trim(),
    dealerId: dealer.id,
    seller: document.querySelector("#vehicleSeller").value.trim(),
    phone: document.querySelector("#vehiclePhone").value.trim(),
    email: document.querySelector("#vehicleEmail").value.trim(),
    status: "Available",
    posted: "Today"
  };
  state.vehicles.unshift(vehicle);
  addActivity(`Vehicle listed for sale: ${vehicle.year} ${vehicle.make} ${vehicle.model}.`);
  state.lastConfirmation = {
    type: "vehicle",
    title: "Vehicle listing saved.",
    body: "Forge added this car to the local auto marketplace so buyers can copy seller follow-up info.",
    details: [
      `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      `${vehicle.price} · ${vehicle.mileage}`,
      `${vehicle.location} · ${dealer.name}`
    ],
    nextSteps: [
      "Forge shows the vehicle in Forge Auto",
      `Buyers can copy seller info and route through ${dealer.name}`,
      "Seller and buyer should inspect, verify title, and handle payment outside Forge"
    ],
    primary: { label: "Open Forge Auto", screen: "auto" },
    secondary: { label: "Back Home", screen: "home" }
  };
  saveState();
  event.target.reset();
  setFieldValue("#vehicleLocation", "Medford, OR");
  showToast("Vehicle listing saved.");
  navigate("confirm");
});

document.querySelector("#autoServiceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const photoCount = document.querySelector("#autoPhotos").files?.length || 0;
  const request = {
    id: `auto-request-${Date.now()}`,
    name: document.querySelector("#autoFullName").value.trim(),
    phone: document.querySelector("#autoPhone").value.trim(),
    email: document.querySelector("#autoEmail").value.trim(),
    vehicle: document.querySelector("#autoVehicle").value.trim(),
    mileage: document.querySelector("#autoMileage").value.trim(),
    service: document.querySelector("#autoServiceNeeded").value,
    location: document.querySelector("#autoLocation").value.trim() || "Medford, OR",
    urgency: document.querySelector("#autoUrgency").value,
    photos: `${photoCount} photo${photoCount === 1 ? "" : "s"} selected`,
    notes: document.querySelector("#autoNotes").value.trim(),
    status: "New",
    created: "Today"
  };
  state.autoRequests.unshift(request);
  addActivity(`Forge Auto request saved: ${request.name} needs ${request.service} for ${request.vehicle}.`);
  state.lastConfirmation = {
    type: "auto-service",
    title: "Auto service request saved.",
    body: "Forge saved this vehicle request so the operator can route it to the right trusted auto partner.",
    details: [
      `${request.name} · ${request.service}`,
      `${request.vehicle} · ${request.mileage}`,
      `${request.location} · ${request.urgency}`
    ],
    nextSteps: [
      "Forge saves the request in the Auto service queue",
      "The operator routes it to a trusted mechanic, auto partner, transport provider, or dealer partner",
      "Licensed or qualified partners perform regulated sales, financing, repair, towing, transport, and insurance-related work where required"
    ],
    primary: { label: "Open Forge Auto", screen: "auto" },
    secondary: { label: "Back Home", screen: "home" }
  };
  saveState();
  sendLead("auto-service", request);
  event.target.reset();
  setFieldValue("#autoLocation", "Medford, OR");
  showToast("Auto service request saved.");
  navigate("confirm");
});

document.querySelector("#roadRescueForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const checkedIssues = [...document.querySelectorAll("input[name='roadRescueIssue']:checked")];
  const issueError = document.querySelector("#roadRescueIssueError");
  if (!checkedIssues.length) {
    issueError?.classList.remove("hidden");
    showToast("Choose at least one Road Rescue issue type.");
    return;
  }
  issueError?.classList.add("hidden");
  const issueTypes = [...new Set(checkedIssues.map((input) => input.value))];
  const issueLabels = checkedIssues.map((input) => input.dataset.label || input.value);
  const issueType = issueTypes.find((value) => value !== "other") || issueTypes[0] || "other";
  const request = {
    id: `road-rescue-${Date.now()}`,
    service_type: ROAD_RESCUE_SERVICE_TYPE,
    issue_type: issueType,
    issueTypes,
    issueLabels,
    name: fieldValue("#roadRescueName"),
    phone: fieldValue("#roadRescuePhone"),
    email: fieldValue("#roadRescueEmail"),
    preferredContact: fieldValue("#roadRescuePreferredContact"),
    emergency: fieldValue("#roadRescueEmergency"),
    location: fieldValue("#roadRescueLocation"),
    landmark: fieldValue("#roadRescueLandmark"),
    city: fieldValue("#roadRescueCity"),
    state: fieldValue("#roadRescueState"),
    zip: fieldValue("#roadRescueZip"),
    shareLiveLocation: fieldChecked("#roadRescueLiveLocation"),
    vehicleSafe: fieldValue("#roadRescueSafe"),
    year: fieldValue("#roadRescueYear"),
    make: fieldValue("#roadRescueMake"),
    model: fieldValue("#roadRescueModel"),
    color: fieldValue("#roadRescueColor"),
    licensePlate: fieldValue("#roadRescuePlate"),
    vehicleType: fieldValue("#roadRescueVehicleType"),
    impactTime: fieldValue("#roadRescueImpactTime"),
    roadName: fieldValue("#roadRescueRoadName"),
    direction: fieldValue("#roadRescueDirection"),
    lane: fieldValue("#roadRescueLane"),
    weather: fieldValue("#roadRescueWeather"),
    unsafeToDrive: fieldValue("#roadRescueUnsafeToDrive"),
    towed: fieldValue("#roadRescueTowed"),
    potholePhotos: selectedFileSummary("#roadRescuePotholePhotos"),
    damagePhotos: selectedFileSummary("#roadRescueDamagePhotos"),
    positionPhotos: selectedFileSummary("#roadRescuePositionPhotos"),
    dashboardPhotos: selectedFileSummary("#roadRescueDashboardPhotos"),
    serviceRequested: fieldValue("#roadRescueServiceRequested"),
    service_requested: fieldValue("#roadRescueServiceRequested"),
    notes: fieldValue("#roadRescueNotes"),
    status: "New",
    created: "Today"
  };
  request.vehicle = roadRescueVehicleText(request);
  request.photos = roadRescuePhotoSummary(request);
  request.providerNotification = roadRescueProviderNotification(request);
  state.roadRescueRequests.unshift(request);
  addActivity(`Road Rescue request saved: ${request.name} needs ${roadRescueIssueSummary(request)} near ${request.location}.`);
  state.lastConfirmation = {
    type: "road-rescue",
    title: "Forge Road Rescue received your request.",
    body: "Forge Road Rescue received your request. If this is an emergency or anyone is hurt, call 911 now. We are checking for available local providers who can help with your roadside, tire, tow, wheel, or mechanic issue. Please stay in a safe location and upload photos if you can.",
    details: [
      `${request.name} · ${roadRescueIssueSummary(request)}`,
      `${request.location} · ${request.serviceRequested}`,
      `${request.vehicle} · Safe/off road: ${request.vehicleSafe}`
    ],
    nextSteps: [
      "Stay in a safe location and call 911 first if there is injury, traffic danger, or immediate risk",
      "Forge checks for available local roadside, tire, tow, wheel, or mechanic providers",
      "Use the Road Hazard helper after you are safe if you need to document the pothole"
    ],
    primary: { label: "Open Road Rescue", screen: "road-rescue" },
    secondary: { label: "Back Home", screen: "home" }
  };
  saveState();
  sendLead(ROAD_RESCUE_SERVICE_TYPE, request);
  event.target.reset();
  setFieldValue("#roadRescueCity", "Medford");
  setFieldValue("#roadRescueState", "OR");
  showToast("Road Rescue request saved.");
  navigate("confirm");
});

document.querySelector("#autoInquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const vehicle = (state.vehicles || []).find((item) => vehicleTitle(item) === document.querySelector("#autoInquiryVehicle").value) || state.vehicles[0];
  if (!vehicle) return;
  const inquiry = {
    id: `auto-inquiry-${Date.now()}`,
    vehicleId: vehicle.id,
    vehicleTitle: vehicleTitle(vehicle),
    dealerId: vehicle.dealerId || "s-and-a-auto",
    buyer: document.querySelector("#autoBuyerName").value.trim(),
    phone: document.querySelector("#autoBuyerPhone").value.trim(),
    email: document.querySelector("#autoBuyerEmail").value.trim(),
    note: document.querySelector("#autoBuyerNote").value.trim(),
    status: "New",
    created: "Today"
  };
  state.autoInquiries.unshift(inquiry);
  addActivity(`Auto buyer inquiry saved: ${inquiry.buyer} for ${inquiry.vehicleTitle}.`);
  state.lastConfirmation = {
    type: "auto-inquiry",
    title: "Buyer inquiry saved.",
    body: "Forge saved this auto buyer lead so the dealer or seller can follow up.",
    details: [
      `${inquiry.buyer} · ${inquiry.phone}`,
      inquiry.vehicleTitle,
      autoDealerName(inquiry.dealerId)
    ],
    nextSteps: [
      "Forge saves the buyer inquiry in Forge Auto",
      "Copy the inquiry handoff for the dealer partner",
      "Dealer, buyer, and seller verify title, condition, financing, insurance, and payment outside Forge"
    ],
    primary: { label: "Open Forge Auto", screen: "auto" },
    secondary: { label: "Back Home", screen: "home" }
  };
  saveState();
  event.target.reset();
  showToast("Buyer inquiry saved.");
  navigate("confirm");
});

document.querySelector("#homebuildingIntakeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const uploads = document.querySelector("#homebuildingUploads").files?.length || 0;
  const draft = {
    id: `homebuilding-${Date.now()}`,
    name: document.querySelector("#homebuildingName").value.trim(),
    phone: document.querySelector("#homebuildingPhone").value.trim(),
    email: document.querySelector("#homebuildingEmail").value.trim(),
    location: document.querySelector("#homebuildingLocation").value.trim(),
    locationState: document.querySelector("#homebuildingState").value,
    type: document.querySelector("#homebuildingType").value,
    budget: document.querySelector("#homebuildingBudget").value,
    timeline: document.querySelector("#homebuildingTimeline").value,
    stage: document.querySelector("#homebuildingStage").value,
    land: document.querySelector("#homebuildingLand").value,
    plans: document.querySelector("#homebuildingPlans").value,
    uploads: `${uploads} file${uploads === 1 ? "" : "s"} selected`,
    notes: document.querySelector("#homebuildingNotes").value.trim(),
    status: "New Project Lead",
    created: "Today"
  };
  const lead = normalizeHomebuildingLead(draft);
  state.homebuildingLeads.unshift(lead);
  addActivity(`Homebuilding lead saved: ${lead.name} for ${lead.type} in ${lead.location}. Route: ${lead.routingLane}.`);
  state.lastConfirmation = {
    type: "homebuilding",
    title: "Homebuilding request saved.",
    body: `Forge saved this homebuilding project lead and routed it to ${lead.routingLane}.`,
    details: [
      `${lead.type} · ${lead.location}`,
      `${lead.budget} · ${lead.timeline}`,
      `Stage: ${lead.stage} · Lead score: ${lead.leadScore}/100`,
      lead.senecaEligible ? "Major partner review may be eligible after consent and approval checks" : `Status: ${lead.status}`
    ],
    nextSteps: [
      lead.routingLane === "Normal Forge Pros First" ? "Route the repair or handyman request through normal Forge Pros first" : "Review as a major project lead in Admin",
      lead.senecaEligible ? "Keep accepted major leads inside Forge until consent and partner approval flags are true" : "Collect any missing scope details before partner review",
      "All construction and development contracts remain between the client and the approved partner or licensed contractor"
    ],
    primary: { label: "Open Admin", screen: "admin" },
    secondary: { label: "Open Build Tracker", screen: "homebuilding-tracker" }
  };
  saveState();
  sendLead("homebuilding", lead);
  event.target.reset();
  showToast("Homebuilding request saved.");
  navigate("confirm");
});

document.querySelector("#opportunityForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    id: `opportunity-${Date.now()}`,
    name: document.querySelector("#opportunityName").value.trim(),
    phone: document.querySelector("#opportunityPhone").value.trim(),
    email: document.querySelector("#opportunityEmail").value.trim(),
    goal: document.querySelector("#opportunityGoal").value,
    experience: document.querySelector("#opportunityExperience").value,
    location: document.querySelector("#opportunityLocation").value.trim() || "Medford, OR",
    note: document.querySelector("#opportunityNote").value.trim(),
    status: "New",
    created: "Today"
  };
  state.opportunityLeads.unshift(lead);
  addActivity(`Career interest saved: ${lead.name} for ${lead.goal}.`);
  state.lastConfirmation = {
    type: "opportunity",
    title: "Career interest saved.",
    body: "Forge saved this trade school, union, apprenticeship, or blue-collar AI job interest for follow-up.",
    details: [
      `${lead.name} · ${lead.phone}`,
      `${lead.goal} · ${lead.location}`,
      lead.experience
    ],
    nextSteps: [
      "Forge saves the career interest in Admin follow-up",
      "Copy the application plan and confirm official requirements",
      "Applicant submits only through the official school, union, employer, or program channel"
    ],
    primary: { label: "Open Careers", screen: "opportunities" },
    secondary: { label: "Open Admin", screen: "admin" }
  };
  saveState();
  sendLead("opportunity", lead);
  event.target.reset();
  setFieldValue("#opportunityLocation", "Medford, OR");
  showToast("Career interest saved.");
  navigate("confirm");
});

document.querySelector("#workerSignupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const businessGrowthTools = selectedProviderGrowthTools();
  const selectedVertical = serviceVerticalById(fieldValue("#workerServiceVertical")) || serviceVerticalForCategory(fieldValue("#workerTrade"));
  const profileDetails = selectedVertical ? collectServiceDetails("data-provider-profile-field") : {};
  const providerTags = Array.from(document.querySelectorAll("input[name='workerTags']:checked")).map((input) => input.value);
  state.worker = {
    name: document.querySelector("#workerName").value.trim(),
    trade: selectedVertical?.title || document.querySelector("#workerTrade").value.trim(),
    phone: document.querySelector("#workerPhone").value.trim(),
    email: document.querySelector("#workerEmail").value.trim(),
    experience: document.querySelector("#workerExperience").value,
    area: profileDetails.serviceArea || document.querySelector("#workerArea").value,
    serviceArea: profileDetails.serviceArea || document.querySelector("#workerArea").value,
    businessName: profileDetails.businessName || "",
    ownerName: profileDetails.ownerName || document.querySelector("#workerName").value.trim(),
    serviceVertical: selectedVertical?.id || "",
    serviceVerticalTitle: selectedVertical?.title || "",
    providerCategory: selectedVertical?.id || "",
    providerType: fieldValue("#workerProviderType") || selectedVertical?.providerTypes?.[0] || "",
    profileDetails,
    tags: providerTags,
    businessGrowthTools,
    status: "New"
  };
  const existingWorker = state.workers.findIndex((worker) => worker.email.toLowerCase() === state.worker.email.toLowerCase());
  if (existingWorker >= 0) {
    state.workers[existingWorker] = state.worker;
  } else {
    state.workers.unshift(state.worker);
  }
  const providerFlexLead = maybeCreateProviderFlexLead(state.worker, businessGrowthTools);
  addActivity(`New worker lead saved: ${state.worker.name} (${state.worker.trade}).`);
  state.lastConfirmation = {
    type: "worker",
    title: "Your worker profile is on the early list.",
    body: "Forge saved this worker lead so the team can follow up when jobs start moving.",
    details: [
      `${state.worker.name} · ${state.worker.trade}`,
      `${state.worker.area} service area`,
      `${state.worker.experience} experience`,
      selectedVertical ? `${selectedVertical.title} · ${state.worker.providerType || "Provider"}` : "General Forge worker",
      providerFlexLead ? "Capital Desk follow-up flagged" : "No Capital Desk follow-up selected"
    ],
    nextSteps: [
      "Forge saves your worker profile for early access",
      "Admin can follow up when local jobs fit your trade",
      providerFlexLead ? "Forge Capital Desk can follow up before any Flex referral link is sent" : "Open Worker Dashboard to browse jobs and submit bids"
    ],
    primary: { label: "Open Worker Dashboard", screen: "worker" },
    secondary: { label: "Open Admin Leads", screen: "admin" }
  };
  saveState();
  sendLead("worker", state.worker);
  showToast("Worker profile created.");
  navigate("confirm");
});

document.querySelector("#bidForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedJob = state.jobs.find((job) => job.title === document.querySelector("#bidJobSelect").value) || state.jobs[0];
  const bid = {
    id: `${Date.now()}`,
    jobId: selectedJob.id,
    worker: document.querySelector("#bidWorkerName").value.trim(),
    amount: document.querySelector("#bidAmount").value.trim(),
    timeline: document.querySelector("#bidTimeline").value.trim(),
    earliestAvailability: fieldValue("#bidEarliestAvailability"),
    estimatedDuration: fieldValue("#bidDuration"),
    crewMembers: fieldValue("#bidCrewCount"),
    materialsIncluded: fieldValue("#bidMaterialsIncluded"),
    suppliesIncluded: fieldValue("#bidSuppliesIncluded"),
    equipmentIncluded: fieldValue("#bidEquipmentIncluded"),
    dumpFeesIncluded: fieldValue("#bidDumpFeesIncluded"),
    laundryIncluded: fieldValue("#bidLaundryIncluded"),
    restockingIncluded: fieldValue("#bidRestockingIncluded"),
    recurringAvailable: fieldValue("#bidRecurringAvailable"),
    experienceNote: fieldValue("#bidExperienceNote"),
    message: document.querySelector("#bidMessage").value.trim(),
    rating: "New",
    reviews: 0,
    status: "Submitted",
    chosen: false
  };
  state.bids.unshift(bid);
  selectedJob.bids += 1;
  if (isServiceVerticalJob(selectedJob) && ["Open for bids", "New"].includes(selectedJob.status)) selectedJob.status = "Bid submitted";
  else if (selectedJob.status === "New") selectedJob.status = "Matching";
  state.activeJobId = selectedJob.id;
  addActivity(`New bid submitted by ${bid.worker} for ${selectedJob.title}: ${bid.amount}.`);
  state.lastConfirmation = {
    type: "bid",
    title: "Bid submitted.",
    body: "Forge saved this bid and added it to the job detail and admin bid activity.",
    details: [
      `${bid.worker} · ${bid.amount}`,
      selectedJob.title,
      `${bid.timeline} timeline`,
      `${bid.crewMembers || "Crew count pending"} · materials included: ${bid.materialsIncluded || "No"}`
    ],
    nextSteps: [
      "Forge attaches your bid to the selected job",
      "The job poster can compare bids on Job Detail",
      "Messages keep the next schedule handoff visible"
    ],
    primary: { label: "View Job Bids", jobId: selectedJob.id },
    secondary: { label: "Open Admin", screen: "admin" }
  };
  saveState();
  sendLead("bid", bid);
  event.target.reset();
  showToast("Bid submitted.");
  navigate("confirm");
});

document.querySelector("#statusLookupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const rawLookup = document.querySelector("#statusLookup").value;
  const lookup = normalizeLookup(rawLookup);
  statusMatches = state.jobs.filter((job) => {
    return normalizeLookup(job.phone).includes(lookup) || normalizeLookup(job.email).includes(lookup);
  });
  addActivity(`Job status lookup used for ${rawLookup}.`);
  renderStatusResults();
  showToast(statusMatches.length ? "Jobs found." : "No jobs found for that contact.");
});

document.querySelector("#messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveMessageDraft();
});

document.querySelector("#quickLeadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    id: `${Date.now()}`,
    name: document.querySelector("#quickName").value.trim(),
    phone: document.querySelector("#quickPhone").value.trim(),
    email: document.querySelector("#quickEmail").value.trim(),
    type: document.querySelector("#quickType").value,
    priority: document.querySelector("#quickPriority").value,
    note: document.querySelector("#quickNote").value.trim(),
    status: "New",
    created: "Today"
  };
  state.referrals.unshift(lead);
  addActivity(`Quick lead captured: ${lead.name} (${lead.type}).`);
  state.lastConfirmation = {
    type: "referral",
    title: "Lead captured.",
    body: "Forge saved this person in the Admin referral queue.",
    details: [
      `${lead.name} · ${lead.type}`,
      `${lead.priority} priority`,
      lead.phone
    ],
    nextSteps: [
      "Forge saves this person to the referral queue",
      "The lead can appear in Next 10 outreach",
      "Admin can copy, call, text, email, or move it forward"
    ],
    primary: { label: "Open Admin Queue", screen: "admin" },
    secondary: { label: "Capture Another", screen: "capture" }
  };
  saveState();
  sendLead("referral", lead);
  event.target.reset();
  showToast("Quick lead saved.");
  navigate("confirm");
});

["#listingCategory", "#listingBudget", "#listingDate"].forEach((selector) => {
  document.querySelector(selector).addEventListener("change", renderJobs);
});

["#queueTypeFilter", "#queueStatusFilter"].forEach((selector) => {
  document.querySelector(selector).addEventListener("change", renderFollowUpQueue);
});

["#flexStatusFilter", "#flexScoreFilter"].forEach((selector) => {
  document.querySelector(selector).addEventListener("change", renderFlexLeadsAdmin);
});

["#buildingStatusFilter", "#buildingLeadTypeFilter", "#buildingProjectTypeFilter", "#buildingBudgetFilter", "#buildingPartnerEligibilityFilter"].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("change", renderAdminBuildingLeadsPage);
});

const initial = initialScreen();
const demoRole = new URLSearchParams(location.search).get("demo");
const demoAccount = demoAccounts.find((account) => account.role === demoRole);
expireAdminSession(demoAccount);
render();
if (demoAccount) {
  const landing = screenExists(initial) ? initial : demoAccount.screen;
  loginAs(demoAccount.role, demoAccount.name, landing);
} else {
  navigate(screenExists(initial) ? initial : "home");
}
registerServiceWorker();

function initialScreen() {
  const rawHashScreen = location.hash.replace("#", "");
  if (rawHashScreen) {
    const hashScreen = normalizeScreen(rawHashScreen);
    if (screenExists(hashScreen)) return hashScreen;
  }
  return screenByPath[location.pathname] || "home";
}

function expireAdminSession(demoAccount) {
  if (demoAccount?.role === "admin" || state.session.role !== "admin") return;
  state.session = structuredClone(seedState.session);
  state.settings.publicMode = true;
  addActivity("Admin session expired on fresh public load.");
  saveState();
}

function exportCsv(filename, rows) {
  if (!rows.length) {
    showToast("Nothing to export yet.");
    return;
  }
  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast(`${filename} exported.`);
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function addActivity(text) {
  const at = new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  state.activity.unshift({ at, text });
  state.activity = state.activity.slice(0, 50);
}

function saveWebhookSettings() {
  state.settings.webhookUrl = document.querySelector("#webhookUrl").value.trim();
  state.settings.webhookEnabled = document.querySelector("#webhookEnabled").checked;
  if (!state.settings.webhookEnabled || !state.settings.webhookUrl) {
    state.settings.webhookLastStatus = "Local only";
  }
  saveState();
  showToast(state.settings.webhookEnabled ? "Webhook capture enabled." : "Webhook setup saved.");
}

function sendTestWebhook() {
  saveWebhookSettings();
  addActivity("Webhook test lead sent from Admin.");
  saveState();
  sendLead("test", {
    source: "Forge MVP",
    message: "Test lead from Forge admin setup",
    sentAt: new Date().toISOString()
  });
}

async function sendLead(type, payload) {
  if (!state.settings.webhookEnabled || !state.settings.webhookUrl) {
    updateWebhookDelivery("Local only", type);
    return;
  }
  const body = JSON.stringify({ type, payload, app: "Forge MVP", createdAt: new Date().toISOString() });
  try {
    await fetch(state.settings.webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    });
    updateWebhookDelivery("Sent", type);
    addActivity(`${type} lead sent to webhook.`);
    saveState();
    showToast("Lead sent to webhook.");
  } catch {
    try {
      await fetch(state.settings.webhookUrl, { method: "POST", mode: "no-cors", body });
      updateWebhookDelivery("Attempted", type);
      addActivity(`${type} lead attempted via webhook.`);
      saveState();
      showToast("Lead sent to webhook.");
    } catch {
      updateWebhookDelivery("Failed", type);
      addActivity(`${type} lead saved locally; webhook failed.`);
      saveState();
      showToast("Lead saved locally. Webhook did not respond.");
    }
  }
}

function updateWebhookDelivery(status, type) {
  state.settings.webhookLastStatus = status;
  state.settings.webhookLastType = humanize(type || "lead");
  state.settings.webhookLastAt = new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

async function copyInviteText() {
  const base = appBaseUrl();
  const total = totalLeadCount();
  const invite = [
    "Forge is opening the first local launch group in Medford.",
    `Current progress: ${total}/200 early users and warm leads.`,
    "",
    "Can you help with one of these?",
    "1. Post one real job you would actually pay someone to handle.",
    "2. Join the worker list if you want paid local work.",
    "3. Request homebuilding review for a build, ADU, remodel, or contractor partnership.",
    "4. Submit a Forge Projects opportunity for a home project, major renovation, multifamily, mixed-use, commercial, land, or investment-backed project.",
    "5. Book a photographer or videographer for an event, business, family, real estate, or social content need.",
    "6. Request Road Rescue for pothole impact, roadside, tire, tow, wheel, or mechanic help.",
    "7. Ask NorthStar for marketing, CRM, lead follow-up, job tracking, or business operations help.",
    "8. Check Forge Capital Desk if a business owner wants Flex referral options.",
    "9. Send one referral: a homeowner, worker, builder, creative, auto customer, career applicant, or business owner who should see Forge.",
    "",
    `Post a job: ${base}?v=70#post`,
    `Join as worker: ${base}?v=70#signup`,
    `Homebuilding: ${base}/homebuilding?v=70`,
    `Projects: ${base}/projects?v=70`,
    `Build Tracker: ${base}/homebuilding/tracker?v=70`,
    `Road Rescue: ${base}/road-rescue?v=70`,
    `Photography & Videography: ${base}/photography?v=70`,
    `NorthStar Creative Co.: ${base}/northstar-creative?v=70`,
    `Forge Capital Desk: ${base}/forge/capital?v=70`,
    `See Forge: ${base}?v=70#home`
  ].join("\n\n");
  await copyText(invite, "Launch invite copied.");
}

async function copyFirstUserLinks() {
  const base = appBaseUrl();
  const links = [
    "Forge first-user links",
    "",
    "Pick the link that matches why you are coming to Forge:",
    "",
    `Post one real job: ${base}?v=70#post`,
    `Join the worker list: ${base}?v=70#signup`,
    `Request homebuilding review: ${base}/homebuilding?v=70`,
    `Submit a project opportunity: ${base}/projects?v=70`,
    `Open Build Tracker demo: ${base}/homebuilding/tracker?v=70`,
    `Request Road Rescue: ${base}/road-rescue?v=70`,
    `Book Photography & Videography: ${base}/photography?v=70`,
    `Grow a blue-collar business with NorthStar: ${base}/northstar-creative?v=70`,
    `Check Flex options through Forge Capital Desk: ${base}/forge/capital?v=70`,
    `Plan a school, union, or AI job path: ${base}?v=70#opportunities`,
    `Check an existing job: ${base}?v=70#status`,
    `Start at Forge home: ${base}?v=70#home`,
    "",
    "Early access note: Forge saves the right info and follows up by text, phone, or email. No payment is collected in this MVP."
  ].join("\n");
  await copyText(links, "First-user links copied.");
}

async function copySignupChecklist() {
  const base = appBaseUrl();
  const checklist = [
    "Forge first-user signup checklist",
    "",
    "Use Forge with a controlled first-user group today:",
    "",
    "1. Ask one person to post a real job, join the worker list, request homebuilding review, book a creative, or request NorthStar business help.",
    "2. Make sure they know this is early access and no payment is collected in the MVP.",
    "3. Save their contact info, follow-up consent, and the next action.",
    "4. Check Admin after each signup and export a backup before wider outreach.",
    "5. Before public launch, connect hosting, database, authentication, backups, and the final trust and safety workflow.",
    "",
    `Post a job: ${base}?v=70#post`,
    `Join worker list: ${base}?v=70#signup`,
    `Homebuilding: ${base}/homebuilding?v=70`,
    `Projects: ${base}/projects?v=70`,
    `Build Tracker: ${base}/homebuilding/tracker?v=70`,
    `Road Rescue: ${base}/road-rescue?v=70`,
    `Photography & Videography: ${base}/photography?v=70`,
    `NorthStar Creative Co.: ${base}/northstar-creative?v=70`,
    `Training & Careers: ${base}?v=70#opportunities`,
    `Check status: ${base}?v=70#status`,
    `Open admin: ${base}?v=70&demo=admin#admin`
  ].join("\n");
  await copyText(checklist, "Signup checklist copied.");
}

async function copyConfirmationHandoff() {
  const confirmation = state.lastConfirmation || seedState.lastConfirmation;
  const text = [
    confirmationHandoffTitle(confirmation),
    "",
    confirmationHandoffText(confirmation),
    "",
    "Next steps:",
    ...confirmNextSteps(confirmation).map((step, index) => `${index + 1}. ${step}`)
  ].join("\n");
  await copyText(text, "Confirmation handoff copied.");
}

async function copyDemoScript() {
  const script = [
    "Forge quick demo",
    "",
    "1. I want to show you Forge from your side, not just as an app screen.",
    "2. If you need work done, I will open John Smith's homeowner view: job status, bids, messages, and profile status.",
    "3. If you want paid local work, I will open Mike Jones's worker view: jobs, bidding, messages, and readiness.",
    "4. If you are building or improving a home, I will open Homebuilding and the Build Tracker demo: timeline, budget, updates, documents, and change orders.",
    "5. If you are helping operate or refer people, I will open Admin: leads, follow-up queue, reports, and quick capture.",
    "6. The ask is simple: post one real job, request homebuilding review, join as a worker, or introduce one person who should see Forge.",
    "",
    location.href.replace(/#.*$/, "#perspective")
  ].join("\n");
  await copyText(script, "Demo script copied.");
}

async function copyDemoCue(role) {
  const cue = demoCueCards.find((card) => card.role === role) || demoCueCards[0];
  const demoRole = cue.demoRole || cue.role;
  const screen = cue.screen || (demoRole === "customer" ? "status" : demoRole === "worker" ? "worker" : "admin");
  const text = [
    `Forge ${cue.audience.toLowerCase()} demo cue`,
    "",
    `Open: ${cue.opener}`,
    `Proof: ${cue.proof}`,
    `Ask: ${cue.ask}`,
    "",
    roleDemoLink(demoRole, screen)
  ].join("\n");
  await copyText(text, `${cue.audience} cue copied.`);
}

async function copyDemoPack() {
  const base = appBaseUrl();
  const pack = [
    "Forge MVP demo pack",
    "",
    `Start here: ${base}?v=70#perspective`,
    `Homeowner view: ${roleDemoLink("customer", "status")}`,
    `Homeowner readiness: ${roleDemoLink("customer", "profile")}`,
    `Worker view: ${roleDemoLink("worker", "worker")}`,
    `Worker readiness: ${roleDemoLink("worker", "profile")}`,
    `Admin view: ${roleDemoLink("admin", "admin")}`,
    `Admin readiness: ${roleDemoLink("admin", "profile")}`,
    `Training & Careers: ${roleDemoLink("customer", "opportunities")}`,
    `Homebuilding: ${appBaseUrl()}/homebuilding?v=70`,
    `Projects: ${appBaseUrl()}/projects?v=70`,
    `Build Tracker: ${appBaseUrl()}/homebuilding/tracker?v=70`,
    `Forge Auto Services: ${roleDemoLink("customer", "auto")}`,
    `Road Rescue: ${roleDemoLink("customer", "road-rescue")}`,
    `Photography & Videography: ${roleDemoLink("customer", "creative")}`,
    `NorthStar Creative Co.: ${roleDemoLink("customer", "northstar")}`,
    "",
    "Demo order:",
    "1. Open Perspective Demo and ask who they are: job poster, worker, or operator.",
    "2. Show their Profile Status so they understand where they stand.",
    "3. Show the core action: post/check job, browse/bid, or follow up/admin.",
    "4. End with one ask: post a job, join as a worker, request homebuilding review, request auto service, get Road Rescue help, book creative work, request NorthStar help, save career interest, or give one referral.",
    "",
    "Cue cards:",
    ...demoCueCards.map((cue) => `- ${cue.audience}: ${cue.opener} Proof: ${cue.proof} Ask: ${cue.ask}`),
    "",
    "Close ask:",
    closeAskText(),
    "",
    "Current MVP counts:",
    `Jobs: ${state.jobs.length}`,
    `Workers: ${state.workers.length}`,
    `NorthStar Leads: ${(state.northstarLeads || []).length}`,
    `Road Rescue Requests: ${(state.roadRescueRequests || []).length}`,
    `Homebuilding Leads: ${(state.homebuildingLeads || []).length}`,
    `Project Leads: ${(state.projectLeads || []).length}`,
    `Career Leads: ${(state.opportunityLeads || []).length}`,
    `Referrals: ${state.referrals.length}`,
    `Bids: ${state.bids.length}`,
    `Messages: ${state.messages.length}`
  ].join("\n");
  await copyText(pack, "Demo pack copied.");
}

async function copyCloseAsk() {
  await copyText(closeAskText(), "Close ask copied.");
}

async function copyFirst200Plan() {
  const total = totalLeadCount();
  const plan = [
    "Forge first 200 plan",
    "",
    `Current progress: ${total}/200`,
    `Job posters: ${state.jobs.length}/60`,
    `Workers: ${state.workers.length}/60`,
    `NorthStar leads: ${(state.northstarLeads || []).length}/20`,
    `Capital Desk leads: ${(state.flexLeads || []).length}/20`,
    `Homebuilding leads: ${(state.homebuildingLeads || []).length}/25`,
    `Project leads: ${(state.projectLeads || []).length}/25`,
    `Career leads: ${(state.opportunityLeads || []).length}/25`,
    `Referrals: ${state.referrals.length}/30`,
    "",
    "Today:",
    "1. Ask 5 people to post one real job.",
    "2. Ask 5 local workers to join the worker list.",
    "3. Ask 3 people about a home build, ADU, remodel, or contractor partnership.",
    "4. Ask 3 people about home projects, major builds, multifamily, mixed-use, commercial, land, or investment-backed opportunities.",
    "5. Ask 3 service businesses whether NorthStar can help with websites, branding, CRM, lead follow-up, job tracking, or operations.",
    "6. Ask 3 business owners whether they need breathing room around cash flow, bill pay, vendor payments, employee cards, or working capital.",
    "7. Ask 3 people about trade school, union, apprenticeship, or AI field work.",
    "8. Ask every interested person for one referral.",
    "",
    "Use this link to start demos:",
    roleDemoLink("admin", "perspective")
  ].join("\n");
  await copyText(plan, "First 200 plan copied.");
}

function closeAskText() {
  return [
    "Forge is ready for early local feedback.",
    "Can you help with one of these today?",
    "1. Post one real job you would actually pay someone to handle.",
    "2. Join the worker list if you want paid local work.",
    "3. Request a homebuilding review for a build, ADU, remodel, or contractor partnership.",
    "4. Submit a Forge Projects opportunity for a home project or major build.",
    "5. Request Road Rescue for pothole impact, flat tire, tow, wheel, alignment, or mechanic help.",
    "6. Request NorthStar help for a website, brand, social media, ads, CRM, lead follow-up, job tracking, or business operations.",
    "7. Check Capital Desk options if your business needs breathing room around cash flow, vendor payments, cards, bill pay, or growth capital.",
    "8. Save your training, union, apprenticeship, or AI field-job goal.",
    "9. Send me one person who needs jobs done, wants work, needs road help, needs a homebuilding path, has a project opportunity, needs Capital Desk, needs NorthStar, or needs a career path.",
    "I will follow up with the right Forge link for your side."
  ].join("\n");
}

function perspectiveLink(role) {
  const card = perspectiveCards.find((item) => item.role === role) || perspectiveCards[0];
  return roleDemoLink(card.role, card.landing);
}

function roleDemoLink(role, screen) {
  const normalizedScreen = normalizeScreen(screen);
  const base = appBaseUrl();
  const demoQuery = `?v=70&demo=${encodeURIComponent(role)}`;
  if (routeByScreen[normalizedScreen] && location.protocol !== "file:") {
    return `${base}${routeByScreen[normalizedScreen]}${demoQuery}`;
  }
  return `${base}${demoQuery}#${normalizedScreen === "autos" ? "auto" : normalizedScreen}`;
}

async function copyDemoLink(role, screen, label = "Demo link") {
  await copyText(roleDemoLink(role, screen), `${label} copied.`);
}

async function copyPerspectiveLink(role) {
  const card = perspectiveCards.find((item) => item.role === role) || perspectiveCards[0];
  await copyText(perspectiveLink(card.role), `${card.name} demo link copied.`);
}

async function copyText(text, message = "Copied.") {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "fixed";
    helper.style.left = "-999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  showToast(message);
}

function saveMessageDraft() {
  const active = getMessageThreads().find((thread) => thread.id === state.activeMessageThreadId);
  const body = document.querySelector("#messageBody").value.trim();
  if (!active || !body) return;
  const message = {
    id: `${Date.now()}`,
    threadId: active.id,
    to: active.to,
    from: state.session.name || "Forge Admin",
    body,
    sentAt: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }),
    status: "Sent"
  };
  state.messages.unshift(message);
  addActivity(`Message saved to ${message.to}: ${active.title}.`);
  saveState();
  renderMessages();
  showToast("Message saved in Forge.");
}

function copyMessageDraft() {
  const body = document.querySelector("#messageBody")?.value.trim();
  if (!body) {
    showToast("No message draft to copy.");
    return;
  }
  copyText(body, "Message draft copied.");
}

function jobTemplate(job) {
  if (!job) return "No job leads yet.";
  if (isCreativeJob(job)) {
    return `Hi ${job.customer || "there"}, this is Forge. I saved your ${job.projectType || "photography and videography"} request for ${job.location}. Are you still looking for ${job.mediaType || "creative"} coverage around ${job.desiredDate || job.urgency || "your target date"} with a ${job.budget} budget?`;
  }
  return `Hi ${job.customer || "there"}, this is Forge. I saw your ${job.title} request in ${job.location}. We are matching early local pros now. Can you confirm the best time to talk and whether your budget is still ${job.budget}?`;
}

function workerJobMessage(job) {
  const worker = findWorkerByName(state.session.name) || state.worker;
  return `Hi ${job.customer || "there"}, this is ${worker.name} from Forge. I saw your ${job.title} job in ${job.location}. I can help with this and can send a clear price and timeline. Is the job still available?`;
}

function customerJobMessage(job) {
  const bids = state.bids.filter((bid) => bid.jobId === job.id);
  const bidSummary = bids.length ? `${bids.length} bid${bids.length === 1 ? "" : "s"} showing in Forge` : "no bids showing yet";
  return `Hi Forge, this is ${job.customer}. I am checking on my ${job.title} job. I see ${bidSummary}. Please help me move this forward.`;
}

function workerTemplate(worker) {
  if (!worker) return "No worker leads yet.";
  if (isCreativeProvider(worker)) {
    return `Hi ${worker.name}, this is Forge. Thanks for applying as a ${worker.discipline || "photography and videography"} provider in ${worker.area}. Can you confirm your availability, portfolio link, and the types of shoots you want Forge to route to you?`;
  }
  return `Hi ${worker.name}, this is Forge. Thanks for joining the early worker list as a ${worker.trade}. We are onboarding local pros in ${worker.area}. Are you available for paid jobs this week?`;
}

function creativeLeadLines(lead) {
  if (!lead) return ["No creative lead selected."];
  return [
    "Forge creative lead",
    `${lead.customer} - ${lead.projectType || lead.title}`,
    `Category: ${CREATIVE_CATEGORY_VALUE}`,
    `Category slug: ${lead.categorySlug || CREATIVE_CATEGORY_SLUG}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `City: ${lead.city || "Not provided"}`,
    `Shoot location: ${lead.shootLocation || lead.location}`,
    `Desired date: ${lead.desiredDate || lead.urgency || "Flexible"}`,
    `Shoot start time: ${lead.shootStartTime || "Not provided"}`,
    `Estimated duration: ${lead.estimatedDuration || "Not provided"}`,
    `Delivery deadline: ${lead.deliveryDeadline || "Not provided"}`,
    `Budget: ${lead.budget}`,
    `Photo/video: ${lead.mediaType || "Not provided"}`,
    `Venue: ${lead.venueName || "Not provided"}`,
    `Guest count: ${lead.guestCount || "Not provided"}`,
    `Locations: ${lead.numberOfLocations || "Not provided"}`,
    `Indoor/outdoor: ${lead.indoorOutdoor || "Not sure"}`,
    `Style preference: ${lead.stylePreference || "Not provided"}`,
    `Second shooter: ${lead.secondShooterNeeded || "Not sure"}`,
    `Drone requested: ${lead.droneRequested || "Not sure"}`,
    `Raw footage: ${lead.rawFootageRequested || "Not sure"}`,
    `Social clips: ${lead.socialClipsRequested || "Not sure"}`,
    `Same-day preview: ${lead.sameDayPreviewRequested || "Not sure"}`,
    lead.inspirationLink ? `Inspiration link: ${lead.inspirationLink}` : "Inspiration link: Not provided",
    `Uploads: ${lead.inspirationUploads || "0 files selected"}`,
    `Status: ${creativeStatusText(lead.creativeStatus || lead.status)}`,
    `Terms accepted: ${lead.termsAccepted ? "Yes" : "No"}`,
    `Privacy acknowledged: ${lead.privacyAcknowledged ? "Yes" : "No"}`,
    `Shot list: ${lead.shotList || "Not provided"}`,
    `Description: ${lead.description || "No description saved."}`,
    "Privacy: customer contact information is for Forge booking and provider matching only."
  ];
}

function creativeProviderLines(provider) {
  if (!provider) return ["No creative provider selected."];
  return [
    "Forge creative provider application",
    `${provider.name} - ${provider.discipline || CREATIVE_CATEGORY_LABEL}`,
    `Provider category: ${CREATIVE_CATEGORY_VALUE}`,
    `Category slug: ${provider.categorySlug || CREATIVE_CATEGORY_SLUG}`,
    `Business: ${provider.businessName || "Not provided"}`,
    `Phone: ${provider.phone}`,
    provider.email ? `Email: ${provider.email}` : "Email: Not provided",
    `City: ${provider.city || "Not provided"}`,
    `Service area: ${provider.area || provider.service_area || "Not provided"}`,
    `Experience: ${provider.experience || "Not provided"}`,
    `Portfolio: ${provider.portfolioLink || "Not provided"}`,
    `Social: ${provider.socialLink || "Not provided"}`,
    `Services offered: ${provider.servicesOffered || provider.shootTypes || "Not provided"}`,
    `Availability: ${provider.availability || "Not provided"}`,
    `Starting rate: ${provider.startingRate || "Not provided"}`,
    `Gear summary: ${provider.gearSummary || provider.equipmentNotes || "Not provided"}`,
    `Editing software: ${provider.editingSoftware || "Not provided"}`,
    `Wedding experience: ${provider.weddingExperience || "Not provided"}`,
    `Event experience: ${provider.eventExperience || "Not provided"}`,
    `Real estate experience: ${provider.realEstateExperience || "Not provided"}`,
    `Product experience: ${provider.productExperience || "Not provided"}`,
    `Drone capability: ${provider.droneCapability || "Not provided"}`,
    `Drone certification upload: ${provider.droneCertificationUpload || "0 files selected"}`,
    `Insurance upload: ${provider.insuranceUpload || "0 files selected"}`,
    `Sample galleries: ${provider.sampleGalleryLinks || "Not provided"}`,
    `Video reel: ${provider.videoReelLink || "Not provided"}`,
    `Profile photo: ${provider.profilePhotoUpload || "0 files selected"}`,
    `Bio: ${provider.bio || "Not provided"}`,
    `Insurance/licensing notes: ${provider.insuranceNotes || "Not provided"}`,
    `Provider terms accepted: ${provider.providerTermsAccepted || provider.termsAccepted ? "Yes" : "No"}`,
    `Privacy acknowledged: ${provider.privacyAcknowledged ? "Yes" : "No"}`,
    `Featured: ${provider.featured ? "Yes" : "No"}`,
    `Status: ${creativeStatusText(provider.providerStatus || provider.status)}`
  ];
}

function copyCreativeLead(id) {
  const lead = state.jobs.find((job) => job.id === id && isCreativeJob(job));
  copyText(creativeLeadLines(lead).join("\n"), "Creative lead copied.");
}

function copyCreativeProvider(email) {
  const provider = state.workers.find((worker) => worker.email === email && isCreativeProvider(worker));
  copyText(creativeProviderLines(provider).join("\n"), "Creative provider copied.");
}

function copyCreativeQueue() {
  const leads = state.jobs.filter(isCreativeJob);
  const providers = state.workers.filter(isCreativeProvider);
  const lines = [
    "Forge Photography & Videography queue",
    `${leads.length} creative request${leads.length === 1 ? "" : "s"} saved.`,
    `${providers.length} creative provider application${providers.length === 1 ? "" : "s"} saved.`,
    "",
    ...leads.flatMap((lead) => [...creativeLeadLines(lead), ""]),
    ...providers.flatMap((provider) => [...creativeProviderLines(provider), ""])
  ];
  copyText(lines.join("\n"), "Creative queue copied.");
}

function copyCreativeBrief() {
  const lines = [
    "Forge Photography & Videography brief",
    "Headline: Photography & Videography",
    "Positioning: Forge helps customers in Medford and surrounding areas book trusted local creatives for weddings, events, business content, real estate, social media, family shoots, church/community events, music videos, and creative content.",
    "Provider note: Forge helps customers connect with approved local creative providers after portfolio, availability, terms, and safety review.",
    `Customer category value: ${CREATIVE_CATEGORY_VALUE}`,
    `Creative requests: ${state.jobs.filter(isCreativeJob).length}`,
    `Creative providers: ${state.workers.filter(isCreativeProvider).length}`,
    `Open Photography & Videography: ${roleDemoLink("customer", "creative")}`
  ];
  copyText(lines.join("\n"), "Creative brief copied.");
}

function northstarLeadText(lead) {
  if (!lead) return "No NorthStar leads yet.";
  const services = (lead.servicesNeeded || []).join(", ") || "marketing and operations help";
  return [
    `Hi ${lead.name || "there"}, this is NorthStar Creative Co. through Forge.`,
    `I saved your request for ${lead.businessName || "your business"} around ${lead.city || "your area"}.`,
    `You mentioned ${services} with a ${lead.budget || "not sure yet"} budget.`,
    `Next step: scope the biggest problem (${lead.problem || "not provided"}) and the 30-90 day goal (${lead.goal || "not provided"}), then recommend the right website, branding, CRM, lead follow-up, job tracking, or operations package.`,
    "Can you confirm the best time to talk through it?"
  ].join(" ");
}

function northstarLeadLines(lead) {
  if (!lead) return ["No NorthStar lead selected."];
  return [
    "Forge NorthStar Creative Co. lead",
    `${lead.businessName} - ${lead.trade}`,
    `Lead category: ${lead.category || NORTHSTAR_CATEGORY_VALUE}`,
    `Operations category: ${lead.secondaryCategory || NORTHSTAR_OPERATIONS_CATEGORY_VALUE}`,
    `Owner/contact: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `City: ${lead.city || "Not provided"}`,
    `Website: ${lead.website || "Not provided"}`,
    `Social: ${lead.social || "Not provided"}`,
    `Services needed: ${(lead.servicesNeeded || []).join(", ") || "Not provided"}`,
    `Budget: ${lead.budget || "Not provided"}`,
    `Problem: ${lead.problem || "Not provided"}`,
    `30-90 day goal: ${lead.goal || "Not provided"}`,
    `Status: ${lead.status || "New"}`,
    `Consent captured: ${lead.consent ? "Yes" : "No"}`,
    `Admin notes: ${lead.adminNotes || "No admin notes saved."}`,
    "Route: NorthStar Creative Co. reviews marketing and operations needs, then scopes websites, branding, social, ads, CRM, lead follow-up, job tracking, or business-system support.",
    "Boundary: keep payment details, ad-account passwords, CRM credentials, and private customer lists outside this browser-only MVP."
  ];
}

function copyNorthStarLead(id) {
  const lead = (state.northstarLeads || []).find((item) => item.id === id);
  copyText(northstarLeadLines(lead).join("\n"), "NorthStar lead copied.");
}

function copyNorthStarQueue() {
  const leads = state.northstarLeads || [];
  const lines = [
    "Forge NorthStar Creative Co. queue",
    "",
    leads.length ? `${leads.length} NorthStar lead${leads.length === 1 ? "" : "s"} saved.` : "No NorthStar leads yet.",
    "",
    ...leads.flatMap((lead) => [...northstarLeadLines(lead), ""])
  ];
  copyText(lines.join("\n"), "NorthStar queue copied.");
}

function copyNorthStarBrief() {
  const lines = [
    "NorthStar Creative Co. brief",
    "",
    "Headline: Grow Your Blue-Collar Business With NorthStar Creative Co.",
    "Subheadline: Websites, branding, social media, ads, CRM, lead follow-up, job tracking, and business operations built for local service businesses.",
    "Positioning: Forge can send leads, and NorthStar helps local service businesses capture those leads, follow up, book the work, collect reviews, and build a professional brand.",
    `Primary category: ${NORTHSTAR_CATEGORY_VALUE}`,
    `Operations category: ${NORTHSTAR_OPERATIONS_CATEGORY_VALUE}`,
    "",
    "Marketing services:",
    ...northstarMarketingServices.map((service) => `- ${service}`),
    "",
    "Business operations services:",
    ...northstarOperationsServices.map((service) => `- ${service}`),
    "",
    "Packages:",
    ...northstarPackages.map((item) => `- ${item.name}: ${item.fit}`),
    "",
    `NorthStar leads: ${(state.northstarLeads || []).length}`,
    `Open NorthStar: ${roleDemoLink("customer", "northstar")}`
  ];
  copyText(lines.join("\n"), "NorthStar brief copied.");
}

function flexOutreachText(lead) {
  if (!lead) return "No Flex leads yet.";
  return [
    `Hi ${lead.owner_name || "there"}, this is Forge Capital Desk.`,
    `I saved your request for ${lead.business_name || "your business"} around ${lead.city || "your area"}.`,
    `You mentioned ${lead.primary_need || "business finance tools"} and a monthly spend range of ${lead.monthly_spend_range || "not provided"}.`,
    "Forge is not a bank, lender, broker, underwriter, or credit decision maker. If you still want finance partner review, Forge must confirm consent and approval gates before any configured handoff.",
    "Can you confirm the best time to talk?"
  ].join(" ");
}

function flexLeadLines(lead) {
  if (!lead) return ["No Flex lead selected."];
  return [
    "Forge Capital Desk Flex lead",
    `${lead.business_name} - ${lead.owner_name}`,
    `Source: forge_capital_desk`,
    `Partner: flex`,
    `Mode: ${FLEX_PARTNER_MODE}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email}`,
    `City/state: ${lead.city || "Not provided"}${lead.state ? `, ${lead.state}` : ""}`,
    `Industry: ${lead.industry}`,
    `Website: ${lead.website || "Not provided"}`,
    `Years in business: ${lead.years_in_business || "Not provided"}`,
    `Monthly revenue: ${lead.monthly_revenue_range || "Not provided"}`,
    `Monthly spend: ${lead.monthly_spend_range || "Not provided"}`,
    `Employees: ${lead.employee_count || "Not provided"}`,
    `Primary need: ${lead.primary_need || "Not provided"}`,
    `Lead score: ${lead.lead_score}`,
    `Status: ${flexStatusLabel(lead.status)}`,
    `Consent to contact: ${lead.consent_to_contact ? "Yes" : "No"}`,
    `Consent to receive Flex referral: ${lead.consent_to_receive_flex_referral ? "Yes" : "No"}`,
    `Interested in Forge services: ${lead.interested_in_forge_services ? "Yes" : "No"}`,
    `Interested in NorthStar marketing: ${lead.interested_in_north_star_marketing ? "Yes" : "No"}`,
    `Interested in payment processing: ${lead.interested_in_payment_processing ? "Yes" : "No"}`,
    `Flex referral URL sent: ${lead.flex_referral_url_sent || "Not sent"}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    FLEX_COMPLIANCE_COPY
  ];
}

function copyFlexOutreach(id) {
  const lead = id ? (state.flexLeads || []).find((item) => item.id === id) : null;
  if (!lead) {
    copyText([
      "Forge Capital Desk",
      "",
      "Business owners need breathing room. If your business is juggling cash flow, bill pay, vendor payments, employee cards, materials, equipment, payroll timing, or working capital, Forge can collect the request and help determine whether a Flex referral is a fit.",
      "",
      "Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Approved finance partners handle eligibility, approval, fees, terms, onboarding, activation, and support."
    ].join("\n"), "Capital Desk message copied.");
    return;
  }
  copyText(flexOutreachText(lead), "Flex outreach message copied.");
}

function copyFlexQueue() {
  const leads = state.flexLeads || [];
  const lines = [
    "Forge Capital Desk Flex queue",
    "",
    leads.length ? `${leads.length} Flex lead${leads.length === 1 ? "" : "s"} saved.` : "No Flex leads yet.",
    "",
    ...leads.flatMap((lead) => [...flexLeadLines(lead), ""])
  ];
  copyText(lines.join("\n"), "Flex queue copied.");
}

function copyFlexBrief() {
  const lines = [
    "Forge Capital Desk brief",
    "",
    "Title: Business owners need breathing room.",
    "Subtitle: Forge Capital Desk helps contractors, service businesses, auto shops, transport companies, creatives, and local operators request review for modern business finance tools through approved finance partners when available.",
    "",
    "How it works:",
    "1. Tell Forge what your business needs.",
    "2. Forge checks whether you look like a fit.",
    "3. Forge confirms consent, partner approval, and data-sharing approval before any configured handoff.",
    "4. You apply directly with Flex.",
    "5. Approved finance partners handle approval, onboarding, activation, and support.",
    "6. Forge can also help with leads, marketing, websites, CRM, hiring, and operations.",
    "",
    FLEX_COMPLIANCE_COPY,
    "",
    `Open Capital Desk: ${roleDemoLink("customer", "capital")}`
  ];
  copyText(lines.join("\n"), "Capital Desk brief copied.");
}

function referralTemplate(lead) {
  if (!lead) return "No referral leads yet.";
  return `Hey ${lead.name}, this is Forge. Good meeting you. I saved your info because you mentioned: ${lead.note || lead.type}. Can I text you the early access link and follow up tomorrow?`;
}

function homebuildingLeadText(lead) {
  if (!lead) return "No homebuilding leads yet.";
  return [
    `Hi ${lead.name}, this is Forge.`,
    `I saved your ${lead.type} request around ${lead.location}.`,
    `Route: ${lead.routingLane || "Homebuilding Review"} with lead score ${lead.leadScore ?? "N/A"}/100.`,
    `Next step: review project stage (${lead.stage}), land status (${lead.land}), plans (${lead.plans}), budget (${lead.budget}), and timeline (${lead.timeline}).`,
    lead.senecaEligible ? "This lead may be eligible for approved major-partner review after consent and approval checks." : "This lead is not currently eligible for major partner review based on state and score.",
    "Forge pre-screens qualified project leads. Approved partners may accept or decline referred major leads. Any referral or success fee requires a separate written agreement.",
    "All construction and development contracts remain between the client and the approved partner or licensed contractor. Forge is not the contractor of record.",
    "Sensitive documents or payment details should stay outside this MVP.",
    "Can you confirm the best time to talk through the project?"
  ].join(" ");
}

function projectLeadText(lead) {
  return projectLeadFollowUpText(lead);
}

function opportunityLeadText(lead) {
  if (!lead) return "No career leads yet.";
  return [
    `Hi ${lead.name}, this is Forge.`,
    `I saved your interest in ${lead.goal} around ${lead.location}.`,
    "Next step: we can help organize requirements, deadlines, contact info, and follow-up questions, but official applications must happen directly with the school, union, apprenticeship, employer, or program.",
    "Can you confirm the best time to talk and what path you want to prioritize first?"
  ].join(" ");
}

function homebuildingLeadLines(lead) {
  return [
    "Forge homebuilding lead",
    `${lead.name} - ${lead.type}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `Location: ${lead.location}`,
    `State: ${lead.locationState || "Not provided"}`,
    `Budget: ${lead.budget}`,
    `Timeline: ${lead.timeline}`,
    `Stage: ${lead.stage}`,
    `Land: ${lead.land}`,
    `Plans: ${lead.plans}`,
    `Route: ${lead.routingLane || "Homebuilding Review"}`,
    `Lead score: ${lead.leadScore ?? "N/A"}/100`,
    `Major partner review option: ${lead.senecaEligible ? "Potentially eligible after consent and approval checks" : "Not available"}`,
    `Uploads: ${lead.uploads || "0 files selected"}`,
    `Status: ${lead.status}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    "Forge role: collect qualified project leads, pre-screen the lead, and keep accepted major leads inside Forge until consent and approved-partner gates pass.",
    "Partner role: choose accept or decline review. Any referral or success fee requires a separate written agreement.",
    "Contract boundary: all construction/development contracts remain between the client and the approved partner or licensed contractor. Forge is not the contractor of record.",
    "Safety boundary: no IDs, payment info, passwords, or sensitive official documents go into Forge MVP."
  ];
}

function projectLeadLines(lead) {
  return [
    "Forge project lead",
    `${lead.projectTitle} - ${projectOptionLabel(projectTypeOptions, lead.projectType)}`,
    `Contact: ${lead.contactName}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `Property: ${lead.propertyAddress || "Address not provided"}`,
    `City/state/county: ${lead.city}, ${lead.state}${lead.county ? `, ${lead.county}` : ""}`,
    `Budget: ${projectOptionLabel(budgetRangeOptions, lead.budgetRange)}`,
    `Timeline: ${lead.timeline}`,
    `Stage: ${projectOptionLabel(projectStageOptions, lead.projectStage)}`,
    `Owns property: ${lead.ownsProperty}`,
    `Has plans: ${lead.hasPlans}`,
    `Has permits: ${lead.hasPermits}`,
    `Needs financing: ${lead.needsFinancing}`,
    `Preferred contact: ${lead.preferredContactMethod}`,
    `Consent to share with partner: ${lead.consentToShareWithPartner ? "Yes" : "No"}`,
    `Route: ${lead.route}`,
    `Status: ${projectStatusLabel(lead.status)}`,
    `Photos: ${lead.uploadPhotos || "0 photos selected"}`,
    `Documents: ${lead.uploadDocuments || "0 documents selected"}`,
    `Description: ${lead.projectDescription || "No description saved."}`,
    `Admin note: ${lead.adminNote || "No admin note saved."}`,
    "Forge role: lead marketplace and project coordinator, not contractor of record.",
    "Contractor requirement: verify license and insurance before any contractor accepts construction work.",
    "Partner sharing: requires user consent and written partner agreement.",
    "Partner marketing: requires written permission before using partner names, logos, testimonials, or case studies.",
    isSenecaPartnerApproved() ? "Major partner flag: approved in this app state." : "Major partner flag: draft/unapproved; do not present any named partner as official or approved."
  ];
}

function buildingLeadFollowUpText(lead) {
  if (!lead) return "No Building leads yet.";
  return [
    `Hi ${lead.ownerName || lead.businessName || "there"}, this is Forge.`,
    `I saved your Building request: ${lead.projectTitle}.`,
    `Route: ${lead.route} (${buildingStatusLabel(lead.status)}).`,
    `Scope: ${projectOptionLabel(buildingProjectTypeOptions, lead.projectType)} in ${lead.city || "city pending"}, ${lead.state}; budget ${projectOptionLabel(buildingBudgetRangeOptions, lead.budgetRange)}; stage ${projectOptionLabel(buildingProjectStageOptions, lead.projectStage)}.`,
    lead.consentToShareWithApprovedPartners ? "You gave consent for Forge to share details with approved third-party partners only if partner review is chosen." : "Forge does not have consent to share this with third-party partners.",
    buildingPartnerReadinessText(lead),
    BUILDING_COMPLIANCE_COPY,
    "Can you confirm the best time to review the request?"
  ].join(" ");
}

function buildingLeadLines(lead) {
  const normalized = normalizeBuildingLead(lead);
  return [
    "Forge Building lead",
    `${normalized.projectTitle} - ${projectOptionLabel(buildingProjectTypeOptions, normalized.projectType)}`,
    `Lead type: ${projectOptionLabel(buildingLeadTypeOptions, normalized.leadType)}`,
    `Owner/contact: ${normalized.ownerName || "Not provided"}`,
    `Business: ${normalized.businessName || "Not provided"}`,
    `Phone: ${normalized.phone}`,
    normalized.email ? `Email: ${normalized.email}` : "Email: Not provided",
    `Property: ${normalized.propertyAddress || "Address not provided"}`,
    `City/state/county/zip: ${normalized.city || "Pending"}, ${normalized.state}${normalized.county ? `, ${normalized.county}` : ""}${normalized.zip ? ` ${normalized.zip}` : ""}`,
    `Budget: ${projectOptionLabel(buildingBudgetRangeOptions, normalized.budgetRange)}`,
    `Timeline: ${normalized.timeline}`,
    `Stage: ${projectOptionLabel(buildingProjectStageOptions, normalized.projectStage)}`,
    `Owns property: ${normalized.ownsProperty}`,
    `Has plans: ${normalized.hasPlans}`,
    `Has permits: ${normalized.hasPermits}`,
    `Needs financing: ${normalized.needsFinancing}`,
    `Finance need: ${projectOptionLabel(financeNeedOptions, normalized.financeNeed)}`,
    `Preferred contact: ${normalized.preferredContactMethod}`,
    `Consent to review: ${normalized.consentToReview ? "Yes" : "No"}`,
    `Consent to contact: ${normalized.consentToContact ? "Yes" : "No"}`,
    `Consent to share with approved partners: ${normalized.consentToShareWithApprovedPartners ? "Yes" : "No"}`,
    `Route: ${normalized.route}`,
    `Partner eligibility: ${normalized.partnerEligibility}`,
    `Status: ${buildingStatusLabel(normalized.status)}`,
    `Assigned partner: ${normalized.assignedPartnerId || "None"}`,
    `Commissionable: ${normalized.assignedPartnerId && partnerCommissionAllowed((state.partners || []).find((partner) => partner.id === normalized.assignedPartnerId)) ? "Potentially, agreement flag present" : "No"}`,
    `Description: ${normalized.projectDescription || "No description saved."}`,
    `Admin notes: ${normalized.adminNotes || "No admin notes saved."}`,
    "Partner sharing rule: customer consent and approved data-sharing flags are required before any third-party send.",
    "Public language rule: Seneca and Flex remain draft/admin-only until approval and public-display flags are true.",
    BUILDING_COMPLIANCE_COPY
  ];
}

function buildingLeadText(lead) {
  return buildingLeadFollowUpText(lead);
}

function copyJobDirect(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  copyText(jobTemplate(job), "Job follow-up copied.");
}

function copyOpportunityPlan() {
  const lines = [
    "Forge opportunity application plan",
    "",
    "Use this for people who want help applying to blue-collar schools, trade unions, apprenticeships, or AI-enabled field jobs.",
    "",
    "Tracks:",
    ...opportunityTracks.map((track) => `- ${track.name}: ${track.examples} Next: ${track.next}`),
    "",
    "Safe MVP route:",
    ...opportunitySteps.map(([num, title, body]) => `${num}. ${title}: ${body}`),
    "",
    "Boundary: do not collect IDs, transcripts, Social Security numbers, payment info, passwords, or official documents inside Forge.",
    `Open Training & Careers: ${roleDemoLink("customer", "opportunities")}`
  ];
  copyText(lines.join("\n"), "Opportunity application plan copied.");
}

function copyOpportunityLead(id) {
  const lead = (state.opportunityLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(opportunityLeadLines(lead).join("\n"), "Career lead copied.");
}

function copyOpportunityLeads() {
  const leads = state.opportunityLeads || [];
  const lines = [
    "Forge career lead queue",
    "",
    leads.length ? `${leads.length} career lead${leads.length === 1 ? "" : "s"} saved.` : "No career leads yet.",
    "",
    ...leads.flatMap((lead) => [...opportunityLeadLines(lead), ""])
  ];
  copyText(lines.join("\n"), "Career lead queue copied.");
}

function opportunityLeadLines(lead) {
  return [
    "Forge career opportunity lead",
    `${lead.name} - ${lead.goal}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `Location: ${lead.location}`,
    `Experience: ${lead.experience}`,
    `Status: ${lead.status}`,
    `Note: ${lead.note || "No note saved."}`,
    "Next step: confirm path, collect official application requirements, and send them to the school, union, apprenticeship, employer, or program website.",
    "Safety boundary: no IDs, transcripts, SSNs, payment info, passwords, or official documents go into Forge MVP."
  ];
}

function copyAutoServiceRequest(id) {
  const request = (state.autoRequests || []).find((item) => item.id === id);
  if (!request) return;
  copyText(autoServiceRequestLines(request).join("\n"), "Auto service request copied.");
}

function copyAutoServiceQueue() {
  const requests = state.autoRequests || [];
  const lines = [
    "Forge Auto service request queue",
    "",
    requests.length ? `${requests.length} auto service request${requests.length === 1 ? "" : "s"} saved.` : "No auto service requests yet.",
    "",
    ...requests.flatMap((request) => [...autoServiceRequestLines(request), ""])
  ];
  copyText(lines.join("\n"), "Auto service queue copied.");
}

function autoServiceRequestLines(request) {
  return [
    "Forge Auto service request",
    `${request.name} - ${request.service}`,
    `Phone: ${request.phone}`,
    request.email ? `Email: ${request.email}` : "Email: Not provided",
    `Vehicle: ${request.vehicle}`,
    `Mileage: ${request.mileage}`,
    `Location: ${request.location}`,
    `Urgency: ${request.urgency}`,
    `Photos: ${request.photos || "0 photos selected"}`,
    `Status: ${request.status}`,
    `Notes: ${request.notes || "No notes saved."}`,
    "Route: mechanic, detailing, customization, transport, inspection, fleet, or dealer partner based on the requested work.",
    "Compliance boundary: vehicle sales, financing, repair, towing, transport, and insurance-related work must be performed by properly licensed or qualified partners where required."
  ];
}

function roadRescueIssueSummary(request) {
  const labels = request?.issueLabels?.length ? request.issueLabels : (request?.issueTypes || []).map((issue) => humanize(String(issue).replaceAll("_", " ")));
  return labels.length ? labels.join(", ") : humanize(String(request?.issue_type || "road help").replaceAll("_", " "));
}

function roadRescueVehicleText(request) {
  const yearMakeModel = [request?.year, request?.make, request?.model].filter(Boolean).join(" ");
  return [yearMakeModel || request?.vehicleType || "Vehicle", request?.color, request?.licensePlate ? `Plate ${request.licensePlate}` : ""].filter(Boolean).join(" · ");
}

function roadRescuePhotoSummary(request) {
  return [
    `Pothole: ${request.potholePhotos || "0 photos selected"}`,
    `Damage: ${request.damagePhotos || "0 photos selected"}`,
    `Position: ${request.positionPhotos || "0 photos selected"}`,
    `Dash: ${request.dashboardPhotos || "0 photos selected"}`
  ].join("; ");
}

function roadRescueProviderNotification(request) {
  return `New Forge Road Rescue lead: ${roadRescueIssueSummary(request)} near ${request.location || "location pending"}. Vehicle: ${roadRescueVehicleText(request)}. Customer requested: ${request.serviceRequested || "Road help"}. Respond quickly if available.`;
}

function roadRescueCustomerText(request) {
  if (!request) return "No Road Rescue requests yet.";
  return `Hi ${request.name}, this is Forge Road Rescue. We received your ${roadRescueIssueSummary(request)} request near ${request.location}. If this is an emergency or anyone is hurt, call 911 now. Please stay somewhere safe while Forge checks for available local providers for ${request.serviceRequested || "roadside help"}.`;
}

function roadRescueRequestLines(request) {
  return [
    "Forge Road Rescue request",
    `${request.name} - ${roadRescueIssueSummary(request)}`,
    `Phone: ${request.phone}`,
    request.email ? `Email: ${request.email}` : "Email: Not provided",
    `Preferred contact: ${request.preferredContact}`,
    `Emergency: ${request.emergency}`,
    `Location: ${request.location}`,
    `Landmark: ${request.landmark || "Not provided"}`,
    `City/state/zip: ${request.city || "City pending"}, ${request.state || "State pending"} ${request.zip || ""}`.trim(),
    `Vehicle safe/off road: ${request.vehicleSafe}`,
    `Vehicle: ${roadRescueVehicleText(request)}`,
    `Issue type values: ${(request.issueTypes || [request.issue_type]).join(", ")}`,
    `Service requested: ${request.serviceRequested}`,
    `Impact: ${request.impactTime || "Not provided"} · ${request.roadName || "Road not provided"} · ${request.direction || "Direction not provided"} · ${request.lane || "Lane not provided"}`,
    `Weather/visibility: ${request.weather || "Not provided"}`,
    `Unsafe to drive: ${request.unsafeToDrive}`,
    `Needed tow: ${request.towed}`,
    `Photos: ${request.photos || roadRescuePhotoSummary(request)}`,
    `Status: ${request.status}`,
    `Notes: ${request.notes || "No notes saved."}`,
    `Provider notification: ${request.providerNotification || roadRescueProviderNotification(request)}`,
    "Safety boundary: Forge does not provide emergency services, does not guarantee response times, does not replace 911, and does not provide legal or insurance advice."
  ];
}

function copyRoadRescueRequest(id) {
  const request = (state.roadRescueRequests || []).find((item) => item.id === id);
  if (!request) return;
  copyText(roadRescueRequestLines(request).join("\n"), "Road Rescue request copied.");
}

function copyRoadRescueQueue() {
  const requests = state.roadRescueRequests || [];
  const lines = [
    "Forge Road Rescue queue",
    "",
    requests.length ? `${requests.length} Road Rescue request${requests.length === 1 ? "" : "s"} saved.` : "No Road Rescue requests yet.",
    "",
    ...requests.flatMap((request) => [...roadRescueRequestLines(request), ""])
  ];
  copyText(lines.join("\n"), "Road Rescue queue copied.");
}

function copyRoadHazardReport(destination) {
  const lines = [
    `Forge road hazard report helper - ${destination}`,
    "",
    "After you are safe, document the pothole so the right public agency can review it.",
    "Collect: road name, cross street or landmark, lane, direction of travel, time of impact, photos of the pothole, photos of vehicle damage, and notes about weather or visibility.",
    "Do not stand in traffic or put yourself in danger to take photos.",
    "Forge helps organize the report details, but the public agency controls road repair review and response."
  ];
  copyText(lines.join("\n"), `${destination} report helper copied.`);
}

function copyRoadDamageChecklist() {
  const lines = [
    "Forge Road Rescue damage photo checklist",
    "",
    "- Vehicle in a safe location first",
    "- Wide photo showing road context",
    "- Close photo of pothole or road hazard when safe",
    "- Tire sidewall and tread photos",
    "- Wheel/rim photos",
    "- Dashboard warning light photos",
    "- Vehicle position photos",
    "- Road name, cross street, lane, direction, weather, visibility, and impact time",
    "",
    "Boundary: this checklist is for documentation only and is not legal or insurance advice."
  ];
  copyText(lines.join("\n"), "Damage photo checklist copied.");
}

function copyAutoMarketBrief() {
  const lines = [
    "Forge Auto Services brief",
    "",
    "Positioning: Forge Auto helps customers buy, sell, transport, repair, inspect, detail, customize, and maintain vehicles through trusted auto partners, mechanics, transport providers, and dealership partners.",
    `Auto service requests: ${(state.autoRequests || []).length}`,
    `Vehicle listings: ${(state.vehicles || []).length}`,
    `Dealer partners: ${autoDealers.map((dealer) => dealer.name).join(", ")}`,
    "",
    "Service coverage:",
    ...autoServiceGroups.map((group) => `- ${group.title}: ${group.items.join(", ")}`),
    "",
    "Safety rule: Forge routes requests; regulated sales, financing, repair, towing, transport, and insurance-related work must be performed by properly licensed or qualified partners where required.",
    "Buyer next step: inspect the vehicle, verify ownership/title, and handle payment outside Forge.",
    `Open Forge Auto: ${roleDemoLink("customer", "auto")}`
  ];
  copyText(lines.join("\n"), "Forge Auto brief copied.");
}

function copyAutoDealerPlan() {
  const lines = [
    "Forge Auto dealer and sales partner plan",
    "",
    "Featured sales path: S&A Auto partnership.",
    "",
    ...autoDealers.map((dealer) => `${dealer.name} (${dealer.region}): ${dealer.role}. ${dealer.note}`),
    "",
    "Next setup needed: add approved partner phone, website, intake contact, inventory source, dealer terms, financing referral boundary, and compliance review before broad public launch."
  ];
  copyText(lines.join("\n"), "Auto dealer plan copied.");
}

function copyAutoDealerSetup() {
  const lines = [
    "Forge auto dealer setup checklist",
    "",
    ...autoDealers.flatMap((dealer) => [
      `${dealer.name} (${dealer.region})`,
      ...dealer.setup.map((item) => `- ${item}`),
      ""
    ]),
    "Do not publish real dealer routing until approved contact details, inventory process, dealer terms, financing referral boundaries, and compliance review are complete."
  ];
  copyText(lines.join("\n"), "Dealer setup checklist copied.");
}

function copyAutoDealer(dealerId) {
  const dealer = autoDealers.find((item) => item.id === dealerId) || autoDealers[0];
  const lines = [
    "Forge dealer handoff",
    "",
    `${dealer.name} - ${dealer.region}`,
    dealer.role,
    dealer.status,
    "",
    dealer.note,
    "",
    "Needed before public use: approved contact person, phone, website, inventory process, lead response expectation, financing referral boundary, and compliance review."
  ];
  copyText(lines.join("\n"), "Dealer handoff copied.");
}

function copyAutoInquiry(inquiryId) {
  const inquiry = (state.autoInquiries || []).find((item) => item.id === inquiryId);
  if (!inquiry) return;
  const lines = autoInquiryLines(inquiry);
  copyText(lines.join("\n"), "Auto inquiry copied.");
}

function copyAutoInquiryQueue() {
  const inquiries = state.autoInquiries || [];
  const lines = [
    "Forge auto buyer inquiry queue",
    "",
    inquiries.length ? `${inquiries.length} buyer lead${inquiries.length === 1 ? "" : "s"} saved.` : "No buyer inquiries yet.",
    "",
    ...inquiries.flatMap((inquiry) => [...autoInquiryLines(inquiry), ""])
  ];
  copyText(lines.join("\n"), "Buyer inquiry queue copied.");
}

function autoInquiryLines(inquiry) {
  return [
    "Forge auto buyer inquiry",
    `${inquiry.vehicleTitle} via ${autoDealerName(inquiry.dealerId)}`,
    `Buyer: ${inquiry.buyer}`,
    `Phone: ${inquiry.phone}`,
    inquiry.email ? `Email: ${inquiry.email}` : "Email: Not provided",
    `Status: ${inquiry.status}`,
    `Note: ${inquiry.note || "No note saved."}`,
    "Soft launch route: confirm buyer consent, copy this inquiry to the dealer partner, then log the next follow-up.",
    "Safety boundary: buyer, seller, and dealer verify title, condition, financing, test drive, and payment outside Forge."
  ];
}

function copyVehicleContact(vehicleId) {
  const vehicle = (state.vehicles || []).find((item) => item.id === vehicleId);
  if (!vehicle) return;
  const dealer = autoDealers.find((item) => item.id === vehicle.dealerId) || autoDealers[0];
  const lines = [
    "Forge vehicle seller follow-up",
    "",
    `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
    `Dealer partner: ${dealer.name}`,
    `Price: ${vehicle.price}`,
    `Mileage: ${vehicle.mileage}`,
    `Location: ${vehicle.location}`,
    `Seller: ${vehicle.seller}`,
    `Phone: ${vehicle.phone}`,
    vehicle.email ? `Email: ${vehicle.email}` : "Email: Not provided",
    "",
    vehicle.description,
    "",
    "Reminder: inspect the vehicle, verify title/ownership, and keep payment outside Forge for this MVP."
  ];
  copyText(lines.join("\n"), "Seller info copied.");
}

function copyJobFlowBrief(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  const bids = state.bids.filter((bid) => bid.jobId === job.id);
  const chosenBid = bids.find((bid) => bid.chosen);
  const rows = jobFlowBriefRows(job, bids, chosenBid);
  const lines = [
    "Forge job flow brief",
    "",
    `${job.title} - ${job.customer || "Customer"}`,
    `Status: ${job.status}`,
    `Bids: ${bids.length}`,
    chosenBid ? `Chosen bid: ${chosenBid.worker} at ${chosenBid.amount}` : "Chosen bid: none yet",
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    chosenBid ? bidHandoffText(job, chosenBid) : "Next action: choose a bid or invite workers so Forge can create the scheduling handoff.",
    `Open job: ${roleDemoLink("customer", "detail")}`
  ];
  copyText(lines.join("\n"), "Job flow brief copied.");
}

function copyBidHandoff(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  const bid = state.bids.find((item) => item.jobId === jobId && item.chosen);
  if (!job || !bid) {
    showToast("Choose a bid before copying the handoff.");
    return;
  }
  copyText(bidHandoffText(job, bid), "Bid handoff copied.");
}

function copyWorkerDirect(email) {
  const worker = state.workers.find((item) => item.email === email);
  if (!worker) return;
  copyText(workerTemplate(worker), "Worker follow-up copied.");
}

function copyReferralDirect(id) {
  const lead = state.referrals.find((item) => item.id === id);
  if (!lead) return;
  copyText(referralTemplate(lead), "Referral follow-up copied.");
}

function copyHomebuildingLead(id) {
  const lead = (state.homebuildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(homebuildingLeadLines(lead).join("\n"), "Homebuilding lead copied.");
}

function copyProjectLead(id) {
  const lead = (state.projectLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(projectLeadLines(lead).join("\n"), "Project lead copied.");
}

function copyBuildingLead(id) {
  const lead = (state.buildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(buildingLeadLines(lead).join("\n"), "Building lead copied.");
}

function copyProjectsQueue() {
  const leads = state.projectLeads || [];
  const lines = [
    "Forge projects queue",
    "",
    leads.length ? `${leads.length} project opportunit${leads.length === 1 ? "y" : "ies"} saved.` : "No project opportunities yet.",
    "",
    ...leads.flatMap((lead) => [...projectLeadLines(lead), ""])
  ];
  copyText(lines.join("\n"), "Projects queue copied.");
}

function copyBuildingQueue() {
  const leads = state.buildingLeads || [];
  const lines = [
    "Forge Building queue",
    "",
    leads.length ? `${leads.length} Building lead${leads.length === 1 ? "" : "s"} saved.` : "No Building leads yet.",
    "",
    ...leads.flatMap((lead) => [...buildingLeadLines(lead), ""])
  ];
  copyText(lines.join("\n"), "Building queue copied.");
}

function markJobContacted(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  job.status = "Contacted";
  addActivity(`Job lead contacted: ${job.title} (${job.customer}).`);
  saveState();
  render();
  showToast("Job marked contacted.");
}

function markWorkerContacted(email) {
  const worker = state.workers.find((item) => item.email === email);
  if (!worker) return;
  worker.status = "Contacted";
  addActivity(`Worker lead contacted: ${worker.name}.`);
  saveState();
  render();
  showToast("Worker marked contacted.");
}

function markReferralContacted(id) {
  const lead = state.referrals.find((item) => item.id === id);
  if (!lead) return;
  lead.status = "Contacted";
  addActivity(`Referral contacted: ${lead.name}.`);
  saveState();
  render();
  showToast("Referral marked contacted.");
}

function markHomebuildingContacted(id) {
  const lead = (state.homebuildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "Needs More Info";
  addActivity(`Homebuilding lead needs more info: ${lead.name} (${lead.type}).`);
  saveState();
  render();
  showToast("Homebuilding lead marked Needs More Info.");
}

function canSendHomebuildingToSeneca(lead) {
  const partner = senecaPartner();
  return Boolean(lead?.senecaEligible)
    && Boolean(lead?.consentToShareWithApprovedPartners)
    && Boolean(partner?.approved)
    && Boolean(partner?.dataSharingApproved);
}

function sendHomebuildingToSeneca(id) {
  const lead = (state.homebuildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  if (!canSendHomebuildingToSeneca(lead)) {
    lead.status = lead.status === "Sent to Seneca" ? "Forge Qualified" : lead.status;
    addActivity(`Blocked Seneca send for homebuilding lead ${lead.name}: consent or partner approval is missing.`);
    saveState();
    render();
    showToast("Seneca send blocked until consent and partner approval flags are true.");
    return;
  }
  lead.status = "Sent to Seneca";
  addActivity(`Homebuilding lead sent to Seneca Review: ${lead.name} (${lead.type}). Seneca can accept or decline; contracts stay between client and Seneca/licensed contractor.`);
  saveState();
  sendLead("homebuilding-seneca-review", lead);
  render();
  showToast("Sent to Seneca Review.");
}

function markProjectNeedsInfo(id) {
  const lead = (state.projectLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "NEEDS_MORE_INFO";
  addProjectNote(lead.id, "Marked Needs More Info.");
  addActivity(`Project lead needs more info: ${lead.projectTitle}.`);
  saveState();
  render();
  showToast("Project marked Needs More Info.");
}

function qualifyProjectLead(id) {
  const lead = (state.projectLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "FORGE_QUALIFIED";
  lead.senecaReviewAllowed = canSendProjectToSeneca(lead);
  addProjectNote(lead.id, "Marked Forge Qualified after operator review.");
  addActivity(`Project lead Forge Qualified: ${lead.projectTitle}.`);
  saveState();
  render();
  showToast("Project marked Forge Qualified.");
}

function sendProjectToSeneca(id) {
  const lead = (state.projectLeads || []).find((item) => item.id === id);
  if (!lead || !canSendProjectToSeneca(lead)) {
    showToast("Project is not eligible for Seneca Review yet.");
    return;
  }
  const partner = senecaPartner();
  lead.status = "SENT_TO_SENECA";
  state.partnerReferrals.unshift({
    id: `partner-referral-${Date.now()}`,
    projectLeadId: lead.id,
    partnerId: partner.id,
    status: "SENT_TO_SENECA",
    approvedPartnerAtSend: Boolean(partner.approved && partner.dataSharingApproved),
    commissionable: partnerCommissionAllowed(partner),
    created: "Today",
    note: "Sent only after Forge Qualified status, user consent, partner approval, and data-sharing approval. Commissionable only if referralAgreementSigned is true."
  });
  addProjectNote(lead.id, `Sent to ${partner.name} review. Partner may accept or decline; contracts remain between client and partner/licensed contractor.`);
  addActivity(`Project lead sent to Seneca Review: ${lead.projectTitle}. Partner may accept or decline; Forge is not contractor of record.`);
  saveState();
  sendLead("project-seneca-review", lead);
  render();
  showToast("Project sent to Seneca Review.");
}

function setBuildingLeadStatus(id, status, note = "") {
  const lead = (state.buildingLeads || []).find((item) => item.id === id);
  if (!lead || !buildingLeadStatuses.includes(status)) return;
  lead.status = status;
  lead.updatedAt = "Today";
  if (status === "CUSTOMER_CONSENT_APPROVED") lead.consentToShareWithApprovedPartners = true;
  if (note) lead.adminNotes = [lead.adminNotes, note].filter(Boolean).join("\n");
  const normalized = normalizeBuildingLead(lead);
  Object.assign(lead, normalized);
  addActivity(`Building lead status changed: ${lead.projectTitle} -> ${buildingStatusLabel(status)}.`);
  saveState();
  render();
  showToast(`Building lead marked ${buildingStatusLabel(status)}.`);
}

function sendBuildingToSeneca(id) {
  const lead = (state.buildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  const normalized = normalizeBuildingLead(lead);
  if (!canSendBuildingToSeneca(normalized)) {
    lead.status = canMarkBuildingSenecaEligible(normalized) ? "SENECA_REVIEW_ELIGIBLE" : lead.status;
    lead.adminNotes = [lead.adminNotes, "Blocked Send to Seneca Review: requires Major Project Review or Forge Qualified status, customer consent, partner approved true, and dataSharingApproved true."].filter(Boolean).join("\n");
    addActivity(`Blocked Seneca send for Building lead ${lead.projectTitle}: consent or partner approval is missing.`);
    saveState();
    render();
    showToast("Seneca send blocked. Lead marked eligible only.");
    return;
  }
  const partner = senecaPartner();
  lead.status = "SENT_TO_SENECA";
  lead.assignedPartnerId = partner.id;
  lead.updatedAt = "Today";
  state.partnerReferrals.unshift({
    id: `partner-referral-${Date.now()}`,
    buildingLeadId: lead.id,
    partnerId: partner.id,
    status: "SENT_TO_SENECA",
    approvedPartnerAtSend: Boolean(partner.approved && partner.dataSharingApproved),
    commissionable: partnerCommissionAllowed(partner),
    created: "Today",
    note: "Building lead sent only after admin status gate, customer consent, partner approval, and data-sharing approval. Commissionable only if referralAgreementSigned is true."
  });
  addActivity(`Building lead sent to Seneca Review: ${lead.projectTitle}.`);
  saveState();
  sendLead("building-seneca-review", lead);
  render();
  showToast("Building lead sent to Seneca Review.");
}

function sendBuildingToFlex(id) {
  const lead = (state.buildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  const normalized = normalizeBuildingLead(lead);
  if (!canSendBuildingToFlex(normalized)) {
    lead.status = canMarkBuildingFlexEligible(normalized) ? "FLEX_REVIEW_ELIGIBLE" : lead.status;
    lead.adminNotes = [lead.adminNotes, "Blocked Send to Flex Review: requires contractor finance lead or finance need, customer consent, partner approved true, and dataSharingApproved true."].filter(Boolean).join("\n");
    addActivity(`Blocked Flex send for Building lead ${lead.projectTitle}: consent or partner approval is missing.`);
    saveState();
    render();
    showToast("Flex send blocked. Lead marked eligible only.");
    return;
  }
  const partner = flexPartner();
  lead.status = "SENT_TO_FLEX";
  lead.assignedPartnerId = partner.id;
  lead.updatedAt = "Today";
  state.partnerReferrals.unshift({
    id: `partner-referral-${Date.now()}`,
    buildingLeadId: lead.id,
    partnerId: partner.id,
    status: "SENT_TO_FLEX",
    approvedPartnerAtSend: Boolean(partner.approved && partner.dataSharingApproved),
    commissionable: partnerCommissionAllowed(partner),
    created: "Today",
    note: "Building finance lead sent only after finance eligibility, customer consent, partner approval, and data-sharing approval. Commissionable only if referralAgreementSigned is true."
  });
  addActivity(`Building lead sent to Flex Review: ${lead.projectTitle}.`);
  saveState();
  sendLead("building-flex-review", lead);
  render();
  showToast("Building lead sent to Flex Review.");
}

function addProjectNote(projectLeadId, body) {
  state.projectLeadNotes.unshift({
    id: `project-note-${Date.now()}`,
    projectLeadId,
    author: state.session.name || "Forge Admin",
    body,
    created: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })
  });
}

function markOpportunityContacted(id) {
  const lead = (state.opportunityLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "Contacted";
  addActivity(`Career interest contacted: ${lead.name} (${lead.goal}).`);
  saveState();
  render();
  showToast("Career lead marked contacted.");
}

function markNorthStarContacted(id) {
  const lead = (state.northstarLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "Contacted";
  addActivity(`NorthStar lead contacted: ${lead.businessName} (${lead.trade}).`);
  saveState();
  render();
  showToast("NorthStar lead marked contacted.");
}

function markRoadRescueContacted(id) {
  const request = (state.roadRescueRequests || []).find((item) => item.id === id);
  if (!request) return;
  request.status = "Contacted";
  addActivity(`Road Rescue request contacted: ${request.name} near ${request.location}.`);
  saveState();
  render();
  showToast("Road Rescue request marked contacted.");
}

function moveJobForward(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  job.status = "Matching";
  addActivity(`Job moved forward: ${job.title} is now matching.`);
  saveState();
  render();
  showToast("Job moved to Matching.");
}

function moveWorkerForward(email) {
  const worker = state.workers.find((item) => item.email === email);
  if (!worker) return;
  worker.status = "Ready";
  addActivity(`Worker moved forward: ${worker.name} is ready.`);
  saveState();
  render();
  showToast("Worker marked Ready.");
}

function moveReferralForward(id) {
  const lead = state.referrals.find((item) => item.id === id);
  if (!lead) return;
  lead.status = "Converted";
  addActivity(`Referral moved forward: ${lead.name} converted.`);
  saveState();
  render();
  showToast("Referral converted.");
}

function moveHomebuildingForward(id) {
  const lead = (state.homebuildingLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = lead.status === "Partner Reviewing" ? "Site Visit Scheduled" : "Partner Reviewing";
  addActivity(`Homebuilding lead moved forward: ${lead.name} is ${lead.status}.`);
  saveState();
  render();
  showToast(`Homebuilding lead marked ${lead.status}.`);
}

function moveOpportunityForward(id) {
  const lead = (state.opportunityLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = lead.status === "Packet Started" ? "Applied" : "Packet Started";
  addActivity(`Career application packet moved forward: ${lead.name} is ${lead.status}.`);
  saveState();
  render();
  showToast(`Career lead marked ${lead.status}.`);
}

function moveNorthStarForward(id) {
  const lead = (state.northstarLeads || []).find((item) => item.id === id);
  if (!lead) return;
  const order = ["New", "Contacted", "Scoping", "Proposal Needed", "Proposal Sent", "Active"];
  const index = order.indexOf(lead.status);
  lead.status = index >= 0 ? order[Math.min(index + 1, order.length - 1)] : "Scoping";
  addActivity(`NorthStar lead moved forward: ${lead.businessName} is ${lead.status}.`);
  saveState();
  render();
  showToast(`NorthStar lead marked ${lead.status}.`);
}

function moveRoadRescueForward(id) {
  const request = (state.roadRescueRequests || []).find((item) => item.id === id);
  if (!request) return;
  const order = ["New", "Contacted", "Provider Notified", "Matched", "Closed"];
  const index = order.indexOf(request.status);
  request.status = index >= 0 ? order[Math.min(index + 1, order.length - 1)] : "Provider Notified";
  addActivity(`Road Rescue request moved forward: ${request.name} is ${request.status}.`);
  saveState();
  render();
  showToast(`Road Rescue request marked ${request.status}.`);
}

function markFlexContacted(id) {
  const lead = (state.flexLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "contacted";
  lead.updated_at = "Today";
  addActivity(`Flex lead contacted: ${lead.business_name} (${lead.owner_name}).`);
  saveState();
  render();
  showToast("Flex lead marked contacted.");
}

function moveFlexForward(id) {
  const lead = (state.flexLeads || []).find((item) => item.id === id);
  if (!lead) return;
  const order = ["new", "contacted", "qualified", "flex_link_sent", "application_started", "activated", "commission_expected", "commission_paid", "forge_upsell_offered", "forge_client_won"];
  const index = order.indexOf(lead.status);
  lead.status = index >= 0 ? order[Math.min(index + 1, order.length - 1)] : "qualified";
  lead.updated_at = "Today";
  addActivity(`Flex lead moved forward: ${lead.business_name} is ${flexStatusLabel(lead.status)}.`);
  saveState();
  render();
  showToast(`Flex lead marked ${flexStatusLabel(lead.status)}.`);
}

function openFlexReferral(leadId) {
  const lead = (state.flexLeads || []).find((item) => item.id === leadId);
  const url = flexReferralUrl();
  if (lead) {
    if (!lead.consent_to_receive_flex_referral) {
      showToast("Collect Flex referral consent before opening the link.");
      return;
    }
    const partner = flexPartner();
    if (!partner?.approved || !partner?.dataSharingApproved) {
      lead.notes = [lead.notes, "Flex referral link blocked: partner approval and data-sharing approval are not recorded."].filter(Boolean).join("\n");
      lead.updated_at = "Today";
      addActivity(`Blocked Flex referral link for ${lead.business_name}: partner approval or data-sharing approval is missing.`);
      saveState();
      render();
      showToast("Flex referral blocked until partner approval and data-sharing approval are true.");
      return;
    }
    if (!url || url === FLEX_REFERRAL_URL_PLACEHOLDER) {
      lead.notes = [lead.notes, "Finance partner link blocked: no configured referral URL is present."].filter(Boolean).join("\n");
      lead.updated_at = "Today";
      addActivity(`Blocked finance partner link for ${lead.business_name}: no configured referral URL is present.`);
      saveState();
      render();
      showToast("Finance partner link is not configured.");
      return;
    }
    lead.status = "flex_link_sent";
    lead.flex_referral_url_sent = url;
    lead.updated_at = "Today";
    addActivity(`Configured Flex referral link opened for ${lead.business_name}.`);
    saveState();
    render();
  }
  window.open(url, "_blank", "noopener,noreferrer");
  showToast("Configured Flex referral link opened.");
}

function createFlexUpsellTask(id) {
  const lead = (state.flexLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = lead.status === "forge_client_won" ? lead.status : "forge_upsell_offered";
  lead.notes = [lead.notes, "Placeholder task: follow up on Forge leads, NorthStar marketing, CRM, website, operations, or payment processing fit."].filter(Boolean).join("\n");
  addActivity(`Forge upsell task placeholder created for ${lead.business_name}.`);
  saveState();
  render();
  showToast("Forge upsell task placeholder created.");
}

function copyDailyBrief() {
  const newJobs = state.jobs.filter((job) => job.status === "New").length;
  const newWorkers = state.workers.filter((worker) => worker.status === "New").length;
  const newNorthStar = (state.northstarLeads || []).filter((lead) => lead.status === "New").length;
  const newFlex = (state.flexLeads || []).filter((lead) => lead.status === "new").length;
  const newCareers = (state.opportunityLeads || []).filter((lead) => lead.status === "New").length;
  const newHomebuilding = (state.homebuildingLeads || []).filter((lead) => lead.status === "New").length;
  const newProjects = (state.projectLeads || []).filter((lead) => ["NEW", "MAJOR_PROJECT_REVIEW"].includes(lead.status)).length;
  const brief = [
    "Forge daily brief",
    `Jobs: ${state.jobs.length} total, ${newJobs} new`,
    `Workers: ${state.workers.length} total, ${newWorkers} new`,
    `NorthStar: ${(state.northstarLeads || []).length} total, ${newNorthStar} new`,
    `Capital Desk: ${(state.flexLeads || []).length} total, ${newFlex} new`,
    `Homebuilding leads: ${(state.homebuildingLeads || []).length} total, ${newHomebuilding} new`,
    `Project leads: ${(state.projectLeads || []).length} total, ${newProjects} new/review`,
    `Career leads: ${(state.opportunityLeads || []).length} total, ${newCareers} new`,
    `Referrals: ${state.referrals.length} total`,
    `Next job follow-up: ${state.jobs[0]?.title || "none"}`,
    `Next worker follow-up: ${state.workers[0]?.name || "none"}`,
    `Next NorthStar follow-up: ${(state.northstarLeads || [])[0]?.businessName || "none"}`,
    `Next Capital Desk follow-up: ${(state.flexLeads || [])[0]?.business_name || "none"}`,
    `Next homebuilding follow-up: ${(state.homebuildingLeads || [])[0]?.name || "none"}`,
    `Next project follow-up: ${(state.projectLeads || [])[0]?.projectTitle || "none"}`,
    `Next career follow-up: ${(state.opportunityLeads || [])[0]?.name || "none"}`,
    `Next referral follow-up: ${state.referrals[0]?.name || "none"}`
  ].join("\n");
  copyText(brief, "Daily brief copied.");
}

function copyDeliveryStatus() {
  const lines = [
    "Forge lead delivery status",
    "",
    ...deliveryStatusRows().map((item) => `${item.ok ? "[Ready]" : "[Check]"} ${item.title}: ${item.body}`),
    "",
    "Reminder: every lead saves locally first. Public beta should verify webhook or backend delivery before broad sharing."
  ];
  copyText(lines.join("\n"), "Delivery status copied.");
}

function copyBackendHandoff() {
  const lines = [
    "Forge backend handoff",
    "",
    ...backendHandoffRows().map((item) => `${item.label}: ${item.title}. ${item.body}`),
    "",
    "Files prepared:",
    "- SUPABASE_SCHEMA.sql",
    "- migrations/20260626_projects.sql",
    "- types/project-leads.ts",
    "- validation/projectLeadSchema.ts",
    "- seed/projectPartners.seed.ts",
    "- WEBHOOK_PAYLOADS.md",
    "- SECURITY_REVIEW_CHECKLIST.md",
    "",
    "Recommended backend path: public forms and bids should POST to Zapier, an API route, or a Supabase Edge Function; the server should validate and write into the database. Do not expose service-role credentials in the browser."
  ];
  copyText(lines.join("\n"), "Backend handoff copied.");
}

function copyAuthHandoff() {
  const lines = [
    "Forge admin auth handoff",
    "",
    ...authHandoffRows().map((item) => `${item.label}: ${item.title}. ${item.body}`),
    "",
    "Prepared file:",
    "- ADMIN_AUTH_PLAN.md",
    "",
    "Public beta requirement: admin, capture, reports, exports, imports, backups, and webhook setup must be behind production-grade authentication before broad public traffic."
  ];
  copyText(lines.join("\n"), "Auth handoff copied.");
}

function copyProfileBrief() {
  const profile = getProfileStatus();
  const rows = profileBriefRows(profile);
  const role = ["worker", "customer", "admin"].includes(state.session.role) ? state.session.role : "customer";
  const lines = [
    "Forge profile status brief",
    "",
    `${profile.name} - ${profile.roleLabel}`,
    `Status: ${profile.status}`,
    `Readiness: ${profileReadiness(profile)}%`,
    "",
    profile.summary,
    "",
    ...rows.map((item) => `${item.label}: ${item.title}. ${item.body}`),
    "",
    `Next action: ${profile.nextAction}`,
    `Open profile: ${roleDemoLink(role, "profile")}`
  ];
  copyText(lines.join("\n"), "Status brief copied.");
}

function copySafetyChecklist() {
  const lines = [
    "Forge MVP safety checklist",
    "",
    ...safetyChecks().map((item) => `${item.ok ? "[Ready]" : "[Check]"} ${item.title}: ${item.body}`),
    "",
    "Before a real-user demo:",
    "1. Export Backup JSON.",
    "2. Turn on Public View before handing the app to someone else.",
    "3. Confirm every captured person agreed to follow-up.",
    "4. Keep payments outside the MVP until the production backend is ready."
  ];
  copyText(lines.join("\n"), "Safety checklist copied.");
}

function copyLaunchGate() {
  const lines = [
    "Forge launch gate",
    "",
    ...launchGateRows().map((item) => `${item.ok ? "[Ready]" : "[Hold]"} ${item.label}: ${item.title}. ${item.body}`),
    "",
    "Use today: controlled first-user signups with people Andrew can personally follow up with.",
    "Hold for later: broad public launch until hosting, database, authentication, backups, and trust workflow are connected.",
    "No payment is collected in the MVP."
  ];
  copyText(lines.join("\n"), "Launch gate copied.");
}

function copySoftLaunchPlan() {
  const lines = [
    "Forge soft launch tomorrow plan",
    "",
    ...softLaunchRows().map((item) => `${item.ok ? "[Ready]" : "[Do first]"} ${item.label}: ${item.title}. ${item.body}`),
    "",
    "Tomorrow flow:",
    "1. Open Perspective Demo.",
    "2. Pick the person's role: homeowner, worker, admin/operator, Forge Auto, Photography & Videography, NorthStar Creative Co., or Training & Careers.",
    "3. Capture only people who agree to follow-up.",
    "4. Keep payments, deposits, title documents, sensitive identity documents, and bank/card details outside Forge.",
    "5. End with one ask: real job, worker signup, creative request, provider application, auto request, career interest, referral, or dealer contact.",
    "6. Export Backup JSON after outreach.",
    "",
    `Start: ${roleDemoLink("customer", "perspective")}`,
    `Forge Auto: ${roleDemoLink("customer", "auto")}`,
    `Photography & Videography: ${roleDemoLink("customer", "creative")}`,
    `NorthStar Creative Co.: ${roleDemoLink("customer", "northstar")}`,
    `Forge Capital Desk: ${roleDemoLink("customer", "capital")}`,
    `Careers: ${roleDemoLink("customer", "opportunities")}`,
    `Admin: ${roleDemoLink("admin", "admin")}`
  ];
  copyText(lines.join("\n"), "Soft launch plan copied.");
}

function softLaunchInviteText(role) {
  const links = {
    homeowner: roleDemoLink("customer", "post"),
    worker: roleDemoLink("worker", "signup"),
    autos: roleDemoLink("customer", "auto"),
    creative: roleDemoLink("customer", "creative"),
    northstar: roleDemoLink("customer", "northstar"),
    capital: roleDemoLink("customer", "capital"),
    career: roleDemoLink("customer", "opportunities"),
    referral: roleDemoLink("customer", "perspective")
  };
  const messages = {
    homeowner: [
      "Hey, I am doing a small soft launch for Forge tomorrow.",
      "It helps local people post jobs and find nearby workers.",
      "If you have one real job around the house, yard, restaurant, or business, can you post it here so I can test the flow and personally follow up?",
      links.homeowner
    ],
    worker: [
      "Hey, I am doing a small soft launch for Forge tomorrow.",
      "It is for local workers who want paid jobs from nearby homeowners and businesses.",
      "Can you join the worker list here? I am keeping the first group small and I will personally follow up before sending anything serious your way.",
      links.worker
    ],
    autos: [
      "Hey, I am testing a Forge Auto Services soft-launch route tomorrow.",
      "It helps capture local vehicle service, repair, detailing, transport, buyer/seller, and dealer-partner interest without Forge pretending to be the licensed provider.",
      "If you know someone buying, selling, needing vehicle service, or connected to an auto partner, can you look at this and tell me who I should talk to first?",
      links.autos
    ],
    creative: [
      "Hey, I am testing a Forge Photography & Videography route tomorrow.",
      "It helps people request local photographers and videographers for weddings, events, business content, real estate, social media, family shoots, and community projects.",
      "If you know someone who needs photo or video work, or a local creative who may want approved-provider work, can you send them this so I can personally follow up?",
      links.creative
    ],
    northstar: [
      "Hey, I am testing NorthStar Creative Co. inside Forge tomorrow.",
      "It helps blue-collar providers and local businesses request websites, branding, social media, ads, CRM, lead follow-up, job tracking, and operations help.",
      "If you know a contractor or service business that needs more leads or cleaner systems, can you send them this so I can personally follow up?",
      links.northstar
    ],
    capital: [
      "Hey, I am testing Forge Capital Desk inside Forge tomorrow.",
      "It collects basic business-owner info and consent before any configured finance partner handoff. Forge is not a bank, lender, broker, underwriter, or credit decision maker.",
      "If you know a business owner dealing with materials, fuel, vendor bills, payroll timing, equipment, employee cards, or growth pressure, can you send them this so I can personally follow up?",
      links.capital
    ],
    career: [
      "Hey, I am adding a Forge Training & Careers path for the soft launch tomorrow.",
      "It helps people organize next steps for trade schools, union apprenticeships, and blue-collar AI field jobs.",
      "If you know someone trying to get into a trade, union, apprenticeship, or field-tech career, can you send them this so I can personally follow up?",
      links.career
    ],
    referral: [
      "Hey, I am doing a small Forge soft launch tomorrow and keeping it personal.",
      "I am looking for one homeowner with a job, one local worker, one creative customer or provider, one NorthStar business lead, one Capital Desk business owner, one career applicant, one auto customer, or one dealer/auto partner contact.",
      "Is there one person you think I should show this to?",
      links.referral
    ]
  };
  return (messages[role] || messages.referral).join("\n");
}

function copySoftLaunchInvite(role) {
  const row = softLaunchInviteRows().find((item) => item.role === role) || softLaunchInviteRows()[0];
  copyText(softLaunchInviteText(row.role), `${row.label} invite copied.`);
}

function copySoftLaunchInviteKit() {
  const lines = [
    "Forge soft launch invite kit",
    "",
    ...softLaunchInviteRows().flatMap((item) => [
      `${item.label} - ${item.title}`,
      softLaunchInviteText(item.role),
      ""
    ]),
    "Safety note: keep payments, deposits, title documents, sensitive identity documents, and bank/card details outside Forge during the MVP soft launch."
  ];
  copyText(lines.join("\n"), "Soft launch invite kit copied.");
}

function copySoftLaunchRunSheet() {
  const lines = [
    "Forge launch day run sheet",
    "",
    ...softLaunchRunSheetRows().map((item) => `${item.label}: ${item.title}. ${item.body}`),
    "",
    "Working links:",
    `Admin: ${roleDemoLink("admin", "admin")}`,
    `Perspective Demo: ${roleDemoLink("customer", "perspective")}`,
    `Post Job: ${roleDemoLink("customer", "post")}`,
    `Worker Signup: ${roleDemoLink("worker", "signup")}`,
    `Photography & Videography: ${roleDemoLink("customer", "creative")}`,
    `NorthStar Creative Co.: ${roleDemoLink("customer", "northstar")}`,
    `Careers: ${roleDemoLink("customer", "opportunities")}`,
    `Forge Auto: ${roleDemoLink("customer", "auto")}`,
    "",
    "End-of-day rule: export Backup JSON and keep the link controlled until backend delivery and admin protection are finished."
  ];
  copyText(lines.join("\n"), "Launch day run sheet copied.");
}

function copyDeployPlan() {
  const rows = deployPreflightRows();
  const lines = [
    "Forge public deploy preflight",
    "",
    ...rows.map((item) => `${item.ok ? "[Ready]" : "[Required]"} ${item.title}: ${item.body}`),
    "",
    "Recommended next move: deploy a public beta intake version only after lead capture, admin protection, backups, and legal copy are ready.",
    "Final step before launch: run a full security check."
  ];
  copyText(lines.join("\n"), "Deploy plan copied.");
}

function copyReleaseCandidatePacket() {
  const lines = [
    "Forge public beta release candidate packet",
    "",
    "Version: v70",
    "Open Admin: http://127.0.0.1:4174/?v=70&demo=admin#admin",
    "",
    "Run checks:",
    "node --check app.js",
    "node smoke-test.mjs",
    "node security-check.mjs",
    "node release-check.mjs",
    "npm run check",
    "",
    "Prepared files:",
    "- release-manifest.json",
    "- RELEASE_CANDIDATE.md",
    "- FINAL_PUBLIC_GATE.md",
    "- PUBLIC_BETA_DEPLOY_RUNBOOK.md",
    "- SECURITY_REVIEW_CHECKLIST.md",
    "- ADMIN_AUTH_PLAN.md",
    "- SUPABASE_SCHEMA.sql",
    "- WEBHOOK_PAYLOADS.md",
    "- netlify.toml",
    "- vercel.json",
    "",
    "Decision: public beta can proceed only after backend lead delivery, production admin auth, backup, final legal review, and security review pass."
  ];
  copyText(lines.join("\n"), "Release candidate packet copied.");
}

function copyLaunchRunbook() {
  const lines = [
    "Forge public beta deploy runbook",
    "",
    "1. Export Backup JSON from Admin.",
    "2. Connect Zapier/backend intake and verify one test lead appears outside the browser.",
    "3. Protect admin, capture, reports, exports, imports, backup, and webhook setup with production auth.",
    "4. Deploy static files with Netlify or Vercel using the included security headers.",
    "5. Open the public URL in a fresh private browser and verify public routes only.",
    "6. Run node smoke-test.mjs and node security-check.mjs.",
    "7. Submit one real job, worker signup, referral, and bid; verify delivery status and exports.",
    "8. Review Early Access Terms & Privacy before sharing beyond the first controlled group.",
    "9. Share the public beta link with a small first-user batch.",
    "10. Watch Admin Lead Delivery Status, Follow-Up Queue, and backups after every outreach sprint.",
    "",
    "Prepared file: PUBLIC_BETA_DEPLOY_RUNBOOK.md"
  ];
  copyText(lines.join("\n"), "Launch runbook copied.");
}

function copySecurityCommand() {
  copyText("npm run check", "Security check command copied.");
}

function copyFinalSecurityGate() {
  const lines = [
    "Forge final public gate",
    "",
    ...finalSecurityGateRows().map((item) => `${item.ok ? "[Ready]" : "[Hold]"} ${item.title}: ${item.body}`),
    "",
    "Decision: controlled first-user beta is okay with personal follow-up. Broad public launch waits until lead delivery, production admin auth, backup, legal review, and final security review pass.",
    "Verification command: npm run check"
  ];
  copyText(lines.join("\n"), "Final gate copied.");
}

function copySecurityReviewPack() {
  const lines = [
    "Forge final public security review",
    "",
    "Deployment surface:",
    "- Verify HTTPS-only public hosting.",
    "- Confirm Netlify or Vercel security headers are active in production.",
    "- Confirm no admin route is exposed without authentication.",
    "- Confirm service worker cache version matches the deployed assets.",
    "",
    "Data and privacy:",
    "- Submit one job, worker profile, referral, and bid; verify each saves locally and forwards only to the intended webhook/backend.",
    "- Confirm no passwords, payment cards, bank info, SSNs, or sensitive documents are collected.",
    "- Confirm Early Access Terms & Privacy is visible from home, post job, and worker signup.",
    "- Export a JSON backup before and after real beta testing.",
    "",
    "Operator workflow:",
    "- Open admin through the intended admin login/demo path only.",
    "- Verify direct #admin, #capture, and #reports URLs route non-admin visitors to login.",
    "- Verify Public View hides operator-only controls before handing the app to someone else.",
    "",
    "User flow:",
    "- Test post job -> confirmation -> status lookup.",
    "- Test worker signup -> confirmation -> worker dashboard.",
    "- Test job detail -> choose bid -> messages handoff.",
    "- Test mobile home, post, signup, jobs, status, and legal screens.",
    "",
    "Decision:",
    "- Public beta is acceptable only after lead capture, admin protection, legal copy, backups, and security headers all pass."
  ];
  copyText(lines.join("\n"), "Security review copied.");
}

function copyLaunchCommand() {
  const rows = launchCommandRows();
  const topQueue = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").slice(0, 3);
  const lines = [
    "Forge launch command",
    "",
    ...rows.map((row) => `${row.label}: ${row.needTouch} need touch, ${row.contacted} contacted, ${row.moving} moving out of ${row.total}. Next: ${row.next}`),
    "",
    "Top 3 today:",
    ...(topQueue.length
      ? topQueue.map((row, index) => `${index + 1}. ${row.person} (${row.kind}) - ${row.reason}`)
      : ["No urgent follow-ups in the current filter."]),
    "",
    "Goal: get real jobs posted, ready workers confirmed, and warm referrals converted into activity."
  ];
  copyText(lines.join("\n"), "Launch command copied.");
}

function copyOutreachRecap() {
  const summary = outreachRecapSummary();
  const lines = [
    `Forge outreach recap - ${summary.label}`,
    "",
    `Recorded actions: ${summary.total}`,
    `Contacted/messages: ${summary.contacted}`,
    `Moved forward/conversions: ${summary.moved}`,
    `Captured leads: ${summary.captured}`,
    "",
    "Recent proof:",
    ...(summary.items.length
      ? summary.items.slice(0, 8).map((item) => `- ${item.at}: ${item.text}`)
      : ["- No outreach actions recorded for this local day yet."]),
    "",
    "Next focus: use Launch Command and Today's Follow-Up to keep the first 200 moving."
  ];
  copyText(lines.join("\n"), "Outreach recap copied.");
}

function copyOutreachBatch() {
  const rows = outreachBatchRows();
  const lines = [
    "Forge next 10 outreach batch",
    "",
    ...(rows.length
      ? rows.map((row, index) => [
        `${index + 1}. ${row.person} (${row.kind}, score ${row.score})`,
        `Need: ${row.title}`,
        `Why now: ${row.reason}`,
        `Message: ${row.message}`
      ].join("\n"))
      : ["No urgent follow-ups in the current batch."]),
    "",
    "After each contact: mark Contacted or Move Forward so Outreach Recap and Launch Command update."
  ];
  copyText(lines.join("\n\n"), "Next 10 batch copied.");
}

function copySessionHistory() {
  const sessions = outreachSessionHistory();
  const lines = [
    "Forge outreach session history",
    "",
    ...(sessions.length
      ? sessions.map((session, index) => `${index + 1}. ${session.at}: ${session.reviewed} reviewed, ${session.contacted} contact actions, ${session.moved} moved, ${session.remaining} still need touch.`)
      : ["No completed outreach sprints yet."]),
    "",
    "Use this to see whether outreach sessions are turning into movement."
  ];
  copyText(lines.join("\n"), "Session history copied.");
}

function copySessionNote(index) {
  const activity = state.activity[Number(index)];
  if (!activity) {
    showToast("Session note not found.");
    return;
  }
  copyText(`${activity.at}: ${activity.text}`, "Session note copied.");
}

function completeOutreachSprint() {
  const rows = outreachBatchRows();
  const summary = outreachRecapSummary();
  const remaining = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  addActivity(`Outreach sprint completed: ${rows.length} people in the Next 10 batch reviewed, ${summary.contacted} contact actions today, ${summary.moved} moved forward, ${remaining} still need touch.`);
  saveState();
  render();
  showToast("Outreach sprint logged.");
}

function exportBackup() {
  state.settings.lastBackupAt = new Date().toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  state.settings.lastBackupLeadCount = totalLeadCount();
  exportJson("forge-mvp-backup.json", state);
  addActivity("Full backup JSON exported.");
  saveState();
  renderSafetyCenter();
}

function exportJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast(`${filename} exported.`);
}

async function importBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    state = normalizeState(JSON.parse(text));
    addActivity("Backup JSON imported.");
    saveState();
    render();
    navigate("admin");
    showToast("Backup imported.");
  } catch {
    showToast("Could not import that backup.");
  } finally {
    event.target.value = "";
  }
}

function clearActivity() {
  if (!confirm("Clear the local activity log?")) return;
  state.activity = [];
  saveState();
  render();
  showToast("Activity log cleared.");
}

function resetDemoData() {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const warning = leadCount > backupCount
    ? `Reset local Forge demo data? This clears ${leadCount} leads saved in this browser. Export Backup JSON first if you need to keep them.`
    : "Reset local Forge demo data? This clears leads saved in this browser.";
  if (!confirm(warning)) return;
  state = normalizeState(structuredClone(seedState));
  saveState();
  render();
  navigate("home");
  showToast("Demo data reset.");
}

function togglePublicMode() {
  state.settings.publicMode = !state.settings.publicMode;
  addActivity(state.settings.publicMode ? "Public View enabled." : "Operator View enabled.");
  saveState();
  render();
  if (state.settings.publicMode) navigate("home");
  showToast(state.settings.publicMode ? "Public View enabled." : "Operator View enabled.");
}

function copyFollowUpQueue() {
  const queueItems = [
    ...state.jobs.filter((job) => ["New", "Pending"].includes(job.status)).map((job) => ({
      kind: "Jobs",
      label: "Job",
      person: job.customer,
      title: job.title,
      phone: job.phone,
      email: job.email,
      status: job.status,
      priority: job.status === "New" ? "Hot" : "Warm",
      message: jobTemplate(job)
    })),
    ...state.workers.filter((worker) => worker.status === "New").map((worker) => ({
      kind: "Workers",
      label: "Worker",
      person: worker.name,
      title: worker.trade,
      phone: worker.phone,
      email: worker.email,
      status: worker.status,
      priority: "Hot",
      message: workerTemplate(worker)
    })),
    ...state.referrals.filter((lead) => ["New", "Hot"].includes(lead.status) || lead.priority === "Hot").map((lead) => ({
      kind: "Referrals",
      label: "Referral",
      person: lead.name,
      title: lead.type,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: lead.priority,
      message: referralTemplate(lead)
    })),
    ...(state.homebuildingLeads || []).filter((lead) => ["New Project Lead", "Needs More Info"].includes(lead.status)).map((lead) => ({
      kind: "Homebuilding",
      label: "Homebuilding",
      person: lead.name,
      title: `${lead.type} · ${lead.routingLane || "Homebuilding Review"} · score ${lead.leadScore ?? "N/A"}`,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: lead.status === "New Project Lead" ? "Hot" : "Warm",
      message: homebuildingLeadText(lead)
    })),
    ...(state.projectLeads || []).filter((lead) => ["NEW", "NEEDS_MORE_INFO", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(lead.status)).map((lead) => ({
      kind: "Projects",
      label: "Project",
      person: lead.contactName,
      title: `${lead.projectTitle} · ${lead.route}`,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: ["NEW", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(lead.status) ? "Hot" : "Warm",
      message: projectLeadText(lead)
    })),
    ...(state.northstarLeads || []).filter((lead) => ["New", "Scoping", "Proposal Needed"].includes(lead.status)).map((lead) => ({
      kind: "NorthStar",
      label: "NorthStar",
      person: lead.name,
      title: `${lead.businessName} · ${(lead.servicesNeeded || []).join(", ") || "Business growth help"}`,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: ["New", "Proposal Needed"].includes(lead.status) ? "Hot" : "Warm",
      message: northstarLeadText(lead)
    })),
    ...(state.flexLeads || []).filter((lead) => ["new", "qualified"].includes(lead.status)).map((lead) => ({
      kind: "Capital Desk",
      label: "Capital Desk",
      person: lead.owner_name,
      title: `${lead.business_name} · ${lead.primary_need || "Flex referral"} · score ${lead.lead_score}`,
      phone: lead.phone,
      email: lead.email,
      status: lead.status,
      priority: Number(lead.lead_score || 0) >= 40 ? "Hot" : "Warm",
      message: flexOutreachText(lead)
    }))
  ].map((row) => ({
    ...row,
    score: followUpScore(row),
    reason: followUpReason(row)
  })).sort((left, right) => right.score - left.score);
  const lines = [
    "Forge follow-up queue",
    "",
    ...queueItems.map((row) => [
      `${row.label}: ${row.person} - ${row.title} - ${row.phone || "No phone"}`,
      `Priority: ${row.score} - ${row.reason}`,
      `Message: ${row.message}`
    ].join("\n"))
  ];
  copyText(lines.join("\n"), "Follow-up queue copied.");
}

function kebab(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function normalizeLookup(value) {
  return String(value || "").toLowerCase().replace(/[^\d+a-z@.]/g, "");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  navigator.serviceWorker.register("./service-worker.js").catch(() => {
    // The MVP should keep working even if install/offline support is unavailable.
  });
}
