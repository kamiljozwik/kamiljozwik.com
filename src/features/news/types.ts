export type NewsFeeds = "webdev" | "ai";

export type NewsItem = {
  id: number;
  title: string;
  description: string;
  link: string;
  created_at: string;
};
