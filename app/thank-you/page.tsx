import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components";
import { JsonLd, breadcrumbSchema } from "../seo";
import { contact } from "../site-data";

export const metadata: Metadata = {
  title: "Request Received",
  description:
    "Thank you for contacting Value Added Assets LLC. Rich will review your commercial appraisal or cost segregation request.",
  alternates: { canonical: "/thank-you/" },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const schemas = [
    breadcrumbSchema([
      ["Home", "/"],
      ["Request Quote", "/request-quote/"],
      ["Request Received", "/thank-you/"],
    ]),
  ];

  return (
    <PageShell>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <main>
        <section className="pageHero quoteHero">
          <div className="shell narrowHero">
            <p className="eyebrow">Request received</p>
            <h1>Thank you. Rich has been notified.</h1>
            <p>
              Value Added Assets has received your request. Rich will review the details and follow up
              directly about the right next step.
            </p>
            <div className="heroActions">
              <Link className="primaryBtn" href="/">Return Home</Link>
              <a className="secondaryBtn" href={contact.phoneHref}>{contact.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
