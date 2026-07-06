import Link from "next/link";
import type { ReactNode } from "react";

/** Cream editorial header band used at the top of every interior page. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        <div className="page-hero__rule" />
        {intro ? <p className="page-hero__intro">{intro}</p> : null}
      </div>
    </section>
  );
}

/** Section wrapper with a constrained measure and consistent vertical rhythm. */
export function Section({
  children,
  variant = "cream",
  width = "wide",
}: {
  children: ReactNode;
  variant?: "cream" | "ink";
  width?: "narrow" | "wide";
}) {
  return (
    <section className={`section section--${variant}`}>
      <div className={`section__inner section__inner--${width}`}>{children}</div>
    </section>
  );
}

/** Small uppercase gold label used to open a section. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** A grid of linked navigation cards (resources, next steps). */
export function LinkCards({
  cards,
  columns,
}: {
  cards: { label: string; description: string; href: string; external?: boolean }[];
  /** Force an explicit column count so card counts like 6 wrap evenly
   *  (3+3) instead of leaving orphan cells. Omit to auto-fit. */
  columns?: 2 | 3;
}) {
  const className = columns
    ? `link-cards link-cards--cols-${columns}`
    : "link-cards";
  return (
    <div className={className}>
      {cards.map((card) =>
        card.external ? (
          <a key={card.href + card.label} href={card.href} className="link-card">
            <span className="link-card__label">{card.label}</span>
            <span className="link-card__description">{card.description}</span>
            <span className="link-card__cue">View →</span>
          </a>
        ) : (
          <Link
            key={card.href + card.label}
            href={card.href}
            className="link-card"
          >
            <span className="link-card__label">{card.label}</span>
            <span className="link-card__description">{card.description}</span>
            <span className="link-card__cue">Explore →</span>
          </Link>
        )
      )}
    </div>
  );
}

/** Numbered editorial steps (buyer/seller processes). */
export function Steps({
  steps,
}: {
  steps: { title: string; body: string }[];
}) {
  return (
    <ol className="steps">
      {steps.map((step, i) => (
        <li key={step.title} className="step">
          <span className="step__numeral">{i + 1}</span>
          <div className="step__content">
            <h3 className="step__title">{step.title}</h3>
            <p className="step__body">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Gold/ink call-to-action band closing a page. */
export function CtaBand({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: ReactNode;
  body?: ReactNode;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <h2 className="cta-band__heading">{heading}</h2>
        {body ? <p className="cta-band__body">{body}</p> : null}
        <div className="cta-band__actions">
          <CtaLink action={primary} className="btn btn--solid" />
          {secondary ? (
            <CtaLink action={secondary} className="btn btn--ghost" />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CtaLink({
  action,
  className,
}: {
  action: { label: string; href: string; external?: boolean };
  className: string;
}) {
  if (action.external) {
    return (
      <a
        href={action.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {action.label}
      </a>
    );
  }
  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}
