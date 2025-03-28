import { PostMeta } from "@/lib/posts";
import Link from "next/link";

type PostLinkProps = {
  post: PostMeta;
};

export const PostLink = ({ post }: PostLinkProps) => {
  return (
    <div className='flex flex-col mb-5'>
      <Link href={`/posts/${post.slug}`} className="text-inherit no-underline">
        <h3 className="text-xl font-bold">{post.title}</h3>
      </Link>
      <p className="text-muted-foreground">{post.description}</p>
    </div>
  );
};
