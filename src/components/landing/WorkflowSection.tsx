const steps = [
  { num: "01", title: "Brief y objetivo", desc: "Aterrizamos la oferta, la audiencia y el resultado comercial que debe conseguir la web." },
  { num: "02", title: "Arquitectura de mensaje", desc: "Ordenamos la narrativa, la prueba social y el camino de lectura." },
  { num: "03", title: "Diseño y copy", desc: "Convertimos la estrategia en una pieza clara, sobria y orientada a venta." },
  { num: "04", title: "Implementación", desc: "Montamos la página con una estructura reutilizable y fácil de ampliar." },
  { num: "05", title: "Lanzamiento", desc: "Publicamos la demo o el caso de muestra sin duplicar proyectos completos." },
  { num: "06", title: "Medición", desc: "Observamos comportamiento, CTA y puntos de fricción para mejorar con datos." },
  { num: "07", title: "Iteración", desc: "Sumamos nuevos demos, bloques o campañas sobre la misma base." },
];

const WorkflowSection = () => (
  <section className="border-t border-border py-24" id="process">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Proceso</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          De la idea a una página que vende, paso a paso
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada etapa deja una pieza útil para el negocio y una estructura que se puede reutilizar.
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
