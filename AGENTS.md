# AGENTS.md

Working rules for humans and coding agents in this repo.

## Purpose

`quant_lab` is a standalone commercial demo for QuantLab Research. The repo should stay coherent, deployable, and easy to extend without creating duplicate surfaces or conflicting sources of truth.

## Non-negotiable rules

- Keep `npm` as the only package manager in active use.
- Treat `package-lock.json` as the only lockfile.
- Do not reintroduce `bun.lockb`, `bun.lock`, or alternate dependency locks.
- Do not use `Lovable`, `demo comercial`, or `QuantLab Workspace` in public copy.
- Preserve the brand architecture:
  - `QuantLab Research` = public surface.
  - `QuantLab Core` = engine.
  - `Quant Pulse` = editorial / signal layer.

## Source of truth

- Product copy and shared content belong in `src/content/quantlab.ts` when that file exists in the active slice.
- Navigation and page composition belong in `src/pages/Index.tsx`.
- Presentation components should consume shared content instead of duplicating strings.
- If a concept already exists in the site, extend that section instead of creating a parallel one.

## Change policy

- Before editing, inspect the current tree and search for existing coverage of the same idea.
- Prefer the smallest coherent patch that solves the problem.
- Avoid adding two sections, buttons, or data files that describe the same thing in different words.
- Remove dead surfaces when replacing them. Do not leave old copies beside new ones.
- Keep copy precise and technical. Avoid marketing inflation.

## Agent coordination

- If multiple agents or work items are active, assign disjoint file ownership.
- Do not edit the same file from two parallel tasks unless strictly necessary.
- When a new task overlaps with an existing one, reuse the existing source of truth instead of adding another.
- Summaries should mention the files changed and whether new content replaces old content.

## Mandatory GitHub slice workflow

This workflow is the default written policy for future coding agents working in this repo.

Notice to future agents: if you are about to start coding in this repo, stop and follow the workflow below unless the user explicitly asks for a different process.

- Follow this sequence for each coherent slice:
  `issue -> fresh branch from origin/main -> work -> validate -> commit -> push -> PR -> conflict review -> merge -> close issue -> local/remote branch cleanup`
- Create one issue per slice before starting implementation unless the user explicitly overrides that requirement.
- Create one fresh branch per slice from `origin/main`.
- Keep one coherent slice per branch and per PR.
- Do not continue unrelated follow-up work on a branch that is already under review, effectively merged, or nearly ready to merge.
- Validate the slice locally before commit whenever the environment allows it.
- Commit the slice before opening or updating the PR.
- Push the branch to remote before opening the PR.
- Open one PR per slice and keep the PR scoped to that slice only.
- Review conflicts with `main` before merge and resolve them explicitly.
- Merge the PR before starting unrelated follow-up work on the same branch.
- Close the linked issue after merge, or let the PR close it automatically when appropriate.
- Delete stale local and remote branches after merge when they are no longer needed.
- Do not delete branches that still contain unmerged work.

## Workflow enforcement notes

- Prefer squash merge for documentation, copy, contract, and other narrow slices unless the user asks for a different merge style.
- Require the documented validation steps to pass before merge whenever the environment allows them to run.
- If new scope appears during review, open a follow-up issue and branch instead of stretching the current PR beyond its slice boundary.
- If the current worktree is dirty with unrelated changes, use a separate branch or worktree before starting another slice.
- When finishing a slice, report issue, branch, PR, exact files changed, a compact summary, residual limitations, and the next logical slice.
- Treat this policy as the repo default for agents; only depart from it when the user explicitly asks for a different workflow.

## Validation

- Run `npm run build` after content or layout changes.
- Run `npm run lint` after code changes.
- Run `npm test` when the environment supports it.
- If you touched public copy, search for forbidden terms and duplicate concepts before finishing.
- If you touched deployment metadata, verify the final URL and output folder.

## Safe defaults

- Keep changes local to the current workspace unless the task explicitly asks for repo-wide work.
- Track new slices through an issue, not ad hoc notes in chat.
- If something should be tracked for later, open a follow-up issue instead of extending the current slice beyond its boundary.
