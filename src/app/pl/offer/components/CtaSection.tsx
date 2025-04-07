import { Section } from './section';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const gradientText = "bg-gradient-to-l from-primary to-blue-300 bg-clip-text text-transparent";


export const CtaSection = () => {
  return (
    <Section id="contact" className="relative overflow-visible py-24">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute bottom-1/5 left-1/5 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-40 transform -translate-x-1/2 translate-y-1/3"></div>
        <div className="absolute top-1/5 right-1/5 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-40 transform translate-x-1/3 -translate-y-1/4"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Column: Main CTA */}
          <div
            className="flex-1 space-y-8"
          >
            <div className="space-y-5">
              <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm">
                Porozmawiajmy o Twoim projekcie
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                <span className={gradientText}>Gotowy na transformację cyfrową?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Skontaktuj się ze mną, aby omówić, jak mogę pomóc w realizacji Twojej wizji. Niezależnie od etapu na jakim jesteś - od pomysłu po gotowy produkt wymagający rozwoju.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:hi@kamiljozwik.com"
                    className="text-xl font-bold hover:text-primary transition-colors"
                  >
                    hi@kamiljozwik.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Odpowiem najszybciej, jak to możliwe.
                  </p>
                </div>
              </div>

              {/* <div className="h-px w-full bg-border/50"></div>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="https://calendly.com/kamiljozwik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="w-full sm:w-auto group-hover:gap-3 transition-all">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Umów spotkanie</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Button>
                </a>

                <Link href="#" className="group">
                  <Button variant="outline" className="w-full sm:w-auto group-hover:gap-3 transition-all">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Chat online</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Button>
                </Link>
              </div> */}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          {/* <div
            className="flex-1 w-full"
          >
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Szybki kontakt</h3>
              <form className="space-y-5">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">Imię i Nazwisko</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-background/50 px-4 py-2 rounded-md border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-background/50 px-4 py-2 rounded-md border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subject">Temat</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-background/50 px-4 py-2 rounded-md border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                      placeholder="Omówienie projektu..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">Wiadomość</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-background/50 px-4 py-2 rounded-md border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
                      placeholder="Opisz krótko Twój projekt lub pytanie..."
                    ></textarea>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Wyślij wiadomość
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Wysyłając formularz, zgadzasz się na przetwarzanie Twoich danych w celu nawiązania kontaktu.
                </p>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  );
};
