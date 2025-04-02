import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CtaSection } from './components/CtaSection';

export default function OfferPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="space-y-16 md:space-y-24">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <CtaSection />
      </div>
    </div>
  );
}
