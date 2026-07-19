import type { Metadata } from "next";
import { AppraisalServiceList, PageShell, QuotePanel } from "../components";
import { licenses, propertyTypes } from "../site-data";

export const metadata: Metadata = {
  title: "Commercial Real Estate Appraisals",
  description:
    "Commercial real estate appraisal, appraisal review, litigation support, expert witness, property tax analysis, and consulting services led by Richard E. Cassinelli, MAI, AI-GRS.",
};

export default function AppraisalsPage() {
  return (
    <PageShell>
      <main>
        <section className="pageHero appraisalHero">
          <div className="shell narrowHero">
            <p className="eyebrow">Commercial real estate appraisal</p>
            <h1>Credible valuation support for high-stakes real estate decisions.</h1>
            <p>
              Value Added Assets LLC provides commercial appraisal and consulting services for lenders,
              attorneys, accountants, public agencies, owners, developers, and investors.
            </p>
            <a className="primaryBtn" href="/request-quote/">Request an Appraisal Quote</a>
          </div>
        </section>

        <section className="section shell twoCol">
          <div>
            <p className="eyebrow">Scope of work</p>
            <h2>Valuation reports, reviews, and advisory analysis built around the assignment.</h2>
            <p>
              Appraisals and consulting assignments support mortgage financing, acquisition and disposition,
              lease and rent arbitration, litigation support, condemnation, property tax analysis and appeal,
              and corporate planning.
            </p>
          </div>
          <AppraisalServiceList />
        </section>

        <section className="subtleBand">
          <div className="shell propertyGrid">
            <div>
              <p className="eyebrow">Property experience</p>
              <h2>Commercial, industrial, multifamily, resort, agricultural, and special-use assets.</h2>
            </div>
            <div className="pillGrid">
              {propertyTypes.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell licenseSection">
          <div>
            <p className="eyebrow">Credentials and licensing</p>
            <h2>MAI and AI-GRS designated, with Certified General Appraiser licenses in six states.</h2>
          </div>
          <div className="licenseGrid">
            {licenses.map(([state, number]) => (
              <div key={state}>
                <strong>{state}</strong>
                <span>{number}</span>
              </div>
            ))}
          </div>
        </section>

        <QuotePanel title="Start a commercial appraisal or review request." />
      </main>
    </PageShell>
  );
}
