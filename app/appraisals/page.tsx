import type { Metadata } from "next";
import { AppraisalServiceList, PageShell, QuotePanel } from "../components";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "../seo";
import { licenses, propertyTypes } from "../site-data";

export const metadata: Metadata = {
  title: "Commercial Real Estate Appraisals | MAI Appraiser",
  description:
    "Order commercial real estate appraisals, appraisal review, litigation support, expert witness, property tax analysis, and consulting from Richard E. Cassinelli, MAI, AI-GRS.",
  alternates: { canonical: "/appraisals/" },
  openGraph: {
    title: "Commercial Real Estate Appraisals | Value Added Assets",
    description:
      "Commercial valuation, appraisal review, litigation support, and property tax analysis for lenders, attorneys, owners, agencies, and investors.",
    url: "/appraisals/",
  },
};

const appraisalFaqs: Array<[string, string]> = [
  [
    "Who orders commercial appraisal services from Value Added Assets?",
    "Commercial lenders, credit unions, attorneys, CPAs, public agencies, developers, owners, investors, and family offices contact Value Added Assets for commercial appraisal, appraisal review, litigation support, and valuation consulting.",
  ],
  [
    "What property types can be reviewed?",
    "Richard E. Cassinelli has experience with office, retail, industrial, multifamily, hospitality, resort, agricultural, automotive, medical office, special-use, and residential subdivision assignments.",
  ],
  [
    "Where is Rich licensed as a Certified General Appraiser?",
    "Rich holds Certified General Appraiser licenses in Oregon, Washington, California, Idaho, Texas, and Utah.",
  ],
  [
    "How do I request a commercial appraisal quote?",
    "Use the request quote form, call 503-545-5217, or email valueaddedassets@gmail.com with the property address, property type, purpose, timing, and any lender, attorney, or agency requirements.",
  ],
];

export default function AppraisalsPage() {
  const schemas = [
    breadcrumbSchema([
      ["Home", "/"],
      ["Commercial Appraisals", "/appraisals/"],
    ]),
    serviceSchema({
      name: "Commercial Real Estate Appraisal",
      description:
        "Commercial appraisal reports, appraisal review, litigation support, expert witness services, property tax analysis, and valuation consulting led by Richard E. Cassinelli, MAI, AI-GRS.",
      path: "/appraisals/",
      serviceType: [
        "Commercial real estate appraisal",
        "Appraisal review",
        "Litigation support appraisal",
        "Property tax appeal appraisal",
        "Expert witness appraisal",
      ],
    }),
    faqSchema(appraisalFaqs),
  ];

  return (
    <PageShell>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
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

        <section className="subtleBand">
          <div className="shell faqSection">
            <div className="sectionTitle">
              <p className="eyebrow">Commercial appraisal questions</p>
              <h2>Clear answers for lenders, legal teams, owners, and advisors.</h2>
            </div>
            <div className="faqGrid">
              {appraisalFaqs.map(([question, answer]) => (
                <article key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <QuotePanel title="Start a commercial appraisal or review request." />
      </main>
    </PageShell>
  );
}
