"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-noir pt-20 pb-10 text-ivory" style={{ background: "var(--noir)", color: "var(--ivory)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-glow">
                <svg viewBox="0 0 100 100" className="h-full w-full text-primary">
                  {/* Elegant gold outer circles */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
                  <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" strokeDasharray="2 2" />
                  
                  {/* Monogram letters */}
                  <text
                    x="33"
                    y="62"
                    fontFamily="var(--font-display), serif"
                    fontSize="44"
                    fontWeight="300"
                    fill="url(#goldGradientFooter)"
                    className="select-none"
                  >
                    K
                  </text>
                  <text
                    x="53"
                    y="70"
                    fontFamily="var(--font-display), serif"
                    fontSize="44"
                    fontStyle="italic"
                    fontWeight="400"
                    fill="url(#goldGradientAccentFooter)"
                    className="select-none"
                  >
                    J
                  </text>
                  
                  {/* Gradients definitions */}
                  <defs>
                    <linearGradient id="goldGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--rose-gold)" />
                      <stop offset="50%" stopColor="var(--rose-gold-soft)" />
                      <stop offset="100%" stopColor="var(--champagne)" />
                    </linearGradient>
                    <linearGradient id="goldGradientAccentFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--champagne)" />
                      <stop offset="100%" stopColor="var(--rose-gold)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div>
                <div className="font-display text-2xl">Kalyani Jewellery</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--champagne)]">Bengaluru · Since 1985</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-ivory/60">
              A house of bridal, gold, diamond and bespoke jewellery — handcrafted in our Bengaluru atelier and worn across generations.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex flex-col sm:flex-row max-w-md items-stretch sm:items-center gap-2 rounded-[2rem] sm:rounded-full border border-ivory/15 bg-ivory/5 p-2 sm:p-1.5 pl-4 sm:pl-5">
              <input placeholder="Your email for private previews" className="flex-1 bg-transparent text-sm outline-none placeholder:text-ivory/40 text-ivory py-2 sm:py-0" />
              <button className="rounded-full bg-gradient-rose px-5 py-3 sm:py-2.5 text-xs font-medium tracking-wide text-primary-foreground w-full sm:w-auto cursor-pointer">Subscribe</button>
            </form>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--champagne)]">Atelier</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>Bengaluru, Karnataka</li>
              <li>+91 93805 90305</li>
              <li>+91 63620 02980</li>
              <li>Mon–Sat · 10:30–20:30</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--champagne)]">Explore</div>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li><a href="#collections" className="hover:text-[color:var(--rose-gold)]">Collections</a></li>
              <li><a href="#custom" className="hover:text-[color:var(--rose-gold)]">Bespoke</a></li>
              <li><a href="#about" className="hover:text-[color:var(--rose-gold)]">Heritage</a></li>
              <li><a href="#contact" className="hover:text-[color:var(--rose-gold)]">Visit Us</a></li>
            </ul>
          </div>
        </div>

        <div className="my-12 divider-rose" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/50 md:flex-row">
          <div className="text-center md:text-left">© {new Date().getFullYear()} Kalyani Jewellery. BIS Hallmarked · IGI Certified.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/kalayani_jewellry_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-[color:var(--rose-gold)]"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="transition hover:text-[color:var(--rose-gold)]"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Youtube" className="transition hover:text-[color:var(--rose-gold)]"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
