import { Button } from "@/components/ui/button"
import { Section } from "../components/section"
import { News, NewsProps } from "@/features/news/news"
import Link from "next/link"

export const NewsSection = async (props: NewsProps) => {
  return (
    <Section title="Web development news">
      <News {...props} />
      <div className="mt-6">
        <Button asChild variant="default">
          <Link href="/news/webdev">See all news</Link>
        </Button>
      </div>
    </Section>
  )
}
