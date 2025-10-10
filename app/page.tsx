import { Header } from "./components/landingpage/header";
import { Hero } from "./components/landingpage/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
    </div>
  );
}
