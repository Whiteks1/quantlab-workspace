import { Repeat, Eye, Compass, Lock, Milestone, Zap } from "lucide-react";

const principles = [
  { icon: Repeat, title: "Reproducibilidad", desc: "Cada run puede recrearse exactamente. Mismos inputs, mismos resultados." },
  { icon: Eye, title: "Auditabilidad", desc: "Todo queda registrado. Parámetros, decisiones, artifacts y timestamps." },
  { icon: Compass, title: "Claridad operativa", desc: "Cada pantalla tiene un propósito. Nada superfluo, nada ambiguo." },
  { icon: Lock, title: "Control local", desc: "Tus datos, tus modelos, tu infraestructura. Sin dependencias externas obligatorias." },
  { icon: Milestone, title: "Boundaries explícitos", desc: "El sistema define qué está permitido en cada etapa. Sin atajos implícitos." },
  { icon: Zap, title: "Automatización preparada", desc: "La automatización llega cuando el sistema está listo, no antes." },
];

const PrinciplesSection = () => (
  <section className="py-24 border-t border-border" id="principles">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Principios</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Construido sobre convicciones, no sobre tendencias
        </h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p) => (
          <div key={p.title} className="rounded-lg border border-border bg-card p-5 card-hover">
            <p.icon size={18} className="mb-3 text-primary" />
            <h3 className="text-sm font-semibold text-heading">{p.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrinciplesSection;
