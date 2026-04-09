export const productLinks = {
  repository: "https://github.com/Whiteks1/quantlab",
  docsRoot: "https://github.com/Whiteks1/quantlab/tree/main/docs",
  architecture: "https://github.com/Whiteks1/quantlab/blob/main/docs/quantlab-desktop-v1.md",
  outputs: "https://github.com/Whiteks1/quantlab/blob/main/README.md#canonical-artifact-structure",
  cli: "https://github.com/Whiteks1/quantlab/blob/main/docs/cli.md",
  runArtifacts: "https://github.com/Whiteks1/quantlab/blob/main/docs/run-artifact-contract.md",
};

export const brandLayers = [
  {
    title: "QuantLab Research",
    role: "Public surface",
    description:
      "The public-facing layer that explains the research workflow, the outputs, and the operating boundaries.",
  },
  {
    title: "QuantLab Core",
    role: "Research engine",
    description:
      "The execution layer that runs reproducible research and writes canonical outputs for review.",
  },
  {
    title: "Quant Pulse",
    role: "Signal layer",
    description:
      "The upstream layer where signals, context, and hypotheses are drafted before they are tested.",
  },
];

export const coreEntities = [
  {
    name: "Signal",
    description:
      "An upstream research note that captures the hypothesis, context, and direction for investigation.",
  },
  {
    name: "Experiment",
    description:
      "A reusable research setup that defines what should be tested and under which assumptions.",
  },
  {
    name: "Run",
    description:
      "A concrete execution with inputs, status, metrics, timestamps, and linked artifacts.",
  },
  {
    name: "Sweep",
    description:
      "A coordinated set of runs used to explore strategy or parameter variants.",
  },
  {
    name: "Comparison",
    description:
      "A review surface used to compare selected runs and identify credible candidates.",
  },
  {
    name: "Artifact",
    description:
      "A canonical output used for inspection, reporting, and traceability.",
  },
  {
    name: "Candidate",
    description:
      "A run promoted after review because it is worth further supervised follow-up.",
  },
  {
    name: "Baseline",
    description:
      "A stable reference used to compare new results and avoid decisions without context.",
  },
  {
    name: "PaperSession",
    description:
      "A supervised continuation stage that extends research without jumping directly into live execution.",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Receive the signal",
    description:
      "Quant Pulse proposes a hypothesis and turns it into a working note with enough context to proceed.",
  },
  {
    step: "02",
    title: "Define the inputs",
    description:
      "The strategy, universe, and configuration are defined as part of the run contract.",
  },
  {
    step: "03",
    title: "Run the experiment or sweep",
    description:
      "QuantLab Core launches the concrete execution or the controlled batch of variants with deterministic output.",
  },
  {
    step: "04",
    title: "Persist artifacts",
    description:
      "Each execution writes metadata, config, metrics, report, and artifacts to a canonical path.",
  },
  {
    step: "05",
    title: "Compare results",
    description:
      "Runs and sweeps are reviewed through compare, shortlist, and baseline surfaces to filter noise quickly.",
  },
  {
    step: "06",
    title: "Select candidates",
    description:
      "What survives analysis enters an explicit decision layer before moving to paper.",
  },
  {
    step: "07",
    title: "Promote to paper",
    description:
      "Paper sessions extend research with their own operational continuity and health or status tracking.",
  },
];

export const architectureModules = [
  {
    title: "Quant Pulse",
    description:
      "Signal intake and upstream notes that frame what should be researched next.",
  },
  {
    title: "QuantLab Research",
    description:
      "The public layer that explains the system, its outputs, and its boundaries.",
  },
  {
    title: "QuantLab Core",
    description:
      "The reproducible execution layer that runs research and preserves continuity between runs.",
  },
  {
    title: "Artifacts",
    description:
      "Canonical outputs that stay inspectable by both operators and external tooling.",
  },
  {
    title: "Compare",
    description:
      "A review surface for baseline checks, shortlists, and direct result comparison.",
  },
  {
    title: "Boundary",
    description:
      "Clear boundaries between research, paper continuation, and execution safety.",
  },
  {
    title: "CLI / automation",
    description:
      "Stable CLI entry points and automation hooks that do not blur system control.",
  },
  {
    title: "Docs / evidence",
    description:
      "Documentation and evidence surfaces that keep the system understandable and reviewable.",
  },
];

export const artifactGroups = [
  {
    title: "Research runs",
    path: "outputs/runs/<run_id>/",
    files: [
      "metadata.json",
      "config.json",
      "metrics.json",
      "report.json",
      "run_report.md",
      "signal.json",
      "trades.csv",
      "artifacts/",
    ],
  },
  {
    title: "Pulse briefs",
    path: "outputs/pulse/<signal_id>/",
    files: [
      "signal.json",
      "context.md",
      "sources.json",
      "notes.md",
      "hash.txt",
    ],
  },
  {
    title: "Paper sessions",
    path: "outputs/paper_sessions/<session_id>/",
    files: [
      "session_metadata.json",
      "session_status.json",
      "config.json",
      "metrics.json",
      "report.json",
      "run_report.md",
      "trades.csv",
      "artifacts/",
    ],
  },
  {
    title: "Shared indexes",
    path: "outputs/runs/ and outputs/paper_sessions/",
    files: [
      "runs_index.csv",
      "runs_index.json",
      "runs_index.md",
      "paper_sessions_index.csv",
      "paper_sessions_index.json",
      "pulse_index.json",
    ],
  },
];
