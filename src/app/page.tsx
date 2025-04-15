import { Hero } from "@/features/home-page/sections/hero";
import { PostsList } from "@/features/home-page/sections/posts-list";
import { ModelFamily } from "@/features/home-page/sections/model-family";
import { NewsSection } from "@/features/home-page/sections/news";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="">
        <ModelFamily />
        <PostsList />
        <NewsSection showMonths={false} />
      </main>
    </div>
  );
}
