# Forge AI Governance Foundation

Status: proposal branch; not deployed and not merged.

This directory defines the first controlled implementation of the ELENA Command Center inside Forge. It turns broad AI autonomy into a measurable, reversible engineering workflow.

## Operating chain

`INTAKE -> CLASSIFY -> PLAN -> EXECUTE IN ISOLATION -> TEST -> INDEPENDENT REVIEW -> HUMAN APPROVAL -> RELEASE -> MONITOR`

## Roles

- **Andrew** — business owner and final approver for external, financial, legal, regulated, destructive, and production actions.
- **Elena** — strategy, research, work-order design, risk review, and approval packet.
- **Dana/Codex** — controlled engineering execution, tests, commits, pull requests, and release evidence.
- **Specialist agents** — narrow workers for research, routine implementation, QA, security, review, and cost control.

## Day-one boundaries

Allowed without an additional approval:

- Read-only repository analysis.
- Draft plans, documentation, and test cases.
- Work on a dedicated branch or isolated worktree.
- Run local and CI checks.
- Prepare a draft pull request.

Requires explicit human approval:

- Merge or production deployment.
- External messages or public publishing.
- Payments, pricing changes, contracts, referrals, or financial commitments.
- Authentication, database, DNS, infrastructure, secret, or permission changes.
- Customer-data import/export or regulated actions.
- Destructive operations or history rewriting.

## Required artifacts for every material task

1. Task contract.
2. Risk classification.
3. Acceptance criteria.
4. Files changed.
5. Commands and tests run.
6. Security and privacy review.
7. Rollback method.
8. Human approval when required.
9. Exact commit and pull-request references.
10. Post-release result when a change is eventually deployed.

## Agent files

Project-scoped Claude Code subagents live in `.claude/agents/`. Their tool access and turn limits are intentionally narrow. Codex reads the repository-level `AGENTS.md` before work.

## Initial implementation order

1. Install read-only planner and researcher.
2. Install independent code, security, and QA reviewers.
3. Install a worktree-isolated routine worker.
4. Benchmark the agent set on ten real but non-production tasks.
5. Measure accepted-task rate, time, model cost, retries, and human rework.
6. Change permissions only after evidence supports the change.

## Canonical checks

Run `npm run check` after any code modification. A task is not complete merely because code was written; it is complete only when the stated acceptance criteria pass and the result has independent review.

## References

- Root operating rules: `AGENTS.md`
- Task template: `TASK_CONTRACT_TEMPLATE.md`
- Approval matrix: `APPROVAL_MATRIX.md`
- Security baseline: `SECURITY_BASELINE.md`
- Benchmark plan: `HYBRID_AGENT_BENCHMARK.md`
