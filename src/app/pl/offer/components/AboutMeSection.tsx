import { Section } from './section';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, X } from 'lucide-react';

export const AboutMeSection = () => {
  return (
    <Section id="about-me">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo Column */}
          <div
            className="lg:w-2/5"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-500/10 -z-10"></div>

              {/* Profile image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-border/50 shadow-xl aspect-square max-w-md hover:rotate-2 transition-all">
                <Image
                  src="/offer/profile.webp"
                  alt="Kamil Józwik - Web Developer"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Social links */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                <Link href="https://www.facebook.com/kamiljozwikcom" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="secondary" className="rounded-full bg-background/80 backdrop-blur-sm transition-colors cursor-pointer">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
                {/* <Link href="https://www.linkedin.com/in/kamiljozwik/" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="secondary" className="rounded-full bg-background/80 backdrop-blur-sm transition-colors cursor-pointer">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link> */}
                <Link href="https://x.com/jozwikk" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="secondary" className="rounded-full bg-background/80 backdrop-blur-sm transition-colors cursor-pointer">
                    <X className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className="lg:w-3/5 space-y-6"
          >
            <div>
              <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
                Kilka słów o mnie
              </span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Cześć, jestem <span className="text-primary">Kamil</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p>
                Specjalizuję się w tworzeniu nowoczesnych aplikacji internetowych i mobilnych, które nie tylko świetnie wyglądają, ale przede wszystkim realizują cele biznesowe moich klientów.
              </p>

              <p>
                Moje doświadczenie obejmuje pracę z firmami różnej wielkości - od lokalnych cukierni po globalne korporacje. Każdy projekt traktuję indywidualnie, skupiając się na konkretnych potrzebach i celach.
              </p>

              <p>
                Chętnie pomogę również Tobie i Twojej firmie!
              </p>
            </div>

            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="#contact">Porozmawiajmy o Twoim projekcie</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};