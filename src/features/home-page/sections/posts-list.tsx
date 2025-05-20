import { PostLink } from "@/components/posts/post-link";
import { Button } from "@/components/ui/button";
import { getPostsMeta } from "@/lib/posts";
import Link from "next/link";
import { Section } from "../components/section";
import { GenAi } from "./gen-ai";

export const PostsList = () => {
  const allPosts = getPostsMeta();

  return (
    <Section title="My latests articles">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="md:w-[45%]">
          {allPosts.slice(0, 5).map((post) => (
            <PostLink key={post.slug} post={post} />
          ))}
          <Button asChild variant="default" className="mb-4">
            <Link href="/posts">See all articles</Link>
          </Button>
        </div>
        <div className="md:w-[45%] mb-8">
          <GenAi />
        </div>
      </div>
    </Section>
  )
}
