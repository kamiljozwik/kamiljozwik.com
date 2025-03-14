import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
};

export function getPostsMeta() {
  const folderNames = fs.readdirSync(postsDirectory);

  const postsMeta = folderNames.map((name) => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const meta = require(`../posts/${name}/content.mdx`).meta as Omit<
      PostMeta,
      "slug"
    >;

    return {
      slug: name,
      ...meta,
    };
  });

  return postsMeta.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getPostBySlug = (slugToFind: string) =>
  getPostsMeta().find(({ slug }) => slug === slugToFind);

export const getTags = () =>
  getPostsMeta()
    .reduce((acc: string[], post) => {
      return [...acc, ...post.tags];
    }, [])
    .filter((category, index, arr) => arr.indexOf(category) === index);
