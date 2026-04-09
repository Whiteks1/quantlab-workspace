import { architectureModules, productLinks } from "@/content/quantlab";

const ArchitectureSection = () => (
  <section className="border-t border-border py-24" id="architecture">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Architecture</p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Clear layers, clear responsibilities
          </h2>
          <p className="mt-4 text-muted-foreground">
            QuantLab Research, QuantLab Core, and Quant Pulse each have a distinct role. The public site
            stays clear about that separation instead of collapsing everything into one vague product story.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={productLinks.architecture}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            View architecture
          </a>
          <a
            href={productLinks.cli}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View CLI
          </a>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {architectureModules.map((module) => (
          <article key={module.title} className="rounded-lg border border-border bg-card p-5 card-hover">
            <h3 className="text-sm font-semibold text-heading">{module.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{module.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
