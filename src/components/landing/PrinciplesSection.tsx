import { Repeat, Eye, Lock } from "lucide-react";

const principles = [
  { icon: Repeat, title: "Reproducible", desc: "Research should stay repeatable from brief to review." },
  { icon: Eye, title: "Auditable", desc: "Artifacts and state should remain readable and verifiable." },
  { icon: Lock, title: "Controlled", desc: "Execution stays supervised instead of being presented as automation theater." },
];

const PrinciplesSection = () => (
  <section className="py-24 border-t border-border" id="principles">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Principles</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Built for clarity, not market theater
        </h2>
        <p className="mt-4 text-muted-foreground">
          Local-first. Traceable. Reviewable. Supervised.
        </p>
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
