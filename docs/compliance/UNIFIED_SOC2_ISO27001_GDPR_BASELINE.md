# Unified SOC 2 / ISO/IEC 27001 / GDPR Baseline — Forge and Admitly

**Status:** Mandatory security and privacy baseline; production launch blocker  
**Effective date:** 2026-07-10  
**Scope:** Forge, Forge Academy, Admitly Trade Pathways, North Star/marketing intake, worker and business profiles, job and service requests, administrator tooling, APIs, databases, storage, hosting, CI/CD, support operations, vendors, demos, and production environments.

## 1. Purpose

Forge and Admitly will use **one shared control library** mapped to SOC 2, ISO/IEC 27001, and GDPR. Controls are implemented once, assigned to an accountable owner, tested on a defined schedule, and supported by retained evidence. Product-specific legal and privacy requirements are overlays on that shared core.

The founder-supplied compliance comparison is adopted as a design principle: security best practices, risk management, continuous monitoring, and data-protection policies form the common center. Framework-specific obligations must still be assessed and documented separately.

## 2. Terminology and claim rules

- **SOC 2 is an independent CPA attestation report, not a certification.** Internal readiness work does not authorize a SOC 2 claim. A Type I report evaluates control design at a point in time; a Type II report evaluates design and operating effectiveness over a period.
- **ISO/IEC 27001:2022 specifies requirements for an information security management system (ISMS).** Forge/Admitly may align with the standard before certification, but may claim certification only after an accredited certification body issues a valid certificate for the stated scope. The 2024 climate-action amendment must be considered in the ISMS context analysis.
- **GDPR is law, not a voluntary security standard.** Applicability is assessed per processing activity under Article 3, including establishment and targeting criteria; it is not limited to EU citizenship.
- Passing a script, checklist, automated scan, static-site review, or readiness exercise does not by itself prove legal compliance, certification, or attestation.

## 3. Non-negotiable production rule

Forge and Admitly must not expose real administrator data, production accounts, live database writes, payments, automated external messaging, sensitive document uploads, student records, background-check records, identity documents, financial-aid records, or privileged exports until all applicable criteria below are satisfied:

1. The production system boundary, asset inventory, data flows, and third parties are documented.
2. Production authentication and authorization are server-side, deny-by-default, and tested; client-side demo guards are not accepted as production controls.
3. Each required control has an owner, test method, schedule, and current evidence.
4. Critical and high-severity security findings are fixed or formally risk-accepted by authorized leadership with a dated expiration.
5. Privacy notices, lawful bases, consent mechanisms, retention/deletion schedules, vendor contracts, and data-rights procedures are approved for the actual launch markets and audiences.
6. Child/minor, student, employment, contractor, marketplace, payment, communications, background-check, licensing, and consumer-protection requirements are assessed by qualified professionals where applicable.
7. A human security/compliance go/no-go record is signed and retained.

## 4. System boundary and data classification

The production inventory must identify every application, page, API, database, storage bucket, domain, CI/CD workflow, administrator console, endpoint, webhook, AI service, analytics service, messaging service, payment service, and human role that can access Forge or Admitly information.

Minimum data classes:

| Class | Examples | Minimum handling rule |
|---|---|---|
| Public | Approved marketing copy, public service categories | Integrity review; no confidential metadata |
| Internal | Operating procedures, non-public roadmap | Authenticated access; least privilege |
| Confidential | Names, email addresses, phone numbers, job locations, worker profiles, bids, messages, education goals, application notes, employer leads | Encryption, role-based access, audit logging, retention limit |
| Restricted | Authentication material, government identifiers, background-check data, precise home/access details, payment or bank data, school credentials, transcripts, disability/health details, financial-aid records, service-role secrets | Server-side only, strict need-to-know, enhanced logging, no browser/local-storage exposure |

Forge and Admitly must not store full payment-card data. Payment flows must use a PCI DSS-compliant provider and hosted/tokenized components. Service-role credentials, signing keys, database secrets, and privileged API keys must never be embedded in public files, local storage, or browser-supplied headers.

## 5. Unified control domains

### GOV — Governance, scope, and risk management

Required controls:

- Approve an ISMS charter, security policy hierarchy, privacy governance charter, and system scope.
- Maintain a risk register covering confidentiality, integrity, availability, privacy, legal, vendor, fraud, safety, marketplace, education, employment, payments, messaging, and AI/automation risks.
- Record risk owner, likelihood, impact, treatment, target date, evidence, residual risk, approval, and review date.
- Review risk at least quarterly and after material incidents, architecture changes, new markets, new vendors, new audiences, or new categories of personal data.
- Segregate code approval, production deployment, privileged access, lead export, payment administration, safety review, and compliance approval.

Required evidence: approved policies and charters, scope statement, risk register, meeting minutes, role matrix, exception records.

### DAT — Asset, data, and processing inventory

Required controls:

- Maintain authoritative asset and vendor inventories plus architecture and data-flow diagrams.
- Maintain a record of processing activities (ROPA) where GDPR applies or as the global operating baseline.
- Identify controller/processor roles, data categories, data subjects, sources, purposes, lawful bases, recipients, storage locations, retention periods, deletion methods, and international transfers.
- Complete privacy impact assessments before high-risk processing, systematic monitoring, material profiling, background checks, precise-location handling, large-scale student data, or sensitive-data collection.
- Prohibit unreviewed production vendors and undocumented data flows.

Required evidence: asset inventory, data inventory, diagrams, ROPA, privacy/DPIA assessments, vendor register, data-location register.

### IAM — Identity and access management

Required controls:

- Require unique production accounts and server-side authentication.
- Require MFA for administrators, developers with production access, support operators with confidential-data access, and privileged vendor accounts.
- Enforce least privilege, deny-by-default authorization, row-level security, tenant isolation, and role separation.
- Prohibit shared administrator credentials and client-side-only authorization.
- Review privileged access at least quarterly and promptly remove access after role change or termination.
- Log authentication, failed access, privilege changes, export activity, and sensitive administrative actions.
- Restrict service accounts to approved workloads and managed secrets.

Required evidence: role matrix, MFA proof, identity-provider settings, RLS/tenant-isolation tests, access reviews, joiner/mover/leaver tickets, audit logs.

### CRY — Cryptography and secret management

Required controls:

- Enforce TLS for data in transit and provider-supported encryption at rest.
- Store secrets only in approved server-side secret managers or protected deployment variables.
- Define key ownership, rotation, revocation, backup, and compromise procedures.
- Never place restricted data in URLs, public notes, client logs, analytics payloads, unencrypted exports, or browser storage.
- Pseudonymize/tokenize identifiers when full identity is unnecessary.

Required evidence: TLS tests, hosting/database settings, secret inventory, rotation records, key-management procedure, redaction tests.

### SDL — Secure development and change management

Required controls:

- Require protected branches, peer review, traceable commits, CI checks, approved deployment workflows, and rollback procedures.
- Run syntax/unit/integration tests plus secret scanning, static analysis, dependency scanning where dependencies exist, configuration checks, and security regressions.
- Separate development, test, staging, and production data and credentials.
- Prohibit real personal, student, worker, customer, or restricted data in test fixtures unless explicitly approved and protected.
- Threat-model account creation, profiles, job posts, exact locations, bids, messages, document uploads, student/application records, payments, exports, webhooks, AI features, and automated communications before production enablement.
- Record emergency changes and complete retrospective review.

Required evidence: pull requests, CI results, release records, threat models, architecture decisions, test reports, rollback exercises.

### LOG — Logging, monitoring, and auditability

Required controls:

- Centralize access-controlled production logs with synchronized time.
- Log security-relevant events without secrets or unnecessary personal data.
- Monitor authentication abuse, authorization failures, privileged activity, large exports, policy changes, data deletion, anomalous API use, storage-policy changes, and integration failures.
- Protect logs from alteration and define retention according to legal, operational, and privacy needs.
- Route actionable alerts to named responders and test alert delivery.

Required evidence: logging standard, redacted sample events, alert rules/tests, log-access reviews, retention settings.

### VUL — Vulnerability and security testing

Required controls:

- Maintain severity definitions and remediation targets.
- Scan public attack surfaces and hosted configurations before launch and after material changes.
- Conduct independent penetration testing before material public production use and periodically thereafter based on risk.
- Track findings to verified closure; exceptions require documented approval and expiration.
- Publish or maintain a responsible security-reporting channel.

Required evidence: scan reports, penetration-test report, remediation tickets, retest results, exception approvals, vulnerability-reporting process.

### TPR — Third-party and supply-chain risk

Required controls:

- Perform security/privacy due diligence before production use of hosting, database, authentication, analytics, advertising, AI, messaging, document, background-check, payment, support, or education vendors.
- Execute appropriate contracts, confidentiality terms, data-processing agreements, security addenda, breach-notification terms, deletion/return terms, and subprocessor terms.
- Use approved transfer mechanisms for GDPR-restricted international transfers.
- Review critical vendors at least annually and monitor material changes.
- Prevent marketing, analytics, AI training, or secondary use of user data unless specifically approved, disclosed, and legally supported.

Required evidence: due-diligence files, contracts/DPAs, SCCs or transfer mechanism, subprocessor list, annual reviews, termination/deletion proof.

### PRI — Privacy, lawful processing, and individual rights

Required controls:

- Collect only data necessary for a documented purpose and lawful basis.
- Provide clear, layered notices at or before collection; separate Forge, worker/provider, business, employer, and Admitly/student contexts where their purposes differ.
- Separate optional marketing consent from necessary service processing and record consent/withdrawal where consent is used.
- Implement authenticated procedures for access, correction, deletion, restriction, portability, objection, and applicable opt-out rights.
- Verify requesters without collecting excessive additional data.
- Maintain retention schedules and controlled deletion; document legal holds.
- Apply privacy by design/default: minimal fields, restrictive visibility, no tracking by default, short retention, no public precise locations, and no undisclosed secondary use.
- Assess automated ranking, matching, profiling, eligibility, admission, employment, pricing, and recommendation features; preserve required transparency and meaningful human review.

Required evidence: notices, consent records, data-rights log, request tests, retention/deletion jobs, legal-hold register, privacy reviews.

### IR — Incident and personal-data breach response

Required controls:

- Maintain an incident-response plan with severity criteria, roles, communications, evidence preservation, legal/privacy escalation, vendor coordination, and recovery.
- Maintain a personal-data breach assessment process. Where GDPR applies, evaluate supervisory-authority notification without undue delay and, where feasible, within 72 hours after awareness unless the applicable risk threshold is not met; document every decision.
- Define notification paths for affected users, customers, schools, partners, regulators, insurers, and law enforcement as applicable.
- Run at least annual tabletop exercises and after major architecture or staffing changes.
- Complete post-incident corrective-action reviews.

Required evidence: plan, contact roster, tabletop record, incident tickets, breach assessments, notification decisions, post-incident reports.

### BCP — Availability, backup, and recovery

Required controls:

- Define availability targets, recovery time objectives, and recovery point objectives based on business impact.
- Encrypt backups, restrict access, test restores, and retain restore evidence.
- Document continuity for authentication, database, storage, hosting, DNS, communications, and critical vendors.
- Test disaster recovery at least annually and after material platform changes.

Required evidence: business-impact analysis, backup settings, restore test, continuity plan, disaster-recovery exercise, corrective actions.

### HR — Personnel and security awareness

Required controls:

- Require confidentiality and acceptable-use commitments for employees and contractors.
- Perform role-appropriate screening where lawful and justified.
- Deliver security/privacy training at onboarding and at least annually.
- Train privileged users on phishing, secret handling, incident reporting, student/minor information, exact-location data, worker/customer safety, and administrator obligations.
- Apply documented joiner/mover/leaver procedures.

Required evidence: agreements, training records, role acknowledgments, access tickets, termination checklists.

### AUD — Evidence, testing, and assurance

Required controls:

- Maintain a control register mapping each control to applicable SOC 2 Trust Services Criteria, ISO/IEC 27001 requirements/Annex A control themes, GDPR obligations, product/legal overlays, owner, frequency, evidence, status, and last/next test dates.
- Preserve evidence in an access-controlled repository with naming, retention, reviewer, and integrity rules.
- Test design before launch and operating effectiveness over time.
- Perform internal ISMS audits and management review.
- Engage qualified independent professionals for SOC 2 examination, ISO certification, penetration testing, and legal/privacy advice when the corresponding claim or risk warrants it.

Required evidence: control matrix, workpapers, evidence index, internal-audit reports, management review, external reports/certificates.

## 6. Forge marketplace and worker-safety overlay

Before live marketplace operation, Forge must document and test:

- Provider identity, business, insurance, licensing, credential, and status verification appropriate to the service category and jurisdiction.
- Clear distinction between self-attested, document-reviewed, third-party-verified, and government-verified claims.
- Background-check process, authorization, adverse-action obligations, retention, vendor controls, and restricted access where background checks are used.
- No public display of exact home addresses, access codes, sensitive route details, private phone/email data, identity documents, or background-check information.
- Safety reporting, dispute handling, fraud response, emergency messaging, suspension, appeals, and evidence preservation.
- Human review for high-risk categories, provider activation, identity reveal, large exports, payments, dispatch, and exceptions.
- Market-specific contractor, employment-classification, wage, tax, insurance, licensing, transportation, home-services, consumer-protection, advertising, and communications-law assessments.
- Clear terms that Forge does not guarantee provider quality, licensure, employment, safety, or outcomes and does not replace emergency services or professional advice.

## 7. Admitly and student-data overlay

Admitly may collect information about education goals, school choices, deadlines, applications, essays, scholarships, employment, apprenticeships, and possibly minors. Before production collection:

- Define the intended minimum user age. Do not knowingly collect personal information from children under 13 unless a specifically designed, legally reviewed COPPA program with verifiable parental consent is implemented.
- For users under 18, apply age-appropriate notices, minimal collection, restricted defaults, no behavioral advertising, no sale/sharing, and a legally reviewed parental/guardian strategy where required.
- Do not request transcripts, government identifiers, financial-aid documents, disability/health information, school credentials, recommendation letters, or sensitive application documents in the static/demo phase.
- If Admitly contracts with a school or maintains records for a covered educational institution, perform a FERPA role and contract assessment. FERPA directly governs covered educational agencies/institutions and may govern Admitly contractually or as a party acting for the institution; do not advertise “FERPA compliant” without an exact documented basis.
- Limit school/employer access to records authorized for that purpose; log disclosures and prohibit redisclosure or secondary use where required.
- Separate coaching/advice from official school or admissions decisions; do not guarantee admission, scholarships, financial aid, licensure, union acceptance, or employment.
- Human review is required before any automated recommendation materially affects a student opportunity.
- Essay and application assistance must preserve applicant authorship and comply with school/application integrity rules; AI-generated content must be disclosed where required and not misrepresented as the student’s independent work.

## 8. Current repository posture and critical gaps

Existing controls—security headers, secret-pattern checks, row-level-security planning, legal/safety copy, consent checkboxes, no payment/SSN/password fields in the static MVP, CI checks, and explicit early-access boundaries—are useful evidence.

They are **not sufficient to claim SOC 2, ISO/IEC 27001 certification, GDPR compliance, FERPA compliance, or production readiness**. The repository currently identifies its administrator guard as client-side/demo-only; therefore real administrative data and production operator capabilities must remain unavailable until server-side authentication and authorization are implemented and tested.

Additional required work:

- Approved ISMS/privacy governance, scope, owners, risk register, and policy set.
- Complete production inventory, data-flow map, ROPA, retention schedule, and legal/applicability assessments.
- Replace local/demo persistence for real user data with production database controls, RLS/tenant isolation, encryption, backups, audit logging, and deletion workflows.
- Hosted evidence for MFA, authorization, storage privacy, monitoring, incident response, and restore testing.
- Vendor due diligence, contracts, DPAs, subprocessor disclosures, and transfer controls.
- Tested data-rights and deletion workflows.
- Minor/student-data design and age-gating decision before Admitly production intake.
- Workforce access lifecycle and training evidence.
- Independent penetration testing and remediation.
- Internal audit and management review.
- Independent SOC 2 examination and/or accredited ISO certification if those assurances will be claimed.

## 9. Required control register fields

Every production control must track:

`control_id`, `control_title`, `requirement`, `system_scope`, `SOC_2_mapping`, `ISO_27001_mapping`, `GDPR_mapping`, `education_minor_mapping`, `marketplace_legal_mapping`, `owner`, `operator`, `evidence_source`, `test_method`, `frequency`, `status`, `exception`, `exception_expiry`, `last_tested_at`, `next_test_at`, and `reviewer`.

Allowed status values: `not_started`, `designed`, `implemented_not_tested`, `operating`, `exception_open`, `failed`, `not_applicable_with_rationale`.

## 10. Mandatory artifacts

At minimum, maintain and securely retain:

- ISMS scope and charter
- Security and privacy governance policies
- Risk methodology and risk register
- ISO Statement of Applicability or equivalent control-selection record
- SOC 2 control matrix and readiness assessment
- GDPR/applicable-law assessment and ROPA
- Architecture and data-flow diagrams
- Data classification/handling and retention/deletion standards
- Access-control, cryptography, logging, vulnerability, secure-SDLC, incident-response, backup/DR, vendor-risk, data-rights, minor/student-data, marketplace-safety, background-check, and acceptable-use policies
- Vendor/subprocessor register and contracts
- Training, access-review, security-test, restore-test, and incident evidence
- Internal-audit and management-review records
- Human launch decision record

## 11. Prohibited public claims

Until supported by independent evidence, Forge and Admitly must not state or imply:

- “SOC 2 certified”
- “SOC 2 compliant” without a defined current readiness/report basis
- “ISO certified” without the exact valid certificate scope and standard version
- “GDPR certified,” “FERPA certified,” or “COPPA certified” merely because security controls or consent boxes exist
- “fully compliant,” “guaranteed safe,” or equivalent absolute claims

Permitted interim language must remain factual, for example: “Forge and Admitly are implementing a unified security and privacy control program aligned to SOC 2 Trust Services Criteria, ISO/IEC 27001:2022, and applicable privacy requirements; independent assurance is pending.”

## 12. Authoritative references

- AICPA & CIMA, System and Organization Controls and SOC 2 reporting resources.
- ISO, ISO/IEC 27001:2022, *Information security, cybersecurity and privacy protection — Information security management systems — Requirements*, including Amendment 1:2024.
- Regulation (EU) 2016/679 (General Data Protection Regulation).
- European Data Protection Board, Guidelines 3/2018 on the territorial scope of GDPR Article 3 and the SME Data Protection Guide.
- U.S. Department of Education, 34 CFR Part 99 (FERPA) and Protecting Student Privacy resources.
- Federal Trade Commission, Children’s Online Privacy Protection Rule (COPPA).
- Applicable state privacy, education, consumer-protection, employment, contractor, background-check, communications, and marketplace laws for each launch jurisdiction.

The licensed ISO standard and qualified professional advice must be used for final clause/control mapping and certification preparation; this document intentionally does not reproduce copyrighted standard text.
