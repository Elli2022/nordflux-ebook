import { FORMAT_LIST } from "@/lib/converter/formats";

export function FormatsSection() {
  return (
    <section id="formats" aria-labelledby="formats-title" className="border-y border-border/60 bg-secondary/20">
      <div className="container py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Supported formats</p>
            <h2 id="formats-title" className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              The formats readers actually use.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Convertor focuses on the five most common e-book and document
            formats — no obscure niche containers, no bloated UI.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {FORMAT_LIST.map((fmt) => (
            <div key={fmt.id} className="glass rounded-2xl p-5 transition-smooth hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-semibold text-gradient-brand">{fmt.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  .{fmt.extension}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{fmt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
