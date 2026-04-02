import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Producto", href: "#features" },
    { label: "Flujo", href: "#workflow" },
    { label: "Principios", href: "#principles" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
            <span className="font-mono text-sm font-bold text-primary">Q</span>
          </div>
          <span className="text-lg font-semibold text-heading">QuantLab</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Comenzar
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
            Comenzar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
