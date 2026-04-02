const FinalCTA = () => (
  <section className="py-24 border-t border-border" id="cta">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-heading sm:text-4xl">
          Construido para pensar, comparar y decidir con rigor.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          QuantLab es el workspace que conecta tu investigación con decisiones reales. Sin atajos, sin ruido, sin automatización prematura.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#" className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
            Solicitar acceso
          </a>
          <a href="#features" className="rounded-lg border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary">
            Explorar capacidades
          </a>
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Acceso anticipado · Sin compromiso · Investigación primero
        </p>
      </div>
    </div>
  </section>
);

export default FinalCTA;
