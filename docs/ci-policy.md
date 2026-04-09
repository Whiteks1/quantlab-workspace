# CI And Merge Policy

This document defines the expected validation and merge discipline for the QuantLab Research landing repo.

## CI baseline

There is not yet a committed GitHub Actions workflow in this repo. The current documented validation baseline is:

```bash
npm ci
npm run build
npm run lint
npm test
```

## Required checks

The intended required check for pull requests, once repo automation exists, is:

- `Build, Lint, and Test`

If GitHub branch protection is enabled later, this check should be marked as required before merge.

## Merge policy

Use the following merge policy by default:

1. One issue per slice.
2. One fresh branch from `origin/main` per issue.
3. One PR per slice.
4. CI must pass before merge when the environment allows it.
5. Prefer squash merge for documentation, copy, workflow, and contract slices.
6. Open a follow-up issue instead of stretching an almost-merged PR with unrelated scope.

## Review expectations

Before merge, confirm that:

- the PR stays within one coherent slice
- the source of truth was extended instead of duplicated
- public copy stays aligned with `QuantLab Research` branding
- no alternate lockfiles or package managers were reintroduced

## When to defer merge

Do not merge yet if:

- CI is failing for the slice
- the slice depends on automation that is not yet present in the repo
- the PR mixes unrelated surfaces or concerns
- required screenshots or evidence assets are still missing for a slice that depends on them
- the branch has drifted into follow-up work that belongs in a separate issue

## Related docs

- [README.md](../README.md)
- [AGENTS.md](../AGENTS.md)
- [ROADMAP.md](../ROADMAP.md)
