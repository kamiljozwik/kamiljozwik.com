import { PostLink } from "@/components/blog/post-link";
import { Button } from "@/components/ui/button";
import { getPostsMeta } from "@/lib/blog";
import Link from "next/link";
import { Section } from "../components/section";

export const BlogPosts = () => {
  const allPosts = getPostsMeta();

  return (
    <Section>
      <h2 className="font-bold">Latests articles</h2>
      {allPosts.slice(0, 5).map((post) => (
        <PostLink key={post.slug} post={post} />
      ))}
      <div>
        <Button asChild variant="secondary">
          <Link href="/blog">See all</Link>
        </Button>
      </div>
    </Section>
  )
}
