import { PostLink } from "@/components/posts/post-link";
import { Button } from "@/components/ui/button";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import { Section } from "../components/section";

export const PostsList = () => {
  const allPosts = getPostsMeta();

  return (
    <Section title="My latests articles">
      {allPosts.slice(0, 5).map((post) => (
        <PostLink key={post.slug} post={post} />
      ))}
      <div>
        <Button asChild variant="default">
          <Link href="/posts">See all articles</Link>
        </Button>
      </div>
    </Section>
  )
}
