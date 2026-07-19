export const siteUrl = "https://valueaddedassets.com";

export const serviceAreas = ["Oregon", "Washington", "California", "Idaho", "Utah", "Texas"];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function breadcrumbSchema(items: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, item], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(item),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string | string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: { "@id": `${siteUrl}/#business` },
    areaServed: serviceAreas.map((state) => ({ "@type": "State", name: state })),
    url: absoluteUrl(path),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Quote-based professional service pricing.",
      },
      url: absoluteUrl("/request-quote/"),
    },
  };
}

export function faqSchema(items: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: {
        "@type": "Answer",
        text,
      },
    })),
  };
}
