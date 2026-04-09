import { productLinks, brandLayers } from "@/content/quantlab";

const quantPulse = brandLayers.find((l) => l.title === "QuantPulse");

const Footer = () => (
  <footer className="border-t border-border/80 py-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-2 opacity-90">
          <div className="flex h-6 w-6 items-center justify-center rounded border border-primary/20 bg-primary/10">
            <span className="font-mono text-[10px] font-bold text-primary">Q</span>
          </div>
          <span className="text-sm font-medium text-heading">QuantLab Research</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={productLinks.docsRoot}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground/95"
          >
            Product docs
          </a>
          <a
            href={productLinks.repository}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground/95"
          >
            Source access
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} QuantLab Research.
        </p>
        <p className="text-xs text-muted-foreground/50">
          v0.1 · Stage D.2 · Paper ops operational · broker validation in progress
        </p>
      </div>

      {quantPulse && (
        <p className="text-xs text-muted-foreground/50">
          <span className="font-medium text-muted-foreground/70">{quantPulse.title}</span>
          {" — "}{quantPulse.description}
        </p>
      )}
    </div>
  </footer>
);

export default Footer;
