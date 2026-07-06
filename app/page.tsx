import { SiteHeader } from "./components/SiteHeader";
import { Hero } from "./components/Hero";
import { Positioning } from "./components/Positioning";
import { Reviews } from "./components/Reviews";
import { ClosingCta } from "./components/ClosingCta";
import { SiteFooter } from "./components/SiteFooter";
import "./components.css";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Positioning />
      <Reviews />
      <ClosingCta />
      <SiteFooter />
    </>
  );
}
