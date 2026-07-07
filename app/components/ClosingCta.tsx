import Link from "next/link";
import { routes } from "../lib/site";

export function ClosingCta() {
  return (
    <section className="closing-cta">
      <div className="closing-cta__inner">
        <h2 className="closing-cta__heading">We are Here For You!</h2>
        <p className="closing-cta__text">
          We've helped Countless Families in the Lehigh Valley and beyond —
        </p>
        <p className="closing-cta__text closing-cta__text--emphasis">
          Just Like Yours
        </p>
        <div className="closing-cta__ctas">
          <Link href={routes.contact} className="closing-cta__btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
