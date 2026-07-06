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
          <a href="#about">About</a>
          <a href="#search">Search Homes</a>
          <a href="#buyers">Buyers</a>
          <a href="#sellers">Sellers</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="site-header__contact-mobile">
          Contact
        </a>
      </div>
    </header>
  );
}
