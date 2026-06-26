import { FlexComplianceNotice } from "./FlexComplianceNotice";

export function FlexLeadForm() {
  return (
    <form className="flex-lead-form">
      <label>Owner name<input name="owner_name" required /></label>
      <label>Business name<input name="business_name" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Phone<input name="phone" /></label>
      <label>Industry<input name="industry" required /></label>
      <label>Primary need<textarea name="primary_need" /></label>
      <FlexComplianceNotice />
      <label><input name="consent_to_contact" type="checkbox" required /> I consent to Forge contact.</label>
      <label><input name="consent_to_receive_flex_referral" type="checkbox" required /> I consent to receive the official Flex referral link.</label>
      <button type="submit">Check Flex Options</button>
    </form>
  );
}
