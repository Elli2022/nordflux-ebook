import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b-2 border-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Convertor home">
          <div className="h-9 w-9 rounded-md bg-primary border-2 border-border grid place-items-center brutalist-btn">
            <span className="font-display text-base text-primary-foreground">C</span>
          </div>
          <span className="font-display text-lg tracking-tight">CONVERTOR</span>
          <span className="ml-1 hidden sm:inline-flex items-center gap-1 rounded-full border-2 border-border bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
            <Sparkles className="h-3 w-3" aria-hidden /> E-book
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="#chapters" className="hover:text-accent transition-colors">Kapitel</a>
          <a href="#principles" className="hover:text-accent transition-colors">Principer</a>
          <a href="#cta" className="hover:text-accent transition-colors">Kontakt</a>
        </nav>
        <a
          href="#cta"
          className="inline-flex h-10 items-center gap-2 rounded-md bg-primary text-primary-foreground border-2 border-border brutalist-btn px-4 text-sm font-bold"
        >
          Boka oss →
        </a>
      </div>
    </header>
  );
}
