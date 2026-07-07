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
          Your Go-To Real Estate Team in the Greater Lehigh Valley{" "}
          <em>and beyond.</em>
        </h1>
        <p className="hero__subtext">
          It's not our first time. Not even the 100th. Over the years, we've
          helped hundreds sell and buy their homes.
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
