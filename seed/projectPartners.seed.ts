import { PARTNER_DOCUMENT_TYPES, type Partner, type PartnerDocument } from "../types/project-leads";

export const draftSenecaPartner: Partner = {
  id: "seneca-development-co",
  slug: "seneca-development-co",
  name: "Seneca Development Co.",
  subtitle: "Major Project & Development Partner",
  region: "Portland, OR",
  focus: "Multifamily, mixed-use, construction, development, and operations",
  approved: false,
  featureFlag: "senecaPartnerApproved",
  status: "Draft partner record",
  disclaimer: "Partner routing is subject to approval, project fit, licensing, insurance, and written partner agreement."
};

export const draftSenecaPartnerDocuments: PartnerDocument[] = PARTNER_DOCUMENT_TYPES.map((documentType) => ({
  id: `seneca-${documentType.toLowerCase()}`,
  partnerId: draftSenecaPartner.id,
  documentType,
  status: "MISSING",
  notes: "Required before approved partner routing, public logo/name usage, referral-fee claims, or case-study usage."
}));
