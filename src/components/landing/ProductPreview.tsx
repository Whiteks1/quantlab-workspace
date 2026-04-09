import { useState } from "react";
import { productLinks } from "@/content/quantlab";
import { ArrowUpRight, ImageIcon, Sparkles } from "lucide-react";

const evidenceBasePath = `${import.meta.env.BASE_URL}evidence/desktop/`;

const evidenceCards = [
  {
    id: "workspace-overview",
    title: "Workspace overview",
    value: "Research surface",
    file: "workspace-overview.png",
    alt: "QuantLab desktop workspace overview",
    desc: "The top-level workspace shows the research surface, navigation, and the main review entry points.",
  },
  {
    id: "runs",
    title: "Runs",
    value: "Repeatable sessions",
    file: "runs.png",
    alt: "QuantLab desktop runs list",
    desc: "A live view of the runs table and status hierarchy in the desktop product.",
  },
  {
    id: "run-detail",
    title: "Run detail",
    value: "Inputs, metrics, notes",
    file: "run-detail.png",
    alt: "QuantLab desktop run detail",
    desc: "Focused context for a single run, with the contract visible and reviewable.",
  },
  {
    id: "artifacts",
    title: "Artifacts",
    value: "report.json / config.json",
    file: "artifacts.png",
    alt: "QuantLab desktop artifacts view",
    desc: "Canonical outputs that can be inspected without opening the engine itself.",
  },
  {
    id: "validation",
    title: "Validation",
    value: "Supervised review",
    file: "validation.png",
    alt: "QuantLab desktop validation view",
    desc: "Boundary state that shows what passed validation and what still needs review.",
  },
];

const ProductPreview = () => {
  const [activeEvidenceId, setActiveEvidenceId] = useState(evidenceCards[0].id);
  const activeEvidence = evidenceCards.find((card) => card.id === activeEvidenceId) ?? evidenceCards[0];

  return (
    <section className="border-t border-border py-24" id="evidence">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Desktop evidence</p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Real desktop surfaces from the repo, not placeholder UI
          </h2>
          <p className="mt-4 text-muted-foreground">
            The landing now points to committed product evidence: workspace overview, runs, run detail,
            artifacts, and validation. The web layer explains the system by showing the actual surfaces
            already stored in the repository.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              </div>
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                Canonical desktop evidence / {activeEvidence.title.toLowerCase()}
              </span>
            </div>

            <img
              src={`${evidenceBasePath}${activeEvidence.file}`}
              alt={activeEvidence.alt}
              className="w-full border-b border-border object-cover"
            />

            <div className="grid gap-3 bg-background/70 p-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                  <ImageIcon size={14} />
                  Active evidence
                </p>
                <h3 className="mt-2 text-base font-semibold text-heading">{activeEvidence.value}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{activeEvidence.desc}</p>
              </div>

              <div className="rounded-lg border border-border bg-card p-4">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                  <Sparkles size={14} />
                  Repo asset
                </p>
                <p className="mt-2 font-mono text-sm text-heading">{activeEvidence.file}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  This surface is served directly from the canonical evidence assets committed under
                  `public/evidence/desktop/`.
                </p>
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            {evidenceCards.map((card) => {
              const isActive = card.id === activeEvidence.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveEvidenceId(card.id)}
                  className={`w-full rounded-2xl border p-3 text-left transition-all ${
                    isActive
                      ? "border-primary/40 bg-secondary shadow-lg shadow-primary/5"
                      : "border-border bg-card card-hover"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-border bg-background">
                    <img
                      src={`${evidenceBasePath}${card.file}`}
                      alt={card.alt}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{card.title}</p>
                      <h3 className="mt-2 text-base font-semibold text-heading">{card.value}</h3>
                    </div>
                    <Sparkles size={16} className="mt-0.5 text-primary" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </button>
              );
            })}

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
};

export default ProductPreview;
