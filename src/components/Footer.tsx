import { FileText, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="container py-12 md:py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-brand grid place-items-center shadow-glow">
              <FileText className="h-4 w-4 text-primary-foreground" aria-hidden />
            </div>
            <span className="font-display text-lg font-semibold">Convertor</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            A modern, focused e-book converter. Built with React, Vite,
            TypeScript and Tailwind CSS.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Product</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground transition-smooth" href="#how">How it works</a></li>
            <li><a className="hover:text-foreground transition-smooth" href="#formats">Supported formats</a></li>
            <li><a className="hover:text-foreground transition-smooth" href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Project</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground transition-smooth"
                href="https://github.com/Elli2022/convertor-e-book"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="h-4 w-4" aria-hidden /> Elli2022/convertor-e-book
              </a>
            </li>
            <li className="text-xs">Branch: <span className="font-mono text-foreground">Modernized-convertor-e-book</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Convertor. Crafted with care.</p>
          <p className="font-mono">v2026.01 · demo build</p>
        </div>
      </div>
    </footer>
  );
}
