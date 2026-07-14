# ELENA Command Center Security Baseline

This checklist is the minimum safe foundation for operating Forge and related businesses from a home office. It does not contain credentials.

## Identity

- [ ] Separate daily-use and administrator accounts.
- [ ] Unique credentials stored in an approved password manager.
- [ ] Phishing-resistant MFA for Google Workspace, GitHub, domain registrar, hosting, finance, and password vault.
- [ ] Primary and sealed backup hardware security keys when affordable.
- [ ] Recovery codes stored offline in a protected location.
- [ ] Monthly review of administrators, OAuth grants, active sessions, integrations, and browser extensions.
- [ ] Immediate access removal after personnel or vendor changes.

## Devices

- [ ] Full-disk encryption enabled.
- [ ] Secure boot, firewall, automatic updates, rapid screen lock, and device tracking enabled.
- [ ] Daily work performed from a non-administrator account.
- [ ] Unused applications and extensions removed.
- [ ] Dedicated clean browser profile for production administration and finance.
- [ ] No Restricted data copied into personal notes, screenshots, or consumer chat tools.

## Network

- [ ] Router firmware current and administrator credentials unique.
- [ ] Modern Wi-Fi encryption enabled.
- [ ] Business devices separated from guest and IoT/media devices.
- [ ] No direct public exposure of remote desktop, databases, admin dashboards, or development servers.
- [ ] Secure identity-based remote access used when remote administration is required.
- [ ] Network configuration backed up after approved changes.

## Secrets

- [ ] API keys, database credentials, private keys, and tokens live only in a secrets manager or approved vault.
- [ ] Development, staging, and production use separate credentials.
- [ ] Repositories and build logs are scanned for secrets.
- [ ] Tokens use the smallest practical permission set and expiration.
- [ ] Credentials rotate after suspected exposure, vendor incidents, staff changes, or major architecture changes.

## Data

- [ ] Data classified as Public, Internal, Confidential, or Restricted.
- [ ] Restricted data includes credentials, identity documents, banking, payment data, protected health data, regulated cannabis records, and sensitive customer or employee records.
- [ ] Synthetic data is used by default in demos and tests.
- [ ] Search and AI retrieval systems preserve source-system permissions.
- [ ] Retention and deletion rules are documented by data type.
- [ ] Exports are logged and require approval when they contain Confidential or Restricted data.

## Backups and recovery

- [ ] Three copies of critical data.
- [ ] Two different storage systems or media.
- [ ] One copy isolated from the primary environment.
- [ ] Backups encrypted and access-controlled.
- [ ] Restoration test completed on a defined schedule.
- [ ] Canonical contracts, release evidence, security baselines, and compliance records preserved immutably.

## Repository and deployment

- [ ] Main/release branches protected.
- [ ] Material work performed through branches/worktrees and pull requests.
- [ ] Required checks pass before merge.
- [ ] Production credentials unavailable to routine worker agents.
- [ ] Deployments create an auditable release record.
- [ ] Database or infrastructure changes have backups and rollback instructions.
- [ ] Staging is separated from production.

## Agent controls

- [ ] Every agent has a purpose, tool allowlist, allowed paths, data boundary, budget, turn limit, and stop condition.
- [ ] Read-only work uses read-only agents.
- [ ] Write-capable agents work in isolated branches or worktrees.
- [ ] Builder and final reviewer are different roles for material changes.
- [ ] Retrieved content cannot expand tool permissions.
- [ ] External writes and consequential actions require a human approval gate.
- [ ] Agent costs, retries, failures, and human rework are logged.
- [ ] A kill-switch process can revoke agent credentials and pause automations without deleting evidence.

## Incident card

1. Stop the automation or agent.
2. Isolate the affected account, device, repository, or integration.
3. Preserve logs, commits, files, and timestamps.
4. Revoke exposed sessions or tokens.
5. Determine systems and data affected.
6. Obtain legal, compliance, insurance, or professional guidance when required.
7. Restore from a known-good state.
8. Validate security before reconnecting.
9. Document lessons and update controls.

## Purchasing rule

Use existing equipment and cloud services first. New hardware or subscriptions require a measured workload, security or reliability benefit, owner, total cost, lower-cost alternative, and expected payback. Social-media claims are not purchase authorization.
