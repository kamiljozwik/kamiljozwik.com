import { PropsWithChildren } from "react";

import { UpdateDate } from "@/components/ui/update-date";

type Props = {
  date: string
}


export const Header = ({ children, date }: PropsWithChildren<Props>) => {
  return (
    <header>
      <UpdateDate date={date} />
      <h1>{children}</h1>
    </header>
  )
}
