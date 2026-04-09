import { useState } from "react";
import { Menu, X } from "lucide-react";
import { productLinks } from "@/content/quantlab";

const links = [
  { label: "Product", href: "#system" },
  { label: "Proof", href: "#evidence" },
  { label: "Workflow", href: "#workflow" },
  { label: "Principles", href: "#principles" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-[0.35rem] border border-primary/20 bg-primary/10">
            <span className="font-mono text-sm font-bold text-primary">QL</span>
          </div>
          <div className="leading-tight">
            <span className="block text-lg font-semibold text-heading">QuantLab Research</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Research product
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={productLinks.docsRoot}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </a>
          <a
            href={productLinks.repository}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Source
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-foreground lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <a
              href={productLinks.docsRoot}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 text-center text-sm text-foreground"
            >
              Docs
            </a>
            <a
              href={productLinks.repository}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-4 py-2 text-center text-sm text-foreground"
            >
              Source
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
