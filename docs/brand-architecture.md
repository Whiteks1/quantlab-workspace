# QuantLab Research Brand Architecture

This file freezes the product-surface rule for this repo.

## Core rule

This repo represents one public product surface: **QuantLab Research**.

It does not represent the whole QuantLab ecosystem, and it should not read like a company homepage, a workspace shell catch-all, or a mixed product bundle.

## Canonical model for this repo

- **Public surface repo:** QuantLab Research
- **Sibling repo or sibling product:** QuantPulse
- **Internal engine:** QuantLab Core
- **Umbrella concept:** QuantLab

## What belongs in this repo

- the value proposition of `QuantLab Research`
- the public workflow of research, runs, artifacts, validation, and evidence
- the visual system that supports that public story
- copy that explains how `QuantPulse` relates to `QuantLab Research`
- discrete technical mentions of `QuantLab Core` when they add necessary context

## What does not belong in this repo

- the full implementation or product story of `QuantPulse`
- the full umbrella architecture as if this repo were the entire company surface
- dominant `Workspace` branding that competes with `QuantLab Research`
- mixed messaging that tries to sell research, signal, engine, and media or feed surfaces at the same time

## Five-second comprehension test

Someone landing here should understand this in about five seconds:

> This is QuantLab Research.

They should **not** leave with any of these impressions:

- this is all of QuantLab
- this is a generic demo
- this is an undefined workspace
- this mixes QuantLab Research and QuantPulse into one product

## Presentation rules

- `QuantLab Research` is the dominant product name on this landing.
- `QuantPulse` may be mentioned, but only as a sibling product, never as an internal feature of QuantLab Research.
- `QuantLab Core` may be mentioned, but only as an internal engine or technical note, never as the primary visible brand.
- `QuantLab` may be mentioned as the umbrella concept, but it must not dominate the homepage message.

## Editing rule for future agents

When a copy or layout decision creates ambiguity, prefer the narrower interpretation:

- foreground `QuantLab Research`
- background `QuantLab`
- mention `QuantPulse` only to disambiguate
- mention `QuantLab Core` only when technical context matters

## Source alignment

Keep this file aligned with:

- [README.md](../README.md)
- [architecture.md](./architecture.md)
- [src/content/quantlab.ts](../src/content/quantlab.ts)

