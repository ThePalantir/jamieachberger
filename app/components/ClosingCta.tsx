import Link from "next/link";
import { routes } from "../lib/site";

export function ClosingCta() {
  return (
    <section className="closing-cta">
      <div className="closing-cta__inner">
        <h2 className="closing-cta__heading">
          Let&apos;s make your next move feel like the right one.
        </h2>
        <p className="closing-cta__text">
          Hundreds of families across the Lehigh Valley and beyond have trusted us —
        </p>
        <p className="closing-cta__text closing-cta__text--emphasis">
          your story can be next.
        </p>
        <div className="closing-cta__ctas">
          <Link href={routes.contact} className="closing-cta__btn">
            Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
