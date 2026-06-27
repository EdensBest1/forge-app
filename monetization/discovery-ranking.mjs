import { planTiers } from "./monetization-config.mjs";

const blockedStatuses = new Set(["suspended", "banned", "expired", "rejected"]);
const compliantLicenseStatuses = new Set(["approved", "verified", "active"]);
const compliantCoaStatuses = new Set(["approved", "verified", "not_applicable"]);

export function calculateDiscoveryScore(profile, context = {}) {
  const reasons = [];
  const labels = [];
  const app = profile.app || context.app || "forge";
  const plan = planTiers.find((tier) => tier.id === profile.planId || tier.slug === profile.tierSlug);
  const now = context.now ? new Date(context.now) : new Date();
  const blockedReason = complianceBlockedReason(profile, app, now);

  if (blockedReason) {
    return {
      score: 0,
      reasons: [blockedReason],
      labels,
      isSponsored: false,
      isVerified: false,
      blockedReason
    };
  }

  const profileCompletenessScore = clampScore(profile.profileCompletenessScore ?? profile.profileCompleteness ?? 0, 0, 20);
  const verificationScore = verificationScoreFor(profile, app);
  const reviewScore = reviewScoreFor(profile);
  const responseSpeedScore = clampScore(profile.responseSpeedScore ?? 0, 0, 10);
  const recencyScore = recencyScoreFor(profile, now);
  const categoryFitScore = fitScore(profile.category, context.category, 10);
  const locationFitScore = locationScore(profile, context);
  const safetyPenalty = Number(profile.safetyPenalty || 0);
  const compliancePenalty = Number(profile.compliancePenalty || 0);
  const complaintPenalty = Number(profile.complaintPenalty || (Number(profile.complaints || 0) * 8));
  const eligibleForPaid = safetyPenalty === 0 && compliancePenalty === 0;
  const paidTierBoost = eligibleForPaid && plan ? Math.round((plan.rankingMultiplier - 1) * 100) : 0;
  const activeBoostScore = eligibleForPaid && activeBoost(profile, now) ? Number(profile.activeBoostWeight || 15) : 0;

  if (profile.isPromoted || activeBoostScore > 0 || paidTierBoost > 0) {
    labels.push(activeBoostScore > 0 ? "Boosted" : "Promoted");
  }
  if (profile.isSponsored) labels.push("Sponsored");
  if (isTrulyVerified(profile, app)) labels.push("Verified");
  if (profile.fastResponder) labels.push("Fast Responder");
  if (profile.licenseStatus === "approved" || profile.licenseStatus === "verified") labels.push("Licensed");
  if (profile.insuranceStatus === "approved" || profile.insuranceStatus === "verified") labels.push("Insured");
  if (profile.backgroundStatus === "approved" || profile.backgroundStatus === "verified") labels.push("Background Checked");

  const rawScore = profileCompletenessScore + verificationScore + reviewScore + responseSpeedScore + recencyScore + categoryFitScore + locationFitScore + paidTierBoost + activeBoostScore - safetyPenalty - compliancePenalty - complaintPenalty;

  reasons.push(`profile completeness +${profileCompletenessScore}`);
  reasons.push(`verification +${verificationScore}`);
  reasons.push(`reviews +${reviewScore}`);
  reasons.push(`response speed +${responseSpeedScore}`);
  reasons.push(`recency +${recencyScore}`);
  reasons.push(`category fit +${categoryFitScore}`);
  reasons.push(`location fit +${locationFitScore}`);
  if (paidTierBoost) reasons.push(`paid tier boost +${paidTierBoost}`);
  if (activeBoostScore) reasons.push(`active boost +${activeBoostScore}`);
  if (safetyPenalty) reasons.push(`safety penalty -${safetyPenalty}`);
  if (compliancePenalty) reasons.push(`compliance penalty -${compliancePenalty}`);
  if (complaintPenalty) reasons.push(`complaint penalty -${complaintPenalty}`);

  return {
    score: Math.max(0, Math.round(rawScore)),
    reasons,
    labels: [...new Set(labels)],
    isSponsored: labels.includes("Sponsored") || labels.includes("Promoted") || labels.includes("Boosted"),
    isVerified: labels.includes("Verified"),
    blockedReason: null
  };
}

export function paginateRecords(records, { cursor = 0, limit = 50 } = {}) {
  const start = Math.max(0, Number(cursor) || 0);
  const size = Math.min(Math.max(Number(limit) || 50, 1), 250);
  const items = records.slice(start, start + size);
  const nextCursor = start + size < records.length ? start + size : null;
  return { items, nextCursor, total: records.length, limit: size };
}

export function filterDiscoveryRecords(records, filters = {}) {
  return records.filter((record) => {
    if (filters.app && record.app !== filters.app) return false;
    if (filters.category && record.category !== filters.category) return false;
    if (filters.city && normalize(record.city) !== normalize(filters.city)) return false;
    if (filters.state && normalize(record.state) !== normalize(filters.state)) return false;
    if (filters.tier && record.tierSlug !== filters.tier && record.planId !== filters.tier) return false;
    if (filters.verificationStatus && record.verificationStatus !== filters.verificationStatus) return false;
    if (filters.status && record.status !== filters.status) return false;
    return true;
  });
}

export function rankDiscoveryRecords(records, context = {}) {
  return records
    .map((record) => ({ ...record, discovery: calculateDiscoveryScore(record, context) }))
    .filter((record) => !record.discovery.blockedReason)
    .sort((a, b) => b.discovery.score - a.discovery.score);
}

function complianceBlockedReason(profile, app, now) {
  if (blockedStatuses.has(profile.status)) return `blocked: ${profile.status}`;
  if (profile.suspended) return "blocked: suspended";
  if (profile.safetyPenalty >= 100) return "blocked: safety penalty";
  if (profile.compliancePenalty >= 100) return "blocked: compliance penalty";
  if (profile.activeBoostUntil && new Date(profile.activeBoostUntil) < now) return null;
  if (app === "stitch") {
    if (!compliantLicenseStatuses.has(profile.licenseStatus)) return "blocked: Stitch license verification required";
    if (!compliantCoaStatuses.has(profile.coaStatus || "not_applicable")) return "blocked: Stitch COA/lab status required";
    if (profile.adminApprovalStatus !== "approved") return "blocked: Stitch admin approval required";
    if (profile.interstateRequested && !profile.stateRuleAllowsInterstate) return "blocked: interstate cannabis transaction not approved";
  }
  if (app === "admitly" && profile.isMinor && profile.publicVisibility) return "blocked: minor profiles cannot be public";
  return null;
}

function isTrulyVerified(profile, app) {
  if (app === "stitch") return compliantLicenseStatuses.has(profile.licenseStatus) && profile.adminApprovalStatus === "approved";
  return ["approved", "verified"].includes(profile.verificationStatus) || profile.verified === true;
}

function verificationScoreFor(profile, app) {
  if (isTrulyVerified(profile, app)) return 20;
  if (profile.verificationStatus === "submitted" || profile.verificationStatus === "needs_review") return 5;
  return 0;
}

function reviewScoreFor(profile) {
  const rating = Number(profile.reviewRating || 0);
  const count = Number(profile.reviewCount || 0);
  if (!rating || !count) return 0;
  return Math.min(20, Math.round((rating / 5) * 12 + Math.min(count, 40) / 5));
}

function recencyScoreFor(profile, now) {
  const value = profile.updatedAt || profile.createdAt;
  if (!value) return 0;
  const days = Math.max(0, (now - new Date(value)) / 86400000);
  if (days <= 3) return 10;
  if (days <= 14) return 7;
  if (days <= 45) return 4;
  return 1;
}

function fitScore(value, wanted, max) {
  if (!wanted) return Math.round(max / 2);
  return normalize(value) === normalize(wanted) ? max : 0;
}

function locationScore(profile, context) {
  if (!context.city && !context.state) return 5;
  if (context.city && normalize(profile.city) === normalize(context.city)) return 10;
  if (context.state && normalize(profile.state) === normalize(context.state)) return 6;
  return 0;
}

function activeBoost(profile, now) {
  if (!profile.activeBoostUntil) return false;
  return new Date(profile.activeBoostUntil) >= now;
}

function clampScore(value, min, max) {
  const number = Number(value) || 0;
  return Math.min(max, Math.max(min, number));
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}
