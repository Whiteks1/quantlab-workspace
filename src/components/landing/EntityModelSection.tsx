import { coreEntities } from "@/content/quantlab";

const EntityModelSection = () => (
  <section className="border-t border-border py-24" id="system">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">What QuantLab is</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          QuantLab Research explains a research system, not a trading front end
        </h2>
        <p className="mt-4 text-muted-foreground">
          Quant Pulse frames the research question. QuantLab Core runs the work. QuantLab Research keeps
          the system legible from the public side without pretending to be the runtime itself.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Quant Pulse",
            desc: "Upstream signal layer where hypotheses, context, and editorial notes are drafted.",
          },
          {
            title: "QuantLab Core",
            desc: "CLI-first engine that executes runs, persists artifacts, and keeps the contract explicit.",
          },
          {
            title: "QuantLab Research",
            desc: "Public site that explains the workflow and exposes evidence without simulating operations.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-xl border border-border bg-card p-5 card-hover">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {coreEntities.map((entity) => (
          <article key={entity.name} className="rounded-lg border border-border bg-card p-5 card-hover">
            <p className="font-mono text-xs text-primary">{entity.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entity.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EntityModelSection;
