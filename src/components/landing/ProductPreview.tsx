import { useState } from "react";

const tabs = [
  {
    id: "shell",
    label: "Landing",
    content: {
      sidebar: ["Hero", "Oferta", "Prueba social", "CTA"],
      header: "Nexus Studio — Landing comercial",
      rows: [
        { label: "Hero con propuesta clara", status: "active", metric: "Above the fold" },
        { label: "Bloque de credibilidad", status: "done", metric: "Casos y demos" },
        { label: "CTA único", status: "review", metric: "Reserva / demo" },
      ],
    },
  },
  {
    id: "runs",
    label: "Portfolio",
    content: {
      sidebar: ["QuantLab", "Nuevos casos", "Demos", "Próximos"],
      header: "Portfolio — casos seleccionados",
      rows: [
        { label: "QuantLab", status: "done", metric: "Demo real" },
        { label: "Case study 02", status: "active", metric: "Próximo" },
        { label: "Case study 03", status: "review", metric: "Pendiente" },
      ],
    },
  },
  {
    id: "compare",
    label: "Tracking",
    content: {
      sidebar: ["Leads", "CTA", "Scroll", "Clicks"],
      header: "Analytics — lectura simple",
      rows: [
        { label: "CTA principal", status: "active", metric: "Acciones" },
        { label: "Sección portfolio", status: "done", metric: "Interés" },
        { label: "Formulario / contacto", status: "review", metric: "Conversión" },
      ],
    },
  },
  {
    id: "artifacts",
    label: "Sistema",
    content: {
      sidebar: ["Bloques", "Componentes", "Copy", "CTAs"],
      header: "Sistema — base reusable",
      rows: [
        { label: "Section cards", status: "done", metric: "Reutilizable" },
        { label: "Portfolio data", status: "done", metric: "Centralizado" },
        { label: "Demo links", status: "done", metric: "Configurables" },
      ],
    },
  },
  {
    id: "paper",
    label: "Growth",
    content: {
      sidebar: ["Nuevos demos", "Landing A/B", "Contenido", "SEO"],
      header: "Growth — próximas mejoras",
      rows: [
        { label: "Nuevo caso de muestra", status: "active", metric: "Añadir" },
        { label: "Más demos", status: "review", metric: "Escalar" },
        { label: "Landing de captación", status: "done", metric: "Listo" },
      ],
    },
  },
];

const statusColor: Record<string, string> = {
  active: "bg-primary",
  done: "bg-success",
  review: "bg-warning",
  failed: "bg-destructive",
};

const ProductPreview = () => {
  const [active, setActive] = useState("shell");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-24 border-t border-border" id="preview">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Preview</p>
          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
            Dentro de Nexus Marketing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada vista representa una pieza comercial real. El objetivo es enseñar estructura, no decorar la página.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Mock UI */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            </div>
            <span className="ml-3 font-mono text-xs text-muted-foreground">{tab.content.header}</span>
          </div>

          <div className="flex min-h-[320px]">
            {/* Sidebar */}
            <div className="hidden w-48 shrink-0 border-r border-border bg-background/50 p-3 sm:block">
              {tab.content.sidebar.map((item, i) => (
                <div
                  key={item}
                  className={`rounded-md px-3 py-1.5 text-xs ${
                    i === 0 ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <div className="space-y-2">
                {/* Header row */}
                <div className="grid grid-cols-12 gap-2 px-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  <div className="col-span-6">Nombre</div>
                  <div className="col-span-3">Estado</div>
                  <div className="col-span-3 text-right">Métrica</div>
                </div>
                {tab.content.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-12 items-center gap-2 rounded-md border border-border bg-background/30 px-3 py-2.5"
                  >
                    <div className="col-span-6 font-mono text-xs text-foreground truncate">{row.label}</div>
                    <div className="col-span-3 flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 rounded-full ${statusColor[row.status]}`} />
                      <span className="text-[10px] text-muted-foreground capitalize">{row.status}</span>
                    </div>
                    <div className="col-span-3 text-right font-mono text-xs text-muted-foreground">{row.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
