const Footer = () => (
  <footer className="border-t border-border/80 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
      <div className="flex items-center gap-2 opacity-90">
        <div className="flex h-6 w-6 items-center justify-center rounded border border-primary/20 bg-primary/10">
          <span className="font-mono text-[10px] font-bold text-primary">Q</span>
        </div>
        <span className="text-sm font-medium text-heading">QuantLab Research</span>
      </div>
      <p className="text-xs text-muted-foreground/90">
        © {new Date().getFullYear()} QuantLab Research.
      </p>
    </div>
  </footer>
);

export default Footer;
