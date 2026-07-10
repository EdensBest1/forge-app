# Founder Compliance Source Note — 2026-07-10

## Source

Three founder-supplied screenshots of an infographic and post titled **“SOC 2 vs. ISO 27001 vs. GDPR — Understanding the Overlap & Differences.”** This note preserves the business intent and converts it into accurate implementation language for Forge and Admitly.

## Founder-supplied concepts preserved

### SOC 2 — trust and customer assurance

- Primarily associated with U.S. service organizations and SaaS/customer-data environments.
- Focuses on controls used to protect systems and customer information.
- Common themes include access control, risk management, incident response, service availability, confidentiality, processing integrity, privacy, and vendor oversight.
- Enterprise customers frequently request a SOC 2 report as evidence that controls are suitably designed and, for Type II, operated over a defined period.

### ISO/IEC 27001 — global information-security management framework

- International standard for establishing, implementing, maintaining, and continually improving an information security management system (ISMS).
- Uses risk assessment, risk treatment, documented governance, control selection, internal audit, management review, corrective action, and continual improvement.
- Recognized internationally and capable of independent accredited certification for a stated scope.

### GDPR — legal privacy obligations

- EU data-protection law focused on lawful, fair, transparent, purpose-limited, and secure processing of personal data and enforceable individual rights.
- Common operational themes include lawful bases, notice, consent where applicable, data-subject rights, processor/vendor governance, data minimization, security, records, international transfers, and breach assessment/notification.
- Enforcement can include significant administrative fines and corrective orders.

### Shared “compliance hub” or common-control core

The screenshots emphasize that the three should not be built as isolated programs. Shared controls should be implemented once and mapped across applicable requirements, especially:

- Security governance and risk management
- Access control and least privilege
- Secure development and change management
- Vendor and third-party risk management
- Data classification, protection, encryption, and secure processing
- Logging, continuous monitoring, vulnerability management, and control testing
- Incident response and breach handling
- Privacy and data-protection policies
- Evidence retention, auditability, and continual improvement

### Pairwise overlap preserved

- **SOC 2 + ISO/IEC 27001:** security controls, risk management, access control, incident response, vendor security, monitoring, and assurance evidence.
- **SOC 2 + GDPR:** security/privacy policies, vendor governance, access controls, incident handling, confidentiality, and evidence of control operation.
- **ISO/IEC 27001 + GDPR:** risk assessment, secure processing, encryption as appropriate, governance, incident/breach procedures, supplier controls, and continual improvement.
- **All three:** a documented, monitored, evidence-backed security and privacy program rather than a one-time checkbox exercise.

## Accuracy corrections adopted by Forge and Admitly

1. **SOC 2 is not a certification or law.** It is an independent attestation engagement performed by a qualified CPA firm under AICPA criteria. Do not use “SOC 2 certified.”
2. **ISO/IEC 27001 is an ISMS requirements standard.** Alignment and implementation may precede certification; certification may be claimed only when a valid accredited certificate covers the relevant organization and system scope.
3. **GDPR applicability is not accurately summarized as “EU citizen data.”** Applicability must be assessed under GDPR Article 3, including establishment in the EU and offering goods/services to or monitoring people in the EU, regardless of citizenship.
4. **Security controls alone do not establish GDPR compliance.** GDPR also requires lawful processing, transparency, individual rights, controller/processor governance, retention/minimization, transfer safeguards, and other legal obligations.
5. **One mapped control library reduces duplicate work, but framework-specific obligations remain.** A shared control may support several requirements without making their legal or assurance standards interchangeable.

## Forge and Admitly implementation decision

Forge and Admitly will maintain one authoritative control register with control owner, scope, mapping, test method, evidence source, frequency, status, exception, review date, and reviewer.

Marketplace safety, provider licensing/insurance, background checks, worker classification, payments, exact-location privacy, communications, consumer protection, student/minor privacy, COPPA, FERPA applicability, admissions/application integrity, and jurisdiction-specific requirements remain separate overlays and cannot be satisfied merely by SOC 2/ISO/GDPR alignment.

The mandatory implementation baseline is `UNIFIED_SOC2_ISO27001_GDPR_BASELINE.md`; the starter evidence/control ledger is `CONTROL_REGISTER_STARTER.csv`.
