# Forge v133 Issue Ledger

Date: 2026-08-15

This ledger records the deep-hardening baseline, ranked risks, changes, and remaining human gates. It is not a broad-launch approval.

## Verified starting point

- Branch: release/forge-v127-20260815
- Starting commit: 78b2e0eee7c6afb32fb30bc504e0b3068d596aca
- Rollback tag: checkpoint-before-forge-v133-deep-20260815
- Pull request: draft #9; it must remain unmerged
- Baseline production deployment: dpl_3wnmpREfXz8h9RZxrscDFd7x9nFB
- Baseline checks: full npm run check passed
- Baseline browser: 1440 x 900 and 390 x 844, zero horizontal overflow, zero console errors, zero undersized visible public controls
- Baseline homepage: eight visible sections, two primary hero actions, approximately 4,700 visible characters
- Baseline public shell: index 335,259 bytes; CSS 300,409 bytes; JavaScript 1,126,090 bytes

## Ranked findings and dispositions

| Priority | Finding | Risk | v133 disposition |
| --- | --- | --- | --- |
| P0 | Stale v114 HTML snapshot remained deployable as index 2.html and contained an obsolete referral placeholder | Accidental public exposure and contradictory product truth | Moved to a clearly labeled non-HTML archive text file |
| P0 | Old Capital helper retained opaque no-cors delivery and success-like wording | Could imply delivery without a readable receipt | Removed; browser delivery now uses the versioned same-origin Capital endpoint only |
| P0 | Flex activation did not require the complete legal/operator/logo/agreement gate set | Premature partner-link exposure | One policy function now requires every gate plus a non-placeholder HTTPS URL |
| P0 | Service worker could retain unrelated or unsafe request classes without a formal executable contract | Stale release, private-route, or error caching | Replaced with same-origin/version-aware rules and a functional cache test |
| P1 | Routes had no single machine-readable audience/action/status registry | Broken orientation, alias drift, unclear ownership | Added registry and exhaustive filesystem-to-registry test |
| P1 | Worker Trust / Proof Ledger inferred strong tiers from provider-entered words | Unverified claims could appear reviewed | Tiers now require explicit human-reviewed state; supplied proof is labeled unverified |
| P1 | Capital endpoint accepted undeclared fields and character-count size checks | Oversharing and Unicode-size bypass | Added strict allowlist, nested secret checks, and UTF-8 byte limit |
| P1 | CSV export did not have an executable spreadsheet-injection contract | Formula execution when operators open exports | Added shared escaping/neutralization utility and regression tests |
| P1 | Operator fence omitted monetization-admin and nested capture/report paths | Public access or caching drift | Expanded middleware, headers, registry convention, and tests |
| P1 | Public impact copy read like a completed fund-flow claim | Unsupported impact impression | Recast as a future stated policy with an explicit no-current-outcome disclaimer |
| P2 | Large PNG hero assets were always transferred | Slow first view on mobile | Added AVIF sources at 75–114 KB while retaining PNG fallbacks |
| P2 | The app performed a duplicate account render and a second full render during boot | Avoidable main-thread work | Removed duplicate work and hydrates static selects once |
| P2 | Route loader did not verify it received the matching release shell | Mixed-release UI after cache/deploy changes | Added content-type and release-marker validation with an accessible retry state |
| P2 | Design values were split across duplicate root blocks | Token drift and difficult review | Consolidated a named v133 token layer for surfaces, text, states, spacing, focus, radius, width, and touch size |
| P3 | Several simple redirect shells lacked meaningful fallback landmarks | Weak no-JavaScript and assistive-technology experience | Added main headings and explanatory fallback content |

## Deliberately not activated

- Supabase or any other storage provider
- Production authentication
- Payment or banking systems
- Flex referral, link, logo, outreach, or data sharing
- Real customer/provider data or live outreach
- New dependency, plugin, package, or paid service
- Stitch edits, deployment, promotion, or merge

## Remaining human gates

- Select and approve a durable storage/delivery provider.
- Configure production operator authentication, roles, audit history, and recovery.
- Complete legal, privacy, retention, incident-response, partner, and operational-owner review.
- Obtain written Flex relationship, agreement, language, logo, data-sharing, operator, legal, and official-link approvals.
- Confirm any impact allocation and fund-flow process before claiming a distribution.
- Approve broad launch separately. Passing v133 engineering checks does not make broad launch automatic.
