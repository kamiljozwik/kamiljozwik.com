import { Section } from './section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const FaqSection = () => {

  const faqItems = [
    {
      question: "Jak przebiega proces realizacji projektu?",
      answer: "Proces realizacji projektu składa się z kilku kluczowych etapów: Konsultacja, przygotowanie wyceny i harmonogramu, projektowanie, implementacja, testy i poprawki, wdrożenie i wsparcie. Cały proces jest transparentny i zakłada regularny kontakt oraz prezentacje postępów."
    },
    {
      question: "Ile kosztuje stworzenie strony internetowej lub aplikacji?",
      answer: "Koszt stworzenia strony internetowej lub aplikacji zależy od wielu czynników: złożoności projektu, ilości funkcjonalności, designu, wymagań technicznych oraz terminów realizacji. Każdy projekt wyceniam indywidualnie po dokładnej analizie wymagań. Orientacyjna cena dla stosunkowo prostej statycznej strony internetowej wynosi ok. 1000 zł netto. Zachęcam do kontaktu, aby omówić szczegóły Twojego projektu i przygotować dopasowaną ofertę."
    },
    {
      question: "Jak długo trwa realizacja projektu?",
      answer: "Czas realizacji projektu zależy od jego skali i złożoności. Prosta strona internetowa może być gotowa w ciągu jednego / dwóch tygodni, bardziej rozbudowana platforma czy aplikacja webowa może wymagać kilku miesięcy. Po analizie wymagań będę w stanie przedstawić szczegółowy harmonogram z określonymi kamieniami milowymi."
    },
    {
      question: "Czy zajmujesz się również utrzymaniem projektu po wdrożeniu?",
      answer: "Tak, oferuję kompleksowe wsparcie powdrożeniowe, które obejmuje: monitoring wydajności, regularne aktualizacje bezpieczeństwa, naprawę ewentualnych błędów oraz rozwój funkcjonalności w oparciu o feedback użytkowników. Możliwe jest podpisanie stałej umowy utrzymaniowej lub współpraca w modelu godzinowym."
    },
    {
      question: "Czy mogę zlecić aktualizację lub rozbudowę istniejącej strony?",
      answer: "Oczywiście. Oferuję usługi rozbudowy i aktualizacji istniejących już stron i aplikacji. Proces rozpoczynam od audytu technicznego obecnego rozwiązania, następnie przedstawiam rekomendacje dotyczące możliwych ulepszeń i plan implementacji zmian. Pracuję z różnymi technologiami, więc mogę podjąć się rozwoju większości istniejących projektów."
    },
    {
      question: "Czy możemy spotkać się osobiście w celu omówienia szczegółów?",
      answer: "Tak, jestem otwarty na spotkania osobiste. W przypadku projektów realizowanych w okolicach Skierniewic, Rawy Mazowieckiej i Mszczonowa, możemy spotkać się osobiście w niemal każdej sprawie. W przypadku dalszych odległości i mniej złożonych projektów preferuję spotkania online."
    },
  ];

  return (
    <Section id="faq" muted>
      <div
        className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
      >
        <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary font-medium text-sm">
          Najczęściej zadawane pytania
        </span>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Masz <span className="text-primary">pytania?</span>
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
          Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania. Jeśli nie znalazłeś tego, czego szukasz,
          <Link href="#contact" className="text-primary ml-1">skontaktuj się ze mną</Link>.
        </p>
      </div>

      <div
        className="max-w-3xl mx-auto"
      >
        <div
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-lg font-medium py-4 hover:text-primary hover:cursor-pointer transition-colors hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="pb-4">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};