import { MetadataRoute } from "next";

import { getPostsMeta } from "@/lib/posts";
import { modelFamilies } from "@/data/model-families";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = getPostsMeta();

  const postsMap = allPosts.map((p) => ({
    url: `https://kamiljozwik.com/posts/${p.slug}`,
    lastModified: p.date,
  }));

  const familiesMap = modelFamilies.map((f) => ({
    url: `https://kamiljozwik.com${f.href}`,
  }));

  return [
    {
      url: `https://kamiljozwik.com`,
    },
    {
      url: `https://kamiljozwik.com/posts`,
    },
    ...postsMap,
    ...familiesMap,
    {
      url: `https://kamiljozwik.com/news/ai`,
    },
    {
      url: `https://kamiljozwik.com/news/webdev`,
    },
  ];
}
