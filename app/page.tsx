import Link from "next/link";
import { AppraisalServiceList, CredibilityStrip, PageShell, QuotePanel } from "./components";
import { clientGroups, lenderClients, nonLenderClients } from "./site-data";

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="homeHero">
          <div className="heroTexture" />
          <div className="shell heroGrid">
            <div>
              <p className="eyebrow">Commercial appraisal and cost segregation advisory</p>
              <h1>Find the value, defend the number, and move the deal forward.</h1>
              <p className="lead">
                Value Added Assets LLC helps lenders, CPAs, law firms, owners, and investors secure
                credible commercial valuation services and evaluate cost segregation opportunities.
              </p>
              <div className="heroActions">
                <Link className="primaryBtn" href="/request-quote/">Request a Quote</Link>
                <Link className="secondaryBtn" href="/appraisals/">Commercial Appraisals</Link>
                <Link className="secondaryBtn" href="/cost-segregation/">Cost Segregation</Link>
              </div>
            </div>
            <aside className="heroProof">
              <img src="/assets/vaa-mark.svg" alt="" />
              <div>
                <strong>Since 1987</strong>
                <span>Commercial appraisal and consulting experience</span>
              </div>
              <div>
                <strong>MAI · AI-GRS</strong>
                <span>Senior Appraisal Institute designations</span>
              </div>
              <div>
                <strong>6 states</strong>
                <span>Certified General Appraiser license footprint</span>
              </div>
            </aside>
          </div>
        </section>

        <CredibilityStrip />

        <section className="section shell splitIntro">
          <div>
            <p className="eyebrow">Two high-value client paths</p>
            <h2>Built for decisions where accuracy, timing, and documentation matter.</h2>
          </div>
          <p>
            The site is designed for people who need a credible expert now: a lender ordering a commercial
            appraisal, a CPA screening a cost segregation opportunity, or counsel needing defensible real
            estate analysis.
          </p>
        </section>

        <section className="servicePathGrid shell">
          <Link className="pathCard appraisal" href="/appraisals/">
            <span>01</span>
            <p>Commercial appraisal</p>
            <h2>Independent valuation for lending, legal, tax, ownership, and public agency decisions.</h2>
            <em>Explore appraisal services</em>
          </Link>
          <Link className="pathCard costseg" href="/cost-segregation/">
            <span>02</span>
            <p>Cost segregation</p>
            <h2>Evaluate whether your commercial property may hold accelerated depreciation value.</h2>
            <em>Explore cost segregation</em>
          </Link>
        </section>

        <section className="section shell proofGrid">
          <div className="proofCopy">
            <p className="eyebrow">Why Value Added Assets</p>
            <h2>Senior judgment at the front of the conversation.</h2>
            <p>
              Richard E. Cassinelli, MAI, AI-GRS founded Value Added Assets LLC after decades as a
              principal owner and commercial appraiser. Clients get a practical, responsive point of contact
              who understands lenders, attorneys, CPAs, owners, and public agencies.
            </p>
            <AppraisalServiceList />
          </div>
          <div className="market-map accurate-map" aria-label="Accurate western service and license map">
            <img className="service-map" src="/assets/service-map.svg" alt="Accurate U.S. state map highlighting Washington, Oregon, California, Idaho, Utah, and Texas." />
            <div className="map-legend">
              <strong>Highlighted licensing footprint</strong>
              <span>Oregon, Washington, California, Idaho, Utah, and Texas</span>
            </div>
          </div>
        </section>

        <section className="darkBand">
          <div className="shell resultsGrid">
            <div>
              <p className="eyebrow">What clients are trying to solve</p>
              <h2>Three common reasons people contact Rich.</h2>
            </div>
            <article>
              <strong>Order</strong>
              <p>A lender, attorney, agency, owner, or investor needs a commercial appraisal or review.</p>
            </article>
            <article>
              <strong>Defend</strong>
              <p>A value conclusion needs expert support for litigation, arbitration, tax, or condemnation.</p>
            </article>
            <article>
              <strong>Recover</strong>
              <p>A property owner or CPA wants to evaluate accelerated depreciation through cost segregation.</p>
            </article>
          </div>
        </section>

        <section className="section shell clientSection">
          <div className="sectionTitle">
            <p className="eyebrow">Audience fit</p>
            <h2>Designed for sophisticated real estate and advisory clients.</h2>
          </div>
          <div className="audienceGrid">
            {clientGroups.map((group) => (
              <span key={group}>{group}</span>
            ))}
          </div>
          <div className="clientLists">
            <div>
              <h3>Representative lender experience</h3>
              <p>{lenderClients.join(" · ")}</p>
            </div>
            <div>
              <h3>Representative non-lender experience</h3>
              <p>{nonLenderClients.join(" · ")}</p>
            </div>
          </div>
        </section>

        <QuotePanel title="Request a commercial appraisal, cost segregation review, or quote." />
      </main>
    </PageShell>
  );
}
