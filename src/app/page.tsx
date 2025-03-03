import { PostLink } from "@/components/blog/post-link";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { getPostsMeta } from "@/lib/blog";
import Link from "next/link";

export default function Home() {
  const allPosts = getPostsMeta();

  return (
    <div className="">
      <Hero />
      <main className="">
        <section className="w-full md:w-[60vw]">
          <h2 className="font-bold">Najnowsze wpisy</h2>
          {allPosts.slice(0, 5).map((post) => (
            <PostLink key={post.slug} post={post} />
          ))}
          <div>
            <Button asChild variant="secondary">
              <Link href="/blog">Zobacz wszystkie wpisy</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
