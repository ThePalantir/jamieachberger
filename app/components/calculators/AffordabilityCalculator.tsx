"use client";

import { useState } from "react";
import { usd, monthlyPayment } from "../../lib/format";

/**
 * Estimates a max home price by solving for the loan a target monthly payment
 * supports, given the 28/36 guideline. We cap housing payment at 28% of gross
 * monthly income and total debt (housing + other debts) at 36%, then take the
 * lower housing allowance, subtract taxes/insurance, and back out the price.
 */
export function AffordabilityCalculator() {
  const [income, setIncome] = useState(110000);
  const [monthlyDebts, setMonthlyDebts] = useState(600);
  const [downPayment, setDownPayment] = useState(60000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const grossMonthly = income / 12;
  const housingCap = grossMonthly * 0.28;
  const totalDebtCap = grossMonthly * 0.36 - monthlyDebts;
  const affordableHousing = Math.max(Math.min(housingCap, totalDebtCap), 0);

  // Assume ~25% of the housing payment covers taxes + insurance; the rest is P&I.
  const piBudget = affordableHousing * 0.75;

  // Invert the amortization formula to get the max loan for that P&I budget.
  const r = rate / 100 / 12;
  const n = term * 12;
  const maxLoan =
    r === 0 ? piBudget * n : (piBudget * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
  const maxPrice = maxLoan + downPayment;

  const estMonthly = monthlyPayment(maxLoan, rate, term) + affordableHousing * 0.25;

  return (
    <div className="calc">
      <div className="calc__fields">
        <div className="calc__field">
          <label className="calc__label" htmlFor="income">
            Annual Household Income
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="income"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={5000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="debts">
            Monthly Debt Payments (car, student loans, cards)
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="debts"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={50}
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="calc__field">
          <label className="calc__label" htmlFor="down">
            Down Payment (cash available)
          </label>
          <div className="calc__input-wrap">
            <span className="calc__prefix">$</span>
            <input
              id="down"
              className="calc__input calc__input--prefixed"
              type="number"
              min={0}
              step={5000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
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
      </div>

      <div className="calc__result">
        <p className="calc__result-label">Estimated Home Price</p>
        <p className="calc__result-value">{usd(Math.max(maxPrice, 0))}</p>
        <div className="calc__breakdown">
          <div className="calc__breakdown-row">
            <span>Max Loan</span>
            <strong>{usd(Math.max(maxLoan, 0))}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Down Payment</span>
            <strong>{usd(downPayment)}</strong>
          </div>
          <div className="calc__breakdown-row">
            <span>Est. Monthly Housing</span>
            <strong>{usd(Math.max(estMonthly, 0))}</strong>
          </div>
        </div>
        <p className="calc__result-note">
          Based on the 28/36 affordability guideline. Estimates only — your
          lender's approval may differ. Get pre-approved for an exact number.
        </p>
      </div>
    </div>
  );
}
