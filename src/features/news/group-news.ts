import { NewsItem } from "./types";

export const groupNewsByMonth = (news: NewsItem[] = []) => {
  const grouped: Record<string, NewsItem[]> = {};

  news.forEach((item) => {
    const date = new Date(item.created_at);
    const monthYear = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }

    grouped[monthYear].push(item);
  });

  // Sort keys in reverse chronological order
  return Object.fromEntries(
    Object.entries(grouped).sort((a, b) => {
      const dateA = new Date(a[1][0].created_at);
      const dateB = new Date(b[1][0].created_at);
      return dateB.getTime() - dateA.getTime();
    })
  );
};
