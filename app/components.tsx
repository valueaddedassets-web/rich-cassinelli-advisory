import Link from "next/link";
import { appraisalServices, clientGroups, contact, navItems } from "./site-data";

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Value Added Assets home">
        <img src="/assets/vaa-mark.svg" alt="" />
        <span>
          <strong>Value Added Assets</strong>
          <small>Appraisal · Cost Segregation · Advisory</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="headerPhone" href={contact.phoneHref}>
        {contact.phone}
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <img className="footerLogo" src="/assets/value-added-assets-logo.svg" alt="Value Added Assets" />
          <p>
            Commercial real estate appraisal, appraisal review, litigation support, and cost segregation
            opportunity review for serious real estate decisions.
          </p>
        </div>
        <div>
          <h2>Services</h2>
          <Link href="/appraisals/">Commercial appraisals</Link>
          <Link href="/cost-segregation/">Cost segregation</Link>
          <Link href="/request-quote/">Request a quote</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <span>Portland, Oregon</span>
        </div>
      </div>
      <div className="shell legal">
        <span>© 2026 Value Added Assets LLC. All rights reserved.</span>
        <span>Information is educational only and is not tax, legal, engineering, or investment advice.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function QuotePanel({ title = "Request a quote or confidential review" }: { title?: string }) {
  return (
    <section className="quoteBand" id="quote">
      <div className="shell quoteGrid">
        <div>
          <p className="eyebrow">Start here</p>
          <h2>{title}</h2>
          <p>
            Share the property, purpose, timing, and service needed. Rich will review the request and follow
            up directly with the right next step.
          </p>
          <div className="contactStack">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.emailHref}>{contact.email}</a>
          </div>
        </div>
        <div className="miniForm">
          <form action={contact.formUrl} target="_blank">
            <label>
              Service interest
              <select name="service" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Commercial appraisal</option>
                <option>Appraisal review</option>
                <option>Litigation support</option>
                <option>Cost segregation</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              Property or company
              <input name="property" placeholder="Property address, market, or company name" />
            </label>
            <label>
              Timing
              <input name="timing" placeholder="Target due date or urgency" />
            </label>
            <button type="submit">Open Secure Intake Form</button>
            <p>
              The intake opens in Google Forms so the request can be captured cleanly. You can also email
              Rich directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function CredibilityStrip() {
  return (
    <section className="credStrip" aria-label="Client groups">
      <div className="shell">
        {clientGroups.map((group) => (
          <span key={group}>{group}</span>
        ))}
      </div>
    </section>
  );
}

export function AppraisalServiceList() {
  return (
    <div className="checkGrid">
      {appraisalServices.map((service) => (
        <span key={service}>{service}</span>
      ))}
    </div>
  );
}
