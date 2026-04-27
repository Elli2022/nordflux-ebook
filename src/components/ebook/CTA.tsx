import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="bg-foreground text-background py-24 md:py-36 border-t-2 border-border grain">
      <div className="container max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]"
        >
          REDO ATT <br />
          BYGGA <span className="text-accent">2026</span>?
        </motion.h2>
        <p className="mt-8 text-lg md:text-xl opacity-80 max-w-2xl leading-relaxed">
          Convertor är webbyrån som hjälper varumärken bli omöjliga att scrolla
          förbi. Sajter, kampanjer, AI-implementationer och content som faktiskt
          flyttar siffror.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:hello@convertor.se"
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground border-2 border-background brutalist-btn px-6 py-4 text-base font-bold"
            style={{ boxShadow: "6px 6px 0 hsl(var(--background))" }}
          >
            hello@convertor.se →
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-md bg-transparent text-background border-2 border-background px-6 py-4 text-base font-bold hover:bg-background hover:text-foreground transition-colors"
          >
            Tillbaka upp ↑
          </a>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-background/20 border-2 border-background/40 rounded-md overflow-hidden">
          {[
            ["Webbproduktion", "Next-gen sajter, headless CMS, edge."],
            ["Kampanj & content", "Short-form, podcast, AI-content pipelines."],
            ["Strategi & data", "GEO, first-party stack, predictive AI."],
          ].map(([t, d]) => (
            <div key={t} className="bg-foreground p-6">
              <div className="font-display text-xl text-primary">{t}</div>
              <p className="text-sm opacity-75 mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
