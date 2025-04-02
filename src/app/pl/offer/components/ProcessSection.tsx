import { Badge } from '@/components/ui/badge';
import { Section } from './section';

export const ProcessSection = () => {
  const steps = [
    {
      title: 'Planowanie',
      description:
        'Zaczynam od dogłębnego zrozumienia Twoich celów i wymagań, aby stworzyć solidny plan projektu.',
    },
    {
      title: 'Implementacja',
      description:
        'Buduję Twoje rozwiązanie, stosując najlepsze praktyki i nowoczesne technologie.',
    },
    {
      title: 'Wdrożenie',
      description:
        'Testuję aplikację, aby zapewnić jej jakość i niezawodność przed finalnym wdrożeniem.',
    },
    {
      title: 'Utrzymanie',
      description:
        'Po wdrożeniu nie zostaniesz sam. Będę zajmował się utrzymaniem Twojego projektu.',
    },
  ];

  return (
    <Section id="process">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Współpraca
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
          Przejrzysty i efektywny proces gwarantuje sukces Twojego projektu na
          każdym etapie.
        </p>
      </div>
      <div className="relative mx-auto max-w-5xl">
        {/* Optional: Add a visual connector line if desired */}
        {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" /> */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Badge
                variant="secondary"
                className="mb-4 h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold"
              >
                {index + 1}
              </Badge>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
