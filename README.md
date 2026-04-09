# QuantLab Research Landing

QuantLab Research is the public web surface for the QuantLab system. This repo contains the landing assets and implementation work for the public-facing explanation layer.

## Git workflow

The default slice workflow for this repo is:

1. Open one issue for one coherent slice.
2. Create one fresh branch from `origin/main`.
3. Implement and validate the slice locally.
4. Commit the slice.
5. Push the branch.
6. Open one PR scoped only to that slice.
7. Review and resolve conflicts against `main`.
8. Merge the PR.
9. Close the linked issue.
10. Clean up stale local and remote branches when they are no longer needed.

## Repo workflow files

- [`AGENTS.md`](./AGENTS.md): rules for humans and coding agents
- [`.github/pull_request_template.md`](./.github/pull_request_template.md): PR checklist and scope controls
- [`.github/ISSUE_TEMPLATE/maintenance.md`](./.github/ISSUE_TEMPLATE/maintenance.md): maintenance slice issue template
- [`.github/ISSUE_TEMPLATE/bug_report.md`](./.github/ISSUE_TEMPLATE/bug_report.md): bug issue template

## Current evidence assets

Canonical desktop evidence assets live under [`public/evidence/desktop/`](./public/evidence/desktop/README.md).
