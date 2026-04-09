---
name: Maintenance task
about: Track refactors, cleanup, workflow, or content alignment
title: "[Maintenance] "
labels: maintenance
---

## Goal

State the specific change.

## Branch plan

State the branch name that should be created for this slice.

## Workflow plan

State how this slice will move through:
`issue -> branch -> validate -> commit -> push -> PR -> merge -> close issue -> branch cleanup`

## Slice boundary

State what this slice should change and what it should not change.

## Exact files expected

List the files that should be touched.

## Source of truth

What existing file or section should this extend instead of duplicating?

## Expected outcome

Describe the user-visible, structural, or workflow outcome expected from this slice.

## Validation

- [ ] `npm run build`
- [ ] `npm run lint`
- [ ] `npm test`
- [ ] Search for stale or duplicated content or workflow rules

## Conflict and merge notes

- [ ] This slice should be rebased or conflict-reviewed against `main` before merge.
- [ ] Follow-up work should go into a new issue and branch if scope grows.

## Residual limitations

-

## Next logical slice

-

## Notes

-
