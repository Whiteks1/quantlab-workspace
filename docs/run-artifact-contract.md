# Run Artifact Contract

This document defines the local public artifact contract referenced by the QuantLab Research landing.

## Contract roots

Canonical run artifacts live under:

```text
outputs/runs/<run_id>/
```

Shared run history indexes live under:

```text
outputs/runs/
```

Paper-session artifacts live under:

```text
outputs/paper_sessions/<session_id>/
```

## Canonical run directory

```text
outputs/runs/<run_id>/
  metadata.json
  config.json
  metrics.json
  report.json
```

Additional files may also exist:

```text
outputs/runs/<run_id>/
  run_report.md
  trades.csv
  artifacts/
  leaderboard.csv
  walkforward.csv
```

## Canonical paper-session directory

```text
outputs/paper_sessions/<session_id>/
  session_metadata.json
  session_status.json
  config.json
  metrics.json
  report.json
  trades.csv
  run_report.md
  artifacts/
```

Paper sessions are operationally distinct from plain research runs and do not belong to the shared run registry under `outputs/runs/`.

## Canonical files

### `metadata.json`

Execution identity and context.

Typical fields:

- `run_id`
- `created_at`
- `mode`
- `status`
- `command`
- `config_path`
- `config_hash`
- `request_id`

### `config.json`

Resolved configuration used for the run.

### `metrics.json`

Machine-readable summary metrics for ranking and comparison.

### `report.json`

Canonical public report artifact for downstream consumption.

Typical sections:

- `schema_version`
- `artifact_type`
- `status`
- `header`
- `config_resolved`
- `results`
- `artifacts`
- `summary`

## `report.json.machine_contract`

The machine-facing contract is published inside:

```text
report.json.machine_contract
```

Expected fields include:

- `schema_version`
- `contract_type`
- `command`
- `status`
- `request_id`
- `run_id`
- `mode`
- `summary`
- `artifacts`

Common contract types:

- `quantlab.run.result`
- `quantlab.sweep.result`
- `quantlab.paper.result`

## Shared run indexes

Shared run indexes are expected under:

```text
outputs/runs/
  runs_index.csv
  runs_index.json
  runs_index.md
```

Paper-session indexes are expected under:

```text
outputs/paper_sessions/
  paper_sessions_index.csv
  paper_sessions_index.json
```

## Upstream reference

- [Run Artifact Contract](https://github.com/Whiteks1/quantlab/blob/main/docs/run-artifact-contract.md)
