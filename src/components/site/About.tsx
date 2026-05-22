"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "BIS Hallmarked" },
  { icon: Award, label: "IGI / GIA Certified" },
  { icon: Sparkles, label: "Lifetime Polish" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[color:var(--rose-gold)]/40"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 91) % 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-primary">— Our Heritage</div>
        <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl text-balance text-foreground">
          Four decades of <em className="italic text-gradient-rose">unhurried</em> craftsmanship.
        </h2>
        <div className="mx-auto mt-8 h-px w-32 divider-rose" />
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Founded in the lanes of old Bengaluru, Kalyani Jewellery began as a single bench
          of artisans devoted to one belief — that jewellery should outlive its wearer.
          Three generations later, that bench has become an atelier, and every piece we
          create still passes through the hands of a master before it meets yours.
        </p>
        <p className="mx-auto mt-6 max-w-2xl font-display italic text-2xl text-foreground/80">
          "We do not sell jewellery. We pass down memories cast in gold."
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {badges.map((b) => (
            <div key={b.label} className="inline-flex items-center gap-3 rounded-full glass px-5 py-3 text-sm text-foreground">
              <b.icon className="h-4 w-4 text-primary" />
              <span className="tracking-wide">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
