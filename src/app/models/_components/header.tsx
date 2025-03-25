import { formatDate } from "@/lib/utils"
import { Calendar } from "lucide-react"
import { PropsWithChildren } from "react"

type Props = {
  date: string
}

export const Header = ({ children, date }: PropsWithChildren<Props>) => {
  return (
    <header>
      <h1>{children}</h1>
      <div className="flex gap-1 items-center" title="Updated date">
        <Calendar size={20} />
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
    </header>
  )
}
