import { ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioProjects } from "@/content/portfolio";

const PortfolioSection = () => (
  <section className="border-t border-border py-24" id="portfolio">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Portfolio</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Casos de muestra que respaldan la venta
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nexus Marketing usa este bloque para mostrar demos reales, reforzar confianza y dejar espacio para sumar más casos sin rehacer la estructura.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {portfolioProjects.map((project) => {
          const isExternal = project.demoUrl.startsWith("http");

          return (
            <article
              key={project.name}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-2xl shadow-primary/5 card-hover"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                    <Sparkles size={12} />
                    Caso de muestra
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-heading">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>

                <span className="w-fit rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
                  {project.projectType}
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-xl border border-border bg-background/40 px-4 py-3">
                    <p className="text-xs leading-relaxed text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demoUrl}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  {project.ctaLabel}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        La colección se amplía añadiendo nuevos objetos en <span className="font-mono text-primary">portfolioProjects</span>.
      </p>
    </div>
  </section>
);

export default PortfolioSection;
