import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { CustomDesign } from "@/components/site/CustomDesign";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Collections />
      <CustomDesign />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
