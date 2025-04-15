import { modelFamilies } from "@/data/model-families";
import { Section } from "../components/section";
import Image from 'next/image';
import Link from 'next/link';

export const ModelFamily = () => {
  return (
    <Section title="Large Language Models">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {modelFamilies.map((family) => (
          <Link
            key={family.title}
            href={family.href}
            className="block py-2 w-full max-w-[200px] rounded-lg overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-md hover:scale-[1.02] focus-visible:outline-ring"
          >
            <div className="relative p-3">
              <Image
                src={family.img}
                alt={`${family.title} model family`}
                width={200}
                height={200}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <div className="p-3">
              <p className="text-sm text-muted-foreground line-clamp-2">{family.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};
