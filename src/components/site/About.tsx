"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "BIS Hallmarked" },
  { icon: Award, label: "IGI / GIA Certified" },
  { icon: Sparkles, label: "Lifetime Polish" },
];

const circularBanner = "/assets/banner-circular.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32">
      {/* Sparkle background */}
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

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 items-center md:grid-cols-12">
          {/* Circular Graphic Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex justify-center order-2 md:order-1"
          >
            <div className="group relative aspect-square w-full max-w-[420px] rounded-full p-2 border border-primary/20 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 shadow-[0_0_50px_rgba(212,175,55,0.08)] transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_rgba(212,175,55,0.2)]">
              {/* Circular luxury border line */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_120s_linear_infinite] pointer-events-none" />
              
              <div className="relative h-full w-full overflow-hidden rounded-full border border-primary/30">
                <img
                  src={circularBanner}
                  alt="Kalyani Jewellery - Detailed Offerings Circle"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gold ring accent */}
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Heritage Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 text-center md:text-left order-1 md:order-2"
          >
            <div className="text-xs uppercase tracking-[0.4em] text-primary">— Our Heritage</div>
            <h2 className="mt-4 font-display text-[2.35rem] leading-[1.1] tracking-tight sm:text-5xl md:text-6xl text-foreground text-balance">
              Four decades of <em className="italic text-gradient-rose">unhurried</em> craftsmanship.
            </h2>
            <div className="mt-6 h-px w-24 divider-rose mx-auto md:mx-0" />
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Founded in the lanes of old Bengaluru, Kalyani Jewellery began as a single bench
              of artisans devoted to one belief — that jewellery should outlive its wearer.
              Three generations later, that bench has become an atelier, and every piece we
              create still passes through the hands of a master before it meets yours.
            </p>
            <p className="mt-6 font-display italic text-xl sm:text-2xl text-foreground/80 leading-snug">
              "We do not sell jewellery. We pass down memories cast in gold."
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
              {badges.map((b) => (
                <div key={b.label} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs sm:px-4.5 sm:py-2.5 sm:text-sm text-foreground">
                  <b.icon className="h-4 w-4 text-primary" />
                  <span className="tracking-wide font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
