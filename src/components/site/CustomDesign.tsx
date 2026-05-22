"use client";

import { motion } from "framer-motion";
import { MessageSquare, Pencil, Hammer, Gem } from "lucide-react";

const engrave = "/assets/col-engrave.jpg";
const craftsman = "/assets/craftsman.jpg";

const steps = [
  { icon: MessageSquare, title: "Consult", copy: "An intimate conversation with our master designer." },
  { icon: Pencil, title: "Sketch", copy: "Hand-drawn renders shaped around your vision." },
  { icon: Hammer, title: "Craft", copy: "8–12 weeks of atelier handwork in 22K gold." },
  { icon: Gem, title: "Reveal", copy: "Hallmarked, certified, and presented in our flagship." },
];

export function CustomDesign() {
  return (
    <section id="custom" className="relative overflow-hidden bg-noir py-32 text-ivory" style={{ background: "var(--noir)", color: "var(--ivory)" }}>
      <div className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-rose opacity-30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[color:var(--champagne)] opacity-20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-luxe">
              <img src={craftsman} alt="Master goldsmith at work" width={1400} height={1600} loading="lazy" className="h-[560px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-8 -right-6 hidden w-56 overflow-hidden rounded-2xl glass-dark p-3 shadow-luxe md:block"
            >
              <img src={engrave} alt="Engraved pendant" width={400} height={500} loading="lazy" className="h-32 w-full rounded-xl object-cover" />
              <div className="mt-2 px-1">
                <div className="font-display text-sm text-ivory">"Aanya, est. 2024"</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Hand engraved · 22K</div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-[color:var(--champagne)]">— Bespoke Atelier</div>
            <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl">
              Designed <em className="italic text-gradient-rose">uniquely</em> for you.
            </h2>
            <p className="mt-6 max-w-md text-ivory/70">
              Custom bridal sets, name engravings and one-of-one heirlooms — sculpted by hand
              in our Bengaluru atelier from the first sketch to the final polish.
            </p>

            <div className="mt-10 space-y-2">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative flex items-start gap-5 rounded-2xl border border-ivory/10 p-5 transition hover:border-[color:var(--rose-gold)]/60 hover:bg-ivory/[0.03]"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-rose text-ivory shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-2xl">{s.title}</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">Step 0{i + 1}</span>
                    </div>
                    <p className="mt-1 text-sm text-ivory/60">{s.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-105"
            >
              Begin Your Design Journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
