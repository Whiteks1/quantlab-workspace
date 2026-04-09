# QuantLab Research Architecture

This document explains the product structure that the QuantLab Research landing presents.

For the repo-level scope rule, see [brand-architecture.md](./brand-architecture.md).

## Product sentence

QuantLab Research is the public quantitative research product inside the broader QuantLab ecosystem, with supervised operational boundaries and reviewable outputs.

## Brand architecture

- QuantLab is the umbrella ecosystem.
- QuantLab Research is the research product presented in this repo.
- QuantPulse is a sibling signal product in the same ecosystem.
- QuantLab Core is the internal engine that executes and preserves research continuity.

## Core layers

### QuantLab Research

The public research product.

- explains the workflow
- presents evidence and outputs
- clarifies boundaries
- does not pretend to be the execution runtime

### QuantLab Core

The internal research and execution engine.

- runs experiments and sweeps
- persists canonical artifacts
- maintains continuity across runs and paper sessions
- owns execution-side truth

### QuantPulse

The sibling signal product.

- surfaces signal and context
- helps prioritize what should be researched next
- does not sit inside QuantLab Research as an internal module

## Core goal

The system should let an operator move from signal to evidence without losing context, lineage, or control.

That requires:

- a clear public explanation layer
- a reproducible execution layer
- a clear ecosystem relationship between products
- explicit boundaries between research, paper continuation, and execution safety

## Non-goals

This repo does not try to:

- rebuild the full desktop shell
- replace the upstream QuantLab runtime docs
- simulate live operations in the public site
- collapse QuantLab Research, QuantLab Core, and QuantPulse into one vague product label

## Authority model

### QuantLab Research owns

- public explanation
- narrative clarity
- evidence framing
- boundary communication

### QuantLab Core owns

- run execution
- run history
- artifact truth
- paper and execution boundaries

### QuantPulse owns

- signal prioritization
- context surfaces
- early hypothesis shaping

## Public architecture modules

The landing currently presents these modules:

- QuantLab
- QuantLab Research
- QuantPulse
- QuantLab Core
- Artifacts
- Compare
- Boundary
- CLI / automation
- Docs / evidence

## Source alignment

Landing copy and labels should remain aligned with:

- [src/content/quantlab.ts](../src/content/quantlab.ts)
- [src/components/landing/ArchitectureSection.tsx](../src/components/landing/ArchitectureSection.tsx)
- [src/components/landing/EntityModelSection.tsx](../src/components/landing/EntityModelSection.tsx)

## Upstream reference

- [QuantLab Desktop v1](https://github.com/Whiteks1/quantlab/blob/main/docs/quantlab-desktop-v1.md)
