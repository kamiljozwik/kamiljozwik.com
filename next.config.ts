import type { NextConfig } from "next";
import createMDX from "@next/mdx";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: false,
  },
};

const prettyCodeoptions: Options = {
  theme: "one-dark-pro",
  keepBackground: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
          },
        },
      ],
      [rehypePrettyCode, prettyCodeoptions],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
