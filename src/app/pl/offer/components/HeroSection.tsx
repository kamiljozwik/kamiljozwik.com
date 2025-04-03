import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Section } from './section';

export const HeroSection = () => {
  return (
    <Section id='hero'>
      <div className="flex flex-col items-start space-y-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-4xl lg:text-6xl/none text-foreground space-y-4">
            <div className='text-left'>Ty wiesz jak tworzyć biznes.</div>
            <div className='text-left'>Ja wiem jak tworzyć software.</div>
          </h1>
          {/* <p className="text-left text-muted-foreground md:text-xl">
            Stwórzmy razem coś wielkiego!
          </p> */}
        </div>
        <div className="space-x-4 mt-4">
          <Button asChild size="lg">
            <Link href="#contact">Porozmawiajmy</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};
