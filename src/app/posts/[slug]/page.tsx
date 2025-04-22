import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Tags } from "lucide-react";

import { PostMeta, getPostBySlug, getPostsMeta } from "@/lib/posts";
// import { TableOfContents } from "./components/toc";
import { NoPost } from "./components/no-post";
import { Badge } from "@/components/ui/badge";
import { UpdateDate } from "@/components/ui/update-date";
import { prose } from "@/app/styles/prose";

export async function generateStaticParams() {
  return getPostsMeta();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const meta = getPostBySlug(slug);
  return { title: meta?.title, description: meta?.description };
}

const PostPage = async ({ params }: { params: Promise<PostMeta> }) => {
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
    <main className="flex flex-col items-center">
      <header className="mb-20 md:w-[700px] md:max-w-[700px]">
        <h1 className="text-5xl md:text-7xl mb-4 font-bold gradient-text pb-3">{meta?.title}</h1>
        <p className="text-muted-foreground">{meta?.description}</p>
        <div className="flex gap-8 items-center mt-8">
          <UpdateDate date={meta?.date} />
          <div className="flex gap-1" title="Tags">
            <Tags />
            {meta?.tags.map((tag) => (
              <Badge key={tag} variant='outline'>{tag}</Badge>
            ))}
            {/* {meta?.tags.map((tag) => (
              <Link key={tag} href={`/posts/tags/${tag.toLowerCase()}`} className={badgeVariants({ variant: "outline" })}>{tag}</Link>
            ))} */}
          </div>
        </div>
      </header>
      <div className="flex justify-center">
        <section className="border-t-2 border-t-primary/50 pt-8">
          <div className={prose()}>
            {meta ? <PostContent /> : <NoPost />}
          </div>
        </section>
        {/* <div className="hidden sm:block w-[1px] bg-gray-700" /> */}
        {/* <aside className="hidden sm:block w-1/3 md:w-1/4">
          <TableOfContents mdxContent={mdxContent} />
        </aside> */}
      </div>
    </main>
  );
};

export default PostPage;
