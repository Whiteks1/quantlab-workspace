import { productLinks } from "@/content/quantlab";

const FinalCTA = () => (
  <section className="border-t border-border py-24" id="docs">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Docs and deployment</p>
        <h2 className="text-3xl font-bold text-heading sm:text-4xl">
          Read the system on its own terms.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          QuantLab Research is not a generic landing page. It is the public explanation layer for the
          workflow, the outputs, and the operating boundaries behind the product.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={productLinks.repository}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card px-5 py-4 text-left transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            <p className="text-sm font-semibold text-heading">Repository</p>
            <p className="mt-1 text-xs text-muted-foreground">Source code and current public project state.</p>
          </a>
          <a
            href={productLinks.docsRoot}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card px-5 py-4 text-left transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            <p className="text-sm font-semibold text-heading">Documentation</p>
            <p className="mt-1 text-xs text-muted-foreground">Architecture, CLI, boundaries, and runbooks.</p>
          </a>
          <a
            href={productLinks.architecture}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card px-5 py-4 text-left transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            <p className="text-sm font-semibold text-heading">Architecture</p>
            <p className="mt-1 text-xs text-muted-foreground">System model, entities, and authority boundaries.</p>
          </a>
          <a
            href={productLinks.outputs}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-card px-5 py-4 text-left transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            <p className="text-sm font-semibold text-heading">Outputs</p>
            <p className="mt-1 text-xs text-muted-foreground">Canonical artifact structure and output paths.</p>
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-muted-foreground">
          Public surface: explanation. Product runtime: execution.
        </p>
      </div>
    </div>
  </section>
);

export default FinalCTA;
