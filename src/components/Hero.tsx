import { ArrowDown, ShieldCheck, Zap, Lock } from "lucide-react";

interface HeroProps {
  onCta: () => void;
}

export function Hero({ onCta }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />

      <div className="container relative pt-20 pb-24 md:pt-28 md:pb-36">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            New · v2026 modernized build
          </div>

          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            <span className="text-gradient">Convert e-books</span>
            <br />
            <span className="text-gradient-brand">fast, safely & beautifully.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Drop a file, pick a target format, and get a clean result in seconds.
            Built for writers, students and avid readers — with a modern,
            distraction-free workflow.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onCta}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-primary-foreground shadow-elegant hover:opacity-95 transition-smooth animate-pulse-glow"
            >
              Start converting <ArrowDown className="h-4 w-4" aria-hidden />
            </button>
            <a
              href="#how"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 text-base font-medium text-foreground hover:bg-secondary transition-smooth"
            >
              How it works
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-accent" aria-hidden /> Sub-second UI</li>
            <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" aria-hidden /> Strict file validation</li>
            <li className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-accent" aria-hidden /> Runs in your browser</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
