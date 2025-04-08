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
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Rekrutend',
    description:
      'Nowoczesna platforma edukacyjna oferująca kursy online dla rekruterów w branży IT.',
    imageUrl: '/offer/rekrutend.webp',
    projectUrl: 'https://rekrutend.pl',
  },
  {
    title: 'Frontstack',
    description:
      'Portal i blog poruszający tematykę web developmentu, z bogatą bazą artykułów i zasobów.',
    imageUrl: '/offer/frontstack.webp',
    projectUrl: 'https://frontstack.pl',
  },
  {
    title: 'Kolektor',
    description:
      'Aplikacja mobilna pozwalająca na zastąpienie klasycznego kolektora danych aparatem telefonu.',
    imageUrl: '/offer/scanner.webp',
    projectUrl: 'https://play.google.com/store/apps/details?id=com.kamiljozwik.collector',
  },
  {
    title: 'BoomBox',
    description:
      'Strona marketingowa stworzona na potrzeby promocji nowego produktu "BoomBox".',
    imageUrl: '/offer/boombox.webp',
    projectUrl: 'https://boombox-plt.vercel.app/',
  },
];

export const PortfolioSection = () => {
  return (
    <Section id="portfolio" muted>
      <div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-16"

      >
        <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm">
          Przykładowe projekty
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Wybrane <span className="text-primary">realizacje</span>
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
          Portfolio prezentuje <span className='text-primary/80 font-bold'>jedynie wycinek zrealizowanych projektów</span>. Każdy
          projekt to unikalne wyzwanie i dopasowane rozwiązanie.
        </p>
      </div>

      <div

        className="grid gap-8 md:grid-cols-2"
      >
        {portfolioItems.map((item, index) => (
          <div
            key={index}
          >
            <Card className="overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col py-0">
              <div className="aspect-video relative overflow-hidden group">
                <Image
                  src={item.imageUrl || '/offer/portfolio/placeholder.jpg'}
                  alt={`Zdjęcie projektu ${item.title}`}
                  width={600}
                  height={340}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-all duration-300">
                  <Button asChild variant="secondary">
                    <Link href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>Zobacz projekt</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <span>Odwiedź stronę</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link href="#contact" className="flex items-center gap-2">
            <span>Potrzebujesz podobnego projektu?</span>
          </Link>
        </Button>
      </div>
    </Section>
  );
};
