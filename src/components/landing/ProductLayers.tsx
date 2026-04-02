import { ChartColumnIncreasing, Code2, FileText, Gauge, LayoutGrid, ShieldCheck } from "lucide-react";

const layers = [
  { icon: FileText, title: "Estrategia", desc: "Definimos oferta, mensaje y orden de las secciones antes de producir diseño." },
  { icon: LayoutGrid, title: "Sistema visual", desc: "Una base de componentes y bloques reutilizables para escalar el sitio sin perder coherencia." },
  { icon: Code2, title: "Implementación", desc: "Estructura limpia y mantenible para añadir casos, páginas o campañas nuevas." },
  { icon: ChartColumnIncreasing, title: "Conversión", desc: "Jerarquía visual pensada para mover al usuario hacia el siguiente paso." },
  { icon: ShieldCheck, title: "Confianza", desc: "Portfolio, prueba social y consistencia para reducir la fricción comercial.", optional: true },
  { icon: Gauge, title: "Optimización", desc: "Medición simple para iterar sobre CTA, contenido y recorrido." },
];

const ProductLayers = () => (
  <section className="py-24 border-t border-border" id="layers">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Estructura</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Capas de entrega
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nexus Marketing se organiza en capas independientes para poder sumar nuevas demos, servicios o landings sin duplicar todo el trabajo.
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
