const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 border border-primary/20">
          <span className="font-mono text-[10px] font-bold text-primary">Q</span>
        </div>
        <span className="text-sm font-medium text-heading">QuantLab</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} QuantLab. Investigación cuantitativa con rigor.
      </p>
    </div>
  </footer>
);

export default Footer;
