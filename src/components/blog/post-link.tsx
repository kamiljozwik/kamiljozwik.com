import { PostMeta } from "@/lib/blog";
import Link from "next/link";

type PostLinkProps = {
  post: PostMeta;
};

export const PostLink = ({ post }: PostLinkProps) => {
  return (
    <div className='flex flex-col my-5'>
      <Link href={`/blog/${post.slug}`} className="text-inherit no-underline">
        <h3 className="text-blue-300 hover:underline font-bold">{post.title}</h3>
      </Link>
      <p>{post.short}</p>
    </div>
  );
};
