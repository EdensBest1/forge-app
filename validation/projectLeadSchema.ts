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
    id: input.id || crypto.randomUUID(),
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
    preferredContactMethod: input.preferredContactMethod,
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
