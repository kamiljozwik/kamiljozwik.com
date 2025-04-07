import { Section } from './section';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export const TestimonialsSection = () => {


  const testimonials = [
    {
      quote: "Kamil to niezwykle utalentowany developer, który dostarczył aplikację internetową znacznie przekraczającą nasze oczekiwania. Jego umiejętności techniczne, komunikacja i podejście do rozwiązywania problemów były na najwyższym poziomie.",
      author: "Anna Kowalska",
      position: "CEO, Digital Marketing Agency",
      avatar: "/offer/testimonials/avatar1.webp"
    },
    {
      quote: "Współpraca z Kamilem to czysta przyjemność. Jego dokładność, terminowość i umiejętność tłumaczenia złożonych kwestii technicznych w prosty sposób sprawiły, że cały proces rozwoju naszej strony był bezproblemowy.",
      author: "Marek Nowak",
      position: "Founder, StartupXYZ",
      avatar: "/offer/testimonials/avatar2.webp"
    },
    {
      quote: "Dzięki Kamilowi nasza aplikacja mobilna zyskała nowe życie. Jego rozwiązania zwiększyły wydajność o 40% i znacząco poprawiły doświadczenia użytkowników, co przełożyło się na wzrost zaangażowania.",
      author: "Karolina Wiśniewska",
      position: "Product Manager, TechCorp",
      avatar: "/offer/testimonials/avatar3.webp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section id="testimonials">
      <div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-16"

      >
        <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm">
          Opinie klientów
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Co mówią o <span className="text-primary">współpracy</span>
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
          Satysfakcja klientów jest moim priorytetem. Oto co mówią o efektach naszej współpracy.
        </p>
      </div>

      <div

        className="grid gap-8 md:grid-cols-3"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-card/70 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 p-8 transition-all relative group"
          >
            <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative">
              <p className="text-foreground italic relative z-10 mb-8">{`"${item.quote}"`}</p>

              <div className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden w-12 h-12 border-2 border-border flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={`Zdjęcie ${item.author}`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{item.author}</h4>
                  <p className="text-sm text-muted-foreground">{item.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          Dołącz do grona zadowolonych klientów i zrealizuj swój projekt z sukcesem.
        </p>
      </div>
    </Section>
  );
};