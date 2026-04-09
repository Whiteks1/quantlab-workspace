import { productLinks } from "@/content/quantlab";

const FinalCTA = () => (
  <section className="border-t border-border py-24" id="docs">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Next step</p>
        <h2 className="text-3xl font-bold text-heading sm:text-4xl">
          Keep the workflow visible from brief to review.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          QuantLab Research is built to make research readable, reviewable, and disciplined before any
          supervised execution step.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#workflow"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore the workflow
          </a>
          <a
            href={productLinks.docsRoot}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            Read product docs
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
