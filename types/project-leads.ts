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
  "NDA",
  "NON_CIRCUMVENT",
  "DATA_SHARING_AGREEMENT",
  "OTHER"
] as const;

export const BUILDING_LEAD_TYPES = ["HOME_PROJECT", "MAJOR_BUILD", "CONTRACTOR_FINANCE"] as const;

export const BUILDING_PROJECT_TYPES = [
  "HOME_REPAIR",
  "REMODEL",
  "FENCING_GATES",
  "DECK_PATIO",
  "CONCRETE",
  "ROOFING",
  "PAINTING",
  "LANDSCAPING",
  "ADU",
  "GARAGE_SHOP",
  "TENANT_IMPROVEMENT",
  "COMMERCIAL",
  "MULTIFAMILY",
  "MIXED_USE",
  "LAND_DEVELOPMENT",
  "INVESTMENT_PROPERTY",
  "CONTRACTOR_FINANCE",
  "OTHER"
] as const;

export const BUILDING_STATUSES = [
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
] as const;

export const BUILDING_FINANCE_NEEDS = [
  "BUSINESS_BANKING",
  "BUSINESS_CREDIT",
  "EXPENSE_MANAGEMENT",
  "VENDOR_PAYMENTS",
  "BILL_PAY",
  "WORKING_CAPITAL",
  "AP_AUTOMATION",
  "AR_AUTOMATION",
  "GLOBAL_PAYMENTS",
  "PROJECT_FINANCING",
  "NOT_SURE"
] as const;

export type ProjectType = typeof PROJECT_TYPES[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type ProjectStage = typeof PROJECT_STAGES[number];
export type ProjectStatus = typeof PROJECT_STATUSES[number];
export type PartnerDocumentType = typeof PARTNER_DOCUMENT_TYPES[number];
export type BuildingLeadType = typeof BUILDING_LEAD_TYPES[number];
export type BuildingProjectType = typeof BUILDING_PROJECT_TYPES[number];
export type BuildingStatus = typeof BUILDING_STATUSES[number];
export type BuildingFinanceNeed = typeof BUILDING_FINANCE_NEEDS[number];
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
  contactRelationshipNote?: string;
  partnerType?: "MAJOR_PROJECT_DEVELOPMENT" | "BUSINESS_FINANCE" | string;
  approved: boolean;
  publicDisplayEnabled?: boolean;
  logoUseApproved?: boolean;
  referralAgreementSigned?: boolean;
  dataSharingApproved?: boolean;
  officialPartnerLanguageApproved?: boolean;
  featureFlag?: "senecaPartnerApproved" | string;
  status: string;
  publicDisplayRule?: string;
  adminDescription?: string;
  bestFit?: string[];
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

export interface BuildingLead {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  leadType: BuildingLeadType;
  projectType: BuildingProjectType;
  projectTitle: string;
  projectDescription: string;
  propertyAddress?: string;
  city?: string;
  county?: string;
  state: ForgeProjectState;
  zip?: string;
  budgetRange: BudgetRange | "NOT_SURE";
  timeline?: string;
  projectStage:
    | ProjectStage
    | "NEED_DESIGN_HELP"
    | "NEED_CONSTRUCTION_HELP"
    | "NEED_FINANCING"
    | "READY_TO_START"
    | "NOT_SURE";
  ownsProperty?: string;
  hasPlans?: string;
  hasPermits?: string;
  needsFinancing?: string;
  businessName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  website?: string;
  industry?: string;
  monthlyRevenueRange?: string;
  yearsInBusiness?: string;
  numberOfEmployees?: string;
  financeNeed?: BuildingFinanceNeed;
  preferredContactMethod?: "Phone" | "Text" | "Email";
  consentToReview: boolean;
  consentToContact: boolean;
  consentToShareWithApprovedPartners: boolean;
  status: BuildingStatus;
  assignedPartnerId?: string;
  adminNotes?: string;
}
