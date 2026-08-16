# Forge v133 Rollback and Operator Handoff

Date: 2026-08-15

## Rollback anchors

- Pre-v133 Git tag: checkpoint-before-forge-v133-deep-20260815
- Pre-v133 commit: 78b2e0eee7c6afb32fb30bc504e0b3068d596aca
- Pre-v133 production deployment: dpl_3wnmpREfXz8h9RZxrscDFd7x9nFB
- Existing domain pair: hireonforge.com and www.hireonforge.com

Do not delete the prior deployment. If v133 fails after promotion, repoint both domains to the verified prior deployment, verify both independently, then inspect logs before any new attempt. Do not merge draft PR #9 as part of rollback or release.

## Safe release sequence

1. Export a fresh Forge backup, verify its integrity, keep it outside Git, and confirm its lead count matches the browser total.
2. Confirm branch and clean intended diff.
3. Run the full npm run check suite.
4. Commit and push the branch plus rollback tag.
5. Confirm draft PR #9 remains open, draft, mergeable, and unmerged.
6. Wait for GitHub checks to pass on the exact commit.
7. Create a protected preview from that commit.
8. Verify preview authentication/noindex, routes, forms, assets, headers, browser behavior, and logs.
9. Compare deployed critical assets to committed files byte-for-byte.
10. Promote that exact verified deployment only.
11. Point both Forge domains to it and verify each domain independently.
12. Check hosted logs for function failures and unexpected 5xx responses.
13. Verify Stitch remains at its original branch/commit, protected, draft, unmerged, and unpromoted.

## Lead-preservation gate

- Never reset, replace, import over, or intentionally remove local lead state until a fresh backup covering the current lead count has passed Forge's recovery integrity check.
- Keep exported lead backups outside the repository; never commit, upload, print, or include their contents in release logs.
- Forge blocks Reset Demo Data when the recorded backup count is stale and requires an exact typed destructive confirmation even after a current backup exists.
- On 2026-08-15, the local v133 browser state reported 41 leads and a fresh 41-lead backup passed integrity verification before release work continued.
- A deployment does not migrate browser-local records. Preserve the original browser profile and its verified export until a separately approved durable destination is configured and a restore drill succeeds.

## Operator language

- Local: saved only in this browser.
- Sending: a bounded delivery attempt is active.
- Unavailable: no approved durable destination is configured.
- Rejected: input or policy validation failed and must be corrected.
- Delivered: the server returned a valid versioned receipt.
- Inactive: a concept is preserved but cannot send, refer, transact, or claim a relationship.
- Controlled beta: a working path with explicit manual and operational limitations.

Never substitute submitted, received, approved, funded, verified, trusted, partnered, or live for these states unless the corresponding evidence and approval actually exist.

## Human follow-up after release

- Choose a durable provider only through a separate approved decision.
- Approve operator authentication and recovery before opening private routes.
- Complete legal/privacy/retention/incident-response ownership.
- Keep Flex flags false until every written approval and official destination exists.
- Use only synthetic records during engineering verification.
- Preserve every existing lead and take a new verified backup after each authorized lead-data change.
- Preserve the protected Stitch fence.
