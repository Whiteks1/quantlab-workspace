import { CheckCircle } from "lucide-react";

const stages = [
  { label: "Research", desc: "Hipótesis, diseño experimental, ejecución de backtests.", color: "text-primary" },
  { label: "Validation", desc: "Forward evaluation, métricas estables, comparación rigurosa.", color: "text-primary" },
  { label: "Paper", desc: "Operación disciplinada sin capital real. Tracking completo.", color: "text-warning" },
  { label: "Execution Safety", desc: "Boundaries activos, checklists completos, supervisión humana.", color: "text-success" },
  { label: "Supervised Live", desc: "Ejecución controlada con límites explícitos. Sin piloto automático.", color: "text-success" },
];

const SafetyPath = () => (
  <section className="py-24 border-t border-border">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Seguridad de ejecución</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          De la investigación a la ejecución, con disciplina
        </h2>
        <p className="mt-4 text-muted-foreground">
          QuantLab prioriza la seguridad y el rigor antes de cualquier automatización agresiva.
        </p>
      </div>

      <div className="mt-14 mx-auto max-w-2xl space-y-4">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 card-hover">
            <CheckCircle size={20} className={`mt-0.5 shrink-0 ${s.color}`} />
            <div>
              <h3 className="text-sm font-semibold text-heading">{s.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            </div>
            <span className="ml-auto shrink-0 rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SafetyPath;
