import { groupNewsByMonth } from "./group-news"
import { ExternalLink } from '@/components/ui/external-link'
import { cn } from '@/lib/utils'
import { NewsItem } from "./types"

export type NewsProps = {
  limit?: number
  offset?: number
  showMonths?: boolean
}

type NewsResponse = {
  topics: NewsItem[]
}

export const News = async ({ limit = 5, offset = 0, showMonths = true }: NewsProps) => {
  // Fetch news data from the API
  const queryParams = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
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
          <div className="grid gap-4">
            {items.map((item) => (
              <ExternalLink
                key={item.id}
                href={item.link}
                className={cn("block", { 'px-4 py-2 ': showMonths })}
              >
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
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

// const mock = [
//   {
//     "id": 14,
//     "title": "React Trends in 2025",
//     "description": "React Trends in 2025 highlights React Server Components, shadcn/ui, TanStack Start, and React Router as key trends for the year.",
//     "link": "https://www.robinwieruch.de/react-trends/",
//     "created_at": "2025-04-15 07:48:34"
//   },
//   {
//     "id": 13,
//     "title": "React Reconciliation Explained",
//     "description": "React Reconciliation: The Hidden Engine Behind Your Components explains React's reconciliation algorithm, which updates the DOM based on changes to the virtual DOM, and understanding how it works is essential for producing faster apps.",
//     "link": "https://cekrem.github.io/posts/react-reconciliation-deep-dive/",
//     "created_at": "2025-04-15 07:48:34"
//   },
//   {
//     "id": 12,
//     "title": "LLMs for Test Migration at Airbnb",
//     "description": "Accelerating Large-Scale Test Migration with LLMs details how Airbnb completed its first large-scale, LLM-driven code migration in moving from Enzyme to React Testing Library.",
//     "link": "https://medium.com/airbnb-engineering/accelerating-large-scale-test-migration-with-llms-9565c208023b",
//     "created_at": "2025-03-15 07:48:34"
//   },
//   {
//     "id": 11,
//     "title": "pnpm Package Manager Updated to v10.8",
//     "description": "pnpm 10.8 is released, continuing to deliver an alternative, efficient package manager for JavaScript projects.",
//     "link": "https://github.com/pnpm/pnpm/releases/tag/v10.8.0",
//     "created_at": "2025-03-14 07:48:34"
//   },
//   {
//     "id": 10,
//     "title": "Node.js Testing Best Practices Guide",
//     "description": "Node.js Testing Best Practices provides a detailed guide to modern testing in Node, offering over 50 battle-tested tips covering various testing areas.",
//     "link": "https://github.com/goldbergyoni/nodejs-testing-best-practices",
//     "created_at": "2025-01-15 07:48:34"
//   }
// ]