import { Hero } from "@/features/home-page/sections/hero";
import { BlogPosts } from "@/features/home-page/sections/blog-posts";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="">
        <BlogPosts />
      </main>
    </div>
  );
}
