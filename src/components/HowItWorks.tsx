import { Upload, Settings2, Wand2, Download } from "lucide-react";

const STEPS = [
  {
    icon: Upload,
    title: "Drop your file",
    body: "EPUB, MOBI, PDF, TXT or DOCX. Up to 50 MB. Validated before anything happens.",
  },
  {
    icon: Settings2,
    title: "Pick a target",
    body: "Choose where you want the content to land. We disable the source format to keep things sane.",
  },
  {
    icon: Wand2,
    title: "We process it",
    body: "A clear progress timeline shows exactly what's happening — no spinners hiding mystery work.",
  },
  {
    icon: Download,
    title: "Grab the file",
    body: "Sanitized filename, the right MIME type, and an instant local download. Done.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="container py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">Workflow</p>
        <h2 id="how-title" className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
          A four-step pipeline you can trust.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Convertor is built around a single, focused workflow — the kind of
          tool you reach for once a week and never have to think about.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, idx) => (
          <article key={step.title} className="glass rounded-2xl p-6 transition-smooth hover:-translate-y-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-soft border border-primary/30 grid place-items-center">
                <step.icon className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
