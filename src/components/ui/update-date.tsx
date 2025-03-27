import { Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

type Props = {
  date?: string
}

export const UpdateDate = ({ date }: Props) => {
  return (
    <div className="flex gap-1 items-center" title="Updated date">
      <Calendar size={20} />
      <time dateTime={date}>{formatDate(date)}</time>
    </div>
  )
}
