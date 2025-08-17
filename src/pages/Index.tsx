import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeatureSection } from "../components/FeatureSection";
import NicheSection from "../components/NicheSection";
import PricingSection from "../components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <NicheSection />
        <PricingSection />
      </main>
    </div>
  );
};

export default Index;
