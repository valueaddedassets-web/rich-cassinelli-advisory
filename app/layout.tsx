import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "Rich Cassinelli Advisory | Cost Segregation & Tariff Recovery",
  description: "Connect with experienced cost segregation and tariff recovery professionals through Rich Cassinelli, a senior commercial real estate consultant.",
  icons: { icon: "/cassinelli-mark.png", shortcut: "/cassinelli-mark.png" },
  openGraph: { title: "Find the value already inside your business", description: "Cost segregation and tariff recovery connections, coordinated by Rich Cassinelli.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${cormorant.variable}`}>{children}</body></html>;
}
