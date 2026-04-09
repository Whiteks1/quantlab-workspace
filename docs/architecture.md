# QuantLab Research Architecture

This document explains the product structure that the QuantLab Research landing presents.

## Product sentence

QuantLab Research is the public-facing explanation layer for a reproducible quantitative research system with supervised operational boundaries.

## Core layers

### QuantLab Research

The public surface.

- explains the workflow
- presents evidence and outputs
- clarifies boundaries
- does not pretend to be the execution runtime

### QuantLab Core

The research and execution engine.

- runs experiments and sweeps
- persists canonical artifacts
- maintains continuity across runs and paper sessions
- owns execution-side truth

### Quant Pulse

The signal and hypothesis layer.

- frames research intent
- captures upstream notes and context
- proposes what should be tested next

## Core goal

The system should let an operator move from signal to evidence without losing context, lineage, or control.

That requires:

- a clear public explanation layer
- a reproducible execution layer
- explicit boundaries between research, paper continuation, and execution safety

## Non-goals

This repo does not try to:

- rebuild the full desktop shell
- replace the upstream QuantLab runtime docs
- simulate live operations in the public site
- collapse QuantLab Research, QuantLab Core, and Quant Pulse into one vague product label

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

### Quant Pulse owns

- signal intake
- upstream research framing
- early hypothesis shaping

## Public architecture modules

The landing currently presents these modules:

- Quant Pulse
- QuantLab Research
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
