export const NORTH_STAR_BUSINESS_SIZES = [
  "Solo Operator",
  "Small Local Business",
  "Established Trade Company",
  "Enterprise / Anchor Contractor"
] as const;

export const NORTH_STAR_MARKETING_NEEDS = [
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
] as const;

export const NORTH_STAR_LEAD_CLASSIFICATIONS = [
  "Small Provider",
  "Growth Client",
  "Trade Pro Client",
  "Enterprise Prospect",
  "Urgent Follow-Up"
] as const;

export const NORTH_STAR_STATUSES = [
  "New",
  "Needs Review",
  "Contacted",
  "Audit Scheduled",
  "Proposal Needed",
  "Proposal Sent",
  "Won",
  "Lost",
  "Nurture Later"
] as const;

export interface ForgeMarketingScore {
  website: number;
  googleBusiness: number;
  reviews: number;
  photosVideos: number;
  leadResponse: number;
  socialProof: number;
  crmFollowup: number;
  total: number;
}

export interface NorthStarLeadInput {
  businessName?: string;
  name?: string;
  phone?: string;
  email?: string;
  serviceCategories?: string[];
  serviceAreas?: string;
  businessSize?: string;
  marketingNeed?: string;
  budget?: string;
  mainBusinessProblem?: string;
  answerEveryCall?: string;
  hasCrm?: string;
  status?: string;
}

export function validateNorthStarLead(input: NorthStarLeadInput) {
  const errors: string[] = [];
  if (!input.businessName?.trim()) errors.push("Business name is required.");
  if (!input.name?.trim()) errors.push("Owner/contact name is required.");
  if (!input.phone?.trim()) errors.push("Phone is required.");
  if (!input.email?.trim()) errors.push("Email is required.");
  if (!input.serviceCategories?.length) errors.push("At least one service category is required.");
  if (!input.serviceAreas?.trim()) errors.push("Service areas are required.");
  if (input.businessSize && !NORTH_STAR_BUSINESS_SIZES.includes(input.businessSize as any)) errors.push("Business size is not supported.");
  if (input.marketingNeed && !NORTH_STAR_MARKETING_NEEDS.includes(input.marketingNeed as any)) errors.push("Marketing need is not supported.");
  if (input.status && !NORTH_STAR_STATUSES.includes(input.status as any)) errors.push("Status is not supported.");
  return { ok: errors.length === 0, errors };
}

export function totalForgeMarketingScore(score: Omit<ForgeMarketingScore, "total">) {
  return clampScore(score.website, 0, 20)
    + clampScore(score.googleBusiness, 0, 20)
    + clampScore(score.reviews, 0, 20)
    + clampScore(score.photosVideos, 0, 10)
    + clampScore(score.leadResponse, 0, 10)
    + clampScore(score.socialProof, 0, 10)
    + clampScore(score.crmFollowup, 0, 10);
}

function clampScore(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}
