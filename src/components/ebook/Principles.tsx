import { motion } from "framer-motion";
import { PRINCIPLES } from "@/lib/ebook-data";

export function Principles() {
  return (
    <section id="principles" className="bg-primary border-t-2 border-border py-24 md:py-32 grain">
      <div className="container">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest">Manifest</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">
            Sex principer vi bygger efter.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="brutalist-card rounded-xl p-6 bg-background"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl text-accent">{p.num}</span>
                <span className="text-xl">→</span>
              </div>
              <p className="font-display text-2xl mt-6 leading-tight">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
