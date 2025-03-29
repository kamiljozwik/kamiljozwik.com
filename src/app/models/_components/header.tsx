import { PropsWithChildren } from "react";
import Image from "next/image";

import { UpdateDate } from "@/components/ui/update-date";

type Props = {
  hero: string
  date: string
}

export const Header = ({ children, date, hero }: PropsWithChildren<Props>) => {
  return (
    <header>
      <Image src={hero} alt="LLM model logo" width={500} height={350} className="!mt-0 mx-auto" />
      <UpdateDate date={date} />
      <h1 className="mt-2 [&>p]:m-0">{children}</h1>
    </header>
  )
}
