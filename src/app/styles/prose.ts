import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

export const prose = (className?: ClassNameValue) => {
  return cn(
    `prose prose-lg dark:prose-invert
    prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-a:no-underline prose-a:font-normal
    prose-blockquote:font-normal`,
    className
  );
};
