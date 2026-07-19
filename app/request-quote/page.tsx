import type { Metadata } from "next";
import { LeadForm, PageShell } from "../components";
import { JsonLd, breadcrumbSchema } from "../seo";
import { contact } from "../site-data";

export const metadata: Metadata = {
  title: "Request a Commercial Appraisal or Cost Segregation Quote",
  description:
    "Request a commercial appraisal quote, appraisal review, litigation support assignment, property tax analysis, or cost segregation opportunity review from Value Added Assets LLC.",
  alternates: { canonical: "/request-quote/" },
  openGraph: {
    title: "Request a Quote | Value Added Assets",
    description:
      "Start a commercial appraisal, appraisal review, litigation support, or cost segregation request with Richard E. Cassinelli, MAI, AI-GRS.",
    url: "/request-quote/",
  },
};

export default function RequestQuotePage() {
  const schemas = [
    breadcrumbSchema([
      ["Home", "/"],
      ["Request Quote", "/request-quote/"],
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      url: "https://valueaddedassets.com/request-quote/",
      name: "Request a Commercial Appraisal or Cost Segregation Quote",
      description:
        "Quote intake for commercial appraisal, appraisal review, litigation support, property tax analysis, and cost segregation opportunity review.",
      about: { "@id": "https://valueaddedassets.com/#business" },
    },
  ];

  return (
    <PageShell>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <main>
        <section className="pageHero quoteHero">
          <div className="shell narrowHero">
            <p className="eyebrow">Quote intake</p>
            <h1>Tell Rich what you need reviewed.</h1>
            <p>
              Use the secure intake form below for commercial appraisal requests, cost segregation screening,
              litigation support, appraisal review, property tax analysis, or general valuation consulting.
            </p>
          </div>
        </section>

        <section className="intakePage">
          <div className="shell intakeGrid">
            <div>
              <p className="eyebrow">Best next step</p>
              <h2>Submit the facts once. Get a focused follow-up.</h2>
              <p>
                Helpful details include property address, property type, ownership interest, purpose of the
                assignment, timing, lender or attorney requirements, purchase price or cost basis, and any
                documents already available.
              </p>
              <div className="contactStack">
                <a href={contact.phoneHref}>{contact.phone}</a>
                <a href={contact.emailHref}>{contact.email}</a>
              </div>
            </div>
            <div className="formFrame">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
