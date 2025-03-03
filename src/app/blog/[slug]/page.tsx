import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Link from "next/link";

import { PostMeta, getPostBySlug, getPostsMeta } from "@/lib/blog";
import { TableOfContents } from "./components/toc";
import { NoPost } from "./components/no-post";

export async function generateStaticParams() {
  return getPostsMeta();
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const { slug } = await params;

  const meta = getPostBySlug(slug);
  return { title: meta?.title, description: meta?.seo_desc };
}

const PostPage = async ({ params }: { params: PostMeta }) => {
  const { slug } = await params;

  const slugs = getPostsMeta().map(({ slug }) => slug);

  const PostContent = slugs.includes(slug)
    ? (dynamic(() => import(`../../../posts/${slug}/content.mdx`), {
      loading: () => <p>Loading...</p>,
    }) as any) // TODO: fix types
    : null;

  const meta = getPostBySlug(slug);

  // const content = await PostContent;

  // const mdxContent = await content().props.children.type["_payload"][
  //   "_result"
  // ]();

  return (
    <div>
      <header className="mt-12 mb-12">
        <div className="flex gap-6 items-center mb-4">
          <div className="" title="Ostatnia aktualizacja">
            <span>📅</span>
            <time dateTime={meta?.date}>{meta?.date}</time>
          </div>
          <div className="" title="Tagi">
            <span>🏷️</span>
            {meta?.tags.map((tag) => (
              <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl mb-12 font-bold">{meta?.title}</h1>
      </header>
      <div className="flex gap-2">
        <main className="w-full sm:w-2/3 md:w-3/4">
          <div className="">
            {meta ? <PostContent /> : <NoPost />}
          </div>
        </main>
        <div className="hidden sm:block w-[1px] bg-gray-700" />
        {/* <aside className="hidden sm:block w-1/3 md:w-1/4">
          <TableOfContents mdxContent={mdxContent} />
        </aside> */}
      </div>
    </div>
  );
};

export default PostPage;
