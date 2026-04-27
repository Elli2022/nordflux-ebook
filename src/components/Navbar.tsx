import { FileText, Sparkles } from "lucide-react";

interface NavbarProps {
  onCta?: () => void;
}

export function Navbar({ onCta }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" aria-label="Convertor home">
          <div className="relative h-9 w-9 rounded-xl bg-brand grid place-items-center shadow-glow transition-smooth group-hover:scale-105">
            <FileText className="h-4.5 w-4.5 text-primary-foreground" aria-hidden />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Convertor
          </span>
          <span className="ml-1 hidden sm:inline-flex items-center gap-1 rounded-full border border-border/70 bg-secondary/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3 w-3 text-accent" aria-hidden /> Demo
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition-smooth">How it works</a>
          <a href="#formats" className="hover:text-foreground transition-smooth">Formats</a>
          <a href="#faq" className="hover:text-foreground transition-smooth">FAQ</a>
          <a
            href="https://github.com/Elli2022/convertor-e-book"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-foreground transition-smooth"
          >
            GitHub
          </a>
        </nav>
        <button
          onClick={onCta}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-brand px-4 text-sm font-medium text-primary-foreground shadow-elegant hover:opacity-95 transition-smooth focus-visible:outline-none"
        >
          Start converting
        </button>
      </div>
    </header>
  );
}
