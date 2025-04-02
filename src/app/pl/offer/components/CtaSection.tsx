import { Section } from './section';

export const CtaSection = () => {
  return (
    <Section id="contact" muted>
      <div className="grid items-center justify-center gap-8 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-foreground">
            Masz już pomysł?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Porozmawiajmy o Twoich potrzebach.
          </p>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Napisz do mnie, aby omówić, jak mogę pomóc w realizacji Twojej wizji.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <span className='text-xl font-bold'>hi@kamiljozwik.com</span>
          <p className="text-xs text-muted-foreground mt-2">
            Odpowiem najszybciej, jak to możliwe.
          </p>
        </div>
      </div>
    </Section>
  );
};
