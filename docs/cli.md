# QuantLab CLI Guide

This is a compact local mirror of the command families most relevant to the QuantLab Research landing.

QuantLab is CLI-first. The public entrypoint is `main.py`, and the system writes canonical outputs to disk for inspection and downstream automation.

## 1. Health and integration

### `--help`

Shows the available flags.

```bash
python main.py --help
```

### `--version`

Prints the current QuantLab version.

```bash
python main.py --version
```

### `--check`

Prints a deterministic JSON health summary for runtime validation.

```bash
python main.py --check
```

### `--json-request`

Machine-facing request entrypoint for `run`, `sweep`, `forward`, and `portfolio`.

```bash
python main.py --json-request "{\"schema_version\":\"1.0\",\"request_id\":\"req_demo_001\",\"command\":\"run\",\"params\":{\"ticker\":\"ETH-USD\",\"start\":\"2023-01-01\",\"end\":\"2023-12-31\"}}"
```

## 2. Run execution

### Plain run

```bash
python main.py --ticker ETH-USD --start 2022-01-01 --end 2023-12-31 --report
```

Successful runs write canonical artifacts under:

```text
outputs/runs/<run_id>/
```

Core files include:

- `metadata.json`
- `config.json`
- `metrics.json`
- `report.json`

### Paper-backed run

```bash
python main.py --ticker ETH-USD --start 2022-01-01 --end 2023-12-31 --paper --report
```

Paper execution still enters through the `run` surface, but it writes a dedicated paper-session artifact set under:

```text
outputs/paper_sessions/<session_id>/
```

## 3. Run inspection

### List runs

```bash
python main.py --runs-list outputs/runs
```

### Show one run

```bash
python main.py --runs-show outputs/runs/<run_id>
```

### Rank runs

```bash
python main.py --runs-best outputs/runs --metric sharpe_simple
```

Shared run indexes live under:

- `outputs/runs/runs_index.csv`
- `outputs/runs/runs_index.json`
- `outputs/runs/runs_index.md`

## 4. Paper session inspection

### List paper sessions

```bash
python main.py --paper-sessions-list outputs/paper_sessions
```

### Show one paper session

```bash
python main.py --paper-sessions-show outputs/paper_sessions/<session_id>
```

### Health summary

```bash
python main.py --paper-sessions-health outputs/paper_sessions
```

### Alert snapshot

```bash
python main.py --paper-sessions-alerts outputs/paper_sessions --paper-stale-minutes 60
```

## 5. Why this matters for the landing

The public site references the CLI because:

- QuantLab Core is an execution system, not just a UI concept
- runs and paper sessions produce canonical artifacts
- review and supervision depend on stable disk outputs and explicit command surfaces

## Related docs

- [run-artifact-contract.md](./run-artifact-contract.md)
- [output-structure.md](./output-structure.md)

## Upstream reference

- [QuantLab CLI Guide](https://github.com/Whiteks1/quantlab/blob/main/docs/cli.md)
