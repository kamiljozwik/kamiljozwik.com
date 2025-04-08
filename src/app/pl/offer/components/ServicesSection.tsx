import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code, Smartphone, BrainCircuit, LayoutDashboard, Palette, Database } from 'lucide-react';
import { Section } from './section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const ServicesSection = () => {

  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: 'Aplikacje webowe',
      description:
        'Rozbudowane, wydajne i nowoczesne aplikacje internetowe dostosowane do Twoich unikalnych potrzeb biznesowych.',
      features: [
        'Architektura zorientowana na wydajność',
        'Interfejs użytkownika oparty na najlepszych praktykach UX',
        'Integracja z zewnętrznymi API i serwisami',
        'Dostosowanie do urządzeń mobilnych i desktopowych'
      ]
    },
    {
      icon: <LayoutDashboard className="h-12 w-12 text-primary" />,
      title: 'Strony internetowe',
      description:
        'Responsywne, szybkie i zorientowane na użytkownika witryny, które angażują odbiorców i realizują cele biznesowe.',
      features: [
        'Optymalizacja dla wyszukiwarek (SEO)',
        'Szybkie ładowanie strony',
        'Zarządzanie treścią (CMS)',
        'Analityka i śledzenie konwersji'
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: 'Aplikacje mobilne',
      description:
        'Intuicyjne aplikacje na platformy iOS i Android, dostarczające realną wartość użytkownikom w ich codziennym życiu.',
      features: [
        'Sprawdzone rozwiązania',
        'Synchronizacja danych',
        'Integracja z funkcjami urządzeń',
        'Notyfikacje push i interakcje z użytkownikem'
      ]
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-primary" />,
      title: 'Automatyzacje AI',
      description:
        'Optymalizacja procesów biznesowych i usprawnianie decyzji dzięki inteligentnym rozwiązaniom opartym na AI.',
      features: [
        'Wykorzystanie modeli LLM',
        'Automatyzacja powtarzalnych zadań',
        'Analiza danych i wizualizacja',
        'Chat-boty i wirtualni asystenci'
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: 'UX/UI Design',
      description:
        'Projektowanie intuicyjnych interfejsów użytkownika, które zwiększają zadowolenie użytkowników i konwersję.',
      features: [
        'Badania użytkowników i persony',
        'Prototypowanie i testowanie użyteczności',
        'Design systemowy i style guide',
        'Iteracyjne projektowanie oparte na feedbacku'
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: 'Konsultacje',
      description:
        'Eksperckie doradztwo w zakresie architektury systemów, wyboru technologii i strategii rozwoju produktu.',
      features: [
        'Audyty techniczne istniejących systemów',
        'Planowanie architektury nowych rozwiązań',
        'Analiza skalowalności i wydajności',
        'Doradztwo w zakresie bezpieczeństwa'
      ]
    },
  ];

  return (
    <Section id="services" className="py-20">
      <div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-16"

      >
        <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm mb-2">
          Co mogę dla Ciebie zrobić?
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Kompleksowe usługi <span className="text-primary">rozwoju oprogramowania</span>
        </h2>
        <p className="w-full max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Dostarczam najwyższej jakości rozwiązania cyfrowe dopasowane do Twoich
          unikalnych potrzeb biznesowych.
        </p>
      </div>

      <div

        className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <div key={index} >
            <Card className="h-full overflow-hidden group border dark:border-primary/20 light:border-border/50 flex flex-col">
              <CardHeader className="p-6 pb-2">
                <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 flex-grow space-y-4">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="#contact">Skontaktuj się, by omówić szczegóły</Link>
        </Button>
      </div>
    </Section>
  );
};
