"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    interest: "",
    message: ""
  });

  const handleInputChange = (field: string, val: string) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-primary">— Visit Our Atelier</div>
          <h2 className="mt-4 font-display text-[2.45rem] leading-none tracking-tight sm:text-5xl md:text-7xl text-foreground">
            Begin a <em className="italic text-gradient-rose">private</em> consultation.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground">
            Reserve a one-on-one viewing in our Bengaluru flagship, or speak with a designer over WhatsApp.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-3 rounded-3xl border border-primary/20 bg-card p-5 sm:p-8 shadow-luxe flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-rose text-ivory text-xl shadow-glow">✦</span>
                  <div>
                    <h3 className="font-display text-2xl text-foreground">VIP Invitation Locked</h3>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary">Kalyani Atelier · Bengaluru</p>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4 border-y border-foreground/10 py-6 text-xs sm:text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Guest of Honour</span>
                    <span className="font-medium text-foreground text-right">{formData.name || "Valued Patron"}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Preferred Date</span>
                    <span className="font-medium text-foreground text-right">
                      {formData.date ? new Date(formData.date).toLocaleDateString("en-IN", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }) : "Flexible / To arrange"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Bespoke Interest</span>
                    <span className="font-medium text-foreground text-right">{formData.interest || "Fine Jewellery"}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Atelier Status</span>
                    <span className="font-medium text-primary text-right">Reservation Pending ✦</span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  We have tentatively blocked this space for you in our private calendar. A host from the Bengaluru showroom will contact you shortly via phone or message to coordinate details and confirm your visit.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`https://wa.me/919380590305?text=Hello%20Kalyani%20Jewellery!%20My%20name%20is%20${encodeURIComponent(formData.name || "")},%20and%20I%20just%20submitted%20an%20appointment%20request%20for%20${encodeURIComponent(formData.interest || "Fine Jewellery")}%20on%20${encodeURIComponent(formData.date || "")}.%20I'd%20love%20to%20fast-track%20and%20confirm%20my%20visit.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-rose px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.01]"
                >
                  <MessageCircle className="h-4 w-4" /> Fast-Track Booking via WhatsApp ⚡
                </a>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="w-full text-center text-xs text-muted-foreground hover:text-foreground underline transition cursor-pointer bg-transparent border-none"
                >
                  Edit Appointment Details
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="lg:col-span-3 rounded-3xl border border-foreground/8 bg-card p-5 sm:p-8 shadow-luxe"
            >
              <h3 className="font-display text-2xl text-foreground">Book Your Appointment</h3>
              <p className="mt-1 text-sm text-muted-foreground">We'll confirm within 2 hours.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  className="sm:col-span-2"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <Field
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
                <Field
                  label="Interest"
                  name="interest"
                  placeholder="Bridal · Diamond · Custom…"
                  value={formData.interest}
                  onChange={(e) => handleInputChange("interest", e.target.value)}
                />
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="mt-2 w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                    placeholder="Tell us about the piece you're imagining…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-rose px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.01] cursor-pointer"
              >
                Reserve My Visit
              </button>
            </motion.form>
          )}

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="rounded-3xl bg-noir p-5 sm:p-7 text-ivory shadow-luxe" style={{ background: "var(--noir)", color: "var(--ivory)" }}>
              <div className="font-display text-2xl">Kalyani Jewellery</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-[color:var(--champagne)]">Bengaluru Flagship</div>
              <div className="mt-6 space-y-4 text-sm">
                <Info icon={MapPin} text="Bengaluru, Karnataka — India" />
                <Info icon={Clock} text="Mon–Sat · 10:30 AM – 8:30 PM" />
                <Info icon={Phone} text={<span>Phone Shop: <a href="tel:+919380590305" className="hover:text-[color:var(--champagne)]">+91 93805 90305</a></span>} />
                <Info icon={Phone} text={<span>Personal (WhatsApp only): <a href="https://wa.me/916362002980?text=Hello!%20I'd%20like%20to%20query%20about%20a%20custom%20bespoke%20jewellery%20design%20with%20your%20atelier." target="_blank" rel="noreferrer" className="hover:text-[color:var(--champagne)]">+91 63620 02980</a></span>} />
                <Info icon={Mail} text={<a href="mailto:hello@kalyanijewellery.in" className="hover:text-[color:var(--champagne)]">hello@kalyanijewellery.in</a>} />
              </div>
              <div className="mt-7 flex flex-col gap-2">
                <a href="https://wa.me/919380590305?text=Hello%20Kalyani%20Jewellery%20Shop%20Atelier!%20I%20am%20visiting%20your%20website%20and%20would%20love%20to%20learn%20more%20about%20your%20bridal%20and%20luxury%20jewellery%20collections." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:scale-[1.02]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Shop — 9380590305
                </a>
                <a href="https://wa.me/916362002980?text=Hello!%20I'd%20like%20to%20query%20about%20a%20custom%20bespoke%20jewellery%20design%20with%20your%20atelier." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-5 py-3 text-sm font-medium text-white shadow-soft transition hover:scale-[1.02]">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Personal (Msg Only)
                </a>
                <a href="tel:+919380590305" className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/20 px-5 py-3 text-sm text-ivory transition hover:border-[color:var(--champagne)] hover:scale-[1.02]">
                  <Phone className="h-4 w-4" /> Call the Atelier
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-foreground/10 shadow-soft">
              <iframe
                title="Kalyani Jewellery Location"
                src="https://www.google.com/maps?q=13.008011,77.612961&hl=en&z=15&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary" />
    </div>
  );
}

function Info({ icon: Icon, text }: { icon: React.ComponentType<{ className?: string }>; text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ivory/10"><Icon className="h-4 w-4 text-[color:var(--champagne)]" /></span>
      <span>{text}</span>
    </div>
  );
}
