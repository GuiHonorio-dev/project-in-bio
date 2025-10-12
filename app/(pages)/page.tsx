import { FAQ } from "../components/landingpage/faq";
import { Header } from "../components/landingpage/header";
import { Hero } from "../components/landingpage/hero";
import { Pricing } from "../components/landingpage/pricing";
import { VideoExplanation } from "../components/landingpage/video-explanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
