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
          QuantLab Research is the public product. QuantLab Core runs the work. QuantPulse is a sibling
          product in the same ecosystem, not a hidden layer inside the landing itself.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "QuantLab Research",
            desc: "Public product that explains the workflow, exposes evidence, and stays honest about supervision boundaries.",
          },
          {
            title: "QuantPulse",
            desc: "Sibling signal product that surfaces context, priorities, and research direction inside the wider QuantLab ecosystem.",
          },
          {
            title: "QuantLab Core",
            desc: "CLI-first engine that executes runs, persists artifacts, and keeps the contract explicit.",
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
