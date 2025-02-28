import { Header } from "./components/landingPage/header";
import { Hero } from "./components/landingPage/hero";
import { Pricing } from "./components/landingPage/pricing";
import { VideoExplanation } from "./components/landingPage/video-explanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
    </div>
  );
}
