# Output Structure

This is the quick-reference output map used by the QuantLab Research landing.

## Research runs

```text
outputs/runs/<run_id>/
  metadata.json
  config.json
  metrics.json
  report.json
  run_report.md
  signal.json
  trades.csv
  artifacts/
```

## Pulse briefs

```text
outputs/pulse/<signal_id>/
  signal.json
  context.md
  sources.json
  notes.md
  hash.txt
```

## Paper sessions

```text
outputs/paper_sessions/<session_id>/
  session_metadata.json
  session_status.json
  config.json
  metrics.json
  report.json
  run_report.md
  trades.csv
  artifacts/
```

## Shared indexes

```text
outputs/runs/
  runs_index.csv
  runs_index.json
  runs_index.md

outputs/paper_sessions/
  paper_sessions_index.csv
  paper_sessions_index.json

outputs/pulse/
  pulse_index.json
```

## Purpose

These paths matter because the public site presents QuantLab as a system with stable, reviewable outputs rather than opaque runtime state.

## Related docs

- [run-artifact-contract.md](./run-artifact-contract.md)
- [cli.md](./cli.md)
