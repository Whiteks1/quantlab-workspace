import { artifactGroups, productLinks } from "@/content/quantlab";

const ArtifactsSection = () => (
  <section className="border-t border-border py-24" id="outputs">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Artifacts</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Canonical outputs, not disposable screenshots
        </h2>
        <p className="mt-4 text-muted-foreground">
          QuantLab Research points to a system whose outputs live in stable paths and remain readable by
          operators, reviewers, and external automation.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {artifactGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-border bg-card p-6 card-hover">
            <p className="text-sm font-semibold text-heading">{group.title}</p>
            <div className="mt-4 rounded-lg border border-border bg-background/70 p-4">
              <p className="font-mono text-xs text-primary">{group.path}</p>
              <ul className="mt-3 space-y-2">
                {group.files.map((file) => (
                  <li key={file} className="font-mono text-xs text-muted-foreground">
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={productLinks.outputs}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View output structure
        </a>
        <a
          href={productLinks.runArtifacts}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
        >
          View artifact contract
        </a>
      </div>
    </div>
  </section>
);

export default ArtifactsSection;
