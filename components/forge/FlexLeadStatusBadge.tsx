type FlexLeadStatusBadgeProps = {
  status: string;
};

export function FlexLeadStatusBadge({ status }: FlexLeadStatusBadgeProps) {
  const label = status.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return <span className={`flex-status ${status}`}>{label}</span>;
}
