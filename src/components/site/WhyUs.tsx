"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Diamond, Brush, HandHeart, Crown, Hourglass } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "BIS Hallmarked", copy: "Every gram, government certified for purity." },
  { icon: Diamond, title: "Certified Diamonds", copy: "IGI / GIA graded with full provenance." },
  { icon: Brush, title: "Custom Designs", copy: "Sketch to heirloom — entirely yours." },
  { icon: HandHeart, title: "Trusted Craftsmanship", copy: "Twelve master artisans, one bench." },
  { icon: Crown, title: "Bridal Specialists", copy: "Couture sets for the once-in-a-lifetime day." },
  { icon: Hourglass, title: "Generational Legacy", copy: "Family-run, family-trusted since 1985." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-primary">— Why Kalyani</div>
          <h2 className="mt-4 font-display text-5xl tracking-tight md:text-6xl text-foreground">
            The promises behind every piece.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-foreground/8 bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-luxe"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-rose opacity-0 blur-2xl transition group-hover:opacity-40" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-luxe ring-1 ring-primary/20">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.copy}</p>
                <div className="mt-6 h-px w-12 bg-gradient-rose" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
