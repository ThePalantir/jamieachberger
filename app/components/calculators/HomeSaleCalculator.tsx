"use client";

import { useState } from "react";
import { usd } from "../../lib/format";

/** Estimates a seller's net proceeds after payoff, commission, and costs. */
export function HomeSaleCalculator() {
  const [salePrice, setSalePrice] = useState(400000);
  const [mortgagePayoff, setMortgagePayoff] = useState(180000);
  const [commissionPct, setCommissionPct] = useState(5);
  const [closingPct, setClosingPct] = useState(1.5);
  const [otherCosts, setOtherCosts] = useState(2500);

  const commission = (salePrice * commissionPct) / 100;
  const closingCosts = (salePrice * closingPct) / 100;
  const totalCosts = commission + closingCosts + otherCosts + mortgagePayoff;
  const netProceeds = salePrice - totalCosts;

  return (
    <div className="calc">
      <div className="calc__fields">
        <div className="calc__field">
          <label className="calc__label" htmlFor="sale">
            Expected Sale Price
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="sale"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={5000}
              value={salePrice}
              onChange={(e) => setSalePrice(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="payoff">
            Remaining Mortgage Payoff
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="payoff"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={5000}
              value={mortgagePayoff}
              onChange={(e) => setMortgagePayoff(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="commission">
            Total Commission — {commissionPct.toFixed(1)}% ({usd(commission)})
          </label>
          <input
            id="commission"
            className="calc__slider"
            type="range"
            min={0}
            max={7}
            step={0.5}
            value={commissionPct}
            onChange={(e) => setCommissionPct(Number(e.target.value))}
          />
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="closing">
            Closing Costs &amp; Transfer Tax — {closingPct.toFixed(1)}% (
            {usd(closingCosts)})
          </label>
          <input
            id="closing"
            className="calc__slider"
            type="range"
            min={0}
            max={4}
            step={0.1}
            value={closingPct}
            onChange={(e) => setClosingPct(Number(e.target.value))}
          />
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="other">
            Other Costs (repairs, staging, concessions)
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="other"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={500}
              value={otherCosts}
              onChange={(e) => setOtherCosts(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="calc__result">
        <p className="calc__result-label">Estimated Net Proceeds</p>
        <p className="calc__result-value">{usd(netProceeds)}</p>
        <div className="calc__breakdown">
          <div className="calc__breakdown-row">
            <span>Sale Price</span>
            <strong>{usd(salePrice)}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Mortgage Payoff</span>
            <strong>−{usd(mortgagePayoff)}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Commission</span>
            <strong>−{usd(commission)}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Closing &amp; Other</span>
            <strong>−{usd(closingCosts + otherCosts)}</strong>
          </div>
        </div>
        <p className="calc__result-note">
          Estimates only. Payoff, transfer taxes, and commission vary — we'll
          prepare a precise net sheet for your specific sale.
        </p>
      </div>
    </div>
  );
}
