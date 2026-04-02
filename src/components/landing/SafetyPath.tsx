import { CheckCircle } from "lucide-react";

const stages = [
  { label: "Discovery", desc: "Entendemos oferta, mercado y objetivo comercial.", color: "text-primary" },
  { label: "Strategy", desc: "Definimos mensajes, casos y jerarquía de contenido.", color: "text-primary" },
  { label: "Build", desc: "Construimos la landing y dejamos lista la base reutilizable.", color: "text-warning" },
  { label: "Launch", desc: "Publicamos el sitio y conectamos la demo real de QuantLab.", color: "text-success" },
  { label: "Scale", desc: "Sumamos nuevos casos y optimizaciones sobre la misma estructura.", color: "text-success" },
];

const SafetyPath = () => (
  <section className="py-24 border-t border-border">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Seguridad de ejecución</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          De la propuesta al lanzamiento, con disciplina
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nexus Marketing prioriza mensajes claros, prueba social y una estructura que se pueda mantener sin fricción.
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
