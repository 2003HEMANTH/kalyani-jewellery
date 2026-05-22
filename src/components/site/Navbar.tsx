"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Custom", href: "#custom" },
  { label: "Heritage", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Visit", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    
    // Check local storage preference
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${scrolled ? "glass shadow-soft" : ""}`}>
          <a href="#top" className="group flex items-center gap-2">
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-card shadow-glow font-display text-lg font-semibold tracking-tighter transition duration-500 group-hover:scale-105">
              <span className="flex items-center justify-center -space-x-0.5">
                <span className="text-gradient-rose">K</span>
                <span className="text-accent italic font-serif -translate-y-[1px]">J</span>
              </span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide text-foreground">Kalyani</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Jewellery</div>
            </div>
          </a>
          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group relative text-sm tracking-wide text-foreground/80 transition hover:text-foreground">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-rose transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+919380590305" className="flex items-center gap-2 text-sm text-foreground/80 transition hover:text-primary">
              <Phone className="h-4 w-4" /> +91 93805 90305
            </a>
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-foreground/10 bg-card text-foreground transition duration-300 hover:border-primary hover:scale-105 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 text-[color:var(--rose-gold)]" />
              ) : (
                <Sun className="h-4 w-4 text-[color:var(--champagne)]" />
              )}
            </button>
            <a href="#contact" className="rounded-full bg-gradient-rose px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-105">
              Book Appointment
            </a>
          </div>
          <button className="md:hidden text-foreground" aria-label="menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-3xl glass p-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground">{l.label}</a>
              ))}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-foreground/10">
                <span className="text-sm text-foreground/80">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-2 text-xs font-medium text-foreground transition cursor-pointer"
                >
                  {theme === "light" ? (
                    <>
                      <Moon className="h-3.5 w-3.5 text-primary" /> Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="h-3.5 w-3.5 text-accent" /> Light Mode
                    </>
                  )}
                </button>
              </div>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-gradient-rose px-5 py-2 text-center text-primary-foreground">Book Appointment</a>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
