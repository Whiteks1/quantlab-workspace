import { Check, X } from "lucide-react";

const alternatives = [
  { name: "Dashboard bonito", research: false, artifacts: false, compare: false, decision: false, paper: false, boundaries: false },
  { name: "Bot de automatización", research: false, artifacts: false, compare: false, decision: false, paper: false, boundaries: false },
  { name: "Broker UI", research: false, artifacts: false, compare: false, decision: false, paper: true, boundaries: false },
  { name: "Notebooks", research: true, artifacts: false, compare: false, decision: false, paper: false, boundaries: false },
  { name: "QuantLab", research: true, artifacts: true, compare: true, decision: true, paper: true, boundaries: true, highlight: true },
];

const cols = ["Research", "Artifacts", "Compare", "Decisión", "Paper", "Boundaries"];
const colKeys = ["research", "artifacts", "compare", "decision", "paper", "boundaries"] as const;

const DifferentiationSection = () => (
  <section className="py-24 border-t border-border" id="diff">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Diferenciación</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          ¿Por qué no otra herramienta?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Las alternativas resuelven fragmentos. QuantLab conecta el flujo completo.
        </p>
      </div>

      <div className="mt-14 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 pr-4 text-left text-xs font-medium text-muted-foreground" />
              {cols.map((c) => (
                <th key={c} className="px-3 py-3 text-center text-xs font-medium text-muted-foreground">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {alternatives.map((a) => (
              <tr key={a.name} className={`border-b border-border ${a.highlight ? "bg-primary/5" : ""}`}>
                <td className={`py-3 pr-4 text-sm font-medium ${a.highlight ? "text-primary" : "text-foreground"}`}>
                  {a.name}
                </td>
                {colKeys.map((k) => (
                  <td key={k} className="px-3 py-3 text-center">
                    {a[k] ? (
                      <Check size={16} className={a.highlight ? "inline text-primary" : "inline text-success"} />
                    ) : (
                      <X size={16} className="inline text-muted-foreground/40" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default DifferentiationSection;
