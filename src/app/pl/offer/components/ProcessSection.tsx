import { Badge } from '@/components/ui/badge';
import { Section } from './section';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const ProcessSection = () => {
  const steps = [
    {
      title: 'Planowanie',
      description:
        'Zaczynam od dokładnego zrozumienia Twoich celów biznesowych i wymagań, aby stworzyć precyzyjny plan projektu i strategię jego realizacji.',
      icon: '/offer/process/planning.svg',
      details: [
        'Analiza wymagań i potrzeb',
        'Konsultacje i warsztaty strategiczne',
        'Definicja zakresu i celów projektu',
        'Tworzenie harmonogramu i kamieni milowych'
      ]
    },
    {
      title: 'Implementacja',
      description:
        'Buduję Twoje rozwiązanie z wykorzystaniem najlepszych praktyk inżynierii oprogramowania i nowoczesnych technologii.',
      icon: '/offer/process/development.svg',
      details: [
        'Architektura i projektowanie systemu',
        'Iteracyjne podejście do rozwoju',
        'Regularne demonstracje postępów',
        'Ciągła integracja i testowanie'
      ]
    },
    {
      title: 'Wdrożenie',
      description:
        'Testuję i optymalizuję rozwiązanie, aby zapewnić jego najwyższą jakość, wydajność i niezawodność przed finalnym wdrożeniem.',
      icon: '/offer/process/deployment.svg',
      details: [
        'Kompleksowe testy funkcjonalne',
        'Optymalizacja wydajności',
        'Przygotowanie środowiska produkcyjnego',
        'Płynna migracja danych jeśli potrzebna'
      ]
    },
    {
      title: 'Utrzymanie',
      description:
        'Po wdrożeniu zapewniam wsparcie techniczne, monitorowanie wydajności i rozwój Twojego projektu zgodnie z potrzebami.',
      icon: '/offer/process/support.svg',
      details: [
        'Regularne aktualizacje systemu',
        'Monitorowanie wydajności i bezpieczeństwa',
        'Szybka reakcja na problemy',
        'Rozwój funkcjonalności w oparciu o feedback'
      ]
    },
  ];

  const brands = [
    '/offer/brands/bc.webp',
    '/offer/brands/groupon.webp',
    '/offer/brands/helion.webp',
    '/offer/brands/pracuj.webp',
    '/offer/brands/siemens.webp',
    '/offer/brands/vitesse.webp'
  ];

  return (
    <Section id="process">
      <div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
      >
        <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm">
          Jak pracuję?
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Przejrzysty proces <span className="text-primary">współpracy</span>
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
          Efektywny i transparentny proces gwarantuje sukces Twojego projektu na
          każdym etapie, od koncepcji po wdrożenie i rozwój.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Process Steps */}
        <div
          className="grid gap-12 lg:gap-0 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col relative"
            >
              <div className="mb-6 flex flex-col items-center">
                <Badge
                  variant="secondary"
                  className="mb-4 h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold bg-primary/10 border-2 border-primary z-10"
                >
                  {index + 1}
                </Badge>
                <div className="hidden lg:flex absolute right-0 top-6 -translate-y-1/2 z-20">
                  {index < steps.length - 1 && <ArrowRight className="h-6 w-6 text-primary" />}
                </div>
              </div>

              <div className="space-y-4 text-center lg:px-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                <ul className="space-y-2 pt-2 text-sm text-left">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div
          className="mt-28 text-center"
        >
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/50 to-transparent top-1/2 -translate-y-1/2"></div>
            <h3 className="inline-block relative bg-background px-8 text-muted-foreground text-xl font-medium">
              Zaufali mi
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand}
                  width={140}
                  height={80}
                  alt="Logo firmy partnera"
                  loading="lazy"
                  className="h-auto w-auto object-contain max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
