import { Hero } from "./components/Hero";
import { Positioning } from "./components/Positioning";
import { Reviews } from "./components/Reviews";
import { ClosingCta } from "./components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Reviews />
      <ClosingCta />
    </>
  );
}
