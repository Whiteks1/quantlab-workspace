import { useState } from "react";

const tabs = [
  {
    id: "shell",
    label: "Desktop Shell",
    content: {
      sidebar: ["Experiments", "Runs", "Compare", "Artifacts", "Paper Ops"],
      header: "QuantLab Shell — Workspace",
      rows: [
        { label: "EXP-042 · Mean Reversion BTC", status: "active", metric: "Sharpe 1.82" },
        { label: "EXP-041 · Momentum ETH", status: "done", metric: "Sharpe 0.91" },
        { label: "EXP-040 · Pairs Trading", status: "review", metric: "Sharpe 2.14" },
      ],
    },
  },
  {
    id: "runs",
    label: "Runs Explorer",
    content: {
      sidebar: ["All Runs", "Active", "Completed", "Failed"],
      header: "Runs Explorer — 147 runs",
      rows: [
        { label: "RUN-1023 · sweep_lr_0.001", status: "done", metric: "MaxDD -8.2%" },
        { label: "RUN-1022 · sweep_lr_0.005", status: "done", metric: "MaxDD -12.4%" },
        { label: "RUN-1021 · sweep_lr_0.01", status: "failed", metric: "Error" },
      ],
    },
  },
  {
    id: "compare",
    label: "Compare",
    content: {
      sidebar: ["Selected (3)", "Metrics", "Charts", "Parameters"],
      header: "Compare — 3 candidatos",
      rows: [
        { label: "RUN-1023 vs RUN-1019", status: "active", metric: "ΔSharpe +0.34" },
        { label: "RUN-1023 vs RUN-1017", status: "done", metric: "ΔSharpe +0.72" },
        { label: "RUN-1019 vs RUN-1017", status: "review", metric: "ΔSharpe +0.38" },
      ],
    },
  },
  {
    id: "artifacts",
    label: "Artifacts",
    content: {
      sidebar: ["Equity Curves", "Logs", "Configs", "Reports"],
      header: "Artifacts — RUN-1023",
      rows: [
        { label: "equity_curve.png", status: "done", metric: "234 KB" },
        { label: "params.json", status: "done", metric: "1.2 KB" },
        { label: "execution_log.csv", status: "done", metric: "45 KB" },
      ],
    },
  },
  {
    id: "paper",
    label: "Paper Ops",
    content: {
      sidebar: ["Active Papers", "History", "Metrics", "Boundaries"],
      header: "Paper Ops — 2 activos",
      rows: [
        { label: "PAPER-012 · Mean Reversion BTC", status: "active", metric: "PnL +2.3%" },
        { label: "PAPER-011 · Pairs Trading", status: "review", metric: "PnL -0.4%" },
        { label: "PAPER-010 · Momentum ETH", status: "done", metric: "PnL +5.1%" },
      ],
    },
  },
];

const statusColor: Record<string, string> = {
  active: "bg-primary",
  done: "bg-success",
  review: "bg-warning",
  failed: "bg-destructive",
};

const ProductPreview = () => {
  const [active, setActive] = useState("shell");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-24 border-t border-border" id="preview">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Producto</p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Dentro de QuantLab
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada vista resuelve una etapa real del proceso. Aquí no hay dashboards decorativos.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Mock UI */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            </div>
            <span className="ml-3 font-mono text-xs text-muted-foreground">{tab.content.header}</span>
          </div>

          <div className="flex min-h-[320px]">
            {/* Sidebar */}
            <div className="hidden w-48 shrink-0 border-r border-border bg-background/50 p-3 sm:block">
              {tab.content.sidebar.map((item, i) => (
                <div
                  key={item}
                  className={`rounded-md px-3 py-1.5 text-xs ${
                    i === 0 ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <div className="space-y-2">
                {/* Header row */}
                <div className="grid grid-cols-12 gap-2 px-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  <div className="col-span-6">Nombre</div>
                  <div className="col-span-3">Estado</div>
                  <div className="col-span-3 text-right">Métrica</div>
                </div>
                {tab.content.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-12 items-center gap-2 rounded-md border border-border bg-background/30 px-3 py-2.5"
                  >
                    <div className="col-span-6 font-mono text-xs text-foreground truncate">{row.label}</div>
                    <div className="col-span-3 flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${statusColor[row.status]}`} />
                      <span className="text-[10px] text-muted-foreground capitalize">{row.status}</span>
                    </div>
                    <div className="col-span-3 text-right font-mono text-xs text-muted-foreground">{row.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
