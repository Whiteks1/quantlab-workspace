import { Repeat, Eye, Compass, Lock, Milestone, Zap } from "lucide-react";

const principles = [
  { icon: Repeat, title: "Consistencia", desc: "La marca suena igual en la home, el portfolio y cada demo." },
  { icon: Eye, title: "Evidencia", desc: "Lo que se dice se apoya con casos, enlaces o pruebas visibles." },
  { icon: Compass, title: "Claridad", desc: "Cada bloque responde a una sola intención y evita el ruido visual." },
  { icon: Lock, title: "Control", desc: "La estructura es ligera, editable y fácil de mantener desde un único sitio." },
  { icon: Milestone, title: "Sistema", desc: "La web se piensa como base reutilizable, no como una pieza cerrada." },
  { icon: Zap, title: "Velocidad", desc: "Se publica rápido, se corrige rápido y se amplía sin rehacerlo todo." },
];

const PrinciplesSection = () => (
  <section className="py-24 border-t border-border" id="principles">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Principios</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Construido para vender con orden, no para impresionar sin rumbo
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
