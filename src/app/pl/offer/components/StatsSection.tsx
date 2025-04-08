import { Section } from './section';
import { CalendarClock, Code2, Users, Zap } from 'lucide-react';

export const StatsSection = () => {

  const stats = [
    {
      icon: <CalendarClock className="h-8 w-8 text-primary" />,
      value: "10+",
      label: "Lat doświadczenia",
      description: "Rozwijania oprogramowania"
    },
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      value: "80+",
      label: "Projektów",
      description: "Zrealizowanych z sukcesem"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "50+",
      label: "Klientów",
      description: "Zadowolonych ze współpracy"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      value: "99%",
      label: "Projektów",
      description: "Dostarczonych na czas"
    }
  ];

  return (
    <Section id="stats" muted>
      <div className="max-w-5xl mx-auto">
        <div

          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {stat.icon}
              </div>

              <h3
                className="text-4xl font-bold text-foreground mb-1"
              >
                {stat.value}
              </h3>

              <h4 className="font-medium text-xl mb-2">{stat.label}</h4>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};