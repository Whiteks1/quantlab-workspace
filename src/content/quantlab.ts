export const productLinks = {
  repository: "https://github.com/Whiteks1/quantlab",
  docsRoot: "https://github.com/Whiteks1/quantlab/tree/main/docs",
  outputs: "https://github.com/Whiteks1/quantlab/blob/main/README.md#canonical-artifact-structure",
  runArtifacts: "https://github.com/Whiteks1/quantlab/blob/main/docs/run-artifact-contract.md",
};

export const brandLayers = [
  {
    title: "QuantLab Research",
    role: "Research product",
    description:
      "The public product that explains the research workflow, the outputs, and the supervision model.",
  },
  {
    title: "QuantLab Core",
    role: "Internal engine",
    description:
      "The internal execution layer that runs reproducible research and writes canonical outputs for review.",
  },
  {
    title: "QuantPulse",
    role: "Sibling signal product",
    description:
      "A sibling signal product that surfaces context and research priorities when they help frame the work.",
  },
];

export const coreEntities = [
  {
    name: "Signal",
    description:
      "A research brief that captures the hypothesis, context, and direction for investigation.",
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
    title: "Frame the brief",
    description:
      "Start with a concrete hypothesis and operating context.",
  },
  {
    step: "02",
    title: "Run the experiment",
    description:
      "Launch a deterministic run or controlled sweep.",
  },
  {
    step: "03",
    title: "Inspect the outputs",
    description:
      "Review artifacts, metrics, and comparison surfaces.",
  },
  {
    step: "04",
    title: "Decide continuity",
    description:
      "Only promote what survives visible validation.",
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
