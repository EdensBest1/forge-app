import { PARTNER_DOCUMENT_TYPES, type Partner, type PartnerDocument } from "../types/project-leads";

export const draftSenecaPartner: Partner = {
  id: "seneca-development-co",
  slug: "seneca-development-co",
  name: "Seneca Development Co.",
  subtitle: "Major Project & Development Candidate",
  region: "Oregon / Southwest Washington",
  focus: "Multifamily, mixed-use, commercial property, land development, investor-backed builds, and major renovations",
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
  bestFit: [
    "Multifamily development",
    "Mixed-use development",
    "Apartment upgrades",
    "Commercial property improvements",
    "Land development",
    "Investor-backed builds",
    "Major renovations",
    "Portland metro / Oregon / Southwest Washington opportunities"
  ],
  disclaimer: "Partner routing is subject to approval, project fit, licensing, insurance, and written partner agreement."
};

export const draftSenecaPartnerDocuments: PartnerDocument[] = PARTNER_DOCUMENT_TYPES.map((documentType) => ({
  id: `seneca-${documentType.toLowerCase()}`,
  partnerId: draftSenecaPartner.id,
  documentType,
  status: "MISSING",
  notes: "Required before approved partner routing, public logo/name usage, referral-fee claims, or case-study usage."
}));

export const draftFlexPartner: Partner = {
  id: "flex",
  slug: "flex",
  name: "Flex",
  subtitle: "Business Finance Candidate",
  region: "Configurable through FLEX_APP_URL or Forge Capital Desk",
  focus: "Business banking, credit, expense management, bill pay, vendor payments, working capital, AP/AR automation, and finance operations",
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
  bestFit: [
    "Contractors",
    "Builders",
    "Remodelers",
    "Blue-collar service businesses",
    "Project operators",
    "Businesses with vendor payments",
    "Businesses with cash-flow gaps",
    "Businesses needing expense controls",
    "Businesses needing AP/AR automation"
  ],
  disclaimer: "Finance partner routing is subject to written approval, consent, eligibility, partner terms, and data-sharing approval. Forge is not a lender, bank, broker-dealer, financial advisor, or credit provider."
};

export const draftFlexPartnerDocuments: PartnerDocument[] = PARTNER_DOCUMENT_TYPES.map((documentType) => ({
  id: `flex-${documentType.toLowerCase()}`,
  partnerId: draftFlexPartner.id,
  documentType,
  status: "MISSING",
  notes: "Required before approved finance partner routing, public logo/name usage, referral-fee claims, or data sharing."
}));

export const draftPartnerCandidates: Partner[] = [draftSenecaPartner, draftFlexPartner];
export const draftPartnerDocuments: PartnerDocument[] = [...draftSenecaPartnerDocuments, ...draftFlexPartnerDocuments];
