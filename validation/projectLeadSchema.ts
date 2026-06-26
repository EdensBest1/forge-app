import {
  BUDGET_RANGES,
  PROJECT_STAGES,
  PROJECT_STATUSES,
  PROJECT_TYPES,
  type BudgetRange,
  type ProjectLead,
  type ProjectStage,
  type ProjectStatus,
  type ProjectType
} from "../types/project-leads";

export const projectLeadSchema = {
  required: [
    "projectType",
    "projectTitle",
    "projectDescription",
    "city",
    "state",
    "budgetRange",
    "projectStage",
    "preferredContactMethod",
    "consentToShareWithPartner"
  ],
  enums: {
    projectType: PROJECT_TYPES,
    budgetRange: BUDGET_RANGES,
    projectStage: PROJECT_STAGES,
    status: PROJECT_STATUSES,
    state: ["OR", "WA", "CA", "ID", "OTHER"] as const,
    preferredContactMethod: ["Phone", "Text", "Email"] as const
  },
  compliance: [
    "Forge is a lead marketplace and project coordinator, not the contractor of record.",
    "Require verified license and insurance before any contractor can accept construction work.",
    "Require written permission before using partner names, logos, testimonials, or case studies.",
    "Require user consent before sharing project details with third-party partners."
  ]
} as const;

export type ProjectLeadInput = Partial<ProjectLead> & {
  projectType?: string;
  budgetRange?: string;
  projectStage?: string;
  status?: string;
  state?: string;
};

export interface ValidationResult {
  ok: boolean;
  errors: string[];
  normalized?: ProjectLead;
}

const majorBudgets: BudgetRange[] = ["ONE_FIFTY_TO_500K", "FIVE_HUNDRED_TO_2M", "TWO_M_PLUS"];
const under150Budgets: BudgetRange[] = ["UNDER_10K", "TEN_TO_50K", "FIFTY_TO_150K"];
const majorTypes: ProjectType[] = ["MULTIFAMILY", "MIXED_USE", "COMMERCIAL_TI", "LAND_DEVELOPMENT", "INVESTMENT_PROPERTY"];
const forgeProsTypes: ProjectType[] = ["HOME_REPAIR", "REMODEL", "FENCING_GATES", "ADU", "GARAGE_SHOP"];

export function validateProjectLead(input: ProjectLeadInput): ValidationResult {
  const errors: string[] = [];
  for (const field of projectLeadSchema.required) {
    if (input[field as keyof ProjectLeadInput] === undefined || input[field as keyof ProjectLeadInput] === "") {
      errors.push(`${field} is required.`);
    }
  }

  if (!PROJECT_TYPES.includes(input.projectType as ProjectType)) errors.push("projectType is not supported.");
  if (!BUDGET_RANGES.includes(input.budgetRange as BudgetRange)) errors.push("budgetRange is not supported.");
  if (!PROJECT_STAGES.includes(input.projectStage as ProjectStage)) errors.push("projectStage is not supported.");
  if (input.status && !PROJECT_STATUSES.includes(input.status as ProjectStatus)) errors.push("status is not supported.");

  const state = normalizeState(input.state);
  if (!projectLeadSchema.enums.state.includes(state)) errors.push("state is not supported.");

  if (errors.length) return { ok: false, errors };

  const route = projectRoute(input.projectType as ProjectType, input.budgetRange as BudgetRange);
  const status = (input.status as ProjectStatus | undefined) || route.status;
  const normalized: ProjectLead = {
    id: input.id || "project-lead-pending-id",
    contactName: input.contactName,
    phone: input.phone,
    email: input.email,
    projectType: input.projectType as ProjectType,
    projectTitle: input.projectTitle || "",
    projectDescription: input.projectDescription || "",
    propertyAddress: input.propertyAddress,
    city: input.city || "",
    state,
    county: input.county,
    budgetRange: input.budgetRange as BudgetRange,
    timeline: input.timeline,
    projectStage: input.projectStage as ProjectStage,
    ownsProperty: input.ownsProperty,
    hasPlans: input.hasPlans,
    hasPermits: input.hasPermits,
    needsFinancing: input.needsFinancing,
    uploadPhotos: input.uploadPhotos,
    uploadDocuments: input.uploadDocuments,
    preferredContactMethod: (input.preferredContactMethod as ProjectLead["preferredContactMethod"]) || "Phone",
    consentToShareWithPartner: Boolean(input.consentToShareWithPartner),
    route: route.route,
    status,
    adminNote: input.adminNote,
    createdAt: input.createdAt,
    updatedAt: input.updatedAt
  };

  return { ok: true, errors: [], normalized };
}

export function projectRoute(projectType: ProjectType, budgetRange: BudgetRange) {
  if (under150Budgets.includes(budgetRange) && forgeProsTypes.includes(projectType)) {
    return { route: "Normal Forge Pros" as const, status: "ROUTED_TO_FORGE_PRO" as const };
  }
  if (majorBudgets.includes(budgetRange) || majorTypes.includes(projectType)) {
    return { route: "Major Projects Review" as const, status: "MAJOR_PROJECT_REVIEW" as const };
  }
  return { route: "Project Intake Review" as const, status: "NEW" as const };
}

export function canSendToSenecaReview(lead: Pick<ProjectLead, "state" | "status" | "consentToShareWithPartner">) {
  return ["OR", "WA"].includes(lead.state)
    && lead.status === "FORGE_QUALIFIED"
    && lead.consentToShareWithPartner === true;
}

function normalizeState(value?: string) {
  const upper = String(value || "OR").trim().toUpperCase();
  if (upper === "OREGON") return "OR";
  if (upper === "WASHINGTON") return "WA";
  if (["OR", "WA", "CA", "ID"].includes(upper)) return upper as ProjectLead["state"];
  return "OTHER";
}

export const PATHWAY_STATUSES = [
  "New Lead",
  "Contacted",
  "Intake Complete",
  "Application Started",
  "Documents Needed",
  "Submitted",
  "Interview / Placement",
  "Accepted",
  "Hired / Placed",
  "Not Qualified",
  "Paused"
] as const;

export const ADMITLY_PATHWAYS = [
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
] as const;

export const FORGE_ACADEMY_TRADES = [
  "Electrical",
  "Welding",
  "HVAC",
  "Plumbing",
  "Roofing / construction",
  "CDL / logistics",
  "Diesel / automotive",
  "Heavy equipment",
  "Fire / EMS",
  "CNA / medical assistant",
  "Agriculture / farm advancement",
  "Creative media",
  "Blue-collar AI field tech",
  "Other"
] as const;

export type PathwayStatus = typeof PATHWAY_STATUSES[number];
export type AdmitlyPathway = typeof ADMITLY_PATHWAYS[number];
export type ForgeAcademyTrade = typeof FORGE_ACADEMY_TRADES[number];

export interface CareerValidationResult<T = Record<string, unknown>> {
  ok: boolean;
  errors: string[];
  normalized?: T;
}

export interface TradePathwayLeadInput {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  educationLevel?: string;
  ageRange?: string;
  pathway?: string;
  desiredTrade?: string;
  timeline?: string;
  fundingNeed?: string;
  workExperience?: string;
  resumeText?: string;
  essayHelp?: boolean | string;
  scholarshipHelp?: boolean | string;
  jobHelp?: boolean | string;
  consentToContact?: boolean | string;
  status?: string;
  priority?: string;
  notes?: string;
}

export interface ForgeAcademyLeadInput {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  desiredTrade?: string;
  currentExperience?: string;
  hasTransportation?: string;
  hasDriversLicense?: string;
  needsTraining?: boolean | string;
  needsJobNow?: boolean | string;
  needsResume?: boolean | string;
  interestedCareerPlus?: boolean | string;
  consentToContact?: boolean | string;
  status?: string;
  priority?: string;
  notes?: string;
}

export interface EmployerTrainingPartnerInput {
  businessName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  tradeCategory?: string;
  hiringNeeds?: string;
  apprenticeshipAvailability?: string;
  willingToTrain?: string;
  insuranceLicense?: string;
  writtenPartnerTerms?: boolean | string;
  status?: string;
  notes?: string;
}

export interface SchoolPartnerInput {
  schoolName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  programTypes?: string;
  location?: string;
  costRange?: string;
  financialAidAvailable?: string;
  enrollmentDeadlines?: string;
  accreditationNotes?: string;
  status?: string;
  notes?: string;
}

export interface ResumeRequestInput {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  desiredTrade?: string;
  currentExperience?: string;
  resumeText?: string;
  consentToContact?: boolean | string;
  careerPlusStatus?: string;
  status?: string;
  notes?: string;
}

export const careerBridgeCompliance = [
  "Admitly is the education, admissions, scholarship, essay, school planning, and application platform.",
  "Forge Academy is the Forge-facing blue-collar career, training, apprenticeship, resume, and local job pathway.",
  "Do not guarantee admission, employment, union acceptance, licensure, scholarship approval, financial aid, or placement.",
  "Do not collect IDs, Social Security numbers, payment information, passwords, transcripts, or official documents in the browser MVP.",
  "Require consent before contacting users or sharing any details with schools, employers, partners, unions, or programs."
] as const;

export function validateTradePathwayLead(input: TradePathwayLeadInput): CareerValidationResult {
  const errors = requiredCareerErrors(input, ["fullName", "phone", "email", "pathway", "consentToContact"]);
  if (input.pathway && !ADMITLY_PATHWAYS.includes(input.pathway as AdmitlyPathway)) errors.push("pathway is not supported.");
  if (input.status && !PATHWAY_STATUSES.includes(input.status as PathwayStatus)) errors.push("status is not supported.");
  if (!toBoolean(input.consentToContact)) errors.push("consentToContact is required.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    errors: [],
    normalized: {
      ...input,
      sourceApp: "admitly",
      leadType: "Admitly Trade Pathways",
      state: normalizeCareerState(input.state),
      essayHelp: toBoolean(input.essayHelp),
      scholarshipHelp: toBoolean(input.scholarshipHelp),
      jobHelp: toBoolean(input.jobHelp),
      consentToContact: true,
      status: input.status || "New Lead",
      priority: input.priority || "Warm"
    }
  };
}

export function validateForgeAcademyLead(input: ForgeAcademyLeadInput): CareerValidationResult {
  const errors = requiredCareerErrors(input, ["fullName", "phone", "desiredTrade", "consentToContact"]);
  if (input.desiredTrade && !FORGE_ACADEMY_TRADES.includes(input.desiredTrade as ForgeAcademyTrade)) errors.push("desiredTrade is not supported.");
  if (input.status && !PATHWAY_STATUSES.includes(input.status as PathwayStatus)) errors.push("status is not supported.");
  if (!toBoolean(input.consentToContact)) errors.push("consentToContact is required.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    errors: [],
    normalized: {
      ...input,
      sourceApp: "forge",
      leadType: "Student / Worker Career Intake",
      state: normalizeCareerState(input.state),
      needsTraining: toBoolean(input.needsTraining),
      needsJobNow: toBoolean(input.needsJobNow),
      needsResume: toBoolean(input.needsResume),
      interestedCareerPlus: toBoolean(input.interestedCareerPlus),
      consentToContact: true,
      status: input.status || "New Lead",
      priority: input.priority || "Warm"
    }
  };
}

export function validateEmployerTrainingPartner(input: EmployerTrainingPartnerInput): CareerValidationResult {
  const errors = requiredCareerErrors(input, ["businessName", "contactName", "phone", "tradeCategory"]);
  if (input.tradeCategory && !FORGE_ACADEMY_TRADES.includes(input.tradeCategory as ForgeAcademyTrade)) errors.push("tradeCategory is not supported.");
  if (input.status && !PATHWAY_STATUSES.includes(input.status as PathwayStatus)) errors.push("status is not supported.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    errors: [],
    normalized: {
      ...input,
      sourceApp: "forge",
      leadType: "Employer Training Partner",
      writtenPartnerTerms: toBoolean(input.writtenPartnerTerms),
      status: input.status || "New Lead"
    }
  };
}

export function validateSchoolPartner(input: SchoolPartnerInput): CareerValidationResult {
  const errors = requiredCareerErrors(input, ["schoolName", "contactName", "phone", "programTypes"]);
  if (input.status && !PATHWAY_STATUSES.includes(input.status as PathwayStatus)) errors.push("status is not supported.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    errors: [],
    normalized: {
      ...input,
      sourceApp: "admitly",
      leadType: "School / Program Partner",
      status: input.status || "New Lead"
    }
  };
}

export function validateResumeRequest(input: ResumeRequestInput): CareerValidationResult {
  const errors = requiredCareerErrors(input, ["fullName", "phone", "desiredTrade", "consentToContact"]);
  if (input.status && !PATHWAY_STATUSES.includes(input.status as PathwayStatus)) errors.push("status is not supported.");
  if (!toBoolean(input.consentToContact)) errors.push("consentToContact is required.");
  if (errors.length) return { ok: false, errors };
  return {
    ok: true,
    errors: [],
    normalized: {
      ...input,
      sourceApp: "forge",
      leadType: "Forge Career+ Resume Request",
      state: normalizeCareerState(input.state),
      consentToContact: true,
      careerPlusStatus: input.careerPlusStatus || "Placeholder",
      status: input.status || "New Lead"
    }
  };
}

function requiredCareerErrors(input: Record<string, unknown>, fields: string[]) {
  return fields
    .filter((field) => input[field] === undefined || input[field] === "")
    .map((field) => `${field} is required.`);
}

function toBoolean(value: unknown) {
  if (value === true) return true;
  if (typeof value === "string") return ["true", "yes", "on", "1"].includes(value.trim().toLowerCase());
  return false;
}

function normalizeCareerState(value?: string) {
  const upper = String(value || "OR").trim().toUpperCase();
  if (["OR", "WA", "CA", "ID"].includes(upper)) return upper;
  return "OTHER";
}
