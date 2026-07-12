"use client";

import { FormEvent, useMemo, useState } from "react";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

const insights = [
  {
    tag: "Cost segregation",
    date: "February 2026",
    title: "IRS guidance confirms the renewed power of 100% bonus depreciation",
    copy: "New interim guidance addresses the permanent additional first-year depreciation deduction for eligible property acquired after January 19, 2025.",
    href: "https://www.irs.gov/newsroom/treasury-irs-issue-guidance-on-the-additional-first-year-depreciation-deduction-amended-as-part-of-the-one-big-beautiful-bill",
    source: "IRS",
  },
  {
    tag: "Cost segregation",
    date: "February 2025",
    title: "The IRS updates its Cost Segregation Audit Technique Guide",
    copy: "Publication 5653 gives taxpayers and practitioners a current framework for preparing and evaluating defensible engineering-based studies.",
    href: "https://www.irs.gov/pub/irs-pdf/p5653.pdf",
    source: "IRS Publication 5653",
  },
  {
    tag: "Tariff recovery",
    date: "May 2026",
    title: "Tariff refunds begin reaching eligible importers",
    copy: "Businesses have started receiving refunds while the legal and administrative process continues to evolve. Eligibility and procedure require careful review.",
    href: "https://apnews.com/article/7209128eeee29c565c4ea5a6892f73c6",
    source: "Associated Press",
  },
];

export default function Home() {
  const [propertyValue, setPropertyValue] = useState(2500000);
  const [landValue, setLandValue] = useState(500000);
  const [taxRate, setTaxRate] = useState(32);
  const [reclassRate, setReclassRate] = useState(25);

  const estimate = useMemo(() => {
    const depreciable = Math.max(0, propertyValue - landValue);
    const accelerated = depreciable * (reclassRate / 100);
    const potential = accelerated * (taxRate / 100);
    return { depreciable, accelerated, potential };
  }, [propertyValue, landValue, taxRate, reclassRate]);

  function submitIntake(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Consultation request — ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nOpportunity: ${data.get("opportunity")}\nEstimated value / duties: ${data.get("value")}\n\nNotes:\n${data.get("notes")}`,
    );
    window.location.href = `mailto:rich@cassval.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <div className="topbar">Independent advisory · Nationwide specialist network <a href="tel:+15035455217">(503) 545-5217</a></div>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Rich Cassinelli Advisory home">
          <span className="brandMark"><img src="/cassinelli-mark.png" alt="" /></span>
          <span><strong>RICH CASSINELLI</strong><small>ADVISORY</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#results">The opportunity</a><a href="#insights">Insights</a><a href="#about">Why Rich</a>
        </nav>
        <a className="button small" href="#consultation">Request a review <span>→</span></a>
      </header>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Find the value already inside your business</p>
            <h1>Complex recovery opportunities. <em>The right experts.</em></h1>
            <p className="lead">Rich connects property owners and importers with experienced cost segregation and tariff recovery professionals—then stays engaged to help move the opportunity forward.</p>
            <div className="heroActions"><a className="button" href="#consultation">Explore your opportunity <span>→</span></a><a className="textLink" href="#video"><span className="play">▶</span> Watch the 3-minute briefing</a></div>
            <div className="trustRow"><span>Engineering-led studies</span><span>Experienced recovery professionals</span><span>Confidential first review</span></div>
          </div>
          <div className="opportunityCard">
            <div className="cardLabel">Illustrative opportunity</div>
            <p>Commercial property</p><strong>$2.5M</strong>
            <div className="meter"><i /></div>
            <div className="cardResult"><span>Estimated first-year tax effect*</span><b>$160K</b></div>
            <small>*Illustration only. Actual results depend on facts, tax position, eligibility, and specialist analysis.</small>
            <div className="signal"><i /> A focused review can reveal overlooked cash-flow opportunities.</div>
          </div>
        </div>
      </section>

      <section className="credibility"><div className="shell"><p>A senior point of connection for</p><div><span>COMMERCIAL OWNERS</span><span>REAL ESTATE INVESTORS</span><span>CPAs & ADVISORS</span><span>U.S. IMPORTERS</span></div></div></section>

      <section className="section shell" id="services">
        <div className="sectionIntro"><p className="eyebrow">Two paths to recovered value</p><h2>Turn technical complexity into a clear next move.</h2><p>Rich is your first call and ongoing consultant—identifying the right questions, connecting you with qualified specialists, and helping keep the process coordinated.</p></div>
        <div className="serviceGrid">
          <article className="serviceCard navy"><div className="number">01</div><p className="label">PROPERTY TAX STRATEGY</p><h3>Cost segregation</h3><p>An engineering-based study can identify building components eligible for shorter depreciation lives, potentially accelerating deductions and improving near-term cash flow.</p><ul><li>New acquisitions and construction</li><li>Renovations and existing buildings</li><li>Look-back studies and Form 3115 support</li></ul><a href="#calculator">Model potential savings <span>↗</span></a></article>
          <article className="serviceCard gold"><div className="number">02</div><p className="label">CUSTOMS DUTY RECOVERY</p><h3>Tariff refunds</h3><p>A review of import entries and paid duties may uncover refund pathways. Rich connects importers with professionals who understand eligibility, records, filing routes, and timing.</p><ul><li>Previously paid tariff review</li><li>Entry and documentation assessment</li><li>Connection to recovery specialists</li></ul><a href="#consultation">Request an eligibility review <span>↗</span></a></article>
        </div>
      </section>

      <section className="darkSection" id="results"><div className="shell">
        <div className="sectionIntro inverse"><p className="eyebrow">Why timing matters</p><h2>Recovery can change the economics of an investment.</h2></div>
        <div className="statGrid"><div><strong>100%</strong><span>bonus depreciation may apply to eligible property acquired after Jan. 19, 2025¹</span></div><div><strong>5–15 yr.</strong><span>typical recovery periods for certain components reclassified from 27.5 or 39 years</span></div><div><strong>Cash now</strong><span>accelerated deductions or recovered duties can strengthen near-term liquidity</span></div></div>
        <p className="sourceNote">¹ Subject to eligibility and current law. Consult your tax advisor. Rich does not provide tax, legal, engineering, or customs brokerage services.</p>
      </div></section>

      <section className="calculator section" id="calculator"><div className="shell calcGrid">
        <div><p className="eyebrow">Interactive estimate</p><h2>See what accelerated depreciation could mean.</h2><p className="calcLead">Adjust the assumptions for a directional illustration. A specialist study and your tax advisor determine actual results.</p>
          <div className="fields"><label>Property value<input type="number" value={propertyValue} onChange={e => setPropertyValue(Number(e.target.value))} /></label><label>Land value<input type="number" value={landValue} onChange={e => setLandValue(Number(e.target.value))} /></label><label>Estimated reclassification<select value={reclassRate} onChange={e => setReclassRate(Number(e.target.value))}><option value="15">15%</option><option value="20">20%</option><option value="25">25%</option><option value="30">30%</option></select></label><label>Marginal tax rate<input type="number" min="0" max="60" value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} /></label></div>
        </div>
        <div className="resultPanel"><p>Illustrative tax impact</p><strong>{money(estimate.potential)}</strong><div className="resultLine"><span>Depreciable basis</span><b>{money(estimate.depreciable)}</b></div><div className="resultLine"><span>Potential accelerated basis</span><b>{money(estimate.accelerated)}</b></div><div className="resultLine"><span>Assumed tax rate</span><b>{taxRate}%</b></div><a className="button" href="#consultation">Review this scenario <span>→</span></a><small>This is a simplified educational estimate, not tax advice or a guarantee of benefit.</small></div>
      </div></section>

      <section className="videoSection section" id="video"><div className="shell videoGrid">
        <div className="videoFrame"><div className="videoPlaceholder"><span>▶</span><p>Advisor briefing</p><small>Cost segregation + tariff recovery</small></div></div>
        <div><p className="eyebrow">A concise briefing from Rich</p><h2>How hidden value becomes usable cash flow.</h2><p>See a sample property analysis, the potential tax savings created by accelerated depreciation, and how paid tariff records can be screened for possible recovery.</p><p className="videoNote">Your YouTube presentation can be placed here as soon as the final video link is supplied.</p><a className="textLink dark" href="#consultation">Discuss your facts with Rich <span>→</span></a></div>
      </div></section>

      <section className="section shell" id="about"><div className="aboutGrid"><div className="portraitMonogram">RC<span>MAI · AI-GRS</span></div><div><p className="eyebrow">The connector who understands the asset</p><h2>Decades of real estate judgment. One accountable relationship.</h2><p>Rich Cassinelli is a commercial real estate appraiser and consultant with experience dating to 1987. His valuation background helps him understand the property, frame the opportunity, and connect clients with experienced professionals suited to the work.</p><div className="checks"><span>Commercial property fluency</span><span>Senior-level responsiveness</span><span>National specialist connections</span><span>Independent, consultative approach</span></div><a className="textLink dark" href="mailto:rich@cassval.com">Email Rich directly <span>↗</span></a></div></div></section>

      <section className="insights section" id="insights"><div className="shell"><div className="headingRow"><div><p className="eyebrow">Latest perspective</p><h2>What owners and importers should be watching.</h2></div><p>Selected official guidance and timely reporting. Rich can help you understand which developments warrant specialist review.</p></div><div className="insightGrid">{insights.map(item => <article key={item.title}><div><span>{item.tag}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.copy}</p><a href={item.href} target="_blank" rel="noreferrer">Read at {item.source} <span>↗</span></a></article>)}</div></div></section>

      <section className="intake section" id="consultation"><div className="shell intakeGrid"><div><p className="eyebrow">Confidential opportunity review</p><h2>Start with a focused conversation.</h2><p>Tell Rich a little about your property or tariff exposure. He’ll respond personally to clarify the opportunity and identify the right specialist next step.</p><div className="contactBlock"><a href="tel:+15035455217">(503) 545-5217</a><a href="mailto:rich@cassval.com">rich@cassval.com</a><span>Portland, Oregon · Serving clients nationwide</span></div></div>
        <form onSubmit={submitIntake}><div className="formRow"><label>Your name<input required name="name" /></label><label>Company<input name="company" /></label></div><div className="formRow"><label>Email<input required name="email" type="email" /></label><label>Phone<input name="phone" type="tel" /></label></div><div className="formRow"><label>Opportunity<select name="opportunity"><option>Cost segregation</option><option>Tariff refund review</option><option>Both / not sure</option><option>CPA or advisor referral</option></select></label><label>Property value / duties paid<input name="value" placeholder="Approximate is fine" /></label></div><label>What should Rich know?<textarea name="notes" rows={4} placeholder="Property type and date placed in service, or import period and approximate duties paid…" /></label><button className="button" type="submit">Send consultation request <span>→</span></button><small>Submitting opens your email application with the completed request. No information is stored by this website.</small></form>
      </div></section>

      <footer><div className="shell footerGrid"><div className="brand footerBrand"><span className="brandMark"><img src="/cassinelli-mark.png" alt="" /></span><span><strong>RICH CASSINELLI</strong><small>ADVISORY</small></span></div><p>Connecting owners and importers with experienced cost segregation and tariff recovery professionals.</p><div><a href="mailto:rich@cassval.com">rich@cassval.com</a><a href="tel:+15035455217">(503) 545-5217</a></div></div><div className="shell legal">© 2026 Rich Cassinelli Advisory. All rights reserved.<span>Information is educational only and is not tax, legal, engineering, customs, or investment advice. Results are not guaranteed.</span></div></footer>
    </main>
  );
}
