import { PostLink } from "@/components/blog/post-link";
import { PageHeader } from "@/components/page-header";
import { getPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Kamil Józwik | Blog",
  description: "Lista wszystkich postów na blogu.",
};

const BlogPage = () => {
  const allPosts = getPostsMeta();
  const tag = undefined;

  return (
    <main>
      <PageHeader>All articles</PageHeader>
      <div>
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

export default BlogPage;
