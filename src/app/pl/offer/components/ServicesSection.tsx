import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code, Smartphone, BrainCircuit } from 'lucide-react'; // Example icons
import { Section } from './section';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-10 w-full text-primary" />,
      title: 'Aplikacje webowe',
      description:
        'Rozbudowane, wydajne i nowoczesne aplikacje internetowe, które pozwalają na rozwój Twojego biznesu.',
    },
    {
      icon: <Code className="h-10 w-full text-primary" />,
      title: 'Strony internetowe',
      description:
        'Responsywne, szybkie i zorientowane na użytkownika aplikacje internetowe, które angażują odbiorców i realizują cele biznesowe.',
    },
    {
      icon: <Smartphone className="h-10 w-full text-primary" />,
      title: 'Aplikacje mobilne',
      description:
        'Intuicyjne aplikacje na platformy iOS i Android, dostarczające realną wartość użytkownikom w ich codziennym życiu.',
    },
    {
      icon: <BrainCircuit className="h-10 w-full text-primary" />,
      title: 'Automatyzacje AI',
      description:
        'Optymalizacja procesów biznesowych, usprawnianie podejmowanych decyzji i tworzenie inteligentnych rozwiązań dzięki niestandardowym automatyzacjom opartym na AI.',
    },
  ];

  return (
    <Section id="services" muted>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
          Usługi
        </h2>
        <p className="w-2/3 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
          Dostarczam kompleksowe rozwiązania cyfrowe dopasowane do Twoich
          unikalnych potrzeb.
        </p>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl">
        {services.map((service, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader className="items-center">
              {service.icon}
              <CardTitle className="mt-4 text-center text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
