import { PostLink } from "@/components/blog/post-link";
import { PageHeader } from "@/components/page-header";
import { getPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Wszystkie posty",
  description: "Lista wszystkich postów na blogu.",
};

type Props = {
  title: string;
  tag?: string;
};

const BlogPage = ({ title, tag }: Props) => {
  const allPosts = getPostsMeta();

  return (
    <section>
      <PageHeader>{title}</PageHeader>
      <div>
        {tag
          ? allPosts
            .filter((post) =>
              post.tags.map((el) => el.toLowerCase()).includes(tag)
            )
            .map((post) => <PostLink key={post.slug} post={post} />)
          : allPosts.map((post) => <PostLink key={post.slug} post={post} />)}
      </div>
    </section>
  );
};

export default BlogPage;
