import { HTMLProps } from "react";

export const headersComponents = {
  h2: (props: HTMLProps<HTMLHeadingElement>) => (<h2 className="after:content-[''] after:block after:w-12 after:h-0.5 after:mt-1 after:bg-[var(--accent-2)]" {...props} />),
};