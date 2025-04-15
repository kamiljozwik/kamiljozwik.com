import { PostLink } from "@/components/posts/post-link";
import { PageHeader } from "@/components/page-header";
import { getPostsMeta } from "@/lib/posts";

export const metadata = {
  title: "Kamil Józwik | Posts",
  description: "List of all posts.",
};

const PostsPage = () => {
  const allPosts = getPostsMeta();
  const tag = undefined;

  return (
    <main>
      <PageHeader>All articles</PageHeader>
      <div className="flex flex-col gap-3">
        {tag
          ? allPosts
            .filter((post) =>
              post.tags.map((el) => el.toLowerCase()).includes(tag)
            )
            .map((post) => <PostLink key={post.slug} post={post} />)
          : allPosts.map((post) => <PostLink key={post.slug} post={post} />)}
      </div>
    </main>
  );
};

export default PostsPage;
