"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  { name: "Ananya R.", city: "Jayanagar", text: "My bridal set felt like wearing a poem. The detailing is unreal — three generations of my family now choose Kalyani.", initials: "AR" },
  { name: "Vikram S.", city: "Indiranagar", text: "Designed an engagement solitaire from scratch. The team sketched, refined and delivered within 6 weeks. Flawless.", initials: "VS" },
  { name: "Meera K.", city: "Whitefield", text: "Their oxidised silver collection is unlike anything in the city. Each piece feels like a heirloom in waiting.", initials: "MK" },
  { name: "Rohan & Diya", city: "Koramangala", text: "Custom name engraved pendants for our anniversary. Wrapped in velvet, delivered in a wooden box. Pure ceremony.", initials: "RD" },
  { name: "Lakshmi P.", city: "Basavanagudi", text: "Trusted them since 1998. Same warmth, same precision — only the showroom has grown more beautiful.", initials: "LP" },
];

export function Testimonials() {
  const loop = [...reviews, ...reviews];
  return (
    <section className="relative overflow-hidden bg-gradient-luxe py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-primary">— In Their Words</div>
          <h2 className="mt-4 font-display text-5xl tracking-tight md:text-6xl text-foreground">
            A house, kept by its <em className="italic text-gradient-rose">people</em>.
          </h2>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[color:var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[color:var(--background)] to-transparent" />
        <div className="flex w-max animate-marquee gap-6 px-6">
          {loop.map((r, i) => (
            <motion.figure
              key={i}
              whileHover={{ y: -6 }}
              className="w-[360px] shrink-0 rounded-3xl glass p-7 shadow-soft text-foreground"
            >
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-4 font-display text-lg leading-snug text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-rose text-sm font-medium text-ivory">
                  {r.initials}
                </span>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{r.city}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
