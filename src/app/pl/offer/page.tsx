import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CtaSection } from './components/CtaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
// import { StatsSection } from './components/StatsSection';
import { FaqSection } from './components/FaqSection';
import { AboutMeSection } from './components/AboutMeSection';

export default function OfferPage() {
  return (
    <div className="w-full">
      <main className="space-y-0">
        <HeroSection />
        <AboutMeSection />
        {/* <StatsSection /> */}
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  );
}
