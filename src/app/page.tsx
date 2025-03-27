import { Hero } from "@/features/home-page/sections/hero";
import { PostsList } from "@/features/home-page/sections/posts-list";
import { ModelFamily } from "@/features/home-page/sections/model-family";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="">
        <ModelFamily />
        <PostsList />
      </main>
    </div>
  );
}
