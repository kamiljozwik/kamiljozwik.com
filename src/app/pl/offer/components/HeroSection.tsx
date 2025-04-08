import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Section } from './section';
import { ArrowDown, Code, MousePointerClick, Zap } from 'lucide-react';

const gradientText = "bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent";

export const HeroSection = () => {
  return (
    <Section id='hero' className="min-h-[90vh] flex items-center justify-center relative overflow-visible pt-20 pb-32">
      <div className="absolute top-3/5 -translate-y-1/2 left-0 w-64 h-64 dark:bg-primary/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -translate-y-1/2 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div
        className="z-10 relative flex flex-col items-center lg:items-start max-w-5xl mx-auto space-y-12 text-center lg:text-left px-4"
      >
        <div className="space-y-6 max-w-4xl">
          <span className="inline-block py-2 px-4 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Nowoczesne rozwiązania dla Twojej firmy
          </span>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-foreground">
            <div className='mb-2'>Ty wiesz jak tworzyć biznes.</div>
            <div className={gradientText}>Ja wiem jak tworzyć software.</div>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-2xl mx-auto lg:mx-0">
            Przekształcam pomysły w wydajne, skalowalne i przyjazne dla użytkownika strony i aplikacje webowe, które napędzą rozwój Twojego biznesu.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button asChild size="lg" className="text-base px-8 py-6 font-medium shadow-lg hover:shadow-xl transition-all">
            <Link href="#contact">Porozmawiajmy</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 font-medium">
            <Link href="#portfolio">Zobacz portfolio</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
          <div className="flex items-center gap-3 bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all">
            <div className="bg-primary/10 p-3 rounded-full">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Technologia</h3>
              <p className="text-sm text-muted-foreground">Sprawdzone rozwiązania</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all">
            <div className="bg-primary/10 p-3 rounded-full">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Wydajność</h3>
              <p className="text-sm text-muted-foreground">Szybkie i optymalne działanie</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/50 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all">
            <div className="bg-primary/10 p-3 rounded-full">
              <MousePointerClick className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">UX/UI</h3>
              <p className="text-sm text-muted-foreground">Przyjazne dla użytkowników</p>
            </div>
          </div>
        </div>

        <div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Link href="#about-me" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Przewiń dalej</span>
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </Section>
  );
};
