import { Hero } from "./components/Hero";
import { Positioning } from "./components/Positioning";
import { Reviews } from "./components/Reviews";
import { ClosingCta } from "./components/ClosingCta";
import {
  ClientPaths,
  HomeIntroduction,
  HomeResources,
  TeamFeature,
} from "./components/HomeExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntroduction />
      <ClientPaths />
      <TeamFeature />
      <Positioning />
      <HomeResources />
      <Reviews />
      <ClosingCta />
    </>
  );
}
