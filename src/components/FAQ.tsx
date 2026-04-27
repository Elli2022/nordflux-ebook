import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Does Convertor really transform my e-book?",
    a: "This build ships in demo mode: it produces a real downloadable file in the target container, but the bytes are demo content. The pipeline is structured so a real backend (Edge Function, microservice, or library like Pandoc) can be plugged in without touching the UI.",
  },
  {
    q: "Where is my file uploaded?",
    a: "Nowhere. Files stay in your browser — selection, validation and the simulated conversion all run client-side. No tracking, no third-party uploads.",
  },
  {
    q: "What's the file size limit?",
    a: "50 MB per file. The limit lives in one place (src/lib/converter/formats.ts) so it's trivial to lift once you wire up a real backend.",
  },
  {
    q: "Which formats are supported?",
    a: "EPUB, MOBI, PDF, TXT and DOCX, in any direction (except converting a format to itself).",
  },
  {
    q: "Can I deploy this to Netlify?",
    a: "Yes. Run npm install, then npm run build, and point Netlify at the dist folder. A netlify.toml is included with the right SPA fallback for client-side routes.",
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container py-24 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">FAQ</p>
        <h2 id="faq-title" className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Questions, answered.
        </h2>
      </div>

      <div className="mt-12 mx-auto max-w-3xl glass rounded-2xl p-2 md:p-4">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium hover:no-underline px-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
