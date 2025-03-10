import Link from "next/link";

import { ThemeSwitch } from "../../components/ui/theme-switch";
import { Navigation } from "./components/navigation";

export const TopBar = () => {

  return (
    <header className="mt-6 md:mt-0 h-24 flex flex-col md:flex-row items-center gap-4 md:justify-between">
      <div className="">
        <Link href="/">
          <div className="border border-foreground px-3 py-1 hover:bg-foreground/10">
            Kamil Józwik
          </div>
        </Link>
      </div>
      <div className="flex gap-8 items-center">
        <Navigation />
        <ThemeSwitch />
      </div>
    </header>
  );
};

