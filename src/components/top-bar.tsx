"use client";

import Link from "next/link";

import { ExternalLink } from "./ui/external-link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "./ui/theme-switch";

const links = [
  { href: "/blog", label: "Blog" },
];

export const TopBar = () => {
  const pathname = usePathname();

  return (
    <header className="mt-6 md:mt-0 h-24 flex flex-col md:flex-row items-center gap-4 md:justify-between">
      <div className="">
        <Link href="/">
          <div className="border border-foreground px-3 py-1 hover:bg-foreground/10">
            Kamil Józwik
          </div>
        </Link>
      </div>
      <div className="flex gap-8">
        <nav>
          <ul className="p-0 flex justify-center flex-wrap gap-x-4 md:gap-x-8 list-none m-0 text-md md:text-xl">
            {links.map(({ href, label }) => {
              const Comp = href.startsWith("http") ? ExternalLink : Link;
              return (
                <li key={`${href}${label}`}>
                  <Comp
                    className={cn(
                      "text-foreground hover:no-underline text-base font-light",
                      {
                        "border-b-2 border-red-500 font-semibold":
                          pathname.includes(href),
                      }
                    )}
                    href={href}
                  >
                    {label}
                  </Comp>
                </li>
              );
            })}
          </ul>
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};
