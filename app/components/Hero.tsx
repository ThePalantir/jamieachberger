import Image from "next/image";
import { siteConfig } from "../lib/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__kicker">Greater Lehigh Valley</div>
        <h1 className="hero__headline">
          Your Go-To Real Estate Team in the Greater Lehigh Valley{" "}
          <em>and beyond.</em>
        </h1>
        <div className="hero__rule"></div>
        <p className="hero__subtext">
          It's not our first time. Not even the 100th. Over the years, we've
          helped hundreds sell and buy their homes.
        </p>
        <div className="hero__ctas">
          <a
            href={siteConfig.links.homeValueReport}
            className="hero__btn hero__btn--primary"
          >
            Free Home Value Report
          </a>
          <a href={siteConfig.links.searchHomes} className="hero__link">
            Start Your Search
          </a>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__photo">
          <Image
            src={siteConfig.assets.hero}
            alt="Aerial view of a Lehigh Valley residential neighborhood"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
}
