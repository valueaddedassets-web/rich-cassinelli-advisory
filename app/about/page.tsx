import type { Metadata } from "next";
import { PageShell, QuotePanel } from "../components";
import { JsonLd, breadcrumbSchema } from "../seo";
import { licenses } from "../site-data";

export const metadata: Metadata = {
  title: "About Richard E. Cassinelli, MAI, AI-GRS",
  description:
    "Learn about Richard E. Cassinelli, MAI, AI-GRS, founder of Value Added Assets LLC and commercial real estate appraiser and consultant since 1987.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Richard E. Cassinelli, MAI, AI-GRS",
    description:
      "Principal Owner of Value Added Assets LLC, commercial real estate appraiser and consultant since 1987.",
    url: "/about/",
  },
};

const experience = [
  ["2024 to Present", "Principal Owner, Value Added Assets LLC"],
  ["2013 to 2024", "Principal Owner, Cassinelli Valuation LLC"],
  ["1994 to 2013", "Principal Owner, Cassinelli Jackson LLC"],
  ["1987 to 1994", "Commercial Appraiser, Palmer Groth & Pietka, Inc."],
];

const courses = [
  "2024-25 USPAP Update Course",
  "Discounted Cash Flow Model",
  "Complex Properties",
  "Artificial Intelligence, Blockchain & the Metaverse",
  "Appraising Auto Dealerships",
  "Hotel Valuation",
  "Data Verification Methods",
  "Business Practice & Ethics",
  "Subdivision Valuation",
  "Appraisal of Medical Office Buildings",
];

export default function AboutPage() {
  const schemas = [
    breadcrumbSchema([
      ["Home", "/"],
      ["About Rich", "/about/"],
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: "https://valueaddedassets.com/about/",
      name: "About Richard E. Cassinelli, MAI, AI-GRS",
      about: { "@id": "https://valueaddedassets.com/#richard-cassinelli" },
      mainEntity: { "@id": "https://valueaddedassets.com/#richard-cassinelli" },
    },
  ];

  return (
    <PageShell>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <main>
        <section className="pageHero aboutHero">
          <div className="shell narrowHero">
            <p className="eyebrow">About Value Added Assets</p>
            <h1>Decades of real estate judgment, delivered through a personal senior relationship.</h1>
            <p>
              Richard E. Cassinelli, MAI, AI-GRS founded Value Added Assets LLC in 2024 after a long
              principal-level career in commercial appraisal and consulting.
            </p>
          </div>
        </section>

        <section className="section shell aboutGrid">
          <div className="portraitCard">
            <img src="/assets/value-added-assets-logo.png" alt="Value Added Assets" />
            <strong>Richard E. Cassinelli</strong>
            <span>MAI · AI-GRS</span>
          </div>
          <div>
            <p className="eyebrow">Professional profile</p>
            <h2>Commercial appraiser and consultant since 1987.</h2>
            <p>
              Richard specializes in a wide variety of commercial properties and has provided court
              testimony as an expert witness. His work has supported mortgage financing, property purchase
              and disposition, lease and rent arbitration, litigation support, condemnation, property tax
              analysis and appeal services, and corporate planning.
            </p>
            <p>
              He holds a Bachelor of Science in Business Administration from the University of Oregon and
              senior designations from the Appraisal Institute.
            </p>
          </div>
        </section>

        <section className="subtleBand">
          <div className="shell resumeGrid">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Principal-level leadership across multiple appraisal firms.</h2>
            </div>
            <div className="timeline">
              {experience.map(([date, role]) => (
                <div key={role}>
                  <span>{date}</span>
                  <strong>{role}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell twoCol">
          <div>
            <p className="eyebrow">Licenses</p>
            <h2>Certified General Appraiser licensing in Oregon, Washington, California, Idaho, Texas, and Utah.</h2>
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

        <section className="section shell courseSection">
          <div className="sectionTitle">
            <p className="eyebrow">Continuing education</p>
            <h2>Current appraisal training across valuation, ethics, technology, and property-specific analysis.</h2>
          </div>
          <div className="pillGrid">
            {courses.map((course) => (
              <span key={course}>{course}</span>
            ))}
          </div>
        </section>

        <QuotePanel title="Contact Rich about an assignment or opportunity." />
      </main>
    </PageShell>
  );
}
