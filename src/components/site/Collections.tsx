"use client";

import { motion } from "framer-motion";

const bridal = "/assets/col-bridal.jpg";
const gold = "/assets/col-gold.jpg";
const diamond = "/assets/col-diamond.jpg";
const silver = "/assets/col-silver.jpg";
const everyday = "/assets/col-everyday.jpg";
const engrave = "/assets/col-engrave.jpg";

const chains = "/assets/col-chains.jpg";
const rings = "/assets/col-rings.jpg";
const earrings = "/assets/col-earrings.jpg";

const items = [
  { 
    title: "Bridal Couture", 
    tag: "Signature", 
    img: bridal, 
    copy: "Statement sets for the modern Indian bride.", 
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    title: "Luxe Gold Earrings", 
    tag: "75% Gold", 
    img: earrings, 
    copy: "Hypoallergenic real diamond studs & drops.",
    span: "md:row-span-2",
    isBanner: true
  },
  { 
    title: "Pure Silver Chains", 
    tag: "70% Pure", 
    img: chains, 
    copy: "Bespoke baby, ladies, and gents chains.",
    span: "md:row-span-2",
    isBanner: true
  },
  { 
    title: "Sterling Silver Rings", 
    tag: "92.5 Sterling", 
    img: rings, 
    copy: "Intricate ladies & premium gents bands.",
    span: "md:row-span-2",
    isBanner: true
  },
  { 
    title: "Gold Heirlooms", 
    tag: "22K Pure", 
    img: gold, 
    copy: "Timeless gold, hand-finished." 
  },
  { 
    title: "Diamond Atelier", 
    tag: "GIA Certified", 
    img: diamond, 
    copy: "Brilliance, ethically sourced." 
  },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-primary">— The Collections</div>
            <h2 className="mt-4 font-display text-[2.5rem] leading-none tracking-tight sm:text-5xl md:text-7xl text-foreground">
              Edited with <em className="italic text-gradient-rose">intention</em>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm sm:text-base">
            Six houses, one philosophy. From ceremonial brilliance to whispered everyday luxury — each piece is conceived in our Bengaluru atelier.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[275px] sm:auto-rows-[320px] grid-cols-1 gap-5 md:grid-cols-3">
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
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              
              {it.isBanner ? (
                <>
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7 text-ivory">
                    <div className="mt-4 ml-auto inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--champagne)] border border-primary/20 opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60">
                      Discover Collection →
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-7 text-ivory">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full glass-dark px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                      {it.tag}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-ivory">{it.title}</h3>
                      <p className="mt-2 max-w-sm text-xs sm:text-sm text-ivory/80">{it.copy}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--champagne)] opacity-90 md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">
                        Discover →
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
