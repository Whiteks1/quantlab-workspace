import { workflowSteps } from "@/content/quantlab";

const WorkflowSection = () => (
  <section className="border-t border-border py-24" id="workflow">
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Workflow</p>
        <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
          Hypothesis → Run → Artifacts → Validation
        </h2>
        <p className="mt-4 text-muted-foreground">
          The system turns a signal into a repeatable run, stores canonical outputs, and only then lets
          validation decide whether the result deserves continuity.
        </p>
      </div>

      <div className="relative mt-14">
        <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-border md:block" />
        <div className="space-y-6">
          {workflowSteps.map((step) => (
            <div key={step.step} className="relative flex gap-6 md:pl-14">
              <div className="absolute left-0 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-xs font-mono font-bold text-primary md:flex">
                {step.step}
              </div>
              <article className="flex-1 rounded-lg border border-border bg-card p-5 card-hover">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary md:hidden">{step.step}</span>
                  <h3 className="text-sm font-semibold text-heading">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;
