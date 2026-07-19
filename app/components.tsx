import Link from "next/link";
import { appraisalServices, clientGroups, contact, navItems } from "./site-data";

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Value Added Assets home">
        <img src="/assets/value-added-assets-logo.png" alt="Value Added Assets" />
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
          <img className="footerLogo" src="/assets/value-added-assets-logo.png" alt="Value Added Assets" />
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

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form action={contact.formUrl} method="POST">
      <input type="hidden" name="_subject" value="New Value Added Assets quote request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={contact.formReturnUrl} />
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for contacting Value Added Assets. Rich has received your request and will review the details."
      />
      <input className="honeyField" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      <label>
        Service interest
        <select name="Service interest" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option>Commercial appraisal</option>
          <option>Appraisal review</option>
          <option>Litigation support</option>
          <option>Property tax analysis</option>
          <option>Cost segregation</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <div className="formRow">
        <label>
          Name
          <input name="Name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@company.com" required />
        </label>
      </div>
      <div className="formRow">
        <label>
          Phone
          <input name="Phone" type="tel" placeholder="Best callback number" />
        </label>
        <label>
          Timing
          <input name="Timing" placeholder="Target due date or urgency" />
        </label>
      </div>
      <label>
        Property or company
        <input name="Property or company" placeholder="Property address, market, or company name" />
      </label>
      {!compact && (
        <label>
          Request details
          <textarea
            name="Request details"
            rows={5}
            placeholder="Purpose of assignment, property type, lender or attorney requirements, cost basis, or other helpful details"
          />
        </label>
      )}
      <button type="submit">Send Request to Rich</button>
      <p>
        Submissions are emailed to Value Added Assets. You can also contact Rich directly at{" "}
        <a href={contact.emailHref}>{contact.email}</a>.
      </p>
    </form>
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
          <LeadForm compact />
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
