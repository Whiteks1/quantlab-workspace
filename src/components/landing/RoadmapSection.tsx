const items = [
  { phase: "Ahora", title: "Shell maturity", desc: "Estabilidad del workspace, navegación, UX consistente." },
  { phase: "Q2", title: "Engine contracts", desc: "Contratos más fuertes entre el engine y los módulos de evaluación." },
  { phase: "Q3", title: "Paper Ops avanzado", desc: "Tracking granular, alertas, métricas en tiempo real para paper trading." },
  { phase: "Q4", title: "Execution safety", desc: "Boundaries supervisados, integración de checklists pre-trade obligatorios." },
  { phase: "Futuro", title: "Automatización controlada", desc: "Ejecución automatizada solo dentro de límites previamente validados." },
];

const RoadmapSection = () => (
  <section className="py-24 border-t border-border" id="roadmap">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Roadmap</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Hacia dónde vamos
        </h2>
        <p className="mt-4 text-muted-foreground">
          Avance incremental. Sin promesas vacías.
        </p>
      </div>

      <div className="mt-14 mx-auto max-w-2xl space-y-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 card-hover">
            <span className="shrink-0 rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 font-mono text-xs font-medium text-primary">
              {item.phase}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-heading">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RoadmapSection;
