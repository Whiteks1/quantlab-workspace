# QuantLab Research Landing Roadmap

## Status snapshot

The landing is currently in the evidence-and-docs hardening stage.

- The public surface and information architecture are implemented.
- The site already explains the system model, workflow, artifact contract, and brand boundaries.
- Real desktop evidence assets are committed and integrated into the landing.
- Contributor workflow templates are in place for slices, maintenance tasks, and bug reports.
- Local documentation now exists in-repo instead of living only inside a preserved stash.
- CI validation is now automated in GitHub Actions for pushes, pull requests, and manual dispatch.
- GitHub Pages deployment is now automated from `main` to `gh-pages`.

## Phase breakdown

### Phase 1. Public brand surface

Status: completed

Delivered:

- hero and positioning for `QuantLab Research`
- explicit separation between `QuantLab Research`, `QuantLab Core`, and `Quant Pulse`
- public-facing navigation and section composition

Implemented in:

- [`src/components/landing/HeroSection.tsx`](./src/components/landing/HeroSection.tsx)
- [`src/components/landing/Navbar.tsx`](./src/components/landing/Navbar.tsx)
- [`src/pages/Index.tsx`](./src/pages/Index.tsx)

### Phase 2. System model and workflow narrative

Status: completed

Delivered:

- entity model for signal, experiment, run, sweep, comparison, candidate, baseline, and paper session
- architecture module map
- workflow from hypothesis to paper promotion

Implemented in:

- [`src/content/quantlab.ts`](./src/content/quantlab.ts)
- [`src/components/landing/EntityModelSection.tsx`](./src/components/landing/EntityModelSection.tsx)
- [`src/components/landing/ArchitectureSection.tsx`](./src/components/landing/ArchitectureSection.tsx)
- [`src/components/landing/WorkflowSection.tsx`](./src/components/landing/WorkflowSection.tsx)

### Phase 3. Evidence and artifact contract

Status: completed

Delivered:

- artifact groups and canonical path examples
- desktop evidence section in the landing
- stable naming convention for future desktop captures
- committed real screenshots under `public/evidence/desktop/`
- landing wiring that uses the real evidence assets directly

Implemented in:

- [`src/components/landing/ProductPreview.tsx`](./src/components/landing/ProductPreview.tsx)
- [`src/components/landing/ArtifactsSection.tsx`](./src/components/landing/ArtifactsSection.tsx)
- [`public/evidence/desktop/README.md`](./public/evidence/desktop/README.md)

### Phase 4. Local repo documentation and workflow hygiene

Status: completed

Delivered:

- repo rules for source-of-truth discipline and slice workflow
- PR, maintenance, and bug templates aligned with the repo workflow
- root README updated to reflect the actual implementation
- local mirror docs for architecture, CLI, and artifact contracts

Implemented in:

- [`AGENTS.md`](./AGENTS.md)
- [`.github/pull_request_template.md`](./.github/pull_request_template.md)
- [`.github/ISSUE_TEMPLATE/maintenance.md`](./.github/ISSUE_TEMPLATE/maintenance.md)
- [`.github/ISSUE_TEMPLATE/bug_report.md`](./.github/ISSUE_TEMPLATE/bug_report.md)
- [`README.md`](./README.md)
- [`docs/README.md`](./docs/README.md)
- [`docs/architecture.md`](./docs/architecture.md)
- [`docs/cli.md`](./docs/cli.md)
- [`docs/run-artifact-contract.md`](./docs/run-artifact-contract.md)
- [`docs/output-structure.md`](./docs/output-structure.md)

### Phase 5. CI and release hardening

Status: completed

Delivered:

- GitHub Actions workflow that runs `npm ci`, `npm run build`, `npm run lint`, and `npm test`
- local CI and merge policy documentation for required checks and merge discipline
- branch protection on `main` requiring the `Build, Lint, and Test` check and an up-to-date branch before merge
- GitHub Actions workflow that publishes the production build to `gh-pages`

## Recommended next slices

1. Decide whether the landing should eventually expose local HTML docs instead of GitHub markdown pages for the documentation links.
2. Decide whether to tighten branch protection further with required reviews or conversation resolution.
3. Decide whether GitHub Pages should stay branch-based or move to the native Pages artifact deployment model.
