const FinalCTA = () => (
  <section className="border-t border-border py-24" id="contact">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-heading sm:text-4xl">
          Construido para vender con claridad, evidencia y una estructura que se pueda ampliar.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Si tu marca necesita una home comercial y un portfolio convincente, Nexus Marketing deja preparada la base para escalar nuevos casos sin duplicar proyectos.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#portfolio" className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
            Ver portfolio
          </a>
          <a href="#services" className="rounded-lg border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary">
            Revisar servicios
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Escaparate comercial · Portfolio vivo · Estructura reusable
        </p>
      </div>
    </div>
  </section>
);

export default FinalCTA;
