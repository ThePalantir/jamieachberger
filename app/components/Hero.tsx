import Image from "next/image";
import Link from "next/link";
import { routes, siteConfig } from "../lib/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <Image
          src={siteConfig.assets.hero}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="hero__image"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <p className="hero__kicker">
          <span className="hero__kicker-line" aria-hidden="true" />
          Greater Lehigh Valley
        </p>
        <h1 className="hero__headline">
          The Greater Lehigh Valley,<br />
          <em>beautifully within reach.</em>
        </h1>
        <p className="hero__subtext">
          Your go-to real estate team for a move that feels informed,
          personal, and entirely your own.
        </p>
        <div className="hero__ctas">
          <Link
            href={routes.homeValueReport}
            className="hero__btn hero__btn--primary"
          >
            Free Home Value Report
          </Link>
          <Link href={routes.searchHomes} className="hero__link">
            Start Your Search
          </Link>
        </div>
      </div>

      <div className="hero__foot" aria-hidden="true">
        <span className="hero__foot-line" />
        <span className="hero__foot-text">
          Allentown · Bethlehem · Easton · Emmaus · Macungie
        </span>
      </div>
    </section>
  );
}
