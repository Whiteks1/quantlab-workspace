import {
  FlaskConical, Play, GitCompare, FileSearch, Star,
  FileSpreadsheet, ClipboardCheck, ShieldCheck,
} from "lucide-react";

const features = [
  { icon: FlaskConical, title: "Experiments", desc: "Define hipótesis, configura parámetros y lanza ejecuciones reproducibles desde un solo lugar." },
  { icon: Play, title: "Runs", desc: "Cada ejecución queda registrada con sus inputs, outputs, métricas y estado. Nada se pierde." },
  { icon: GitCompare, title: "Compare", desc: "Compara runs lado a lado. Sharpe, drawdown, curvas de equity, parámetros. Decisiones basadas en datos." },
  { icon: FileSearch, title: "Artifacts", desc: "Inspecciona logs, gráficos, tablas y outputs generados por cada run. Todo accesible y navegable." },
  { icon: Star, title: "Candidates / Shortlist", desc: "Marca los runs más prometedores. Construye una shortlist antes de promover a paper trading." },
  { icon: FileSpreadsheet, title: "Paper Ops", desc: "Ejecuta tus candidatos en modo paper con disciplina. Valida sin riesgo real antes de avanzar." },
  { icon: ClipboardCheck, title: "Pre-trade Intake", desc: "Un checklist operativo antes de cada decisión de ejecución. Sin atajos, sin improvisación." },
  { icon: ShieldCheck, title: "Execution Boundaries", desc: "Límites supervisados para ejecución controlada. El sistema avanza solo cuando las condiciones están dadas." },
];

const FeaturesSection = () => (
  <section className="py-24 border-t border-border" id="features">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Capacidades</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Todo lo que necesitas en una sola superficie
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada módulo resuelve una etapa real del proceso de investigación y decisión cuantitativa.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg border border-border bg-card p-5 card-hover">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
              <f.icon size={18} className="text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-heading">{f.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
