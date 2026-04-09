const EntityModelSection = () => (
  <section className="border-t border-border py-24" id="system">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Product</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          A research product, not a trading front end
        </h2>
        <p className="mt-4 text-muted-foreground">
          QuantLab Research turns research into a visible operating system: clear inputs, repeatable
          runs, inspectable outputs, and supervised follow-through.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Explicit hypotheses",
            desc: "Every research direction starts with a concrete brief and a visible operating context.",
          },
          {
            title: "Traceable runs",
            desc: "Inputs, metrics, outputs, and review state stay visible from experiment to follow-through.",
          },
          {
            title: "Supervised execution",
            desc: "Automation only appears after the system is readable, controlled, and ready for review.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-xl border border-border bg-card p-5 card-hover">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EntityModelSection;
