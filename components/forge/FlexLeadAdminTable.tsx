import { FlexLeadStatusBadge } from "./FlexLeadStatusBadge";

export type FlexLeadRow = {
  id: string;
  owner_name: string;
  business_name: string;
  email: string;
  phone?: string;
  city?: string;
  state?: string;
  industry?: string;
  primary_need?: string;
  lead_score: number;
  status: string;
  notes?: string;
};

type FlexLeadAdminTableProps = {
  leads: FlexLeadRow[];
  onStatusChange?: (id: string, status: string) => void;
  onNotesChange?: (id: string, notes: string) => void;
  onCopyOutreach?: (id: string) => void;
  onOpenReferral?: (id: string) => void;
  onCreateUpsellTask?: (id: string) => void;
};

const statuses = ["new", "contacted", "qualified", "not_qualified", "flex_link_sent", "application_started", "activated", "commission_expected", "commission_paid", "forge_upsell_offered", "forge_client_won", "closed_lost"];

export function FlexLeadAdminTable({ leads, onStatusChange, onNotesChange, onCopyOutreach, onOpenReferral, onCreateUpsellTask }: FlexLeadAdminTableProps) {
  return (
    <table className="flex-lead-admin-table">
      <thead>
        <tr><th>Lead</th><th>Need</th><th>Score</th><th>Status</th><th>Notes</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.business_name}<br />{lead.owner_name} · {lead.email}</td>
            <td>{lead.primary_need || "Need pending"}<br />{lead.industry || "Industry pending"} · {lead.city || "City pending"} {lead.state || ""}</td>
            <td>{lead.lead_score}</td>
            <td>
              <FlexLeadStatusBadge status={lead.status} />
              <select value={lead.status} onChange={(event) => onStatusChange?.(lead.id, event.target.value)}>
                {statuses.map((status) => <option key={status} value={status}>{status.replaceAll("_", " ")}</option>)}
              </select>
            </td>
            <td><textarea value={lead.notes || ""} onChange={(event) => onNotesChange?.(lead.id, event.target.value)} /></td>
            <td>
              <button type="button" onClick={() => onCopyOutreach?.(lead.id)}>Copy outreach message</button>
              <button type="button" onClick={() => onOpenReferral?.(lead.id)}>Open Flex Referral Link</button>
              <button type="button" onClick={() => onCreateUpsellTask?.(lead.id)}>Create Forge Upsell Task</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
