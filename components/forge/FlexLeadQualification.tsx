type FlexLeadQualificationProps = {
  score: number;
  primaryNeed?: string;
  monthlySpendRange?: string;
  yearsInBusiness?: string;
};

export function FlexLeadQualification({ score, primaryNeed, monthlySpendRange, yearsInBusiness }: FlexLeadQualificationProps) {
  return (
    <section className="flex-lead-qualification">
      <strong>{score}</strong>
      <span>Lead score</span>
      <p>{primaryNeed || "Primary need pending"}</p>
      <small>{monthlySpendRange || "Spend pending"} · {yearsInBusiness || "Years pending"}</small>
    </section>
  );
}
