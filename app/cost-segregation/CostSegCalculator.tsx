"use client";

import { useMemo, useState } from "react";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function CostSegCalculator() {
  const [propertyValue, setPropertyValue] = useState(2500000);
  const [landValue, setLandValue] = useState(500000);
  const [reclassRate, setReclassRate] = useState(25);
  const [taxRate, setTaxRate] = useState(32);

  const estimate = useMemo(() => {
    const depreciable = Math.max(0, propertyValue - landValue);
    const accelerated = depreciable * (reclassRate / 100);
    const estimatedTaxEffect = accelerated * (taxRate / 100);
    return { depreciable, accelerated, estimatedTaxEffect };
  }, [propertyValue, landValue, reclassRate, taxRate]);

  return (
    <section className="calculatorSection">
      <div className="shell calcGrid">
        <div>
          <p className="eyebrow">Estimate the opportunity</p>
          <h2>See how accelerated depreciation can change first-year cash flow.</h2>
          <p>
            This calculator is educational and directional. A formal engineering-based study and your tax
            advisor determine actual classifications, eligibility, and tax effect.
          </p>
          <div className="calcFields">
            <label>
              Property cost basis
              <input type="number" value={propertyValue} onChange={(event) => setPropertyValue(Number(event.target.value))} />
            </label>
            <label>
              Land value
              <input type="number" value={landValue} onChange={(event) => setLandValue(Number(event.target.value))} />
            </label>
            <label>
              Reclassifiable basis
              <select value={reclassRate} onChange={(event) => setReclassRate(Number(event.target.value))}>
                <option value="15">15%</option>
                <option value="20">20%</option>
                <option value="25">25%</option>
                <option value="30">30%</option>
                <option value="35">35%</option>
              </select>
            </label>
            <label>
              Marginal tax rate
              <input type="number" min="0" max="60" value={taxRate} onChange={(event) => setTaxRate(Number(event.target.value))} />
            </label>
          </div>
        </div>
        <aside className="resultCard">
          <p>Illustrative tax effect</p>
          <strong>{money(estimate.estimatedTaxEffect)}</strong>
          <div><span>Depreciable basis</span><b>{money(estimate.depreciable)}</b></div>
          <div><span>Potential accelerated basis</span><b>{money(estimate.accelerated)}</b></div>
          <div><span>Assumed tax rate</span><b>{taxRate}%</b></div>
          <a href="/request-quote/">Review this property</a>
          <small>Not a guarantee, appraisal opinion, or tax advice.</small>
        </aside>
      </div>
    </section>
  );
}
