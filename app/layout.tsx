import type { Metadata } from "next";
import "./globals.css";
import { JsonLd, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Value Added Assets LLC | Commercial Appraisals & Cost Segregation",
    template: "%s | Value Added Assets LLC",
  },
  description:
    "Value Added Assets LLC helps commercial lenders, CPAs, law firms, owners, and investors request commercial appraisals, appraisal review, litigation support, and cost segregation opportunity reviews.",
  applicationName: "Value Added Assets",
  authors: [{ name: "Richard E. Cassinelli, MAI, AI-GRS" }],
  creator: "Value Added Assets LLC",
  publisher: "Value Added Assets LLC",
  category: "Commercial real estate appraisal and cost segregation services",
  keywords: [
    "commercial real estate appraisal",
    "commercial appraiser Portland",
    "cost segregation study",
    "appraisal review",
    "MAI appraiser",
    "AI-GRS appraiser",
    "litigation support appraisal",
    "property tax appeal appraisal",
    "commercial appraisal Oregon",
    "commercial appraisal Washington",
    "commercial appraisal California",
    "commercial appraisal Idaho",
    "commercial appraisal Texas",
    "commercial appraisal Utah",
    "cost segregation Portland",
    "cost segregation for commercial property",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/assets/value-added-assets-logo.png", shortcut: "/assets/value-added-assets-logo.png" },
  openGraph: {
    title: "Value Added Assets LLC",
    description: "Commercial appraisal and cost segregation quote intake for lenders, CPAs, law firms, owners, and investors.",
    url: siteUrl,
    siteName: "Value Added Assets LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/value-added-assets-logo.png",
        width: 378,
        height: 150,
        alt: "Value Added Assets logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Added Assets LLC",
    description: "Commercial appraisal and cost segregation services led by Richard E. Cassinelli, MAI, AI-GRS.",
    images: ["/assets/value-added-assets-logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${siteUrl}/#business`,
        name: "Value Added Assets LLC",
        legalName: "Value Added Assets LLC",
        url: siteUrl,
        logo: `${siteUrl}/assets/value-added-assets-logo.png`,
        image: `${siteUrl}/assets/value-added-assets-logo.png`,
        slogan: "Maximizing value. Reducing taxes.",
        priceRange: "Quote-based",
        telephone: "+1-503-545-5217",
        email: "valueaddedassets@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Portland",
          addressRegion: "OR",
          addressCountry: "US",
        },
        founder: { "@id": `${siteUrl}/#richard-cassinelli` },
        areaServed: ["Oregon", "Washington", "California", "Idaho", "Utah", "Texas"],
        knowsAbout: [
          "Commercial real estate appraisal",
          "Cost segregation",
          "Appraisal review",
          "Litigation support",
          "Expert witness appraisal",
          "Property tax appeal appraisal",
          "Commercial real estate valuation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Commercial valuation and cost segregation services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial real estate appraisal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appraisal review" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Litigation support and expert witness appraisal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cost segregation opportunity review" } },
          ],
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-503-545-5217",
          email: "valueaddedassets@gmail.com",
          contactType: "sales and quote requests",
          areaServed: "US",
          availableLanguage: "en",
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#richard-cassinelli`,
        name: "Richard E. Cassinelli",
        honorificSuffix: "MAI, AI-GRS",
        jobTitle: "Principal Owner and Commercial Real Estate Appraiser",
        worksFor: { "@id": `${siteUrl}/#business` },
        alumniOf: "University of Oregon",
        knowsAbout: [
          "Commercial appraisal",
          "Commercial appraisal review",
          "Real estate consulting",
          "Litigation support",
          "Cost segregation opportunity review",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Value Added Assets",
        url: siteUrl,
        publisher: { "@id": `${siteUrl}/#business` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <JsonLd data={schema} />
      </body>
    </html>
  );
}
