import type { Metadata } from "next";
import { PageShell, QuotePanel } from "../components";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "../seo";
import { CostSegCalculator } from "./CostSegCalculator";

export const metadata: Metadata = {
  title: "Cost Segregation Services for Commercial Property",
  description:
    "Request a cost segregation opportunity review for commercial property owners, CPAs, investors, and advisors evaluating accelerated depreciation and potential tax savings.",
  alternates: { canonical: "/cost-segregation/" },
  openGraph: {
    title: "Cost Segregation Services | Value Added Assets",
    description:
      "Cost segregation opportunity review for owners, CPAs, investors, and advisors evaluating accelerated depreciation for commercial property.",
    url: "/cost-segregation/",
  },
};

const studySteps = [
  ["Screen", "Review property basis, placed-in-service timing, use, ownership, and tax-position questions."],
  ["Estimate", "Identify whether a formal study is likely to produce meaningful savings compared with study cost."],
  ["Coordinate", "Connect the owner and CPA with experienced cost segregation professionals for the formal work."],
  ["Implement", "Help keep the process organized so the final study can support the tax filing conversation."],
];

const costSegFaqs: Array<[string, string]> = [
  [
    "What is cost segregation?",
    "Cost segregation is a tax-planning process that reviews components of commercial or income-producing property and may identify assets eligible for shorter depreciation lives.",
  ],
  [
    "Who should consider a cost segregation review?",
    "Owners, investors, CPAs, and advisors should review cost segregation after a commercial purchase, renovation, tenant improvement project, new construction, or placed-in-service event.",
  ],
  [
    "Does Value Added Assets provide tax advice?",
    "Value Added Assets helps screen and coordinate cost segregation opportunities. Clients should make tax filing decisions with their CPA or tax advisor.",
  ],
  [
    "What information is useful for a cost segregation quote?",
    "Helpful details include property type, address, purchase price or construction cost, placed-in-service date, renovation history, ownership structure, and CPA contact information.",
  ],
];

export default function CostSegregationPage() {
  const schemas = [
    breadcrumbSchema([
      ["Home", "/"],
      ["Cost Segregation", "/cost-segregation/"],
    ]),
    serviceSchema({
      name: "Cost Segregation Opportunity Review",
      description:
        "Cost segregation screening and coordination for commercial property owners, CPAs, investors, and advisors evaluating accelerated depreciation opportunities.",
      path: "/cost-segregation/",
      serviceType: [
        "Cost segregation",
        "Cost segregation opportunity review",
        "Accelerated depreciation review",
        "Commercial property tax planning support",
      ],
    }),
    faqSchema(costSegFaqs),
  ];

  return (
    <PageShell>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <main>
        <section className="pageHero costHero">
          <div className="shell narrowHero">
            <p className="eyebrow">Cost segregation opportunity review</p>
            <h1>Your property may hold hidden depreciation value.</h1>
            <p>
              Cost segregation can reclassify qualifying building components into shorter depreciation
              lives, potentially accelerating deductions and improving near-term cash flow.
            </p>
            <a className="primaryBtn" href="/request-quote/">Request a Cost Seg Review</a>
          </div>
        </section>

        <section className="section shell twoCol">
          <div>
            <p className="eyebrow">For owners and CPAs</p>
            <h2>Turn a technical tax question into a clear yes-or-no next step.</h2>
          </div>
          <div className="richText">
            <p>
              A cost segregation study analyzes the components of commercial or income-producing property
              and may move certain assets from 27.5-year or 39-year depreciation into shorter 5-, 7-, or
              15-year categories.
            </p>
            <p>
              Value Added Assets helps screen the opportunity, gather the right facts, and coordinate with
              experienced cost segregation specialists and the client&apos;s CPA or tax advisor.
            </p>
          </div>
        </section>

        <CostSegCalculator />

        <section className="section shell processSection">
          <div className="sectionTitle">
            <p className="eyebrow">Process</p>
            <h2>Built to make the CPA conversation easier.</h2>
          </div>
          <div className="processGrid">
            {studySteps.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="darkBand">
          <div className="shell resultsGrid">
            <div>
              <p className="eyebrow">Good candidates</p>
              <h2>When cost segregation should be reviewed.</h2>
            </div>
            <article><strong>Recent purchase</strong><p>A commercial or income-producing property was recently acquired or placed in service.</p></article>
            <article><strong>Renovation</strong><p>Renovations, tenant improvements, or new construction created depreciable components.</p></article>
            <article><strong>CPA fit</strong><p>The owner has tax capacity or planning needs that make accelerated depreciation worth exploring.</p></article>
          </div>
        </section>

        <section className="section shell faqSection">
          <div className="sectionTitle">
            <p className="eyebrow">Cost segregation questions</p>
            <h2>Useful answers for owners, CPAs, investors, and advisors.</h2>
          </div>
          <div className="faqGrid">
            {costSegFaqs.map(([question, answer]) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <QuotePanel title="Request a cost segregation opportunity review." />
      </main>
    </PageShell>
  );
}
