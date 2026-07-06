import { siteConfig } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__logo">
          THE JAMIE ACHBERGER GROUP
          <em>×</em>
          eXp REALTY
        </div>
        <nav className="site-header__nav">
          <a href={siteConfig.links.meetTheTeam}>About</a>
          <a href={siteConfig.links.searchHomes}>Search Homes</a>
          <a href={siteConfig.links.buyingResources}>Buyers</a>
          <a href={siteConfig.links.sellingResources}>Sellers</a>
          <a href={siteConfig.links.contact}>Contact</a>
        </nav>
        <a
          href={siteConfig.links.contact}
          className="site-header__contact-mobile"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
