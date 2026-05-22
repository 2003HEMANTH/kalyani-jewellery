"use client";

import { motion } from "framer-motion";

const banner = "/assets/banner-rectangular.png";

export function ShowroomBillboard() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background soft gold glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[color:var(--champagne)] opacity-20 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-primary">
            ✦ The Flagship Showroom ✦
          </div>
          <h2 className="mt-4 font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl text-foreground">
            Where Heritage Meets <em className="italic text-gradient-rose">Splendour</em>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base text-balance leading-relaxed">
            Step into the virtual gates of our Bengaluru digital showroom. An immersive presentation of our pure 22K gold jewelry, pristine IGI/GIA certified diamonds, and masterfully crafted bridal heirlooms.
          </p>
        </div>

        {/* Billboard Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card p-2 sm:p-3 shadow-luxe transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]"
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[1.65rem] bg-noir/5">
            <img
              src={banner}
              alt="Kalyani Jewellery Flagship Collection Banner - Gold and Silver Masterpieces"
              width={1920}
              height={820}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
            />
            {/* Absolute high-end gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-noir/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.65rem] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
