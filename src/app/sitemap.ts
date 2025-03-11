import { getPostsMeta } from "@/lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = getPostsMeta();

  const postsMap = allPosts.map((p) => ({
    url: `https://kamiljozwik.com/posts/${p.slug}`,
    lastModified: p.date,
  }));

  return [
    {
      url: `https://kamiljozwik.com`,
    },
    {
      url: `https://kamiljozwik.com/posts`,
    },
    ...postsMap,
  ];
}
