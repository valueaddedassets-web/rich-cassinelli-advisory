import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://valueaddedassets.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Value Added Assets LLC | Commercial Appraisals & Cost Segregation",
    template: "%s | Value Added Assets LLC",
  },
  description:
    "Value Added Assets LLC helps commercial lenders, CPAs, law firms, owners, and investors request commercial appraisals, appraisal review, litigation support, and cost segregation opportunity reviews.",
  keywords: [
    "commercial real estate appraisal",
    "commercial appraiser Portland",
    "cost segregation study",
    "appraisal review",
    "MAI appraiser",
    "AI-GRS appraiser",
    "litigation support appraisal",
    "property tax appeal appraisal",
  ],
  icons: { icon: "/assets/value-added-assets-logo.png", shortcut: "/assets/value-added-assets-logo.png" },
  openGraph: {
    title: "Value Added Assets LLC",
    description: "Commercial appraisal and cost segregation quote intake for lenders, CPAs, law firms, owners, and investors.",
    url: siteUrl,
    siteName: "Value Added Assets LLC",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Value Added Assets LLC",
    url: siteUrl,
    telephone: "+1-503-545-5217",
    email: "valueaddedassets@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Richard E. Cassinelli",
      honorificSuffix: "MAI, AI-GRS",
    },
    areaServed: ["Oregon", "Washington", "Idaho", "California", "Texas", "Utah"],
    serviceType: [
      "Commercial real estate appraisal",
      "Cost segregation opportunity review",
      "Appraisal review",
      "Litigation support",
      "Property tax analysis",
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
