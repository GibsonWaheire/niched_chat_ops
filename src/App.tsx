
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import NicheSection from "./components/NicheSection";
import PricingSection from "./components/PricingSection";
import SupportSection from "./components/SupportSection";
import { Footer } from "./components/Footer";
import { ApiPage } from "./components/pages/ApiPage";
import { IntegrationsPage } from "./components/pages/IntegrationsPage";
import { AboutPage } from "./components/pages/AboutPage";
import { BlogPage } from "./components/pages/BlogPage";
import { HelpCenterPage } from "./components/pages/HelpCenterPage";
import { DocumentationPage } from "./components/pages/DocumentationPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./components/pages/TermsOfServicePage";
import { CookiePolicyPage } from "./components/pages/CookiePolicyPage";
import { SecurityPage } from "./components/pages/SecurityPage";

// Component to handle hash navigation and scroll to sections
const HashScrollHandler = () => {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          // Add a small delay to ensure the page is fully loaded and rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update the URL to remove the hash after scrolling
            window.history.replaceState(null, '', window.location.pathname);
          }, 300);
        }
      }
    };

    // Handle hash on initial load
    handleHashScroll();

    // Handle hash changes
    const handleHashChange = () => {
      handleHashScroll();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
};

// Landing page component
const LandingPage = () => (
  <>
    <HashScrollHandler />
    <HeroSection />
    <FeatureSection />
    <NicheSection />
    <PricingSection />
    <SupportSection />
  </>
);

// Individual page wrapper component
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-20">
    {children}
  </div>
);

const App = () => (
  <Router>
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
          <Route path="/api" element={<PageWrapper><ApiPage /></PageWrapper>} />
          <Route path="/integrations" element={<PageWrapper><IntegrationsPage /></PageWrapper>} />
          <Route path="/help" element={<PageWrapper><HelpCenterPage /></PageWrapper>} />
          <Route path="/docs" element={<PageWrapper><DocumentationPage /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
          <Route path="/terms" element={<PageWrapper><TermsOfServicePage /></PageWrapper>} />
          <Route path="/cookies" element={<PageWrapper><CookiePolicyPage /></PageWrapper>} />
          <Route path="/security" element={<PageWrapper><SecurityPage /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;