import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background grain"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Floating shapes */}
      <div className="absolute top-24 right-[8%] hidden md:block">
        <div className="h-24 w-24 rounded-full bg-accent border-2 border-border animate-float" />
      </div>
      <div className="absolute bottom-32 left-[6%] hidden md:block">
        <div className="h-16 w-16 bg-tertiary border-2 border-border rotate-12 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="absolute top-1/2 right-[20%] hidden lg:block">
        <div className="h-12 w-12 bg-quaternary border-2 border-border rounded-md animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="container relative pt-20 pb-32 md:pt-28 md:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-blink" />
          E-book · Convertor 2026 Report
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 text-[clamp(3rem,9vw,8rem)] leading-[0.9]"
        >
          DIGITAL <br />
          MARKNADS-<br />
          FÖRING <span className="text-stroke">2026</span>
          <span className="inline-block w-3 md:w-4 h-[0.85em] bg-accent ml-2 align-baseline animate-blink" />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 grid md:grid-cols-2 gap-8 items-end"
        >
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
            Fyra kapitel om vad som faktiskt funkar nästa år. Från Convertor —
            byrån som bygger sajter, kampanjer och varumärken som inte ser ut
            som alla andra.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="#chapter-01"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground border-2 border-border brutalist-btn px-5 py-3 text-sm font-bold"
            >
              Börja läs <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-card text-foreground border-2 border-border brutalist-btn px-5 py-3 text-sm font-bold"
            >
              Hyr oss
            </a>
          </div>
        </motion.div>

        {/* Meta strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-2 border-border rounded-md overflow-hidden">
          {[
            ["04", "Kapitel"],
            ["12", "Insikter"],
            ["~14 min", "Lästid"],
            ["2026", "Report"],
          ].map(([v, l]) => (
            <div key={l} className="bg-card p-4 md:p-5">
              <div className="font-display text-2xl md:text-3xl">{v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y-2 border-border bg-accent text-accent-foreground py-3 overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8 font-display text-lg whitespace-nowrap">
              <span>★ AI-FIRST</span>
              <span>★ FIRST-PARTY DATA</span>
              <span>★ MOTION DESIGN</span>
              <span>★ EDGE PERFORMANCE</span>
              <span>★ BRUTAL TYPE</span>
              <span>★ AGENTIC COMMERCE</span>
              <span>★ GENERATIVE SEARCH</span>
              <span>★ COMMUNITY OVER FUNNEL</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
