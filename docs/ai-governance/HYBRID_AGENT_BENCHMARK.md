# Hybrid Agent Benchmark Plan

Purpose: determine whether premium-planner plus lower-cost-worker routing improves accepted-task cost without weakening quality or safety.

Social-media benchmark percentages are not accepted as facts. This experiment uses Forge tasks, fixed acceptance criteria, and independent review.

## Configurations

A. **Premium only** — one premium model plans, executes, and reviews, followed by the same independent human/agent acceptance review used for every configuration.

B. **Orchestrator-worker hybrid** — premium model plans and decomposes; lower-cost workers execute bounded tasks; a separate reviewer verifies the result.

C. **Worker with advisor escalation** — lower-cost executor performs the task and calls a premium advisor only on predefined escalation triggers.

D. **Worker only** — lower-cost model completes the task with the same tools and task contract. This is a cost floor, not an assumed production standard.

## Ten-task set

Use non-production tasks representative of real work:

1. Correct a small accessibility defect.
2. Add a deterministic regression check.
3. Update one documentation section from existing source material.
4. Trace a lead field across form, storage, admin, and export surfaces.
5. Identify a public/private data-boundary risk.
6. Add a small, isolated service category without changing unrelated behavior.
7. Investigate a failing check and propose the minimum repair.
8. Review a diff for security and misleading product claims.
9. Produce a release evidence packet from a completed branch.
10. Analyze duplicate or conflicting launch guidance and propose reconciliation.

Each task receives the same starting commit, task contract, allowed tools, time limit, acceptance tests, and reviewer rubric.

## Metrics

- Acceptance criteria passed on first submission.
- Independent review result.
- Defects discovered after submission.
- Security or privacy violations.
- Unsupported claims introduced.
- Total model cost.
- Premium-model share of cost and turns.
- Elapsed time.
- Number of retries.
- Human rework minutes.
- Files changed outside scope.
- Test coverage added or preserved.

## Escalation triggers

The executor must stop or consult the premium advisor when:

- Requirements conflict or are ambiguous.
- Evidence is missing or sources disagree.
- A test fails without an understood cause.
- Authentication, authorization, payments, personal data, compliance, or production is involved.
- The task requires a new dependency or permission.
- The estimated budget or turn limit will be exceeded.
- The requested action is external, irreversible, or outside the task contract.

## Acceptance rubric

A result is accepted only when:

1. Every required test passes.
2. No unrelated files changed.
3. Product claims remain accurate and appropriately qualified.
4. Public/private and consent boundaries remain intact.
5. Security review finds no unresolved high-severity issue.
6. The task contract and evidence packet are complete.
7. The independent reviewer agrees that acceptance criteria are met.

## Decision rule

Adopt a hybrid configuration only when it meets the same acceptance threshold as premium-only work and demonstrates meaningful savings in cost or cycle time without increasing human rework or security risk. Otherwise, retain the premium model for that task class.

## Output

Record one row per task and configuration with raw results, not only averages. Publish:

- Best configuration by task class.
- Tasks that must remain premium-led.
- Approved worker permissions.
- Default budgets and turn limits.
- Failure patterns and revised agent instructions.
- Re-test date.
