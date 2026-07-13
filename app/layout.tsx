import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard E. Cassinelli | Value Added Assets LLC",
  description: "Connect with experienced cost segregation and tariff recovery professionals through Richard E. Cassinelli and Value Added Assets LLC.",
  icons: { icon: "/cassinelli-mark.png", shortcut: "/cassinelli-mark.png" },
  openGraph: { title: "Find the value already inside your business", description: "Cost segregation and tariff recovery connections through Richard E. Cassinelli, part of Value Added Assets LLC.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
