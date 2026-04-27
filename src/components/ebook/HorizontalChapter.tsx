import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Chapter } from "@/lib/ebook-data";
import { cn } from "@/lib/utils";

const ACCENT_BG: Record<string, string> = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  tertiary: "bg-tertiary text-tertiary-foreground",
  quaternary: "bg-quaternary text-quaternary-foreground",
};

const SECTION_BG = ["bg-background", "bg-secondary", "bg-card", "bg-background"];

interface Props {
  chapter: Chapter;
  index: number;
}

export function HorizontalChapter({ chapter, index }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  // Number of horizontal "panels" we show: intro + 1 per card + stat = cards.length + 2
  const panels = chapter.cards.length + 2;
  // Translate from 0% to -((panels-1)/panels * 100%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((panels - 1) / panels) * 100}%`]);

  const sectionBg = SECTION_BG[index % SECTION_BG.length];

  return (
    <section
      ref={targetRef}
      id={`chapter-${chapter.number}`}
      aria-label={`Kapitel ${chapter.number}: ${chapter.title}`}
      className={cn("relative", sectionBg)}
      style={{ height: `${panels * 100}vh` }}
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden border-b-2 border-border">
        <motion.div style={{ x, width: `${panels * 100}%` }} className="flex h-full">
          {/* Intro panel */}
          <div className="w-screen h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 grain">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-5xl md:text-6xl text-accent">{chapter.number}</span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                  Scrolla ↓ för att läsa →
                </span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]">
                {chapter.title}
              </h2>
              <p className="font-display text-2xl md:text-4xl text-accent mt-3">
                {chapter.subtitle}
              </p>
              <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
                {chapter.intro}
              </p>
            </div>
          </div>

          {/* Card panels */}
          {chapter.cards.map((card, i) => (
            <div
              key={card.heading}
              className="w-screen h-full flex items-center justify-center px-6 md:px-16"
            >
              <article
                className={cn(
                  "max-w-2xl w-full p-8 md:p-12 rounded-2xl border-2 border-border",
                  ACCENT_BG[card.accent],
                )}
                style={{ boxShadow: "10px 10px 0 hsl(var(--border))" }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-sm font-bold opacity-70">
                    {chapter.number} · {String(i + 1).padStart(2, "0")} / {chapter.cards.length}
                  </span>
                  <span className="font-display text-2xl">★</span>
                </div>
                <h3 className="font-display text-4xl md:text-6xl leading-[0.95]">
                  {card.heading}
                </h3>
                <p className="mt-6 text-lg md:text-xl leading-relaxed">{card.body}</p>
              </article>
            </div>
          ))}

          {/* Stat / closing panel */}
          {chapter.stat && (
            <div className="w-screen h-full flex flex-col items-center justify-center px-6 text-center bg-foreground text-background">
              <span className="text-xs uppercase tracking-widest font-bold opacity-60 mb-4">
                Kapitel {chapter.number} · Take-away
              </span>
              <div className="font-display text-[clamp(6rem,20vw,16rem)] leading-none text-primary">
                {chapter.stat.value}
              </div>
              <p className="mt-4 text-lg md:text-2xl max-w-2xl opacity-90">
                {chapter.stat.label}
              </p>
              <span className="mt-10 text-xs uppercase tracking-widest opacity-50">
                Fortsätt scrolla ↓
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
