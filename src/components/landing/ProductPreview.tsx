import { useState } from "react";
import { productLinks } from "@/content/quantlab";
import { ArrowUpRight, ImageIcon, Sparkles } from "lucide-react";

const evidenceBasePath = `${import.meta.env.BASE_URL}evidence/desktop/`;

const evidenceCards = [
  {
    id: "run-detail",
    title: "Run inspection",
    value: "Inputs, metrics, notes",
    file: "run-detail.png",
    alt: "QuantLab desktop run detail",
    desc: "Inspect one run with visible inputs, metrics, and review context in the same surface.",
  },
  {
    id: "artifacts",
    title: "Artifact review",
    value: "Canonical outputs",
    file: "artifacts.png",
    alt: "QuantLab desktop artifacts view",
    desc: "Review canonical outputs without losing the run context that produced them.",
  },
  {
    id: "validation",
    title: "Validation boundary",
    value: "Supervised review",
    file: "validation.png",
    alt: "QuantLab desktop validation view",
    desc: "See what passed review, what still needs supervision, and where continuity stops.",
  },
];

const ProductPreview = () => {
  const [activeEvidenceId, setActiveEvidenceId] = useState(evidenceCards[0].id);
  const activeEvidence = evidenceCards.find((card) => card.id === activeEvidenceId) ?? evidenceCards[0];

  return (
    <section className="border-t border-border py-24 lg:py-28" id="evidence">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Product proof</p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Real product surfaces, not placeholder UI
          </h2>
          <p className="mt-4 text-muted-foreground">
            QuantLab Research is grounded in actual review surfaces for run inspection, artifact review,
            and validation boundaries.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[1.16fr_0.84fr] lg:gap-8">
          <article className="overflow-hidden rounded-[28px] border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              </div>
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                Product proof / {activeEvidence.title.toLowerCase()}
              </span>
            </div>

            <img
              src={`${evidenceBasePath}${activeEvidence.file}`}
              alt={activeEvidence.alt}
              className="aspect-[16/10] w-full border-b border-border object-cover"
            />

            <div className="grid gap-4 bg-background/70 p-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                  <ImageIcon size={14} />
                  Proof surface
                </p>
                <h3 className="mt-2 text-base font-semibold text-heading">{activeEvidence.value}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{activeEvidence.desc}</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary">
                  <Sparkles size={14} />
                  Why it matters
                </p>
                <p className="mt-2 text-sm text-heading">
                  Product proof should show readable decisions, not just polished UI.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  These surfaces demonstrate that QuantLab Research already supports review, continuity,
                  and visible operational boundaries.
                </p>
              </div>
            </div>
          </article>

          <aside className="space-y-4 lg:space-y-5">
            {evidenceCards.map((card) => {
              const isActive = card.id === activeEvidence.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveEvidenceId(card.id)}
                  className={`w-full rounded-[24px] border p-3.5 text-left transition-all ${
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
                      <h3 className="mt-2 text-lg font-semibold text-heading">{card.value}</h3>
                    </div>
                    <Sparkles size={16} className="mt-0.5 text-primary" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </button>
              );
            })}

            <a
              href={productLinks.docsRoot}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3.5 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
            >
              Read product docs
              <ArrowUpRight size={16} />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
