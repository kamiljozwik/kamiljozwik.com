import Link from "next/link"
import { Chrome, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Section } from "../components/section"
import { News, NewsProps } from "@/features/news/news"

export const NewsSection = async (props: Omit<NewsProps, 'feed'>) => {
  const feeds = ['webdev', 'ai'] as const;

  const feedMeta = {
    webdev: {
      title: 'Web development',
      icon: <Chrome size={18} />,
    },
    ai: {
      title: 'Artificial intelligence',
      icon: <Bot size={18} />,
    },
  } as const;

  return (
    <Section title="Web development and AI news">
      <div className="flex flex-col md:flex-row justify-between">
        {feeds.map(feed => (
          <div key={feed} className="md:w-[45%] mb-8">
            <h3 className="my-6 text-muted-foreground text-xl font-semibold flex gap-2 items-center">
              {feedMeta[feed].icon}
              <span className="">{feedMeta[feed].title}</span>
            </h3>
            <News {...props} feed={feed} />
            <div className="mt-6">
              <Button asChild variant="default">
                <Link href={`/news/${feed}`}>See all</Link>
              </Button>
            </div>
          </div>))}
      </div>
    </Section>
  )
}
