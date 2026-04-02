import { AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Herramientas dispersas",
    desc: "Notebooks, scripts, hojas de cálculo y terminales desconectados entre sí. Cada etapa vive en un lugar diferente.",
  },
  {
    title: "Runs aislados",
    desc: "Cada experimento muere al terminar. No hay continuidad entre el resultado y la siguiente decisión.",
  },
  {
    title: "Sin trazabilidad",
    desc: "¿Qué parámetros generaron este resultado? ¿Cuándo se ejecutó? ¿Contra qué se comparó? Nadie lo sabe.",
  },
  {
    title: "Demasiado ruido",
    desc: "Dashboards bonitos que no conectan con un flujo de trabajo real. Métricas sin contexto operativo.",
  },
];

const ProblemSection = () => (
  <section className="py-24" id="problem">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">El problema</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          La investigación cuantitativa necesita más que notebooks y dashboards
        </h2>
        <p className="mt-4 text-muted-foreground">
          Entre la hipótesis y la ejecución existe un vacío operativo que las herramientas actuales no resuelven.
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
