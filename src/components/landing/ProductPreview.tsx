import heroImage from "@/assets/hero-workspace.jpg";
import { productLinks } from "@/content/quantlab";
import { ArrowUpRight, FileText, PanelTop, Sparkles } from "lucide-react";

const evidenceCards = [
  {
    title: "Runs",
    value: "Repeatable sessions",
    desc: "A live view of the runs table and status hierarchy in the desktop product.",
  },
  {
    title: "Run detail",
    value: "Inputs, metrics, notes",
    desc: "Focused context for a single run, with the contract visible and reviewable.",
  },
  {
    title: "Artifacts",
    value: "report.json / config.json",
    desc: "Canonical outputs that can be inspected without opening the engine itself.",
  },
  {
    title: "Validation",
    value: "Supervised review",
    desc: "Boundary state that shows what passed validation and what still needs review.",
  },
];

const ProductPreview = () => (
  <section className="border-t border-border py-24" id="evidence">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Desktop evidence</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Evidence from the product, not invented UI
        </h2>
        <p className="mt-4 text-muted-foreground">
          The public site should point to concrete product surfaces: runs, run detail, artifacts, and
          validation. The web layer explains what the system does without faking the system itself.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            </div>
            <span className="ml-3 font-mono text-xs text-muted-foreground">Desktop preview / runs + validation</span>
          </div>
          <img src={heroImage} alt="QuantLab desktop interface preview" className="w-full object-cover" />
          <div className="grid gap-3 border-t border-border bg-background/70 p-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                <PanelTop size={14} />
                Run view
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                The product keeps the run table, status hierarchy, and review entry points visible.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                <FileText size={14} />
                Artifact view
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Outputs remain structured and reviewable instead of being flattened into generic dashboard copy.
              </p>
            </div>
          </div>
        </article>

        <aside className="space-y-4">
          {evidenceCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-card p-5 card-hover">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{card.title}</p>
                  <h3 className="mt-2 text-base font-semibold text-heading">{card.value}</h3>
                </div>
                <Sparkles size={16} className="text-primary" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          ))}

          <a
            href={productLinks.architecture}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            Explore the product docs
            <ArrowUpRight size={16} />
          </a>
        </aside>
      </div>
    </div>
  </section>
);

export default ProductPreview;
