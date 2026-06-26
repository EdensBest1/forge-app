export const PROJECT_TYPES = [
  "HOME_REPAIR",
  "REMODEL",
  "ADU",
  "GARAGE_SHOP",
  "FENCING_GATES",
  "MULTIFAMILY",
  "MIXED_USE",
  "COMMERCIAL_TI",
  "LAND_DEVELOPMENT",
  "INVESTMENT_PROPERTY",
  "OTHER"
] as const;

export const BUDGET_RANGES = [
  "UNDER_10K",
  "TEN_TO_50K",
  "FIFTY_TO_150K",
  "ONE_FIFTY_TO_500K",
  "FIVE_HUNDRED_TO_2M",
  "TWO_M_PLUS"
] as const;

export const PROJECT_STAGES = [
  "IDEA_ONLY",
  "OWN_PROPERTY",
  "UNDER_CONTRACT",
  "HAVE_PLANS",
  "HAVE_PERMITS",
  "READY_TO_BUILD",
  "NEEDS_DESIGN",
  "NEEDS_FINANCING"
] as const;

export const PROJECT_STATUSES = [
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
] as const;

export const PARTNER_DOCUMENT_TYPES = [
  "W9",
  "INSURANCE",
  "LICENSE",
  "BUSINESS_LICENSE",
  "REFERRAL_AGREEMENT",
  "LOGO_PERMISSION",
  "NDA_NON_CIRCUMVENT"
] as const;

export type ProjectType = typeof PROJECT_TYPES[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type ProjectStage = typeof PROJECT_STAGES[number];
export type ProjectStatus = typeof PROJECT_STATUSES[number];
export type PartnerDocumentType = typeof PARTNER_DOCUMENT_TYPES[number];
export type ForgeProjectState = "OR" | "WA" | "CA" | "ID" | "OTHER";

export interface ProjectLead {
  id: string;
  contactName?: string;
  phone?: string;
  email?: string;
  projectType: ProjectType;
  projectTitle: string;
  projectDescription: string;
  propertyAddress?: string;
  city: string;
  state: ForgeProjectState;
  county?: string;
  budgetRange: BudgetRange;
  timeline?: string;
  projectStage: ProjectStage;
  ownsProperty?: string;
  hasPlans?: string;
  hasPermits?: string;
  needsFinancing?: string;
  uploadPhotos?: string[];
  uploadDocuments?: string[];
  preferredContactMethod?: "Phone" | "Text" | "Email";
  consentToShareWithPartner: boolean;
  route: "Normal Forge Pros" | "Major Projects Review" | "Project Intake Review";
  status: ProjectStatus;
  adminNote?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectLeadNote {
  id: string;
  projectLeadId: string;
  authorName?: string;
  body: string;
  createdAt: string;
}

export interface Partner {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  region?: string;
  focus?: string;
  approved: boolean;
  featureFlag?: "senecaPartnerApproved" | string;
  status: string;
  disclaimer?: string;
}

export interface PartnerReferral {
  id: string;
  projectLeadId: string;
  partnerId: string;
  status: string;
  approvedPartnerAtSend: boolean;
  referralFeeTerms?: string;
  note?: string;
  createdAt: string;
}

export interface PartnerDocument {
  id: string;
  partnerId: string;
  documentType: PartnerDocumentType;
  status: "MISSING" | "RECEIVED" | "VERIFIED" | "EXPIRED";
  fileUrl?: string;
  verifiedAt?: string;
  expiresAt?: string;
  notes?: string;
}
