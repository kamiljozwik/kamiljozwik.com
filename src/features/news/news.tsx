import { groupNewsByMonth } from "./group-news"
import { ExternalLink } from '@/components/ui/external-link'
import { cn } from '@/lib/utils'
import { NewsFeeds, NewsItem } from "./types"

export type NewsProps = {
  feed: NewsFeeds
  limit?: number
  offset?: number
  showMonths?: boolean
}

type NewsResponse = {
  topics: NewsItem[]
}

export const News = async ({ feed, limit = 5, offset = 0, showMonths = true }: NewsProps) => {
  // Fetch news data from the API
  const queryParams = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    feed,
  });

  const data = await fetch(`https://ai-news.kamiljozwikpl.workers.dev/topics?${queryParams}`)
  const news: NewsResponse = await data.json();

  const groupedNews = news ? groupNewsByMonth(news.topics) : [];

  return (
    <div className={cn({ "space-y-10": showMonths, "space-y-4": !showMonths })}>
      {Object.entries(groupedNews).map(([monthYear, items]) => (
        <div key={monthYear} className="space-y-4">
          {showMonths ? <h3 className="text-xl font-semibold border-b text-gray-400 border-gray-800 pb-2">
            {monthYear}
          </h3> : null}
          <div className="grid gap-6">
            {items.map((item) => (
              <ExternalLink
                key={item.id}
                href={item.link}
                className={cn("block", { 'px-4 py-2 ': showMonths })}
              >
                <h3 className="text-xl font-bold flex gap-2 items-center">
                  <span>{item.title}</span>
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </ExternalLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
