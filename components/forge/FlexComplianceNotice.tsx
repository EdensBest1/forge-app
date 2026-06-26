export const FLEX_COMPLIANCE_NOTICE = "Forge is not a bank, lender, broker-dealer, underwriter, or credit decision maker. Forge may refer eligible business owners to Flex through an approved partner/referral relationship. Flex products are subject to eligibility, approval, fees, terms, and conditions. Do not submit bank logins, SSNs, full account numbers, or sensitive financial documents through Forge.";

export function FlexComplianceNotice() {
  return (
    <aside className="flex-compliance-notice">
      <p>{FLEX_COMPLIANCE_NOTICE}</p>
    </aside>
  );
}
