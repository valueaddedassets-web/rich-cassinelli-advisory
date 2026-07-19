import type { Metadata } from "next";
import { PageShell } from "../components";
import { contact } from "../site-data";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a commercial appraisal quote, appraisal review, litigation support, or cost segregation opportunity review from Value Added Assets LLC.",
};

export default function RequestQuotePage() {
  return (
    <PageShell>
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
              <iframe src={contact.formEmbed} title="Value Added Assets request intake" loading="lazy">
                Loading…
              </iframe>
              <p>
                If the form does not load, <a href={contact.formUrl} target="_blank" rel="noreferrer">open the intake form here</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
