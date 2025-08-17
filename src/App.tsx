
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import NicheSection from "./components/NicheSection";
import PricingSection from "./components/PricingSection";
import SupportSection from "./components/SupportSection";
import { Footer } from "./components/Footer";

const App = () => (
  <div className="min-h-screen">
    <Header />
    <main>
      <HeroSection />
      <FeatureSection />
      <NicheSection />
      <PricingSection />
      <SupportSection />
      {/* User removed ChatInterface from App.tsx in the last user message */}
    </main>
    <Footer />
  </div>
);

export default App;