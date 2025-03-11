import { Hero } from "@/features/home-page/sections/hero";
import { PostsList } from "@/features/home-page/sections/posts-list";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="">
        <PostsList />
      </main>
    </div>
  );
}
