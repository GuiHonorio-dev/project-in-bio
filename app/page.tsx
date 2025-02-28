import { Header } from "./components/landingPage/header";
import { Hero } from "./components/landingPage/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
    </div>
  );
}
