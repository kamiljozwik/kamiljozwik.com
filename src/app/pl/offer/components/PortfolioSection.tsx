import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Section } from './section';

const portfolioItems = [
  {
    title: 'Rekrutend',
    description:
      'Nowoczesna platforma edukacyjna oferująca kursy online dla rekruterów w branży IT.',
    imageUrl: '/offer/portfolio/rekrutend.webp',
    projectUrl: 'https://rekrutend.pl',
  },
  {
    title: 'Frontstack',
    description:
      'Portal i blog poruszający tematykę web developmentu, z bogatą bazą artykułów i zasobów.',
    imageUrl: '/offer/portfolio/frontstack.webp',
    projectUrl: 'https://frontstack.pl',
  },
  {
    title: 'Kolektor',
    description:
      'Aplikacja mobilna pozwalająca na zastąpienie klasycznego kolektora danych aparatem telefonu.',
    imageUrl: '/offer/portfolio/scanner.webp',
    projectUrl: 'https://play.google.com/store/apps/details?id=com.kamiljozwik.collector',
  },
  {
    title: 'BoomBox',
    description:
      'Strona marketingowa stworzona na potrzeby promocji nowego produktu "BoomBox".',
    imageUrl: '/offer/portfolio/boombox.webp',
    projectUrl: 'https://boombox-plt.vercel.app/',
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
            {/* <CardHeader className="p-0">
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
            </CardHeader> */}
            <CardContent className="p-6 flex-grow">
              <CardTitle className="mb-2">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 lg:w-1/2">
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
