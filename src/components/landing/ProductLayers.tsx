import { Cpu, FileBox, Monitor, ShieldAlert, Plug, Calculator } from "lucide-react";

const layers = [
  { icon: Cpu, title: "Quant Engine", desc: "Motor de ejecución de estrategias, backtesting y evaluación forward. El núcleo computacional." },
  { icon: FileBox, title: "Canonical Artifacts", desc: "Resultados estandarizados: métricas, curvas, logs y configuraciones en formato canónico." },
  { icon: Monitor, title: "Desktop Shell", desc: "Workspace unificado. Navegación, comparación, decisión y operación desde una sola interfaz." },
  { icon: ShieldAlert, title: "Operational Boundaries", desc: "Límites explícitos que el sistema impone antes de permitir avances. Control, no automatización ciega." },
  { icon: Plug, title: "Stepbit (opcional)", desc: "Integración opcional con Stepbit para ejecución externa. QuantLab no depende de él para funcionar.", optional: true },
  { icon: Calculator, title: "Pre-trade Calculator", desc: "Cálculo de sizing, riesgo y condiciones pre-operativas. Boundary upstream antes de ejecutar." },
];

const ProductLayers = () => (
  <section className="py-24 border-t border-border" id="layers">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Arquitectura</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Capas de producto
        </h2>
        <p className="mt-4 text-muted-foreground">
          QuantLab se organiza en capas independientes que se componen de forma modular.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((l) => (
          <div key={l.title} className={`rounded-lg border p-5 card-hover ${l.optional ? "border-dashed border-border bg-background" : "border-border bg-card"}`}>
            <div className="mb-3 flex items-center gap-2.5">
              <l.icon size={18} className={l.optional ? "text-muted-foreground" : "text-primary"} />
              <h3 className="text-sm font-semibold text-heading">{l.title}</h3>
              {l.optional && (
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">opcional</span>
              )}
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{l.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductLayers;
