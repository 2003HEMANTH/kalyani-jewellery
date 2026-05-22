"use client";

import { motion } from "framer-motion";

const bridal = "/assets/col-bridal.jpg";
const gold = "/assets/col-gold.jpg";
const diamond = "/assets/col-diamond.jpg";
const silver = "/assets/col-silver.jpg";
const everyday = "/assets/col-everyday.jpg";
const engrave = "/assets/col-engrave.jpg";

const items = [
  { title: "Bridal Couture", tag: "Signature", img: bridal, copy: "Statement sets for the modern Indian bride.", span: "md:col-span-2 md:row-span-2" },
  { title: "Gold Heirlooms", tag: "22K Pure", img: gold, copy: "Timeless gold, hand-finished." },
  { title: "Diamond Atelier", tag: "GIA Certified", img: diamond, copy: "Brilliance, ethically sourced." },
  { title: "Silver & Oxidised", tag: "Artisanal", img: silver, copy: "Heritage tribal motifs." },
  { title: "Everyday Elegance", tag: "Daily Wear", img: everyday, copy: "Featherlight, never invisible." },
  { title: "Personalized Engraving", tag: "Bespoke", img: engrave, copy: "Names, dates, devotions — etched forever." },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-primary">— The Collections</div>
            <h2 className="mt-4 font-display text-5xl tracking-tight md:text-7xl text-foreground">
              Edited with <em className="italic text-gradient-rose">intention</em>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six houses, one philosophy. From ceremonial brilliance to whispered everyday luxury — each piece is conceived in our Bengaluru atelier.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[320px] grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-7 text-ivory">
                <div className="inline-flex w-fit items-center gap-2 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                  {it.tag}
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-ivory">{it.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-ivory/80">{it.copy}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--champagne)] opacity-0 transition group-hover:opacity-100">
                    Discover →
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
