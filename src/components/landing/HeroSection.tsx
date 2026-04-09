import { ArrowRight, BadgeCheck, Blocks, DatabaseZap, ShieldCheck } from "lucide-react";
import { brandLayers, productLinks } from "@/content/quantlab";

const badges = [
  { icon: Blocks, label: "Local-first" },
  { icon: DatabaseZap, label: "Traceable" },
  { icon: ShieldCheck, label: "Supervised" },
  { icon: BadgeCheck, label: "Reviewable" },
];

const surfaceItems = [
  ["signal.json", "Research brief"],
  ["report.json", "Canonical output"],
  ["compare.md", "Decision surface"],
  ["metadata.json", "Run contract"],
];

const runtimeItems = [
  { label: "product", value: "QuantLab Research" },
  { label: "engine", value: "QuantLab Core" },
  { label: "model", value: "Supervised execution" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden pt-32 pb-20" id="home">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(205_70%_48%/0.14),transparent_42%),radial-gradient(circle_at_bottom_right,hsl(162_60%_45%/0.1),transparent_36%)]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">QuantLab Research</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Research you can inspect.{" "}
            <span className="text-gradient">Execution you can supervise.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            QuantLab Research is a local-first quantitative research product for explicit hypotheses,
            traceable runs, reviewable artifacts, and disciplined progression into supervised execution.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#architecture"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              View system
            </a>
            <a
              href={productLinks.architecture}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
            >
              Explore architecture
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                <badge.icon size={13} className="text-primary" />
                {badge.label}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {brandLayers.map((layer) => (
              <div key={layer.title} className="rounded-xl border border-border bg-card/80 p-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{layer.role}</p>
                <p className="mt-2 text-sm font-semibold text-heading">{layer.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              </div>
              <span className="ml-3 font-mono text-xs text-muted-foreground">Evidence Surfaces / run_id: ql-2406</span>
            </div>

            <div className="grid gap-4 p-5">
              <div className="rounded-2xl border border-border bg-background/70 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Evidence block</p>
                    <h3 className="mt-2 text-lg font-semibold text-heading">Signal to evidence</h3>
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                    reviewed
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {surfaceItems.map(([artifact, label]) => (
                    <div key={artifact} className="rounded-xl border border-border bg-card p-3">
                      <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{artifact}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {runtimeItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-background/70 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-heading">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-primary">Run contract</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Explicit inputs, repeatable outputs, and a visible handoff into review.
                    </p>
                  </div>
                  <a
                    href="#outputs"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
                  >
                    Inspect outputs
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
