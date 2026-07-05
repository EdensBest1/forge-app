const STORAGE_KEY = "forge.wireframe.mvp.v1";
const PUBLIC_LINK_VERSION = "99";
const PUBLIC_LINK_LABEL = `v${PUBLIC_LINK_VERSION}`;

const CREATIVE_CATEGORY_VALUE = "photography_videography";
const CREATIVE_CATEGORY_LABEL = "Photography & Videography";
const CREATIVE_CATEGORY_SLUG = "photography-videography";
const NORTHSTAR_CATEGORY_VALUE = "northstar_creative";
const NORTHSTAR_OPERATIONS_CATEGORY_VALUE = "northstar_marketing_operations";
const NORTHSTAR_CATEGORY_LABEL = "NorthStar Creative Co.";
const NORTH_STAR_DISPLAY_NAME = "North Star Creative Co.";
const NORTH_STAR_GROWTH_PAGE_TITLE = "Grow Your Business with North Star Creative Co.";
const NORTH_STAR_POSITIONING_COPY = "Forge helps you find work. North Star Creative Co. helps your business win more of it.";
const MANUFACTURING_CATEGORY_VALUE = "manufacturing_nutraceuticals";
const MANUFACTURING_CATEGORY_LABEL = "Manufacturing + Nutraceuticals";
const MANUFACTURING_CATEGORY_SLUG = "manufacturing-nutraceuticals";
const PERSONAL_DRIVER_CATEGORY_VALUE = "personal_driver_services";
const PERSONAL_DRIVER_CATEGORY_LABEL = "Personal Driver / Private Driver Services";
const FORGE_PAYMENTS_CATEGORY_VALUE = "forge_payments_merchant_services";
const FORGE_PAYMENTS_CATEGORY_LABEL = "Forge Payments / Merchant Services";
const LOCAL_PRODUCTS_CATEGORY_VALUE = "local_products_makers";
const LOCAL_PRODUCTS_CATEGORY_LABEL = "Local Products / Makers";
const workerTrustTiers = [
  { tier: "Green", meaning: "novice/helper track", steps: ["Helper 1", "Helper 2", "Job Shadow", "Tool-Ready Helper", "Reliable Helper"] },
  { tier: "Silver", meaning: "pro/reliable worker track", steps: ["Pro 1", "Pro 2", "Reliable Pro", "Independent Pro", "Preferred Pro"] },
  { tier: "Gold", meaning: "expert/crew lead/business track", steps: ["Crew Lead 1", "Crew Lead 2", "Expert Operator", "Business Ready", "Master Lead"] }
];
const dispatchDecisionLabels = ["Ready to Invite", "Crew-Lead Ready", "Mentor-Only", "Supervised Helper", "Admin Review"];
const yesNoOptions = ["No", "Yes"];
const serviceJobStatusLabels = ["Open for bids", "Bid submitted", "Provider selected", "Scheduled", "In progress", "Completed", "Cancelled"];
const serviceVerticals = [
  {
    id: "personal_driver",
    title: PERSONAL_DRIVER_CATEGORY_LABEL,
    shortTitle: "Personal Driver",
    publicHeadline: "Hire a local driver for scheduled personal rides.",
    publicSubheadline: "Errands, appointments, airport rides, event rides, sober rides, executive rides, and recurring scheduled rides.",
    publicBody: "Forge collects driver-service leads and routes them for manual review. Drivers must meet legal, insurance, licensing, background, vehicle, and local requirements where applicable.",
    ctas: ["Request a Personal Driver", "Apply as a Driver", "Review Driver Safety"],
    categories: ["Personal Driver / Private Driver Services", "Errand Driver", "Appointment Ride", "Airport Ride", "Event Ride", "Sober Ride", "Executive Ride", "Recurring Scheduled Ride", "Senior Ride Support", "Local Chauffeur Request"],
    providerTypes: ["Private Driver", "Executive Driver", "Chauffeur Candidate", "Errand Driver", "Sober Ride Driver", "Scheduled Ride Provider"],
    tags: ["scheduled rides", "airport", "executive", "sober ride", "recurring", "privacy-aware"],
    filters: ["Scheduled rides", "Airport rides", "Executive rides", "Sober rides", "Recurring rides", "Insurance reviewed", "Vehicle reviewed", "Background check pending", "Service area"],
    checklist: ["Confirm legal driving requirements", "Confirm insurance and vehicle readiness", "Keep sensitive route details private", "Confirm pickup/drop-off outside public notes", "Emergency situations require 911"],
    providerFields: [
      { name: "businessName", label: "Driver / business profile name" },
      { name: "ownerName", label: "Driver contact name" },
      { name: "serviceArea", label: "Service area" },
      { name: "vehicleType", label: "Vehicle type" },
      { name: "driverLicenseStatus", label: "Driver license status", type: "select", options: ["Current", "Pending review", "Not provided"] },
      { name: "insurance", label: "Commercial/ride insurance review", type: "select", options: ["Needs review", "Provided", "Not applicable / unsure"] },
      { name: "backgroundCheck", label: "Background check status", type: "select", options: ["Not started", "Willing to complete", "Completed elsewhere"] },
      { name: "availability", label: "Availability" },
      { name: "recurringRides", label: "Recurring rides offered", type: "select", options: yesNoOptions },
      { name: "bio", label: "Safety, driving, and customer-service notes", type: "textarea" }
    ],
    jobFields: [
      { name: "rideType", label: "Ride type", type: "select", options: ["Errands", "Appointment", "Airport", "Event", "Sober ride", "Executive ride", "Recurring scheduled ride", "Other"] },
      { name: "pickupArea", label: "Pickup area only - do not enter sensitive exact details publicly" },
      { name: "dropoffArea", label: "Drop-off area only - do not enter sensitive exact details publicly" },
      { name: "rideDate", label: "Ride date", type: "date" },
      { name: "rideTimeWindow", label: "Time window" },
      { name: "recurring", label: "One-time or recurring", type: "select", options: ["One-time", "Recurring", "Not sure"] },
      { name: "passengers", label: "Number of passengers" },
      { name: "accessibilityNeeds", label: "Accessibility or assistance notes", type: "textarea" },
      { name: "privacyNotes", label: "Private follow-up notes placeholder", type: "textarea" }
    ]
  },
  {
    id: "fencing_iron_gates",
    title: "Fencing & Custom Iron Gates",
    shortTitle: "Fencing & Gates",
    publicHeadline: "Fencing, gates, custom iron gates, and gate repair.",
    publicSubheadline: "Privacy fencing, ranch/farm fencing, security gates, custom iron gates, welding tie-ins, and gate repair.",
    publicBody: "Forge helps customers post fencing and custom gate jobs while keeping licensed/insured contractor requirements clear where required.",
    ctas: ["Post a Fence or Gate Job", "Join as a Fence/Gate Provider", "Review measurements"],
    categories: ["Fencing & Custom Iron Gates", "Fencing", "Fence Repair", "Custom Iron Gates", "Gate Repair", "Ranch / Farm Fencing", "Privacy Fencing", "Security Gates", "Welding Tie-In", "Chain Link Fence", "Wood Fence", "Vinyl Fence", "Driveway Gate", "Access Gate"],
    providerTypes: ["Fence Contractor", "Gate Installer", "Custom Iron Gate Fabricator", "Welding Contractor", "Ranch/Farm Fencing Crew", "Gate Repair Provider"],
    tags: ["fencing", "custom iron gates", "gate repair", "ranch fencing", "privacy fence", "welding", "security gates"],
    filters: ["Fence repair", "Custom iron gates", "Gate repair", "Ranch fencing", "Privacy fencing", "Security gates", "Welding", "Licensed", "Insured", "Measurements ready"],
    checklist: ["Confirm property lines", "Confirm measurements", "Confirm material", "Confirm posts/footings", "Confirm gate swing/power", "Confirm permits and contractor licensing where required"],
    providerFields: [
      { name: "businessName", label: "Business / profile name" },
      { name: "ownerName", label: "Owner / contact name" },
      { name: "serviceArea", label: "Service area" },
      { name: "servicesOffered", label: "Fencing and gate services offered", type: "textarea" },
      { name: "weldingTieIn", label: "Welding/custom iron capability", type: "select", options: yesNoOptions },
      { name: "licensed", label: "Licensed where required", type: "select", options: yesNoOptions },
      { name: "insurance", label: "Insurance", type: "select", options: yesNoOptions },
      { name: "portfolioPhotos", label: "Project photo/link placeholder", type: "file", accept: "image/*" },
      { name: "bio", label: "Experience and safety notes", type: "textarea" }
    ],
    jobFields: [
      { name: "fenceGateType", label: "Fence/gate type", type: "select", options: ["Fence repair", "New fence", "Custom iron gate", "Gate repair", "Ranch/farm fencing", "Privacy fencing", "Security gate", "Welding tie-in", "Other"] },
      { name: "materials", label: "Preferred materials" },
      { name: "linearFeet", label: "Approximate linear feet / measurements" },
      { name: "gateCount", label: "Number of gates" },
      { name: "propertyLineKnown", label: "Property line confirmed?", type: "select", options: ["Yes", "No", "Not sure"] },
      { name: "repairOrInstall", label: "Repair or new install?", type: "select", options: ["Repair", "New install", "Both", "Not sure"] },
      { name: "accessNotes", label: "Access, slope, animals, utilities, or welding notes", type: "textarea" }
    ]
  },
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
const requiredTradeCategories = [
  { id: "electrician", label: "Electrician", description: "electrical repair, panels, lighting, outlets, wiring", aliases: ["Electrical", "Electrical Repair", "Panels", "Lighting", "Outlets", "Wiring"], providerTypes: ["Individual Electrician", "Electrical Crew", "Electrical Contractor / Company"], tags: ["panels", "lighting", "outlets", "wiring", "troubleshooting"] },
  { id: "plumbing", label: "Plumbing", description: "leaks, drains, water heaters, fixtures", aliases: ["Plumbing Repair", "Leaks", "Drains", "Water Heaters", "Fixtures"], providerTypes: ["Individual Plumber", "Plumbing Crew", "Plumbing Company"], tags: ["leaks", "drains", "water heaters", "fixtures", "repair"] },
  { id: "hvac", label: "HVAC", description: "heating, cooling, ductwork, maintenance", aliases: ["Heating", "Cooling", "Ductwork", "HVAC Maintenance"], providerTypes: ["HVAC Technician", "HVAC Crew", "HVAC Company"], tags: ["heating", "cooling", "ductwork", "maintenance", "diagnostics"] },
  { id: "roofing", label: "Roofing", description: "roof repair, replacement, gutters, inspections", aliases: ["Roof Repair", "Roof Replacement", "Gutters", "Roof Inspections"], providerTypes: ["Roofer", "Roofing Crew", "Roofing Company"], tags: ["roof repair", "replacement", "gutters", "inspection", "leak repair"] },
  { id: "carpentry", label: "Carpentry", description: "framing, trim, decks, repairs, custom woodwork", aliases: ["Framing", "Trim", "Decks", "Wood Repairs", "Custom Woodwork"], providerTypes: ["Carpenter", "Carpentry Crew", "Carpentry Company"], tags: ["framing", "trim", "decks", "repairs", "custom woodwork"] },
  { id: "welding", label: "Welding", description: "mobile welding, fabrication, repair", aliases: ["Mobile Welding", "Fabrication", "Metal Repair"], providerTypes: ["Mobile Welder", "Welding Crew", "Fabrication Company"], tags: ["mobile welding", "fabrication", "repair", "steel", "aluminum"] },
  { id: "concrete", label: "Concrete", description: "slabs, driveways, flatwork, repair", existingServiceVertical: true },
  { id: "masonry", label: "Masonry", description: "stone, brick, block, pavers, retaining walls", existingServiceVertical: true },
  { id: "heavy_equipment", label: "Heavy Equipment", description: "operators, excavation, grading, land clearing", aliases: ["Excavation", "Grading", "Land Clearing", "Equipment Operators"], providerTypes: ["Equipment Operator", "Excavation Crew", "Heavy Equipment Company"], tags: ["excavation", "grading", "land clearing", "operators", "equipment"] },
  { id: "cdl_training", label: "CDL Training", description: "CDL prep, driving instruction, trucking mentorship", aliases: ["CDL Prep", "Driving Instruction", "Trucking Mentorship"], providerTypes: ["CDL Instructor", "Driving Mentor", "Training Company"], tags: ["CDL prep", "driving instruction", "mentorship", "trucking", "training"] },
  { id: "diesel_mechanics", label: "Diesel Mechanics", description: "diesel trucks, equipment repair, fleet maintenance", aliases: ["Diesel Repair", "Diesel Truck Service", "Equipment Repair", "Fleet Maintenance"], providerTypes: ["Diesel Mechanic", "Mobile Diesel Crew", "Diesel Repair Company"], tags: ["diesel trucks", "equipment repair", "fleet maintenance", "mobile repair", "diagnostics"] },
  { id: "automotive", label: "Automotive", description: "mechanic work, detailing, transport, diagnostics", aliases: ["Auto Repair", "Mechanic Work", "Detailing", "Vehicle Transport", "Diagnostics"], providerTypes: ["Auto Mechanic", "Detailing Provider", "Transport Provider", "Auto Service Company"], tags: ["mechanic work", "detailing", "transport", "diagnostics", "inspection"] },
  { id: "landscaping", label: "Landscaping", description: "mowing, cleanups, irrigation, planting, yard work", aliases: ["Mowing", "Yard Cleanups", "Irrigation", "Planting", "Yard Work"], providerTypes: ["Landscaper", "Landscaping Crew", "Landscaping Company"], tags: ["mowing", "cleanups", "irrigation", "planting", "yard work"] },
  { id: "arborist", label: "Arborist", description: "tree trimming, removal, stump work, tree health", aliases: ["Tree Trimming", "Tree Removal", "Stump Work", "Tree Health"], providerTypes: ["Arborist", "Tree Crew", "Tree Service Company"], tags: ["tree trimming", "tree removal", "stump work", "tree health", "risk assessment"] },
  { id: "solar_installation", label: "Solar Installation", description: "solar panels, battery systems, inspections", aliases: ["Solar Panels", "Battery Systems", "Solar Inspections"], providerTypes: ["Solar Installer", "Solar Crew", "Solar Company"], tags: ["solar panels", "battery systems", "inspections", "mounting", "maintenance"] },
  { id: "fiber_optics", label: "Fiber Optics", description: "fiber install, repair, trenching, low-voltage fiber work", aliases: ["Fiber Install", "Fiber Repair", "Fiber Trenching", "Low-Voltage Fiber Work"], providerTypes: ["Fiber Technician", "Fiber Crew", "Fiber Contractor"], tags: ["fiber install", "fiber repair", "trenching", "low-voltage fiber", "splicing"] },
  { id: "low_voltage_systems", label: "Low Voltage Systems", description: "cameras, security, networking, access control", aliases: ["Cameras", "Security Systems", "Networking", "Access Control"], providerTypes: ["Low Voltage Technician", "Security / Network Crew", "Low Voltage Company"], tags: ["cameras", "security", "networking", "access control", "structured cabling"] },
  { id: "appliance_repair", label: "Appliance Repair", description: "washer, dryer, fridge, oven, dishwasher repair", aliases: ["Washer Repair", "Dryer Repair", "Fridge Repair", "Oven Repair", "Dishwasher Repair", "Appliance install"], providerTypes: ["Appliance Repair Technician", "Appliance Service Crew", "Appliance Repair Company"], tags: ["washer", "dryer", "fridge", "oven", "dishwasher"] },
  { id: "painting", label: "Painting", description: "interior, exterior, prep, staining, touch-ups", aliases: ["Interior Painting", "Exterior Painting", "Staining", "Touch-Ups", "Paint Prep"], providerTypes: ["Painter", "Painting Crew", "Painting Company"], tags: ["interior", "exterior", "prep", "staining", "touch-ups"] },
  { id: "general_contracting", label: "General Contracting", description: "remodels, additions, project management, multi-trade jobs", aliases: ["Remodels", "Additions", "Project Management", "Multi-Trade Jobs"], providerTypes: ["General Contractor", "Multi-Trade Crew", "Contracting Company"], tags: ["remodels", "additions", "project management", "multi-trade", "licensed if required"] }
];
const requiredTradeCategoryLabels = requiredTradeCategories.map((category) => category.label);
const requiredTradeCategoryDescriptions = Object.fromEntries(requiredTradeCategories.map((category) => [category.label, category.description]));

function createTradeServiceVertical(category) {
  const providerTypes = category.providerTypes || [`Individual ${category.label} Provider`, `${category.label} Crew`, `${category.label} Company`];
  const tags = uniqueValues([...(category.tags || []), "individual worker", "crew", "company", "licensed if required", "insured if applicable"]);
  return {
    id: category.id,
    title: category.label,
    shortTitle: category.label,
    publicHeadline: `Forge ${category.label}`,
    publicSubheadline: category.description,
    publicBody: `Forge helps customers find local workers, crews, and businesses for ${category.description}. Providers can build profiles, show experience, and bid on local jobs.`,
    ctas: [`Post a ${category.label} Job`, `Find ${category.label} Help`, `Join as a ${category.label} Provider`],
    categories: uniqueValues([category.label, ...(category.aliases || [])]),
    providerTypes,
    tags,
    filters: uniqueValues([category.label, ...(category.tags || []), "Service area", "Availability", "Licensed if required", "Insured", "Portfolio photos", "Individual worker", "Crew", "Company"]),
    checklist: [
      "Confirm scope and safety requirements",
      "Confirm service area and availability",
      "Confirm license, insurance, permit, or code requirements where applicable",
      "Confirm photos, access notes, budget, schedule, and customer contact details"
    ],
    providerFields: [
      { name: "businessName", label: "Business / profile name" },
      { name: "ownerName", label: "Owner / contact name" },
      { name: "contactMethod", label: "Preferred contact method", type: "select", options: ["Phone", "Text", "Email", "Either phone or email"] },
      { name: "serviceArea", label: "Service area" },
      { name: "yearsExperience", label: "Years of experience" },
      { name: "availability", label: "Availability", type: "textarea", placeholder: "Days, hours, emergency availability, or scheduling notes" },
      { name: "servicesOffered", label: "Categories / services offered", type: "textarea", placeholder: category.description },
      { name: "licenseStatus", label: "License status if applicable", type: "select", options: ["Not sure / not applicable", "Licensed", "License pending", "Not licensed"] },
      { name: "insuranceStatus", label: "Insurance status", type: "select", options: ["Not sure", "Insured", "Insurance pending", "Not insured"] },
      { name: "portfolioPhotos", label: "Portfolio / past project photos", type: "file", accept: "image/*" },
      { name: "experienceDescription", label: "Experience description", type: "textarea" }
    ],
    jobFields: [
      { name: "workNeeded", label: "Work needed", type: "textarea", placeholder: category.description },
      { name: "propertyType", label: "Property / site type", type: "select", options: ["Home", "Business", "Rental", "Jobsite", "Vehicle / fleet", "Land", "Other"] },
      { name: "serviceAddress", label: "Service address or nearest cross street" },
      { name: "desiredDate", label: "Desired date", type: "date" },
      { name: "desiredTimeWindow", label: "Desired time window" },
      { name: "accessNotes", label: "Access / safety notes", type: "textarea" },
      { name: "materialsStatus", label: "Materials / parts status", type: "select", options: ["Customer has materials", "Provider should include materials", "Not sure yet", "Labor only"] },
      { name: "permitOrLicenseNotes", label: "Permit / license notes if applicable", type: "textarea" }
    ]
  };
}

serviceVerticals.push(...requiredTradeCategories.filter((category) => !category.existingServiceVertical).map(createTradeServiceVertical));
const serviceVerticalCategoryOptions = uniqueValues(serviceVerticals.flatMap((vertical) => vertical.categories));
const premiumServiceCategories = [
  {
    rank: 1,
    title: "Roofing",
    verticalId: "roofing",
    category: "Roofing",
    body: "Roof replacement, leaks, gutters, inspections, and insurance-claim-ready project intake.",
    ticket: "$8k-$25k jobs",
    tags: ["Leaks", "Replacement", "Insurance claims"]
  },
  {
    rank: 2,
    title: "HVAC",
    verticalId: "hvac",
    category: "HVAC",
    body: "Heating, cooling, mini splits, diagnostics, maintenance, and emergency comfort calls.",
    ticket: "High lifetime value",
    tags: ["Repairs", "Installs", "Maintenance"]
  },
  {
    rank: 3,
    title: "Electrical",
    verticalId: "electrician",
    category: "Electrician",
    body: "Panels, outlets, wiring, lighting, remodel work, residential, and commercial service.",
    ticket: "Urgent + remodel",
    tags: ["Panels", "Lighting", "Emergency"]
  },
  {
    rank: 4,
    title: "Plumbing",
    verticalId: "plumbing",
    category: "Plumbing",
    body: "Leaks, water heaters, drains, fixtures, remodel plumbing, and sewer-related follow-up.",
    ticket: "Emergency demand",
    tags: ["Leaks", "Water heaters", "Drains"]
  },
  {
    rank: 5,
    title: "Concrete & Asphalt",
    verticalId: "asphalt_concrete",
    category: "Concrete",
    body: "Driveways, slabs, sidewalks, parking pads, pavement repair, sealcoating, and removal.",
    ticket: "$5k-$20k projects",
    tags: ["Driveways", "Slabs", "Parking lots"]
  },
  {
    rank: 6,
    title: "Remodeling",
    verticalId: "general_contracting",
    category: "General Contracting",
    body: "Remodels, additions, repairs, multi-trade jobs, project management, and GC review.",
    ticket: "Major project value",
    tags: ["Kitchens", "Additions", "Multi-trade"]
  },
  {
    rank: 7,
    title: "Excavation",
    verticalId: "heavy_equipment",
    category: "Excavation",
    body: "Grading, trenching, land clearing, driveway prep, equipment operators, and site work.",
    ticket: "Heavy equipment",
    tags: ["Grading", "Trenching", "Land clearing"]
  },
  {
    rank: 8,
    title: "Tree Service",
    verticalId: "arborist",
    category: "Tree Removal",
    body: "Tree removal, trimming, stump work, storm cleanup, risk review, and property safety.",
    ticket: "High urgency",
    tags: ["Removal", "Trimming", "Storm cleanup"]
  }
];
const browseAllServiceCategories = [
  "Landscaping",
  "Lawn care",
  "Tree service",
  "Junk Removal",
  "Moving help",
  "Cleaning",
  "Handyman",
  "Painting",
  "Drywall",
  "Roofing",
  "Plumbing",
  "Electrical",
  "HVAC",
  "Concrete",
  "Excavation",
  "Welding",
  "Fencing",
  "Custom iron gates",
  "Towing",
  "Mobile mechanics",
  "Auto detailing",
  "Tire service",
  "Glass repair",
  "Locksmith",
  "Photography",
  "Videography",
  "Farm labor",
  "Harvesting",
  "Bucking",
  "Trimming",
  "Sorting",
  "Weighing",
  "Packaging",
  "Facility cleanup",
  "General labor",
  "Product manufacturing support",
  "Fulfillment support",
  "Packaging and labeling support",
  "Auto & Transport",
  "Manufacturing",
  "Business Growth",
  "Licensed cannabis support",
  "Personal Driver",
  "Pressure Washing",
  "Window Cleaning",
  "Flooring",
  "Trade Pathways"
];
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
const categories = uniqueValues(["Handyman", ...requiredTradeCategoryLabels, "Landscaping", "Junk Removal", "Moving", "Painting", "Plumbing", "Electrical", "Cleaning", ...serviceVerticalCategoryOptions, ...optionalExtraServiceCategories, CREATIVE_CATEGORY_LABEL, NORTHSTAR_CATEGORY_LABEL, MANUFACTURING_CATEGORY_LABEL]);
const forgeTradeCategorySchema = {
  requiredLabels: requiredTradeCategoryLabels,
  descriptions: requiredTradeCategoryDescriptions,
  acceptsCategory(value) {
    return categories.includes(categoryLabel(value));
  },
  validateJob(input) {
    const errors = [];
    if (!this.acceptsCategory(input.category)) errors.push("Select a valid Forge trade category.");
    if (!String(input.title || "").trim()) errors.push("Add a job title.");
    if (!String(input.location || "").trim()) errors.push("Add a job location.");
    if (!String(input.customer || "").trim()) errors.push("Add customer contact details.");
    return { ok: errors.length === 0, errors };
  },
  validateProvider(input) {
    const selectedCategories = input.tradeCategories || [];
    const hasKnownCategory = selectedCategories.some((category) => this.acceptsCategory(category)) || this.acceptsCategory(input.trade);
    const errors = [];
    if (!String(input.name || "").trim()) errors.push("Add provider name.");
    if (!String(input.phone || "").trim() && !String(input.email || "").trim()) errors.push("Add provider phone or email.");
    if (!input.serviceVertical && !hasKnownCategory) errors.push("Select at least one Forge trade category.");
    return { ok: errors.length === 0, errors };
  }
};
const jobStatuses = uniqueValues(["New", "Submitted", "Pending", "Contacted", "Matching", "Quoted", "Accepted", "Assigned", "In Progress", "Completed", "Canceled", ...serviceJobStatusLabels]);
const workerStatuses = ["New", "Submitted", "Contacted", "Ready", "Approved", "Rejected", "Suspended", "Paused"];
const referralStatuses = ["New", "Contacted", "Converted", "Later"];
const roadRescueStatuses = ["New", "Contacted", "Provider Notified", "Matched", "Closed"];
const creativeRequestStatuses = ["submitted", "reviewing", "quoted", "accepted", "assigned", "completed", "canceled"];
const creativeProviderStatuses = ["draft", "submitted", "under_review", "approved", "rejected", "suspended"];
const manufacturingLeadStatuses = [
  "Request received",
  "Sourcing manufacturers",
  "Awaiting bids",
  "Sampling",
  "Formulation",
  "Production quote",
  "Manufacturing selected",
  "In production",
  "Testing",
  "Packaging",
  "Ready to ship",
  "Completed",
  "New RFQ",
  "Needs Review",
  "Supplier Matching",
  "Quote Requested",
  "Quote Received",
  "Sample Requested",
  "Compliance Review",
  "PO Pending",
  "Production Started",
  "Production Complete",
  "Fulfillment / Shipping",
  "Closed Won",
  "Closed Lost"
];
const manufacturingSupplierStatuses = ["Needs Review", "Profile Draft", "Verified by Forge - placeholder", "Paused"];
const manufacturingSupplierLeadSources = ["Thomasnet", "Google", "LinkedIn", "Trade show", "Referral", "Direct website", "Inbound inquiry", "Existing relationship", "Manual research", "CSV import", "Other"];
const manufacturingSupplierLeadStatuses = ["Not contacted", "Contacted", "Replied", "Qualified", "Not a fit", "Follow-up needed", "Partner", "Customer", "Invited to Join Forge", "Converted to Provider Profile", "Manufacturing Opportunity Created"];
const manufacturingRelatedVerticals = ["Manufacturing", "Hauling", "Cleaning", "Concrete / Asphalt", "Masonry", "Other"];
const manufacturingTestingOptions = ["COA", "Heavy metals", "Microbials", "Potency", "Stability", "Allergen", "Third-party lab", "Other"];
const manufacturingYesNoReviewOptions = ["No", "Yes", "Not sure"];
const manufacturingBidStatuses = ["Submitted", "Selected", "Declined", "Withdrawn"];
const manufacturingLegacyStatusMap = {
  "New RFQ": "Request received",
  "Needs Review": "Request received",
  "Supplier Matching": "Sourcing manufacturers",
  "Quote Requested": "Awaiting bids",
  "Quote Received": "Production quote",
  "Sample Requested": "Sampling",
  "Compliance Review": "Formulation",
  "PO Pending": "Manufacturing selected",
  "Production Started": "In production",
  "Production Complete": "Ready to ship",
  "Fulfillment / Shipping": "Ready to ship",
  "Closed Won": "Completed",
  "Closed Lost": "Completed"
};
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
const FLEX_REFERRAL_URL_PLACEHOLDER = "https://REPLACE-WITH-OFFICIAL-FLEX-PARTNER-LINK";
const FLEX_APP_URL = FORGE_ENV.FLEX_APP_URL || "";
const NEXT_PUBLIC_FLEX_REFERRAL_URL = FORGE_ENV.NEXT_PUBLIC_FLEX_REFERRAL_URL || FLEX_REFERRAL_URL_PLACEHOLDER;
const FLEX_PARTNER_MODE = "referral";
const FORGE_CAPITAL_DESK_ENABLED = true;
const FORGE_LEAD_NOTIFY_EMAIL = "admin@forge.local";
const FORGE_GHL_WEBHOOK_URL = FORGE_ENV.FORGE_GHL_WEBHOOK_URL || "";
const FORGE_ZAPIER_WEBHOOK_URL = FORGE_ENV.FORGE_ZAPIER_WEBHOOK_URL || "";
const FLEX_COMPLIANCE_COPY = "Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Forge may refer eligible business owners to Flex through an approved partner/referral relationship. Flex products are subject to eligibility, approval, fees, terms, and conditions. Do not submit bank logins, SSNs, full account numbers, or sensitive financial documents through Forge.";
const BUILDING_COMPLIANCE_COPY = "Forge is a marketplace and project coordination platform. Forge is not the contractor of record, lender, bank, broker-dealer, financial advisor, or credit provider. Partner routing is subject to project fit, customer consent, licensing, insurance, eligibility, written partner approval, and separate agreements between the customer and the applicable partner. Forge does not publicly claim official partnerships, use partner logos, or share customer information with third-party partners unless the required approvals and consent are in place.";
const MANUFACTURING_COMPLIANCE_COPY = "Forge does not provide legal, medical, FDA, FTC, tax, or compliance advice. Supplement, nutraceutical, CBD/hemp, food, beverage, cosmetic, and pet wellness products may require specialized legal review, testing, labeling, claims review, insurance, and regulatory compliance before sale. Users are responsible for confirming all applicable federal, state, and local requirements.";
const MANUFACTURING_DIRECTORY_BOUNDARY_COPY = "Thomasnet-style supplier-discovery workflows may be used only as a benchmark for how buyers search, filter, and request quotes. Forge uses original marketplace structure, user-submitted profiles, demo placeholders, and consent-based relationships. Do not scrape, copy, import, or reproduce proprietary supplier listings, descriptions, profiles, categories, images, or data.";
const MANUFACTURING_IMPORT_PERMISSION_COPY = "Only import supplier data you have permission to use. Do not scrape, data mine, or copy third-party directories into Forge.";
const MANUFACTURING_OUTREACH_TEMPLATE = `Subject: Manufacturing partnership opportunity with Forge

Hi {{companyName}}, my name is Andrew with Forge. We are building a service marketplace that helps customers and businesses find qualified manufacturers, contractors, service providers, and blue-collar companies. I'm reaching out because your company may be a fit for vitamin, supplement, nutraceutical, packaging, testing, or fulfillment opportunities. We would love to learn what types of projects you accept, your MOQ, capabilities, certifications, and whether you are open to receiving qualified manufacturing requests through Forge.`;
const manufacturingSupplierTypes = [
  "Vitamin Manufacturer",
  "Supplement Manufacturer",
  "Nutraceutical Manufacturer",
  "Contract Manufacturer",
  "Private Label Manufacturer",
  "White Label Manufacturer",
  "Gummy Manufacturer",
  "Capsule Manufacturer",
  "Tablet Manufacturer",
  "Powder Manufacturer",
  "Sports Nutrition Manufacturer",
  "Pet Supplement Manufacturer",
  "Packaging / Labeling Provider",
  "Fulfillment Provider",
  "Ingredient Supplier",
  "Formulation Consultant",
  "Lab Testing Provider",
  "Vitamin manufacturers",
  "Nutraceutical manufacturers",
  "Supplement contract manufacturers",
  "Private-label supplement companies",
  "Capsule manufacturers",
  "Tablet manufacturers",
  "Softgel manufacturers",
  "Gummy and chew manufacturers",
  "Creatine chew manufacturers",
  "Protein powder manufacturers",
  "Pre-workout manufacturers",
  "Collagen manufacturers",
  "Curcumin/turmeric supplement manufacturers",
  "Functional beverage manufacturers",
  "Electrolyte and hydration product manufacturers",
  "Honey/wellness product manufacturers",
  "CBD/hemp finished-goods manufacturers where legal",
  "Pet supplement manufacturers",
  "Skincare/cosmetic manufacturers",
  "Oral care manufacturers",
  "Packaging suppliers",
  "Label and holographic-label suppliers",
  "Bottle, jar, pouch, sachet, stick-pack, and tube suppliers",
  "Ingredient suppliers",
  "Flavor houses",
  "Formulators",
  "Testing labs",
  "GMP consultants",
  "FDA/FTC compliance consultants",
  "Fulfillment and 3PL providers",
  "White-label product partners"
];
const manufacturingProductCategories = [
  "Vitamin Manufacturing",
  "Supplement Manufacturing",
  "Nutraceutical Manufacturing",
  "Private Label Supplements",
  "Contract Manufacturing",
  "White Label Vitamins",
  "Capsule Manufacturing",
  "Tablet Manufacturing",
  "Gummy Manufacturing",
  "Powder Manufacturing",
  "Protein Powder Manufacturing",
  "Pre-Workout Manufacturing",
  "Creatine Product Manufacturing",
  "Collagen Product Manufacturing",
  "Electrolyte Product Manufacturing",
  "Greens Powder Manufacturing",
  "CBD / Hemp Product Manufacturing, only where legal and compliant",
  "Pet Supplement Manufacturing",
  "Sports Nutrition Manufacturing",
  "Packaging & Labeling",
  "Bottling",
  "Pouch Packaging",
  "Stick Pack Packaging",
  "Blister Packaging",
  "Fulfillment",
  "Formulation Support",
  "Flavoring Support",
  "Ingredient Sourcing",
  "Lab Testing",
  "COA / Certificate of Analysis Support",
  "cGMP Manufacturing",
  "FDA-Registered Facility Support",
  "Organic-Certified Manufacturing",
  "Kosher-Certified Manufacturing",
  "Halal-Certified Manufacturing",
  "NSF / Informed Sport / third-party testing support",
  "Vitamins",
  "Supplements",
  "Nutraceuticals",
  "Gummies",
  "Chews",
  "Creatine gummies/chews",
  "Protein/whey products",
  "Pre-workout",
  "Collagen",
  "Curcumin/turmeric",
  "Electrolyte/hydration products",
  "Functional beverages",
  "Honey/wellness products",
  "Skincare/cosmetics",
  "Oral care",
  "Pet wellness products",
  "CBD/hemp where legal",
  "Private-label product manufacturing",
  "Packaging",
  "Testing/lab services",
  "Compliance consulting",
  "Fulfillment/3PL"
];
const productPathMatchTypes = ["Fastest Lead Time", "Best Startup MOQ", "Premium / cGMP / High Volume"];
const productPathSupplierCodes = [
  ["Vitamin Manufacturing", "EB-VIT", "standard"],
  ["Supplement Manufacturing", "EB-SUP", "standard"],
  ["Nutraceutical Manufacturing", "EB-NUT", "standard"],
  ["Private Label Supplements", "EB-PLS", "standard"],
  ["Contract Manufacturing", "EB-CMO", "standard"],
  ["White Label Vitamins", "EB-WLV", "standard"],
  ["Capsule Manufacturing", "EB-CAP", "standard"],
  ["Tablet Manufacturing", "EB-TAB", "standard"],
  ["Gummy Manufacturing", "EB-GUM", "standard"],
  ["Powder Manufacturing", "EB-PWD", "standard"],
  ["Protein Powder Manufacturing", "EB-PRO", "standard"],
  ["Pre-Workout Manufacturing", "EB-PRE", "standard"],
  ["Creatine Product Manufacturing", "EB-CRT", "standard"],
  ["Collagen Product Manufacturing", "EB-COL", "standard"],
  ["Electrolyte Product Manufacturing", "EB-ELY", "standard"],
  ["Greens Powder Manufacturing", "EB-GRN", "standard"],
  ["CBD / Hemp Product Manufacturing", "EB-HEM", "hemp_cbd"],
  ["Pet Supplement Manufacturing", "EB-PET", "pet"],
  ["Sports Nutrition Manufacturing", "EB-SPN", "standard"],
  ["Packaging & Labeling", "EB-PAL", "standard"],
  ["Bottling", "EB-BOT", "standard"],
  ["Pouch Packaging", "EB-POU", "standard"],
  ["Stick Pack Packaging", "EB-STK", "standard"],
  ["Blister Packaging", "EB-BLI", "standard"],
  ["Fulfillment", "EB-FUL", "standard"],
  ["Formulation Support", "EB-FRM", "standard"],
  ["Flavoring Support", "EB-FLV", "standard"],
  ["Ingredient Sourcing", "EB-ING", "standard"],
  ["Lab Testing", "EB-LAB", "testing"],
  ["COA / Certificate of Analysis Support", "EB-COA", "testing"],
  ["cGMP Manufacturing", "EB-CGM", "standard"],
  ["FDA-Registered Facility Support", "EB-FDA", "standard"]
];
const productPaths = productPathSupplierCodes.map(([title, prefix, regulatoryLevel], index) => ({
  id: `product-path-${index + 1}`,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  title,
  categoryGroup: /Packaging|Bottling|Pouch|Stick|Blister|Fulfillment/.test(title)
    ? "Packaging / operations"
    : /Lab|COA|cGMP|FDA/.test(title)
      ? "Testing / compliance"
      : "Manufacturing",
  regulatoryLevel,
  description: `${title} requests are routed through anonymous public match cards first, then admin verifies supplier fit, compliance, quote math, and approval before any customer-facing final quote.`,
  supplierCodes: [1, 2, 3].map((rank) => `${prefix}-00${rank}`)
}));
const productPathBySlug = (slug) => productPaths.find((path) => path.slug === slug) || productPaths[0];
const productPathComplianceCopy = {
  standard: "Manufacturing, ingredients, claims, labeling, COAs, testing, and facility documentation must be reviewed before production.",
  testing: "Testing, COA, lab, chain-of-custody, claims, and documentation scope must be reviewed before production or customer quote release.",
  pet: "Pet supplement projects may require ingredient, claims, labeling, safety, species, testing, and facility documentation review before production.",
  hemp_cbd: "CBD / hemp projects are available only where legal and compliant. Product classification, jurisdiction, COA, THC limits, labeling, and supplier documentation must be reviewed before acceptance."
};
function productPathSupplierMatches(path) {
  const moqs = ["Pilot to 2,500 units", "Low startup MOQ", "High-volume MOQ"];
  const leadTimes = ["3-6 weeks after approval", "6-10 weeks after approval", "8-14 weeks after approval"];
  return path.supplierCodes.map((code, index) => ({
    code,
    matchType: productPathMatchTypes[index],
    capabilitySummary: `${path.title} support with anonymous supplier routing, admin review, compliance checks, and quote approval before any identity reveal.`,
    moqRange: moqs[index],
    leadTimeRange: leadTimes[index],
    badges: index === 0
      ? ["Fast route", "Admin review", "No identity reveal"]
      : index === 1
        ? ["Startup MOQ", "Quote gate", "Compliance review"]
        : ["cGMP ready", "High volume", "Approved quote only"]
  }));
}
function productPathQuotePolicy(path) {
  return {
    path: path.title,
    base_supplier_quote: "admin_only",
    markup_percent_default: 20,
    customer_quote: "base_supplier_quote * 1.20 after admin approval",
    expedited_service_fee: "customer_quote - base_supplier_quote",
    display_mode: "admin can show bundled final price or 20% expedited sourcing and project-management fee"
  };
}
const manufacturingDosageForms = ["Capsule", "Tablet", "Gummy", "Chew", "Powder", "Liquid", "Beverage", "Softgel", "Stick pack", "Sachet", "Shot", "Tincture", "Topical", "Pet product", "Other"];
const manufacturingFormulaStatuses = ["Need help creating formula", "Have rough idea", "Have final formula", "Need white label product", "Idea only", "Existing formula", "Needs formulation", "Ready for production"];
const manufacturingCleanLabelOptions = ["Organic", "Vegan", "Non-GMO", "Gluten-free", "Sugar-free", "Clean-label"];
const manufacturingCertificationOptions = ["GMP", "NSF", "USDA Organic", "Kosher", "Halal", "FDA-registered facility", "ISO", "SQF", "Third-party COA", "Stability testing"];
const manufacturingBudgetRanges = ["Not sure yet", "Under $10k", "$10k - $25k", "$25k - $75k", "$75k - $150k", "$150k+"];
const manufacturingMoqFilterOptions = ["All MOQs", "Low MOQ", "Under 5,000 units", "5,000 - 25,000 units", "25,000+ units"];
const manufacturingFilterFlags = [
  "Vitamin manufacturing",
  "Supplement manufacturing",
  "Gummies",
  "Capsules",
  "Tablets",
  "Powders",
  "Liquids",
  "Protein",
  "Pre-workout",
  "Creatine",
  "Collagen",
  "Electrolytes",
  "Greens",
  "Private label",
  "Custom formulation",
  "White label",
  "Low MOQ",
  "Packaging",
  "Fulfillment",
  "Lab testing",
  "cGMP",
  "FDA registered",
  "Organic",
  "NSF",
  "Informed Sport",
  "Kosher",
  "Halal",
  "Vegan",
  "Ships nationwide",
  "Accepting new clients",
  "Lead source",
  "Outreach status",
  "Private-label available",
  "Formulation available",
  "Packaging available",
  "CBD/hemp capable",
  "Pet product capable",
  "Organic / vegan / clean-label capability",
  "Rush production available",
  "Verified supplier status"
];
const manufacturingDocumentTemplates = [
  "Manufacturer onboarding checklist",
  "Supplier profile intake form",
  "Buyer RFQ intake form",
  "Mutual NDA template placeholder",
  "Non-circumvention agreement placeholder",
  "Manufacturing quote comparison sheet",
  "Vendor verification checklist",
  "Product launch checklist",
  "GMP/FDA compliance checklist placeholder",
  "Label and claims review checklist",
  "COA/testing checklist",
  "Packaging checklist",
  "Purchase order template placeholder",
  "Production timeline template",
  "Fulfillment/3PL checklist",
  "Supplier scorecard",
  "Buyer follow-up CRM checklist"
];
const manufacturingEcosystemItems = [
  "Eden's Best supplements",
  "The Health Center retail product pipeline",
  "Knockout Nutrients / KAT Sport-style sports nutrition",
  "Creatine gummies/chews",
  "Pre-workout",
  "Collagen",
  "Curcumin",
  "Protein/whey products",
  "Electrolyte/hydration products",
  "Honey/wellness products",
  "Pet wellness products under Leo and Lacy",
  "CBD/hemp wellness products only where legal and compliant",
  "Oral care and skincare product manufacturing"
];
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
const providerBusinessSizeOptions = [
  "Solo Operator",
  "Small Local Business",
  "Established Trade Company",
  "Enterprise / Anchor Contractor"
];
const providerNorthStarHelpOptions = [
  "No, just list me on Forge",
  "Yes, I need more leads",
  "Yes, I need a website",
  "Yes, I need Google Business help",
  "Yes, I need ads",
  "Yes, I need social media",
  "Yes, I need photos/videos",
  "Yes, I need a CRM and follow-up system",
  "Yes, I need full-scale marketing",
  "Yes, I am a larger company and want a growth consultation"
];
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
    body: "For contractors, builders, service businesses, and project operators who need stronger systems for cash flow, bill pay, vendor payments, expense cards, working capital, and business finance operations. Forge can collect a basic request and refer qualified business owners through the Flex referral channel when appropriate.",
    bestFor: ["Contractors", "Builders", "Service businesses", "Blue-collar companies", "Project operators", "Businesses with payroll, invoices, vendors, or material costs"],
    button: "Check Flex Options",
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
    title: "Find Me a Vehicle",
    tag: "request_vehicle",
    body: "Tell Forge the vehicle type, budget, financing/trade-in plan, mileage limit, must-have features, and timeline so S&A Auto or an approved seller-of-record path can review fit.",
    action: "focus-auto-request",
    formTarget: "Find Me a Vehicle"
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
  ...manufacturingDocumentTemplates.map((title, index) => ({
    id: `manufacturing-template-${index + 1}`,
    category: "Manufacturing Operations",
    title,
    type: title.toLowerCase().includes("agreement") || title.toLowerCase().includes("nda") || title.toLowerCase().includes("purchase order") ? "Template placeholder - requires legal review before use" : "Checklist / template placeholder",
    owner: "Manufacturing Ops",
    status: title.toLowerCase().includes("legal") || title.toLowerCase().includes("agreement") || title.toLowerCase().includes("nda") || title.toLowerCase().includes("fda") ? "Attorney or compliance review required" : "Draft placeholder",
    version: "0.1",
    reviewed: "2026-06-26",
    tags: ["manufacturing", "nutraceuticals", "supplements"],
    checklist: ["Use original Forge intake data", "Confirm buyer/supplier consent", "Record compliance flags", "Do not copy external directory content", "Review before production or partner routing"],
    body: `${title} for Forge Manufacturing + Nutraceuticals. Placeholder only. Use with original Forge RFQ/profile data, company-created supplier information, and proper legal, FDA, FTC, claims, label, testing, insurance, CBD/hemp, food, beverage, cosmetic, pet wellness, and state/local review where applicable.`
  })),
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
const northstarBlueCollarCategories = [
  "Roofing",
  "Construction",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Concrete",
  "Asphalt",
  "Masonry",
  "Auto",
  "Hauling",
  "Cleaning",
  "Photography/Videography",
  "Manufacturing",
  "Landscaping",
  "Tree service",
  "Fencing",
  "Welding",
  "Diesel / fleet",
  "General contracting",
  "Other blue-collar business"
];
const northstarMarketingServices = [
  "Website design",
  "Website improvement",
  "Landing pages",
  "Logo and brand refresh",
  "Social media posts",
  "Instagram/Facebook content",
  "Short-form video content",
  "Photography/video coordination",
  "Google Business Profile setup",
  "Google Business Profile optimization",
  "Local SEO",
  "Google Ads",
  "Local Service Ads",
  "Paid ads",
  "Lead generation campaigns",
  "Email/SMS follow-up",
  "Review generation",
  "Reputation management",
  "Before/after project showcases",
  "Call tracking",
  "Missed-call text-back",
  "AI lead follow-up",
  "Recruiting campaigns",
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
  "Monthly reporting",
  "Executive dashboard",
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
  "More leads",
  "Full-scale marketing",
  "Marketing audit",
  "Hiring/recruiting",
  "Missed-call text-back",
  "AI receptionist",
  "Not sure / need help deciding"
];
const northstarBudgetOptions = ["Not sure yet", "Under $500/month", "$500 - $1,500/month", "$1,500 - $3,000/month", "$3,000 - $7,500/month", "$7,500+/month", "Project-based quote"];
const northstarAdSpendOptions = ["None", "Under $500/month", "$500 - $1,500/month", "$1,500 - $5,000/month", "$5,000 - $15,000/month", "$15,000+/month", "Not sure"];
const northstarLeadVolumeOptions = ["Not sure", "0-5 leads/month", "6-20 leads/month", "21-50 leads/month", "51-150 leads/month", "150+ leads/month"];
const northstarResidentialCommercialOptions = ["Residential jobs", "Commercial jobs", "Both residential and commercial", "Not sure"];
const northstarUrgencyOptions = ["Normal", "Urgent Follow-Up", "High-value consultation", "Nurture"];
const northstarLeadClassifications = ["Small Provider", "Growth Client", "Trade Pro Client", "Enterprise Prospect", "Urgent Follow-Up"];
const northstarMarketingScoreCategories = [
  ["website", "Website score", 20],
  ["googleBusiness", "Google Business score", 20],
  ["reviews", "Reviews score", 20],
  ["photosVideos", "Photos/videos score", 10],
  ["leadResponse", "Lead response speed score", 10],
  ["socialProof", "Social proof score", 10],
  ["crmFollowup", "CRM/follow-up score", 10]
];
const northstarPackages = [
  {
    name: "Forge Starter Presence",
    fit: "For solo providers and brand-new businesses.",
    includes: ["Provider profile optimization", "Business bio", "Service list", "Before/after photo guidance", "Review request template", "Simple social media starter posts", "Google Business recommendations", "Lead response script"]
  },
  {
    name: "Forge Local Growth",
    fit: "For small blue-collar companies.",
    includes: ["Website/landing page", "Google Business optimization", "Local SEO pages", "Social media posts", "Review generation", "Lead form setup", "CRM pipeline", "Follow-up texts/emails", "Monthly content calendar", "Basic ad setup"]
  },
  {
    name: "North Star Trade Pro",
    fit: "For established trade companies.",
    includes: ["Website improvement", "Google Ads", "Local SEO city pages", "Google Business posting", "Call tracking", "CRM setup", "AI lead follow-up", "Reputation management", "Photo/video content plan", "Landing pages by service", "Monthly reporting", "Hiring/recruiting campaigns", "Forge premium placement"]
  },
  {
    name: "North Star Enterprise Growth Partner",
    fit: "For large roofing companies, commercial contractors, regional service companies, and high-volume trade companies.",
    includes: ["Growth audit", "Website rebuild/conversion optimization", "Google Ads/Local Service Ads management", "Commercial landing pages", "Residential landing pages", "Emergency service campaigns", "HOA/property manager outreach", "Multi-city SEO", "Review system", "AI receptionist", "Missed-call text-back", "CRM/job pipeline", "Sales follow-up workflows", "Recruiting ads", "Fleet/truck branding review", "Content plan", "Monthly executive dashboard", "Quarterly strategy meeting"]
  }
];
const roofingMarketingServices = [
  "Roof replacement lead generation",
  "Roof repair lead generation",
  "Emergency leak repair ads",
  "Commercial roofing SEO",
  "Metal roofing pages",
  "TPO membrane commercial pages",
  "Gutter installation campaigns",
  "Storm damage inspection campaigns",
  "Roof maintenance plans",
  "HOA and property manager outreach",
  "Apartment and multi-family roofing campaigns",
  "Google Business review system",
  "Before/after project gallery",
  "Drone/photo/video content plan",
  "Recruiting campaign for roofers/laborers",
  "Missed-call text-back system",
  "Estimate follow-up automation",
  "Seasonal campaigns before rain, snow, heat, and fire season"
];
const roofingLandingPageTemplates = [
  "Roof Replacement Medford OR",
  "Roof Repair Medford OR",
  "Commercial Roofing Medford OR",
  "Metal Roofing Medford OR",
  "Emergency Roof Leak Repair Medford OR",
  "Gutter Installation Medford OR",
  "Roofing Contractor Grants Pass OR",
  "Roofing Contractor Ashland OR",
  "Roofing Contractor Central Point OR",
  "HOA Roofing Southern Oregon",
  "Multi-Family Roofing Southern Oregon",
  "Commercial Flat Roof Repair Southern Oregon"
];
const northstarStatuses = ["New", "Needs Review", "Contacted", "Audit Scheduled", "Proposal Needed", "Proposal Sent", "Won", "Lost", "Nurture Later"];
const autoDealers = [
  {
    id: "s-and-a-auto",
    name: "S&A Auto",
    region: "Southern Oregon",
    role: "Forge Auto sales partnership",
    status: "Featured sales partner",
    note: "S&A Auto is the featured Medford-facing sales partnership for Andrew/Scott buyer requests, trucks, diesel trucks, fleet/work vehicles, auction-watch leads, and dealer inventory validation. Scott's reported $100,000 vehicle-acquisition line of credit remains an internal underwriting note until verified.",
    setup: ["Approved contact", "Andrew/Scott lead intake path", "MAG Southern Oregon auction sourcing permissions", "Vehicle-acquisition line documentation", "Inventory/listing source", "Dealer terms", "Financing referral boundary", "Response expectation"]
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
    role: "Proposed lot / dealer pathway",
    status: "Subject to written agreement and legal verification",
    note: "Use Chevelles Auto only as a proposed lot/dealer pathway until written agreement, seller-of-record rules, dealer licensing, insurance, and legal verification are complete.",
    setup: ["Written agreement", "Seller-of-record process", "Approved contact", "Lead intake phone/email", "Inventory source", "Dealer terms", "Legal verification", "Response expectation"]
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
const admitlyPathwayOptions = [
  "College",
  "Trade School",
  "Apprenticeship",
  "Union Program",
  "Certification",
  "CDL / Driving",
  "Healthcare Certificate",
  "Construction Career",
  "Automotive / Diesel",
  "Creative / Media / Photography / Videography",
  "Entrepreneurship",
  "Other"
];
const academyOptions = [
  "Apply to Trade School",
  "Find an Apprenticeship",
  "Build My Resume",
  "Find Blue-Collar Jobs",
  "Join a Union Pathway",
  "Get Certified",
  "Hire Trained Workers",
  "Partner as a School or Employer"
];
const pathwayStatuses = ["New Lead", "Contacted", "Intake Complete", "Application Started", "Documents Needed", "Submitted", "Interview / Placement", "Accepted", "Hired / Placed", "Not Qualified", "Paused"];
const forgeCareerPlusFeatures = [
  "AI resume builder",
  "AI cover letter / application helper",
  "Trade school application support",
  "Apprenticeship application support",
  "Scholarship/grant search",
  "Interview prep",
  "Priority worker profile",
  "Priority job placement alerts",
  "Career dashboard"
];
const academyTradeOptions = ["Electrical", "Welding", "HVAC", "Plumbing", "Roofing / construction", "CDL / logistics", "Diesel / automotive", "Heavy equipment", "Fire / EMS", "CNA / medical assistant", "Agriculture / farm advancement", "Creative media", "Blue-collar AI field tech", "Other"];
const fundingNeedOptions = ["Not sure", "Needs scholarships/grants", "Needs financial aid", "Can self-pay", "Employer sponsored", "Low-cost options only"];
const routeByScreen = {
  post: "/request-help",
  signup: "/worker-signup",
  northstar: "/business",
  autos: "/auto",
  "forge-academy": "/forge-academy",
  "trade-pathways": "/trade-pathways",
  "road-rescue": "/road-rescue",
  creative: "/photography",
  "creative-request": "/photography/request",
  "creative-apply": "/photography/apply",
  northstar: "/northstar-creative",
  capital: "/forge/capital",
  manufacturing: "/manufacturing-nutraceuticals",
  "personal-driver": "/personal-driver",
  payments: "/forge-payments",
  "local-products": "/local-products",
  building: "/building",
  "admin-building-leads": "/admin/building-leads",
  projects: "/projects",
  "admin-projects": "/admin/projects",
  homebuilding: "/homebuilding",
  "homebuilding-tracker": "/homebuilding/tracker"
};
const screenByPath = {
  "/request-help": "post",
  "/request-help/": "post",
  "/post-job": "post",
  "/post-job/": "post",
  "/worker-signup": "signup",
  "/worker-signup/": "signup",
  "/business": "northstar",
  "/business/": "northstar",
  "/privacy": "legal",
  "/privacy/": "legal",
  "/terms": "legal",
  "/terms/": "legal",
  "/safety": "legal",
  "/safety/": "legal",
  "/auto": "autos",
  "/auto/": "autos",
  "/forge-academy": "forge-academy",
  "/forge-academy/": "forge-academy",
  "/forge-academy/apply": "forge-academy",
  "/forge-academy/apply/": "forge-academy",
  "/forge-academy/employers": "forge-academy",
  "/forge-academy/employers/": "forge-academy",
  "/forge-academy/schools": "forge-academy",
  "/forge-academy/schools/": "forge-academy",
  "/dashboard/career": "forge-academy",
  "/dashboard/career/": "forge-academy",
  "/admin/forge-academy": "admin",
  "/admin/forge-academy/": "admin",
  "/trade-pathways": "trade-pathways",
  "/trade-pathways/": "trade-pathways",
  "/trade-pathways/apply": "trade-pathways",
  "/trade-pathways/apply/": "trade-pathways",
  "/dashboard/trade-pathways": "trade-pathways",
  "/dashboard/trade-pathways/": "trade-pathways",
  "/admin/trade-pathways": "admin",
  "/admin/trade-pathways/": "admin",
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
  "/manufacturing-nutraceuticals": "manufacturing",
  "/manufacturing-nutraceuticals/": "manufacturing",
  "/forge/manufacturing": "manufacturing",
  "/forge/manufacturing/": "manufacturing",
  "/personal-driver": "personal-driver",
  "/personal-driver/": "personal-driver",
  "/private-driver": "personal-driver",
  "/private-driver/": "personal-driver",
  "/forge-payments": "payments",
  "/forge-payments/": "payments",
  "/merchant-services": "payments",
  "/merchant-services/": "payments",
  "/local-products": "local-products",
  "/local-products/": "local-products",
  "/makers": "local-products",
  "/makers/": "local-products",
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
    publicMode: true,
    visible: "Admin dashboard, lead capture, exports, and Zapier setup"
  }
];
const operatorScreenLabels = {
  admin: "Admin Dashboard",
  "admin-projects": "Admin Projects",
  "admin-building-leads": "Building Leads Admin",
  capture: "Lead Capture",
  reports: "Reports"
};
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
    area: "Medford, OR",
    providerType: "Individual Worker",
    tradeCategories: ["Handyman", "Carpentry", "General Contracting"],
    providerCategories: ["Handyman", "Carpentry", "General Contracting"]
  },
  workers: [
    {
      name: "Mike Jones",
      trade: "Handyman",
      phone: "(541) 555-9876",
      email: "mike.jones@email.com",
      experience: "5+ years",
      area: "Medford, OR",
      providerType: "Individual Worker",
      tradeCategories: ["Handyman", "Carpentry", "General Contracting"],
      providerCategories: ["Handyman", "Carpentry", "General Contracting"],
      status: "Ready"
    },
    {
      name: "Rosa Martinez",
      trade: "Landscaping",
      phone: "(541) 555-0148",
      email: "rosa@example.com",
      experience: "2-4 years",
      area: "Central Point, OR",
      providerType: "Landscaping Crew",
      tradeCategories: ["Landscaping", "Arborist"],
      providerCategories: ["Landscaping", "Arborist"],
      businessName: "Evergreen Tree & Landscape",
      availability: "Weekdays and Saturdays",
      insuranceStatus: "Insured",
      status: "New"
    },
    {
      name: "Avery Cole",
      trade: "Electrician",
      phone: "(541) 555-0191",
      email: "avery.electric@example.com",
      experience: "5+ years",
      area: "Medford, OR",
      businessName: "Rogue Valley Electric Co.",
      providerType: "Electrical Contractor / Company",
      serviceVertical: "electrician",
      serviceVerticalTitle: "Electrician",
      tradeCategories: ["Electrician", "Low Voltage Systems", "Solar Installation"],
      providerCategories: ["Electrician", "Low Voltage Systems", "Solar Installation"],
      availability: "Weekdays, emergency troubleshooting by request",
      licenseStatus: "Licensed",
      insuranceStatus: "Insured",
      status: "Ready"
    },
    {
      name: "Dante Brooks",
      trade: "Diesel Mechanics",
      phone: "(541) 555-0188",
      email: "dante.diesel@example.com",
      experience: "5+ years",
      area: "White City, OR",
      businessName: "Valley Diesel & Equipment",
      providerType: "Diesel Repair Company",
      serviceVertical: "diesel_mechanics",
      serviceVerticalTitle: "Diesel Mechanics",
      tradeCategories: ["Diesel Mechanics", "Heavy Equipment", "Automotive"],
      providerCategories: ["Diesel Mechanics", "Heavy Equipment", "Automotive"],
      availability: "Fleet maintenance windows and mobile repair calls",
      licenseStatus: "Not sure / not applicable",
      insuranceStatus: "Insured",
      status: "Ready"
    },
    {
      name: "Summit Build Crew",
      trade: "General Contracting",
      phone: "(541) 555-0164",
      email: "summit.build@example.com",
      experience: "5+ years",
      area: "Ashland, OR",
      businessName: "Summit Build Crew",
      providerType: "Multi-Trade Crew",
      serviceVertical: "general_contracting",
      serviceVerticalTitle: "General Contracting",
      tradeCategories: ["Roofing", "Carpentry", "Painting", "General Contracting"],
      providerCategories: ["Roofing", "Carpentry", "Painting", "General Contracting"],
      availability: "Bid walks Tuesday through Friday",
      licenseStatus: "Licensed",
      insuranceStatus: "Insured",
      status: "Contacted"
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
      id: "panel-outlet-repair",
      title: "Electrical Panel and Outlet Repair",
      category: "Electrician",
      categoryLabel: "Electrician",
      location: "Medford, OR",
      urgency: "This week",
      budget: "$500 - $1,000",
      bids: 1,
      status: "Open for bids",
      posted: "Today",
      description: "Need a licensed electrician to inspect a panel issue and repair two outlets.",
      customer: "North Medford Homeowner",
      phone: "(541) 555-3310",
      email: "electric-job@example.com",
      notes: "Ask for panel photos and access details before matching."
    },
    {
      id: "hvac-maintenance",
      title: "HVAC Maintenance Before Heat Wave",
      category: "HVAC",
      categoryLabel: "HVAC",
      location: "Central Point, OR",
      urgency: "This week",
      budget: "$250 - $500",
      bids: 0,
      status: "Open for bids",
      posted: "Today",
      description: "Service AC system, check filter and ductwork, and advise on maintenance needs.",
      customer: "Central Point Rental Owner",
      phone: "(541) 555-4412",
      email: "hvac-job@example.com",
      notes: "Good maintenance route candidate."
    },
    {
      id: "tree-stump-work",
      title: "Tree Trimming and Stump Work",
      category: "Arborist",
      categoryLabel: "Arborist",
      location: "Ashland, OR",
      urgency: "Flexible",
      budget: "$1,000+",
      bids: 0,
      status: "Open for bids",
      posted: "Today",
      description: "Trim two large trees away from roofline and quote stump grinding for an old stump.",
      customer: "Ashland Property Owner",
      phone: "(541) 555-2109",
      email: "tree-job@example.com",
      notes: "Confirm access, debris hauling, and safety requirements."
    },
    {
      id: "camera-network-install",
      title: "Low Voltage Camera and Network Install",
      category: "Low Voltage Systems",
      categoryLabel: "Low Voltage Systems",
      location: "Medford, OR",
      urgency: "ASAP",
      budget: "$500 - $1,000",
      bids: 0,
      status: "Open for bids",
      posted: "Today",
      description: "Install two cameras, run low-voltage cabling, and clean up a small office network rack.",
      customer: "Local Office Manager",
      phone: "(541) 555-7702",
      email: "lowvoltage-job@example.com",
      notes: "Ask about camera model, access control needs, and after-hours availability."
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
  personalDriverRequests: [
    {
      id: "personal-driver-request-demo",
      name: "Demo Rider",
      phone: "(541) 555-0134",
      email: "rider@example.com",
      rideType: "Appointment",
      pickupArea: "Medford, OR",
      dropoffArea: "Central Point, OR",
      rideDate: "",
      rideTimeWindow: "Weekday morning",
      recurring: "One-time",
      passengers: "1",
      accessibilityNeeds: "Needs a calm, punctual driver and help confirming pickup details by phone.",
      privacyNotes: "Exact pickup/drop-off details stay private until manual provider review.",
      safetyStatus: "Admin review required",
      status: "New",
      created: "Today"
    }
  ],
  personalDriverProviders: [
    {
      id: "personal-driver-provider-demo",
      businessName: "Example Private Driver",
      ownerName: "Demo Driver",
      phone: "(541) 555-0911",
      email: "driver@example.com",
      serviceArea: "Medford, Ashland, Central Point",
      vehicleType: "Clean sedan",
      driverLicenseStatus: "Current",
      insurance: "Needs review",
      backgroundCheck: "Willing to complete",
      availability: "Weekdays, airport rides by appointment",
      recurringRides: "Yes",
      bio: "Demo private-driver lead only. Admin must confirm license, insurance, vehicle, background-check path, and local legal requirements before any match.",
      dispatchDecision: "Admin Review",
      trustTier: "Green",
      trustRank: "Helper 1",
      status: "Needs Review",
      created: "Today"
    }
  ],
  merchantServiceLeads: [
    {
      id: "merchant-services-demo",
      businessName: "Demo Contractor Co.",
      ownerName: "Demo Owner",
      phone: "(541) 555-0182",
      email: "owner@example.com",
      industry: "Construction / services",
      city: "Medford",
      currentProcessor: "Unknown",
      monthlyVolume: "$10k - $50k",
      needs: ["Card payments", "Invoices", "Deposits", "Recurring billing"],
      notes: "Public intake only. Partner routing requires private admin review and signed/approved relationship language.",
      adminOnlyPartnerNote: "Dennis & Abe / USAG-style payment partner review stays private until an approved agreement exists.",
      status: "New Lead",
      created: "Today"
    }
  ],
  localProductVendors: [
    {
      id: "local-product-demo",
      makerName: "Demo Local Maker",
      contactName: "Demo Contact",
      phone: "(541) 555-0194",
      email: "maker@example.com",
      category: "Custom wood products",
      products: "Cutting boards, small-batch gifts, shop-made local goods",
      city: "Medford",
      fulfillment: "Local pickup / delivery review",
      wholesaleInterest: "Yes",
      photos: "0 files selected",
      notes: "Demo maker lead only. Public marketplace claims require product photos, pricing, fulfillment, tax, and refund policy review.",
      status: "Needs Review",
      created: "Today"
    }
  ],
  manufacturingRfqs: [
    {
      id: "manufacturing-rfq-demo",
      productType: "Creatine gummies/chews",
      brandName: "Demo Knockout Nutrients Concept",
      formulaStatus: "Needs formulation",
      dosageForm: "Chew",
      targetQuantity: "10,000 units",
      desiredPackaging: "Resealable pouch with lot and expiry coding",
      ingredientRequirements: "Creatine, natural flavor, clean-label sweetener preference, allergen review needed.",
      cleanLabelRequirements: ["Non-GMO", "Sugar-free", "Clean-label"],
      cbdHemp: "No",
      testingNeeds: "COA, micro, heavy metals, stability, potency",
      certificationsRequired: ["GMP", "FDA-registered facility"],
      targetLaunchDate: "",
      budgetRange: "$25k - $75k",
      locationPreference: "U.S. preferred",
      contactName: "Demo Brand Founder",
      contactEmail: "founder@example.com",
      contactPhone: "(541) 555-6611",
      specUpload: "0 files selected",
      status: "New RFQ",
      created: "Today",
      notes: "Demo/placeholder RFQ only. Not copied from Thomasnet or any supplier directory."
    }
  ],
  manufacturingSuppliers: [
    {
      id: "supplier-demo-vitamin-capsule",
      companyName: "Example Vitamin Capsule Manufacturer",
      contactPerson: "Demo Supplier Contact",
      location: "U.S. demo facility",
      serviceArea: "United States and select global projects",
      supplierType: "Vitamin manufacturers",
      capabilities: "Demo capsule blending, encapsulation, bottling, labeling, batch records, and quote review.",
      productCategories: ["Vitamins", "Supplements", "Private-label product manufacturing"],
      dosageForms: ["Capsule"],
      minimumOrderQuantity: "5,000 bottles demo MOQ",
      certifications: ["GMP", "FDA-registered facility"],
      facilityType: "Demo GMP manufacturing facility",
      turnaroundTime: "8-12 weeks demo estimate",
      packagingOptions: "Bottles, jars, labels, cartons",
      ingredientSourcingSupport: true,
      formulationSupport: true,
      testingLabSupport: true,
      complianceSupport: false,
      privateLabelSupport: true,
      fulfillmentSupport: false,
      website: "",
      phoneEmail: "demo-vitamin@example.com",
      notes: "Demo/placeholder supplier profile only. Company must create and verify its own profile before public use.",
      verifiedByForge: "Placeholder only",
      status: "Needs Review"
    },
    {
      id: "supplier-demo-gummy-chew",
      companyName: "Example Gummy/Creatine Chew Co-Packer",
      contactPerson: "Demo Co-Packer Contact",
      location: "North America demo facility",
      serviceArea: "U.S. and Canada",
      supplierType: "Gummy and chew manufacturers",
      capabilities: "Demo gummy and chew formulation, pilot samples, production, packaging, and flavor development.",
      productCategories: ["Gummies", "Chews", "Creatine gummies/chews"],
      dosageForms: ["Gummy", "Chew"],
      minimumOrderQuantity: "10,000 units demo MOQ",
      certifications: ["GMP"],
      facilityType: "Demo confection-style supplement co-packer",
      turnaroundTime: "10-14 weeks demo estimate",
      packagingOptions: "Pouches, jars, sachets, cartons",
      ingredientSourcingSupport: true,
      formulationSupport: true,
      testingLabSupport: true,
      complianceSupport: true,
      privateLabelSupport: true,
      fulfillmentSupport: false,
      website: "",
      phoneEmail: "demo-gummy@example.com",
      notes: "Demo/placeholder supplier profile only. No external listing data used.",
      verifiedByForge: "Placeholder only",
      status: "Needs Review"
    },
    {
      id: "supplier-demo-protein-blender",
      companyName: "Example Protein Powder Blender",
      contactPerson: "Demo Powder Contact",
      location: "U.S. demo powder facility",
      serviceArea: "United States",
      supplierType: "Protein powder manufacturers",
      capabilities: "Demo powder blending, flavor systems, tub or pouch filling, lot traceability, and COA coordination.",
      productCategories: ["Protein/whey products", "Pre-workout", "Collagen"],
      dosageForms: ["Powder"],
      minimumOrderQuantity: "2,500 units demo MOQ",
      certifications: ["GMP", "NSF"],
      facilityType: "Demo powder blending facility",
      turnaroundTime: "6-10 weeks demo estimate",
      packagingOptions: "Tubs, pouches, stick packs",
      ingredientSourcingSupport: true,
      formulationSupport: true,
      testingLabSupport: true,
      complianceSupport: false,
      privateLabelSupport: true,
      fulfillmentSupport: false,
      website: "",
      phoneEmail: "demo-powder@example.com",
      notes: "Demo/placeholder supplier profile only.",
      verifiedByForge: "Placeholder only",
      status: "Needs Review"
    },
    {
      id: "supplier-demo-packaging",
      companyName: "Example Packaging Supplier",
      contactPerson: "Demo Packaging Contact",
      location: "U.S. demo packaging office",
      serviceArea: "U.S. and global sourcing",
      supplierType: "Packaging suppliers",
      capabilities: "Demo bottles, jars, pouches, sachets, stick packs, tubes, labels, and holographic-label support.",
      productCategories: ["Packaging"],
      dosageForms: ["Capsule", "Powder", "Topical", "Other"],
      minimumOrderQuantity: "Project-based demo MOQ",
      certifications: ["ISO"],
      facilityType: "Demo packaging supplier",
      turnaroundTime: "3-8 weeks demo estimate",
      packagingOptions: "Bottles, jars, pouches, sachets, stick packs, tubes, labels",
      ingredientSourcingSupport: false,
      formulationSupport: false,
      testingLabSupport: false,
      complianceSupport: false,
      privateLabelSupport: true,
      fulfillmentSupport: false,
      website: "",
      phoneEmail: "demo-packaging@example.com",
      notes: "Demo/placeholder supplier profile only.",
      verifiedByForge: "Placeholder only",
      status: "Needs Review"
    },
    {
      id: "supplier-demo-testing-lab",
      companyName: "Example Supplement Testing Lab",
      contactPerson: "Demo Lab Contact",
      location: "U.S. demo lab",
      serviceArea: "United States",
      supplierType: "Testing labs",
      capabilities: "Demo COA support, potency, micro, heavy metals, stability, allergen, and label-support testing.",
      productCategories: ["Testing/lab services"],
      dosageForms: ["Capsule", "Tablet", "Gummy", "Chew", "Powder", "Liquid", "Beverage", "Softgel", "Topical", "Pet product"],
      minimumOrderQuantity: "Per sample/demo panel",
      certifications: ["ISO"],
      facilityType: "Demo third-party laboratory",
      turnaroundTime: "5-15 business days demo estimate",
      packagingOptions: "Sample receiving and report delivery",
      ingredientSourcingSupport: false,
      formulationSupport: false,
      testingLabSupport: true,
      complianceSupport: true,
      privateLabelSupport: false,
      fulfillmentSupport: false,
      website: "",
      phoneEmail: "demo-lab@example.com",
      notes: "Demo/placeholder supplier profile only.",
      verifiedByForge: "Placeholder only",
      status: "Needs Review"
    },
    {
      id: "supplier-demo-gmp-consultant",
      companyName: "Example GMP Compliance Consultant",
      contactPerson: "Demo Compliance Contact",
      location: "Remote demo consultant",
      serviceArea: "United States and global review",
      supplierType: "GMP consultants",
      capabilities: "Demo GMP gap review, FDA/FTC claims review coordination, SOPs, vendor verification, and launch checklists.",
      productCategories: ["Compliance consulting"],
      dosageForms: ["Capsule", "Tablet", "Gummy", "Chew", "Powder", "Liquid", "Beverage", "Softgel", "Topical", "Pet product"],
      minimumOrderQuantity: "Project-based",
      certifications: ["GMP"],
      facilityType: "Demo consulting practice",
      turnaroundTime: "2-6 weeks demo estimate",
      packagingOptions: "Label and claims checklist support",
      ingredientSourcingSupport: false,
      formulationSupport: false,
      testingLabSupport: false,
      complianceSupport: true,
      privateLabelSupport: false,
      fulfillmentSupport: false,
      website: "",
      phoneEmail: "demo-compliance@example.com",
      notes: "Demo/placeholder supplier profile only. Not legal advice.",
      verifiedByForge: "Placeholder only",
      status: "Needs Review"
    }
  ],
  manufacturingSupplierLeads: [
    {
      id: "supplier-lead-demo-manual-research",
      companyName: "Example Manual Research Supplier",
      contactName: "Demo Outreach Contact",
      phone: "(541) 555-4400",
      email: "demo-supplier-lead@example.com",
      website: "https://example.com",
      city: "Medford",
      state: "OR",
      country: "USA",
      supplierCategory: "Supplement Manufacturer",
      capabilities: "Placeholder capability notes for capsules, powders, packaging, and quote review.",
      certifications: "cGMP, FDA registered facility support",
      productTypes: "Vitamins, protein, electrolytes",
      moq: "5,000 units",
      leadTime: "8-12 weeks",
      notes: "Demo CRM lead only. No copied supplier-directory data.",
      source: "Manual research",
      sourceUrl: "",
      dateDiscovered: "Today",
      addedBy: "Andrew",
      outreachStatus: "Not contacted",
      lastContacted: "",
      nextFollowUpDate: "",
      followUpNotes: "Use the Forge outreach template before inviting.",
      potentialOpportunityValue: "$25k - $75k",
      relatedForgeVertical: "Manufacturing",
      tags: "private label, low MOQ, cGMP",
      created: "Today"
    }
  ],
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
      googleBusinessUrl: "",
      social: "",
      serviceCategories: ["Construction", "General contracting"],
      serviceAreas: "Medford, Ashland, Central Point",
      yearsInBusiness: "6",
      numberOfEmployees: "8",
      numberOfCrews: "2",
      businessSize: "Established Trade Company",
      marketingNeed: "Yes, I need a CRM and follow-up system",
      servicesNeeded: ["Website", "CRM", "Job tracking", "Review generation", "More leads"],
      budget: "$1,500 - $3,000/month",
      currentAdSpend: "$500 - $1,500/month",
      currentMonthlyLeadVolume: "6-20 leads/month",
      problem: "Leads come from referrals but follow-up is inconsistent and there is no job pipeline.",
      mainBusinessProblem: "Leads come from referrals but follow-up is inconsistent and there is no job pipeline.",
      goal: "Look professional online, capture more remodel leads, and track estimates over the next 90 days.",
      answerEveryCall: "No",
      hasCrm: "No",
      hiringHelp: "Not sure",
      residentialCommercial: "Both residential and commercial",
      needsPhotosVideos: "Yes",
      wantsMarketingAudit: "Yes",
      notes: "Demo North Star growth lead for the expanded client acquisition workflow.",
      consent: true,
      status: "New",
      assignedOwner: "North Star Intake",
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
  tradePathwayLeads: [
    {
      id: "trade-pathway-demo",
      sourceApp: "admitly",
      leadType: "Admitly Trade Pathways",
      fullName: "Sample Admitly Applicant",
      email: "student@example.com",
      phone: "(541) 555-4410",
      city: "Medford",
      state: "OR",
      educationLevel: "High school graduate",
      ageRange: "18-24",
      pathway: "Trade School",
      desiredTrade: "Welding",
      timeline: "Next 3 months",
      fundingNeed: "Needs scholarships/grants",
      workExperience: "Some hands-on experience",
      resumeText: "",
      essayHelp: "Yes",
      scholarshipHelp: "Yes",
      jobHelp: "Yes",
      consentToContact: true,
      status: "New Lead",
      priority: "Warm",
      notes: "Demo Admitly lead for trade school application planning.",
      created: "Today"
    }
  ],
  forgeAcademyLeads: [
    {
      id: "forge-academy-demo",
      sourceApp: "forge",
      leadType: "Student / Worker Career Intake",
      fullName: "Sample Forge Worker",
      email: "worker@example.com",
      phone: "(541) 555-8831",
      city: "Medford",
      state: "OR",
      desiredTrade: "Electrical",
      currentExperience: "Entry-level helper",
      hasTransportation: "Yes",
      hasDriversLicense: "Yes",
      needsTraining: "Yes",
      needsJobNow: "Yes",
      needsResume: "Yes",
      interestedCareerPlus: "Yes",
      consentToContact: true,
      status: "New Lead",
      priority: "Hot",
      notes: "Demo Forge Academy lead for apprenticeship and resume support.",
      created: "Today"
    }
  ],
  employerTrainingPartners: [
    {
      id: "employer-training-demo",
      sourceApp: "forge",
      leadType: "Employer Training Partner",
      businessName: "Rogue Valley Electrical Demo Co.",
      contactName: "Demo Hiring Manager",
      email: "hiring@example.com",
      phone: "(541) 555-6601",
      tradeCategory: "Electrical",
      hiringNeeds: "Entry-level helpers and apprentices",
      apprenticeshipAvailability: "Interested",
      willingToTrain: "Yes",
      insuranceLicense: "License/insurance review needed before public matching",
      notes: "Demo employer partner for Forge Academy.",
      status: "New Lead",
      priority: "Warm",
      created: "Today"
    }
  ],
  schoolPartners: [
    {
      id: "school-partner-demo",
      sourceApp: "admitly",
      leadType: "School / Program Partner",
      schoolName: "Southern Oregon Trade Program Demo",
      contactName: "Demo Program Director",
      email: "program@example.com",
      phone: "(541) 555-7702",
      programTypes: "Welding, electrical, HVAC",
      location: "Medford, OR",
      costRange: "$2,500 - $12,000",
      financialAidAvailable: "Yes",
      enrollmentDeadlines: "Rolling / next cohort TBD",
      notes: "Demo program partner for Admitly Trade Pathways.",
      status: "New Lead",
      priority: "Warm",
      created: "Today"
    }
  ],
  resumeRequests: [
    {
      id: "resume-request-demo",
      sourceApp: "forge",
      leadType: "Forge Career+ Resume Request",
      fullName: "Sample Resume Applicant",
      email: "resume@example.com",
      phone: "(541) 555-9012",
      city: "Medford",
      state: "OR",
      pathway: "Apprenticeship",
      desiredTrade: "Diesel / automotive",
      experienceLevel: "Some hands-on experience",
      status: "New Lead",
      priority: "Warm",
      notes: "Wants AI resume builder and interview prep when Forge Career+ opens.",
      consentToContact: true,
      created: "Today"
    }
  ],
  forgeCareerProfiles: [
    {
      id: "career-profile-mike",
      sourceApp: "forge",
      leadType: "Forge Career Profile",
      fullName: "Mike Jones",
      email: "mike@example.com",
      phone: "(541) 555-9876",
      city: "Medford",
      state: "OR",
      desiredTrade: "Handyman / construction",
      certifications: "Basic tools, jobsite experience",
      tradeSchoolInterest: "Maybe",
      apprenticeshipInterest: "Yes",
      resumeHelpNeeded: "Yes",
      entryLevelAvailable: "Yes",
      willingToTravel: "Yes",
      preferredRadius: "25 miles",
      status: "New Lead",
      priority: "Warm",
      notes: "Demo worker career profile enhancement.",
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
  },
  lastGuardedRoute: null
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
    body: "Tell Forge what your business needs and check whether Flex options may be a fit.",
    next: "Forge collects basic contact info and consent, then Flex handles applications, approval, onboarding, activation, and support.",
    screen: "capital",
    action: "Check Flex Options",
    tone: "orange"
  },
  {
    label: "I need a product made",
    title: "Forge Manufacturing + Nutraceuticals.",
    body: "Request manufacturing quotes or create a supplier profile for vitamins, supplements, gummies, powders, beverages, skincare, pet wellness, packaging, labs, and compliance support.",
    next: "Forge saves the RFQ or supplier profile, then moves it through supplier matching, quotes, samples, compliance review, PO, production, and fulfillment.",
    screen: "manufacturing",
    action: "Manufacturing",
    tone: "blue"
  },
  {
    label: "I need a scheduled driver",
    title: "Personal Driver / Private Driver Services.",
    body: "Request airport rides, appointment rides, errands, executive rides, sober rides, senior support, or recurring scheduled rides.",
    next: "Forge saves public-safe ride areas and keeps exact details private until manual driver-safety review.",
    screen: "personal-driver",
    action: "Personal Driver",
    tone: "ghost"
  },
  {
    label: "I need payment help",
    title: "Forge Payments / Merchant Services.",
    body: "Save interest in card payments, invoices, deposits, recurring billing, and merchant-service review.",
    next: "Forge captures the lead only. No payment processing, bank logins, SSNs, or sensitive documents are collected in the MVP.",
    screen: "payments",
    action: "Payments",
    tone: "blue"
  },
  {
    label: "I sell local products",
    title: "Local Products / Makers.",
    body: "Capture custom products, woodwork, handmade goods, local brands, and maker/vendor leads.",
    next: "Forge saves the maker lead for photos, pricing, fulfillment, policy, and public-listing review.",
    screen: "local-products",
    action: "Makers",
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
  next.personalDriverRequests = value?.personalDriverRequests || seedState.personalDriverRequests;
  next.personalDriverProviders = value?.personalDriverProviders || seedState.personalDriverProviders;
  next.merchantServiceLeads = value?.merchantServiceLeads || seedState.merchantServiceLeads;
  next.localProductVendors = value?.localProductVendors || seedState.localProductVendors;
  next.manufacturingRfqs = value?.manufacturingRfqs || seedState.manufacturingRfqs;
  next.manufacturingSuppliers = value?.manufacturingSuppliers || seedState.manufacturingSuppliers;
  next.manufacturingSupplierLeads = value?.manufacturingSupplierLeads || seedState.manufacturingSupplierLeads;
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
  next.tradePathwayLeads = value?.tradePathwayLeads || seedState.tradePathwayLeads;
  next.forgeAcademyLeads = value?.forgeAcademyLeads || seedState.forgeAcademyLeads;
  next.employerTrainingPartners = value?.employerTrainingPartners || seedState.employerTrainingPartners;
  next.schoolPartners = value?.schoolPartners || seedState.schoolPartners;
  next.resumeRequests = value?.resumeRequests || seedState.resumeRequests;
  next.forgeCareerProfiles = value?.forgeCareerProfiles || seedState.forgeCareerProfiles;
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
  next.personalDriverRequests = next.personalDriverRequests.map((request) => ({
    status: "New",
    created: "Today",
    email: "",
    rideType: "Other",
    pickupArea: "",
    dropoffArea: "",
    recurring: "Not sure",
    passengers: "",
    accessibilityNeeds: "",
    privacyNotes: "",
    safetyStatus: "Admin review required",
    ...request
  }));
  next.personalDriverProviders = next.personalDriverProviders.map((provider) => ({
    status: "Needs Review",
    created: "Today",
    email: "",
    serviceArea: "",
    vehicleType: "",
    driverLicenseStatus: "Not provided",
    insurance: "Needs review",
    backgroundCheck: "Not started",
    availability: "",
    recurringRides: "No",
    dispatchDecision: "Admin Review",
    trustTier: "Green",
    trustRank: "Helper 1",
    ...provider
  }));
  next.merchantServiceLeads = next.merchantServiceLeads.map((lead) => ({
    status: "New Lead",
    created: "Today",
    email: "",
    industry: "",
    city: "",
    currentProcessor: "",
    monthlyVolume: "",
    needs: [],
    notes: "",
    adminOnlyPartnerNote: "",
    ...lead
  }));
  next.localProductVendors = next.localProductVendors.map((lead) => ({
    status: "Needs Review",
    created: "Today",
    email: "",
    category: "",
    products: "",
    city: "",
    fulfillment: "",
    wholesaleInterest: "Not sure",
    photos: "0 files selected",
    notes: "",
    ...lead
  }));
  next.manufacturingRfqs = next.manufacturingRfqs.map((lead) => normalizeManufacturingRfq(lead));
  next.manufacturingSuppliers = next.manufacturingSuppliers.map((supplier) => normalizeManufacturingSupplier(supplier));
  next.manufacturingSupplierLeads = next.manufacturingSupplierLeads.map((lead) => normalizeManufacturingSupplierLead(lead));
  ensureManufacturingJobs(next);
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
  next.northstarLeads = next.northstarLeads.map((lead) => normalizeNorthStarLead(lead));
  next.flexLeads = next.flexLeads.map((lead) => normalizeFlexLead(lead));
  next.opportunityLeads = next.opportunityLeads.map((lead) => ({ status: "New", created: "Today", email: "", note: "", location: "Medford, OR", ...lead }));
  next.tradePathwayLeads = next.tradePathwayLeads.map((lead) => ({ sourceApp: "admitly", leadType: "Admitly Trade Pathways", status: "New Lead", priority: "Warm", created: "Today", consentToContact: false, notes: "", ...lead }));
  next.forgeAcademyLeads = next.forgeAcademyLeads.map((lead) => ({ sourceApp: "forge", leadType: "Student / Worker Career Intake", status: "New Lead", priority: "Warm", created: "Today", consentToContact: false, notes: "", ...lead }));
  next.employerTrainingPartners = next.employerTrainingPartners.map((lead) => ({ sourceApp: "forge", leadType: "Employer Training Partner", status: "New Lead", priority: "Warm", created: "Today", notes: "", ...lead }));
  next.schoolPartners = next.schoolPartners.map((lead) => ({ sourceApp: "admitly", leadType: "School / Program Partner", status: "New Lead", priority: "Warm", created: "Today", notes: "", ...lead }));
  next.resumeRequests = next.resumeRequests.map((lead) => ({ sourceApp: "forge", leadType: "Forge Career+ Resume Request", status: "New Lead", priority: "Warm", created: "Today", consentToContact: false, notes: "", ...lead }));
  next.forgeCareerProfiles = next.forgeCareerProfiles.map((lead) => ({ sourceApp: "forge", leadType: "Forge Career Profile", status: "New Lead", priority: "Warm", created: "Today", notes: "", ...lead }));
  next.activity = value?.activity || seedState.activity;
  next.lastConfirmation = value?.lastConfirmation || seedState.lastConfirmation;
  next.lastGuardedRoute = value?.lastGuardedRoute || seedState.lastGuardedRoute;
  return next;
}

function normalizeNorthStarLead(lead = {}) {
  const normalized = {
    id: `northstar-${Date.now()}`,
    category: NORTHSTAR_CATEGORY_VALUE,
    secondaryCategory: NORTHSTAR_OPERATIONS_CATEGORY_VALUE,
    name: "",
    businessName: "",
    phone: "",
    email: "",
    city: "Medford, OR",
    trade: "",
    website: "",
    social: "",
    googleBusinessUrl: "",
    serviceCategories: [],
    serviceAreas: "",
    yearsInBusiness: "",
    numberOfEmployees: "",
    numberOfCrews: "",
    businessSize: "Solo Operator",
    marketingNeed: "No, just list me on Forge",
    servicesNeeded: [],
    budget: "Not sure yet",
    currentAdSpend: "Not sure",
    currentMonthlyLeadVolume: "Not sure",
    problem: "",
    mainBusinessProblem: "",
    goal: "",
    answerEveryCall: "Not sure",
    hasCrm: "Not sure",
    hiringHelp: "Not sure",
    residentialCommercial: "Not sure",
    needsPhotosVideos: "Not sure",
    wantsMarketingAudit: "Yes",
    notes: "",
    consent: false,
    status: "New",
    leadClassification: "",
    urgency: "",
    assignedOwner: "North Star Intake",
    created: "Today",
    adminNotes: "",
    ...lead
  };
  normalized.servicesNeeded = listValue(normalized.servicesNeeded);
  normalized.serviceCategories = listValue(normalized.serviceCategories);
  normalized.mainBusinessProblem = normalized.mainBusinessProblem || normalized.problem || "";
  normalized.marketingNeed = normalized.marketingNeed || normalized.servicesNeeded[0] || "No, just list me on Forge";
  normalized.businessSize = providerBusinessSizeOptions.includes(normalized.businessSize) ? normalized.businessSize : "Solo Operator";
  normalized.marketingScore = normalized.marketingScore && typeof normalized.marketingScore === "object"
    ? normalizeNorthStarMarketingScore(normalized.marketingScore)
    : calculateNorthStarMarketingScore(normalized);
  normalized.score = normalized.marketingScore.total;
  normalized.leadClassification = northstarLeadClassifications.includes(normalized.leadClassification)
    ? normalized.leadClassification
    : classifyNorthStarLead(normalized);
  normalized.urgency = normalized.urgency || inferNorthStarUrgency(normalized);
  normalized.status = northstarStatuses.includes(normalized.status)
    ? normalized.status
    : normalized.status === "Scoping"
      ? "Needs Review"
      : normalized.status === "Active"
        ? "Won"
        : normalized.status === "Paused"
          ? "Nurture Later"
          : normalized.status === "Closed"
            ? "Lost"
            : "New";
  return normalized;
}

function listValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return String(value).split(",").map((item) => item.trim()).filter(Boolean);
}

function normalizeNorthStarMarketingScore(score = {}) {
  const normalized = {};
  for (const [key, , max] of northstarMarketingScoreCategories) {
    normalized[key] = clampNumber(Number(score[key] ?? 0), 0, max);
  }
  normalized.total = northstarMarketingScoreCategories.reduce((sum, [key]) => sum + normalized[key], 0);
  return normalized;
}

function calculateNorthStarMarketingScore(lead = {}) {
  const text = normalizeLookup([
    lead.problem,
    lead.mainBusinessProblem,
    lead.goal,
    lead.notes,
    (lead.servicesNeeded || []).join(" "),
    lead.marketingNeed
  ].join(" "));
  const score = {
    website: lead.website ? 16 : 4,
    googleBusiness: lead.googleBusinessUrl ? 17 : text.includes("google business") ? 6 : 9,
    reviews: text.includes("review") || text.includes("reputation") ? 7 : 13,
    photosVideos: lead.needsPhotosVideos === "Yes" || text.includes("photo") || text.includes("video") ? 4 : 8,
    leadResponse: lead.answerEveryCall === "Yes" ? 10 : lead.answerEveryCall === "No" ? 3 : 6,
    socialProof: lead.social || text.includes("social") ? 7 : 5,
    crmFollowup: lead.hasCrm === "Yes" ? 10 : lead.hasCrm === "No" || text.includes("crm") || text.includes("follow-up") ? 3 : 6
  };
  if (lead.website && !text.includes("website")) score.website = 18;
  if (text.includes("need a website")) score.website = Math.min(score.website, 6);
  if (text.includes("full-scale marketing") || text.includes("growth consultation")) score.leadResponse = Math.min(10, score.leadResponse + 1);
  return normalizeNorthStarMarketingScore(score);
}

function classifyNorthStarLead(lead = {}) {
  const text = normalizeLookup([
    lead.businessSize,
    lead.marketingNeed,
    lead.problem,
    lead.mainBusinessProblem,
    lead.trade,
    lead.budget,
    lead.currentAdSpend,
    lead.numberOfEmployees,
    lead.numberOfCrews
  ].join(" "));
  const employees = Number(String(lead.numberOfEmployees || "").match(/\d+/)?.[0] || 0);
  const crews = Number(String(lead.numberOfCrews || "").match(/\d+/)?.[0] || 0);
  if (inferNorthStarUrgency(lead) === "Urgent Follow-Up") return "Urgent Follow-Up";
  if (lead.businessSize === "Enterprise / Anchor Contractor" || employees >= 50 || crews >= 6 || text.includes("7500+") || text.includes("15000+")) return "Enterprise Prospect";
  if (lead.businessSize === "Established Trade Company" || employees >= 10 || crews >= 2 || text.includes("google ads") || text.includes("full-scale marketing")) return "Trade Pro Client";
  if (lead.businessSize === "Small Local Business" || text.includes("more leads") || text.includes("website") || text.includes("google business")) return "Growth Client";
  return "Small Provider";
}

function inferNorthStarUrgency(lead = {}) {
  const text = normalizeLookup([
    lead.marketingNeed,
    lead.problem,
    lead.mainBusinessProblem,
    lead.notes,
    lead.answerEveryCall,
    lead.currentMonthlyLeadVolume
  ].join(" "));
  if (lead.answerEveryCall === "No" || text.includes("urgent") || text.includes("emergency") || text.includes("missed-call") || text.includes("larger company")) return "Urgent Follow-Up";
  if (lead.businessSize === "Enterprise / Anchor Contractor" || text.includes("full-scale marketing")) return "High-value consultation";
  if (lead.marketingNeed === "No, just list me on Forge") return "Nurture";
  return "Normal";
}

function clampNumber(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
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

function normalizeManufacturingRfq(lead) {
  const next = {
    id: lead?.id || `manufacturing-rfq-${Date.now()}`,
    customerCompanyName: "",
    productIdea: "",
    productType: "",
    brandName: "",
    formulaStatus: "Need help creating formula",
    dosageForm: "Other",
    ingredientsRequested: "",
    ingredientsToAvoid: "",
    flavorPreferences: "",
    sweetenerPreferences: "",
    servingSize: "",
    servingsPerContainer: "",
    targetRetailPrice: "",
    targetCustomer: "",
    estimatedFirstOrderQuantity: "",
    desiredMoq: "",
    targetQuantity: "",
    desiredPackaging: "",
    ingredientRequirements: "",
    cleanLabelRequirements: [],
    cbdHemp: "No",
    labelDesignNeeded: "Not sure",
    complianceReviewNeeded: "Not sure",
    testingNeeds: "",
    certificationsRequired: [],
    fulfillmentNeeded: "Not sure",
    dropshippingNeeded: "Not sure",
    targetLaunchDate: "",
    budgetRange: "Not sure yet",
    locationPreference: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    specUpload: "0 files selected",
    labelUpload: "0 files selected",
    ingredientDeckUpload: "0 files selected",
    productReferenceUpload: "0 files selected",
    packagingReferenceUpload: "0 files selected",
    coaUpload: "0 files selected",
    brandGuideUpload: "0 files selected",
    status: "Request received",
    created: "Today",
    notes: "",
    ...lead
  };
  if (!next.ingredientRequirements) {
    next.ingredientRequirements = [next.ingredientsRequested, next.ingredientsToAvoid, next.flavorPreferences, next.sweetenerPreferences].filter(Boolean).join(" | ");
  }
  if (!next.targetQuantity) next.targetQuantity = next.estimatedFirstOrderQuantity || next.desiredMoq;
  next.cleanLabelRequirements = Array.isArray(next.cleanLabelRequirements) ? next.cleanLabelRequirements : String(next.cleanLabelRequirements || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.certificationsRequired = Array.isArray(next.certificationsRequired) ? next.certificationsRequired : String(next.certificationsRequired || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.status = manufacturingLegacyStatusMap[next.status] || next.status;
  next.status = manufacturingLeadStatuses.includes(next.status) ? next.status : "Request received";
  return next;
}

function normalizeManufacturingSupplier(supplier) {
  const next = {
    id: supplier?.id || `manufacturing-supplier-${Date.now()}`,
    companyName: "",
    contactPerson: "",
    location: "",
    serviceArea: "",
    shipsNationwide: "No",
    supplierType: manufacturingSupplierTypes[0],
    productsManufactured: "",
    capabilities: "",
    productCategories: [],
    dosageForms: [],
    customFormulationSupport: false,
    whiteLabelCatalogSupport: false,
    minimumOrderQuantity: "",
    estimatedLeadTime: "",
    startingProjectBudget: "",
    certifications: [],
    testingOffered: [],
    currentCapacity: "",
    acceptingNewClients: "Not sure",
    sampleDevelopmentSupport: false,
    ndaAvailable: false,
    insurance: "Not sure",
    facilityType: "",
    turnaroundTime: "",
    packagingOptions: "",
    ingredientSourcingSupport: false,
    formulationSupport: false,
    flavoringSupport: false,
    packagingSupport: false,
    labelDesignSupport: false,
    testingLabSupport: false,
    complianceSupport: false,
    privateLabelSupport: false,
    fulfillmentSupport: false,
    website: "",
    phoneEmail: "",
    source: "Supplier inbound",
    sourceUrl: "",
    sourceNotes: "",
    dateAdded: "Today",
    outreachStatus: "Not contacted",
    lastContacted: "",
    nextFollowUpDate: "",
    relationshipOwner: "",
    logoUpload: "0 files selected",
    certificationUpload: "0 files selected",
    productPhotoUpload: "0 files selected",
    notes: "",
    verifiedByForge: "Placeholder only",
    status: "Needs Review",
    ...supplier
  };
  next.productCategories = Array.isArray(next.productCategories) ? next.productCategories : String(next.productCategories || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.dosageForms = Array.isArray(next.dosageForms) ? next.dosageForms : String(next.dosageForms || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.certifications = Array.isArray(next.certifications) ? next.certifications : String(next.certifications || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.testingOffered = Array.isArray(next.testingOffered) ? next.testingOffered : String(next.testingOffered || "").split(",").map((item) => item.trim()).filter(Boolean);
  next.status = manufacturingSupplierStatuses.includes(next.status) ? next.status : "Needs Review";
  next.ingredientSourcingSupport = Boolean(next.ingredientSourcingSupport);
  next.formulationSupport = Boolean(next.formulationSupport);
  next.customFormulationSupport = Boolean(next.customFormulationSupport || next.formulationSupport);
  next.whiteLabelCatalogSupport = Boolean(next.whiteLabelCatalogSupport || next.privateLabelSupport);
  next.flavoringSupport = Boolean(next.flavoringSupport);
  next.packagingSupport = Boolean(next.packagingSupport || next.packagingOptions);
  next.labelDesignSupport = Boolean(next.labelDesignSupport);
  next.testingLabSupport = Boolean(next.testingLabSupport);
  next.complianceSupport = Boolean(next.complianceSupport);
  next.privateLabelSupport = Boolean(next.privateLabelSupport);
  next.fulfillmentSupport = Boolean(next.fulfillmentSupport);
  return next;
}

function normalizeManufacturingSupplierLead(lead) {
  const next = {
    id: lead?.id || `supplier-lead-${Date.now()}`,
    companyName: "",
    contactName: "",
    phone: "",
    email: "",
    website: "",
    city: "",
    state: "",
    country: "USA",
    supplierCategory: "Supplement Manufacturer",
    capabilities: "",
    certifications: "",
    productTypes: "",
    moq: "",
    leadTime: "",
    notes: "",
    source: "Manual research",
    sourceUrl: "",
    dateDiscovered: "Today",
    addedBy: "Andrew",
    outreachStatus: "Not contacted",
    lastContacted: "",
    nextFollowUpDate: "",
    followUpNotes: "",
    potentialOpportunityValue: "",
    relatedForgeVertical: "Manufacturing",
    tags: "",
    created: "Today",
    ...lead
  };
  next.source = manufacturingSupplierLeadSources.includes(next.source) ? next.source : "Other";
  next.outreachStatus = manufacturingSupplierLeadStatuses.includes(next.outreachStatus) ? next.outreachStatus : "Not contacted";
  next.relatedForgeVertical = manufacturingRelatedVerticals.includes(next.relatedForgeVertical) ? next.relatedForgeVertical : "Other";
  return next;
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
  delete next.interested_in_forge_services;
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
  if (lead.interested_in_forge_job_leads) score += 10;
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

const FORM_MIN_SUBMIT_MS = 700;
const FORM_MAX_FIELD_LENGTH = 1600;
const FORM_MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const guardedSubmits = new WeakMap();

function notifyGuard(message) {
  if (typeof showToast === "function") showToast(message);
}

function installFormGuards(root = document) {
  const forms = root instanceof HTMLFormElement ? [root] : [...root.querySelectorAll("form")];
  forms.forEach((form) => {
    if (form.dataset.guardInstalled) return;
    form.dataset.guardInstalled = "true";
    form.dataset.startedAt = String(Date.now());
    const trap = document.createElement("label");
    trap.className = "form-honeypot";
    trap.setAttribute("aria-hidden", "true");
    trap.textContent = "Company website";
    const input = document.createElement("input");
    input.name = "companyWebsite";
    input.tabIndex = -1;
    input.autocomplete = "off";
    trap.appendChild(input);
    form.appendChild(trap);
  });
}

function validateGuardedForm(form) {
  const startedAt = Number(form.dataset.startedAt || Date.now());
  if (Date.now() - startedAt < FORM_MIN_SUBMIT_MS) {
    return "Please review the form for a moment before submitting.";
  }
  if (guardedSubmits.get(form)) return "This form is already submitting.";
  const trap = form.querySelector("input[name='companyWebsite']");
  if (trap?.value.trim()) return "Submission blocked.";
  const fields = [...form.elements].filter((field) => typeof field.value === "string");
  const oversizedField = fields.find((field) => field.value.length > FORM_MAX_FIELD_LENGTH);
  if (oversizedField) return "One field is too long. Please shorten it before submitting.";
  const files = [...form.querySelectorAll("input[type='file']")].flatMap((input) => [...(input.files || [])]);
  const oversizedFile = files.find((file) => file.size > FORM_MAX_UPLOAD_BYTES);
  if (oversizedFile) return "One uploaded file is too large for the MVP. Please use files under 8 MB.";
  const disallowedFile = files.find((file) => /\.(exe|dmg|pkg|app|sh|bat|cmd|js|mjs|ps1)$/i.test(file.name));
  if (disallowedFile) return "Executable files are not accepted in the MVP.";
  trap?.closest(".form-honeypot")?.remove();
  delete form.dataset.guardInstalled;
  setTimeout(() => installFormGuards(form), 0);
  guardedSubmits.set(form, true);
  setTimeout(() => guardedSubmits.delete(form), 2500);
  return "";
}

function categoryValue(category) {
  if (category === CREATIVE_CATEGORY_LABEL) return CREATIVE_CATEGORY_VALUE;
  if (category === NORTHSTAR_CATEGORY_LABEL) return NORTHSTAR_CATEGORY_VALUE;
  if (category === MANUFACTURING_CATEGORY_LABEL) return MANUFACTURING_CATEGORY_VALUE;
  return category;
}

function categoryLabel(category) {
  if (category === CREATIVE_CATEGORY_VALUE) return CREATIVE_CATEGORY_LABEL;
  if (category === NORTHSTAR_CATEGORY_VALUE || category === NORTHSTAR_OPERATIONS_CATEGORY_VALUE) return NORTHSTAR_CATEGORY_LABEL;
  if (category === MANUFACTURING_CATEGORY_VALUE) return MANUFACTURING_CATEGORY_LABEL;
  return category;
}

function categoryMatches(jobCategory, selectedCategory) {
  return selectedCategory === "All Categories"
    || jobCategory === selectedCategory
    || categoryLabel(jobCategory) === selectedCategory;
}

function workerMatchesCategory(worker, selectedCategory) {
  if (selectedCategory === "All Categories") return true;
  const vertical = serviceVerticalForProvider(worker);
  const workerCategories = [
    worker?.trade,
    worker?.category,
    worker?.providerCategory,
    worker?.serviceVerticalTitle,
    ...(worker?.tradeCategories || []),
    ...(worker?.providerCategories || []),
    ...(vertical?.categories || [])
  ];
  return workerCategories.some((category) => categoryMatches(category, selectedCategory));
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
    || serviceVerticalById(worker?.providerCategory)
    || serviceVerticalForCategory(worker?.providerCategory)
    || serviceVerticalForCategory(worker?.trade)
    || serviceVerticalForCategory(worker?.category)
    || null;
}

function isServiceVerticalJob(job) {
  return Boolean(serviceVerticalById(job?.serviceVertical) || serviceVerticalForCategory(job?.category));
}

function isManufacturingJob(job) {
  return categoryValue(job?.category) === MANUFACTURING_CATEGORY_VALUE || Boolean(job?.manufacturingRfqId);
}

function isServiceVerticalProvider(worker) {
  return Boolean(serviceVerticalForProvider(worker));
}

function ensureManufacturingJobs(next) {
  for (const rfq of next.manufacturingRfqs || []) {
    const jobId = `manufacturing-job-${rfq.id}`;
    const existing = next.jobs.find((job) => job.id === jobId || job.manufacturingRfqId === rfq.id);
    const generated = manufacturingJobFromRfq(rfq, existing);
    if (existing) {
      Object.assign(existing, generated, {
        bids: existing.bids ?? generated.bids,
        status: existing.status || generated.status,
        notes: existing.notes || generated.notes
      });
    } else {
      next.jobs.unshift(generated);
    }
  }
}

function manufacturingJobFromRfq(rfq, existing = {}) {
  const title = `Manufacturing Request: ${rfq.brandName || rfq.productType || "Supplement Product"}`;
  return {
    id: existing.id || `manufacturing-job-${rfq.id}`,
    title,
    category: MANUFACTURING_CATEGORY_VALUE,
    categoryLabel: MANUFACTURING_CATEGORY_LABEL,
    location: rfq.locationPreference || "Nationwide",
    urgency: rfq.targetLaunchDate || "Launch date pending",
    budget: rfq.budgetRange || "Budget pending",
    bids: existing.bids || 0,
    status: existing.status || "Open for bids",
    posted: rfq.created || "Today",
    description: `${rfq.productType || "Manufacturing request"} · ${rfq.dosageForm || "form pending"} · ${rfq.targetQuantity || rfq.desiredMoq || "quantity pending"} · ${rfq.desiredPackaging || "packaging pending"}`,
    customer: rfq.contactName || rfq.customerCompanyName || "Manufacturing customer",
    phone: rfq.contactPhone || "",
    email: rfq.contactEmail || "",
    notes: existing.notes || rfq.notes || "",
    manufacturingRfqId: rfq.id,
    serviceDetails: {
      productIdea: rfq.productIdea,
      formulaStatus: rfq.formulaStatus,
      dosageForm: rfq.dosageForm,
      targetQuantity: rfq.targetQuantity,
      desiredMoq: rfq.desiredMoq,
      desiredPackaging: rfq.desiredPackaging,
      testingNeeds: rfq.testingNeeds,
      certificationsRequired: (rfq.certificationsRequired || []).join(", "),
      fulfillmentNeeded: rfq.fulfillmentNeeded,
      complianceReviewNeeded: rfq.complianceReviewNeeded
    }
  };
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
    tradeCategories: worker.tradeCategories || worker.providerCategories || [vertical.categories[0]],
    providerCategories: worker.providerCategories || worker.tradeCategories || [vertical.categories[0]],
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
    manufacturingMoq: "",
    manufacturingUnitCost: "",
    manufacturingSetupFee: "",
    manufacturingSampleFee: "",
    manufacturingPackagingCost: "",
    manufacturingLabelingCost: "",
    manufacturingTestingCost: "",
    manufacturingLeadTime: "",
    manufacturingProductionTimeline: "",
    manufacturingPaymentTerms: "",
    manufacturingCertifications: "",
    manufacturingTestingIncluded: "",
    manufacturingFormulationIncluded: "Not applicable",
    manufacturingPackagingIncluded: "Not applicable",
    manufacturingFulfillmentIncluded: "Not applicable",
    manufacturingNdaRequired: "Not applicable",
    manufacturingQuestions: "",
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
  if (["demo", "demo-paths", "perspectives", "perspective-demo"].includes(screen)) return "perspective";
  if (screen === "auto" || screen === "autos") return "autos";
  if (["road-rescue", "road_rescue", "roadrescue", "road-help", "road-help-request", "pothole-help"].includes(screen)) return "road-rescue";
  if (["photo", "photos", "video", "creative", "photography", "photography-videography", CREATIVE_CATEGORY_VALUE, CREATIVE_CATEGORY_SLUG].includes(screen)) return "creative";
  if (["photography/request", "photography-request", "creative-request", "request-shoot"].includes(screen)) return "creative-request";
  if (["photography/apply", "photography-apply", "creative-apply", "apply-photographer"].includes(screen)) return "creative-apply";
  if (["northstar", "northstar-creative", "northstar-creative-co", "business-growth", "marketing", NORTHSTAR_CATEGORY_VALUE, NORTHSTAR_OPERATIONS_CATEGORY_VALUE].includes(screen)) return "northstar";
  if (["capital", "forge/capital", "forge-flex", "forge/flex", "partners/flex", "flex", "capital-desk"].includes(screen)) return "capital";
  if (["manufacturing", "manufacturing-nutraceuticals", "forge/manufacturing", "nutraceuticals", "supplements", "vitamins", MANUFACTURING_CATEGORY_VALUE, MANUFACTURING_CATEGORY_SLUG].includes(screen)) return "manufacturing";
  if (["personal-driver", "private-driver", "driver", "drivers", PERSONAL_DRIVER_CATEGORY_VALUE].includes(screen)) return "personal-driver";
  if (["payments", "forge-payments", "merchant-services", "merchant", FORGE_PAYMENTS_CATEGORY_VALUE].includes(screen)) return "payments";
  if (["local-products", "makers", "local-makers", "products", LOCAL_PRODUCTS_CATEGORY_VALUE].includes(screen)) return "local-products";
  if (["launch", "launch-status", "soft-launch", "readiness", "public-readiness"].includes(screen)) return "launch-status";
  if (["academy", "forge-academy", "forge/academy", "dashboard/career", "career-plus", "forge-career-plus"].includes(screen)) return "forge-academy";
  if (["admitly", "trade-pathways", "admitly-trade-pathways", "trade/pathways", "dashboard/trade-pathways"].includes(screen)) return "trade-pathways";
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
  const requestedScreen = screen;
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
    recordGuardedRoute(requestedScreen);
    showToast("Log in as Forge Admin to open operator tools.");
    screen = "login";
  } else if (state.settings.publicMode && state.session.role !== "admin" && operatorScreens.includes(screen)) {
    recordGuardedRoute(requestedScreen);
    showToast("Operator tools are hidden in Public View.");
    screen = "home";
  } else if (state.lastGuardedRoute && (screen === "login" || !operatorScreens.includes(screen))) {
    clearGuardedRoute();
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

function operatorScreenLabel(screen) {
  return operatorScreenLabels[normalizeScreen(screen)] || "Operator Tools";
}

function recordGuardedRoute(screen) {
  state.lastGuardedRoute = {
    screen: normalizeScreen(screen),
    label: operatorScreenLabel(screen),
    at: "Today"
  };
  saveState();
}

function clearGuardedRoute() {
  state.lastGuardedRoute = null;
  saveState();
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
  if (["/request-help", "/request-help/", "/post-job", "/post-job/", "/worker-signup", "/worker-signup/", "/business", "/business/", "/auto", "/auto/", "/forge-academy", "/forge-academy/", "/forge-academy/apply", "/forge-academy/apply/", "/forge-academy/employers", "/forge-academy/employers/", "/forge-academy/schools", "/forge-academy/schools/", "/dashboard/career", "/dashboard/career/", "/trade-pathways", "/trade-pathways/", "/trade-pathways/apply", "/trade-pathways/apply/", "/dashboard/trade-pathways", "/dashboard/trade-pathways/", "/road-rescue", "/road-rescue/", "/photography", "/photography/", "/photography/request", "/photography/request/", "/photography/apply", "/photography/apply/", "/photography-videography", "/photography-videography/", "/northstar-creative", "/northstar-creative/", "/forge/capital", "/forge/capital/", "/forge/flex", "/forge/flex/", "/partners/flex", "/partners/flex/", "/manufacturing-nutraceuticals", "/manufacturing-nutraceuticals/", "/forge/manufacturing", "/forge/manufacturing/", "/personal-driver", "/personal-driver/", "/private-driver", "/private-driver/", "/forge-payments", "/forge-payments/", "/merchant-services", "/merchant-services/", "/local-products", "/local-products/", "/makers", "/makers/", "/building", "/building/", "/admin/building-leads", "/admin/building-leads/", "/projects", "/projects/", "/admin/projects", "/admin/projects/", "/homebuilding", "/homebuilding/", "/homebuilding/tracker", "/homebuilding/tracker/"].includes(url.pathname)) url.pathname = "/";
  return url.toString().replace(/\/$/, "");
}

function versionQuery(extra = "") {
  return `?v=${PUBLIC_LINK_VERSION}${extra ? `&${extra}` : ""}`;
}

function render() {
  renderSession();
  renderOperatorGuard();
  renderSelects();
  renderTimeline();
  renderPremiumMarketplace();
  renderDemoSteps();
  renderStartPaths();
  renderDemoGuide();
  renderDemoCueCards();
  renderDemoProofSwitchboard();
  renderDemoPath();
  renderDemoLinks();
  renderPerspectiveReadiness();
  renderLaunchReceipt();
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
  renderManufacturingPage();
  renderPersonalDriverPage();
  renderPaymentsPage();
  renderLocalProductsPage();
  renderForgeAcademy();
  renderAdmitlyTradePathways();
  renderProviderGrowthTools();
  renderRequiredTradeCategories();
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
  renderLaunchDemoPack();
  renderLaunchDecision();
  renderFirstUserCountBreakdown();
  renderFirst200LaunchQueue();
  renderFollowUpAudit();
  renderBackendHandoff();
  renderAuthHandoff();
  renderFirstUserCloseout();
  renderLaunchCommandCenter();
  renderOutreachRecap();
  renderOutreachSprintBrief();
  renderOutreachBatch();
  renderSessionHistory();
  renderAdminExtras();
  renderAcademyAdmin();
  renderFlexLeadsAdmin();
  renderLaunchGoals();
  renderFounding200();
  renderReports();
  renderViewMode();
  renderFollowUpQueue();
  renderNavigationState();
}

function renderOperatorGuard() {
  const panel = document.querySelector("#operatorGuardPanel");
  if (!panel) return;
  const activeScreen = document.querySelector(".screen.active")?.dataset.screen || "home";
  const guarded = state.lastGuardedRoute;
  const shouldShow = activeScreen === "login" && state.session.role !== "admin" && Boolean(guarded?.screen);
  panel.classList.toggle("hidden", !shouldShow);
  if (!shouldShow) {
    panel.innerHTML = "";
    return;
  }
  const label = guarded.label || operatorScreenLabel(guarded.screen);
  panel.innerHTML = `
    <span class="split-label">Protected operator link</span>
    <h2>${escapeHtml(label)} is guarded.</h2>
    <p>Forge blocked direct public access to this operator screen. Use public paths for first-user demos, or use the controlled admin demo link when Andrew is operating Forge locally.</p>
    <div class="public-link-guard-actions">
      <button class="btn orange small" type="button" data-nav="launch-status">Launch Status</button>
      <button class="btn blue small" type="button" data-nav="perspective">Perspective Demo</button>
      <button class="btn ghost small" type="button" data-nav="home">Public Home</button>
    </div>
  `;
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
  setSelectedValues("#workerTradeCategories", worker.tradeCategories || worker.providerCategories || [worker.trade]);
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
  const profileHandoff = document.querySelector("#profileDemoHandoff");
  if (profileHandoff) profileHandoff.innerHTML = profileDemoHandoff(profile);
  const profileClose = document.querySelector("#profileCloseCard");
  if (profileClose) profileClose.innerHTML = profileCloseCard(profile);
  document.querySelector("#profileBrief").innerHTML = profileBriefRows(profile).map((item) => `
    <article>
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
    </article>
  `).join("");
  const proofPath = document.querySelector("#profileProofPath");
  if (proofPath) {
    proofPath.innerHTML = profileProofPathRows(profile).map((item) => `
      <article class="${item.state}">
        <span>${escapeHtml(item.step)}</span>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
          <small>${escapeHtml(item.meta)}</small>
        </div>
        <button class="btn ${item.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(item.action)}>${escapeHtml(item.actionLabel)}</button>
      </article>
    `).join("");
  }
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

function profileDemoHandoff(profile) {
  const rows = profileDemoHandoffRows(profile);
  return `
    <div class="profile-demo-handoff-heading">
      <div>
        <span class="split-label">Perspective handoff</span>
        <strong>${escapeHtml(profileDemoHandoffTitle(profile))}</strong>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-profile-demo-handoff">Copy Handoff</button>
    </div>
    <div class="profile-demo-handoff-grid">
      ${rows.map((row) => `
        <article class="${row.state}">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(row.title)}</strong>
          <p>${escapeHtml(row.body)}</p>
          <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
        </article>
      `).join("")}
    </div>
  `;
}

function profileDemoHandoffTitle(profile) {
  if (state.session.role === "customer") return "Show the homeowner exactly where the job stands.";
  if (state.session.role === "worker") return "Show the worker how jobs, bids, and messages connect.";
  if (state.session.role === "admin") return "Show the operator what to run before first-user outreach.";
  return "Choose a role to show the right Forge perspective.";
}

function profileDemoHandoffRows(profile) {
  if (state.session.role === "customer") {
    const jobs = state.jobs.filter((job) => samePerson(job.customer, profile.name));
    const job = jobs[0] || state.jobs[0];
    const bids = job ? state.bids.filter((bid) => bid.jobId === job.id) : [];
    const chosen = bids.find((bid) => bid.chosen);
    return [
      {
        label: "1. Status",
        title: job ? `${job.status} job` : "Post a job",
        body: job ? `${job.title} has ${bids.length} bid${bids.length === 1 ? "" : "s"} visible from the customer view.` : "Start with a real job so Forge can show status.",
        state: job ? "ready" : "waiting",
        primary: true,
        actionLabel: "Open Status",
        action: { type: "nav", screen: "status" }
      },
      {
        label: "2. Detail",
        title: chosen ? "Selected bid visible" : bids.length ? "Bids ready" : "Bid proof pending",
        body: chosen ? `${chosen.worker} is selected at ${chosen.amount}; detail and messages now line up.` : bids.length ? "Use Job Detail to compare bids and choose the next handoff." : "Invite or wait for one worker bid before detail proof.",
        state: bids.length ? "ready" : "waiting",
        primary: false,
        actionLabel: job ? "Open Detail" : "Post Job",
        action: job ? { type: "detail", jobId: job.id } : { type: "nav", screen: "post" }
      },
      {
        label: "3. Thread",
        title: chosen ? "Schedule handoff" : "Message handoff",
        body: chosen ? "Open Messages to confirm schedule and arrival details." : "Messages complete the proof once a bid is chosen.",
        state: chosen ? "ready" : "waiting",
        primary: false,
        actionLabel: "Open Messages",
        action: job ? { type: "thread", threadId: `job-${job.id}` } : { type: "nav", screen: "messages" }
      }
    ];
  }
  if (state.session.role === "worker") {
    const worker = findWorkerByName(profile.name) || state.worker;
    const bids = state.bids.filter((bid) => samePerson(bid.worker, worker.name));
    const job = state.jobs.find((item) => item.id === state.activeJobId) || state.jobs[0];
    const chosen = bids.find((bid) => bid.chosen);
    return [
      {
        label: "1. Work",
        title: `${worker.trade} profile`,
        body: `${worker.name} can show local jobs and service area before submitting a bid.`,
        state: "ready",
        primary: true,
        actionLabel: "Dashboard",
        action: { type: "nav", screen: "worker" }
      },
      {
        label: "2. Bid",
        title: bids.length ? `${bids.length} bid${bids.length === 1 ? "" : "s"} submitted` : "Submit one bid",
        body: bids.length ? "Submitted bids give the worker side visible activity." : "Open the bid form to show how Mike applies for a local job.",
        state: bids.length ? "ready" : "waiting",
        primary: false,
        actionLabel: "Submit Bid",
        action: job ? { type: "bidJob", jobId: job.id } : { type: "nav", screen: "bid" }
      },
      {
        label: "3. Follow-up",
        title: chosen ? "Chosen bid" : "Messages ready",
        body: chosen ? `${chosen.worker} is selected; use Messages for scheduling.` : "Open Messages to show how bid conversations stay organized.",
        state: "ready",
        primary: false,
        actionLabel: "Open Messages",
        action: job ? { type: "thread", threadId: `job-${job.id}` } : { type: "nav", screen: "messages" }
      }
    ];
  }
  if (state.session.role === "admin") {
    const needsTouch = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
    return [
      {
        label: "1. Command",
        title: "Operator dashboard",
        body: "Admin can review jobs, workers, bids, messages, safety, and launch status.",
        state: "ready",
        primary: true,
        actionLabel: "Admin Center",
        action: { type: "nav", screen: "admin" }
      },
      {
        label: "2. Queue",
        title: `${needsTouch} follow-up${needsTouch === 1 ? "" : "s"}`,
        body: "Copy the queue before outreach so no first-user lead is missed.",
        state: needsTouch ? "waiting" : "ready",
        primary: false,
        actionLabel: "Copy Queue",
        action: { type: "action", name: "copy-follow-up-queue" }
      },
      {
        label: "3. Closeout",
        title: "Save before handoff",
        body: "Closeout, backup, and launch status keep the MVP easy to resume.",
        state: "ready",
        primary: false,
        actionLabel: "Copy Closeout",
        action: { type: "action", name: "copy-first-user-closeout" }
      }
    ];
  }
  return [
    {
      label: "1. Customer",
      title: "John Smith",
      body: "Open the customer side for job status, bids, detail, and messages.",
      state: "waiting",
      primary: true,
      actionLabel: "Open John",
      action: { type: "login", role: "customer", name: "John Smith", screen: "profile" }
    },
    {
      label: "2. Worker",
      title: "Mike Jones",
      body: "Open the worker side for jobs, bids, messages, and readiness.",
      state: "waiting",
      primary: false,
      actionLabel: "Open Mike",
      action: { type: "login", role: "worker", name: "Mike Jones", screen: "profile" }
    },
    {
      label: "3. Admin",
      title: "Forge Admin",
      body: "Open the operator side for launch command and follow-up.",
      state: "waiting",
      primary: false,
      actionLabel: "Open Admin",
      action: { type: "login", role: "admin", name: "Forge Admin", screen: "profile" }
    }
  ];
}

function profileCloseCard(profile) {
  const close = profileCloseAsk(profile);
  return `
    <div>
      <span class="split-label">Close ask</span>
      <strong>${escapeHtml(close.title)}</strong>
      <p>${escapeHtml(close.body)}</p>
    </div>
    <div class="profile-close-actions">
      <button class="btn blue small" type="button" ${profileProofButtonAttrs(close.action)}>${escapeHtml(close.actionLabel)}</button>
      <button class="btn ghost small" type="button" data-action="copy-profile-close-ask">Copy Ask</button>
    </div>
  `;
}

function profileCloseAsk(profile) {
  if (state.session.role === "customer") {
    return {
      title: "Ask for one real job or one referral.",
      body: "Can you post one real job you actually need handled, or send one person who needs local work done?",
      actionLabel: "Post Job",
      action: { type: "nav", screen: "post" }
    };
  }
  if (state.session.role === "worker") {
    const job = state.jobs.find((item) => item.id === state.activeJobId) || state.jobs[0];
    return {
      title: "Ask them to join and bid on one local job.",
      body: "Can you join the worker list and submit one bid so Forge can test the handoff from job to message?",
      actionLabel: job ? "Submit Bid" : "Browse Jobs",
      action: job ? { type: "bidJob", jobId: job.id } : { type: "nav", screen: "jobs" }
    };
  }
  if (state.session.role === "admin") {
    return {
      title: "Run the next controlled outreach block.",
      body: "Copy the launch command, contact the next warm lead, then export a backup before widening the invite list.",
      actionLabel: "Launch Status",
      action: { type: "nav", screen: "launch-status" }
    };
  }
  return {
    title: "Choose a perspective before the ask.",
    body: "Open John, Mike, or Admin first so the close ask matches what that person just saw.",
    actionLabel: "Perspective Demo",
    action: { type: "nav", screen: "perspective" }
  };
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

function profileProofPathRows(profile) {
  if (state.session.role === "customer") {
    const jobs = state.jobs.filter((job) => samePerson(job.customer, profile.name));
    const job = jobs[0] || state.jobs[0];
    const bids = job ? state.bids.filter((bid) => bid.jobId === job.id) : [];
    const chosen = bids.find((bid) => bid.chosen);
    return [
      {
        step: "1",
        title: "Show job status",
        body: job ? `${job.title} is ${job.status.toLowerCase()} with ${bids.length} bid${bids.length === 1 ? "" : "s"}.` : "Post a job first so the customer view has a status trail.",
        meta: "Customer proof starts with My Job Status.",
        state: job ? "ready" : "waiting",
        primary: true,
        actionLabel: "Open Status",
        action: { type: "nav", screen: "status" }
      },
      {
        step: "2",
        title: chosen ? "Review selected bid" : "Compare bids",
        body: chosen ? `${chosen.worker} is selected at ${chosen.amount}.` : bids.length ? "Open Job Detail and choose the next handoff." : "Invite a worker bid before showing bid selection.",
        meta: bids.length ? "This is the Choose + Message proof." : "Bid proof is pending.",
        state: bids.length ? "ready" : "waiting",
        primary: false,
        actionLabel: job ? "Open Job Detail" : "Post Job",
        action: job ? { type: "detail", jobId: job.id } : { type: "nav", screen: "post" }
      },
      {
        step: "3",
        title: "Open message handoff",
        body: chosen ? "Use Messages to confirm schedule and arrival details." : "Messages become the handoff once a bid is chosen.",
        meta: chosen ? "Scheduling handoff ready." : "Choose a bid to complete this proof.",
        state: chosen ? "ready" : "waiting",
        primary: false,
        actionLabel: "Open Messages",
        action: job ? { type: "thread", threadId: `job-${job.id}` } : { type: "nav", screen: "messages" }
      }
    ];
  }
  if (state.session.role === "worker") {
    const worker = findWorkerByName(profile.name) || state.worker;
    const bids = state.bids.filter((bid) => samePerson(bid.worker, worker.name));
    const job = state.jobs.find((item) => item.id === state.activeJobId) || state.jobs[0];
    return [
      {
        step: "1",
        title: "Show worker dashboard",
        body: `${worker.name} can see local jobs, earnings, bids, and profile readiness.`,
        meta: `${worker.trade} in ${worker.area}.`,
        state: "ready",
        primary: true,
        actionLabel: "Dashboard",
        action: { type: "nav", screen: "worker" }
      },
      {
        step: "2",
        title: bids.length ? "Show submitted bid" : "Submit one bid",
        body: bids.length ? `${bids.length} bid${bids.length === 1 ? "" : "s"} show worker activity.` : "Open the bid form so Mike can show the worker-side action.",
        meta: job ? `Demo job: ${job.title}.` : "No job selected yet.",
        state: bids.length ? "ready" : "waiting",
        primary: false,
        actionLabel: "Submit Bid",
        action: job ? { type: "bidJob", jobId: job.id } : { type: "nav", screen: "bid" }
      },
      {
        step: "3",
        title: "Open worker messages",
        body: "Messages show how a bid becomes scheduling follow-up.",
        meta: "Use this after the customer chooses a bid.",
        state: "ready",
        primary: false,
        actionLabel: "Open Messages",
        action: job ? { type: "thread", threadId: `job-${job.id}` } : { type: "nav", screen: "messages" }
      }
    ];
  }
  if (state.session.role === "admin") {
    const needsTouch = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
    return [
      {
        step: "1",
        title: "Open launch center",
        body: "Show jobs, workers, reports, follow-up, and launch command from one operator view.",
        meta: `${state.jobs.length} jobs and ${state.workers.length} workers loaded.`,
        state: "ready",
        primary: true,
        actionLabel: "Admin Center",
        action: { type: "nav", screen: "admin" }
      },
      {
        step: "2",
        title: "Review follow-up",
        body: `${needsTouch} lead${needsTouch === 1 ? "" : "s"} currently need touch across the first-user queue.`,
        meta: "Use Copy Queue or Launch Command before outreach.",
        state: needsTouch ? "waiting" : "ready",
        primary: false,
        actionLabel: "Copy Queue",
        action: { type: "action", name: "copy-follow-up-queue" }
      },
      {
        step: "3",
        title: "Close out and back up",
        body: "Use the Admin closeout sequence after each demo or outreach block.",
        meta: "Queue, batch, recap, backup, launch status.",
        state: "ready",
        primary: false,
        actionLabel: "Copy Closeout",
        action: { type: "action", name: "copy-first-user-closeout" }
      }
    ];
  }
  return [
    {
      step: "1",
      title: "Choose homeowner view",
      body: "Open John's customer proof for status, bids, and message handoff.",
      meta: "Best proof for job posters.",
      state: "waiting",
      primary: true,
      actionLabel: "Open John",
      action: { type: "login", role: "customer", name: "John Smith", screen: "status" }
    },
    {
      step: "2",
      title: "Choose worker view",
      body: "Open Mike's worker proof for jobs, bids, and messages.",
      meta: "Best proof for workers.",
      state: "waiting",
      primary: false,
      actionLabel: "Open Mike",
      action: { type: "login", role: "worker", name: "Mike Jones", screen: "worker" }
    },
    {
      step: "3",
      title: "Choose operator view",
      body: "Open Admin to see follow-up, launch command, closeout, exports, and reports.",
      meta: "Best proof for Andrew operating Forge.",
      state: "waiting",
      primary: false,
      actionLabel: "Open Admin",
      action: { type: "login", role: "admin", name: "Forge Admin", screen: "admin" }
    }
  ];
}

function profileProofButtonAttrs(action) {
  if (!action) return `data-nav="profile"`;
  if (action.type === "nav") return `data-nav="${escapeHtml(action.screen)}"`;
  if (action.type === "detail") return `data-detail="${escapeHtml(action.jobId)}"`;
  if (action.type === "thread") return `data-message-thread="${escapeHtml(action.threadId)}"`;
  if (action.type === "bidJob") return `data-bid-job="${escapeHtml(action.jobId)}"`;
  if (action.type === "action") return `data-action="${escapeHtml(action.name)}"`;
  if (action.type === "login") {
    return `data-login-role="${escapeHtml(action.role)}" data-login-name="${escapeHtml(action.name)}" data-login-screen="${escapeHtml(action.screen)}"`;
  }
  return `data-nav="profile"`;
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

function setSelectedValues(selector, values) {
  const field = document.querySelector(selector);
  if (!field) return;
  const selected = new Set((Array.isArray(values) ? values : [values]).filter(Boolean).map(String));
  Array.from(field.options || []).forEach((option) => {
    option.selected = selected.has(option.value) || selected.has(option.textContent);
  });
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
  fillSelect("#workerTradeCategories", categories);
  fillSelect("#workerBusinessSize", providerBusinessSizeOptions);
  fillSelect("#workerNorthStarMarketingNeed", providerNorthStarHelpOptions);
  fillSelect("#providerVerticalFilter", ["All Provider Types", ...serviceVerticals.map((vertical) => [vertical.id, vertical.title])]);
  fillSelect("#adminTradeCategoryFilter", ["All Categories", ...categories]);
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
  fillSelect("#northstarServiceCategories", northstarBlueCollarCategories);
  fillSelect("#northstarBudget", northstarBudgetOptions);
  fillSelect("#northstarBusinessSize", providerBusinessSizeOptions);
  fillSelect("#northstarMarketingNeed", providerNorthStarHelpOptions);
  fillSelect("#northstarCurrentAdSpend", northstarAdSpendOptions);
  fillSelect("#northstarLeadVolume", northstarLeadVolumeOptions);
  fillSelect("#northstarAnswerEveryCall", ["Not sure", "Yes", "No"]);
  fillSelect("#northstarHasCrm", ["Not sure", "Yes", "No"]);
  fillSelect("#northstarHiringHelp", ["Not sure", "Yes", "No"]);
  fillSelect("#northstarResidentialCommercial", northstarResidentialCommercialOptions);
  fillSelect("#northstarNeedsMedia", ["Not sure", "Yes", "No"]);
  fillSelect("#northstarAuditRequested", ["Yes", "No", "Not sure"]);
  fillSelect("#flexIndustry", ["", ...flexIndustries], "Select an industry");
  fillSelect("#flexYearsInBusiness", ["", ...flexYearsOptions], "Select years");
  fillSelect("#flexMonthlyRevenue", ["", ...flexRevenueRanges], "Select revenue");
  fillSelect("#flexMonthlySpend", ["", ...flexSpendRanges], "Select spend");
  fillSelect("#flexEmployeeCount", ["", ...flexEmployeeRanges], "Select team size");
  fillSelect("#flexPrimaryNeed", ["", ...flexNeedOptions], "Select primary need");
  fillSelect("#flexStatusFilter", ["All Statuses", ...flexLeadStatuses.map((status) => [status, flexStatusLabel(status)])]);
  fillSelect("#manufacturingProductType", ["", ...manufacturingProductCategories], "Select product type");
  fillSelect("#manufacturingFormulaStatus", manufacturingFormulaStatuses);
  fillSelect("#manufacturingDosageForm", manufacturingDosageForms);
  fillSelect("#manufacturingCbdHemp", yesNoOptions);
  fillSelect("#manufacturingLabelDesignNeeded", manufacturingYesNoReviewOptions);
  fillSelect("#manufacturingComplianceReviewNeeded", manufacturingYesNoReviewOptions);
  fillSelect("#manufacturingFulfillmentNeeded", manufacturingYesNoReviewOptions);
  fillSelect("#manufacturingDropshippingNeeded", manufacturingYesNoReviewOptions);
  fillSelect("#manufacturingCleanLabelRequirements", manufacturingCleanLabelOptions);
  fillSelect("#manufacturingCertificationsRequired", manufacturingCertificationOptions);
  fillSelect("#manufacturingBudgetRange", manufacturingBudgetRanges);
  fillSelect("#manufacturingSupplierTypeInput", ["", ...manufacturingSupplierTypes], "Select supplier type");
  fillSelect("#manufacturingSupplierDosageForms", manufacturingDosageForms);
  fillSelect("#manufacturingSupplierCertifications", manufacturingCertificationOptions);
  fillSelect("#manufacturingSupplierTestingOffered", manufacturingTestingOptions);
  fillSelect("#manufacturingSupplierShipsNationwide", yesNoOptions);
  fillSelect("#manufacturingSupplierAcceptingClients", ["Not sure", "Yes", "No"]);
  fillSelect("#manufacturingSupplierInsurance", ["Not sure", "Yes", "No"]);
  fillSelect("#manufacturingSupplierLeadSource", manufacturingSupplierLeadSources);
  fillSelect("#manufacturingSupplierOutreachStatus", manufacturingSupplierLeadStatuses);
  fillSelect("#manufacturingLeadSourceInput", ["", ...manufacturingSupplierLeadSources], "Select source");
  fillSelect("#manufacturingLeadOutreachStatus", manufacturingSupplierLeadStatuses);
  fillSelect("#manufacturingLeadRelatedVertical", manufacturingRelatedVerticals);
  fillSelect("#manufacturingProductFilter", ["All Product Categories", ...manufacturingProductCategories]);
  fillSelect("#manufacturingSupplierFilter", ["All Supplier Types", ...manufacturingSupplierTypes]);
  fillSelect("#manufacturingDosageFilter", ["All Dosage Forms", ...manufacturingDosageForms]);
  fillSelect("#manufacturingMoqFilter", manufacturingMoqFilterOptions);
  fillSelect("#manufacturingCertificationFilter", ["All Certifications", ...manufacturingCertificationOptions]);
  fillSelect("#bidManufacturingFormulationIncluded", ["Not applicable", "No", "Yes"]);
  fillSelect("#bidManufacturingPackagingIncluded", ["Not applicable", "No", "Yes"]);
  fillSelect("#bidManufacturingFulfillmentIncluded", ["Not applicable", "No", "Yes"]);
  fillSelect("#bidManufacturingNdaRequired", ["Not applicable", "No", "Yes"]);
  fillSelect("#bidStatus", manufacturingBidStatuses);
  fillSelect("#academyDesiredTrade", academyTradeOptions);
  fillSelect("#academyEmployerTrade", academyTradeOptions);
  fillSelect("#admitlyPathway", admitlyPathwayOptions);
  fillSelect("#admitlyDesiredTrade", academyTradeOptions);
  fillSelect("#admitlyFundingNeed", fundingNeedOptions);
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

function demoProofSwitchboardRows() {
  const demoJob = state.jobs[0] || {};
  const demoBids = state.bids.filter((bid) => bid.jobId === demoJob.id);
  const chosenBid = demoBids.find((bid) => bid.chosen);
  const availableJobs = state.jobs.filter((job) => job.status !== "Completed").length;
  const followUpCount = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  const autoProofCount = (state.autoRequests || []).length + (state.autoInquiries || []).length + (state.vehicles || []).length;
  return [
    {
      label: "Customer",
      title: "John customer proof",
      body: "Show status, bids, selected handoff, and the next message from the customer's side.",
      metric: `${demoBids.length} bids ${chosenBid ? "with one selected" : "ready to review"}`,
      proof: "Status -> Detail -> Messages",
      role: "customer",
      name: "John Smith",
      screen: "status",
      secondaryLabel: "Readiness",
      secondaryScreen: "profile",
      tone: "blue"
    },
    {
      label: "Worker",
      title: "Mike worker proof",
      body: "Show available jobs, bid flow, profile readiness, and where the worker can take action.",
      metric: `${availableJobs} jobs visible`,
      proof: "Worker -> Jobs -> Bid",
      role: "worker",
      name: "Mike Jones",
      screen: "worker",
      secondaryLabel: "Profile",
      secondaryScreen: "profile",
      tone: "orange"
    },
    {
      label: "Operator",
      title: "Admin follow-up proof",
      body: "Show the first-200 queue, safety gate, exports, and what needs follow-up today.",
      metric: `${followUpCount} follow-ups queued`,
      proof: "Admin -> Launch Command -> Safety",
      role: "admin",
      name: "Forge Admin",
      screen: "admin",
      secondaryLabel: "Launch",
      secondaryScreen: "launch-status",
      tone: "blue"
    },
    {
      label: "Auto",
      title: "Auto marketplace proof",
      body: "Show vehicle requests, seller capture, buyer interest, dealer setup, and partner routing.",
      metric: `${autoProofCount} auto leads`,
      proof: "Auto -> Dealer Network -> Buyer Queue",
      role: "customer",
      name: "Forge Auto Services",
      screen: "auto",
      secondaryLabel: "Launch Route",
      secondaryScreen: "launch-status",
      tone: "ghost"
    }
  ];
}

function renderDemoProofSwitchboard() {
  const target = document.querySelector("#demoProofSwitchboard");
  if (!target) return;
  target.innerHTML = demoProofSwitchboardRows().map((row) => `
    <article class="demo-proof-card" data-demo-proof-role="${escapeHtml(row.label)}">
      <div>
        <span class="split-label">${escapeHtml(row.label)}</span>
        <h3>${escapeHtml(row.title)}</h3>
        <p>${escapeHtml(row.body)}</p>
      </div>
      <div class="demo-proof-meta">
        <span><strong>Proof</strong>${escapeHtml(row.proof)}</span>
        <span><strong>Current</strong>${escapeHtml(row.metric)}</span>
      </div>
      <div class="demo-proof-actions">
        <button class="btn ${escapeHtml(row.tone)} small" type="button" data-login-role="${escapeHtml(row.role)}" data-login-name="${escapeHtml(row.name)}" data-login-screen="${escapeHtml(row.screen)}">Open Proof</button>
        <button class="btn ghost small" type="button" data-login-role="${escapeHtml(row.role)}" data-login-name="${escapeHtml(row.name)}" data-login-screen="${escapeHtml(row.secondaryScreen)}">${escapeHtml(row.secondaryLabel)}</button>
      </div>
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
      <div class="demo-route-actions">
        ${path.actions.map(([label, screen], index) => `<button class="btn ${index === 0 ? "blue" : "ghost"} small" type="button" data-login-role="${path.role}" data-login-name="${escapeHtml(path.name)}" data-login-screen="${screen}">${escapeHtml(label)}</button>`).join("")}
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
    ["Forge Manufacturing", "Manufacturing + Nutraceuticals", "customer", "manufacturing"],
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

function renderLaunchReceipt() {
  const target = document.querySelector("#launchReceiptGrid");
  if (!target) return;
  target.innerHTML = launchReceiptRows().map((row) => `
    <article class="launch-receipt-card ${escapeHtml(row.status)}">
      <div>
        <span class="split-label">${escapeHtml(row.label)}</span>
        <h3>${escapeHtml(row.title)}</h3>
        <p>${escapeHtml(row.body)}</p>
      </div>
      <div class="launch-receipt-meta">
        <span><strong>Proof</strong>${escapeHtml(row.proof)}</span>
        <span><strong>Collect</strong>${escapeHtml(row.collect)}</span>
        <span><strong>Saved in</strong>${escapeHtml(row.savedIn)}</span>
      </div>
      <div class="launch-receipt-actions">
        <b>${escapeHtml(row.metric)}</b>
        <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
      </div>
    </article>
  `).join("");
}

function launchReceiptRows() {
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const leadCount = totalLeadCount();
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  const followUpCount = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  return [
    {
      label: "Homeowner",
      title: "Show job status to message handoff",
      body: "Use John to show a real local job, bid review, selected worker handoff, and the next message.",
      proof: "Status -> Detail -> Messages",
      collect: "One real job or one referral",
      savedIn: "Jobs, bids, messages, follow-up queue",
      metric: `${state.jobs.length} jobs`,
      status: state.jobs.length ? "ready" : "attention",
      primary: true,
      actionLabel: "Open John",
      action: { type: "login", role: "customer", name: "John Smith", screen: "status" }
    },
    {
      label: "Worker",
      title: "Show worker readiness to first bid",
      body: "Use Mike to show available jobs, provider profile status, bid submission, and message follow-up.",
      proof: "Worker -> Bid -> Profile",
      collect: "Trade, service area, consent",
      savedIn: "Worker profiles, bid activity, messages",
      metric: `${state.workers.length} workers`,
      status: state.workers.length ? "ready" : "attention",
      primary: false,
      actionLabel: "Open Mike",
      action: { type: "login", role: "worker", name: "Mike Jones", screen: "worker" }
    },
    {
      label: "Expansion",
      title: "Route autos, careers, and business leads",
      body: "Use the right lane for vehicle sellers, buyers, career applicants, creatives, NorthStar leads, or Capital Desk leads.",
      proof: "Autos -> Careers -> NorthStar",
      collect: "Need, consent, best contact",
      savedIn: "Specialty queues and admin follow-up",
      metric: `${leadCount}/200 leads`,
      status: leadCount ? "ready" : "attention",
      primary: false,
      actionLabel: "Open Autos",
      action: { type: "nav", screen: "autos" }
    },
    {
      label: "Operator",
      title: backupCurrent ? "Close the demo with current backup" : "Close the demo by exporting backup",
      body: backupCurrent
        ? "Copy the follow-up queue, run the next batch, and export again after new conversations."
        : "Export before broader outreach so the current first-user list is recoverable.",
      proof: "Admin -> Follow-Up -> Closeout",
      collect: "Next owner and next touch",
      savedIn: "Admin queues, reports, backup file",
      metric: `${followUpCount} need touch`,
      status: backupCurrent ? "ready" : "attention",
      primary: false,
      actionLabel: backupCurrent ? "Open Admin" : "Export Backup",
      action: backupCurrent
        ? { type: "login", role: "admin", name: "Forge Admin", screen: "admin" }
        : { type: "action", name: "export-backup" }
    }
  ];
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

function renderPerspectiveReadiness() {
  const target = document.querySelector("#perspectiveReadinessGrid");
  if (!target) return;
  target.innerHTML = perspectiveReadinessRows().map((row) => `
    <article class="${escapeHtml(row.status)}">
      <div>
        <span>${escapeHtml(row.label)}</span>
        <strong>${escapeHtml(row.title)}</strong>
        <p>${escapeHtml(row.body)}</p>
      </div>
      <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
    </article>
  `).join("");
}

function perspectiveReadinessRows() {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  const publicMode = Boolean(state.settings.publicMode);
  const webhookReady = state.settings.webhookEnabled && Boolean(state.settings.webhookUrl);
  return [
    {
      label: "Demo",
      title: "Controlled demos are ready",
      body: "Use John, Mike, Admin, Autos, or Careers with people Andrew can personally follow up with.",
      status: "ready",
      primary: true,
      actionLabel: "John Proof",
      action: { type: "login", role: "customer", name: "John Smith", screen: "status" }
    },
    {
      label: "Boundary",
      title: "Public launch is on hold",
      body: "Broad traffic waits for backend delivery, production admin auth, backup, legal review, and final security review.",
      status: "hold",
      primary: false,
      actionLabel: "Launch Status",
      action: { type: "nav", screen: "launch-status" }
    },
    {
      label: "First users",
      title: `${leadCount}/200 saved`,
      body: webhookReady ? "Webhook delivery is enabled. Test one lead before broader outreach." : "Leads save locally right now. Keep the group controlled and export backups.",
      status: leadCount ? "ready" : "attention",
      primary: false,
      actionLabel: "Copy Count",
      action: { type: "action", name: "copy-first-user-count" }
    },
    {
      label: "Handoff",
      title: backupCurrent ? "Backup current" : "Backup before outreach",
      body: backupCurrent ? `Last backup covers ${backupCount} leads.` : "Export a fresh JSON backup before collecting a new batch of first-user leads.",
      status: backupCurrent ? "ready" : "attention",
      primary: false,
      actionLabel: backupCurrent ? "Copy Closeout" : "Export Backup",
      action: backupCurrent ? { type: "action", name: "copy-first-user-closeout" } : { type: "action", name: "export-backup" }
    },
    {
      label: "Visitor mode",
      title: publicMode ? "Public View is on" : "Turn on before handoff",
      body: publicMode ? "Operator-only controls are hidden for visitor demos." : "Use Public View before handing the screen to someone outside the operator flow.",
      status: publicMode ? "ready" : "attention",
      primary: false,
      actionLabel: publicMode ? "Open Demo" : "Turn On",
      action: publicMode ? { type: "nav", screen: "perspective" } : { type: "action", name: "toggle-public-mode" }
    }
  ];
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
    ["Mobile demo", true, "Bottom tab bar includes Home, Services, Post, Jobs, Account, plus Demo, Launch, Status, Messages, and Profile shortcuts."],
    ["Phone demo order", true, "On mobile, run John Status, John Messages, Mike Worker proof, then Launch Status in under one minute."],
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
  const scoreGrid = document.querySelector("#northstarScoreGrid");
  const roofingServices = document.querySelector("#northstarRoofingServices");
  const roofingTemplates = document.querySelector("#northstarRoofingTemplates");
  const acquisitionCopy = document.querySelector("#northstarAcquisitionCopy");
  const leadList = document.querySelector("#northstarLeadList");
  if (!marketingGrid || !operationsGrid || !packageGrid || !leadList) return;

  if (acquisitionCopy) acquisitionCopy.textContent = NORTH_STAR_POSITIONING_COPY;
  marketingGrid.innerHTML = northstarMarketingServices.map((service) => `<span>${escapeHtml(service)}</span>`).join("");
  operationsGrid.innerHTML = northstarOperationsServices.map((service) => `<span>${escapeHtml(service)}</span>`).join("");
  if (scoreGrid) {
    scoreGrid.innerHTML = northstarMarketingScoreCategories.map(([, label, max]) => `
      <article>
        <strong>${escapeHtml(label)}</strong>
        <span>0-${max}</span>
      </article>
    `).join("");
  }
  packageGrid.innerHTML = northstarPackages.map((item) => `
    <article>
      <span class="split-label">${escapeHtml(item.fit)}</span>
      <h3>${escapeHtml(item.name)}</h3>
      <ul>${item.includes.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>
    </article>
  `).join("");
  if (roofingServices) {
    roofingServices.innerHTML = roofingMarketingServices.map((service) => `<span>${escapeHtml(service)}</span>`).join("");
  }
  if (roofingTemplates) {
    roofingTemplates.innerHTML = roofingLandingPageTemplates.map((template) => `<li>${escapeHtml(template)}</li>`).join("");
  }
  leadList.innerHTML = (state.northstarLeads || []).map(normalizeNorthStarLead).slice(0, 4).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.leadClassification)} · Score ${escapeHtml(String(lead.score))}</span>
        <strong>${escapeHtml(lead.businessName)} · ${escapeHtml(lead.trade)}</strong>
        <p>${escapeHtml(lead.city)} · ${escapeHtml(lead.businessSize)} · ${escapeHtml((lead.servicesNeeded || []).join(", ") || "Services pending")}</p>
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
    "Built for contractors, builders, landscapers, roofers, fencing companies, custom iron gate companies, auto shops, body shops, transport companies, diesel truck operators, photographers, videographers, agencies, restaurants, and service businesses that spend money before they get paid."
  ].map((item) => `<p>${escapeHtml(item)}</p>`).join("");

  problems.innerHTML = [
    "Materials are due before customer payment clears",
    "Fuel, labor, and vendor bills hit before invoices are paid",
    "Employees need controlled spending cards",
    "The owner wants cleaner expense tracking",
    "The business needs better systems before scaling",
    "Jobs are coming in, but cash flow is tight",
    "Growth is possible, but the business needs structure"
  ].map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  mayHelp.innerHTML = [
    "Business credit and cash-flow timing",
    "Vendor payments and business banking tools",
    "Employee cards and controlled expense management",
    "Growth capital review",
    "Fuel/material/equipment spending and payroll timing"
  ].map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  steps.innerHTML = [
    "Tell Forge what your business needs.",
    "Forge reviews whether your business looks like a fit.",
    "Forge sends you the official Flex referral link if appropriate.",
    "You apply directly with Flex.",
    "Flex handles approval, onboarding, activation, and product support.",
    "Forge can also help with job leads, marketing, websites, CRM, hiring, payment processing, and operations."
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

  const continueButton = document.querySelector("#flexContinueButton");
  if (continueButton) continueButton.href = flexReferralUrl();
}

function renderManufacturingPage() {
  const stats = document.querySelector("#manufacturingStats");
  const productGrid = document.querySelector("#manufacturingProductGrid");
  const productPathTitle = document.querySelector("#selectedProductPathTitle");
  const productPathDetail = document.querySelector("#productPathDetail");
  const supplierTypes = document.querySelector("#manufacturingSupplierTypes");
  const flags = document.querySelector("#manufacturingFilterFlags");
  const directory = document.querySelector("#manufacturingSupplierDirectory");
  const eden = document.querySelector("#manufacturingEdenGrid");
  const docs = document.querySelector("#manufacturingDocumentGrid");
  const statuses = document.querySelector("#manufacturingStatusGrid");
  const rfqList = document.querySelector("#manufacturingRfqList");
  const supplierLeadList = document.querySelector("#manufacturingSupplierLeadList");
  const supplierLeadDetail = document.querySelector("#manufacturingSupplierLeadDetail");
  const outreachTemplate = document.querySelector("#manufacturingOutreachTemplate");
  const compliance = document.querySelectorAll("[data-manufacturing-compliance]");
  if (!stats || !productGrid || !supplierTypes || !flags || !directory || !eden || !docs || !statuses || !rfqList || !supplierLeadList || !supplierLeadDetail || !outreachTemplate) return;

  compliance.forEach((node) => {
    node.textContent = MANUFACTURING_COMPLIANCE_COPY;
  });

  const suppliers = state.manufacturingSuppliers || [];
  const rfqs = state.manufacturingRfqs || [];
  const supplierLeads = state.manufacturingSupplierLeads || [];
  stats.innerHTML = statCards([
    ["RFQs", rfqs.length],
    ["Demo Suppliers", suppliers.length],
    ["Supplier Leads", supplierLeads.length],
    ["Supplier Types", manufacturingSupplierTypes.length],
    ["Documents", manufacturingDocumentTemplates.length],
    ["Open Pipeline", rfqs.filter((lead) => !["Completed", "Closed Won", "Closed Lost"].includes(lead.status)).length]
  ]);

  const activeProductPath = productPathBySlug(state.activeProductPathSlug);
  productGrid.innerHTML = productPaths.map((path) => `
    <button class="product-path-tile ${path.slug === activeProductPath.slug ? "active" : ""}" type="button" data-action="select-product-path" data-product-path="${escapeHtml(path.slug)}">
      <strong>${escapeHtml(path.title)}</strong>
      <span>${escapeHtml(path.categoryGroup)} · ${escapeHtml(path.regulatoryLevel.replaceAll("_", " "))}</span>
    </button>
  `).join("");
  if (productPathTitle && productPathDetail) {
    productPathTitle.textContent = `${activeProductPath.title}: 3 public supplier matches`;
    productPathDetail.innerHTML = productPathDetailHtml(activeProductPath);
  }
  supplierTypes.innerHTML = manufacturingSupplierTypes.map((type) => `<span>${escapeHtml(type)}</span>`).join("");

  const activeFlags = Array.from(document.querySelectorAll("input[name='manufacturingFilterFlag']:checked")).map((input) => input.value);
  flags.innerHTML = manufacturingFilterFlags.map((flag) => `
    <label class="check-row manufacturing-filter-chip">
      <input type="checkbox" name="manufacturingFilterFlag" value="${escapeHtml(flag)}" ${activeFlags.includes(flag) ? "checked" : ""} />
      ${escapeHtml(flag)}
    </label>
  `).join("");

  const filteredSuppliers = filteredManufacturingSuppliers(activeFlags);
  directory.innerHTML = filteredSuppliers.map((supplier) => `
    <article class="manufacturing-supplier-card">
      <div>
        <span class="split-label">${escapeHtml(supplier.status)} · ${escapeHtml(supplier.verifiedByForge || "Placeholder only")}</span>
        <h3>${escapeHtml(supplier.companyName)}</h3>
        <p>${escapeHtml(supplier.supplierType)} · ${escapeHtml(supplier.location)} · ${escapeHtml(supplier.minimumOrderQuantity)}</p>
        <p>${escapeHtml(supplier.capabilities)}</p>
        <div class="service-category-mini">
          ${(supplier.productCategories || []).slice(0, 5).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          ${(supplier.dosageForms || []).slice(0, 4).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          ${(supplier.certifications || []).slice(0, 4).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
      <div class="lead-actions">
        ${contactLinks(manufacturingSupplierPhone(supplier), manufacturingSupplierEmail(supplier), manufacturingSupplierText(supplier))}
        <button class="btn ghost small" type="button" data-action="copy-manufacturing-supplier" data-manufacturing-supplier-id="${escapeHtml(supplier.id)}">Copy Supplier</button>
        <button class="btn orange small" type="button" data-action="focus-manufacturing-rfq">Request Quote</button>
      </div>
    </article>
  `).join("") || `<article class="manufacturing-supplier-card"><h3>No suppliers match these filters.</h3><p class="muted">Clear filters or create the first supplier profile.</p></article>`;

  eden.innerHTML = manufacturingEcosystemItems.map((item) => `<article><strong>${escapeHtml(item)}</strong></article>`).join("");
  docs.innerHTML = manufacturingDocumentTemplates.map((title) => `
    <article>
      <span class="split-label">Template placeholder</span>
      <strong>${escapeHtml(title)}</strong>
      <p>Available in the Forge Operations Vault for admin copy/review. Legal and compliance templates require professional review before use.</p>
    </article>
  `).join("");
  statuses.innerHTML = manufacturingLeadStatuses.map((status, index) => `
    <article>
      <strong>${index + 1}</strong>
      <span>${escapeHtml(status)}</span>
    </article>
  `).join("");
  rfqList.innerHTML = rfqs.slice(0, 5).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.dosageForm)}</span>
        <strong>${escapeHtml(lead.brandName || "Unnamed manufacturing project")}</strong>
        <p>${escapeHtml(lead.productType)} · ${escapeHtml(lead.targetQuantity)} · ${escapeHtml(lead.locationPreference)}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-manufacturing-rfq" data-manufacturing-rfq-id="${escapeHtml(lead.id)}">Copy RFQ</button>
    </article>
  `).join("") || `<article><p class="muted">No manufacturing RFQs yet.</p></article>`;

  supplierLeadList.innerHTML = supplierLeads.slice(0, 12).map((lead) => manufacturingSupplierLeadCard(lead)).join("") || `<article><p class="muted">No supplier leads yet. Add one manually or import a lawful CSV.</p></article>`;
  supplierLeadDetail.innerHTML = manufacturingSupplierLeadDetail(state.activeManufacturingSupplierLeadId);
  outreachTemplate.textContent = MANUFACTURING_OUTREACH_TEMPLATE;
}

function productPathDetailHtml(path) {
  const matches = productPathSupplierMatches(path);
  const policy = productPathQuotePolicy(path);
  return `
    <div class="product-path-summary">
      <article>
        <span class="split-label">Selected path</span>
        <h3>${escapeHtml(path.title)}</h3>
        <p>${escapeHtml(path.description)}</p>
      </article>
      <article>
        <span class="split-label">Compliance gate</span>
        <p>${escapeHtml(productPathComplianceCopy[path.regulatoryLevel] || productPathComplianceCopy.standard)}</p>
      </article>
      <article>
        <span class="split-label">Quote math</span>
        <p>Default markup is 20%. Customer quote equals base supplier quote times 1.20. Expedited service fee equals customer quote minus base supplier quote. Admin must approve before a customer sees final quote.</p>
      </article>
    </div>
    <div class="product-path-match-grid">
      ${matches.map((match) => `
        <article class="product-path-match-card">
          <header>
            <span class="split-label">${escapeHtml(match.matchType)}</span>
            <strong>${escapeHtml(match.code)}</strong>
          </header>
          <p>${escapeHtml(match.capabilitySummary)}</p>
          <div class="service-category-mini">
            <span>MOQ: ${escapeHtml(match.moqRange)}</span>
            <span>Lead time: ${escapeHtml(match.leadTimeRange)}</span>
            ${match.badges.map((badge) => `<span>${escapeHtml(badge)}</span>`).join("")}
          </div>
          <button class="btn orange small" type="button" data-action="start-product-path-quote" data-product-path="${escapeHtml(path.slug)}" data-supplier-code="${escapeHtml(match.code)}">Request Quote</button>
        </article>
      `).join("")}
    </div>
    <pre class="copy-block product-path-policy">${escapeHtml(JSON.stringify(policy, null, 2))}</pre>
  `;
}

function selectProductPath(slug) {
  const path = productPathBySlug(slug);
  state.activeProductPathSlug = path.slug;
  setFieldValue("#manufacturingProductType", path.title);
  saveState();
  renderManufacturingPage();
  document.querySelector("#productPathMatchEngine")?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast(`${path.title} matches loaded.`);
}

function startProductPathQuote(slug, supplierCode = "") {
  const path = productPathBySlug(slug);
  state.activeProductPathSlug = path.slug;
  setFieldValue("#manufacturingProductType", path.title);
  if (!fieldValue("#manufacturingProductIdea")) setFieldValue("#manufacturingProductIdea", path.title);
  if (!fieldValue("#manufacturingRfqNotes")) {
    setFieldValue("#manufacturingRfqNotes", `Product Path selected: ${path.title}. Public supplier code: ${supplierCode}. Admin must approve supplier identity, base quote, 20% markup, final quote display mode, and compliance gates before customer quote release.`);
  }
  saveState();
  renderManufacturingPage();
  focusAutoPanel("#manufacturingRfqForm", "#manufacturingCustomerCompanyName");
}

function manufacturingSupplierLeadCard(lead) {
  const normalized = normalizeManufacturingSupplierLead(lead);
  const location = [normalized.city, normalized.state, normalized.country].filter(Boolean).join(", ");
  return `
    <article>
      <div>
        <span class="split-label">${escapeHtml(normalized.outreachStatus)} · ${escapeHtml(normalized.source)}</span>
        <strong>${escapeHtml(normalized.companyName || "Unnamed supplier lead")}</strong>
        <p>${escapeHtml(normalized.supplierCategory)} · ${escapeHtml(location || "Location pending")} · ${escapeHtml(normalized.moq || "MOQ pending")}</p>
        <p class="muted">${escapeHtml(normalized.capabilities || "Capabilities pending")}</p>
      </div>
      <div class="lead-actions">
        ${contactLinks(normalized.phone, normalized.email, manufacturingSupplierLeadOutreachText(normalized))}
        <button class="btn ghost small" type="button" data-action="view-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Detail</button>
        <button class="btn ghost small" type="button" data-action="copy-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Copy Lead</button>
      </div>
    </article>
  `;
}

function manufacturingSupplierLeadDetail(id) {
  const lead = (state.manufacturingSupplierLeads || []).find((item) => item.id === id) || (state.manufacturingSupplierLeads || [])[0];
  if (!lead) return `<p class="muted">Select a supplier lead to see details and conversion actions.</p>`;
  const normalized = normalizeManufacturingSupplierLead(lead);
  const location = [normalized.city, normalized.state, normalized.country].filter(Boolean).join(", ");
  return `
    <span class="split-label">Lead detail · ${escapeHtml(normalized.outreachStatus)}</span>
    <h3>${escapeHtml(normalized.companyName)}</h3>
    <p>${escapeHtml(normalized.supplierCategory)} · ${escapeHtml(location || "Location pending")}</p>
    <div class="service-detail-grid">
      <article><span>Source</span><strong>${escapeHtml(normalized.source)}</strong></article>
      <article><span>Source URL</span><strong>${escapeHtml(normalized.sourceUrl || "Not listed")}</strong></article>
      <article><span>MOQ</span><strong>${escapeHtml(normalized.moq || "Not listed")}</strong></article>
      <article><span>Lead time</span><strong>${escapeHtml(normalized.leadTime || "Not listed")}</strong></article>
      <article><span>Certifications</span><strong>${escapeHtml(normalized.certifications || "Not listed")}</strong></article>
      <article><span>Next follow-up</span><strong>${escapeHtml(normalized.nextFollowUpDate || "Not scheduled")}</strong></article>
    </div>
    <p>${escapeHtml(normalized.notes || normalized.capabilities || "No notes yet.")}</p>
    <div class="lead-actions">
      <button class="btn blue small" type="button" data-action="invite-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Invite to Join Forge</button>
      <button class="btn orange small" type="button" data-action="convert-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Convert Lead to Provider Profile</button>
      <button class="btn ghost small" type="button" data-action="create-manufacturing-opportunity" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Create Manufacturing Opportunity</button>
      <button class="btn ghost small" type="button" data-action="create-manufacturing-follow-up" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Create Follow-Up Task</button>
    </div>
  `;
}

function filteredManufacturingSuppliers(activeFlags = []) {
  const product = document.querySelector("#manufacturingProductFilter")?.value || "All Product Categories";
  const supplierType = document.querySelector("#manufacturingSupplierFilter")?.value || "All Supplier Types";
  const dosage = document.querySelector("#manufacturingDosageFilter")?.value || "All Dosage Forms";
  const location = normalizeLookup(document.querySelector("#manufacturingLocationFilter")?.value || "");
  const moq = document.querySelector("#manufacturingMoqFilter")?.value || "All MOQs";
  const certification = document.querySelector("#manufacturingCertificationFilter")?.value || "All Certifications";
  return (state.manufacturingSuppliers || []).filter((supplier) => {
    const text = normalizeLookup(manufacturingSupplierSearchText(supplier));
    const productOk = product === "All Product Categories" || (supplier.productCategories || []).includes(product) || text.includes(normalizeLookup(product));
    const typeOk = supplierType === "All Supplier Types" || supplier.supplierType === supplierType;
    const dosageOk = dosage === "All Dosage Forms" || (supplier.dosageForms || []).includes(dosage);
    const locationOk = !location || text.includes(location);
    const moqOk = manufacturingMoqMatches(supplier.minimumOrderQuantity, moq);
    const certOk = certification === "All Certifications" || (supplier.certifications || []).includes(certification);
    const flagsOk = activeFlags.every((flag) => manufacturingSupplierSupportsFlag(supplier, flag));
    return productOk && typeOk && dosageOk && locationOk && moqOk && certOk && flagsOk;
  });
}

function manufacturingSupplierSearchText(supplier) {
  return [
    supplier.companyName,
    supplier.contactPerson,
    supplier.location,
    supplier.serviceArea,
    supplier.supplierType,
    supplier.capabilities,
    supplier.minimumOrderQuantity,
    supplier.estimatedLeadTime,
    supplier.startingProjectBudget,
    supplier.currentCapacity,
    supplier.acceptingNewClients,
    supplier.source,
    supplier.outreachStatus,
    supplier.certifications?.join(" "),
    supplier.testingOffered?.join(" "),
    supplier.facilityType,
    supplier.turnaroundTime,
    supplier.packagingOptions,
    supplier.notes,
    supplier.verifiedByForge,
    supplier.status,
    ...(supplier.productCategories || []),
    ...(supplier.dosageForms || [])
  ].join(" ");
}

function manufacturingMoqMatches(value, filter) {
  if (!filter || filter === "All MOQs") return true;
  const text = normalizeLookup(value);
  const number = Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  if (filter === "Low MOQ") return /low|project|sample|pilot|2500|2,500|5000|5,000/.test(text) || (number > 0 && number <= 5000);
  if (filter === "Under 5,000 units") return /under 5|2500|2,500/.test(text) || (number > 0 && number < 5000);
  if (filter === "5,000 - 25,000 units") return /5,000|5000|10,000|10000|25,000|25000/.test(text) || (number >= 5000 && number <= 25000);
  if (filter === "25,000+ units") return /25,000|25000|\+/.test(text) || number >= 25000;
  return true;
}

function manufacturingSupplierSupportsFlag(supplier, flag) {
  const normalized = normalizeLookup(flag);
  const text = normalizeLookup(manufacturingSupplierSearchText(supplier));
  if (normalized.includes("private label")) return Boolean(supplier.privateLabelSupport);
  if (normalized.includes("formulation")) return Boolean(supplier.formulationSupport || supplier.customFormulationSupport);
  if (normalized.includes("packaging")) return Boolean(supplier.packagingOptions) || supplier.supplierType === "Packaging suppliers";
  if (normalized.includes("fulfillment")) return Boolean(supplier.fulfillmentSupport) || text.includes("fulfillment");
  if (normalized.includes("lab testing")) return Boolean(supplier.testingLabSupport) || text.includes("testing") || text.includes("coa");
  if (normalized.includes("gummies")) return text.includes("gummy");
  if (normalized.includes("capsules")) return text.includes("capsule");
  if (normalized.includes("tablets")) return text.includes("tablet");
  if (normalized.includes("powders")) return text.includes("powder");
  if (normalized.includes("liquids")) return text.includes("liquid") || text.includes("beverage");
  if (normalized.includes("protein")) return text.includes("protein");
  if (normalized.includes("preworkout")) return text.includes("preworkout") || text.includes("pre-workout");
  if (normalized.includes("creatine")) return text.includes("creatine");
  if (normalized.includes("collagen")) return text.includes("collagen");
  if (normalized.includes("electrolytes")) return text.includes("electrolyte");
  if (normalized.includes("greens")) return text.includes("greens");
  if (normalized.includes("white label")) return Boolean(supplier.whiteLabelCatalogSupport || supplier.privateLabelSupport);
  if (normalized.includes("low moq")) return manufacturingMoqMatches(supplier.minimumOrderQuantity, "Low MOQ");
  if (normalized.includes("cgmp")) return text.includes("gmp") || text.includes("cgmp");
  if (normalized.includes("fda")) return text.includes("fda");
  if (normalized.includes("organic")) return text.includes("organic");
  if (normalized.includes("nsf")) return text.includes("nsf");
  if (normalized.includes("informed")) return text.includes("informed");
  if (normalized.includes("kosher")) return text.includes("kosher");
  if (normalized.includes("halal")) return text.includes("halal");
  if (normalized.includes("vegan")) return text.includes("vegan");
  if (normalized.includes("ships nationwide")) return supplier.shipsNationwide === "Yes" || /nationwide|unitedstates|u\.s\./.test(text);
  if (normalized.includes("accepting new clients")) return supplier.acceptingNewClients === "Yes" || text.includes("accepting");
  if (normalized.includes("lead source")) return Boolean(supplier.source);
  if (normalized.includes("outreach status")) return Boolean(supplier.outreachStatus);
  if (normalized.includes("cbd") || normalized.includes("hemp")) return text.includes("cbd") || text.includes("hemp");
  if (normalized.includes("pet")) return text.includes("pet");
  if (normalized.includes("organic") || normalized.includes("vegan") || normalized.includes("clean")) return /organic|vegan|clean|non gmo|non-gmo|gluten|sugar/.test(text);
  if (normalized.includes("rush")) return text.includes("rush") || text.includes("3-8 weeks") || text.includes("5-15 business days");
  if (normalized.includes("verified")) return normalizeLookup(supplier.status).includes("verified");
  return text.includes(normalized);
}

function renderPersonalDriverPage() {
  const stats = document.querySelector("#personalDriverStats");
  const requestList = document.querySelector("#personalDriverRequestList");
  const providerList = document.querySelector("#personalDriverProviderList");
  if (!stats || !requestList || !providerList) return;
  const requests = state.personalDriverRequests || [];
  const providers = state.personalDriverProviders || [];
  stats.innerHTML = statCards([
    ["Ride Requests", requests.length],
    ["Driver Leads", providers.length],
    ["Safety Gate", "Manual"],
    ["Emergency Rule", "911 first"]
  ]);
  requestList.innerHTML = requests.slice(0, 6).map((request) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(request.status)} · ${escapeHtml(request.rideType)}</span>
        <strong>${escapeHtml(request.name)} · ${escapeHtml(request.pickupArea || "Pickup area pending")}</strong>
        <p>${escapeHtml(request.dropoffArea || "Drop-off area pending")} · ${escapeHtml(request.rideTimeWindow || "Time pending")} · ${escapeHtml(request.safetyStatus || "Admin review required")}</p>
      </div>
    </article>
  `).join("") || `<article><p class="muted">No personal driver requests yet.</p></article>`;
  providerList.innerHTML = providers.slice(0, 6).map((provider) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(provider.status)} · ${escapeHtml(provider.dispatchDecision || "Admin Review")}</span>
        <strong>${escapeHtml(provider.businessName || provider.ownerName)}</strong>
        <p>${escapeHtml(provider.serviceArea || "Service area pending")} · ${escapeHtml(provider.vehicleType || "Vehicle pending")} · ${escapeHtml(provider.insurance || "Insurance review pending")}</p>
      </div>
    </article>
  `).join("") || `<article><p class="muted">No driver provider leads yet.</p></article>`;
}

function renderPaymentsPage() {
  const stats = document.querySelector("#merchantServicesStats");
  const list = document.querySelector("#merchantServicesLeadList");
  const compliance = document.querySelector("#merchantServicesCompliance");
  if (!stats || !list || !compliance) return;
  const leads = state.merchantServiceLeads || [];
  stats.innerHTML = statCards([
    ["Merchant Leads", leads.length],
    ["Public Processing", "Off"],
    ["Private Review", "Required"],
    ["Partner Claims", "Admin-only"]
  ]);
  compliance.textContent = "Forge collects merchant-service interest only. Forge is not a bank, payment processor, ISO, underwriter, broker-dealer, lender, or escrow provider in this MVP. No card processing, deposits, bank logins, SSNs, full account numbers, or sensitive documents should be submitted here.";
  list.innerHTML = leads.slice(0, 6).map((lead) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.monthlyVolume || "Volume pending")}</span>
        <strong>${escapeHtml(lead.businessName)}</strong>
        <p>${escapeHtml(lead.industry || "Industry pending")} · ${escapeHtml(lead.city || "City pending")} · ${escapeHtml((lead.needs || []).join(", ") || "Needs pending")}</p>
      </div>
    </article>
  `).join("") || `<article><p class="muted">No merchant service leads yet.</p></article>`;
}

function renderLocalProductsPage() {
  const stats = document.querySelector("#localProductsStats");
  const list = document.querySelector("#localProductsVendorList");
  if (!stats || !list) return;
  const vendors = state.localProductVendors || [];
  stats.innerHTML = statCards([
    ["Maker Leads", vendors.length],
    ["Product Photos", "Review"],
    ["Fulfillment", "Manual"],
    ["Marketplace", "Preview"]
  ]);
  list.innerHTML = vendors.slice(0, 8).map((vendor) => `
    <article>
      <div>
        <span class="split-label">${escapeHtml(vendor.status)} · ${escapeHtml(vendor.category || "Category pending")}</span>
        <strong>${escapeHtml(vendor.makerName || vendor.contactName)}</strong>
        <p>${escapeHtml(vendor.city || "City pending")} · ${escapeHtml(vendor.fulfillment || "Fulfillment pending")} · ${escapeHtml(vendor.wholesaleInterest || "Wholesale pending")}</p>
        <p class="muted">${escapeHtml(vendor.products || "Products pending")}</p>
      </div>
    </article>
  `).join("") || `<article><p class="muted">No local product vendors yet.</p></article>`;
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

function renderRequiredTradeCategories() {
  const target = document.querySelector("#requiredTradeCategoryGrid");
  if (!target) return;
  target.innerHTML = requiredTradeCategories.map((category) => {
    const vertical = serviceVerticalForCategory(category.label) || serviceVerticalById(category.id);
    return `
      <article class="service-category-card">
        <span class="split-label">Forge trade</span>
        <h3>${escapeHtml(category.label)}</h3>
        <p>${escapeHtml(category.description)}</p>
        <div class="hero-actions">
          <button class="btn orange small" type="button" data-action="start-service-job" data-service-vertical="${escapeHtml(vertical?.id || category.id)}" data-service-category="${escapeHtml(category.label)}">Post Job</button>
          <button class="btn blue small" type="button" data-action="join-service-provider" data-service-vertical="${escapeHtml(vertical?.id || category.id)}" data-service-category="${escapeHtml(category.label)}">Provider Profile</button>
          <button class="btn ghost small" type="button" data-nav="northstar">Grow My Business</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderPremiumMarketplace() {
  const grid = document.querySelector("#premiumServiceGrid");
  const browse = document.querySelector("#browseAllServiceChips");
  const suggestions = document.querySelector("#homeServiceSuggestions");
  if (grid) {
    grid.innerHTML = premiumServiceCategories.map((category) => `
      <article class="premium-service-card">
        <div class="premium-service-rank">${String(category.rank).padStart(2, "0")}</div>
        <div>
          <span>${escapeHtml(category.ticket)}</span>
          <h3>${escapeHtml(category.title)}</h3>
          <p>${escapeHtml(category.body)}</p>
        </div>
        <div class="premium-service-tags">
          ${category.tags.map((tag) => `<small>${escapeHtml(tag)}</small>`).join("")}
        </div>
        <div class="premium-service-actions">
          <button class="btn orange small" type="button" data-action="start-service-job" data-service-vertical="${escapeHtml(category.verticalId)}" data-service-category="${escapeHtml(category.category)}">Get Quotes</button>
          <button class="btn ghost small" type="button" data-action="join-service-provider" data-service-vertical="${escapeHtml(category.verticalId)}" data-service-category="${escapeHtml(category.category)}">Become a Provider</button>
        </div>
      </article>
    `).join("");
  }
  if (browse) {
    browse.innerHTML = browseAllServiceCategories.map((category) => `
      <button type="button" data-action="choose-service-category" data-service-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
    `).join("");
  }
  if (suggestions) {
    const values = uniqueValues([
      ...premiumServiceCategories.flatMap((category) => [category.title, category.category, ...category.tags]),
      ...browseAllServiceCategories,
      ...serviceVerticalCategoryOptions
    ]);
    suggestions.innerHTML = values.slice(0, 80).map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
  }
}

function handlePremiumServiceSearch() {
  const input = document.querySelector("#homeServiceSearch");
  const query = normalizeLookup(input?.value || "");
  if (!query) {
    navigate("services");
    return;
  }
  const premiumMatch = premiumServiceCategories.find((category) => {
    const text = normalizeLookup([category.title, category.category, category.body, category.ticket, ...category.tags].join(" "));
    return text.includes(query) || query.includes(normalizeLookup(category.title)) || query.includes(normalizeLookup(category.category));
  });
  if (premiumMatch) {
    startServiceJob(premiumMatch.verticalId, premiumMatch.category);
    return;
  }
  const verticalMatch = serviceVerticals.find((vertical) => {
    const text = normalizeLookup([vertical.title, vertical.shortTitle, vertical.publicHeadline, vertical.publicSubheadline, ...vertical.categories, ...vertical.tags].join(" "));
    return text.includes(query) || query.includes(normalizeLookup(vertical.title)) || vertical.categories.some((category) => query.includes(normalizeLookup(category)));
  });
  if (verticalMatch) {
    startServiceJob(verticalMatch.id, verticalMatch.categories[0]);
    return;
  }
  navigate("services");
  showToast("Browse all services for that project.");
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
          <button class="btn ghost small" type="button" data-nav="northstar">Request a Free Marketing Audit</button>
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
      "Some electrical, plumbing, HVAC, roofing, solar, low-voltage, fiber, arborist, concrete, masonry, hauling, grading, and construction jobs may require permits, utility locates, licensed contractors, insurance, traffic control, or code compliance. Customers and providers are responsible for confirming local requirements before work begins."
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
    const tradeList = (worker.tradeCategories || worker.providerCategories || [worker.trade]).filter(Boolean).slice(0, 5);
    const trust = workerTrustProfile(worker);
    return `
      <article class="provider-directory-card">
        <div>
          <span class="split-label">${escapeHtml(vertical?.title || worker.trade || "Forge worker")}</span>
          <h3>${escapeHtml(worker.businessName || worker.name)}</h3>
          <p>${escapeHtml(worker.providerType || worker.trade)} · ${escapeHtml(worker.area || worker.serviceArea || "Service area pending")}</p>
          ${workerTrustLedgerHtml(worker, trust)}
          <div class="service-category-mini">
            ${tradeList.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}
            ${(worker.tags || []).slice(0, 6).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            ${details.minimumPrice || details.minimumTripCharge || details.minimumJobPrice ? `<span>${escapeHtml(details.minimumPrice || details.minimumTripCharge || details.minimumJobPrice)}</span>` : ""}
            ${worker.licenseStatus ? `<span>${escapeHtml(worker.licenseStatus)}</span>` : ""}
            ${worker.insuranceStatus ? `<span>${escapeHtml(worker.insuranceStatus)}</span>` : ""}
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

function workerTrustProfile(worker = {}) {
  const text = normalizeLookup([
    worker.status,
    worker.experience,
    worker.licenseStatus,
    worker.insuranceStatus,
    worker.driverLicenseStatus,
    worker.insurance,
    worker.backgroundCheck,
    worker.referenceStatus,
    worker.toolsReady,
    worker.safetyPpeReady,
    worker.workProofLink,
    worker.portfolioLink,
    worker.bio
  ].join(" "));
  if (worker.trustTier && worker.trustRank && worker.dispatchDecision) {
    return { tier: worker.trustTier, rank: worker.trustRank, decision: worker.dispatchDecision };
  }
  if (text.includes("licensed") || text.includes("insured") || text.includes("5+ years") || text.includes("approved") || text.includes("portfolio")) {
    return { tier: "Gold", rank: "Crew Lead 1", decision: "Crew-Lead Ready" };
  }
  if (text.includes("ready") || text.includes("2-4 years") || text.includes("current") || text.includes("provided")) {
    return { tier: "Silver", rank: "Reliable Pro", decision: "Ready to Invite" };
  }
  if (text.includes("willing") || text.includes("needs review") || text.includes("pending")) {
    return { tier: "Green", rank: "Tool-Ready Helper", decision: "Supervised Helper" };
  }
  return { tier: "Green", rank: "Helper 1", decision: "Admin Review" };
}

function workerProofSignals(worker = {}) {
  const signals = [
    ["Reference", worker.referenceStatus || worker.reviews ? "Present" : "Needed"],
    ["Work Proof", worker.workProofLink || worker.portfolioLink || worker.sampleGalleryLinks ? "Present" : "Needed"],
    ["Tools / Vehicle", worker.toolsReady || worker.vehicleType || worker.equipmentNotes ? "Present" : "Review"],
    ["Safety / PPE", worker.safetyPpeReady || worker.insuranceStatus || worker.insurance ? "Review" : "Needed"],
    ["License / Insurance", worker.licenseStatus || worker.driverLicenseStatus || worker.insuranceStatus || worker.insurance || "Review"],
    ["Paid Trial", worker.paidTrialReadiness || "Optional"]
  ];
  return signals;
}

function workerTrustLedgerHtml(worker, trust = workerTrustProfile(worker)) {
  return `
    <section class="worker-proof-ledger">
      <span class="split-label">Worker Trust / Proof Ledger</span>
      <div class="service-category-mini">
        <span>${escapeHtml(trust.tier)} tier</span>
        <span>${escapeHtml(trust.rank)}</span>
        <span>${escapeHtml(trust.decision)}</span>
      </div>
      <div class="bid-detail-meta">
        ${workerProofSignals(worker).map(([label, value]) => `<span><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</span>`).join("")}
      </div>
    </section>
  `;
}

function jobSafetyGateHtml(job) {
  const vertical = serviceVerticalById(job.serviceVertical) || serviceVerticalForCategory(job.category);
  const items = [
    "No payment, deposit, bank login, SSN, or full account number is collected in this MVP.",
    "Confirm licensing, insurance, scope, price, schedule, and permits before work starts.",
    vertical?.id === "personal_driver" ? "Personal Driver requests require manual review of license, insurance, vehicle, background-check path, privacy, and local legal requirements before matching." : "",
    vertical?.id === "fencing_iron_gates" ? "Fencing and custom iron gate work may require property-line, utility, permit, welding, licensing, and insurance checks." : "",
    isManufacturingJob(job) ? "Manufacturing bids require supplier verification, compliance review, specs, labels, testing, claims, terms, and purchase-order review before production." : ""
  ].filter(Boolean);
  return `
    <section class="service-detail-panel">
      <div>
        <span class="split-label">Safety Gate</span>
        <h2>Before this job moves forward</h2>
        <p>Forge shows the work and proof signals, then keeps high-risk decisions in admin review.</p>
      </div>
      <div class="service-detail-grid">
        ${items.map((item, index) => `<article><span>Gate ${index + 1}</span><strong>${escapeHtml(item)}</strong></article>`).join("")}
      </div>
    </section>
  `;
}


function providerSearchText(worker) {
  return [
    worker.name,
    worker.businessName,
    worker.trade,
    ...(worker.tradeCategories || []),
    ...(worker.providerCategories || []),
    worker.providerType,
    worker.contactMethod,
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

function startServiceJob(verticalId, categoryOverride = "") {
  const vertical = serviceVerticalById(verticalId);
  if (!vertical) return;
  navigate("post");
  const category = categoryOverride || vertical.categories[0];
  setFieldValue("#jobCategory", category);
  if (!fieldValue("#jobTitle")) setFieldValue("#jobTitle", category);
  renderServiceJobFields();
  showToast(`${vertical.shortTitle} job form ready.`);
}

function browseServiceJobs(verticalId) {
  const vertical = serviceVerticalById(verticalId);
  if (!vertical) return;
  navigate("jobs");
  setFieldValue("#listingCategory", vertical.categories[0]);
  setFieldValue("#providerVerticalFilter", vertical.id);
  renderJobs();
  renderProviderDirectory();
  showToast(`${vertical.shortTitle} jobs and providers shown.`);
}

function joinServiceProvider(verticalId, categoryOverride = "") {
  const vertical = serviceVerticalById(verticalId);
  if (!vertical) return;
  navigate("signup");
  setFieldValue("#workerServiceVertical", vertical.id);
  setFieldValue("#workerTrade", categoryOverride || vertical.title);
  setSelectedValues("#workerTradeCategories", [categoryOverride || vertical.categories[0]]);
  renderProviderServiceFields();
  showToast(`${vertical.shortTitle} provider profile ready.`);
}

function browseServiceCategory(category) {
  navigate("jobs");
  setFieldValue("#listingCategory", category);
  renderJobs();
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

function renderForgeAcademy() {
  const optionGrid = document.querySelector("#academyOptionGrid");
  const featureGrid = document.querySelector("#careerPlusFeatureGrid");
  const leadList = document.querySelector("#academyLeadList");
  if (!optionGrid || !featureGrid || !leadList) return;
  optionGrid.innerHTML = academyOptions.map((option) => `
    <article>
      <span>${escapeHtml(option.includes("Hire") || option.includes("Partner") ? "Partner" : "Worker")}</span>
      <strong>${escapeHtml(option)}</strong>
      <p>${escapeHtml(academyOptionCopy(option))}</p>
    </article>
  `).join("");
  featureGrid.innerHTML = forgeCareerPlusFeatures.map((feature) => `<article><strong>${escapeHtml(feature)}</strong><span>Pricing coming soon.</span></article>`).join("");
  leadList.innerHTML = (state.forgeAcademyLeads || []).map((lead) => `
    <article>
      <div>
        <span>${escapeHtml(lead.status)} · ${escapeHtml(lead.desiredTrade || "Career path")}</span>
        <strong>${escapeHtml(lead.fullName)} · ${escapeHtml(lead.city || "Medford")}, ${escapeHtml(lead.state || "OR")}</strong>
        <p>${escapeHtml(lead.notes || lead.currentExperience || "No notes saved yet.")}</p>
      </div>
      <button class="btn ghost small" type="button" data-action="copy-academy-lead" data-academy-id="${escapeHtml(lead.id)}">Copy Lead</button>
    </article>
  `).join("") || `<p class="muted">No Forge Academy leads yet.</p>`;
}

function academyOptionCopy(option) {
  const copy = {
    "Apply to Trade School": "Use Admitly to organize programs, deadlines, costs, documents, and next application steps.",
    "Find an Apprenticeship": "Match interests with employer, union, and on-the-job training pathways.",
    "Build My Resume": "Prepare a blue-collar resume and work-history summary for jobs, schools, and apprenticeships.",
    "Find Blue-Collar Jobs": "Connect career planning back to Forge jobs and local employer opportunities.",
    "Join a Union Pathway": "Track union intake windows, tests, interviews, and required documents.",
    "Get Certified": "Plan CDL, healthcare, safety, construction, automotive, and other certification steps.",
    "Hire Trained Workers": "Help employers find people who are training, certified, or ready to learn.",
    "Partner as a School or Employer": "Invite schools, programs, contractors, and employers into the workforce pipeline."
  };
  return copy[option] || "Save the right career path and next action.";
}

function renderAdmitlyTradePathways() {
  const pathwayGrid = document.querySelector("#admitlyPathwayGrid");
  const aiGrid = document.querySelector("#admitlyAiGrid");
  const dashboardGrid = document.querySelector("#admitlyDashboardGrid");
  if (!pathwayGrid || !aiGrid || !dashboardGrid) return;
  pathwayGrid.innerHTML = admitlyPathwayOptions.map((pathway) => `
    <article>
      <span>Pathway</span>
      <strong>${escapeHtml(pathway)}</strong>
      <p>${escapeHtml(pathway === "College" ? "Admissions, essays, deadlines, scholarships, and school planning." : "Applications, requirements, funding, and career steps organized with Admitly.")}</p>
    </article>
  `).join("");
  aiGrid.innerHTML = ["AI application coach", "AI essay/personal statement helper", "AI resume builder", "AI scholarship finder", "AI deadline planner", "AI trade-school matching"].map((feature) => `
    <article><strong>${escapeHtml(feature)}</strong><p>Placeholder for future Admitly AI workflow.</p></article>
  `).join("");
  dashboardGrid.innerHTML = ["My Pathway", "Applications", "Deadlines", "Resume", "Scholarships / Grants", "Recommended Schools", "Recommended Apprenticeships", "Recommended Forge Jobs"].map((item) => `
    <article><strong>${escapeHtml(item)}</strong><span>Dashboard card</span></article>
  `).join("");
}

function renderAcademyAdmin() {
  const stats = document.querySelector("#academyAdminStats");
  const partners = document.querySelector("#adminAcademyPartners");
  if (!stats || !partners) return;
  const academy = state.forgeAcademyLeads || [];
  const admitly = state.tradePathwayLeads || [];
  const employers = state.employerTrainingPartners || [];
  const schools = state.schoolPartners || [];
  const resumes = state.resumeRequests || [];
  renderTable("#adminForgeAcademyTable", academy.map((lead) => ({
    name: lead.fullName,
    phone: lead.phone,
    city: `${lead.city || ""}, ${lead.state || ""}`,
    trade: lead.desiredTrade,
    training: lead.needsTraining,
    jobNow: lead.needsJobNow,
    resume: lead.needsResume,
    careerPlus: lead.interestedCareerPlus,
    status: lead.status,
    priority: lead.priority
  })));
  renderTable("#adminTradePathwaysTable", admitly.map((lead) => ({
    name: lead.fullName,
    phone: lead.phone,
    city: `${lead.city || ""}, ${lead.state || ""}`,
    pathway: lead.pathway,
    trade: lead.desiredTrade,
    timeline: lead.timeline,
    funding: lead.fundingNeed,
    status: lead.status,
    priority: lead.priority
  })));
  stats.innerHTML = [
    ["Career Leads", academy.length + admitly.length],
    ["Trade School Leads", admitly.filter((lead) => /trade|certification|cdl|healthcare|construction|automotive/i.test(lead.pathway || "")).length],
    ["Apprenticeship Leads", [...academy, ...admitly].filter((lead) => /apprentice|union/i.test(`${lead.pathway || ""} ${lead.notes || ""}`)).length],
    ["Employer Partners", employers.length],
    ["School Partners", schools.length],
    ["Resume Requests", resumes.length],
    ["Placement Opportunities", employers.filter((lead) => /yes|interested|available/i.test(`${lead.willingToTrain || ""} ${lead.apprenticeshipAvailability || ""}`)).length]
  ].map(([label, value]) => `<article><strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(label)}</span></article>`).join("");
  const adminCard = (lead, type, action, idName) => `
    <article>
      <span>${escapeHtml(type)} · ${escapeHtml(lead.status || "New Lead")}</span>
      <strong>${escapeHtml(lead.businessName || lead.schoolName || lead.fullName || lead.contactName || "Academy lead")}</strong>
      <p>${escapeHtml(lead.desiredTrade || lead.tradeCategory || lead.programTypes || lead.pathway || lead.notes || "No notes saved yet.")}</p>
      <button class="btn ghost small" type="button" data-action="${action}" data-${idName}="${escapeHtml(lead.id)}">Copy</button>
    </article>
  `;
  partners.innerHTML = [
    ...employers.map((lead) => adminCard(lead, "Employer Partner", "copy-academy-employer", "employer-id")),
    ...schools.map((lead) => adminCard(lead, "School Partner", "copy-academy-school", "school-id")),
    ...resumes.map((lead) => adminCard(lead, "Resume Request", "copy-resume-request", "resume-id"))
  ].join("") || `<p class="muted">No Academy partner or resume requests yet.</p>`;
  renderAcademyPipelines();
}

function renderAcademyPipelines() {
  const academyTarget = document.querySelector("#adminForgeAcademyPipeline");
  const admitlyTarget = document.querySelector("#adminTradePathwaysPipeline");
  if (academyTarget) {
    academyTarget.innerHTML = (state.forgeAcademyLeads || []).map((lead) => academyPipelineCard(lead, "academy")).join("") || `<article class="lead-card"><p class="muted">No Forge Academy leads yet.</p></article>`;
  }
  if (admitlyTarget) {
    admitlyTarget.innerHTML = (state.tradePathwayLeads || []).map((lead) => academyPipelineCard(lead, "trade-pathway")).join("") || `<article class="lead-card"><p class="muted">No Admitly Trade Pathways leads yet.</p></article>`;
  }
}

function academyPipelineCard(lead, kind) {
  const idAttr = kind === "academy" ? "data-academy-status" : "data-trade-pathway-status";
  const noteAttr = kind === "academy" ? "data-academy-notes" : "data-trade-pathway-notes";
  const copyAction = kind === "academy" ? "copy-academy-lead" : "copy-trade-pathway-lead";
  const dataName = kind === "academy" ? "academy-id" : "trade-pathway-id";
  return `
    <article class="lead-card">
      <div>
        <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.pathway || lead.desiredTrade || "Career pathway")}</span>
        <h3>${escapeHtml(lead.fullName)}</h3>
        <p>${escapeHtml(lead.phone || "No phone")} · ${escapeHtml(lead.email || "No email")} · ${escapeHtml(lead.city || "Medford")}, ${escapeHtml(lead.state || "OR")}</p>
      </div>
      <label>Status
        <select ${idAttr}="${escapeHtml(lead.id)}">
          ${pathwayStatuses.map((status) => `<option ${status === lead.status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
        </select>
      </label>
      <label>Notes
        <textarea ${noteAttr}="${escapeHtml(lead.id)}" rows="2">${escapeHtml(lead.notes || "")}</textarea>
      </label>
      <div class="lead-actions">
        ${contactLinks(lead.phone, lead.email, academyLeadText(lead))}
        <button class="btn ghost small" type="button" data-action="${copyAction}" data-${dataName}="${escapeHtml(lead.id)}">Copy Lead</button>
      </div>
    </article>
  `;
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
      body: "Find Me a Vehicle leads ask for vehicle type, budget, cash/finance/trade-in, down payment, desired year/make/model, mileage limit, use case, must-have features, timeline, and contact information."
    },
    {
      label: "2. Partner path",
      title: "Route to S&A Auto or a qualified seller-of-record path",
      body: "MAG Southern Oregon auction sourcing, Andrew/Scott review, Chevelles Auto proposed lot/dealer routing, recon vendors, transport, inspection, and listing support stay admin-reviewed."
    },
    {
      label: "3. Safety boundary",
      title: "Forge is not the licensed provider",
      body: "Vehicle transactions must be completed through the authorized seller of record and compliant dealer process. Forge must not present itself as the licensed dealer unless legal entity and licensing are confirmed."
    },
    {
      label: "4. Follow-up",
      title: "Pipeline stays status-driven",
      body: "New Lead -> Qualified -> Auction Watch -> Vehicle Found -> Bid Approved -> Purchased -> Transport -> Inspection -> Recon -> Photos/Listings -> Appointment -> Sold -> Delivered -> Follow-Up."
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
    ${jobSafetyGateHtml(job)}
    <div class="detail-meta">
      <div><span>Category</span><strong>${escapeHtml(categoryLabel(job.category))}</strong></div>
      <div><span>Posted</span><strong>${escapeHtml(job.posted)}</strong></div>
      <div><span>Job ID</span><strong>#JOB-${job.id.slice(0, 4).toUpperCase()}</strong></div>
      <div><span>Status</span><strong>${escapeHtml(job.status)}</strong></div>
    </div>
    ${jobFlowTracker(job, bids, chosenBid)}
    ${jobFlowBrief(job, bids, chosenBid)}
    ${jobDetailHandoffPanel(job, bids, chosenBid)}
    <div class="hero-actions">
      <button class="btn ghost" type="button" data-action="message">Message Bidders</button>
      <button class="btn blue" type="button" data-bid-job="${job.id}">Submit a Bid</button>
      <button class="btn ${chosenBid ? "ghost" : "orange"}" type="button" data-action="${chosenBid ? "message" : "choose-best"}" data-job-id="${escapeHtml(job.id)}">${escapeHtml(chosenBid ? "Review Messages" : "Choose Suggested Bid")}</button>
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
      <div class="bid-action-panel">
        <strong>${escapeHtml(bid.amount)}</strong>
        <span>${bid.chosen ? "Message handoff ready" : "Choose to create handoff"}</span>
        <button class="btn ${bid.chosen ? "blue" : "orange"} small" type="button" data-choose-bid="${index}">${bid.chosen ? "Selected" : "Choose + Message"}</button>
        <button class="btn ghost small" type="button" data-message-thread="job-${escapeHtml(job.id)}">Open Thread</button>
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
    ["Manufacturing MOQ", bid.manufacturingMoq],
    ["Unit cost estimate", bid.manufacturingUnitCost],
    ["Setup fee", bid.manufacturingSetupFee],
    ["Sample fee", bid.manufacturingSampleFee],
    ["Packaging cost", bid.manufacturingPackagingCost],
    ["Labeling cost", bid.manufacturingLabelingCost],
    ["Testing cost", bid.manufacturingTestingCost],
    ["Manufacturing lead time", bid.manufacturingLeadTime],
    ["Production timeline", bid.manufacturingProductionTimeline],
    ["Payment terms", bid.manufacturingPaymentTerms],
    ["Certifications included", bid.manufacturingCertifications],
    ["Testing included", bid.manufacturingTestingIncluded],
    ["Formulation included", bid.manufacturingFormulationIncluded],
    ["Packaging included", bid.manufacturingPackagingIncluded],
    ["Fulfillment included", bid.manufacturingFulfillmentIncluded],
    ["NDA required", bid.manufacturingNdaRequired],
    ["Questions for customer", bid.manufacturingQuestions],
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

function jobDetailHandoffPanel(job, bids, chosenBid) {
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const bestBid = chosenBid || bids[0];
  const rows = jobDetailHandoffRows(job, bids, chosenBid, bestBid, hasMessage);
  return `
    <section class="detail-handoff-panel" aria-label="Job detail demo handoff">
      <div class="detail-handoff-heading">
        <div>
          <span class="split-label">Detail handoff</span>
          <h2>${escapeHtml(chosenBid ? "Selected bid is ready for schedule confirmation." : bids.length ? "Choose a bid, then open the message handoff." : "Job is posted and waiting for the first bid.")}</h2>
        </div>
        <button class="btn ghost small" type="button" data-action="copy-detail-handoff" data-job-id="${escapeHtml(job.id)}">Copy Detail Handoff</button>
      </div>
      <div class="detail-handoff-grid">
        ${rows.map((row) => `
          <article class="${row.ready ? "ready" : "waiting"}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </article>
        `).join("")}
      </div>
      <div class="detail-handoff-actions">
        <button class="btn ${chosenBid ? "ghost" : "orange"} small" type="button" data-action="${chosenBid ? "message" : "choose-best"}" data-job-id="${escapeHtml(job.id)}">${escapeHtml(chosenBid ? "Review Messages" : "Choose Suggested")}</button>
        <button class="btn blue small" type="button" data-message-thread="job-${escapeHtml(job.id)}">Open Thread</button>
        <button class="btn ghost small" type="button" data-nav="status">Open Status</button>
      </div>
    </section>
  `;
}

function jobDetailHandoffRows(job, bids, chosenBid, bestBid, hasMessage) {
  return [
    {
      label: "Choose",
      title: chosenBid ? `${chosenBid.worker} selected` : bestBid ? `${bestBid.worker} is first to review` : "No bid yet",
      body: chosenBid
        ? `${chosenBid.amount} is the active bid for ${job.customer || "the customer"}.`
        : bestBid
          ? `${bestBid.amount} can be accepted to create the schedule handoff.`
          : "Share the job with one worker so the bid comparison can start.",
      ready: Boolean(chosenBid || bestBid)
    },
    {
      label: "Message",
      title: hasMessage ? "Thread ready" : "Thread pending",
      body: hasMessage
        ? "The scheduling thread is ready for arrival details and confirmation."
        : "Choosing a bid creates the message trail for the next step.",
      ready: hasMessage
    },
    {
      label: "Status",
      title: "Customer proof path",
      body: "Open Status after detail review so the customer sees the job, selected bid, and next action in one place.",
      ready: Boolean(chosenBid || bids.length)
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
        ${customerStatusProofSummary(job, bids)}
        <div class="lead-actions">
          <button class="btn blue small" type="button" data-detail="${job.id}">View Detail</button>
          <button class="btn ghost small" type="button" data-message-thread="job-${job.id}">Message Forge</button>
        </div>
        ${customerStatusDemoStrip(job, bids)}
        ${customerStatusHandoffPanel(job, bids)}
      </article>
    `;
  }).join("") || statusEmptyState();
}

function customerStatusProofSummary(job, bids) {
  const chosen = bids.find((bid) => bid.chosen);
  const bestBid = chosen || bids[0];
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const rows = statusProofSummaryRows(job, bids, chosen, bestBid, hasMessage);
  return `
    <section class="status-proof-summary" aria-label="Customer proof summary">
      <div class="status-proof-heading">
        <span class="split-label">Customer proof summary</span>
        <strong>${escapeHtml(chosen ? "This job has a selected bid and a message handoff." : bids.length ? "This job is ready for bid review." : "This job is posted and waiting for bids.")}</strong>
      </div>
      <div class="status-proof-grid">
        ${rows.map((row) => `
          <article class="${row.ok ? "ready" : "waiting"}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </article>
        `).join("")}
      </div>
      <div class="status-proof-actions">
        ${statusProofPrimaryAction(job, bids, chosen)}
        <button class="btn ghost small" type="button" data-action="copy-status-proof" data-job-id="${escapeHtml(job.id)}">Copy Status Proof</button>
        <button class="btn ghost small" type="button" data-message-thread="job-${escapeHtml(job.id)}">Open Thread</button>
      </div>
    </section>
  `;
}

function statusProofPrimaryAction(job, bids, chosen) {
  if (chosen) {
    return `<button class="btn blue small" type="button" data-message-thread="job-${escapeHtml(job.id)}">Review Handoff</button>`;
  }
  if (bids.length) {
    return `<button class="btn orange small" type="button" data-action="choose-best" data-job-id="${escapeHtml(job.id)}">Choose Suggested Bid</button>`;
  }
  return `<button class="btn blue small" type="button" data-detail="${escapeHtml(job.id)}">View Job Detail</button>`;
}

function statusProofSummaryRows(job, bids, chosen, bestBid, hasMessage) {
  return [
    {
      label: "Job",
      title: "Posted",
      body: `${job.location || "Local"} · ${job.budget || "Budget saved"}`,
      ok: true
    },
    {
      label: "Bids",
      title: `${bids.length} received`,
      body: bids.length ? "Customer can compare price, timeline, and worker fit." : "Waiting for the first worker response.",
      ok: bids.length > 0
    },
    {
      label: "Selected",
      title: chosen ? chosen.worker : bestBid ? "Ready to choose" : "Pending",
      body: chosen ? `${chosen.amount} · ${chosen.timeline}` : bestBid ? `${bestBid.worker} can be reviewed first.` : "No selected worker yet.",
      ok: Boolean(chosen)
    },
    {
      label: "Message",
      title: hasMessage ? "Thread ready" : "Needs handoff",
      body: hasMessage ? "Schedule and arrival details have a visible place." : "Choose a bid to create the message handoff.",
      ok: hasMessage
    }
  ];
}

function customerStatusDemoStrip(job, bids) {
  const hasBids = bids.length > 0;
  return `
    <section class="status-demo-strip" aria-label="One-minute customer proof">
      <span>One-minute customer proof</span>
      <strong>${hasBids ? "Review bids, then open the message handoff." : "Show the posted job, then invite one worker to bid."}</strong>
      <div class="status-demo-actions">
        <button class="btn blue small" type="button" ${customerLoginAttrs(job, "detail")}>${hasBids ? "Review Bids" : "View Job"}</button>
        <button class="btn ghost small" type="button" ${customerLoginAttrs(job, "messages", { threadId: `job-${job.id}` })}>Open Messages</button>
        <button class="btn ghost small" type="button" data-nav="launch-status">Launch Boundary</button>
      </div>
    </section>
  `;
}

function customerLoginAttrs(job, screen, options = {}) {
  const attrs = [
    `data-login-role="customer"`,
    `data-login-name="${escapeHtml(job.customer || "John Smith")}"`,
    `data-login-screen="${escapeHtml(screen)}"`
  ];
  if (job.id) attrs.push(`data-login-job="${escapeHtml(job.id)}"`);
  if (options.threadId) attrs.push(`data-login-thread="${escapeHtml(options.threadId)}"`);
  return attrs.join(" ");
}

function customerStatusHandoffPanel(job, bids) {
  const chosen = bids.find((bid) => bid.chosen);
  const bestBid = chosen || bids[0];
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const rows = customerStatusHandoffRows(job, bids, chosen, bestBid, hasMessage);
  return `
    <section class="status-handoff-panel" aria-label="Customer status handoff">
      <div class="status-handoff-heading">
        <div>
          <span class="split-label">Customer handoff</span>
          <strong>${escapeHtml(chosen ? "Selected bid is ready for scheduling." : bids.length ? "Bids are ready to compare." : "Waiting for the first bid.")}</strong>
        </div>
        <button class="btn ghost small" type="button" data-action="copy-status-handoff" data-job-id="${escapeHtml(job.id)}">Copy Status Handoff</button>
      </div>
      <div class="status-handoff-grid">
        ${rows.map((row) => `
          <article class="${row.ok ? "ready" : "waiting"}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </article>
        `).join("")}
      </div>
      <div class="status-handoff-actions">
        <button class="btn ${chosen ? "ghost" : "orange"} small" type="button" ${customerLoginAttrs(job, "detail")}>${escapeHtml(chosen ? "Review Detail" : bids.length ? "Choose + Message" : "View Job")}</button>
        <button class="btn blue small" type="button" ${customerLoginAttrs(job, "messages", { threadId: `job-${job.id}` })}>Open Messages</button>
        <button class="btn ghost small" type="button" ${customerLoginAttrs(job, "profile")}>Profile Status</button>
      </div>
    </section>
  `;
}

function customerStatusHandoffRows(job, bids, chosen, bestBid, hasMessage) {
  return [
    {
      label: "Bid",
      title: chosen ? `${chosen.worker} selected` : bestBid ? `${bestBid.worker} ready` : "No bid yet",
      body: chosen
        ? `${chosen.amount} bid is active for ${job.title}.`
        : bestBid
          ? `${bestBid.amount} bid can be reviewed first.`
          : "Invite one worker to bid so this status page has proof.",
      ok: Boolean(chosen || bestBid)
    },
    {
      label: "Message",
      title: hasMessage ? "Thread ready" : "Thread pending",
      body: hasMessage
        ? "Open Messages to confirm schedule, arrival details, and next follow-up."
        : "Choose a bid to create the scheduling handoff thread.",
      ok: hasMessage
    },
    {
      label: "Next",
      title: chosen ? "Confirm schedule" : bids.length ? "Choose + Message" : "Wait for bids",
      body: chosen
        ? "Use this status page as the proof that the job is moving."
        : bids.length
          ? "Open Job Detail, choose the best bid, then return to Messages."
          : "Keep the job posted and invite workers from the demo flow.",
      ok: Boolean(chosen)
    }
  ];
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
  const handoff = document.querySelector("#messageHandoffPanel");
  const sentList = document.querySelector("#sentMessageList");
  if (!list || !select || !body || !summary || !handoff || !sentList) return;

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
  handoff.innerHTML = active ? messageHandoffPanel(active) : "";
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
      ${messageFlowMarkup(thread, related)}
      <div class="hero-actions">
        ${related.jobId ? `<button class="btn ghost small" type="button" data-detail="${escapeHtml(related.jobId)}">Open Job</button>` : ""}
        ${related.screen ? `<button class="btn ghost small" type="button" data-nav="${escapeHtml(related.screen)}">${escapeHtml(related.action)}</button>` : ""}
      </div>
    </article>
  `;
}

function messageHandoffPanel(thread) {
  const related = messageContext(thread);
  const rows = messageHandoffRows(thread, related);
  return `
    <section aria-label="Message handoff closeout">
      <div class="message-handoff-heading">
        <div>
          <span class="split-label">Message handoff closeout</span>
          <h3>${escapeHtml(related.jobId ? "Confirm schedule, then keep the proof path visible." : "Turn this conversation into the next saved action.")}</h3>
        </div>
        <button class="btn ghost small" type="button" data-action="copy-message-handoff" data-thread-id="${escapeHtml(thread.id)}">Copy Handoff</button>
      </div>
      <div class="message-handoff-grid">
        ${rows.map((row) => `
          <article class="${row.status}">
            <span>${escapeHtml(row.label)}</span>
            <strong>${escapeHtml(row.title)}</strong>
            <p>${escapeHtml(row.body)}</p>
          </article>
        `).join("")}
      </div>
      ${messageProofReceipt(thread, related)}
      <div class="message-handoff-actions">
        ${related.jobId ? `<button class="btn blue small" type="button" data-detail="${escapeHtml(related.jobId)}">Open Detail</button>` : ""}
        ${related.jobId ? `<button class="btn ghost small" type="button" data-nav="status">Open Status</button>` : ""}
        ${related.screen ? `<button class="btn ghost small" type="button" data-nav="${escapeHtml(related.screen)}">${escapeHtml(related.action)}</button>` : ""}
      </div>
    </section>
  `;
}

function messageProofReceipt(thread, related) {
  return `
    <div class="message-proof-receipt" aria-label="Message proof receipt">
      <span>Demo close</span>
      <strong>${escapeHtml(messageProofReceiptTitle(thread, related))}</strong>
      <p>${escapeHtml(messageProofReceiptText(thread, related))}</p>
      <div class="message-proof-actions">
        <button class="btn blue small" type="button" data-action="copy-message-proof" data-thread-id="${escapeHtml(thread.id)}">Copy Message Proof</button>
        ${related.jobId ? `<button class="btn ghost small" type="button" data-nav="status">Customer Status</button>` : ""}
        ${related.jobId ? `<button class="btn ghost small" type="button" data-detail="${escapeHtml(related.jobId)}">Job Detail</button>` : ""}
        ${related.screen ? `<button class="btn ghost small" type="button" data-nav="${escapeHtml(related.screen)}">${escapeHtml(related.action)}</button>` : ""}
      </div>
    </div>
  `;
}

function messageProofReceiptTitle(thread, related) {
  if (related.jobId) {
    const bids = state.bids.filter((bid) => bid.jobId === related.jobId);
    const chosen = bids.find((bid) => bid.chosen);
    return chosen ? `Ready to confirm the schedule with ${chosen.worker}.` : "Choose a bid before closing this thread.";
  }
  return `${thread.kind} next step is ready.`;
}

function messageProofReceiptText(thread, related) {
  const lastMessage = state.messages.find((message) => message.threadId === thread.id);
  if (related.jobId) {
    const job = state.jobs.find((item) => item.id === related.jobId);
    const bids = state.bids.filter((bid) => bid.jobId === related.jobId);
    const chosen = bids.find((bid) => bid.chosen);
    if (chosen) {
      return `${job?.customer || "The customer"} can see the selected ${chosen.amount} bid, this thread, and the next schedule step in one place.`;
    }
    return bids.length ? "Use Job Detail to choose the bid, then this thread becomes the schedule handoff." : "Get one worker bid first so the message thread can prove the marketplace flow.";
  }
  return lastMessage ? `Last saved touch: ${lastMessage.sentAt}. Copy this proof before moving the conversation forward.` : "Use the draft and save the touch so the follow-up is visible.";
}

function messageHandoffRows(thread, related) {
  const lastMessage = state.messages.find((message) => message.threadId === thread.id);
  if (related.jobId) {
    const job = state.jobs.find((item) => item.id === related.jobId);
    const bids = state.bids.filter((bid) => bid.jobId === related.jobId);
    const chosen = bids.find((bid) => bid.chosen);
    return [
      {
        label: "Job",
        title: job ? job.status : "Job context missing",
        body: job ? `${job.title} for ${job.customer || "the customer"}.` : thread.subtitle,
        status: job ? "ready" : "waiting"
      },
      {
        label: "Bid",
        title: chosen ? `${chosen.worker} selected` : bids.length ? "Choose a bid" : "No bid yet",
        body: chosen
          ? `${chosen.amount} bid is ready for schedule confirmation.`
          : bids.length
            ? `${bids.length} bid${bids.length === 1 ? "" : "s"} available. Open Detail and choose one before closing the demo.`
            : "Invite a worker bid before this thread can prove the full handoff.",
        status: chosen ? "ready" : "attention"
      },
      {
        label: "Next",
        title: related.next,
        body: lastMessage ? `Last saved touch: ${lastMessage.sentAt}.` : "Copy or save the next message so the follow-up is visible.",
        status: lastMessage ? "ready" : "attention"
      }
    ];
  }
  return [
    {
      label: "Thread",
      title: thread.kind,
      body: thread.subtitle,
      status: "ready"
    },
    {
      label: "Next",
      title: related.next,
      body: "Use the draft, then save a sent message or move the lead forward from the related screen.",
      status: "attention"
    },
    {
      label: "Log",
      title: lastMessage ? "Message saved" : "No saved message",
      body: lastMessage ? `Last saved touch: ${lastMessage.sentAt}.` : "Copy or save the message before closing the follow-up block.",
      status: lastMessage ? "ready" : "waiting"
    }
  ];
}

function messageFlowMarkup(thread, related) {
  if (!thread.id.startsWith("job-")) return "";
  const job = state.jobs.find((item) => item.id === related.jobId);
  const bids = state.bids.filter((bid) => bid.jobId === related.jobId);
  const chosen = bids.find((bid) => bid.chosen);
  const rows = [
    ["Job posted", job ? job.status : "Saved lead", true],
    ["Bid received", bids.length ? `${bids.length} bid${bids.length === 1 ? "" : "s"}` : "Waiting", bids.length > 0],
    ["Handoff ready", chosen ? `${chosen.worker} selected` : bids.length ? "Needs choice" : "Needs bid", Boolean(chosen)]
  ];
  return `
    <div class="message-flow" aria-label="Job to bid to message flow">
      ${rows.map(([label, detail, done]) => `
        <div class="${done ? "done" : ""}">
          <span>${done ? "✓" : "!"}</span>
          <strong>${escapeHtml(label)}</strong>
          <small>${escapeHtml(detail)}</small>
        </div>
      `).join("")}
    </div>
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
  if (thread.id.startsWith("manufacturing-")) {
    return {
      screen: "manufacturing",
      action: "Open Manufacturing",
      detail: thread.subtitle,
      next: "Confirm formula status, compliance flags, supplier fit, quote request, and sample path"
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
    ...(state.manufacturingRfqs || []).map((lead) => ({
      id: `manufacturing-${lead.id}`,
      title: lead.brandName || "Manufacturing RFQ",
      subtitle: `${lead.status} · ${lead.productType}`,
      kind: "Manufacturing RFQ",
      to: lead.contactName,
      draft: manufacturingRfqText(lead)
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
  const personalDriverRequests = state.personalDriverRequests || [];
  const personalDriverProviders = state.personalDriverProviders || [];
  const merchantServiceLeads = state.merchantServiceLeads || [];
  const localProductVendors = state.localProductVendors || [];
  const flexLeads = state.flexLeads || [];
  const manufacturingRfqs = state.manufacturingRfqs || [];
  const manufacturingSuppliers = state.manufacturingSuppliers || [];
  const manufacturingSupplierLeads = state.manufacturingSupplierLeads || [];
  const hotLeads = state.referrals.filter((lead) => lead.priority === "Hot").length + state.jobs.filter((job) => job.status === "New").length;
  const adminCategory = document.querySelector("#adminTradeCategoryFilter")?.value || "All Categories";
  const adminJobs = state.jobs.filter((job) => categoryMatches(job.categoryLabel || job.category, adminCategory));
  const adminWorkers = state.workers.filter((worker) => workerMatchesCategory(worker, adminCategory));

  const workerTitle = document.querySelector("#workerDashboardTitle");
  if (workerTitle) workerTitle.textContent = state.session.role === "worker" ? `${sessionWorkerName}'s Dashboard` : "Dashboard";

  document.querySelector("#workerStats").innerHTML = statCards([
    ["Active Bids", activeBids],
    ["Open Jobs", activeJobs],
    ["Jobs Won", chosenBids.length],
    ["Earnings", chosenBids.length ? "$2,450" : "$0"]
  ]);
  renderProviderNorthStarDashboard();
  document.querySelector("#adminStats").innerHTML = statCards([
    ["New Jobs", newJobs],
    ["Workers", workers],
    ["Creative Requests", creativeRequests.length],
    ["Creative Providers", creativeProviders.length],
    ["NorthStar", northstarLeads.length],
    ["Road Rescue", roadRescueRequests.length],
    ["Driver Requests", personalDriverRequests.length],
    ["Merchant Services", merchantServiceLeads.length],
    ["Local Makers", localProductVendors.length],
    ["Flex Leads", flexLeads.length],
    ["Manufacturing RFQs", manufacturingRfqs.length],
    ["Mfg Suppliers", manufacturingSuppliers.length],
    ["Supplier Leads", manufacturingSupplierLeads.length],
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

  renderTable("#adminLeadsTable", adminJobs.slice(0, 5).map((job) => ({
    customer: job.customer,
    job: job.title,
    category: categoryLabel(job.category),
    location: job.location,
    phone: job.phone,
    time: job.posted,
    status: job.status
  })));

  renderTable("#adminWorkersTable", adminWorkers.map((worker) => ({
    name: worker.name,
    trade: worker.trade,
    categories: (worker.tradeCategories || worker.providerCategories || [worker.trade]).join(", "),
    phone: worker.phone,
    area: worker.area,
    tier: workerTrustProfile(worker).tier,
    rank: workerTrustProfile(worker).rank,
    dispatch: workerTrustProfile(worker).decision,
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

  renderTable("#adminNorthstarTable", northstarLeads.map(normalizeNorthStarLead).map((lead) => ({
    "lead name": lead.name,
    company: lead.businessName,
    "service category": (lead.serviceCategories || []).join(", ") || lead.trade,
    "business size": lead.businessSize,
    "marketing need": lead.marketingNeed,
    score: `${lead.score}/100`,
    budget: lead.budget,
    urgency: lead.urgency,
    status: lead.status,
    "assigned owner": lead.assignedOwner,
    notes: lead.adminNotes || lead.notes || "",
    "created date": lead.created
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

  renderTable("#adminPersonalDriverRequestsTable", personalDriverRequests.map((request) => ({
    customer: request.name,
    ride: request.rideType,
    pickup: request.pickupArea,
    dropoff: request.dropoffArea,
    time: request.rideTimeWindow,
    safe: request.safetyStatus,
    status: request.status
  })));

  renderTable("#adminPersonalDriverProvidersTable", personalDriverProviders.map((provider) => ({
    driver: provider.businessName || provider.ownerName,
    area: provider.serviceArea,
    license: provider.driverLicenseStatus,
    insurance: provider.insurance,
    background: provider.backgroundCheck,
    tier: provider.trustTier || workerTrustProfile(provider).tier,
    dispatch: provider.dispatchDecision || workerTrustProfile(provider).decision,
    status: provider.status
  })));

  renderTable("#adminMerchantServicesTable", merchantServiceLeads.map((lead) => ({
    business: lead.businessName,
    owner: lead.ownerName,
    industry: lead.industry,
    city: lead.city,
    volume: lead.monthlyVolume,
    needs: (lead.needs || []).join(", "),
    status: lead.status
  })));

  renderTable("#adminLocalProductsTable", localProductVendors.map((vendor) => ({
    maker: vendor.makerName,
    contact: vendor.contactName,
    category: vendor.category,
    products: vendor.products,
    city: vendor.city,
    fulfillment: vendor.fulfillment,
    status: vendor.status
  })));

  renderTable("#adminManufacturingRfqsTable", manufacturingRfqs.map((lead) => ({
    brand: lead.brandName,
    product: lead.productType,
    form: lead.dosageForm,
    quantity: lead.targetQuantity,
    certifications: (lead.certificationsRequired || []).join(", "),
    contact: lead.contactName,
    status: lead.status
  })));

  renderTable("#adminManufacturingSuppliersTable", manufacturingSuppliers.map((supplier) => ({
    company: supplier.companyName,
    type: supplier.supplierType,
    location: supplier.location,
    dosage: (supplier.dosageForms || []).join(", "),
    certifications: (supplier.certifications || []).join(", "),
    verified: supplier.verifiedByForge,
    status: supplier.status
  })));

  renderTable("#adminManufacturingSupplierLeadsTable", manufacturingSupplierLeads.map((lead) => ({
    company: lead.companyName,
    category: lead.supplierCategory,
    source: lead.source,
    outreach: lead.outreachStatus,
    contact: lead.contactName || lead.email || lead.phone,
    next: lead.nextFollowUpDate || "",
    value: lead.potentialOpportunityValue || "",
    vertical: lead.relatedForgeVertical
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

function renderProviderNorthStarDashboard() {
  const target = document.querySelector("#providerNorthstarPanel");
  if (!target) return;
  const sessionWorkerName = state.session.role === "worker" ? state.session.name : state.worker.name;
  const worker = state.workers.find((item) => samePerson(item.name, sessionWorkerName) || samePerson(item.email, state.worker.email)) || state.worker;
  const lead = (state.northstarLeads || []).map(normalizeNorthStarLead).find((item) => samePerson(item.email, worker.email));
  const inferred = lead || normalizeNorthStarLead({
    name: worker.ownerName || worker.name,
    businessName: worker.businessName || `${worker.name} / ${worker.trade}`,
    phone: worker.phone,
    email: worker.email,
    trade: worker.trade,
    serviceCategories: worker.providerCategories || worker.tradeCategories || [worker.trade],
    serviceAreas: worker.serviceArea || worker.area || "",
    businessSize: worker.businessSize || "Solo Operator",
    marketingNeed: worker.northStarMarketingNeed || "No, just list me on Forge",
    servicesNeeded: servicesFromNorthStarNeed(worker.northStarMarketingNeed),
    problem: "Provider dashboard growth review placeholder.",
    hasCrm: "Not sure",
    answerEveryCall: "Not sure"
  });
  const scoreRows = northstarMarketingScoreCategories.map(([key, label, max]) => {
    const value = inferred.marketingScore?.[key] ?? 0;
    return `<span>${escapeHtml(label.replace(" score", ""))}: ${escapeHtml(String(value))}/${max}</span>`;
  }).join("");
  target.innerHTML = `
    <div>
      <span class="split-label">${escapeHtml(NORTH_STAR_GROWTH_PAGE_TITLE)}</span>
      <h2>${escapeHtml(NORTH_STAR_POSITIONING_COPY)}</h2>
      <p class="muted">Your business has a Forge Marketing Score. North Star Creative Co. can help improve your visibility, leads, reviews, and follow-up.</p>
    </div>
    <div class="provider-growth-score">
      <strong>${escapeHtml(String(inferred.score))}/100</strong>
      <span>${escapeHtml(inferred.leadClassification)} · ${escapeHtml(inferred.urgency)}</span>
      <div>${scoreRows}</div>
    </div>
    <div class="hero-actions">
      <button class="btn orange small" type="button" data-nav="northstar">Grow My Business</button>
      <button class="btn blue small" type="button" data-nav="northstar">Get More Jobs</button>
      <button class="btn ghost small" type="button" data-nav="northstar">Request a Free Marketing Audit</button>
      <button class="btn ghost small" type="button" data-nav="signup">Upgrade My Forge Profile</button>
      <button class="btn ghost small" type="button" data-nav="northstar">Talk to North Star Creative Co.</button>
      <button class="btn ghost small" type="button" data-nav="northstar">Get Help with My Website, Google, Ads, and Follow-Up</button>
    </div>
  `;
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
                            : confirmation.type === "manufacturing-rfq"
                              ? "Manufacturing RFQ saved"
                              : confirmation.type === "manufacturing-supplier"
                                ? "Supplier profile saved"
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
  document.querySelector("#confirmFollowUp").innerHTML = `
    <div class="confirm-follow-up-heading">
      <div>
        <span class="split-label">First-user next touch</span>
        <strong>${escapeHtml(confirmationNextTouchTitle(confirmation))}</strong>
        <p>${escapeHtml(confirmationNextTouchSummary(confirmation))}</p>
      </div>
      <button class="btn blue small" type="button" data-action="copy-confirmation-next-touch">Copy Next Touch</button>
    </div>
    <div class="confirm-follow-up-grid">
      ${confirmationNextTouchRows(confirmation).map((item) => `
        <article class="${escapeHtml(item.status)}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
          <button class="btn ${item.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(item.action)}>${escapeHtml(item.actionLabel)}</button>
        </article>
      `).join("")}
    </div>
  `;
  document.querySelector("#confirmCloseout").innerHTML = confirmationCloseoutRows(confirmation).map((item) => `
    <article class="${escapeHtml(item.status)}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.body)}</p>
      <button class="btn ${item.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(item.action)}>${escapeHtml(item.actionLabel)}</button>
    </article>
  `).join("");
  configureConfirmButton("#confirmPrimary", confirmation.primary);
  configureConfirmButton("#confirmSecondary", confirmation.secondary);
}

function confirmationCloseoutRows(confirmation) {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  return [
    {
      label: "Follow-up",
      title: "Move this into Admin",
      body: "This confirmation is ready for operator review. Open Admin to review contact status and the next outreach move.",
      status: "ready",
      primary: true,
      actionLabel: "Admin Follow-Up",
      action: { type: "login", role: "admin", name: "Forge Admin", screen: "admin" }
    },
    {
      label: "Backup",
      title: backupCurrent ? "Backup current" : "Backup needed",
      body: backupCurrent
        ? `Current backup covers ${backupCount} leads. Export again after the next outreach block.`
        : `Export JSON so ${leadCount} saved leads are recoverable before wider sharing.`,
      status: backupCurrent ? "ready" : "attention",
      primary: false,
      actionLabel: "Export Backup",
      action: { type: "action", name: "export-backup" }
    },
    {
      label: "Launch",
      title: "Keep the next share controlled",
      body: "Use the live Launch Decision before sending Forge to another person or asking for more signups.",
      status: "ready",
      primary: false,
      actionLabel: "Launch Decision",
      action: { type: "nav", screen: "launch-status" }
    }
  ];
}

function confirmationRequiresManualReview(type) {
  return [
    "auto-service",
    "vehicle",
    "auto-inquiry",
    "personal-driver-request",
    "personal-driver-provider",
    "project",
    "homebuilding",
    "building",
    "flex",
    "manufacturing-rfq",
    "manufacturing-supplier"
  ].includes(type);
}

function confirmationQueueName(confirmation) {
  if (confirmation.type === "job") return "Job leads and Customer Status";
  if (confirmation.type === "worker") return "Worker leads and Profile Status";
  if (confirmation.type === "referral") return "Referral queue and Next 10 Batch";
  if (confirmation.type === "bid") return "Bids, Job Detail, and Messages";
  if (["auto-service", "vehicle", "auto-inquiry", "personal-driver-request", "personal-driver-provider"].includes(confirmation.type)) return "Auto Ops manual review";
  if (confirmation.type === "opportunity") return "Training and Careers queue";
  if (["project", "homebuilding", "building"].includes(confirmation.type)) return "Projects and Building review";
  if (["creative", "creative-provider"].includes(confirmation.type)) return "Creative matching queue";
  if (confirmation.type === "northstar") return "NorthStar business-growth queue";
  if (confirmation.type === "flex") return "Capital Desk manual review";
  if (["manufacturing-rfq", "manufacturing-supplier"].includes(confirmation.type)) return "Manufacturing manual review";
  return "Admin follow-up queue";
}

function confirmationOwnerName(confirmation) {
  if (["auto-service", "vehicle", "auto-inquiry", "personal-driver-request", "personal-driver-provider"].includes(confirmation.type)) return "Forge Auto operator";
  if (["project", "homebuilding", "building"].includes(confirmation.type)) return "Forge Projects operator";
  if (["creative", "creative-provider"].includes(confirmation.type)) return "Creative operator";
  if (confirmation.type === "northstar") return "NorthStar operator";
  if (confirmation.type === "flex") return "Capital Desk operator";
  if (["manufacturing-rfq", "manufacturing-supplier"].includes(confirmation.type)) return "Manufacturing operator";
  return "Forge Admin";
}

function confirmationNextTouchTitle(confirmation) {
  if (confirmationRequiresManualReview(confirmation.type)) return "Manual review before any outside handoff.";
  if (confirmation.type === "worker") return "Follow up when the worker has a matching job.";
  if (confirmation.type === "job") return "Move the job poster toward bids and messages.";
  if (confirmation.type === "referral") return "Contact the referral before the moment cools off.";
  return "Keep the next follow-up visible.";
}

function confirmationNextTouchSummary(confirmation) {
  const leadCount = totalLeadCount();
  const queue = confirmationQueueName(confirmation);
  return `${queue} now has this lead. Current first-user total: ${leadCount}/200.`;
}

function confirmationNextTouchRows(confirmation) {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  const manualReview = confirmationRequiresManualReview(confirmation.type);
  return [
    {
      label: "Owner",
      title: confirmationOwnerName(confirmation),
      body: manualReview
        ? "Review consent, safety, licensing, partner rules, payment boundaries, and required documents before any outside match."
        : "Review the lead, confirm consent, and choose the next outreach move from Admin.",
      status: manualReview ? "hold" : "ready",
      primary: manualReview,
      actionLabel: "Open Admin",
      action: { type: "login", role: "admin", name: "Forge Admin", screen: "admin" }
    },
    {
      label: "Queue",
      title: confirmationQueueName(confirmation),
      body: manualReview
        ? "Keep this guarded until the operator confirms the right path and no sensitive data is needed in the MVP."
        : "This can move through the normal first-user proof path, follow-up queue, and next ask.",
      status: manualReview ? "hold" : "ready",
      primary: false,
      actionLabel: "Launch Status",
      action: { type: "nav", screen: "launch-status" }
    },
    {
      label: "Message",
      title: "Copy the next touch",
      body: "Use the handoff text while the conversation is fresh, then mark the lead contacted or move it forward from Admin.",
      status: "ready",
      primary: true,
      actionLabel: "Copy Message",
      action: { type: "action", name: "copy-confirmation-next-touch" }
    },
    {
      label: "Backup",
      title: backupCurrent ? "Backup current" : "Backup after this block",
      body: backupCurrent
        ? `Last backup covers ${backupCount} leads. Export again after collecting more people.`
        : `Export Backup JSON so ${leadCount} saved leads are recoverable before the link spreads.`,
      status: backupCurrent ? "ready" : "attention",
      primary: !backupCurrent,
      actionLabel: "Export Backup",
      action: { type: "action", name: "export-backup" }
    }
  ];
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
  if (confirmation.type === "flex") return ["Forge saves this as a Forge Capital Desk lead", "Forge reviews whether the business looks like a fit", "Flex handles eligibility, approval, onboarding, activation, and product support"];
  if (confirmation.type === "manufacturing-rfq") return ["Forge saves this manufacturing RFQ", "Admin reviews product, formula, dosage, MOQ, packaging, certification, testing, and compliance flags", "Supplier matching uses original Forge profiles and company-created supplier profiles only"];
  if (confirmation.type === "manufacturing-supplier") return ["Forge saves this supplier profile", "Admin reviews capability, MOQ, dosage forms, certifications, support areas, and contact details", "Verified-by-Forge remains a placeholder until manual review and approval"];
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
  if (confirmation.type === "flex") return "Tell the business owner how the Flex referral channel works.";
  if (confirmation.type === "manufacturing-rfq") return "Tell the buyer how manufacturing supplier matching works.";
  if (confirmation.type === "manufacturing-supplier") return "Tell the supplier how onboarding review works.";
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
    return `Forge saved this Capital Desk lead${detail}. Forge may refer eligible business owners to Flex through an approved partner/referral relationship. Flex handles eligibility, approval, onboarding, activation, and product support. Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker.`;
  }
  if (confirmation.type === "manufacturing-rfq") {
    return `Forge saved this manufacturing RFQ${detail}. The operator can review formula status, dosage form, MOQ, packaging, testing, certifications, CBD/hemp flags, and supplier fit before any quote request. Compliance, legal, label, claims, testing, and insurance review remain the user's responsibility.`;
  }
  if (confirmation.type === "manufacturing-supplier") {
    return `Forge saved this supplier profile${detail}. The supplier can be reviewed for capabilities, certifications, MOQ, dosage forms, support areas, and contact details. Verified-by-Forge is only a placeholder until manual review and approval are complete.`;
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
  delete button.dataset.loginRole;
  delete button.dataset.loginName;
  delete button.dataset.loginScreen;
  delete button.dataset.loginJob;
  delete button.dataset.loginThread;
  if (config.loginRole) {
    button.dataset.loginRole = config.loginRole;
    if (config.loginName) button.dataset.loginName = config.loginName;
    if (config.loginScreen) button.dataset.loginScreen = config.loginScreen;
    if (config.jobId) button.dataset.loginJob = config.jobId;
    if (config.threadId) button.dataset.loginThread = config.threadId;
  } else if (config.jobId) {
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
        <span class="split-label">Public beta readiness gate</span>
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

function renderLaunchDemoPack() {
  const target = document.querySelector("#launchDemoPack");
  if (!target) return;
  target.innerHTML = launchDemoPackRows().map((row) => `
    <article class="${row.status}">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(row.title)}</strong>
      <p>${escapeHtml(row.body)}</p>
      <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
    </article>
  `).join("");
}

function renderLaunchDecision() {
  const target = document.querySelector("#launchDecisionCard");
  if (!target) return;
  target.innerHTML = launchDecisionRows().map((row) => `
    <article class="${escapeHtml(row.status)}">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(row.title)}</strong>
      <p>${escapeHtml(row.body)}</p>
      <div class="launch-decision-actions">
        ${row.actions.map((item, index) => `
          <button class="btn ${index === 0 ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(item.action)}>${escapeHtml(item.label)}</button>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function launchDecisionRows() {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  const publicMode = Boolean(state.settings.publicMode);
  const blockers = publicReadinessBlockers();
  return [
    {
      status: "go",
      label: "Use today",
      title: "Controlled demos and first-user signups",
      body: `Use Forge with people Andrew can personally follow up with. Current first-user list: ${leadCount}/200. ${publicMode ? "Public View is on for handoff demos." : "Turn on Public View before handing Forge to someone else."}`,
      actions: [
        { label: "Demo Paths", action: { type: "nav", screen: "perspective" } },
        { label: "Copy Invites", action: { type: "action", name: "copy-soft-launch-invite-kit" } }
      ]
    },
    {
      status: "hold",
      label: "Hold",
      title: "Broad public launch and payments",
      body: blockers.length
        ? `Do not share broadly yet. Next blocker: ${blockers[0]}`
        : "Do not collect payments in this MVP. Run the final security review before any broad marketing.",
      actions: [
        { label: "Final Gate", action: { type: "action", name: "copy-final-gate" } },
        { label: "Deploy Plan", action: { type: "action", name: "copy-deploy-plan" } }
      ]
    },
    {
      status: "next",
      label: "Run next",
      title: backupCurrent ? "Capture one next action" : "Export backup before outreach",
      body: backupCurrent
        ? `Backup covers ${backupCount} leads. Show the role path, capture one job, worker, referral, auto, career, or business lead, then follow up.`
        : `Export JSON now so ${leadCount} current leads are recoverable before the next outreach block.`,
      actions: [
        backupCurrent
          ? { label: "Admin Follow-Up", action: { type: "login", role: "admin", name: "Forge Admin", screen: "admin" } }
          : { label: "Export Backup", action: { type: "action", name: "export-backup" } },
        { label: "Copy Decision", action: { type: "action", name: "copy-launch-decision" } }
      ]
    }
  ];
}

function renderFirstUserCountBreakdown() {
  const target = document.querySelector("#firstUserCountBreakdown");
  if (!target) return;
  const totalLabel = document.querySelector("#firstUserTotalLabel");
  if (totalLabel) totalLabel.textContent = `${totalLeadCount()}/200`;
  target.innerHTML = firstUserLeadBreakdownRows().map((row) => `
    <article class="${row.count ? "ready" : "attention"}">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(String(row.count))}</strong>
      <h3>${escapeHtml(row.title)}</h3>
      <p>${escapeHtml(row.body)}</p>
    </article>
  `).join("");
}

function firstUserLeadBreakdownRows() {
  const collections = Object.fromEntries(firstUserLeadCollections().map(([label, rows]) => [label, rows.length]));
  const sum = (labels) => labels.reduce((total, label) => total + (collections[label] || 0), 0);
  const activeCollections = firstUserLeadCollections().filter(([, rows]) => rows.length > 0);
  return [
    {
      label: "Marketplace",
      title: "Jobs, workers, referrals",
      count: sum(["Jobs", "Workers", "Referrals"]),
      body: "Core local work demand, provider profiles, and warm introductions."
    },
    {
      label: "Autos",
      title: "Vehicle, buyer, service, driver",
      count: sum(["Vehicle seller/listing leads", "Auto buyer inquiries", "Auto service requests", "Road Rescue requests", "Personal driver requests", "Personal driver providers"]),
      body: "Car sellers, buyers, auto service, Road Rescue, and driver-related intake."
    },
    {
      label: "Business",
      title: "NorthStar, Capital, merchants",
      count: sum(["NorthStar leads", "Capital Desk leads", "Merchant service leads", "Local product vendors"]),
      body: "Business growth, finance referral fit, merchant services, and local maker leads."
    },
    {
      label: "Manufacturing",
      title: "RFQs and suppliers",
      count: sum(["Manufacturing RFQs", "Manufacturing suppliers", "Manufacturing supplier leads"]),
      body: "Manufacturing, nutraceutical, supplier, packaging, lab, and sourcing opportunities."
    },
    {
      label: "Career",
      title: "Schools, unions, AI field work",
      count: sum(["Career leads", "Trade pathway leads", "Forge Academy leads", "Employer training partners", "School partners", "Resume requests"]),
      body: "Admitly, Forge Academy, resume, school, employer, union, apprenticeship, and blue-collar AI paths."
    },
    {
      label: "Projects",
      title: "Builds and major opportunities",
      count: sum(["Homebuilding leads", "Building leads", "Project leads"]),
      body: "Homebuilding, contractor finance, project review, and larger local opportunity intake."
    },
    {
      label: "Active lanes",
      title: "Source arrays with leads",
      count: activeCollections.length,
      body: activeCollections.map(([label, rows]) => `${label}: ${rows.length}`).join(" | ") || "No saved leads yet."
    }
  ];
}

function renderFirst200LaunchQueue() {
  const target = document.querySelector("#first200QueueGrid");
  if (!target) return;
  target.innerHTML = first200LaunchQueueRows().map((row) => `
    <article class="first-200-queue-card ${escapeHtml(row.status)}">
      <div>
        <span>${escapeHtml(row.label)}</span>
        <strong>${escapeHtml(row.metric)}</strong>
        <h3>${escapeHtml(row.title)}</h3>
        <p>${escapeHtml(row.body)}</p>
      </div>
      <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
    </article>
  `).join("");
}

function first200ManualReviewCount() {
  const reviewCollections = [
    state.vehicles,
    state.autoInquiries,
    state.autoRequests,
    state.roadRescueRequests,
    state.personalDriverRequests,
    state.personalDriverProviders,
    state.flexLeads,
    state.manufacturingRfqs,
    state.manufacturingSuppliers,
    state.manufacturingSupplierLeads,
    state.homebuildingLeads,
    state.buildingLeads,
    state.projectLeads
  ];
  return reviewCollections.reduce((total, rows) => total + (Array.isArray(rows) ? rows.length : 0), 0);
}

function first200LaunchQueueRows() {
  const leadCount = totalLeadCount();
  const followUpCount = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  const reviewCount = first200ManualReviewCount();
  const demoReadyCount = Math.max(0, leadCount - Math.min(leadCount, followUpCount + reviewCount));
  const remaining = Math.max(0, 200 - leadCount);
  return [
    {
      label: "Target",
      metric: `${leadCount}/200`,
      title: remaining ? `${remaining} spots left` : "First 200 reached",
      body: "Keep adding real job posters, workers, referrals, auto leads, career leads, and business leads only when follow-up consent is clear.",
      status: leadCount ? "ready" : "attention",
      primary: !leadCount,
      actionLabel: "Capture Lead",
      action: { type: "nav", screen: "capture" }
    },
    {
      label: "Demo ready",
      metric: String(demoReadyCount),
      title: "Safe for a normal proof path",
      body: "Use these conversations for the John/Mike proof path, profile status, message handoff, and one clear next ask.",
      status: demoReadyCount ? "ready" : "attention",
      primary: Boolean(demoReadyCount),
      actionLabel: "Demo Pack",
      action: { type: "action", name: "copy-demo-pack" }
    },
    {
      label: "Follow-up",
      metric: String(followUpCount),
      title: followUpCount ? "Contact before widening" : "No urgent touches",
      body: followUpCount
        ? "Call, text, or email the warmest people before sending the link to a wider group."
        : "No urgent first-user follow-up is waiting in the current queue.",
      status: followUpCount ? "attention" : "ready",
      primary: Boolean(followUpCount),
      actionLabel: "Copy Queue",
      action: { type: "action", name: "copy-follow-up-queue" }
    },
    {
      label: "Manual review",
      metric: String(reviewCount),
      title: reviewCount ? "Keep guarded" : "No guarded leads",
      body: reviewCount
        ? "Autos, drivers, finance, manufacturing, building, and major project leads stay operator-reviewed before any match, referral, or partner handoff."
        : "No sensitive auto, driver, finance, manufacturing, building, or major project leads are waiting in review.",
      status: reviewCount ? "hold" : "ready",
      primary: false,
      actionLabel: "Launch Boundary",
      action: { type: "nav", screen: "launch-status" }
    }
  ];
}

function renderFollowUpAudit() {
  const target = document.querySelector("#followUpAuditGrid");
  if (!target) return;
  target.innerHTML = followUpAuditRows().map((row) => `
    <article class="follow-up-audit-card ${escapeHtml(row.status)}">
      <div>
        <span>${escapeHtml(row.label)}</span>
        <strong>${escapeHtml(row.title)}</strong>
        <p>${escapeHtml(row.body)}</p>
      </div>
      <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
    </article>
  `).join("");
}

function followUpAuditRows() {
  const followUpCount = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  const batchCount = outreachBatchRows().length;
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  const publicMode = Boolean(state.settings.publicMode);
  return [
    {
      label: "Queue",
      title: followUpCount ? `${followUpCount} need touch` : "Queue clear",
      body: followUpCount
        ? "Copy the follow-up queue and contact the highest-priority people before widening the demo group."
        : "No urgent follow-up is waiting in the current queue.",
      status: followUpCount ? "attention" : "ready",
      primary: Boolean(followUpCount),
      actionLabel: "Copy Queue",
      action: { type: "action", name: "copy-follow-up-queue" }
    },
    {
      label: "Next 10",
      title: batchCount ? `${batchCount} in next batch` : "No batch queued",
      body: batchCount
        ? "Run one focused outreach sprint, then mark each person contacted or moved forward."
        : "Capture more leads or switch filters before starting the next outreach sprint.",
      status: batchCount ? "attention" : "ready",
      primary: false,
      actionLabel: "Copy Batch",
      action: { type: "action", name: "copy-outreach-batch" }
    },
    {
      label: "Backup",
      title: backupCurrent ? "Backup current" : "Backup needed",
      body: backupCurrent
        ? `Last backup covers ${backupCount} leads from ${state.settings.lastBackupAt}.`
        : `Export JSON now so ${leadCount} current leads are recoverable before the next outreach block.`,
      status: backupCurrent ? "ready" : "hold",
      primary: !backupCurrent,
      actionLabel: backupCurrent ? "Copy Closeout" : "Export Backup",
      action: backupCurrent ? { type: "action", name: "copy-first-user-closeout" } : { type: "action", name: "export-backup" }
    },
    {
      label: "Public View",
      title: publicMode ? "Visitor-safe mode on" : "Operator view on",
      body: publicMode
        ? "Operator screens are hidden for visitor demos. Keep using controlled links until backend and auth are ready."
        : "Turn Public View on before handing Forge to someone else.",
      status: publicMode ? "ready" : "attention",
      primary: !publicMode,
      actionLabel: publicMode ? "Launch Status" : "Turn On",
      action: publicMode ? { type: "nav", screen: "launch-status" } : { type: "action", name: "toggle-public-mode" }
    }
  ];
}

function launchDemoPackRows() {
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  return [
    {
      label: "1. Customer",
      title: "John proof path",
      body: "Open status, detail, selected bid, messages, and profile proof from the homeowner side.",
      status: "ready",
      primary: true,
      actionLabel: "John Proof",
      action: { type: "login", role: "customer", name: "John Smith", screen: "status" }
    },
    {
      label: "2. Worker",
      title: "Mike proof path",
      body: "Open worker dashboard, available jobs, submit bid, messages, and profile readiness.",
      status: "ready",
      primary: false,
      actionLabel: "Mike Proof",
      action: { type: "login", role: "worker", name: "Mike Jones", screen: "worker" }
    },
    {
      label: "3. Links",
      title: "Copy demo pack",
      body: "Copy the exact shareable links, demo order, close ask, and current MVP counts.",
      status: "ready",
      primary: false,
      actionLabel: "Copy Pack",
      action: { type: "action", name: "copy-demo-pack" }
    },
    {
      label: "4. Guardrail",
      title: backupCurrent ? "Backup current" : "Backup needed",
      body: backupCurrent
        ? `Backup covers ${backupCount} leads. Export again after the next outreach block.`
        : `Export JSON before wider sharing so ${leadCount} current leads are recoverable.`,
      status: backupCurrent ? "ready" : "attention",
      primary: false,
      actionLabel: backupCurrent ? "Copy Closeout" : "Export Backup",
      action: backupCurrent ? { type: "action", name: "copy-first-user-closeout" } : { type: "action", name: "export-backup" }
    }
  ];
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
  const score = blockers.length ? Math.max(70, 95 - (blockers.length * 7)) : 99;
  return {
    score,
    body: "This is a demo-readiness score, not launch approval. Forge can support controlled first-user demos now, but broad public launch waits until every blocker is cleared and the final security review passes.",
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
      title: "Demo admin guard",
      ok: true,
      body: "Operator routes now require the Forge Admin session in the browser demo, but production authentication is still required before broad traffic."
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

function firstUserLeadCollections() {
  return [
    ["Jobs", state.jobs],
    ["Workers", state.workers],
    ["Referrals", state.referrals],
    ["Vehicle seller/listing leads", state.vehicles],
    ["Auto buyer inquiries", state.autoInquiries],
    ["Auto service requests", state.autoRequests],
    ["Road Rescue requests", state.roadRescueRequests],
    ["Personal driver requests", state.personalDriverRequests],
    ["Personal driver providers", state.personalDriverProviders],
    ["Merchant service leads", state.merchantServiceLeads],
    ["Local product vendors", state.localProductVendors],
    ["NorthStar leads", state.northstarLeads],
    ["Capital Desk leads", state.flexLeads],
    ["Manufacturing RFQs", state.manufacturingRfqs],
    ["Manufacturing suppliers", state.manufacturingSuppliers],
    ["Manufacturing supplier leads", state.manufacturingSupplierLeads],
    ["Career leads", state.opportunityLeads],
    ["Trade pathway leads", state.tradePathwayLeads],
    ["Forge Academy leads", state.forgeAcademyLeads],
    ["Employer training partners", state.employerTrainingPartners],
    ["School partners", state.schoolPartners],
    ["Resume requests", state.resumeRequests],
    ["Homebuilding leads", state.homebuildingLeads],
    ["Building leads", state.buildingLeads],
    ["Project leads", state.projectLeads]
  ].map(([label, rows]) => [label, Array.isArray(rows) ? rows : []]);
}

function totalLeadCount() {
  return firstUserLeadCollections().reduce((total, [, rows]) => total + rows.length, 0);
}

function renderFirstUserCloseout() {
  const target = document.querySelector("#firstUserCloseout");
  if (!target) return;
  target.innerHTML = firstUserCloseoutRows().map((row) => `
    <article class="first-user-closeout-card ${row.status}">
      <span>${escapeHtml(row.step)}</span>
      <strong>${escapeHtml(row.title)}</strong>
      <b>${escapeHtml(row.metric)}</b>
      <p>${escapeHtml(row.body)}</p>
      <div class="first-user-closeout-actions">
        ${row.nav
          ? `<button class="btn ghost small" type="button" data-nav="${escapeHtml(row.nav)}">${escapeHtml(row.actionLabel)}</button>`
          : `<button class="btn ghost small" type="button" data-action="${escapeHtml(row.action)}">${escapeHtml(row.actionLabel)}</button>`}
      </div>
    </article>
  `).join("");
}

function firstUserCloseoutRows() {
  const followUpCount = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  const batchCount = outreachBatchRows().length;
  const recap = outreachRecapSummary();
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  const publicMode = Boolean(state.settings.publicMode);
  return [
    {
      step: "1",
      title: "Review follow-up",
      metric: `${followUpCount} need touch`,
      status: followUpCount ? "attention" : "ready",
      body: followUpCount
        ? "Copy the queue and contact the highest-priority people before widening the first-user group."
        : "No urgent follow-up is waiting in the current queue.",
      action: "copy-follow-up-queue",
      actionLabel: "Copy Queue"
    },
    {
      step: "2",
      title: "Run next 10",
      metric: `${batchCount} in batch`,
      status: batchCount ? "attention" : "ready",
      body: batchCount
        ? "Use the focused outreach batch for the next 20-minute session."
        : "Capture more leads or switch filters when the next batch is empty.",
      action: "copy-outreach-batch",
      actionLabel: "Copy Batch"
    },
    {
      step: "3",
      title: "Save recap",
      metric: `${recap.total} actions today`,
      status: recap.total ? "ready" : "attention",
      body: recap.total
        ? "Copy the daily recap so the latest proof is ready for notes, handoff, or a new chat."
        : "No activity has been recorded for today's local session yet.",
      action: "copy-outreach-recap",
      actionLabel: "Copy Recap"
    },
    {
      step: "4",
      title: "Export backup",
      metric: backupCurrent ? "Backup current" : "Backup needed",
      status: backupCurrent ? "ready" : "hold",
      body: backupCurrent
        ? `Last backup covers ${backupCount} leads from ${state.settings.lastBackupAt}.`
        : `Export JSON now so ${leadCount} current leads are recoverable.`,
      action: "export-backup",
      actionLabel: "Export Backup"
    },
    {
      step: "5",
      title: "Control the link",
      metric: publicMode ? "Public View on" : "Operator View on",
      status: publicMode ? "ready" : "attention",
      body: publicMode
        ? "Operator screens are hidden for visitor demos. Confirm Launch Status before broad sharing."
        : "Turn Public View on before handing Forge to someone else.",
      nav: "launch-status",
      actionLabel: "Launch Status"
    }
  ];
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
        <div class="launch-command-actions">
          <button class="btn ghost small" type="button" data-nav="${row.screen}">${escapeHtml(row.action)}</button>
          <button class="btn blue small" type="button" data-action="copy-launch-command-row" data-command-lane="${escapeHtml(row.label)}">Copy Lane</button>
        </div>
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
      total: (state.opportunityLeads || []).length + (state.tradePathwayLeads || []).length + (state.forgeAcademyLeads || []).length,
      needTouch: [...(state.opportunityLeads || []), ...(state.tradePathwayLeads || []), ...(state.forgeAcademyLeads || [])].filter((lead) => ["New", "New Lead", "Packet Started"].includes(lead.status)).length,
      contacted: [...(state.opportunityLeads || []), ...(state.tradePathwayLeads || []), ...(state.forgeAcademyLeads || [])].filter((lead) => lead.status === "Contacted").length,
      moving: [...(state.opportunityLeads || []), ...(state.tradePathwayLeads || []), ...(state.forgeAcademyLeads || [])].filter((lead) => ["Intake Complete", "Application Started", "Submitted", "Interview / Placement", "Accepted", "Hired / Placed", "Packet Started", "Applied"].includes(lead.status)).length,
      next: "Move Forge Academy and Admitly applicants from intake into official school, union, employer, or program channels.",
      screen: "forge-academy",
      action: "Academy"
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
      next: "Confirm consent, review fit, and look for Forge or NorthStar upsell opportunities before any official Flex referral handoff.",
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

function launchCommandKinds(label) {
  const map = {
    "Job posters": ["Jobs"],
    Workers: ["Workers"],
    "Career leads": ["Careers"],
    Homebuilding: ["Homebuilding", "Building"],
    Projects: ["Projects", "Building"],
    NorthStar: ["NorthStar"],
    "Road Rescue": ["Road Rescue"],
    "Capital Desk": ["Capital Desk"],
    Referrals: ["Referrals"]
  };
  return map[label] || [label];
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
    captured: items.filter((item) => /new job lead|new worker lead|northstar lead|road rescue request|manufacturing rfq|manufacturing supplier|homebuilding lead|project lead|career interest|quick lead|referral/.test(text(item))).length
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

function renderOutreachSprintBrief() {
  const target = document.querySelector("#outreachSprintBrief");
  if (!target) return;
  target.innerHTML = outreachSprintBriefRows().map((row) => `
    <article class="${escapeHtml(row.status)}">
      <span>${escapeHtml(row.label)}</span>
      <strong>${escapeHtml(row.title)}</strong>
      <p>${escapeHtml(row.body)}</p>
    </article>
  `).join("");
}

function outreachSprintBriefRows() {
  const rows = outreachBatchRows();
  const hotCount = rows.filter((row) => row.priority === "Hot").length;
  const first = rows[0];
  const remaining = filteredFollowUpRows("All Lead Types", "Needs Follow-Up").length;
  return [
    {
      label: "Batch",
      title: `${rows.length}/10 queued`,
      body: rows.length ? `${remaining} total leads still need touch across the current queue.` : "No urgent follow-ups are queued right now.",
      status: rows.length ? "attention" : "ready"
    },
    {
      label: "Priority",
      title: `${hotCount} hot lead${hotCount === 1 ? "" : "s"}`,
      body: hotCount ? "Start with hot leads before checking warm referrals or slower-moving lanes." : "No hot leads in this batch.",
      status: hotCount ? "attention" : "ready"
    },
    {
      label: "First contact",
      title: first ? first.person : "No one queued",
      body: first ? `${first.kind}: ${first.reason}` : "Capture a lead or switch filters to build the next sprint.",
      status: first ? "attention" : "ready"
    },
    {
      label: "Closeout",
      title: "Complete Sprint after contact",
      body: "Mark each person Contacted or Move Forward, then complete the sprint and export backup if leads changed.",
      status: "ready"
    }
  ];
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
  const adminCategory = document.querySelector("#adminTradeCategoryFilter")?.value || "All Categories";
  const adminJobs = state.jobs.filter((job) => categoryMatches(job.categoryLabel || job.category, adminCategory));
  const adminWorkers = state.workers.filter((worker) => workerMatchesCategory(worker, adminCategory));
  document.querySelector("#adminJobPipeline").innerHTML = adminJobs.slice(0, 6).map((job) => `
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

  document.querySelector("#adminWorkerPipeline").innerHTML = adminWorkers.map((worker) => `
    <article class="lead-card">
      <div>
        <span class="split-label">${escapeHtml(worker.status)}</span>
        <h3>${escapeHtml(worker.name)}</h3>
        <p>${escapeHtml(worker.trade)} · ${escapeHtml((worker.tradeCategories || worker.providerCategories || [worker.trade]).join(", "))} · ${escapeHtml(worker.phone)}</p>
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
    northstarTarget.innerHTML = (state.northstarLeads || []).map(normalizeNorthStarLead).map((lead) => `
      <article class="lead-card">
        <div>
          <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.leadClassification)} · ${escapeHtml(lead.urgency)}</span>
          <h3>${escapeHtml(lead.businessName)}</h3>
          <p>${escapeHtml(lead.name)} · ${escapeHtml(lead.trade)} · ${escapeHtml(lead.phone || "No phone yet")}</p>
          <p class="muted">${escapeHtml(lead.businessSize)} · ${escapeHtml(lead.marketingNeed)} · Score ${escapeHtml(String(lead.score))}/100 · ${escapeHtml(lead.budget)}</p>
        </div>
        <label>Status
          <select data-northstar-status="${escapeHtml(lead.id)}">
            ${northstarStatuses.map((status) => `<option ${status === lead.status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>Assigned owner
          <input data-northstar-owner="${escapeHtml(lead.id)}" value="${escapeHtml(lead.assignedOwner || "")}" placeholder="North Star Intake" />
        </label>
        <label>Admin notes
          <textarea data-northstar-notes="${escapeHtml(lead.id)}" rows="2" placeholder="Scope, package, proposal, CRM, or follow-up notes">${escapeHtml(lead.adminNotes || "")}</textarea>
        </label>
        <div class="score-chip-row">
          ${northstarMarketingScoreCategories.map(([key, label, max]) => `<span>${escapeHtml(label.replace(" score", ""))}: ${escapeHtml(String(lead.marketingScore?.[key] ?? 0))}/${max}</span>`).join("")}
        </div>
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

  const manufacturingRfqsTarget = document.querySelector("#adminManufacturingRfqsPipeline");
  if (manufacturingRfqsTarget) {
    manufacturingRfqsTarget.innerHTML = (state.manufacturingRfqs || []).map((lead) => `
      <article class="lead-card">
        <div>
          <span class="split-label">${escapeHtml(lead.status)} · ${escapeHtml(lead.dosageForm || "Dosage pending")}</span>
          <h3>${escapeHtml(lead.brandName || "Manufacturing RFQ")}</h3>
          <p>${escapeHtml(lead.productType)} · ${escapeHtml(lead.targetQuantity)} · ${escapeHtml(lead.contactName || "Contact pending")}</p>
        </div>
        <label>Status
          <select data-manufacturing-status="${escapeHtml(lead.id)}">
            ${manufacturingLeadStatuses.map((status) => `<option ${status === lead.status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
          </select>
        </label>
        <label>Notes
          <textarea data-manufacturing-notes="${escapeHtml(lead.id)}" rows="2" placeholder="Supplier match, quote, sample, compliance, PO, production, or fulfillment notes">${escapeHtml(lead.notes || "")}</textarea>
        </label>
        <div class="lead-actions">
          ${contactLinks(lead.contactPhone, lead.contactEmail, manufacturingRfqText(lead))}
          <button class="btn ghost small" type="button" data-action="copy-manufacturing-rfq" data-manufacturing-rfq-id="${escapeHtml(lead.id)}">Copy RFQ</button>
          <button class="btn blue small" type="button" data-action="mark-manufacturing-contacted" data-manufacturing-rfq-id="${escapeHtml(lead.id)}">Needs Review</button>
          <button class="btn orange small" type="button" data-action="move-manufacturing-forward" data-manufacturing-rfq-id="${escapeHtml(lead.id)}">Move Forward</button>
        </div>
      </article>
    `).join("") || `<article class="lead-card"><p class="muted">No manufacturing RFQs yet.</p></article>`;
  }

  const manufacturingSuppliersTarget = document.querySelector("#adminManufacturingSuppliersPipeline");
  if (manufacturingSuppliersTarget) {
    manufacturingSuppliersTarget.innerHTML = (state.manufacturingSuppliers || []).map((supplier) => `
      <article class="lead-card">
        <div>
          <span class="split-label">${escapeHtml(supplier.status)} · ${escapeHtml(supplier.verifiedByForge || "Placeholder only")}</span>
          <h3>${escapeHtml(supplier.companyName)}</h3>
          <p>${escapeHtml(supplier.supplierType)} · ${escapeHtml(supplier.location)} · ${escapeHtml(supplier.minimumOrderQuantity)}</p>
        </div>
        <p class="muted">${escapeHtml((supplier.dosageForms || []).join(", ") || "Dosage forms pending")} · ${escapeHtml((supplier.certifications || []).join(", ") || "Certifications pending")}</p>
        <div class="lead-actions">
          ${contactLinks(manufacturingSupplierPhone(supplier), manufacturingSupplierEmail(supplier), manufacturingSupplierText(supplier))}
          <button class="btn ghost small" type="button" data-action="copy-manufacturing-supplier" data-manufacturing-supplier-id="${escapeHtml(supplier.id)}">Copy Supplier</button>
        </div>
      </article>
    `).join("") || `<article class="lead-card"><p class="muted">No manufacturing supplier profiles yet.</p></article>`;
  }

  const manufacturingSupplierLeadsTarget = document.querySelector("#adminManufacturingSupplierLeadsPipeline");
  if (manufacturingSupplierLeadsTarget) {
    manufacturingSupplierLeadsTarget.innerHTML = (state.manufacturingSupplierLeads || []).map((lead) => {
      const normalized = normalizeManufacturingSupplierLead(lead);
      return `
        <article class="lead-card">
          <div>
            <span class="split-label">${escapeHtml(normalized.outreachStatus)} · ${escapeHtml(normalized.source)}</span>
            <h3>${escapeHtml(normalized.companyName)}</h3>
            <p>${escapeHtml(normalized.supplierCategory)} · ${escapeHtml([normalized.city, normalized.state, normalized.country].filter(Boolean).join(", "))}</p>
          </div>
          <label>Outreach status
            <select data-manufacturing-supplier-lead-status="${escapeHtml(normalized.id)}">
              ${manufacturingSupplierLeadStatuses.map((status) => `<option ${status === normalized.outreachStatus ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
            </select>
          </label>
          <label>Follow-up notes
            <textarea data-manufacturing-supplier-lead-notes="${escapeHtml(normalized.id)}" rows="2" placeholder="Follow-up notes, reply, next action">${escapeHtml(normalized.followUpNotes || "")}</textarea>
          </label>
          <div class="lead-actions">
            ${contactLinks(normalized.phone, normalized.email, manufacturingSupplierLeadOutreachText(normalized))}
            <button class="btn ghost small" type="button" data-action="copy-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Copy Lead</button>
            <button class="btn blue small" type="button" data-action="invite-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Invite to Join Forge</button>
            <button class="btn orange small" type="button" data-action="convert-manufacturing-supplier-lead" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Convert Lead to Provider Profile</button>
            <button class="btn ghost small" type="button" data-action="create-manufacturing-opportunity" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Create Manufacturing Opportunity</button>
            <button class="btn ghost small" type="button" data-action="create-manufacturing-follow-up" data-manufacturing-supplier-lead-id="${escapeHtml(normalized.id)}">Create Follow-Up Task</button>
          </div>
        </article>
      `;
    }).join("") || `<article class="lead-card"><p class="muted">No supplier leads yet.</p></article>`;
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
        <th>Date</th>
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
            <br /><small>${lead.interested_in_forge_job_leads ? "Forge job leads · " : ""}${lead.interested_in_north_star_marketing ? "NorthStar · " : ""}${lead.interested_in_payment_processing ? "Payments · " : ""}${lead.interested_in_website_crm_automation ? "Website/CRM" : ""}</small>
          </td>
          <td><strong>${lead.lead_score}</strong></td>
          <td>
            <span class="flex-status ${escapeHtml(lead.status)}">${escapeHtml(flexStatusLabel(lead.status))}</span>
            <select data-flex-status="${escapeHtml(lead.id)}">
              ${flexLeadStatuses.map((status) => `<option value="${escapeHtml(status)}" ${status === lead.status ? "selected" : ""}>${escapeHtml(flexStatusLabel(status))}</option>`).join("")}
            </select>
          </td>
          <td><textarea data-flex-notes="${escapeHtml(lead.id)}" rows="3" placeholder="Outreach, consent, Flex handoff, or upsell notes">${escapeHtml(lead.notes || "")}</textarea></td>
          <td>${escapeHtml(lead.created_at || "Today")}</td>
          <td>
            <div class="lead-actions">
              ${contactLinks(lead.phone, lead.email, flexOutreachText(lead))}
              <button class="btn ghost small" type="button" data-action="copy-flex-outreach" data-flex-id="${escapeHtml(lead.id)}">Copy outreach message</button>
              <button class="btn blue small" type="button" data-action="open-flex-referral" data-flex-lead-id="${escapeHtml(lead.id)}">Open Flex Referral Link</button>
              <button class="btn ghost small" type="button" data-action="mark-flex-status" data-flex-id="${escapeHtml(lead.id)}" data-flex-status-value="contacted">Mark as contacted</button>
              <button class="btn ghost small" type="button" data-action="mark-flex-status" data-flex-id="${escapeHtml(lead.id)}" data-flex-status-value="qualified">Mark as qualified</button>
              <button class="btn ghost small" type="button" data-action="mark-flex-status" data-flex-id="${escapeHtml(lead.id)}" data-flex-status-value="flex_link_sent">Mark as Flex link sent</button>
              <button class="btn ghost small" type="button" data-action="mark-flex-status" data-flex-id="${escapeHtml(lead.id)}" data-flex-status-value="forge_upsell_offered">Mark as Forge upsell offered</button>
              <button class="btn ghost small" type="button" data-action="mark-flex-status" data-flex-id="${escapeHtml(lead.id)}" data-flex-status-value="forge_client_won">Mark as Forge client won</button>
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
  renderAutoAdminViews();
  renderOperationsVault();
}

function renderAutoAdminViews() {
  const sellerTable = document.querySelector("#vehicleSellerLeadsTable");
  const listingReview = document.querySelector("#vehicleListingReview");
  const platinumDesk = document.querySelector("#forgePlatinumDealDesk");
  const auctionDesk = document.querySelector("#auctionDealDesk");
  const revenue = document.querySelector("#autoRevenueSummary");
  if (!sellerTable || !listingReview || !platinumDesk || !auctionDesk || !revenue) return;
  const vehicles = state.vehicles || [];
  const sellerRows = vehicles.map((vehicle) => ({
    Date: vehicle.posted || "Today",
    Customer: vehicle.seller || "Seller",
    Phone: vehicle.phone || "",
    Location: vehicle.location || "",
    Vehicle: `${vehicle.year || ""} ${vehicle.make || ""} ${vehicle.model || ""}`.trim(),
    Mileage: vehicle.mileage || "",
    Asking: vehicle.price || "",
    "Lowest (private)": vehicle.privateLowestPrice || "Not saved",
    Title: vehicle.titleStatus || "Unknown",
    Lien: vehicle.loanLien || "Unknown",
    Intent: vehicle.intent || "Sell My Car on Forge",
    Tags: (vehicle.tags || []).join(", ") || "standard_vehicle",
    Route: vehicle.assignedPartner || autoDealerName(vehicle.dealerId),
    Status: vehicle.reviewStatus || vehicle.status || "New",
    Score: vehicle.leadScore || vehicleLeadScore(vehicle)
  }));
  renderTable("#vehicleSellerLeadsTable", sellerRows);
  listingReview.innerHTML = vehicles.map((vehicle) => `
    <article>
      <span>${escapeHtml(vehicle.reviewStatus || "Needs Review")} · ${escapeHtml(vehicle.intent || "Listing")}</span>
      <strong>${escapeHtml(vehicleTitle(vehicle))}</strong>
      <p>${escapeHtml(vehicle.location || "Unknown location")} · ${escapeHtml(vehicle.price || "No price")} · ${escapeHtml(vehicle.condition || "Condition not saved")}</p>
      <small>Public listing may show asking price, mileage, location, condition, and approved contact route. Keep lowest price, VIN, lien/payoff, and admin notes private.</small>
    </article>
  `).join("") || `<p class="muted">No vehicle seller leads yet.</p>`;
  const platinumLeads = vehicles.filter((vehicle) => (vehicle.tags || []).includes("luxury_or_exotic") || vehicle.assignedPartner === "Forge Platinum Auto Concierge");
  const platinumPartner = autoPartnerById("marc-portland-luxury-auto-partner");
  platinumDesk.innerHTML = `
    <article class="private-partner-note">
      <span>Internal partner guardrail</span>
      <strong>${escapeHtml(platinumPartner?.customerFacingBrand || "Forge Platinum Auto Concierge")}</strong>
      <p>${escapeHtml(platinumPartner?.adminDescription || "Keep private partner information internal.")}</p>
    </article>
    ${platinumLeads.map((vehicle) => `
      <article>
        <span>${escapeHtml(vehicle.location || "Location")} · score ${escapeHtml(vehicle.leadScore || vehicleLeadScore(vehicle))}</span>
        <strong>${escapeHtml(vehicleTitle(vehicle))}</strong>
        <p>${escapeHtml(vehicle.price || "No price")} · ${escapeHtml(vehicle.titleStatus || "Title unknown")} · ${escapeHtml(vehicle.sellTimeline || "Timeline unknown")}</p>
      </article>
    `).join("") || `<p class="muted">No Platinum leads yet.</p>`}
  `;
  const auctionRows = vehicles.filter((vehicle) => (vehicle.tags || []).includes("auction_sourcing") || normalizeLookup(vehicle.intent || "").includes("auction"));
  auctionDesk.innerHTML = auctionRows.map((vehicle) => `
    <article>
      <span>Auction sourcing review</span>
      <strong>${escapeHtml(vehicleTitle(vehicle))}</strong>
      <p>${escapeHtml(vehicle.price || "Budget not saved")} · ${escapeHtml(vehicle.location || "Location not saved")} · transport/title flags: ${(vehicle.tags || []).filter((tag) => tag.includes("transport") || tag.includes("title")).join(", ") || "none"}</p>
    </article>
  `).join("") || `<p class="muted">No auction sourcing leads yet.</p>`;
  revenue.innerHTML = autoMonetizationSettings.map(([label, body]) => `
    <article>
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(String(vehicles.filter((vehicle) => normalizeLookup(vehicle.estimatedForgeRevenue || vehicle.intent || "").includes(normalizeLookup(label).split(" ")[0])).length))}</strong>
      <p>${escapeHtml(body)}</p>
    </article>
  `).join("");
}

function renderOperationsVault() {
  const target = document.querySelector("#operationsVaultGrid");
  if (!target) return;
  const query = normalizeLookup(document.querySelector("#operationsVaultSearch")?.value || "");
  const category = document.querySelector("#operationsVaultCategory")?.value || "All Categories";
  const docs = operationsVaultDocuments.filter((doc) => {
    const categoryOk = category === "All Categories" || doc.category === category;
    const text = normalizeLookup([doc.title, doc.category, doc.type, doc.owner, doc.status, doc.tags.join(" "), doc.body].join(" "));
    return categoryOk && (!query || text.includes(query));
  });
  target.innerHTML = docs.map((doc) => `
    <article class="operations-vault-card">
      <div>
        <span>${escapeHtml(doc.category)} · ${escapeHtml(doc.status)}</span>
        <h3>${escapeHtml(doc.title)}</h3>
        <p>${escapeHtml(doc.type)} · Owner: ${escapeHtml(doc.owner)} · Version ${escapeHtml(doc.version)} · Reviewed ${escapeHtml(doc.reviewed)}</p>
      </div>
      <ul>${doc.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      <p>${escapeHtml(doc.body)}</p>
      ${doc.type.includes("requires attorney review") ? `<small class="legal-warning">Template - requires attorney review before use.</small>` : ""}
      <button class="btn ghost small" type="button" data-action="copy-operations-vault-doc" data-doc-id="${escapeHtml(doc.id)}">Copy Doc</button>
    </article>
  `).join("") || `<p class="muted">No operations documents match that search.</p>`;
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
    ["Manufacturing", (state.manufacturingRfqs || []).length + (state.manufacturingSuppliers || []).length + (state.manufacturingSupplierLeads || []).length, 30, "Brands, suppliers, labs, packaging providers, and compliance partners in the manufacturing pipeline.", "manufacturing", "Manufacturing"],
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
  renderFollowUpCommandStrip();
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

function renderFollowUpCommandStrip() {
  const target = document.querySelector("#followUpCommandStrip");
  if (!target) return;
  target.innerHTML = followUpCommandRows().map((row) => `
    <article class="follow-up-command-card ${escapeHtml(row.status)}">
      <div>
        <span>${escapeHtml(row.label)}</span>
        <strong>${escapeHtml(row.title)}</strong>
        <p>${escapeHtml(row.body)}</p>
      </div>
      <button class="btn ${row.primary ? "blue" : "ghost"} small" type="button" ${profileProofButtonAttrs(row.action)}>${escapeHtml(row.actionLabel)}</button>
    </article>
  `).join("");
}

function followUpCommandRows() {
  const needsTouch = filteredFollowUpRows("All Lead Types", "Needs Follow-Up");
  const batch = outreachBatchRows();
  const first = batch[0];
  const hotCount = batch.filter((row) => row.priority === "Hot").length;
  const leadCount = totalLeadCount();
  const backupCount = Number(state.settings.lastBackupLeadCount || 0);
  const backupCurrent = Boolean(state.settings.lastBackupAt) && backupCount >= leadCount;
  return [
    {
      label: "Queue",
      title: needsTouch.length ? `${needsTouch.length} need touch` : "Queue clear",
      body: first ? `Start with ${first.person}: ${first.reason}.` : "No urgent first-user follow-up is waiting.",
      status: needsTouch.length ? "attention" : "ready",
      primary: Boolean(needsTouch.length),
      actionLabel: "Copy Queue",
      action: { type: "action", name: "copy-follow-up-queue" }
    },
    {
      label: "Sprint",
      title: `${batch.length}/10 ready`,
      body: hotCount ? `${hotCount} hot lead${hotCount === 1 ? "" : "s"} in the next batch. Run a focused outreach block.` : "Copy the batch when a focused outreach block is ready.",
      status: batch.length ? "attention" : "ready",
      primary: false,
      actionLabel: "Copy Batch",
      action: { type: "action", name: "copy-outreach-batch" }
    },
    {
      label: "Closeout",
      title: "Record movement",
      body: "After calls, texts, or emails, mark each lead Contacted or Move Forward, then complete the sprint.",
      status: "ready",
      primary: false,
      actionLabel: "Complete Sprint",
      action: { type: "action", name: "complete-outreach-sprint" }
    },
    {
      label: "Backup",
      title: backupCurrent ? "Backup current" : "Backup after sprint",
      body: backupCurrent
        ? `Backup covers ${backupCount} leads. Export again after new captures or status changes.`
        : `Export Backup JSON so ${leadCount} saved leads are recoverable.`,
      status: backupCurrent ? "ready" : "hold",
      primary: !backupCurrent,
      actionLabel: backupCurrent ? "Copy Closeout" : "Export Backup",
      action: backupCurrent ? { type: "action", name: "copy-first-user-closeout" } : { type: "action", name: "export-backup" }
    }
  ];
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
    ...(state.manufacturingRfqs || []).map((lead) => ({
      id: lead.id,
      kind: "Manufacturing",
      title: `${lead.brandName || "Manufacturing RFQ"} · ${lead.productType}`,
      person: lead.contactName,
      phone: lead.contactPhone,
      email: lead.contactEmail,
      status: lead.status,
      priority: ["Request received", "Sourcing manufacturers", "Awaiting bids", "Production quote", "Formulation"].includes(lead.status) ? "Hot" : "Warm",
      message: manufacturingRfqText(lead),
      action: "mark-manufacturing-contacted",
      forwardAction: "move-manufacturing-forward",
      forwardLabel: lead.status === "Sourcing manufacturers" ? "Matching" : "Move Forward",
      copyAction: "copy-manufacturing-rfq",
      dataName: "manufacturingRfqId"
    })),
    ...(state.manufacturingSupplierLeads || []).map((lead) => ({
      id: lead.id,
      kind: "Manufacturing",
      title: `${lead.companyName || "Supplier lead"} · ${lead.supplierCategory || "Supplier"}`,
      person: lead.companyName,
      phone: lead.phone,
      email: lead.email,
      status: lead.outreachStatus,
      priority: ["Not contacted", "Follow-up needed", "Replied", "Qualified"].includes(lead.outreachStatus) ? "Hot" : "Warm",
      message: manufacturingSupplierLeadOutreachText(lead),
      action: "invite-manufacturing-supplier-lead",
      forwardAction: "create-manufacturing-follow-up",
      forwardLabel: lead.outreachStatus === "Follow-up needed" ? "Follow Up" : "Create Task",
      copyAction: "copy-manufacturing-supplier-lead",
      dataName: "manufacturingSupplierLeadId"
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
      || (statusFilter === "Needs Follow-Up" && ["New", "Pending", "Contacted", "Scoping", "Proposal Needed", "new", "qualified", "New Project Lead", "Needs More Info", "Request received", "Sourcing manufacturers", "Awaiting bids", "Production quote", "Formulation", "Not contacted", "Follow-up needed", "Replied", "Qualified", "NEW", "NEEDS_MORE_INFO", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(row.status))
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
    "Request received": 30,
    "Sourcing manufacturers": 28,
    "Awaiting bids": 26,
    Sampling: 22,
    Formulation: 26,
    "Production quote": 24,
    "Manufacturing selected": 20,
    "In production": 18,
    Testing: 18,
    Packaging: 16,
    "Ready to ship": 12,
    "Not contacted": 30,
    "Follow-up needed": 28,
    Replied: 26,
    Qualified: 24,
    "New RFQ": 30,
    "Needs Review": 28,
    "Supplier Matching": 26,
    "Quote Requested": 22,
    "Quote Received": 24,
    "Sample Requested": 22,
    "Compliance Review": 26,
    "PO Pending": 22,
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
  const kindScore = row.kind === "Projects" ? 16 : row.kind === "Building" ? 16 : row.kind === "Jobs" ? 15 : row.kind === "Homebuilding" ? 14 : row.kind === "Manufacturing" ? 14 : row.kind === "Capital Desk" ? 14 : row.kind === "NorthStar" ? 13 : row.kind === "Workers" ? 12 : row.kind === "Careers" ? 11 : 10;
  const contactScore = (row.phone ? 6 : 0) + (row.email ? 3 : 0);
  return priorityScore + statusScore + kindScore + contactScore;
}

function followUpReason(row) {
  const first = row.priority === "Hot" ? "Hot lead" : `${row.priority} lead`;
  const second = ["New", "Pending", "Scoping", "Proposal Needed", "new", "qualified", "New Project Lead", "Needs More Info", "Request received", "Sourcing manufacturers", "Awaiting bids", "Not contacted", "Follow-up needed", "New RFQ", "Needs Review", "Supplier Matching", "NEW", "NEEDS_MORE_INFO", "MAJOR_PROJECT_REVIEW", "FORGE_QUALIFIED"].includes(row.status) ? "needs first touch" : `${projectStatuses.includes(row.status) ? projectStatusLabel(row.status).toLowerCase() : row.status.toLowerCase()} status`;
  const third = row.kind === "Jobs" ? "creates demand"
    : row.kind === "Projects" ? "may route to Forge Pros, Major Projects Review, or partner review"
    : row.kind === "Homebuilding" ? "opens a build or contractor path"
      : row.kind === "Capital Desk" ? "needs consent-safe Flex referral follow-up"
      : row.kind === "Manufacturing" ? "needs supplier matching, quote, sample, or compliance follow-up"
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
  const activeNorthStar = (state.northstarLeads || []).filter((lead) => !["Won", "Lost", "Nurture Later"].includes(lead.status));
  const activeFlex = (state.flexLeads || []).filter((lead) => !["closed_lost", "commission_paid"].includes(lead.status));
  const activeManufacturing = (state.manufacturingRfqs || []).filter((lead) => !["Completed", "Closed Won", "Closed Lost"].includes(lead.status));
  const activeSupplierLeads = (state.manufacturingSupplierLeads || []).filter((lead) => !["Converted to Provider Profile", "Not a fit", "Partner", "Customer"].includes(lead.outreachStatus));
  const activeHomebuilding = (state.homebuildingLeads || []).filter((lead) => !["Closed"].includes(lead.status));
  const activeProjects = (state.projectLeads || []).filter((lead) => !["WON", "LOST", "NOT_A_FIT"].includes(lead.status));
  const chosenBids = state.bids.filter((bid) => bid.chosen);

  stats.innerHTML = statCards([
    ["Job Leads", state.jobs.length],
    ["Workers", state.workers.length],
    ["NorthStar", (state.northstarLeads || []).length],
    ["Capital Desk", (state.flexLeads || []).length],
    ["Manufacturing", (state.manufacturingRfqs || []).length + (state.manufacturingSupplierLeads || []).length],
    ["Homebuilding", (state.homebuildingLeads || []).length],
    ["Projects", (state.projectLeads || []).length],
    ["Bids", state.bids.length],
    ["Messages", state.messages.length]
  ]);

  actions.innerHTML = [
    ...openJobs.slice(0, 3).map((job) => reportItem(job.customer, `${job.title} needs ${job.status === "New" ? "matching" : "follow-up"}.`)),
    ...activeNorthStar.slice(0, 2).map((lead) => reportItem(lead.businessName, `${lead.name} needs NorthStar ${lead.status.toLowerCase()} follow-up for ${lead.trade}.`)),
    ...activeFlex.slice(0, 2).map((lead) => reportItem(lead.business_name, `${flexStatusLabel(lead.status)} Capital Desk lead with score ${lead.lead_score}.`)),
    ...activeManufacturing.slice(0, 2).map((lead) => reportItem(lead.brandName || "Manufacturing RFQ", `${lead.productType} is in ${lead.status} with ${lead.dosageForm} form and ${lead.targetQuantity} target quantity.`)),
    ...activeSupplierLeads.slice(0, 2).map((lead) => reportItem(lead.companyName || "Supplier lead", `${lead.source} lead is ${lead.outreachStatus}; next follow-up ${lead.nextFollowUpDate || "not scheduled"}.`)),
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
    reportItem("Manufacturing", `${activeManufacturing.length} manufacturing RFQ${activeManufacturing.length === 1 ? "" : "s"} and ${activeSupplierLeads.length} supplier lead${activeSupplierLeads.length === 1 ? "" : "s"} still need sourcing, outreach, quotes, samples, compliance review, or production movement.`),
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
  const validation = forgeTradeCategorySchema.validateJob({
    title,
    category: selectedCategory,
    location: document.querySelector("#jobLocation").value.trim(),
    customer: document.querySelector("#customerName").value.trim()
  });
  if (!validation.ok) {
    showToast(validation.errors[0]);
    return;
  }
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
  const lead = normalizeNorthStarLead({
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
    googleBusinessUrl: fieldValue("#northstarGoogleBusiness"),
    social: fieldValue("#northstarSocial"),
    serviceCategories: fieldSelectedValues("#northstarServiceCategories"),
    serviceAreas: fieldValue("#northstarServiceAreas"),
    yearsInBusiness: fieldValue("#northstarYearsInBusiness"),
    numberOfEmployees: fieldValue("#northstarEmployees"),
    numberOfCrews: fieldValue("#northstarCrews"),
    businessSize: fieldValue("#northstarBusinessSize"),
    marketingNeed: fieldValue("#northstarMarketingNeed"),
    servicesNeeded: fieldSelectedValues("#northstarServices"),
    budget: fieldValue("#northstarBudget"),
    currentAdSpend: fieldValue("#northstarCurrentAdSpend"),
    currentMonthlyLeadVolume: fieldValue("#northstarLeadVolume"),
    problem: fieldValue("#northstarProblem"),
    mainBusinessProblem: fieldValue("#northstarProblem"),
    goal: fieldValue("#northstarGoal"),
    answerEveryCall: fieldValue("#northstarAnswerEveryCall"),
    hasCrm: fieldValue("#northstarHasCrm"),
    hiringHelp: fieldValue("#northstarHiringHelp"),
    residentialCommercial: fieldValue("#northstarResidentialCommercial"),
    needsPhotosVideos: fieldValue("#northstarNeedsMedia"),
    wantsMarketingAudit: fieldValue("#northstarAuditRequested"),
    notes: fieldValue("#northstarNotes"),
    consent: fieldChecked("#northstarConsent"),
    status: "New",
    created: "Today",
    adminNotes: ""
  });
  state.northstarLeads.unshift(lead);
  addActivity(`NorthStar lead saved: ${lead.businessName} needs ${lead.servicesNeeded.join(", ") || "business growth help"}.`);
  state.lastConfirmation = {
    type: "northstar",
    title: "NorthStar request saved.",
    body: "Forge saved this marketing and business-operations request for NorthStar review.",
    details: [
      `${lead.businessName} · ${lead.trade}`,
      `${lead.city} · ${lead.businessSize} · ${lead.budget}`,
      `${lead.leadClassification} · Forge Marketing Score ${lead.score}/100`,
      (lead.servicesNeeded || []).join(", ") || "Services to scope"
    ],
    nextSteps: [
      "Forge routes this as a northstar_marketing_operations lead",
      "Admin reviews the business size, marketing need, score, budget, urgency, and audit request",
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
    interested_in_forge_job_leads: fieldChecked("#flexInterestedForge"),
    interested_in_north_star_marketing: fieldChecked("#flexInterestedNorthstar"),
    interested_in_payment_processing: fieldChecked("#flexInterestedProcessorHelp"),
    interested_in_website_crm_automation: fieldChecked("#flexInterestedWebsiteCrm"),
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
    title: "Thank you.",
    body: "Forge received your Capital Desk request. We will review your business information and may send you the official Flex referral link if it looks like a fit. Forge does not make credit decisions and does not guarantee approval.",
    details: [
      `${lead.business_name} · ${lead.industry}`,
      `${lead.primary_need || "Need pending"} · score ${lead.lead_score}`,
      lead.consent_to_receive_flex_referral ? "Flex referral consent captured" : "Flex referral consent not captured"
    ],
    nextSteps: [
      "Forge stores the basic lead and consent details",
      "Use admin review before any official Flex referral link is opened",
      "Flex handles eligibility, approval, onboarding, activation, and product support"
    ],
    primary: { label: "Open Capital Desk", screen: "capital" },
    secondary: { label: "Talk to Forge Capital Desk", screen: "capital" }
  };
  saveState();
  sendLead("forge-flex", flexLeadWebhookPayload(lead));
  sendConfiguredFlexWebhooks(lead);
  showFlexLeadSuccess(lead);
  showToast("Capital Desk request received.");
  document.querySelector("#flexLeadForm").reset();
  renderCapitalPage();
}

function showFlexLeadSuccess(lead) {
  const form = document.querySelector("#flexLeadForm");
  const success = document.querySelector("#flexLeadSuccess");
  const continueButton = document.querySelector("#flexContinueButton");
  if (!form || !success) return;
  form.classList.add("hidden");
  success.classList.remove("hidden");
  if (continueButton) continueButton.href = flexReferralUrl();
  success.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFlexForm() {
  const form = document.querySelector("#flexLeadForm");
  const success = document.querySelector("#flexLeadSuccess");
  if (!form || !success) return;
  success.classList.add("hidden");
  form.classList.remove("hidden");
  focusAutoPanel("#flexLeadFormSection", "#flexOwnerName");
}

function submitPersonalDriverRequest() {
  const request = {
    id: `personal-driver-request-${Date.now()}`,
    name: fieldValue("#personalDriverName"),
    phone: fieldValue("#personalDriverPhone"),
    email: fieldValue("#personalDriverEmail"),
    rideType: fieldValue("#personalDriverRideType"),
    pickupArea: fieldValue("#personalDriverPickupArea"),
    dropoffArea: fieldValue("#personalDriverDropoffArea"),
    rideDate: fieldValue("#personalDriverDate"),
    rideTimeWindow: fieldValue("#personalDriverTimeWindow"),
    recurring: fieldValue("#personalDriverRecurring"),
    passengers: fieldValue("#personalDriverPassengers"),
    accessibilityNeeds: fieldValue("#personalDriverAccessibility"),
    privacyNotes: fieldValue("#personalDriverPrivacyNotes"),
    safetyStatus: "Admin review required",
    status: "New",
    pipeline: document.querySelector("#autoServiceNeeded").value === "Find Me a Vehicle" ? "New Lead" : "New",
    created: "Today"
  };
  state.personalDriverRequests.unshift(request);
  addActivity(`Personal Driver request saved: ${request.name} needs ${request.rideType} from ${request.pickupArea}.`);
  state.lastConfirmation = {
    type: "personal-driver-request",
    title: "Personal Driver request saved.",
    body: "Forge saved this scheduled ride request for manual safety review before any provider match.",
    details: [
      `${request.name} · ${request.rideType}`,
      `${request.pickupArea} to ${request.dropoffArea}`,
      `${request.rideDate || "Date pending"} · ${request.rideTimeWindow || "Time pending"}`
    ],
    nextSteps: [
      "Emergency or immediate danger means call 911 first",
      "Forge keeps exact pickup/drop-off details private until manual review",
      "Admin verifies license, insurance, vehicle, background-check path, local requirements, and driver fit before matching"
    ],
    primary: { label: "Open Personal Driver", screen: "personal-driver" },
    secondary: { label: "Open Admin", screen: "admin" }
  };
  saveState();
  sendLead("personal-driver-request", request);
  document.querySelector("#personalDriverRequestForm")?.reset();
  showToast("Personal Driver request saved.");
  navigate("confirm");
}

function submitPersonalDriverProvider() {
  const provider = {
    id: `personal-driver-provider-${Date.now()}`,
    businessName: fieldValue("#personalDriverCompanyProfile"),
    ownerName: fieldValue("#personalDriverOwnerName"),
    phone: fieldValue("#personalDriverProviderPhone"),
    email: fieldValue("#personalDriverProviderEmail"),
    serviceArea: fieldValue("#personalDriverProviderArea"),
    vehicleType: fieldValue("#personalDriverVehicleType"),
    driverLicenseStatus: fieldValue("#personalDriverLicenseStatus"),
    insurance: fieldValue("#personalDriverInsurance"),
    backgroundCheck: fieldValue("#personalDriverBackgroundCheck"),
    availability: fieldValue("#personalDriverAvailability"),
    recurringRides: fieldValue("#personalDriverRecurringRides"),
    bio: fieldValue("#personalDriverBio"),
    dispatchDecision: "Admin Review",
    trustTier: "Green",
    trustRank: "Helper 1",
    status: "Needs Review",
    created: "Today"
  };
  state.personalDriverProviders.unshift(provider);
  addActivity(`Personal Driver provider lead saved: ${provider.businessName || provider.ownerName}.`);
  state.lastConfirmation = {
    type: "personal-driver-provider",
    title: "Driver provider lead saved.",
    body: "Forge saved this driver application for license, insurance, vehicle, background, and local legal review.",
    details: [
      `${provider.businessName || provider.ownerName} · ${provider.serviceArea}`,
      `${provider.driverLicenseStatus} license · ${provider.insurance}`,
      `${provider.backgroundCheck} background check`
    ],
    nextSteps: [
      "Admin reviews all driver requirements before any customer match",
      "Driver remains hidden from public dispatch until approved",
      "Forge does not guarantee suitability, legal compliance, insurance coverage, or response time in this MVP"
    ],
    primary: { label: "Open Personal Driver", screen: "personal-driver" },
    secondary: { label: "Open Admin", screen: "admin" }
  };
  saveState();
  sendLead("personal-driver-provider", provider);
  document.querySelector("#personalDriverProviderForm")?.reset();
  showToast("Driver provider lead saved.");
  navigate("confirm");
}

function submitMerchantServicesLead() {
  const lead = {
    id: `merchant-services-${Date.now()}`,
    businessName: fieldValue("#merchantCompanyName"),
    ownerName: fieldValue("#merchantOwnerName"),
    phone: fieldValue("#merchantPhone"),
    email: fieldValue("#merchantEmail"),
    industry: fieldValue("#merchantIndustry"),
    city: fieldValue("#merchantCity"),
    currentProcessor: fieldValue("#merchantCurrentProcessor"),
    monthlyVolume: fieldValue("#merchantMonthlyVolume"),
    needs: fieldSelectedValues("#merchantNeeds"),
    notes: fieldValue("#merchantNotes"),
    adminOnlyPartnerNote: "Potential payment/merchant-service partner language remains private until relationship, licensing, and compliance approvals are documented.",
    status: "New Lead",
    created: "Today"
  };
  state.merchantServiceLeads.unshift(lead);
  addActivity(`Merchant Services lead saved: ${lead.businessName} in ${lead.city}.`);
  state.lastConfirmation = {
    type: "merchant-services",
    title: "Merchant services interest saved.",
    body: "Forge saved this business-owner interest for private admin review. No payment processing is active in the MVP.",
    details: [
      `${lead.businessName} · ${lead.industry}`,
      `${lead.city} · ${lead.monthlyVolume}`,
      (lead.needs || []).join(", ") || "Needs pending"
    ],
    nextSteps: [
      "Forge collects interest only and does not process payments here",
      "Do not submit bank logins, SSNs, full account numbers, card data, or sensitive documents",
      "Any partner handoff requires approved relationship language and compliance review"
    ],
    primary: { label: "Open Forge Payments", screen: "payments" },
    secondary: { label: "Open Admin", screen: "admin" }
  };
  saveState();
  sendLead("forge-merchant-services", lead);
  document.querySelector("#merchantServicesLeadForm")?.reset();
  setFieldValue("#merchantCity", "Medford, OR");
  showToast("Merchant services lead saved.");
  navigate("confirm");
}

function submitLocalProductVendor() {
  const lead = {
    id: `local-product-${Date.now()}`,
    makerName: fieldValue("#localProductMakerName"),
    contactName: fieldValue("#localProductContactName"),
    phone: fieldValue("#localProductPhone"),
    email: fieldValue("#localProductEmail"),
    category: fieldValue("#localProductCategory"),
    products: fieldValue("#localProductProducts"),
    city: fieldValue("#localProductCity"),
    fulfillment: fieldValue("#localProductFulfillment"),
    wholesaleInterest: fieldValue("#localProductWholesale"),
    photos: selectedFileSummary("#localProductPhotos"),
    notes: fieldValue("#localProductNotes"),
    status: "Needs Review",
    created: "Today"
  };
  state.localProductVendors.unshift(lead);
  addActivity(`Local Products maker lead saved: ${lead.makerName} (${lead.category}).`);
  state.lastConfirmation = {
    type: "local-product-vendor",
    title: "Local maker lead saved.",
    body: "Forge saved this local-products vendor lead for product, photo, pricing, fulfillment, tax, and refund-policy review.",
    details: [
      `${lead.makerName} · ${lead.category}`,
      `${lead.city} · ${lead.fulfillment}`,
      `${lead.wholesaleInterest} wholesale interest`
    ],
    nextSteps: [
      "Admin reviews product photos, pricing, fulfillment, tax, returns, and local delivery requirements",
      "Public marketplace listing stays in preview until approved",
      "Custom product and maker sales are separate from job bidding"
    ],
    primary: { label: "Open Local Products", screen: "local-products" },
    secondary: { label: "Open Admin", screen: "admin" }
  };
  saveState();
  sendLead("local-product-vendor", lead);
  document.querySelector("#localProductVendorForm")?.reset();
  setFieldValue("#localProductCity", "Medford, OR");
  showToast("Local maker lead saved.");
  navigate("confirm");
}

function submitManufacturingRfq() {
  const lead = normalizeManufacturingRfq({
    id: `manufacturing-rfq-${Date.now()}`,
    customerCompanyName: fieldValue("#manufacturingCustomerCompanyName"),
    productIdea: fieldValue("#manufacturingProductIdea"),
    productType: fieldValue("#manufacturingProductType"),
    brandName: fieldValue("#manufacturingBrandName"),
    formulaStatus: fieldValue("#manufacturingFormulaStatus"),
    dosageForm: fieldValue("#manufacturingDosageForm"),
    estimatedFirstOrderQuantity: fieldValue("#manufacturingFirstOrderQuantity"),
    desiredMoq: fieldValue("#manufacturingDesiredMoq"),
    targetQuantity: fieldValue("#manufacturingTargetQuantity"),
    desiredPackaging: fieldValue("#manufacturingPackaging"),
    ingredientRequirements: fieldValue("#manufacturingIngredients"),
    ingredientsRequested: fieldValue("#manufacturingIngredientsRequested"),
    ingredientsToAvoid: fieldValue("#manufacturingIngredientsToAvoid"),
    flavorPreferences: fieldValue("#manufacturingFlavorPreferences"),
    sweetenerPreferences: fieldValue("#manufacturingSweetenerPreferences"),
    servingSize: fieldValue("#manufacturingServingSize"),
    servingsPerContainer: fieldValue("#manufacturingServingsPerContainer"),
    targetRetailPrice: fieldValue("#manufacturingTargetRetailPrice"),
    targetCustomer: fieldValue("#manufacturingTargetCustomer"),
    cleanLabelRequirements: fieldSelectedValues("#manufacturingCleanLabelRequirements"),
    cbdHemp: fieldValue("#manufacturingCbdHemp"),
    labelDesignNeeded: fieldValue("#manufacturingLabelDesignNeeded"),
    complianceReviewNeeded: fieldValue("#manufacturingComplianceReviewNeeded"),
    testingNeeds: fieldValue("#manufacturingTestingNeeds"),
    certificationsRequired: fieldSelectedValues("#manufacturingCertificationsRequired"),
    fulfillmentNeeded: fieldValue("#manufacturingFulfillmentNeeded"),
    dropshippingNeeded: fieldValue("#manufacturingDropshippingNeeded"),
    targetLaunchDate: fieldValue("#manufacturingLaunchDate"),
    budgetRange: fieldValue("#manufacturingBudgetRange"),
    locationPreference: fieldValue("#manufacturingLocationPreference"),
    contactName: fieldValue("#manufacturingContactName"),
    contactEmail: fieldValue("#manufacturingContactEmail"),
    contactPhone: fieldValue("#manufacturingContactPhone"),
    specUpload: selectedFileSummary("#manufacturingSpecUpload"),
    labelUpload: selectedFileSummary("#manufacturingReferenceUploads"),
    ingredientDeckUpload: selectedFileSummary("#manufacturingReferenceUploads"),
    productReferenceUpload: selectedFileSummary("#manufacturingReferenceUploads"),
    packagingReferenceUpload: selectedFileSummary("#manufacturingComplianceUploads"),
    coaUpload: selectedFileSummary("#manufacturingComplianceUploads"),
    brandGuideUpload: selectedFileSummary("#manufacturingComplianceUploads"),
    status: "Request received",
    created: "Today",
    notes: fieldValue("#manufacturingRfqNotes") || "RFQ captured in Forge Manufacturing + Nutraceuticals. Do not route CBD/hemp, claims, label, or regulated-product details without compliance review."
  });
  state.manufacturingRfqs.unshift(lead);
  state.jobs.unshift(manufacturingJobFromRfq(lead));
  addActivity(`Manufacturing RFQ saved: ${lead.brandName} (${lead.productType}).`);
  state.lastConfirmation = {
    type: "manufacturing-rfq",
    title: "Manufacturing quote request saved.",
    body: "Forge saved this manufacturing RFQ for supplier matching, quote review, and compliance-aware follow-up.",
    details: [
      `${lead.brandName} · ${lead.productType}`,
      `${lead.dosageForm} · ${lead.targetQuantity}`,
      `${lead.locationPreference} · ${lead.budgetRange}`
    ],
    nextSteps: [
      "Forge reviews the product type, formula status, dosage form, MOQ, packaging, testing, certifications, and compliance flags",
      "Supplier matching starts only with original Forge supplier profiles or companies that create their own profiles",
      "Legal, FDA, FTC, CBD/hemp, food, beverage, cosmetic, pet, label, claims, testing, and insurance review remain the user's responsibility"
    ],
    primary: { label: "Open Manufacturing", screen: "manufacturing" },
    secondary: { label: "Open Admin Leads", screen: "admin" }
  };
  saveState();
  sendLead("manufacturing-rfq", lead);
  showToast("Manufacturing RFQ saved.");
  document.querySelector("#manufacturingRfqForm").reset();
  navigate("confirm");
}

function submitManufacturingSupplierProfile() {
  const supplier = normalizeManufacturingSupplier({
    id: `manufacturing-supplier-${Date.now()}`,
    companyName: fieldValue("#manufacturingSupplierCompany"),
    contactPerson: fieldValue("#manufacturingSupplierContact"),
    location: fieldValue("#manufacturingSupplierLocation"),
    serviceArea: fieldValue("#manufacturingSupplierServiceArea"),
    shipsNationwide: fieldValue("#manufacturingSupplierShipsNationwide"),
    supplierType: fieldValue("#manufacturingSupplierTypeInput"),
    productsManufactured: fieldValue("#manufacturingSupplierProducts"),
    capabilities: fieldValue("#manufacturingSupplierCapabilities"),
    productCategories: inferManufacturingSupplierCategories(fieldValue("#manufacturingSupplierTypeInput"), `${fieldValue("#manufacturingSupplierCapabilities")} ${fieldValue("#manufacturingSupplierProducts")}`),
    dosageForms: fieldSelectedValues("#manufacturingSupplierDosageForms"),
    minimumOrderQuantity: fieldValue("#manufacturingSupplierMoq"),
    certifications: fieldSelectedValues("#manufacturingSupplierCertifications"),
    estimatedLeadTime: fieldValue("#manufacturingSupplierLeadTime"),
    startingProjectBudget: fieldValue("#manufacturingSupplierStartingBudget"),
    testingOffered: fieldSelectedValues("#manufacturingSupplierTestingOffered"),
    facilityType: fieldValue("#manufacturingSupplierFacilityType"),
    turnaroundTime: fieldValue("#manufacturingSupplierTurnaround"),
    packagingOptions: fieldValue("#manufacturingSupplierPackagingOptions"),
    ingredientSourcingSupport: fieldChecked("#manufacturingSupplierIngredientSourcing"),
    formulationSupport: fieldChecked("#manufacturingSupplierFormulation"),
    customFormulationSupport: fieldChecked("#manufacturingSupplierCustomFormulation"),
    whiteLabelCatalogSupport: fieldChecked("#manufacturingSupplierWhiteLabelCatalog"),
    flavoringSupport: fieldChecked("#manufacturingSupplierFlavoring"),
    packagingSupport: fieldChecked("#manufacturingSupplierPackagingSupport"),
    labelDesignSupport: fieldChecked("#manufacturingSupplierLabelDesign"),
    testingLabSupport: fieldChecked("#manufacturingSupplierTesting"),
    complianceSupport: fieldChecked("#manufacturingSupplierCompliance"),
    privateLabelSupport: fieldChecked("#manufacturingSupplierPrivateLabel"),
    fulfillmentSupport: fieldChecked("#manufacturingSupplierFulfillment"),
    sampleDevelopmentSupport: fieldChecked("#manufacturingSupplierSampleDevelopment"),
    ndaAvailable: fieldChecked("#manufacturingSupplierNda"),
    currentCapacity: fieldValue("#manufacturingSupplierCapacity"),
    acceptingNewClients: fieldValue("#manufacturingSupplierAcceptingClients"),
    insurance: fieldValue("#manufacturingSupplierInsurance"),
    website: fieldValue("#manufacturingSupplierWebsite"),
    phoneEmail: fieldValue("#manufacturingSupplierContactInfo"),
    source: fieldValue("#manufacturingSupplierLeadSource"),
    sourceUrl: fieldValue("#manufacturingSupplierSourceUrl"),
    sourceNotes: fieldValue("#manufacturingSupplierSourceNotes"),
    dateAdded: fieldValue("#manufacturingSupplierDateAdded") || "Today",
    outreachStatus: fieldValue("#manufacturingSupplierOutreachStatus"),
    lastContacted: fieldValue("#manufacturingSupplierLastContacted"),
    nextFollowUpDate: fieldValue("#manufacturingSupplierNextFollowUp"),
    relationshipOwner: fieldValue("#manufacturingSupplierRelationshipOwner"),
    logoUpload: selectedFileSummary("#manufacturingSupplierUploads"),
    certificationUpload: selectedFileSummary("#manufacturingSupplierUploads"),
    productPhotoUpload: selectedFileSummary("#manufacturingSupplierUploads"),
    bio: fieldValue("#manufacturingSupplierBio"),
    notes: fieldValue("#manufacturingSupplierNotes"),
    verifiedByForge: "Placeholder only",
    status: "Needs Review"
  });
  state.manufacturingSuppliers.unshift(supplier);
  addActivity(`Manufacturing supplier profile saved: ${supplier.companyName} (${supplier.supplierType}).`);
  state.lastConfirmation = {
    type: "manufacturing-supplier",
    title: "Supplier profile saved.",
    body: "Forge saved this supplier profile for onboarding review. Verified status remains a placeholder until Forge completes manual review.",
    details: [
      `${supplier.companyName} · ${supplier.supplierType}`,
      `${supplier.location} · ${supplier.minimumOrderQuantity}`,
      `${supplier.dosageForms.join(", ") || "Dosage forms pending"}`
    ],
    nextSteps: [
      "Forge reviews capabilities, dosage forms, MOQ, certifications, facility type, and support areas",
      "A public verified claim requires manual review, documentation, and approval",
      "Supplier profiles must be created or approved by the company; Forge does not copy external directory listings"
    ],
    primary: { label: "Open Manufacturing", screen: "manufacturing" },
    secondary: { label: "Open Admin Leads", screen: "admin" }
  };
  saveState();
  sendLead("manufacturing-supplier", supplier);
  showToast("Supplier profile saved.");
  document.querySelector("#manufacturingSupplierForm").reset();
  navigate("confirm");
}

function submitManufacturingSupplierLead() {
  const lead = normalizeManufacturingSupplierLead({
    id: `supplier-lead-${Date.now()}`,
    companyName: fieldValue("#manufacturingLeadCompany"),
    contactName: fieldValue("#manufacturingLeadContact"),
    phone: fieldValue("#manufacturingLeadPhone"),
    email: fieldValue("#manufacturingLeadEmail"),
    website: fieldValue("#manufacturingLeadWebsite"),
    city: fieldValue("#manufacturingLeadCity"),
    state: fieldValue("#manufacturingLeadState"),
    country: fieldValue("#manufacturingLeadCountry"),
    supplierCategory: fieldValue("#manufacturingLeadCategory"),
    capabilities: fieldValue("#manufacturingLeadCapabilities"),
    certifications: fieldValue("#manufacturingLeadCertifications"),
    productTypes: fieldValue("#manufacturingLeadProductTypes"),
    moq: fieldValue("#manufacturingLeadMoq"),
    leadTime: fieldValue("#manufacturingLeadLeadTime"),
    notes: fieldValue("#manufacturingLeadNotes"),
    source: fieldValue("#manufacturingLeadSourceInput"),
    sourceUrl: fieldValue("#manufacturingLeadSourceUrl"),
    dateDiscovered: fieldValue("#manufacturingLeadDateDiscovered") || "Today",
    addedBy: fieldValue("#manufacturingLeadAddedBy") || "Andrew",
    outreachStatus: fieldValue("#manufacturingLeadOutreachStatus"),
    lastContacted: fieldValue("#manufacturingLeadLastContacted"),
    nextFollowUpDate: fieldValue("#manufacturingLeadNextFollowUp"),
    followUpNotes: fieldValue("#manufacturingLeadFollowUpNotes"),
    potentialOpportunityValue: fieldValue("#manufacturingLeadOpportunityValue"),
    relatedForgeVertical: fieldValue("#manufacturingLeadRelatedVertical"),
    tags: fieldValue("#manufacturingLeadTags"),
    created: "Today"
  });
  state.manufacturingSupplierLeads.unshift(lead);
  state.activeManufacturingSupplierLeadId = lead.id;
  addActivity(`Manufacturing supplier lead saved: ${lead.companyName} (${lead.source}).`);
  state.lastConfirmation = {
    type: "manufacturing-supplier-lead",
    title: "Supplier lead saved.",
    body: "Forge saved this supplier lead for lawful outreach, follow-up, and possible supplier profile conversion.",
    details: [
      `${lead.companyName} · ${lead.supplierCategory}`,
      `Source: ${lead.source}`,
      `Outreach: ${lead.outreachStatus}`
    ],
    nextSteps: [
      "Use the outreach template or contact links for manual outreach",
      "Track last contacted and next follow-up date",
      "Convert only company-approved or lawfully obtained information into a provider profile"
    ],
    primary: { label: "Open Manufacturing CRM", screen: "manufacturing" },
    secondary: { label: "Open Admin Leads", screen: "admin" }
  };
  saveState();
  sendLead("manufacturing-supplier-lead", lead);
  showToast("Supplier lead saved.");
  document.querySelector("#manufacturingSupplierLeadForm").reset();
  navigate("confirm");
}

function inferManufacturingSupplierCategories(type, capabilities) {
  const text = normalizeLookup(`${type} ${capabilities}`);
  return manufacturingProductCategories.filter((category) => {
    const normalized = normalizeLookup(category);
    return text.includes(normalized.split("/")[0]) || normalized.split(/\s+/).some((part) => part.length > 4 && text.includes(part));
  }).slice(0, 6);
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
    interested_in_forge_job_leads: selectedTools.includes("I want more customer leads through Forge"),
    interested_in_north_star_marketing: selectedTools.includes("I want marketing through North Star Creative Co."),
    interested_in_payment_processing: selectedTools.includes("I want payment processing help"),
    interested_in_website_crm_automation: selectedTools.includes("I want website / CRM / automation setup"),
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

function maybeCreateProviderNorthStarLead(worker, selectedTools, marketingNeed, businessSize) {
  const wantsNorthStar = marketingNeed && marketingNeed !== "No, just list me on Forge";
  const wantsGrowthTools = selectedTools.some((tool) => [
    "I want more customer leads through Forge",
    "I want marketing through North Star Creative Co.",
    "I want website / CRM / automation setup"
  ].includes(tool));
  if (!wantsNorthStar && !wantsGrowthTools) return null;
  const servicesNeeded = uniqueValues([
    ...servicesFromNorthStarNeed(marketingNeed),
    selectedTools.includes("I want more customer leads through Forge") ? "More leads" : "",
    selectedTools.includes("I want marketing through North Star Creative Co.") ? "Full-scale marketing" : "",
    selectedTools.includes("I want website / CRM / automation setup") ? "CRM" : ""
  ].filter(Boolean));
  const cityState = String(worker.area || worker.serviceArea || "").split(",").map((part) => part.trim());
  const lead = normalizeNorthStarLead({
    id: `northstar-provider-${Date.now()}`,
    source: "provider_onboarding",
    category: NORTHSTAR_CATEGORY_VALUE,
    secondaryCategory: NORTHSTAR_OPERATIONS_CATEGORY_VALUE,
    name: worker.ownerName || worker.name,
    businessName: worker.businessName || `${worker.name} / ${worker.trade}`,
    phone: worker.phone,
    email: worker.email,
    city: worker.area || worker.serviceArea || [cityState[0], cityState[1]].filter(Boolean).join(", "),
    trade: worker.trade,
    serviceCategories: worker.providerCategories || worker.tradeCategories || [worker.trade],
    serviceAreas: worker.serviceArea || worker.area || "",
    yearsInBusiness: worker.experience,
    businessSize,
    marketingNeed: marketingNeed || "Yes, I need more leads",
    servicesNeeded,
    budget: "Not sure yet",
    problem: "Provider signup requested help getting more jobs and improving marketing follow-up.",
    mainBusinessProblem: "Provider signup requested help getting more jobs and improving marketing follow-up.",
    answerEveryCall: "Not sure",
    hasCrm: selectedTools.includes("I want website / CRM / automation setup") ? "No" : "Not sure",
    wantsMarketingAudit: "Yes",
    status: "New",
    created: "Today",
    notes: "Created automatically from Forge provider signup. Keep separate from normal Forge job requests.",
    consent: true
  });
  const existingIndex = (state.northstarLeads || []).findIndex((item) => item.source === "provider_onboarding" && item.email.toLowerCase() === worker.email.toLowerCase());
  if (existingIndex >= 0) {
    state.northstarLeads[existingIndex] = { ...state.northstarLeads[existingIndex], ...lead, id: state.northstarLeads[existingIndex].id, created: state.northstarLeads[existingIndex].created };
  } else {
    state.northstarLeads.unshift(lead);
  }
  addActivity(`Provider growth interest routed to North Star: ${lead.businessName}.`);
  return lead;
}

function servicesFromNorthStarNeed(marketingNeed) {
  const map = {
    "Yes, I need more leads": ["More leads", "Lead generation campaigns", "Review generation"],
    "Yes, I need a website": ["Website", "Landing pages", "Google Business Profile"],
    "Yes, I need Google Business help": ["Google Business Profile", "Review generation", "Local SEO"],
    "Yes, I need ads": ["Ads", "Google Ads", "Lead generation campaigns"],
    "Yes, I need social media": ["Social media", "Photography/video", "Content calendar"],
    "Yes, I need photos/videos": ["Photography/video", "Before/after project showcases"],
    "Yes, I need a CRM and follow-up system": ["CRM", "Email/SMS follow-up", "Missed-call text-back"],
    "Yes, I need full-scale marketing": ["Full-scale marketing", "Website", "Ads", "CRM"],
    "Yes, I am a larger company and want a growth consultation": ["Marketing audit", "Full-scale marketing", "Growth consultation"]
  };
  return map[marketingNeed] || [];
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

installFormGuards();

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  installFormGuards(form);
  const guardMessage = validateGuardedForm(form);
  if (!guardMessage) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  notifyGuard(guardMessage);
}, true);

document.addEventListener("click", (event) => {
  const login = event.target.closest("[data-login-role]");
  if (login) {
    if (login.dataset.loginJob) state.activeJobId = login.dataset.loginJob;
    if (login.dataset.loginThread) state.activeMessageThreadId = login.dataset.loginThread;
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
  if (action?.dataset.action === "choose-best") chooseSuggestedBidForJob(action.dataset.jobId || state.activeJobId);
  if (action?.dataset.action === "export-jobs") exportCsv("forge-job-leads.csv", state.jobs);
  if (action?.dataset.action === "export-workers") exportCsv("forge-worker-leads.csv", state.workers);
  if (action?.dataset.action === "export-creative-requests") exportCsv("forge-creative-requests.csv", state.jobs.filter(isCreativeJob));
  if (action?.dataset.action === "export-creative-providers") exportCsv("forge-creative-providers.csv", state.workers.filter(isCreativeProvider));
  if (action?.dataset.action === "export-northstar") exportCsv("forge-northstar-leads.csv", state.northstarLeads || []);
  if (action?.dataset.action === "export-road-rescue") exportCsv("forge-road-rescue-leads.csv", state.roadRescueRequests || []);
  if (action?.dataset.action === "export-personal-driver-requests") exportCsv("forge-personal-driver-requests.csv", state.personalDriverRequests || []);
  if (action?.dataset.action === "export-personal-driver-providers") exportCsv("forge-personal-driver-providers.csv", state.personalDriverProviders || []);
  if (action?.dataset.action === "export-merchant-services") exportCsv("forge-merchant-services.csv", state.merchantServiceLeads || []);
  if (action?.dataset.action === "export-local-products") exportCsv("forge-local-products-makers.csv", state.localProductVendors || []);
  if (action?.dataset.action === "export-flex-leads") exportCsv("forge-flex-leads.csv", state.flexLeads || []);
  if (action?.dataset.action === "export-manufacturing-rfqs") exportCsv("forge-manufacturing-rfqs.csv", state.manufacturingRfqs || []);
  if (action?.dataset.action === "export-manufacturing-suppliers") exportCsv("forge-manufacturing-suppliers.csv", state.manufacturingSuppliers || []);
  if (action?.dataset.action === "export-manufacturing-supplier-leads") exportCsv("forge-manufacturing-supplier-leads.csv", state.manufacturingSupplierLeads || []);
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
  if (action?.dataset.action === "copy-profile-demo-handoff") copyProfileDemoHandoff();
  if (action?.dataset.action === "copy-profile-close-ask") copyProfileCloseAsk();
  if (action?.dataset.action === "copy-follow-up-command") copyFollowUpCommand();
  if (action?.dataset.action === "copy-follow-up-queue") copyFollowUpQueue();
  if (action?.dataset.action === "copy-safety-checklist") copySafetyChecklist();
  if (action?.dataset.action === "copy-launch-gate") copyLaunchGate();
  if (action?.dataset.action === "copy-launch-decision") copyLaunchDecision();
  if (action?.dataset.action === "copy-first-user-count") copyFirstUserCountBreakdown();
  if (action?.dataset.action === "copy-first-200-queue") copyFirst200LaunchQueue();
  if (action?.dataset.action === "copy-follow-up-audit") copyFollowUpAudit();
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
  if (action?.dataset.action === "copy-launch-command-row") copyLaunchCommandRow(action.dataset.commandLane);
  if (action?.dataset.action === "copy-outreach-recap") copyOutreachRecap();
  if (action?.dataset.action === "copy-outreach-sprint-plan") copyOutreachSprintPlan();
  if (action?.dataset.action === "copy-outreach-batch") copyOutreachBatch();
  if (action?.dataset.action === "complete-outreach-sprint") completeOutreachSprint();
  if (action?.dataset.action === "copy-session-history") copySessionHistory();
  if (action?.dataset.action === "copy-first-user-closeout") copyFirstUserCloseout();
  if (action?.dataset.action === "copy-session-note") copySessionNote(action.dataset.sessionIndex);
  if (action?.dataset.action === "copy-message-draft") copyMessageDraft();
  if (action?.dataset.action === "copy-message-handoff") copyMessageHandoff(action.dataset.threadId);
  if (action?.dataset.action === "copy-message-proof") copyMessageProof(action.dataset.threadId);
  if (action?.dataset.action === "copy-demo-script") copyDemoScript();
  if (action?.dataset.action === "copy-demo-cue") copyDemoCue(action.dataset.demoCueRole);
  if (action?.dataset.action === "copy-demo-pack") copyDemoPack();
  if (action?.dataset.action === "copy-launch-receipt") copyLaunchReceipt();
  if (action?.dataset.action === "copy-close-ask") copyCloseAsk();
  if (action?.dataset.action === "copy-confirmation-handoff") copyConfirmationHandoff();
  if (action?.dataset.action === "copy-confirmation-next-touch") copyConfirmationNextTouch();
  if (action?.dataset.action === "copy-profile-proof-path") copyProfileProofPath();
  if (action?.dataset.action === "copy-demo-link") copyDemoLink(action.dataset.demoRole, action.dataset.demoScreen, action.dataset.demoLabel);
  if (action?.dataset.action === "copy-perspective-link") copyPerspectiveLink(action.dataset.perspectiveRole);
  if (action?.dataset.action === "copy-first-200") copyFirst200Plan();
  if (action?.dataset.action === "copy-first-user-links") copyFirstUserLinks();
  if (action?.dataset.action === "copy-signup-checklist") copySignupChecklist();
  if (action?.dataset.action === "start-service-job") startServiceJob(action.dataset.serviceVertical, action.dataset.serviceCategory);
  if (action?.dataset.action === "browse-service-jobs") browseServiceJobs(action.dataset.serviceVertical);
  if (action?.dataset.action === "join-service-provider") joinServiceProvider(action.dataset.serviceVertical, action.dataset.serviceCategory);
  if (action?.dataset.action === "choose-service-category") browseServiceCategory(action.dataset.serviceCategory);
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
  if (action?.dataset.action === "reset-flex-form") resetFlexForm();
  if (action?.dataset.action === "mark-flex-status") markFlexStatus(action.dataset.flexId, action.dataset.flexStatusValue);
  if (action?.dataset.action === "focus-manufacturing-rfq") focusAutoPanel("#manufacturingRfqForm", "#manufacturingProductType");
  if (action?.dataset.action === "focus-manufacturing-supplier") focusAutoPanel("#manufacturingSupplierForm", "#manufacturingSupplierCompany");
  if (action?.dataset.action === "focus-manufacturing-lead") focusAutoPanel("#manufacturingSupplierLeadForm", "#manufacturingLeadCompany");
  if (action?.dataset.action === "select-product-path") selectProductPath(action.dataset.productPath);
  if (action?.dataset.action === "start-product-path-quote") startProductPathQuote(action.dataset.productPath, action.dataset.supplierCode);
  if (action?.dataset.action === "copy-manufacturing-brief") copyManufacturingBrief();
  if (action?.dataset.action === "copy-manufacturing-queue") copyManufacturingQueue();
  if (action?.dataset.action === "copy-manufacturing-rfq") copyManufacturingRfq(action.dataset.manufacturingRfqId);
  if (action?.dataset.action === "copy-manufacturing-supplier") copyManufacturingSupplier(action.dataset.manufacturingSupplierId);
  if (action?.dataset.action === "copy-manufacturing-outreach-template") copyManufacturingOutreachTemplate();
  if (action?.dataset.action === "copy-manufacturing-supplier-lead") copyManufacturingSupplierLead(action.dataset.manufacturingSupplierLeadId);
  if (action?.dataset.action === "view-manufacturing-supplier-lead") viewManufacturingSupplierLead(action.dataset.manufacturingSupplierLeadId);
  if (action?.dataset.action === "invite-manufacturing-supplier-lead") inviteManufacturingSupplierLead(action.dataset.manufacturingSupplierLeadId);
  if (action?.dataset.action === "convert-manufacturing-supplier-lead") convertManufacturingSupplierLead(action.dataset.manufacturingSupplierLeadId);
  if (action?.dataset.action === "create-manufacturing-opportunity") createManufacturingOpportunityFromLead(action.dataset.manufacturingSupplierLeadId);
  if (action?.dataset.action === "create-manufacturing-follow-up") createManufacturingFollowUpTask(action.dataset.manufacturingSupplierLeadId);
  if (action?.dataset.action === "mark-manufacturing-contacted") markManufacturingContacted(action.dataset.manufacturingRfqId);
  if (action?.dataset.action === "move-manufacturing-forward") moveManufacturingForward(action.dataset.manufacturingRfqId);
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
  if (action?.dataset.action === "start-auto-path") startAutoPath(action.dataset.autoPath);
  if (action?.dataset.action === "copy-auto-transport-menu") copyAutoTransportMenu();
  if (action?.dataset.action === "focus-auto-admin") focusAutoPanel("#adminAutoOperations", null);
  if (action?.dataset.action === "focus-operations-vault") focusAutoPanel("#forgeOperationsVault", "#operationsVaultSearch");
  if (action?.dataset.action === "copy-auto-admin-summary") copyAutoAdminSummary();
  if (action?.dataset.action === "copy-operations-vault-index") copyOperationsVaultIndex();
  if (action?.dataset.action === "copy-operations-vault-doc") copyOperationsVaultDoc(action.dataset.docId);
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
  if (action?.dataset.action === "focus-academy-student") focusAutoPanel("#forgeAcademyStudentForm", "#academyFullName");
  if (action?.dataset.action === "focus-academy-employer") focusAutoPanel("#academyEmployerForm", "#academyEmployerBusiness");
  if (action?.dataset.action === "focus-admitly-pathway") focusAutoPanel("#admitlyTradePathwayForm", "#admitlyFullName");
  if (action?.dataset.action === "copy-academy-brief") copyAcademyBrief();
  if (action?.dataset.action === "copy-academy-admin") copyAcademyAdminQueue();
  if (action?.dataset.action === "copy-academy-lead") copyAcademyLead(action.dataset.academyId);
  if (action?.dataset.action === "copy-trade-pathway-lead") copyTradePathwayLead(action.dataset.tradePathwayId);
  if (action?.dataset.action === "copy-academy-employer") copyAcademyEmployer(action.dataset.employerId);
  if (action?.dataset.action === "copy-academy-school") copyAcademySchool(action.dataset.schoolId);
  if (action?.dataset.action === "copy-resume-request") copyResumeRequest(action.dataset.resumeId);
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
  if (action?.dataset.action === "copy-detail-handoff") copyDetailHandoff(action.dataset.jobId);
  if (action?.dataset.action === "copy-bid-handoff") copyBidHandoff(action.dataset.jobId);
  if (action?.dataset.action === "copy-status-proof") copyStatusProofSummary(action.dataset.jobId);
  if (action?.dataset.action === "copy-status-handoff") copyStatusHandoff(action.dataset.jobId);
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
    chooseBidForJob(state.activeJobId, Number(chooseBid.dataset.chooseBid));
  }
});

function suggestedBidIndex(bids) {
  if (!bids.length) return -1;
  return bids.reduce((bestIndex, bid, index) => {
    const bestAmount = moneyNumber(bids[bestIndex]?.amount);
    const bidAmount = moneyNumber(bid.amount);
    if (!bestAmount && bidAmount) return index;
    if (bestAmount && bidAmount && bidAmount < bestAmount) return index;
    return bestIndex;
  }, 0);
}

function openBidMessageThread(job) {
  state.activeJobId = job.id;
  state.activeMessageThreadId = `job-${job.id}`;
  saveState();
  navigate("messages", { threadId: state.activeMessageThreadId });
}

function chooseSuggestedBidForJob(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  const bids = state.bids.filter((bid) => bid.jobId === jobId);
  if (!job || !bids.length) {
    showToast("No bids are ready to choose yet.");
    return;
  }
  const chosenIndex = bids.findIndex((bid) => bid.chosen);
  if (chosenIndex >= 0) {
    openBidMessageThread(job);
    return;
  }
  chooseBidForJob(job.id, suggestedBidIndex(bids));
}

function chooseBidForJob(jobId, bidIndex) {
  const job = state.jobs.find((item) => item.id === jobId);
  const bids = state.bids.filter((bid) => bid.jobId === jobId);
  const selectedBid = bids[Number(bidIndex)];
  if (!job || !selectedBid) return;
  if (selectedBid.chosen) {
    openBidMessageThread(job);
    return;
  }
  bids.forEach((bid) => bid.chosen = false);
  selectedBid.chosen = true;
  selectedBid.status = "Selected";
  job.status = (isServiceVerticalJob(job) || isManufacturingJob(job)) ? "Provider selected" : "In Progress";
  if (job.manufacturingRfqId) {
    const rfq = (state.manufacturingRfqs || []).find((lead) => lead.id === job.manufacturingRfqId);
    if (rfq) rfq.status = "Manufacturing selected";
  }
  state.activeJobId = job.id;
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
    primary: { label: "Open John's Messages", loginRole: "customer", loginName: job.customer || "John Smith", loginScreen: "messages", jobId: job.id, threadId: `job-${job.id}` },
    secondary: { label: "Open Customer Status", loginRole: "customer", loginName: job.customer || "John Smith", loginScreen: "status", jobId: job.id }
  };
  addActivity(`Bid selected for ${job.title}: ${selectedBid.worker}.`);
  saveState();
  showToast(`Bid chosen. Job moved to ${job.status}.`);
  navigate("confirm");
}

document.addEventListener("change", (event) => {
  if (event.target.closest("#jobCategory")) renderServiceJobFields();
  if (event.target.closest("#workerServiceVertical")) renderProviderServiceFields();
  if (event.target.closest("#providerVerticalFilter") || event.target.closest("input[name='providerFilter']")) renderProviderDirectory();
  if (event.target.closest("#adminTradeCategoryFilter")) {
    renderDashboards();
    renderLeadPipelines();
  }
  if (event.target.closest("#homebuildingIntakeForm")) renderHomebuildingRoutePreview();
  if (event.target.closest("#projectIntakeForm")) renderProjectRoutePreview();
  if (event.target.closest("#buildingLeadForm")) {
    renderBuildingRoutePreview();
    renderBuildingConditionalSections();
  }
  if (event.target.closest("#operationsVaultCategory")) renderOperationsVault();

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

  if (event.target.closest("#manufacturingProductFilter") || event.target.closest("#manufacturingSupplierFilter") || event.target.closest("#manufacturingDosageFilter") || event.target.closest("#manufacturingMoqFilter") || event.target.closest("#manufacturingCertificationFilter") || event.target.closest("input[name='manufacturingFilterFlag']")) {
    renderManufacturingPage();
  }

  const manufacturingStatus = event.target.closest("[data-manufacturing-status]");
  if (manufacturingStatus) {
    const lead = (state.manufacturingRfqs || []).find((item) => item.id === manufacturingStatus.dataset.manufacturingStatus);
    if (lead) lead.status = manufacturingStatus.value;
    addActivity(`Manufacturing RFQ status changed: ${lead?.brandName || "RFQ"} -> ${manufacturingStatus.value}.`);
    saveState();
    render();
    showToast("Manufacturing RFQ status updated.");
  }

  const manufacturingSupplierLeadStatus = event.target.closest("[data-manufacturing-supplier-lead-status]");
  if (manufacturingSupplierLeadStatus) {
    const lead = (state.manufacturingSupplierLeads || []).find((item) => item.id === manufacturingSupplierLeadStatus.dataset.manufacturingSupplierLeadStatus);
    if (lead) {
      lead.outreachStatus = manufacturingSupplierLeadStatus.value;
      if (manufacturingSupplierLeadStatus.value === "Contacted") lead.lastContacted = lead.lastContacted || "Today";
    }
    addActivity(`Supplier lead status changed: ${lead?.companyName || "supplier lead"} -> ${manufacturingSupplierLeadStatus.value}.`);
    saveState();
    render();
    showToast("Supplier lead status updated.");
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

  const academyStatus = event.target.closest("[data-academy-status]");
  if (academyStatus) {
    const lead = (state.forgeAcademyLeads || []).find((item) => item.id === academyStatus.dataset.academyStatus);
    if (lead) lead.status = academyStatus.value;
    addActivity(`Forge Academy status changed: ${lead?.fullName || "lead"} -> ${academyStatus.value}.`);
    saveState();
    renderAcademyAdmin();
  }

  const tradePathwayStatus = event.target.closest("[data-trade-pathway-status]");
  if (tradePathwayStatus) {
    const lead = (state.tradePathwayLeads || []).find((item) => item.id === tradePathwayStatus.dataset.tradePathwayStatus);
    if (lead) lead.status = tradePathwayStatus.value;
    addActivity(`Admitly Trade Pathways status changed: ${lead?.fullName || "lead"} -> ${tradePathwayStatus.value}.`);
    saveState();
    renderAcademyAdmin();
  }

  const messageThread = event.target.closest("#messageThreadSelect");
  if (messageThread) {
    state.activeMessageThreadId = messageThread.value;
    saveState();
    renderMessages();
  }
});

document.querySelector("#backupImport").addEventListener("change", importBackup);
document.querySelector("#manufacturingSupplierCsvInput").addEventListener("change", importManufacturingSupplierCsv);

document.addEventListener("input", (event) => {
  if (event.target.closest("#workerTrade")) renderProviderServiceFields();
  if (event.target.closest("#providerSearch") || event.target.closest("#providerServiceArea")) renderProviderDirectory();
  if (event.target.closest("#homebuildingIntakeForm")) renderHomebuildingRoutePreview();
  if (event.target.closest("#projectIntakeForm")) renderProjectRoutePreview();
  if (event.target.closest("#buildingLeadForm")) {
    renderBuildingRoutePreview();
    renderBuildingConditionalSections();
  }
  if (event.target.closest("#flexIndustryFilter") || event.target.closest("#flexCityFilter") || event.target.closest("#flexStateFilter")) renderFlexLeadsAdmin();
  if (event.target.closest("#manufacturingLocationFilter")) renderManufacturingPage();
  if (event.target.closest("#buildingStateFilter")) renderAdminBuildingLeadsPage();
  if (event.target.closest("#operationsVaultSearch")) renderOperationsVault();

  const notes = event.target.closest("[data-job-notes]");
  const creativeRequestNotes = event.target.closest("[data-creative-request-notes]");
  const creativeProviderNotes = event.target.closest("[data-creative-provider-notes]");
  const northstarNotes = event.target.closest("[data-northstar-notes]");
  const northstarOwner = event.target.closest("[data-northstar-owner]");
  const roadRescueNotes = event.target.closest("[data-road-rescue-notes]");
  const flexNotes = event.target.closest("[data-flex-notes]");
  const manufacturingNotes = event.target.closest("[data-manufacturing-notes]");
  const manufacturingSupplierLeadNotes = event.target.closest("[data-manufacturing-supplier-lead-notes]");
  const referralNotes = event.target.closest("[data-referral-notes]");
  const homebuildingNotes = event.target.closest("[data-homebuilding-notes]");
  const buildingNotes = event.target.closest("[data-building-notes]");
  const projectNote = event.target.closest("[data-project-note]");
  const academyNotes = event.target.closest("[data-academy-notes]");
  const tradePathwayNotes = event.target.closest("[data-trade-pathway-notes]");
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
  if (northstarOwner) {
    const lead = (state.northstarLeads || []).find((item) => item.id === northstarOwner.dataset.northstarOwner);
    if (!lead) return;
    lead.assignedOwner = northstarOwner.value;
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
  if (manufacturingNotes) {
    const lead = (state.manufacturingRfqs || []).find((item) => item.id === manufacturingNotes.dataset.manufacturingNotes);
    if (!lead) return;
    lead.notes = manufacturingNotes.value;
    saveState();
  }
  if (manufacturingSupplierLeadNotes) {
    const lead = (state.manufacturingSupplierLeads || []).find((item) => item.id === manufacturingSupplierLeadNotes.dataset.manufacturingSupplierLeadNotes);
    if (!lead) return;
    lead.followUpNotes = manufacturingSupplierLeadNotes.value;
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
  if (academyNotes) {
    const lead = (state.forgeAcademyLeads || []).find((item) => item.id === academyNotes.dataset.academyNotes);
    if (lead) lead.notes = academyNotes.value;
    saveState();
  }
  if (tradePathwayNotes) {
    const lead = (state.tradePathwayLeads || []).find((item) => item.id === tradePathwayNotes.dataset.tradePathwayNotes);
    if (lead) lead.notes = tradePathwayNotes.value;
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

document.querySelector("#premiumServiceSearchForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  handlePremiumServiceSearch();
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

document.querySelector("#manufacturingRfqForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitManufacturingRfq();
});

document.querySelector("#manufacturingSupplierForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitManufacturingSupplierProfile();
});

document.querySelector("#manufacturingSupplierLeadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitManufacturingSupplierLead();
});

document.querySelector("#personalDriverRequestForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitPersonalDriverRequest();
});

document.querySelector("#personalDriverProviderForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitPersonalDriverProvider();
});

document.querySelector("#merchantServicesLeadForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitMerchantServicesLead();
});

document.querySelector("#localProductVendorForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitLocalProductVendor();
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
    intent: document.querySelector("#vehicleSellingPath")?.value || "Sell My Car on Forge",
    year: fieldValue("#vehicleYear"),
    make: fieldValue("#vehicleMake"),
    model: fieldValue("#vehicleModel"),
    trim: fieldValue("#vehicleTrim"),
    price: fieldValue("#vehiclePrice"),
    privateLowestPrice: fieldValue("#vehicleLowestPrice"),
    mileage: fieldValue("#vehicleMileage"),
    vin: fieldValue("#vehicleVin"),
    exteriorColor: fieldValue("#vehicleExteriorColor"),
    interiorColor: fieldValue("#vehicleInteriorColor"),
    fuelType: document.querySelector("#vehicleFuelType")?.value || "",
    drivetrain: document.querySelector("#vehicleDrivetrain")?.value || "",
    transmission: document.querySelector("#vehicleTransmission")?.value || "",
    plateState: fieldValue("#vehiclePlateState"),
    location: fieldValue("#vehicleLocation"),
    sellTimeline: document.querySelector("#vehicleSellTimeline")?.value || "Flexible",
    condition: document.querySelector("#vehicleCondition")?.value || "",
    running: document.querySelector("#vehicleRunning")?.value || "",
    titleStatus: document.querySelector("#vehicleTitleStatus")?.value || "",
    loanLien: document.querySelector("#vehicleLoanLien")?.value || "",
    payoffAmount: fieldValue("#vehiclePayoff"),
    description: fieldValue("#vehicleDescription"),
    mechanicalIssues: fieldValue("#vehicleMechanicalIssues"),
    cosmeticIssues: fieldValue("#vehicleCosmeticIssues"),
    accidentHistory: document.querySelector("#vehicleAccidentHistory")?.value || "",
    serviceRecords: document.querySelector("#vehicleServiceRecords")?.value || "",
    smogStatus: document.querySelector("#vehicleSmogStatus")?.value || "",
    keys: document.querySelector("#vehicleKeys")?.value || "",
    photoNotes: fieldValue("#vehiclePhotoNotes"),
    dealerId: dealer.id,
    seller: fieldValue("#vehicleSeller"),
    phone: fieldValue("#vehiclePhone"),
    email: fieldValue("#vehicleEmail"),
    preferredContact: document.querySelector("#vehiclePreferredContact")?.value || "Text",
    wantsReplacement: fieldChecked("#vehicleWantsReplacement"),
    consentToPartnerContact: fieldChecked("#vehiclePartnerConsent"),
    status: "Available",
    reviewStatus: "New Lead",
    leadType: "vehicle_seller",
    posted: "Today"
  };
  vehicle.tags = vehicleLeadTags(vehicle);
  vehicle.assignedPartner = vehicleAssignedPartner(vehicle);
  vehicle.route = vehicleLeadRoute(vehicle);
  vehicle.leadScore = vehicleLeadScore(vehicle);
  vehicle.estimatedForgeRevenue = isLuxuryVehicle(vehicle) ? "Premium concierge / partner success fee review" : "Listing, referral, or dealer lead fee review";
  vehicle.adminNotes = "Review title/lien, seller consent, public listing privacy, and partner agreement before external handoff.";
  state.vehicles.unshift(vehicle);
  addActivity(`Vehicle seller lead saved: ${vehicle.year} ${vehicle.make} ${vehicle.model} routed to ${vehicle.assignedPartner}.`);
  state.lastConfirmation = {
    type: "vehicle",
    title: "Vehicle seller lead saved.",
    body: "Forge saved this vehicle for admin review, partner routing, public listing review, and safe seller follow-up.",
    details: [
      `${vehicle.year} ${vehicle.make} ${vehicle.model}`,
      `${vehicle.price} · ${vehicle.mileage}`,
      `${vehicle.location} · ${vehicle.assignedPartner}`,
      `Tags: ${vehicle.tags.join(", ")}`
    ],
    nextSteps: [
      "Forge shows safe public listing details only after review",
      `Admin route: ${vehicle.route}`,
      "Private lowest price, title/lien details, VIN, and admin notes stay internal",
      "Seller and buyer should inspect, verify title, and handle payment outside Forge"
    ],
    primary: { label: "Open Forge Auto", screen: "auto" },
    secondary: { label: "Back Home", screen: "home" }
  };
  saveState();
  sendLead("vehicle-seller", vehicle);
  event.target.reset();
  setFieldValue("#vehicleLocation", "Medford, OR");
  showToast("Vehicle seller lead saved.");
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
    title: request.service === "Find Me a Vehicle" ? "Vehicle buyer request saved." : "Auto service request saved.",
    body: request.service === "Find Me a Vehicle"
      ? "Forge saved this buyer-concierge request for S&A Auto or an approved seller-of-record path to review."
      : "Forge saved this vehicle request so the operator can route it to the right trusted auto partner.",
    details: [
      `${request.name} · ${request.service}`,
      `${request.vehicle} · ${request.mileage}`,
      `${request.location} · ${request.urgency}`
    ],
    nextSteps: [
      request.service === "Find Me a Vehicle" ? "Forge saves the request in the S&A Auto buyer pipeline" : "Forge saves the request in the Auto service queue",
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

document.querySelector("#forgeAcademyStudentForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    id: `forge-academy-${Date.now()}`,
    sourceApp: "forge",
    leadType: "Student / Worker Career Intake",
    fullName: fieldValue("#academyFullName"),
    email: fieldValue("#academyEmail"),
    phone: fieldValue("#academyPhone"),
    city: fieldValue("#academyCity") || "Medford",
    state: fieldValue("#academyState") || "OR",
    desiredTrade: document.querySelector("#academyDesiredTrade")?.value || "",
    currentExperience: fieldValue("#academyExperience"),
    hasTransportation: document.querySelector("#academyTransportation")?.value || "",
    hasDriversLicense: document.querySelector("#academyDriversLicense")?.value || "",
    needsTraining: fieldChecked("#academyNeedsTraining") ? "Yes" : "No",
    needsJobNow: fieldChecked("#academyNeedsJobNow") ? "Yes" : "No",
    needsResume: fieldChecked("#academyNeedsResume") ? "Yes" : "No",
    interestedCareerPlus: fieldChecked("#academyCareerPlus") ? "Yes" : "No",
    consentToContact: fieldChecked("#academyConsent"),
    status: "New Lead",
    priority: fieldChecked("#academyNeedsJobNow") ? "Hot" : "Warm",
    notes: fieldValue("#academyNotes"),
    created: "Today"
  };
  state.forgeAcademyLeads.unshift(lead);
  if (lead.needsResume === "Yes" || lead.interestedCareerPlus === "Yes") state.resumeRequests.unshift(resumeRequestFromAcademyLead(lead));
  addActivity(`Forge Academy lead saved: ${lead.fullName} for ${lead.desiredTrade}.`);
  state.lastConfirmation = academyConfirmation(lead, "Forge Academy lead saved.");
  saveState();
  sendLead("forge-academy", lead);
  event.target.reset();
  setFieldValue("#academyCity", "Medford");
  setFieldValue("#academyState", "OR");
  showToast("Forge Academy lead saved.");
  navigate("confirm");
});

document.querySelector("#academyEmployerForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    id: `academy-employer-${Date.now()}`,
    sourceApp: "forge",
    leadType: "Employer Training Partner",
    businessName: fieldValue("#academyEmployerBusiness"),
    contactName: fieldValue("#academyEmployerContact"),
    email: fieldValue("#academyEmployerEmail"),
    phone: fieldValue("#academyEmployerPhone"),
    tradeCategory: document.querySelector("#academyEmployerTrade")?.value || "",
    hiringNeeds: fieldValue("#academyEmployerNeeds"),
    apprenticeshipAvailability: document.querySelector("#academyEmployerApprenticeship")?.value || "",
    willingToTrain: document.querySelector("#academyEmployerTrain")?.value || "",
    insuranceLicense: fieldValue("#academyEmployerLicense"),
    notes: fieldValue("#academyEmployerNotes"),
    status: "New Lead",
    priority: "Warm",
    created: "Today"
  };
  state.employerTrainingPartners.unshift(lead);
  addActivity(`Forge Academy employer partner saved: ${lead.businessName}.`);
  saveState();
  sendLead("employer-training-partner", lead);
  event.target.reset();
  showToast("Employer training partner saved.");
  navigate("admin");
});

document.querySelector("#academySchoolForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    id: `academy-school-${Date.now()}`,
    sourceApp: "admitly",
    leadType: "School / Program Partner",
    schoolName: fieldValue("#academySchoolName"),
    contactName: fieldValue("#academySchoolContact"),
    email: fieldValue("#academySchoolEmail"),
    phone: fieldValue("#academySchoolPhone"),
    programTypes: fieldValue("#academySchoolPrograms"),
    location: fieldValue("#academySchoolLocation") || "Medford, OR",
    costRange: fieldValue("#academySchoolCost"),
    financialAidAvailable: document.querySelector("#academySchoolAid")?.value || "",
    enrollmentDeadlines: fieldValue("#academySchoolDeadlines"),
    notes: fieldValue("#academySchoolNotes"),
    status: "New Lead",
    priority: "Warm",
    created: "Today"
  };
  state.schoolPartners.unshift(lead);
  addActivity(`Academy school/program partner saved: ${lead.schoolName}.`);
  saveState();
  sendLead("school-program-partner", lead);
  event.target.reset();
  setFieldValue("#academySchoolLocation", "Medford, OR");
  showToast("School/program partner saved.");
  navigate("admin");
});

document.querySelector("#admitlyTradePathwayForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const lead = {
    id: `trade-pathway-${Date.now()}`,
    sourceApp: "admitly",
    leadType: "Admitly Trade Pathways",
    fullName: fieldValue("#admitlyFullName"),
    email: fieldValue("#admitlyEmail"),
    phone: fieldValue("#admitlyPhone"),
    city: fieldValue("#admitlyCity") || "Medford",
    state: fieldValue("#admitlyState") || "OR",
    educationLevel: document.querySelector("#admitlyEducation")?.value || "",
    ageRange: document.querySelector("#admitlyAgeRange")?.value || "",
    pathway: document.querySelector("#admitlyPathway")?.value || "",
    desiredTrade: document.querySelector("#admitlyDesiredTrade")?.value || "",
    timeline: document.querySelector("#admitlyTimeline")?.value || "",
    fundingNeed: document.querySelector("#admitlyFundingNeed")?.value || "",
    workExperience: fieldValue("#admitlyExperience"),
    resumeText: fieldValue("#admitlyResumeText"),
    essayHelp: fieldChecked("#admitlyEssayHelp") ? "Yes" : "No",
    scholarshipHelp: fieldChecked("#admitlyScholarshipHelp") ? "Yes" : "No",
    jobHelp: fieldChecked("#admitlyJobHelp") ? "Yes" : "No",
    consentToContact: fieldChecked("#admitlyConsent"),
    status: "New Lead",
    priority: document.querySelector("#admitlyTimeline")?.value === "ASAP" ? "Hot" : "Warm",
    notes: fieldValue("#admitlyNotes"),
    created: "Today"
  };
  state.tradePathwayLeads.unshift(lead);
  if (lead.resumeText || lead.jobHelp === "Yes") state.resumeRequests.unshift(resumeRequestFromTradePathwayLead(lead));
  addActivity(`Admitly Trade Pathways lead saved: ${lead.fullName} for ${lead.pathway}.`);
  state.lastConfirmation = academyConfirmation(lead, "Admitly Trade Pathways lead saved.");
  saveState();
  sendLead("trade-pathway", lead);
  event.target.reset();
  setFieldValue("#admitlyCity", "Medford");
  setFieldValue("#admitlyState", "OR");
  showToast("Admitly Trade Pathways lead saved.");
  navigate("confirm");
});

document.querySelector("#workerSignupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const businessGrowthTools = selectedProviderGrowthTools();
  const businessSize = fieldValue("#workerBusinessSize") || "Solo Operator";
  const northStarMarketingNeed = fieldValue("#workerNorthStarMarketingNeed") || "No, just list me on Forge";
  const selectedVertical = serviceVerticalById(fieldValue("#workerServiceVertical")) || serviceVerticalForCategory(fieldValue("#workerTrade"));
  const profileDetails = selectedVertical ? collectServiceDetails("data-provider-profile-field") : {};
  const providerTags = Array.from(document.querySelectorAll("input[name='workerTags']:checked")).map((input) => input.value);
  const selectedTradeCategories = uniqueValues([
    ...fieldSelectedValues("#workerTradeCategories"),
    selectedVertical?.categories?.[0],
    categoryLabel(fieldValue("#workerTrade"))
  ].filter((category) => forgeTradeCategorySchema.acceptsCategory(category)));
  const providerValidation = forgeTradeCategorySchema.validateProvider({
    name: document.querySelector("#workerName").value.trim(),
    phone: document.querySelector("#workerPhone").value.trim(),
    email: document.querySelector("#workerEmail").value.trim(),
    trade: document.querySelector("#workerTrade").value.trim(),
    serviceVertical: selectedVertical?.id || "",
    tradeCategories: selectedTradeCategories
  });
  if (!providerValidation.ok) {
    showToast(providerValidation.errors[0]);
    return;
  }
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
    contactMethod: profileDetails.contactMethod || "",
    availability: profileDetails.availability || "",
    licenseStatus: profileDetails.licenseStatus || "",
    insuranceStatus: profileDetails.insuranceStatus || "",
    serviceVertical: selectedVertical?.id || "",
    serviceVerticalTitle: selectedVertical?.title || "",
    providerCategory: selectedVertical?.id || selectedTradeCategories[0] || "",
    category: selectedTradeCategories[0] || selectedVertical?.categories?.[0] || "",
    tradeCategories: selectedTradeCategories,
    providerCategories: selectedTradeCategories,
    providerType: fieldValue("#workerProviderType") || selectedVertical?.providerTypes?.[0] || "",
    profileDetails,
    tags: providerTags,
    businessSize,
    northStarMarketingNeed,
    businessGrowthTools,
    followUpConsent: fieldChecked("#workerFollowUpConsent"),
    termsAccepted: fieldChecked("#workerTerms"),
    privacyAcknowledged: fieldChecked("#workerTerms"),
    earlyAccessAcknowledged: fieldChecked("#workerTerms"),
    status: "New"
  };
  const existingWorker = state.workers.findIndex((worker) => worker.email.toLowerCase() === state.worker.email.toLowerCase());
  if (existingWorker >= 0) {
    state.workers[existingWorker] = state.worker;
  } else {
    state.workers.unshift(state.worker);
  }
  const providerFlexLead = maybeCreateProviderFlexLead(state.worker, businessGrowthTools);
  const providerNorthStarLead = maybeCreateProviderNorthStarLead(state.worker, businessGrowthTools, northStarMarketingNeed, businessSize);
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
      `${businessSize} · ${northStarMarketingNeed}`,
      state.worker.followUpConsent ? "Follow-up consent captured" : "Follow-up consent missing",
      state.worker.termsAccepted ? "Early Access Terms & Privacy accepted" : "Early Access Terms & Privacy missing",
      providerNorthStarLead ? `North Star lead classified ${providerNorthStarLead.leadClassification} · Score ${providerNorthStarLead.score}/100` : "No North Star growth follow-up selected",
      providerFlexLead ? "Capital Desk follow-up flagged" : "No Capital Desk follow-up selected"
    ],
    nextSteps: [
      "Forge saves your worker profile for early access",
      "Profile Status shows readiness, trust notes, and follow-up status",
      "Admin can follow up when local jobs fit your trade",
      providerNorthStarLead ? "North Star Creative Co. can review your website, Google, ads, CRM, and follow-up needs" : "Use the provider dashboard if you want North Star growth help later",
      providerFlexLead ? "Forge Capital Desk can follow up before any Flex referral link is sent" : "Open Worker Dashboard to browse jobs and submit bids"
    ],
    primary: { label: "Open Profile Status", loginRole: "worker", loginName: state.worker.name, loginScreen: "profile" },
    secondary: { label: "Open Worker Dashboard", loginRole: "worker", loginName: state.worker.name, loginScreen: "worker" }
  };
  saveState();
  sendLead("worker", state.worker);
  if (providerNorthStarLead) sendLead("northstar", providerNorthStarLead);
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
    manufacturingMoq: fieldValue("#bidManufacturingMoq"),
    manufacturingUnitCost: fieldValue("#bidManufacturingUnitCost"),
    manufacturingSetupFee: fieldValue("#bidManufacturingSetupFee"),
    manufacturingSampleFee: fieldValue("#bidManufacturingSampleFee"),
    manufacturingPackagingCost: fieldValue("#bidManufacturingPackagingCost"),
    manufacturingLabelingCost: fieldValue("#bidManufacturingLabelingCost"),
    manufacturingTestingCost: fieldValue("#bidManufacturingTestingCost"),
    manufacturingLeadTime: fieldValue("#bidManufacturingLeadTime"),
    manufacturingProductionTimeline: fieldValue("#bidManufacturingProductionTimeline"),
    manufacturingPaymentTerms: fieldValue("#bidManufacturingPaymentTerms"),
    manufacturingCertifications: fieldValue("#bidManufacturingCertifications"),
    manufacturingTestingIncluded: fieldValue("#bidManufacturingTestingIncluded"),
    manufacturingFormulationIncluded: fieldValue("#bidManufacturingFormulationIncluded"),
    manufacturingPackagingIncluded: fieldValue("#bidManufacturingPackagingIncluded"),
    manufacturingFulfillmentIncluded: fieldValue("#bidManufacturingFulfillmentIncluded"),
    manufacturingNdaRequired: fieldValue("#bidManufacturingNdaRequired"),
    manufacturingQuestions: fieldValue("#bidManufacturingQuestions"),
    experienceNote: fieldValue("#bidExperienceNote"),
    message: document.querySelector("#bidMessage").value.trim(),
    rating: "New",
    reviews: 0,
    status: fieldValue("#bidStatus") || "Submitted",
    chosen: false
  };
  state.bids.unshift(bid);
  selectedJob.bids += 1;
  if ((isServiceVerticalJob(selectedJob) || isManufacturingJob(selectedJob)) && ["Open for bids", "New"].includes(selectedJob.status)) selectedJob.status = "Bid submitted";
  else if (selectedJob.status === "New") selectedJob.status = "Matching";
  if (selectedJob.manufacturingRfqId) {
    const rfq = (state.manufacturingRfqs || []).find((lead) => lead.id === selectedJob.manufacturingRfqId);
    if (rfq && ["Request received", "Sourcing manufacturers"].includes(rfq.status)) rfq.status = "Awaiting bids";
  }
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

async function importManufacturingSupplierCsv(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const rows = parseCsv(await file.text());
    const leads = rows.map((row) => normalizeManufacturingSupplierLead({
      id: `supplier-lead-import-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      companyName: csvValue(row, ["company name", "company", "business", "supplier", "supplier name"]),
      contactName: csvValue(row, ["contact name", "contact", "owner"]),
      phone: csvValue(row, ["phone", "telephone", "mobile"]),
      email: csvValue(row, ["email", "email address"]),
      website: csvValue(row, ["website", "url", "company website"]),
      city: csvValue(row, ["city"]),
      state: csvValue(row, ["state", "province"]),
      country: csvValue(row, ["country"]) || "USA",
      supplierCategory: csvValue(row, ["supplier category", "category", "manufacturer type", "type"]) || "Supplement Manufacturer",
      capabilities: csvValue(row, ["capabilities", "capability notes", "services"]),
      certifications: csvValue(row, ["certifications", "certification"]),
      productTypes: csvValue(row, ["product types", "products", "product categories"]),
      moq: csvValue(row, ["moq", "minimum order quantity"]),
      leadTime: csvValue(row, ["lead time", "turnaround", "estimated lead time"]),
      notes: csvValue(row, ["notes", "source notes"]),
      source: csvValue(row, ["source", "lead source"]) || "CSV import",
      sourceUrl: csvValue(row, ["source url", "source link"]),
      dateDiscovered: csvValue(row, ["date discovered", "date added"]) || "Today",
      addedBy: csvValue(row, ["added by", "relationship owner"]) || "Andrew",
      outreachStatus: csvValue(row, ["outreach status", "status"]) || "Not contacted",
      lastContacted: csvValue(row, ["last contacted", "last contacted date"]),
      nextFollowUpDate: csvValue(row, ["next follow-up date", "next follow up", "follow-up date"]),
      followUpNotes: csvValue(row, ["follow-up notes", "follow up notes"]),
      potentialOpportunityValue: csvValue(row, ["potential opportunity value", "opportunity value", "value"]),
      relatedForgeVertical: csvValue(row, ["related forge vertical", "vertical"]) || "Manufacturing",
      tags: csvValue(row, ["tags"])
    })).filter((lead) => lead.companyName);
    const skipped = rows.length - leads.length;
    if (!leads.length) {
      showToast("No valid supplier leads found. Company name is required.");
      event.target.value = "";
      return;
    }
    state.manufacturingSupplierLeads.unshift(...leads);
    state.activeManufacturingSupplierLeadId = leads[0].id;
    addActivity(`Imported ${leads.length} manufacturing supplier lead${leads.length === 1 ? "" : "s"} from CSV. ${MANUFACTURING_IMPORT_PERMISSION_COPY}`);
    state.lastConfirmation = {
      type: "manufacturing-supplier-csv",
      title: "Supplier CSV imported.",
      body: `${leads.length} supplier lead${leads.length === 1 ? "" : "s"} saved. ${skipped ? `${skipped} row${skipped === 1 ? "" : "s"} skipped because company name was missing.` : "No rows were skipped."}`,
      details: [
        "Source defaults to CSV import when no source column is provided",
        MANUFACTURING_IMPORT_PERMISSION_COPY
      ],
      nextSteps: [
        "Review each imported lead before outreach",
        "Use source attribution and follow-up status fields",
        "Convert only lawfully obtained or company-approved information into provider profiles"
      ],
      primary: { label: "Open Manufacturing CRM", screen: "manufacturing" },
      secondary: { label: "Open Admin", screen: "admin" }
    };
    saveState();
    render();
    showToast(`${leads.length} supplier lead${leads.length === 1 ? "" : "s"} imported.`);
  } catch (error) {
    showToast("CSV import failed. Check the file format.");
  } finally {
    event.target.value = "";
  }
}

function parseCsv(text) {
  const rows = parseCsvRows(text).filter((row) => row.some((cell) => String(cell || "").trim()));
  if (rows.length < 2) return [];
  const headers = rows[0].map((header) => normalizeCsvHeader(header));
  return rows.slice(1).map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""])));
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (quoted && char === '"' && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell.trim());
  rows.push(row);
  return rows;
}

function normalizeCsvHeader(value) {
  return String(value || "").trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
}

function csvValue(row, names) {
  for (const name of names) {
    const value = row[normalizeCsvHeader(name)];
    if (String(value || "").trim()) return String(value).trim();
  }
  return "";
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

function sendConfiguredFlexWebhooks(lead) {
  const payload = flexLeadWebhookPayload(lead);
  [
    ["FORGE_GHL_WEBHOOK_URL", FORGE_GHL_WEBHOOK_URL],
    ["FORGE_ZAPIER_WEBHOOK_URL", FORGE_ZAPIER_WEBHOOK_URL]
  ].forEach(([label, url]) => {
    if (!url) return;
    postConfiguredLeadWebhook(label, url, payload);
  });
}

async function postConfiguredLeadWebhook(label, url, payload) {
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    addActivity(`Capital Desk lead sent to ${label}.`);
    updateWebhookDelivery("Sent", label);
    saveState();
  } catch {
    try {
      await fetch(url, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) });
      addActivity(`Capital Desk lead attempted via ${label}.`);
      updateWebhookDelivery("Attempted", label);
      saveState();
    } catch {
      addActivity(`Capital Desk lead saved locally; ${label} failed.`);
      updateWebhookDelivery("Failed", label);
      saveState();
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
    "9. Request manufacturing help for supplements, vitamins, gummies, powders, beverages, skincare, pet wellness, packaging, labs, or compliance support.",
    "10. Send one referral: a homeowner, worker, builder, creative, auto customer, manufacturing buyer, supplier, career applicant, or business owner who should see Forge.",
    "",
    `Post a job: ${base}${versionQuery()}#post`,
    `Join as worker: ${base}${versionQuery()}#signup`,
    `Homebuilding: ${base}/homebuilding${versionQuery()}`,
    `Projects: ${base}/projects${versionQuery()}`,
    `Build Tracker: ${base}/homebuilding/tracker${versionQuery()}`,
    `Road Rescue: ${base}/road-rescue${versionQuery()}`,
    `Photography & Videography: ${base}/photography${versionQuery()}`,
    `NorthStar Creative Co.: ${base}/northstar-creative${versionQuery()}`,
    `Forge Capital Desk: ${base}/forge/capital${versionQuery()}`,
    `Manufacturing + Nutraceuticals: ${base}/manufacturing-nutraceuticals${versionQuery()}`,
    `See Forge: ${base}${versionQuery()}#home`
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
    `Post one real job: ${base}${versionQuery()}#post`,
    `Join the worker list: ${base}${versionQuery()}#signup`,
    `Request homebuilding review: ${base}/homebuilding${versionQuery()}`,
    `Submit a project opportunity: ${base}/projects${versionQuery()}`,
    `Open Build Tracker demo: ${base}/homebuilding/tracker${versionQuery()}`,
    `Request Road Rescue: ${base}/road-rescue${versionQuery()}`,
    `Book Photography & Videography: ${base}/photography${versionQuery()}`,
    `Grow a blue-collar business with NorthStar: ${base}/northstar-creative${versionQuery()}`,
    `Check Flex options through Forge Capital Desk: ${base}/forge/capital${versionQuery()}`,
    `Find a manufacturing or nutraceutical partner: ${base}/manufacturing-nutraceuticals${versionQuery()}`,
    `Plan a school, union, or AI job path: ${base}${versionQuery()}#opportunities`,
    `Check an existing job: ${base}${versionQuery()}#status`,
    `Start at Forge home: ${base}${versionQuery()}#home`,
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
    "1. Ask one person to post a real job, join the worker list, request homebuilding review, book a creative, request manufacturing help, or request NorthStar business help.",
    "2. Make sure they know this is early access and no payment is collected in the MVP.",
    "3. Save their contact info, follow-up consent, and the next action.",
    "4. Check Admin after each signup and export a backup before wider outreach.",
    "5. Before public launch, connect hosting, database, authentication, backups, and the final trust and safety workflow.",
    "",
    `Post a job: ${base}${versionQuery()}#post`,
    `Join worker list: ${base}${versionQuery()}#signup`,
    `Homebuilding: ${base}/homebuilding${versionQuery()}`,
    `Projects: ${base}/projects${versionQuery()}`,
    `Build Tracker: ${base}/homebuilding/tracker${versionQuery()}`,
    `Road Rescue: ${base}/road-rescue${versionQuery()}`,
    `Photography & Videography: ${base}/photography${versionQuery()}`,
    `NorthStar Creative Co.: ${base}/northstar-creative${versionQuery()}`,
    `Manufacturing + Nutraceuticals: ${base}/manufacturing-nutraceuticals${versionQuery()}`,
    `Personal Driver: ${base}/personal-driver${versionQuery()}`,
    `Forge Payments / Merchant Services: ${base}/forge-payments${versionQuery()}`,
    `Local Products / Makers: ${base}/local-products${versionQuery()}`,
    `Training & Careers: ${base}${versionQuery()}#opportunities`,
    `Check status: ${base}${versionQuery()}#status`,
    `Open admin: ${base}${versionQuery("demo=admin")}#admin`
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
    ...confirmNextSteps(confirmation).map((step, index) => `${index + 1}. ${step}`),
    "",
    "Operator closeout:",
    ...confirmationCloseoutRows(confirmation).map((step) => `${step.label}: ${step.title}. ${step.body}`)
  ].join("\n");
  await copyText(text, "Confirmation handoff copied.");
}

async function copyConfirmationNextTouch() {
  const confirmation = state.lastConfirmation || seedState.lastConfirmation;
  const text = [
    "Forge first-user next touch",
    "",
    confirmationNextTouchTitle(confirmation),
    confirmationNextTouchSummary(confirmation),
    "",
    "Suggested message:",
    confirmationHandoffText(confirmation),
    "",
    "Operator routing:",
    ...confirmationNextTouchRows(confirmation).map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    "Closeout: copy the message, record contact in Admin, keep manual-review leads guarded, and export Backup JSON after the outreach block."
  ].join("\n");
  await copyText(text, "Next touch copied.");
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
    "6. The ask is simple: post one real job, request homebuilding review, request manufacturing help, join as a worker, or introduce one person who should see Forge.",
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
    `Start here: ${base}${versionQuery()}#perspective`,
    `Homeowner view: ${roleDemoLink("customer", "status")}`,
    `Homeowner readiness: ${roleDemoLink("customer", "profile")}`,
    `Worker view: ${roleDemoLink("worker", "worker")}`,
    `Worker readiness: ${roleDemoLink("worker", "profile")}`,
    `Admin view: ${roleDemoLink("admin", "admin")}`,
    `Admin readiness: ${roleDemoLink("admin", "profile")}`,
    `Training & Careers: ${roleDemoLink("customer", "opportunities")}`,
    `Homebuilding: ${base}/homebuilding${versionQuery()}`,
    `Projects: ${base}/projects${versionQuery()}`,
    `Build Tracker: ${base}/homebuilding/tracker${versionQuery()}`,
    `Forge Auto Services: ${roleDemoLink("customer", "auto")}`,
    `Road Rescue: ${roleDemoLink("customer", "road-rescue")}`,
    `Photography & Videography: ${roleDemoLink("customer", "creative")}`,
    `NorthStar Creative Co.: ${roleDemoLink("customer", "northstar")}`,
    `Manufacturing + Nutraceuticals: ${roleDemoLink("customer", "manufacturing")}`,
    "",
    "Demo order:",
    "1. Open Perspective Demo and ask who they are: job poster, worker, or operator.",
    "2. If you only have a phone and one minute, open John Status, John Messages, Mike Worker proof, then Launch Status.",
    "3. Show their Profile Status so they understand where they stand.",
    "4. Show the core action: post/check job, browse/bid, or follow up/admin.",
    "5. End with one ask: post a job, join as a worker, request homebuilding review, request manufacturing help, request auto service, get Road Rescue help, book creative work, request NorthStar help, save career interest, or give one referral.",
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
    `Vehicle Seller Leads: ${(state.vehicles || []).length}`,
    `Auto Buyer Inquiries: ${(state.autoInquiries || []).length}`,
    `Auto Service Requests: ${(state.autoRequests || []).length}`,
    `Personal Driver Requests: ${(state.personalDriverRequests || []).length}`,
    `Merchant Service Leads: ${(state.merchantServiceLeads || []).length}`,
    `Local Product Vendors: ${(state.localProductVendors || []).length}`,
    `Manufacturing RFQs: ${(state.manufacturingRfqs || []).length}`,
    `Manufacturing Suppliers: ${(state.manufacturingSuppliers || []).length}`,
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

async function copyLaunchReceipt() {
  const rows = launchReceiptRows();
  const lines = [
    "Forge first-user launch receipt",
    "",
    "Use this after a controlled demo or first-user conversation.",
    "Decision: collect one clear next action, keep payments off, and follow up personally.",
    "",
    ...rows.flatMap((row) => [
      `${row.label}: ${row.title}`,
      `Proof: ${row.proof}`,
      `Collect: ${row.collect}`,
      `Saved in: ${row.savedIn}`,
      `Current metric: ${row.metric}`,
      ""
    ]),
    "Start links:",
    `Perspective Demo: ${roleDemoLink("customer", "perspective")}`,
    `John customer proof: ${roleDemoLink("customer", "status")}`,
    `Mike worker proof: ${roleDemoLink("worker", "worker")}`,
    `Autos lane: ${roleDemoLink("customer", "auto")}`,
    `Training & Careers: ${roleDemoLink("customer", "opportunities")}`,
    `Admin follow-up: ${roleDemoLink("admin", "admin")}`,
    "",
    "Do not broaden public traffic until lead delivery, production admin auth, backup, legal review, and final security review pass."
  ];
  await copyText(lines.join("\n"), "Launch receipt copied.");
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
    `Auto sellers, buyers, and service requests: ${((state.vehicles || []).length + (state.autoInquiries || []).length + (state.autoRequests || []).length)}/30`,
    `Driver, merchant, and local product leads: ${((state.personalDriverRequests || []).length + (state.personalDriverProviders || []).length + (state.merchantServiceLeads || []).length + (state.localProductVendors || []).length)}/25`,
    `Capital Desk leads: ${(state.flexLeads || []).length}/20`,
    `Manufacturing RFQs and suppliers: ${((state.manufacturingRfqs || []).length + (state.manufacturingSuppliers || []).length)}/30`,
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
    "6. Ask 3 people about vehicle selling, buying, service, inspection, detailing, customization, or transport.",
    "7. Ask 3 people about personal driver, merchant services, or local product/maker opportunities.",
    "8. Ask 3 business owners whether they need breathing room around cash flow, bill pay, vendor payments, employee cards, or working capital.",
    "9. Ask 3 founders, retailers, health stores, gyms, brands, suppliers, labs, formulators, packaging providers, or compliance consultants about manufacturing and nutraceutical opportunities.",
    "10. Ask 3 people about trade school, union, apprenticeship, or AI field work.",
    "11. Ask every interested person for one referral.",
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
    "8. Request manufacturing or supplier matching for supplements, vitamins, gummies, powders, beverages, skincare, pet wellness, packaging, labs, or compliance support.",
    "9. Save your training, union, apprenticeship, or AI field-job goal.",
    "10. Send me one person who needs jobs done, wants work, needs road help, needs a homebuilding path, has a project opportunity, needs Capital Desk, needs NorthStar, needs manufacturing help, or needs a career path.",
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
  const demoQuery = versionQuery(`demo=${encodeURIComponent(role)}`);
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
  if (isServiceVerticalJob(job)) {
    return `Hi ${job.customer || "there"}, this is Forge. I saw your ${job.title} request for ${job.serviceVerticalTitle || categoryLabel(job.category)} in ${job.location}. We are collecting local provider bids now. Can you confirm the scope, timing, access details, and whether your budget is still ${job.budget}?`;
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
  const tradeList = (worker.tradeCategories || worker.providerCategories || [worker.trade]).filter(Boolean).join(", ");
  if (isServiceVerticalProvider(worker)) {
    return `Hi ${worker.name}, this is Forge. Thanks for joining as a ${worker.providerType || worker.trade} for ${tradeList || worker.serviceVerticalTitle || worker.trade} in ${worker.area || worker.serviceArea}. Can you confirm your availability, service area, portfolio photos, insurance/licensing if applicable, and which jobs you want to bid on first?`;
  }
  return `Hi ${worker.name}, this is Forge. Thanks for joining the early provider list for ${tradeList || worker.trade} work. We help customers find local workers, crews, and businesses in ${worker.area || worker.serviceArea}. Are you available to build your profile and bid on paid jobs this week?`;
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
  lead = normalizeNorthStarLead(lead);
  const services = (lead.servicesNeeded || []).join(", ") || "marketing and operations help";
  return [
    `Hi ${lead.name || "there"}, this is North Star Creative Co. through Forge.`,
    `I saved your request for ${lead.businessName || "your business"} around ${lead.city || "your area"}.`,
    `You mentioned ${services} with a ${lead.budget || "not sure yet"} budget and a Forge Marketing Score of ${lead.score}/100.`,
    `Next step: scope the biggest problem (${lead.problem || "not provided"}) and the 30-90 day goal (${lead.goal || "not provided"}), then recommend the right website, branding, CRM, lead follow-up, job tracking, or operations package.`,
    "Can you confirm the best time to talk through it?"
  ].join(" ");
}

function northstarLeadLines(lead) {
  if (!lead) return ["No NorthStar lead selected."];
  lead = normalizeNorthStarLead(lead);
  return [
    "Forge North Star Creative Co. lead",
    `${lead.businessName} - ${lead.trade}`,
    `Lead category: ${lead.category || NORTHSTAR_CATEGORY_VALUE}`,
    `Operations category: ${lead.secondaryCategory || NORTHSTAR_OPERATIONS_CATEGORY_VALUE}`,
    `Lead classification: ${lead.leadClassification}`,
    `Urgency: ${lead.urgency}`,
    `Forge Marketing Score: ${lead.score}/100`,
    ...northstarMarketingScoreCategories.map(([key, label, max]) => `${label}: ${lead.marketingScore?.[key] ?? 0}/${max}`),
    `Owner/contact: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `City: ${lead.city || "Not provided"}`,
    `Business size: ${lead.businessSize || "Not provided"}`,
    `Marketing need: ${lead.marketingNeed || "Not provided"}`,
    `Service categories: ${(lead.serviceCategories || []).join(", ") || lead.trade || "Not provided"}`,
    `Service areas: ${lead.serviceAreas || "Not provided"}`,
    `Years in business: ${lead.yearsInBusiness || "Not provided"}`,
    `Employees: ${lead.numberOfEmployees || "Not provided"}`,
    `Crews: ${lead.numberOfCrews || "Not provided"}`,
    `Website: ${lead.website || "Not provided"}`,
    `Google Business profile: ${lead.googleBusinessUrl || "Not provided"}`,
    `Social: ${lead.social || "Not provided"}`,
    `Services needed: ${(lead.servicesNeeded || []).join(", ") || "Not provided"}`,
    `Budget: ${lead.budget || "Not provided"}`,
    `Current ad spend: ${lead.currentAdSpend || "Not provided"}`,
    `Current monthly lead volume: ${lead.currentMonthlyLeadVolume || "Not provided"}`,
    `Problem: ${lead.problem || "Not provided"}`,
    `Answers every call: ${lead.answerEveryCall || "Not provided"}`,
    `Has CRM: ${lead.hasCrm || "Not provided"}`,
    `Needs hiring/recruiting help: ${lead.hiringHelp || "Not provided"}`,
    `Residential/commercial: ${lead.residentialCommercial || "Not provided"}`,
    `Needs photos/videos: ${lead.needsPhotosVideos || "Not provided"}`,
    `Wants marketing audit: ${lead.wantsMarketingAudit || "Not provided"}`,
    `30-90 day goal: ${lead.goal || "Not provided"}`,
    `Status: ${lead.status || "New"}`,
    `Assigned owner: ${lead.assignedOwner || "North Star Intake"}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    `Consent captured: ${lead.consent ? "Yes" : "No"}`,
    `Admin notes: ${lead.adminNotes || "No admin notes saved."}`,
    "Route: North Star Creative Co. reviews marketing and operations needs, then scopes websites, branding, social, ads, CRM, lead follow-up, job tracking, or business-system support.",
    "Separation: North Star leads are tracked separately from normal Forge job requests.",
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
    "North Star Creative Co. brief",
    "",
    `Headline: ${NORTH_STAR_GROWTH_PAGE_TITLE}`,
    "Subheadline: Websites, Google Business, ads, photos/videos, CRM, lead follow-up, reviews, recruiting, and growth systems for blue-collar businesses.",
    `Positioning: ${NORTH_STAR_POSITIONING_COPY}`,
    `Primary category: ${NORTHSTAR_CATEGORY_VALUE}`,
    `Operations category: ${NORTHSTAR_OPERATIONS_CATEGORY_VALUE}`,
    "Lead classifications: Small Provider, Growth Client, Trade Pro Client, Enterprise Prospect, Urgent Follow-Up",
    "Forge Marketing Score: Website 0-20, Google Business 0-20, Reviews 0-20, Photos/videos 0-10, Lead response 0-10, Social proof 0-10, CRM/follow-up 0-10.",
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
    "Priority roofing vertical:",
    ...roofingMarketingServices.map((service) => `- ${service}`),
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
    "Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Flex handles eligibility, approval, onboarding, activation, and product support.",
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
    `Interested in Forge job leads: ${lead.interested_in_forge_job_leads ? "Yes" : "No"}`,
    `Interested in NorthStar marketing: ${lead.interested_in_north_star_marketing ? "Yes" : "No"}`,
    `Interested in payment processing: ${lead.interested_in_payment_processing ? "Yes" : "No"}`,
    `Interested in website / CRM / automation setup: ${lead.interested_in_website_crm_automation ? "Yes" : "No"}`,
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
      "Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Forge may refer eligible business owners to Flex through an approved partner/referral relationship. Flex products are subject to eligibility, approval, fees, terms, and conditions."
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
    "Subtitle: Forge Capital Desk helps contractors, service businesses, auto shops, transport companies, creatives, builders, and local operators discover modern business finance tools through our Flex referral channel.",
    "",
    "How it works:",
    "1. Tell Forge what your business needs.",
    "2. Forge checks whether you look like a fit.",
    "3. Forge sends you the official Flex referral link if appropriate.",
    "4. You apply directly with Flex.",
    "5. Flex handles approval, onboarding, activation, and product support.",
    "6. Forge can also help with job leads, marketing, websites, CRM, hiring, payment processing, and operations.",
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

function resumeRequestFromAcademyLead(lead) {
  return {
    id: `resume-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    sourceApp: "forge",
    leadType: "Forge Career+ Resume Request",
    fullName: lead.fullName,
    phone: lead.phone,
    email: lead.email,
    desiredTrade: lead.desiredTrade,
    city: lead.city,
    state: lead.state,
    currentExperience: lead.currentExperience,
    resumeText: "",
    status: "New Lead",
    priority: lead.priority || "Warm",
    consentToContact: lead.consentToContact,
    notes: lead.notes || "Created from Forge Academy career intake.",
    created: "Today"
  };
}

function resumeRequestFromTradePathwayLead(lead) {
  return {
    id: `resume-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    sourceApp: "admitly",
    leadType: "Admitly Resume / Career Request",
    fullName: lead.fullName,
    phone: lead.phone,
    email: lead.email,
    desiredTrade: lead.desiredTrade,
    city: lead.city,
    state: lead.state,
    currentExperience: lead.workExperience,
    resumeText: lead.resumeText,
    status: "New Lead",
    priority: lead.priority || "Warm",
    consentToContact: lead.consentToContact,
    notes: lead.notes || "Created from Admitly Trade Pathways intake.",
    created: "Today"
  };
}

function academyConfirmation(lead, title) {
  const isAdmitly = lead.sourceApp === "admitly";
  return {
    type: isAdmitly ? "admitly-trade-pathway" : "forge-academy",
    title,
    body: isAdmitly
      ? "Admitly saved this pathway request for application, scholarship, resume, and official program follow-up."
      : "Forge saved this career intake for training, apprenticeship, resume, and local job follow-up.",
    details: [
      `${lead.fullName} · ${lead.phone}`,
      `${lead.pathway || lead.desiredTrade || "Career pathway"} · ${lead.city || "Medford"}, ${lead.state || "OR"}`,
      `Status: ${lead.status} · Priority: ${lead.priority}`
    ],
    nextSteps: [
      "Admin confirms consent, goals, timeline, and basic eligibility",
      "Applicant uses official school, union, employer, apprenticeship, or program channels for submission",
      "Forge and Admitly do not collect IDs, SSNs, payment information, passwords, transcripts, or official documents in this MVP",
      "No admission, scholarship, licensure, job, union, or placement outcome is guaranteed"
    ],
    primary: { label: isAdmitly ? "Open Admitly" : "Open Academy", screen: isAdmitly ? "trade-pathways" : "forge-academy" },
    secondary: { label: "Open Admin", screen: "admin" }
  };
}

function academyLeadText(lead) {
  if (!lead) return "No Academy leads yet.";
  return [
    `Hi ${lead.fullName || "there"}, this is Forge and Admitly.`,
    `I saved your ${lead.pathway || lead.desiredTrade || "career pathway"} request.`,
    `Next step: confirm your goal, timeline, transportation, resume needs, and the official school, union, apprenticeship, employer, or program channel.`,
    "We do not guarantee admission, jobs, union acceptance, scholarships, financial aid, licensure, or placement, but we can help organize the next steps.",
    "What is the best time to talk?"
  ].join(" ");
}

function academyLeadLines(lead) {
  if (!lead) return ["No Academy lead selected."];
  return [
    `${lead.sourceApp === "admitly" ? "Admitly Trade Pathways" : "Forge Academy"} lead`,
    `${lead.fullName} - ${lead.pathway || lead.desiredTrade || "Career pathway"}`,
    `Lead type: ${lead.leadType || "Career intake"}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `City/state: ${lead.city || "Medford"}, ${lead.state || "OR"}`,
    lead.educationLevel ? `Education level: ${lead.educationLevel}` : `Current experience: ${lead.currentExperience || "Not provided"}`,
    lead.pathway ? `Pathway: ${lead.pathway}` : `Desired trade: ${lead.desiredTrade || "Not provided"}`,
    lead.desiredTrade ? `Desired trade/career: ${lead.desiredTrade}` : "",
    lead.timeline ? `Timeline: ${lead.timeline}` : "",
    lead.fundingNeed ? `Funding need: ${lead.fundingNeed}` : "",
    lead.hasTransportation ? `Transportation: ${lead.hasTransportation}` : "",
    lead.hasDriversLicense ? `Driver's license: ${lead.hasDriversLicense}` : "",
    lead.needsTraining ? `Needs training: ${lead.needsTraining}` : "",
    lead.needsJobNow ? `Needs job now: ${lead.needsJobNow}` : "",
    lead.needsResume ? `Needs resume: ${lead.needsResume}` : "",
    lead.interestedCareerPlus ? `Interested in Forge Career+: ${lead.interestedCareerPlus}` : "",
    lead.essayHelp ? `Essay help: ${lead.essayHelp}` : "",
    lead.scholarshipHelp ? `Scholarship help: ${lead.scholarshipHelp}` : "",
    lead.jobHelp ? `Job/apprenticeship help: ${lead.jobHelp}` : "",
    `Consent to contact: ${lead.consentToContact ? "Yes" : "No"}`,
    `Status: ${lead.status || "New Lead"}`,
    `Priority: ${lead.priority || "Warm"}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    "Boundary: no IDs, SSNs, payment info, passwords, transcripts, or official documents in the browser MVP.",
    "No guarantee: admission, employment, union acceptance, licensure, scholarship approval, financial aid, or placement is not guaranteed."
  ].filter(Boolean);
}

function academyEmployerLines(lead) {
  if (!lead) return ["No employer partner selected."];
  return [
    "Forge Academy employer training partner",
    `${lead.businessName} - ${lead.tradeCategory || "Trade category pending"}`,
    `Contact: ${lead.contactName || "Not provided"}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `Hiring needs: ${lead.hiringNeeds || "Not provided"}`,
    `Apprenticeship availability: ${lead.apprenticeshipAvailability || "Not provided"}`,
    `Willing to train: ${lead.willingToTrain || "Not provided"}`,
    `Insurance/license notes: ${lead.insuranceLicense || "Not provided"}`,
    `Status: ${lead.status || "New Lead"}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    "Partner boundary: verify license, insurance, pay, safety requirements, and written partner terms before routing people."
  ];
}

function academySchoolLines(lead) {
  if (!lead) return ["No school/program partner selected."];
  return [
    "Admitly / Forge Academy school partner",
    `${lead.schoolName} - ${lead.programTypes || "Programs pending"}`,
    `Contact: ${lead.contactName || "Not provided"}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `Location: ${lead.location || "Not provided"}`,
    `Cost range: ${lead.costRange || "Not provided"}`,
    `Financial aid available: ${lead.financialAidAvailable || "Unknown"}`,
    `Enrollment deadlines: ${lead.enrollmentDeadlines || "Not provided"}`,
    `Status: ${lead.status || "New Lead"}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    "School boundary: verify accreditation, tuition, financial aid, outcomes, licensure fit, and official deadlines before recommending."
  ];
}

function resumeRequestLines(lead) {
  if (!lead) return ["No resume request selected."];
  return [
    lead.leadType || "Forge Career+ resume request",
    `${lead.fullName} - ${lead.desiredTrade || "Career path pending"}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "Email: Not provided",
    `Location: ${lead.city || "Medford"}, ${lead.state || "OR"}`,
    `Experience: ${lead.currentExperience || "Not provided"}`,
    `Resume text: ${lead.resumeText || "Not provided"}`,
    `Status: ${lead.status || "New Lead"}`,
    `Priority: ${lead.priority || "Warm"}`,
    `Consent to contact: ${lead.consentToContact ? "Yes" : "No"}`,
    `Notes: ${lead.notes || "No notes saved."}`,
    "Career+ placeholder: pricing, secure uploads, and paid features are not live yet."
  ];
}

function copyAcademyLead(id) {
  const lead = (state.forgeAcademyLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(academyLeadLines(lead).join("\n"), "Forge Academy lead copied.");
}

function copyTradePathwayLead(id) {
  const lead = (state.tradePathwayLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(academyLeadLines(lead).join("\n"), "Admitly Trade Pathways lead copied.");
}

function copyAcademyEmployer(id) {
  const lead = (state.employerTrainingPartners || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(academyEmployerLines(lead).join("\n"), "Academy employer partner copied.");
}

function copyAcademySchool(id) {
  const lead = (state.schoolPartners || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(academySchoolLines(lead).join("\n"), "Academy school partner copied.");
}

function copyResumeRequest(id) {
  const lead = (state.resumeRequests || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(resumeRequestLines(lead).join("\n"), "Resume request copied.");
}

function copyAcademyBrief() {
  const lines = [
    "Forge Academy brief",
    "",
    "Forge Academy helps local workers build blue-collar career pathways through trade-school help, apprenticeship planning, union pathway prep, resumes, and local job placement support.",
    "Powered by Admitly: Admitly remains the education, admissions, scholarship, essay, school planning, and application platform.",
    "",
    "Tracks:",
    ...academyOptions.map((option) => `- ${option}: ${academyOptionCopy(option)}`),
    "",
    "Forge Career+: paid placeholder for AI resume, AI cover letter, application help, scholarships/grants, interview prep, priority profile, priority job alerts, and career dashboard.",
    "",
    `Forge Academy: ${roleDemoLink("customer", "forge-academy")}`,
    `Admitly Trade Pathways: ${roleDemoLink("customer", "trade-pathways")}`,
    "",
    "Safety: no admission, employment, union, scholarship, financial aid, licensure, or placement guarantees. Verify official requirements. Do not collect IDs, SSNs, transcripts, payment info, passwords, or official documents in this MVP."
  ];
  copyText(lines.join("\n"), "Academy brief copied.");
}

function copyAcademyAdminQueue() {
  const lines = [
    "Forge Academy / Admitly Trade Pathways admin queue",
    "",
    `Forge Academy leads: ${(state.forgeAcademyLeads || []).length}`,
    `Admitly Trade Pathways leads: ${(state.tradePathwayLeads || []).length}`,
    `Employer partners: ${(state.employerTrainingPartners || []).length}`,
    `School partners: ${(state.schoolPartners || []).length}`,
    `Resume requests: ${(state.resumeRequests || []).length}`,
    "",
    "Forge Academy leads",
    ...(state.forgeAcademyLeads || []).flatMap((lead) => [...academyLeadLines(lead), ""]),
    "Admitly Trade Pathways leads",
    ...(state.tradePathwayLeads || []).flatMap((lead) => [...academyLeadLines(lead), ""]),
    "Employer partners",
    ...(state.employerTrainingPartners || []).flatMap((lead) => [...academyEmployerLines(lead), ""]),
    "School partners",
    ...(state.schoolPartners || []).flatMap((lead) => [...academySchoolLines(lead), ""]),
    "Resume requests",
    ...(state.resumeRequests || []).flatMap((lead) => [...resumeRequestLines(lead), ""])
  ];
  copyText(lines.join("\n"), "Academy admin queue copied.");
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

function startAutoPath(path) {
  const card = autoTransportServiceCards.find((item) => item.formTarget === path || item.title === path);
  if (!card) return;
  if (card.action === "focus-vehicle-listing") {
    setFieldValue("#vehicleSellingPath", card.formTarget);
    focusAutoPanel("#vehicleListingForm", "#vehicleYear");
    showToast(`${card.title} form ready.`);
    return;
  }
  setFieldValue("#autoServiceNeeded", card.formTarget);
  focusAutoPanel("#autoRequestSection", "#autoFullName");
  showToast(`${card.title} request ready.`);
}

function copyAutoTransportMenu() {
  const lines = [
    "Forge Auto & Transport menu",
    "",
    ...autoTransportServiceCards.flatMap((card) => [
      `${card.title} [${card.tag}]`,
      card.body,
      ""
    ]),
    "Public premium brand: Forge Platinum Auto Concierge.",
    "Internal rule: private partner names, company names, branding, logos, photos, and service claims stay out of public copy unless written approval and admin branding permission are confirmed."
  ];
  copyText(lines.join("\n"), "Auto & Transport menu copied.");
}

function vehicleAdminLines(vehicle) {
  return [
    "Forge vehicle seller lead",
    `${vehicleTitle(vehicle)} ${vehicle.trim || ""}`.trim(),
    `Seller: ${vehicle.seller || "Not provided"}`,
    `Phone: ${vehicle.phone || "Not provided"}`,
    vehicle.email ? `Email: ${vehicle.email}` : "Email: Not provided",
    `Preferred contact: ${vehicle.preferredContact || "Text"}`,
    `Location: ${vehicle.location || "Not provided"}`,
    `Asking price: ${vehicle.price || "Not provided"}`,
    `Lowest acceptable price (private): ${vehicle.privateLowestPrice || "Not provided"}`,
    `Mileage: ${vehicle.mileage || "Not provided"}`,
    `Condition: ${vehicle.condition || "Not provided"}`,
    `Title status: ${vehicle.titleStatus || "Not provided"}`,
    `Loan/lien: ${vehicle.loanLien || "Not provided"}`,
    `Payoff: ${vehicle.payoffAmount || "Not provided"}`,
    `Route: ${vehicle.route || vehicleLeadRoute(vehicle)}`,
    `Assigned partner path: ${vehicle.assignedPartner || vehicleAssignedPartner(vehicle)}`,
    `Tags: ${(vehicle.tags || vehicleLeadTags(vehicle)).join(", ")}`,
    `Score: ${vehicle.leadScore || vehicleLeadScore(vehicle)}`,
    `Notes: ${vehicle.description || "No description saved."}`,
    `Mechanical: ${vehicle.mechanicalIssues || "Not provided"}`,
    `Cosmetic: ${vehicle.cosmeticIssues || "Not provided"}`,
    `Photo notes: ${vehicle.photoNotes || "Not provided"}`,
    "Privacy: VIN, payoff, lowest price, private partner routing, and admin notes stay internal."
  ];
}

function copyAutoAdminSummary() {
  const vehicles = state.vehicles || [];
  const platinumPartner = autoPartnerById("marc-portland-luxury-auto-partner");
  const lines = [
    "Forge Auto Admin Summary",
    "",
    `Vehicle seller leads: ${vehicles.length}`,
    `Platinum leads: ${vehicles.filter((vehicle) => (vehicle.tags || []).includes("luxury_or_exotic") || vehicle.assignedPartner === "Forge Platinum Auto Concierge").length}`,
    `Auction leads: ${vehicles.filter((vehicle) => (vehicle.tags || []).includes("auction_sourcing")).length}`,
    "",
    "Customer-facing premium brand: Forge Platinum Auto Concierge",
    `Internal partner note: ${platinumPartner?.adminDescription || "Keep private partner records internal."}`,
    "",
    ...vehicles.flatMap((vehicle) => [...vehicleAdminLines(vehicle), ""])
  ];
  copyText(lines.join("\n"), "Auto admin summary copied.");
}

function operationsVaultDocLines(doc) {
  return [
    `${doc.title}`,
    `Category: ${doc.category}`,
    `Type: ${doc.type}`,
    `Owner: ${doc.owner}`,
    `Status: ${doc.status}`,
    `Version: ${doc.version}`,
    `Last reviewed: ${doc.reviewed}`,
    "",
    "Checklist:",
    ...doc.checklist.map((item) => `- ${item}`),
    "",
    "Template / SOP body:",
    doc.body,
    "",
    doc.type.includes("requires attorney review") ? "Template - requires attorney review before use." : "Internal Forge operations document."
  ];
}

function copyOperationsVaultDoc(docId) {
  const doc = operationsVaultDocuments.find((item) => item.id === docId);
  if (!doc) return;
  copyText(operationsVaultDocLines(doc).join("\n"), "Operations document copied.");
}

function copyOperationsVaultIndex() {
  const lines = [
    "Forge Operations Vault Index",
    "",
    ...operationsVaultDocuments.map((doc) => `${doc.category} - ${doc.title} (${doc.type}, ${doc.status})`),
    "",
    "Legal / contract templates are drafts and require attorney review before use."
  ];
  copyText(lines.join("\n"), "Operations Vault index copied.");
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

function copyDetailHandoff(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  const bids = state.bids.filter((bid) => bid.jobId === job.id);
  const chosenBid = bids.find((bid) => bid.chosen);
  const bestBid = chosenBid || bids[0];
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const rows = jobDetailHandoffRows(job, bids, chosenBid, bestBid, hasMessage);
  const lines = [
    "Forge job detail handoff",
    "",
    `${job.title} - ${job.customer || "Customer"}`,
    `Status: ${job.status}`,
    `Bids: ${bids.length}`,
    chosenBid ? `Selected bid: ${chosenBid.worker} at ${chosenBid.amount}` : bestBid ? `Next bid to review: ${bestBid.worker} at ${bestBid.amount}` : "Next bid to review: none yet",
    `Message thread: ${hasMessage ? "ready" : "pending"}`,
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    chosenBid ? bidHandoffText(job, chosenBid) : "Next action: choose the best bid from Job Detail, then open the message thread and status page.",
    `Open detail: ${roleDemoLink("customer", "detail")}`,
    `Open status: ${roleDemoLink("customer", "status")}`
  ];
  copyText(lines.join("\n"), "Detail handoff copied.");
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

function copyStatusHandoff(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  const bids = state.bids.filter((bid) => bid.jobId === job.id);
  const chosen = bids.find((bid) => bid.chosen);
  const bestBid = chosen || bids[0];
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const rows = customerStatusHandoffRows(job, bids, chosen, bestBid, hasMessage);
  const lines = [
    "Forge customer status handoff",
    "",
    `${job.title} - ${job.customer || "Customer"}`,
    `Status: ${job.status}`,
    `Bids: ${bids.length}`,
    chosen ? `Selected: ${chosen.worker} at ${chosen.amount}` : bestBid ? `Best next bid: ${bestBid.worker} at ${bestBid.amount}` : "Selected: none yet",
    `Message thread: ${hasMessage ? "ready" : "pending"}`,
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    chosen ? bidHandoffText(job, chosen) : "Next action: open Job Detail, choose a bid, then use Messages for schedule and arrival details.",
    `Open status: ${roleDemoLink("customer", "status")}`
  ];
  copyText(lines.join("\n"), "Status handoff copied.");
}

function copyStatusProofSummary(jobId) {
  const job = state.jobs.find((item) => item.id === jobId);
  if (!job) return;
  const bids = state.bids.filter((bid) => bid.jobId === job.id);
  const chosen = bids.find((bid) => bid.chosen);
  const bestBid = chosen || bids[0];
  const hasMessage = state.messages.some((message) => message.threadId === `job-${job.id}`);
  const rows = statusProofSummaryRows(job, bids, chosen, bestBid, hasMessage);
  const lines = [
    "Forge customer status proof",
    "",
    `${job.title} - ${job.customer || "Customer"}`,
    `Status: ${job.status}`,
    `Bids: ${bids.length}`,
    chosen ? `Selected bid: ${chosen.worker} at ${chosen.amount}` : bestBid ? `Suggested next bid: ${bestBid.worker} at ${bestBid.amount}` : "Suggested next bid: none yet",
    `Message thread: ${hasMessage ? "ready" : "pending"}`,
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    chosen ? bidHandoffText(job, chosen) : bids.length ? "Next action: choose the suggested bid to create the customer message handoff." : "Next action: get the first worker bid so the proof path can move forward.",
    `Open status: ${roleDemoLink("customer", "status")}`,
    `Open messages: ${roleDemoLink("customer", "messages")}`
  ];
  copyText(lines.join("\n"), "Status proof copied.");
}

function copyMessageHandoff(threadId = state.activeMessageThreadId) {
  const thread = getMessageThreads().find((item) => item.id === threadId);
  if (!thread) return;
  const related = messageContext(thread);
  const rows = messageHandoffRows(thread, related);
  const lines = [
    "Forge message handoff closeout",
    "",
    `${thread.title} - ${thread.kind}`,
    `To: ${thread.to || "Contact"}`,
    `Next: ${related.next}`,
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    "Draft:",
    thread.draft,
    "",
    related.jobId ? `Open detail: ${roleDemoLink("customer", "detail")}` : related.screen ? `Open related screen: ${roleDemoLink("admin", related.screen)}` : ""
  ].filter(Boolean);
  copyText(lines.join("\n"), "Message handoff copied.");
}

function copyMessageProof(threadId = state.activeMessageThreadId) {
  const thread = getMessageThreads().find((item) => item.id === threadId);
  if (!thread) return;
  const related = messageContext(thread);
  const lines = [
    "Forge message proof",
    "",
    `${thread.title} - ${thread.kind}`,
    `Next step: ${related.next}`,
    "",
    messageProofReceiptTitle(thread, related),
    messageProofReceiptText(thread, related),
    "",
    related.jobId ? `Open status: ${roleDemoLink("customer", "status")}` : "",
    related.jobId ? `Open detail: ${roleDemoLink("customer", "detail")}` : "",
    related.screen ? `Open related screen: ${roleDemoLink("admin", related.screen)}` : ""
  ].filter(Boolean);
  copyText(lines.join("\n"), "Message proof copied.");
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

function manufacturingRfqLines(lead) {
  const normalized = normalizeManufacturingRfq(lead);
  return [
    `${normalized.brandName || "Manufacturing RFQ"} - ${normalized.productType}`,
    `Status: ${normalized.status}`,
    `Customer / company: ${normalized.customerCompanyName || "Not listed"}`,
    `Contact: ${normalized.contactName} · ${normalized.contactPhone} · ${normalized.contactEmail}`,
    `Product idea: ${normalized.productIdea || "Not listed"}`,
    `Formula status: ${normalized.formulaStatus}`,
    `Dosage form: ${normalized.dosageForm}`,
    `Ingredients requested: ${normalized.ingredientsRequested || "Not listed"}`,
    `Ingredients to avoid: ${normalized.ingredientsToAvoid || "Not listed"}`,
    `Flavor preferences: ${normalized.flavorPreferences || "Not listed"}`,
    `Sweetener preferences: ${normalized.sweetenerPreferences || "Not listed"}`,
    `Serving size: ${normalized.servingSize || "Not listed"}`,
    `Servings per container: ${normalized.servingsPerContainer || "Not listed"}`,
    `Target retail price: ${normalized.targetRetailPrice || "Not listed"}`,
    `Target customer: ${normalized.targetCustomer || "Not listed"}`,
    `Estimated first order quantity: ${normalized.estimatedFirstOrderQuantity || "Not listed"}`,
    `Desired MOQ: ${normalized.desiredMoq || "Not listed"}`,
    `Target quantity / MOQ: ${normalized.targetQuantity}`,
    `Packaging: ${normalized.desiredPackaging}`,
    `Ingredient requirements: ${normalized.ingredientRequirements}`,
    `Clean-label requirements: ${(normalized.cleanLabelRequirements || []).join(", ") || "None listed"}`,
    `CBD/hemp involved: ${normalized.cbdHemp}`,
    `Label design needed: ${normalized.labelDesignNeeded}`,
    `Compliance review needed: ${normalized.complianceReviewNeeded}`,
    `Testing needs: ${normalized.testingNeeds || "Not listed"}`,
    `Certifications: ${(normalized.certificationsRequired || []).join(", ") || "Not listed"}`,
    `Fulfillment needed: ${normalized.fulfillmentNeeded}`,
    `Dropshipping needed: ${normalized.dropshippingNeeded}`,
    `Target launch date: ${normalized.targetLaunchDate || "Not listed"}`,
    `Budget range: ${normalized.budgetRange}`,
    `Location preference: ${normalized.locationPreference}`,
    `Upload: ${normalized.specUpload || "0 files selected"}`,
    `Reference uploads: ${normalized.labelUpload || "0 files selected"}`,
    `Compliance uploads: ${normalized.packagingReferenceUpload || "0 files selected"}`,
    `Notes: ${normalized.notes || "None"}`,
    `Compliance: ${MANUFACTURING_COMPLIANCE_COPY}`
  ];
}

function manufacturingSupplierLines(supplier) {
  const normalized = normalizeManufacturingSupplier(supplier);
  return [
    `${normalized.companyName} - ${normalized.supplierType}`,
    `Status: ${normalized.status}`,
    `Verified by Forge: ${normalized.verifiedByForge || "Placeholder only"}`,
    `Contact: ${normalized.contactPerson} · ${normalized.phoneEmail}`,
    `Location: ${normalized.location}`,
    `Service area: ${normalized.serviceArea}`,
    `Ships nationwide: ${normalized.shipsNationwide}`,
    `Products manufactured: ${normalized.productsManufactured || "Not listed"}`,
    `Capabilities: ${normalized.capabilities}`,
    `Product categories: ${(normalized.productCategories || []).join(", ") || "Not listed"}`,
    `Dosage forms: ${(normalized.dosageForms || []).join(", ") || "Not listed"}`,
    `MOQ: ${normalized.minimumOrderQuantity}`,
    `Estimated lead time: ${normalized.estimatedLeadTime || normalized.turnaroundTime || "Not listed"}`,
    `Starting project budget: ${normalized.startingProjectBudget || "Not listed"}`,
    `Certifications: ${(normalized.certifications || []).join(", ") || "Not listed"}`,
    `Testing offered: ${(normalized.testingOffered || []).join(", ") || "Not listed"}`,
    `Current capacity: ${normalized.currentCapacity || "Not listed"}`,
    `Accepting new clients: ${normalized.acceptingNewClients}`,
    `Sample development: ${normalized.sampleDevelopmentSupport ? "yes" : "no"}`,
    `NDA available: ${normalized.ndaAvailable ? "yes" : "no"}`,
    `Insurance: ${normalized.insurance}`,
    `Facility type: ${normalized.facilityType}`,
    `Turnaround: ${normalized.turnaroundTime}`,
    `Packaging: ${normalized.packagingOptions}`,
    `Support: ingredient sourcing ${normalized.ingredientSourcingSupport ? "yes" : "no"}, formulation ${normalized.formulationSupport ? "yes" : "no"}, custom formulation ${normalized.customFormulationSupport ? "yes" : "no"}, flavoring ${normalized.flavoringSupport ? "yes" : "no"}, packaging ${normalized.packagingSupport ? "yes" : "no"}, label design ${normalized.labelDesignSupport ? "yes" : "no"}, testing ${normalized.testingLabSupport ? "yes" : "no"}, compliance ${normalized.complianceSupport ? "yes" : "no"}, private-label ${normalized.privateLabelSupport ? "yes" : "no"}, white-label catalog ${normalized.whiteLabelCatalogSupport ? "yes" : "no"}, fulfillment ${normalized.fulfillmentSupport ? "yes" : "no"}`,
    `Website: ${normalized.website || "Not listed"}`,
    `Source: ${normalized.source}`,
    `Source URL: ${normalized.sourceUrl || "Not listed"}`,
    `Outreach status: ${normalized.outreachStatus}`,
    `Last contacted: ${normalized.lastContacted || "Not listed"}`,
    `Next follow-up: ${normalized.nextFollowUpDate || "Not listed"}`,
    `Relationship owner: ${normalized.relationshipOwner || "Not listed"}`,
    `Bio: ${normalized.bio || "Not listed"}`,
    `Notes: ${normalized.notes || "None"}`,
    "Directory boundary: Supplier profiles must be original, company-created, or company-approved. Do not copy external supplier directory data."
  ];
}

function manufacturingSupplierLeadLines(lead) {
  const normalized = normalizeManufacturingSupplierLead(lead);
  return [
    `${normalized.companyName} - ${normalized.supplierCategory}`,
    `Outreach status: ${normalized.outreachStatus}`,
    `Contact: ${normalized.contactName || "Not listed"} · ${normalized.phone || "No phone"} · ${normalized.email || "No email"}`,
    `Website: ${normalized.website || "Not listed"}`,
    `Location: ${[normalized.city, normalized.state, normalized.country].filter(Boolean).join(", ") || "Not listed"}`,
    `Capabilities: ${normalized.capabilities || "Not listed"}`,
    `Certifications: ${normalized.certifications || "Not listed"}`,
    `Product types: ${normalized.productTypes || "Not listed"}`,
    `MOQ: ${normalized.moq || "Not listed"}`,
    `Lead time: ${normalized.leadTime || "Not listed"}`,
    `Source: ${normalized.source}`,
    `Source URL: ${normalized.sourceUrl || "Not listed"}`,
    `Date discovered: ${normalized.dateDiscovered || "Not listed"}`,
    `Added by: ${normalized.addedBy || "Not listed"}`,
    `Last contacted: ${normalized.lastContacted || "Not contacted"}`,
    `Next follow-up: ${normalized.nextFollowUpDate || "Not scheduled"}`,
    `Potential value: ${normalized.potentialOpportunityValue || "Not listed"}`,
    `Related Forge vertical: ${normalized.relatedForgeVertical}`,
    `Tags: ${normalized.tags || "None"}`,
    `Notes: ${normalized.notes || "None"}`,
    `Follow-up notes: ${normalized.followUpNotes || "None"}`,
    `Source boundary: ${MANUFACTURING_IMPORT_PERMISSION_COPY}`
  ];
}

function manufacturingRfqText(lead) {
  return manufacturingRfqLines(lead).join("\n");
}

function manufacturingSupplierText(supplier) {
  return manufacturingSupplierLines(supplier).join("\n");
}

function manufacturingSupplierLeadText(lead) {
  return manufacturingSupplierLeadLines(lead).join("\n");
}

function manufacturingSupplierLeadOutreachText(lead) {
  const normalized = normalizeManufacturingSupplierLead(lead);
  return MANUFACTURING_OUTREACH_TEMPLATE.replaceAll("{{companyName}}", normalized.companyName || "there");
}

function manufacturingSupplierPhone(supplier) {
  const value = String(supplier?.phoneEmail || "");
  return value.includes("@") ? "" : value;
}

function manufacturingSupplierEmail(supplier) {
  const value = String(supplier?.phoneEmail || "");
  const match = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match?.[0] || "";
}

function copyManufacturingRfq(id) {
  const lead = (state.manufacturingRfqs || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(manufacturingRfqLines(lead).join("\n"), "Manufacturing RFQ copied.");
}

function copyManufacturingSupplier(id) {
  const supplier = (state.manufacturingSuppliers || []).find((item) => item.id === id);
  if (!supplier) return;
  copyText(manufacturingSupplierLines(supplier).join("\n"), "Manufacturing supplier copied.");
}

function copyManufacturingSupplierLead(id) {
  const lead = (state.manufacturingSupplierLeads || []).find((item) => item.id === id);
  if (!lead) return;
  copyText(manufacturingSupplierLeadText(lead), "Supplier lead copied.");
}

function copyManufacturingOutreachTemplate() {
  copyText(MANUFACTURING_OUTREACH_TEMPLATE, "Manufacturing outreach template copied.");
}

function viewManufacturingSupplierLead(id) {
  state.activeManufacturingSupplierLeadId = id;
  saveState();
  renderManufacturingPage();
  focusAutoPanel("#manufacturingLeadSourceCrm", "#manufacturingSupplierCsvInput");
}

function inviteManufacturingSupplierLead(id) {
  const lead = (state.manufacturingSupplierLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.outreachStatus = "Invited to Join Forge";
  lead.lastContacted = lead.lastContacted || "Today";
  lead.followUpNotes = lead.followUpNotes || "Invitation sent with Forge manufacturing partnership template.";
  state.activeManufacturingSupplierLeadId = lead.id;
  addActivity(`Supplier lead invited to Forge: ${lead.companyName}.`);
  saveState();
  render();
  showToast("Supplier invite tracked.");
}

function convertManufacturingSupplierLead(id) {
  const lead = normalizeManufacturingSupplierLead((state.manufacturingSupplierLeads || []).find((item) => item.id === id));
  if (!lead.companyName) return;
  const existing = (state.manufacturingSuppliers || []).find((supplier) => samePerson(supplier.companyName, lead.companyName));
  const supplier = normalizeManufacturingSupplier({
    id: existing?.id || `manufacturing-supplier-${Date.now()}`,
    companyName: lead.companyName,
    contactPerson: lead.contactName,
    location: [lead.city, lead.state, lead.country].filter(Boolean).join(", "),
    serviceArea: lead.country || "United States",
    supplierType: lead.supplierCategory || "Supplement Manufacturer",
    capabilities: lead.capabilities,
    productCategories: String(lead.productTypes || "").split(",").map((item) => item.trim()).filter(Boolean),
    dosageForms: inferDosageFormsFromText(`${lead.productTypes} ${lead.capabilities}`),
    minimumOrderQuantity: lead.moq,
    certifications: String(lead.certifications || "").split(",").map((item) => item.trim()).filter(Boolean),
    facilityType: lead.certifications,
    turnaroundTime: lead.leadTime,
    estimatedLeadTime: lead.leadTime,
    packagingOptions: lead.productTypes,
    website: lead.website,
    phoneEmail: lead.email || lead.phone,
    source: lead.source,
    sourceUrl: lead.sourceUrl,
    sourceNotes: lead.notes,
    dateAdded: "Today",
    outreachStatus: lead.outreachStatus,
    lastContacted: lead.lastContacted,
    nextFollowUpDate: lead.nextFollowUpDate,
    relationshipOwner: lead.addedBy,
    notes: `${lead.notes || ""}\nConverted from supplier lead CRM. ${MANUFACTURING_IMPORT_PERMISSION_COPY}`.trim(),
    verifiedByForge: "Placeholder only",
    status: "Needs Review"
  });
  if (existing) {
    Object.assign(existing, supplier);
  } else {
    state.manufacturingSuppliers.unshift(supplier);
  }
  const original = (state.manufacturingSupplierLeads || []).find((item) => item.id === id);
  if (original) original.outreachStatus = "Converted to Provider Profile";
  addActivity(`Supplier lead converted to provider profile: ${supplier.companyName}.`);
  saveState();
  render();
  showToast("Supplier profile created from lead.");
}

function createManufacturingOpportunityFromLead(id) {
  const lead = normalizeManufacturingSupplierLead((state.manufacturingSupplierLeads || []).find((item) => item.id === id));
  if (!lead.companyName) return;
  const rfq = normalizeManufacturingRfq({
    id: `manufacturing-rfq-${Date.now()}`,
    customerCompanyName: "Forge internal sourcing",
    productIdea: `${lead.supplierCategory} opportunity`,
    productType: lead.productTypes || "Supplement Manufacturing",
    brandName: `${lead.companyName} sourcing opportunity`,
    formulaStatus: "Need white label product",
    dosageForm: inferDosageFormsFromText(`${lead.productTypes} ${lead.capabilities}`)[0] || "Other",
    targetQuantity: lead.moq || "MOQ pending",
    desiredMoq: lead.moq,
    desiredPackaging: "To be confirmed",
    ingredientRequirements: lead.capabilities,
    testingNeeds: lead.certifications,
    targetLaunchDate: "",
    budgetRange: lead.potentialOpportunityValue || "Not sure yet",
    locationPreference: [lead.city, lead.state, lead.country].filter(Boolean).join(", "),
    contactName: lead.contactName,
    contactEmail: lead.email,
    contactPhone: lead.phone,
    status: "Sourcing manufacturers",
    created: "Today",
    notes: `Created from supplier lead CRM for ${lead.companyName}. ${MANUFACTURING_IMPORT_PERMISSION_COPY}`
  });
  state.manufacturingRfqs.unshift(rfq);
  const original = (state.manufacturingSupplierLeads || []).find((item) => item.id === id);
  if (original) original.outreachStatus = "Manufacturing Opportunity Created";
  addActivity(`Manufacturing opportunity created from supplier lead: ${lead.companyName}.`);
  saveState();
  render();
  showToast("Manufacturing opportunity created.");
}

function createManufacturingFollowUpTask(id) {
  const lead = (state.manufacturingSupplierLeads || []).find((item) => item.id === id);
  if (!lead) return;
  lead.outreachStatus = "Follow-up needed";
  lead.nextFollowUpDate = lead.nextFollowUpDate || "Today";
  lead.followUpNotes = lead.followUpNotes || "Follow up on capabilities, MOQ, certifications, and Forge onboarding interest.";
  state.activeManufacturingSupplierLeadId = lead.id;
  addActivity(`Follow-up task created for supplier lead: ${lead.companyName}.`);
  saveState();
  render();
  showToast("Follow-up task created.");
}

function inferDosageFormsFromText(value) {
  const text = normalizeLookup(value);
  return manufacturingDosageForms.filter((form) => text.includes(normalizeLookup(form))).slice(0, 4);
}

function copyManufacturingQueue() {
  const rfqs = state.manufacturingRfqs || [];
  const suppliers = state.manufacturingSuppliers || [];
  const supplierLeads = state.manufacturingSupplierLeads || [];
  const lines = [
    "Forge Manufacturing + Nutraceuticals queue",
    "",
    `RFQs: ${rfqs.length}`,
    `Supplier profiles: ${suppliers.length}`,
    `Supplier leads: ${supplierLeads.length}`,
    "",
    "RFQs:",
    ...(rfqs.length ? rfqs.flatMap((lead) => [...manufacturingRfqLines(lead), ""]) : ["No RFQs yet.", ""]),
    "Suppliers:",
    ...(suppliers.length ? suppliers.flatMap((supplier) => [...manufacturingSupplierLines(supplier), ""]) : ["No supplier profiles yet.", ""]),
    "Supplier leads:",
    ...(supplierLeads.length ? supplierLeads.flatMap((lead) => [...manufacturingSupplierLeadLines(lead), ""]) : ["No supplier leads yet.", ""]),
    "Thomasnet boundary:",
    MANUFACTURING_DIRECTORY_BOUNDARY_COPY
  ];
  copyText(lines.join("\n"), "Manufacturing queue copied.");
}

function copyManufacturingBrief() {
  const lines = [
    "Forge Manufacturing + Nutraceuticals brief",
    "",
    "Forge Manufacturing + Nutraceuticals helps founders, health brands, retailers, wellness companies, gyms, creators, and local entrepreneurs find trusted partners to manufacture vitamins, supplements, gummies, chews, powders, beverages, skincare, pet wellness products, and other compliant health products.",
    "",
    "Core paths:",
    "1. Find a Manufacturer",
    "2. Create Supplier Profile",
    "3. Request Manufacturing Quote",
    "4. Compare Suppliers",
    "5. Join Forge Manufacturing Network",
    "6. Track lawful supplier leads and outreach",
    "7. Import only supplier CSVs the user has permission to use",
    "",
    "Supplier types:",
    ...manufacturingSupplierTypes.map((type) => `- ${type}`),
    "",
    "Documents:",
    ...manufacturingDocumentTemplates.map((title) => `- ${title}`),
    "",
    "Lead sources:",
    ...manufacturingSupplierLeadSources.map((source) => `- ${source}`),
    "",
    "Outreach template:",
    MANUFACTURING_OUTREACH_TEMPLATE,
    "",
    "Boundary:",
    MANUFACTURING_DIRECTORY_BOUNDARY_COPY,
    "",
    "Compliance:",
    MANUFACTURING_COMPLIANCE_COPY
  ];
  copyText(lines.join("\n"), "Manufacturing brief copied.");
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
  const order = ["New", "Needs Review", "Contacted", "Audit Scheduled", "Proposal Needed", "Proposal Sent", "Won"];
  const index = order.indexOf(lead.status);
  lead.status = index >= 0 ? order[Math.min(index + 1, order.length - 1)] : "Needs Review";
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
  markFlexStatus(id, "contacted");
}

function markFlexStatus(id, status) {
  const lead = (state.flexLeads || []).find((item) => item.id === id);
  if (!lead || !flexLeadStatuses.includes(status)) return;
  lead.status = status;
  lead.updated_at = "Today";
  if (status === "flex_link_sent" && !lead.flex_referral_url_sent) lead.flex_referral_url_sent = flexReferralUrl();
  addActivity(`Flex lead status changed: ${lead.business_name} -> ${flexStatusLabel(status)}.`);
  saveState();
  render();
  showToast(`Flex lead marked ${flexStatusLabel(status)}.`);
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

function markManufacturingContacted(id) {
  const lead = (state.manufacturingRfqs || []).find((item) => item.id === id);
  if (!lead) return;
  lead.status = "Sourcing manufacturers";
  addActivity(`Manufacturing RFQ moved to sourcing: ${lead.brandName || lead.productType}.`);
  saveState();
  render();
  showToast("Manufacturing RFQ marked Sourcing manufacturers.");
}

function moveManufacturingForward(id) {
  const lead = (state.manufacturingRfqs || []).find((item) => item.id === id);
  if (!lead) return;
  const order = ["Request received", "Sourcing manufacturers", "Awaiting bids", "Sampling", "Formulation", "Production quote", "Manufacturing selected", "In production", "Testing", "Packaging", "Ready to ship", "Completed"];
  const current = manufacturingLegacyStatusMap[lead.status] || lead.status;
  const index = order.indexOf(current);
  lead.status = index >= 0 ? order[Math.min(index + 1, order.length - 1)] : "Sourcing manufacturers";
  addActivity(`Manufacturing RFQ moved forward: ${lead.brandName || lead.productType} is ${lead.status}.`);
  saveState();
  render();
  showToast(`Manufacturing RFQ marked ${lead.status}.`);
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

function copyProfileProofPath() {
  const profile = getProfileStatus();
  const rows = profileProofPathRows(profile);
  const role = ["worker", "customer", "admin"].includes(state.session.role) ? state.session.role : "customer";
  const lines = [
    "Forge profile proof path",
    "",
    `${profile.name} - ${profile.roleLabel}`,
    `Status: ${profile.status}`,
    "",
    ...rows.map((item) => `${item.step}. ${item.title}: ${item.body} ${item.meta}`),
    "",
    `Open profile: ${roleDemoLink(role, "profile")}`
  ];
  copyText(lines.join("\n"), "Profile proof path copied.");
}

function copyProfileDemoHandoff() {
  const profile = getProfileStatus();
  const rows = profileDemoHandoffRows(profile);
  const role = ["worker", "customer", "admin"].includes(state.session.role) ? state.session.role : "customer";
  const lines = [
    "Forge profile demo handoff",
    "",
    `${profile.name} - ${profile.roleLabel}`,
    `Status: ${profile.status}`,
    `Readiness: ${profileReadiness(profile)}%`,
    "",
    profileDemoHandoffTitle(profile),
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    `Next action: ${profile.nextAction}`,
    `Open profile: ${roleDemoLink(role, "profile")}`
  ];
  copyText(lines.join("\n"), "Profile handoff copied.");
}

function copyProfileCloseAsk() {
  const profile = getProfileStatus();
  const close = profileCloseAsk(profile);
  const role = ["worker", "customer", "admin"].includes(state.session.role) ? state.session.role : "customer";
  const screen = close.action?.screen
    || (close.action?.type === "bidJob" ? "bid" : close.action?.type === "thread" ? "messages" : close.action?.type === "detail" ? "detail" : "profile");
  const lines = [
    "Forge profile close ask",
    "",
    `${profile.name} - ${profile.roleLabel}`,
    close.title,
    close.body,
    "",
    `Open next step: ${roleDemoLink(role, screen)}`
  ];
  copyText(lines.join("\n"), "Profile close ask copied.");
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

function copyLaunchDecision() {
  const lines = [
    "Forge soft launch decision",
    "",
    ...launchDecisionRows().map((item) => `${item.label}: ${item.title}. ${item.body}`),
    "",
    "Decision: use controlled first-user demos and signups now. Hold broad public launch, payments, and stranger traffic until backend delivery, production admin auth, backup, legal review, and final security review are complete."
  ];
  copyText(lines.join("\n"), "Launch decision copied.");
}

function copyFirstUserCountBreakdown() {
  const activeCollections = firstUserLeadCollections().filter(([, rows]) => rows.length > 0);
  const lines = [
    "Forge first-user count breakdown",
    "",
    `Total: ${totalLeadCount()}/200`,
    "",
    "Grouped lanes:",
    ...firstUserLeadBreakdownRows().map((row) => `${row.label}: ${row.count} - ${row.title}. ${row.body}`),
    "",
    "Active source collections:",
    ...(activeCollections.length
      ? activeCollections.map(([label, rows]) => `${label}: ${rows.length}`)
      : ["No saved leads yet."]),
    "",
    "Use this count for controlled demos and first-user follow-up. Broad public launch still waits for backend delivery, production admin auth, backup, legal review, and final security review."
  ];
  copyText(lines.join("\n"), "First-user count copied.");
}

function copyFirst200LaunchQueue() {
  const lines = [
    "Forge First 200 launch queue",
    "",
    `First-user count: ${totalLeadCount()}/200`,
    "",
    ...first200LaunchQueueRows().map((row) => `${row.label}: ${row.metric} - ${row.title}. ${row.body}`),
    "",
    "Operating order:",
    "1. Demo-ready people get the John/Mike proof path and one clear ask.",
    "2. Follow-up-needed people get contacted before the link spreads wider.",
    "3. Manual-review leads stay guarded until safety, consent, licensing, finance, partner, or project rules are checked.",
    "4. Export Backup JSON after every outreach block."
  ];
  copyText(lines.join("\n"), "First 200 queue copied.");
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
    "Phone demo order:",
    "1. Perspective Demo: pick the person's side.",
    "2. John Status: show bids, selected bid, and status proof.",
    "3. John Messages: show the message proof receipt.",
    "4. Mike worker proof: dashboard, jobs, Submit Bid, messages.",
    "5. Launch boundary: show controlled demo readiness and public launch blockers.",
    "6. Save one next action, then export Backup JSON.",
    "",
    ...softLaunchRunSheetRows().map((item) => `${item.label}: ${item.title}. ${item.body}`),
    "",
    "Working links:",
    `Admin: ${roleDemoLink("admin", "admin")}`,
    `Perspective Demo: ${roleDemoLink("customer", "perspective")}`,
    `John Customer Proof: ${roleDemoLink("customer", "status")}`,
    `Mike Worker Proof: ${roleDemoLink("worker", "worker")}`,
    `Bid Handoff: ${roleDemoLink("customer", "detail")}`,
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
    `Version: ${PUBLIC_LINK_LABEL}`,
    `Open Admin: http://127.0.0.1:4174/${versionQuery("demo=admin")}#admin`,
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

function copyLaunchCommandRow(label) {
  const row = launchCommandRows().find((item) => item.label === label) || launchCommandRows()[0];
  const kinds = launchCommandKinds(row.label);
  const laneQueue = filteredFollowUpRows("All Lead Types", "Needs Follow-Up")
    .filter((item) => kinds.includes(item.kind))
    .slice(0, 3);
  const lines = [
    `Forge launch command - ${row.label}`,
    "",
    `${row.needTouch} need touch, ${row.contacted} contacted, ${row.moving} moving out of ${row.total}.`,
    `Next move: ${row.next}`,
    "",
    "Top lane follow-ups:",
    ...(laneQueue.length
      ? laneQueue.map((item, index) => `${index + 1}. ${item.person} (${item.kind}, score ${item.score}) - ${item.reason}`)
      : ["No urgent follow-ups in this lane right now."]),
    "",
    `Open lane: ${roleDemoLink("admin", row.screen)}`
  ];
  copyText(lines.join("\n"), `${row.label} lane copied.`);
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

function copyOutreachSprintPlan() {
  const rows = outreachBatchRows();
  const brief = outreachSprintBriefRows();
  const lines = [
    "Forge next 10 sprint plan",
    "",
    ...brief.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    "Run order:",
    "1. Contact the first person in the batch.",
    "2. Mark Contacted or Move Forward before moving to the next person.",
    "3. Stop after 20 minutes or 10 people.",
    "4. Click Complete Sprint.",
    "5. Export Backup JSON if new leads or status changes were saved.",
    "",
    "First 3 contacts:",
    ...(rows.length
      ? rows.slice(0, 3).map((row, index) => `${index + 1}. ${row.person} (${row.kind}, score ${row.score}) - ${row.reason}`)
      : ["No urgent follow-ups in the current batch."])
  ];
  copyText(lines.join("\n"), "Sprint plan copied.");
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

function copyFollowUpCommand() {
  const rows = followUpCommandRows();
  const batch = outreachBatchRows();
  const lines = [
    "Forge follow-up command",
    "",
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    "First contacts:",
    ...(batch.length
      ? batch.slice(0, 5).map((row, index) => `${index + 1}. ${row.person} (${row.kind}, score ${row.score}) - ${row.reason}`)
      : ["No urgent follow-ups in the current batch."]),
    "",
    "Operating order: copy the batch, contact the highest-priority people, mark each Contacted or Move Forward, complete the sprint, then export Backup JSON if anything changed."
  ];
  copyText(lines.join("\n"), "Follow-up command copied.");
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

function copyFirstUserCloseout() {
  const rows = firstUserCloseoutRows();
  const lines = [
    "Forge first-user closeout",
    "",
    ...rows.map((row) => `${row.step}. ${row.title}: ${row.metric}. ${row.body}`),
    "",
    "Required order:",
    "1. Copy Follow-Up Queue.",
    "2. Copy Next 10 Batch.",
    "3. Copy Outreach Recap.",
    "4. Export Backup JSON.",
    "5. Keep Public View on and use Launch Status before broader sharing."
  ];
  copyText(lines.join("\n"), "First-user closeout copied.");
}

function copyFollowUpAudit() {
  const rows = followUpAuditRows();
  const lines = [
    "Forge first-user follow-up audit",
    "",
    `First-user count: ${totalLeadCount()}/200`,
    ...rows.map((row) => `${row.label}: ${row.title}. ${row.body}`),
    "",
    "Operating rule: show the right perspective, capture one next action, clear the follow-up queue, and export backup after outreach."
  ];
  copyText(lines.join("\n"), "Follow-up audit copied.");
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
  renderLaunchDecision();
  renderLaunchDemoPack();
  renderFollowUpAudit();
  renderFirstUserCloseout();
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
