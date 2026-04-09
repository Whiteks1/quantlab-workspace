# CI And Merge Policy

This document defines the expected validation and merge discipline for the QuantLab Research landing repo.

## CI baseline

The repository CI workflow is defined in:

- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)

The current baseline job runs:

```bash
npm ci
npm run build
npm run lint
npm test
```

## Required checks

The currently enforced required check for pull requests on `main` is:

- `Build, Lint, and Test`

Branch protection is configured so `main` must be up to date and pass this check before merge.

## Merge policy

Use the following merge policy by default:

1. One issue per slice.
2. One fresh branch from `origin/main` per issue.
3. One PR per slice.
4. CI must pass before merge when the environment allows it.
5. Prefer squash merge for documentation, copy, workflow, and contract slices.
6. Open a follow-up issue instead of stretching an almost-merged PR with unrelated scope.

## Active branch protection

The current GitHub configuration for `main` is:

- require `Build, Lint, and Test`
- require the branch to be up to date before merge
- disallow force pushes
- disallow branch deletion

## Review expectations

Before merge, confirm that:

- the PR stays within one coherent slice
- the source of truth was extended instead of duplicated
- public copy stays aligned with `QuantLab Research` branding
- no alternate lockfiles or package managers were reintroduced

## When to defer merge

Do not merge yet if:

- CI is failing for the slice
- the PR mixes unrelated surfaces or concerns
- required screenshots or evidence assets are still missing for a slice that depends on them
- the branch has drifted into follow-up work that belongs in a separate issue

## Related docs

- [README.md](../README.md)
- [AGENTS.md](../AGENTS.md)
- [ROADMAP.md](../ROADMAP.md)
