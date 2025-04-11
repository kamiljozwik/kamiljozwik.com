import { PropsWithChildren } from "react";
import Image from "next/image";
import { modelFamilies } from "@/data/model-families";

import { UpdateDate } from "@/components/ui/update-date";

type Props = {
  model: string;
}

export const Header = ({ children, model }: PropsWithChildren<Props>) => {
  const family = modelFamilies.find((family) => family.title.toLowerCase() === model.toLowerCase());

  if (!family) {
    return <h1 className="mt-2 [&>p]:m-0">{children}</h1>;
  }

  return (
    <header>
      <Image src={family.img} alt="LLM model logo" width={450} height={350} className="!mt-0 mx-auto" priority />
      <UpdateDate date={family.date} />
      <h1 className="mt-2 [&>p]:m-0">{children || family.title}</h1>
    </header>
  )
}
