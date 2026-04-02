const steps = [
  { num: "01", title: "Definir hipótesis", desc: "Establece los parámetros, el universo y las condiciones del experimento." },
  { num: "02", title: "Lanzar run o sweep", desc: "Ejecuta una o múltiples configuraciones de forma reproducible." },
  { num: "03", title: "Inspeccionar resultados", desc: "Revisa métricas, artifacts, logs y curvas generadas por cada run." },
  { num: "04", title: "Comparar alternativas", desc: "Coloca runs lado a lado. Evalúa trade-offs con datos concretos." },
  { num: "05", title: "Marcar candidatos", desc: "Selecciona los runs que merecen avanzar. Construye tu shortlist." },
  { num: "06", title: "Promover a paper", desc: "Ejecuta en modo paper con disciplina antes de comprometer capital real." },
  { num: "07", title: "Preparar ejecución segura", desc: "Configura boundaries, checklists y supervisión antes de operar en vivo." },
];

const WorkflowSection = () => (
  <section className="py-24 border-t border-border" id="workflow">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Flujo de trabajo</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          De la hipótesis a la ejecución, paso a paso
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada etapa tiene un propósito claro. El sistema no permite atajos.
        </p>
      </div>

      <div className="relative mt-14">
        {/* vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative flex gap-6 md:pl-14">
              <div className="absolute left-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-xs font-mono font-bold text-primary">
                {s.num}
              </div>
              <div className="flex-1 rounded-lg border border-border bg-card p-5 card-hover">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary md:hidden">{s.num}</span>
                  <h3 className="text-sm font-semibold text-heading">{s.title}</h3>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;
