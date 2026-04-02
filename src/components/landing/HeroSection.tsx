import heroImage from "@/assets/hero-workspace.jpg";
import { BadgeCheck, BarChart3, LayoutTemplate, Sparkles } from "lucide-react";

const badges = [
  { icon: LayoutTemplate, label: "Landing pages" },
  { icon: Sparkles, label: "Portfolio" },
  { icon: BarChart3, label: "Analytics" },
  { icon: BadgeCheck, label: "Conversion" },
];

const HeroSection = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(185_55%_45%/0.06),transparent_60%)]" />
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
          Nexus Marketing Studio
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
          Web comercial, mensajes claros y demos que{" "}
          <span className="text-gradient">aceleran la conversión</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Construimos la capa comercial de tu marca: landing pages, portfolio, contenido y estructura de venta. QuantLab aparece aquí como caso de muestra, no como el proyecto completo.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#portfolio" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
            Ver portfolio
          </a>
          <a href="#services" className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary">
            Explorar servicios
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground">
              <b.icon size={13} className="text-primary" />
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-xl border border-border shadow-2xl shadow-primary/5">
        <img
          src={heroImage}
          alt="Nexus Marketing — espacio de trabajo comercial"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
