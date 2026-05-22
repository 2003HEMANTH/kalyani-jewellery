"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Calendar } from "lucide-react";

const hero = "/assets/hero-necklace.jpg";
const gold = "/assets/col-gold.jpg";
const diamond = "/assets/col-diamond.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-luxe pt-32 pb-20">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-rose opacity-30 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[color:var(--champagne)] opacity-40 blur-[140px]" />

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[color:var(--rose-gold)]"
          style={{ left: `${(i * 73) % 100}%`, top: `${(i * 47) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70">
            <Sparkles className="h-3 w-3 text-[color:var(--rose-gold)]" />
            Bengaluru's House of Heirlooms
          </div>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-tight md:text-8xl text-foreground">
            Crafting <em className="italic text-gradient-rose">Elegance</em>
            <br /> Since Generations
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Handcrafted gold, diamond and bridal jewellery — designed in the spirit
            of royal Indian artistry, finished with modern poise.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#collections" className="group inline-flex items-center gap-2 rounded-full bg-noir px-7 py-3.5 text-sm font-medium text-ivory shadow-luxe transition hover:scale-[1.03]" style={{ background: "var(--noir)", color: "var(--ivory)" }}>
              Explore Collections
              <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.03]">
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
            <a
              href="https://wa.me/919380590305"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-7 py-3.5 text-sm font-medium text-foreground transition hover:border-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <div>BIS Hallmarked</div>
            <div className="h-3 w-px bg-foreground/20" />
            <div>Certified Diamonds</div>
            <div className="h-3 w-px bg-foreground/20" />
            <div>Lifetime Care</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-luxe">
            <img src={hero} alt="Kalyani signature bridal necklace in rose gold with diamonds and rubies" className="h-full w-full object-cover" width={1920} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden w-44 overflow-hidden rounded-2xl glass shadow-luxe md:block"
          >
            <img src={gold} alt="Gold bangles" width={400} height={500} className="h-32 w-full object-cover" loading="lazy" />
            <div className="p-3">
              <div className="font-display text-sm text-foreground">22K Gold</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Heirloom Series</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 bottom-12 hidden w-44 overflow-hidden rounded-2xl glass shadow-luxe md:block"
          >
            <img src={diamond} alt="Diamond solitaire" width={400} height={500} className="h-32 w-full object-cover" loading="lazy" />
            <div className="p-3">
              <div className="font-display text-sm text-foreground">Solitaire</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">VVS · GIA</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-foreground/10 bg-card/40 py-5">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap font-display text-2xl text-foreground/40">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Bridal Couture", "Hallmarked 22K", "GIA Diamonds", "Hand Engraved", "Bespoke Atelier", "Since 1985", "Bengaluru"].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-16">
                {t} <span className="text-primary">✦</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
