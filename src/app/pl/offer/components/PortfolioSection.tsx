import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from './section';

const portfolioItems = [
  {
    title: 'Projekt E-commerce "Sklep XYZ"',
    description:
      'Nowoczesna platforma e-commerce zoptymalizowana pod kątem konwersji i doświadczenia użytkownika.',
    imageUrl: '/placeholder-project-1.png',
    projectUrl: '#',
    tags: ['Web Development', 'E-commerce', 'React', 'Next.js'],
  },
  {
    title: 'Aplikacja Mobilna "FitApp"',
    description:
      'Intuicyjna aplikacja mobilna do śledzenia aktywności fizycznej i planowania treningów.',
    imageUrl: '/placeholder-project-2.png',
    projectUrl: '#',
    tags: ['Mobile Development', 'iOS', 'Android', 'React Native'],
  },
  {
    title: 'Automatyzacja AI dla Firmy "LogiCorp"',
    description:
      'System AI optymalizujący procesy logistyczne i prognozujący zapotrzebowanie magazynowe.',
    imageUrl: '/placeholder-project-3.png',
    projectUrl: '#',
    tags: ['AI Automations', 'Python', 'Machine Learning'],
  },
  {
    title: 'Automatyzacja AI dla Firmy "LogiCorp"',
    description:
      'System AI optymalizujący procesy logistyczne i prognozujący zapotrzebowanie magazynowe.',
    imageUrl: '/placeholder-project-3.png',
    projectUrl: '#',
    tags: ['AI Automations', 'Python', 'Machine Learning'],
  },
];

export const PortfolioSection = () => {
  return (
    <Section id="portfolio">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Wybrane realizacje
        </h2>
        <p className="w-2/3 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed balance">
          Portfolio prezentuje jedynie wycinek zrealizowanych projektów. Każdy
          projekt to unikalne wyzwanie i dopasowane rozwiązanie.
        </p>
      </div>
      <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={`Zdjęcie projektu ${item.title}`}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                // Add placeholder if using Next/Image blurDataURL
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="mb-2">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="secondary" className="w-full">
                <Link href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                  Zobacz projekt
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};
