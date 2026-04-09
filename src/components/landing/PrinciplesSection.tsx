import { Repeat, Eye, Compass, Lock, Milestone, Zap } from "lucide-react";

const principles = [
  { icon: Repeat, title: "Reproducibility", desc: "Every execution, comparison, and handoff should be traceable and repeatable." },
  { icon: Eye, title: "Auditability", desc: "Artifacts and system state should remain readable and verifiable." },
  { icon: Compass, title: "Operational clarity", desc: "The public surface should favor hierarchy, context, and continuity over vague product language." },
  { icon: Lock, title: "Controlled execution", desc: "Execution stays supervised and explicit instead of being presented as a black-box automation claim." },
  { icon: Milestone, title: "Explicit boundaries", desc: "Research, pre-trade, paper, and execution safety are separated with honest criteria." },
  { icon: Zap, title: "Gradual automation", desc: "Automation only appears after the technical contract is already stable." },
];

const PrinciplesSection = () => (
  <section className="py-24 border-t border-border" id="principles">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Principles</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Reproducible, traceable, supervised, local-first
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
