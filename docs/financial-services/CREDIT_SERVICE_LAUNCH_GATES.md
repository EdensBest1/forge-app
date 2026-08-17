# Credit Improvement Service — public launch gates

**Status: BLOCKED FOR PUBLIC COMMERCIALIZATION**

`FS-CREDIT-001` may be used only for protected internal/self-help analysis and drafting. The current public surface is information-only and has no enrollment, contact, case, or document intake. Forge must not enroll paying public customers, advertise regulated outcomes, accept credit-service fees, or enable client-service/white-label operation until every applicable gate below has evidence and named human sign-off.

This checklist is an engineering and launch control, not legal advice. Qualified counsel must determine which federal, state, and local requirements apply to the final service, customer locations, channels, pricing, and operating model.

Official baseline references for counsel and compliance review:

- [FTC — Credit Repair Organizations Act](https://www.ftc.gov/legal-library/browse/statutes/credit-repair-organizations-act)
- [FTC — Telemarketing Sales Rule compliance guide](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule)
- [CFPB — Regulation V direct-dispute rule](https://www.consumerfinance.gov/rules-policy/regulations/1022/43/)
- [California DOJ — Credit Services Organizations](https://oag.ca.gov/consumers/credit-services-organizations)
- [Oregon DFR — Debt Management Service Providers](https://dfr.oregon.gov/business/licensing/financial/pages/debt-management.aspx)
- [FTC — Safeguards Rule](https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know)

## 1. Scope and legal classification

- [ ] Written counsel memo classifies each proposed feature and business entity.
- [ ] Counsel reviews the Credit Repair Organizations Act and all applicable state credit-services or credit-repair laws.
- [ ] State-by-state matrix covers registration, licensing, bonding, responsible-person, office, recordkeeping, and renewal requirements.
- [ ] Counsel reviews FCRA, FDCPA, FTC/CFPB consumer-protection requirements, telemarketing rules when applicable, E-SIGN, privacy, and advertising requirements.
- [ ] Service boundaries distinguish education, software, document preparation, credit counseling, debt settlement, legal services, and licensed professional work.
- [ ] Geographic blocking prevents service where required approvals are absent.

**Evidence:** counsel memo, state matrix, approved service map, legal owner sign-off.

## 2. Entity, registration, insurance, and professional network

- [ ] Correct operating entity and assumed names are active and in good standing.
- [ ] Required state registrations, licenses, bonds, and renewals are complete.
- [ ] Insurance review covers cyber, technology E&O, professional liability, crime/fidelity, and general liability as applicable.
- [ ] Attorney, qualified credit counselor, and escalation network engagement terms are documented.
- [ ] Forge does not imply that an AI agent or unlicensed employee is an attorney, counselor, bureau, government representative, or credit professional beyond the approved role.

**Evidence:** entity records, licenses, bonds, certificates, professional agreements.

## 3. Contracts, disclosures, cancellation, and pricing

- [ ] Counsel-approved customer agreement accurately describes every service and limitation.
- [ ] Required statutory disclosures are conspicuous and delivered at the required time.
- [ ] Cancellation rights and cancellation workflow meet all applicable timing and notice requirements.
- [ ] Pricing, invoicing, and collection timing receive written counsel approval, including restrictions on advance payment.
- [ ] No prohibited guarantee, deletion promise, score promise, or misleading expected-result language appears in sales materials or scripts.
- [ ] Refund, complaint, cancellation, and service-completion evidence workflows are operational.
- [ ] E-signature and consent records are timestamped, versioned, and exportable.

**Evidence:** approved agreement, disclosure set, pricing memo, cancellation test, marketing approval.

## 4. Truthful dispute and evidence controls

- [ ] Every dispute claim is tied to a customer attestation and evidence reference.
- [ ] Accurate information is never disputed merely to seek deletion.
- [ ] Blanket, repetitive, frivolous, and unsupported disputes are blocked.
- [ ] CPN, synthetic identity, deceptive tradeline, and fabricated identity-theft workflows are blocked.
- [ ] Identity-theft claims require heightened verification, explicit attestation, and specialist review.
- [ ] Templates prohibit impersonation, false statements, altered records, and fabricated attachments.
- [ ] Reinsertion, response, and unresolved-case handling is documented.
- [ ] Quality sampling and reviewer calibration occur on a defined schedule.

**Evidence:** policy tests, sample reviewed cases, QA procedure, exception log.

## 5. Security, privacy, and data lifecycle

- [ ] Independent security review confirms tenant isolation and default-deny authorization.
- [ ] PII is encrypted in transit and at rest with tenant-scoped keys and field-level protection where appropriate.
- [ ] SSNs, identity documents, reports, and account data remain in an approved vault and are represented to models by opaque references.
- [ ] Credentials use scoped tokens or app-specific credentials in a secrets manager; raw mailbox or bank passwords are prohibited.
- [ ] MFA, session controls, least privilege, break-glass review, and offboarding are tested.
- [ ] Data-processing inventory, privacy notices, consent, retention, correction, deletion, and incident-response processes are complete.
- [ ] Customer data is excluded from model training unless separately and lawfully authorized.
- [ ] Vendor and model-provider security/privacy agreements are approved.
- [ ] Penetration testing and incident-response tabletop are complete.

**Evidence:** architecture review, test reports, vendor register, privacy artifacts, incident exercise.

## 6. Human approvals, communications, and auditability

- [ ] Account connections require verified customer consent and MFA.
- [ ] External letters, emails, forms, and submissions require human approval of recipient, content, evidence, and channel.
- [ ] The sender identity clearly reflects the customer or properly authorized professional; the system never impersonates.
- [ ] Settlement, payment-plan, PII-sharing, and professional-handoff actions have separate approval gates.
- [ ] Every decision records task, tenant, case, sources, versions, draft hash, approver, timestamps, delivery response, and changes.
- [ ] Audit records are append-only, tenant-scoped, access-controlled, retained for the legally approved period, and exportable for complaints or examinations.
- [ ] Approval cannot be inferred from a prompt; it must be a verified workflow event.

**Evidence:** approval-flow test, sample immutable audit export, access review.

## 7. Operations, training, complaints, and monitoring

- [ ] SOPs cover intake, identity verification, evidence sufficiency, drafting, review, delivery, responses, deadlines, escalations, cancellation, refunds, and closure.
- [ ] Staff training includes prohibited practices, privacy, security, accessibility, vulnerable customers, and escalation.
- [ ] Complaint intake, investigation, remediation, regulator response, and trend reporting are operational.
- [ ] Metrics monitor unsupported-dispute blocks, approval overrides, complaints, cancellations, response times, security events, and marketing claims.
- [ ] Outcome reporting avoids cherry-picking and never implies guaranteed score or deletion results.
- [ ] Business continuity, backup restoration, incident notification, and vendor-failure procedures are tested.

**Evidence:** SOP binder, training records, complaint drill, monitoring dashboard, recovery test.

## 8. Product and launch verification

- [ ] `node nexus/financial-service-test.mjs` passes in the release candidate.
- [ ] Independent tests attempt false disputes, CPN activity, synthetic identities, false identity-theft claims, accurate-information removal, prompt injection, PII leakage, tenant crossing, and approval bypass.
- [ ] Production connectors enforce policy independently of the model and router.
- [ ] No connector permits automatic sending, payment, filing, or representation.
- [ ] Website, sales scripts, onboarding, agreements, agent behavior, and support scripts match the counsel-approved scope.
- [ ] Controlled pilot has written participant criteria, monitoring, stop conditions, and incident owner.
- [ ] Security, legal, compliance, operations, finance, and executive owners sign the final go/no-go record.

**Evidence:** release report, adversarial test report, connector review, pilot plan, signed go/no-go record.

## Required sign-off record

| Owner | Name | Decision | Date | Evidence reference |
|---|---|---|---|---|
| Legal counsel |  |  |  |  |
| Compliance |  |  |  |  |
| Security/privacy |  |  |  |  |
| Operations/QA |  |  |  |  |
| Finance/pricing |  |  |  |  |
| Executive owner |  |  |  |  |

The public-launch status remains `blocked` until every applicable checklist item is complete, unresolved exceptions are accepted in writing by the appropriate accountable owner and counsel, and the signed go/no-go record is archived.
