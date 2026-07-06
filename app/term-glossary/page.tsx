import type { Metadata } from "next";
import { PageHero, Section, CtaBand } from "../components/ui";
import { routes } from "../lib/site";

export const metadata: Metadata = {
  title: "Term Glossary",
  description:
    "A plain-English glossary of common real estate and mortgage terms, from appraisal and escrow to PMI and title insurance — brought to you by The Jamie Achberger Group.",
  alternates: { canonical: routes.termGlossary },
};

const terms: { name: string; def: string }[] = [
  {
    name: "Adjustable-Rate Mortgage (ARM)",
    def: "A home loan with an interest rate that can change over time based on a market index, usually after an initial fixed period.",
  },
  {
    name: "Amortization",
    def: "The process of paying off a loan over time through regular payments, where early payments go mostly toward interest and later ones toward principal.",
  },
  {
    name: "Appraisal",
    def: "A licensed appraiser's professional estimate of a home's market value, typically required by a lender before approving a mortgage.",
  },
  {
    name: "Closing Costs",
    def: "The fees and expenses — beyond the down payment — paid at closing, including lender fees, title insurance, taxes, and prepaid items.",
  },
  {
    name: "Comparative Market Analysis (CMA)",
    def: "An agent's evaluation of recently sold, comparable homes used to estimate a fair listing or offer price.",
  },
  {
    name: "Contingency",
    def: "A condition in a purchase contract that must be met for the sale to proceed, such as a satisfactory inspection, appraisal, or financing.",
  },
  {
    name: "Down Payment",
    def: "The portion of a home's price paid upfront in cash, expressed as a percentage of the purchase price.",
  },
  {
    name: "Earnest Money",
    def: "A good-faith deposit a buyer makes when submitting an offer, held in escrow and applied toward the purchase at closing.",
  },
  {
    name: "Equity",
    def: "The share of your home you actually own — the difference between its market value and the balance remaining on your mortgage.",
  },
  {
    name: "Escrow",
    def: "A neutral third-party account that holds funds or documents during a transaction, releasing them only when agreed conditions are met.",
  },
  {
    name: "FHA Loan",
    def: "A mortgage insured by the Federal Housing Administration, offering lower down-payment and credit requirements for qualifying buyers.",
  },
  {
    name: "Fixed-Rate Mortgage",
    def: "A home loan with an interest rate that stays the same for the entire term, keeping principal-and-interest payments predictable.",
  },
  {
    name: "Home Inspection",
    def: "A professional assessment of a home's condition — structure, systems, and safety — usually performed after an offer is accepted.",
  },
  {
    name: "Multiple Listing Service (MLS)",
    def: "The database of homes for sale shared among real estate professionals, powering most home-search tools.",
  },
  {
    name: "Pre-Approval",
    def: "A lender's conditional commitment to loan you a specific amount, based on verified income, assets, and credit — stronger than a pre-qualification.",
  },
  {
    name: "Principal",
    def: "The amount of money borrowed, or the remaining balance owed, separate from interest.",
  },
  {
    name: "Private Mortgage Insurance (PMI)",
    def: "Insurance a lender may require when a buyer puts down less than 20%, protecting the lender if the loan defaults.",
  },
  {
    name: "Property Taxes",
    def: "Annual taxes assessed by local governments based on a property's value, often collected monthly through an escrow account.",
  },
  {
    name: "Title",
    def: "Legal ownership of a property. A title search confirms the seller has the right to sell and that there are no outstanding claims.",
  },
  {
    name: "Title Insurance",
    def: "A policy that protects the buyer and lender against losses from defects in the title, such as liens or ownership disputes.",
  },
  {
    name: "Under Contract",
    def: "A property with an accepted offer that has not yet closed; remaining contingencies are still being satisfied.",
  },
  {
    name: "VA Loan",
    def: "A mortgage guaranteed by the U.S. Department of Veterans Affairs for eligible service members and veterans, often with no down payment.",
  },
];

function groupByLetter(items: { name: string; def: string }[]) {
  const groups: Record<string, { name: string; def: string }[]> = {};
  for (const item of items) {
    const letter = item.name[0].toUpperCase();
    (groups[letter] ??= []).push(item);
  }
  return Object.keys(groups)
    .sort()
    .map((letter) => ({ letter, items: groups[letter] }));
}

export default function TermGlossaryPage() {
  const grouped = groupByLetter(terms);

  return (
    <>
      <PageHero
        eyebrow="Term Glossary"
        title="Speak the language"
        intro="Real estate comes with its own vocabulary. Here are the terms you'll hear most often, defined in plain English so nothing catches you off guard."
      />

      <Section variant="cream" width="narrow">
        <div className="glossary">
          {grouped.map((group) => (
            <div key={group.letter} className="glossary__group">
              <p className="glossary__letter">{group.letter}</p>
              {group.items.map((term) => (
                <div key={term.name} className="term">
                  <h2 className="term__name">{term.name}</h2>
                  <p className="term__def">{term.def}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="disclaimer">
          These definitions are provided for general education only and are not
          legal, tax, or financial advice. Terms and requirements vary by loan
          program, lender, and jurisdiction.
        </p>
      </Section>

      <CtaBand
        heading="Still have questions?"
        body="We're always happy to explain anything you run into along the way."
        primary={{ label: "Contact Us", href: routes.contact }}
        secondary={{ label: "Buying Resources", href: routes.buyingResources }}
      />
    </>
  );
}
