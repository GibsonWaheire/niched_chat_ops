
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import NicheSection from "./components/NicheSection";
import PricingSection from "./components/PricingSection";
import SupportSection from "./components/SupportSection";

const App = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <FeatureSection />
      <NicheSection />
      <PricingSection />
      <SupportSection />
    </main>
  </div>
);

export default App;