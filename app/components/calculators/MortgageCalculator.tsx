"use client";

import { useState } from "react";
import { usd, monthlyPayment } from "../../lib/format";

export function MortgageCalculator() {
  const [price, setPrice] = useState(350000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxRate, setTaxRate] = useState(1.6);
  const [insurance, setInsurance] = useState(1400);

  const downPayment = (price * downPct) / 100;
  const loanAmount = Math.max(price - downPayment, 0);
  const pi = monthlyPayment(loanAmount, rate, term);
  const monthlyTax = (price * (taxRate / 100)) / 12;
  const monthlyInsurance = insurance / 12;
  // PMI estimate ~0.5%/yr of the loan when the down payment is under 20%.
  const monthlyPmi = downPct < 20 ? (loanAmount * 0.005) / 12 : 0;
  const total = pi + monthlyTax + monthlyInsurance + monthlyPmi;

  return (
    <div className="calc">
      <div className="calc__fields">
        <div className="calc__field">
          <label className="calc__label" htmlFor="price">
            Home Price
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="price"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={5000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="down">
            Down Payment — {downPct}% ({usd(downPayment)})
          </label>
          <input
            id="down"
            className="calc__slider"
            type="range"
            min={0}
            max={50}
            step={1}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
          />
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="rate">
            Interest Rate — {rate.toFixed(2)}%
          </label>
          <input
            id="rate"
            className="calc__slider"
            type="range"
            min={2}
            max={10}
            step={0.05}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="term">
            Loan Term — {term} years
          </label>
          <input
            id="term"
            className="calc__slider"
            type="range"
            min={10}
            max={30}
            step={5}
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
          />
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="tax">
            Property Tax Rate — {taxRate.toFixed(2)}% / year
          </label>
          <input
            id="tax"
            className="calc__slider"
            type="range"
            min={0}
            max={3}
            step={0.05}
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
          />
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="insurance">
            Homeowners Insurance — per year
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="insurance"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={100}
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="calc__result">
        <p className="calc__result-label">Estimated Monthly Payment</p>
        <p className="calc__result-value">{usd(total)}</p>
        <div className="calc__breakdown">
          <div className="calc__breakdown-row">
            <span>Principal &amp; Interest</span>
            <strong>{usd(pi)}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Property Tax</span>
            <strong>{usd(monthlyTax)}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Insurance</span>
            <strong>{usd(monthlyInsurance)}</strong>
          </div>
          {monthlyPmi > 0 ? (
            <div className="calc__breakdown-row">
              <span>Est. PMI</span>
              <strong>{usd(monthlyPmi)}</strong>
            </div>
          ) : null}
        </div>
        <p className="calc__result-note">
          Loan amount {usd(loanAmount)} · Estimates only. Actual rates, taxes,
          and insurance vary — confirm with your lender.
        </p>
      </div>
    </div>
  );
}
