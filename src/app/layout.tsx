import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kalyani Jewellery — Bespoke Bridal, Gold & Diamond Jewellery in Bengaluru",
  description: "Handcrafted bridal, gold, diamond, silver, oxidised and custom engraved jewellery in Bengaluru. BIS Hallmarked. Certified diamonds. Book a private atelier appointment.",
  authors: [{ name: "Kalyani Jewellery" }],
  openGraph: {
    title: "Kalyani Jewellery — Bengaluru's House of Heirloom Jewellery",
    description: "Royal Indian-modern bridal, gold and bespoke jewellery, handcrafted since generations.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        {children}
      </body>
    </html>
  );
}
