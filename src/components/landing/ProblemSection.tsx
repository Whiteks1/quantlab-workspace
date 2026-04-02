import { AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Mensajes dispersos",
    desc: "Webs, decks y redes dicen cosas distintas. La propuesta se diluye antes de llegar al formulario.",
  },
  {
    title: "Poca prueba social",
    desc: "Sin casos claros ni demos visibles, la confianza depende de promesas y no de evidencia.",
  },
  {
    title: "Páginas que no convierten",
    desc: "Diseño correcto, pero sin jerarquía comercial, CTA único ni recorrido convincente.",
  },
  {
    title: "Sin sistema",
    desc: "Cada landing se resuelve desde cero. Eso ralentiza lanzamientos y complica la escalabilidad.",
  },
];

const ProblemSection = () => (
  <section className="py-24" id="problem">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">El problema</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          La mayoría de webs vende menos de lo que podría
        </h2>
        <p className="mt-4 text-muted-foreground">
          Entre el tráfico y la oportunidad suele haber una presentación débil, demasiado genérica o directamente incoherente.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {problems.map((p) => (
          <div key={p.title} className="group rounded-lg border border-border bg-card p-6 card-hover">
            <div className="mb-3 flex items-center gap-2.5">
              <AlertTriangle size={16} className="text-warning" />
              <h3 className="text-sm font-semibold text-heading">{p.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
