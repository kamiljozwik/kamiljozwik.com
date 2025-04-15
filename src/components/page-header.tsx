import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  desc?: string;
};

export const PageHeader = ({
  children,
  desc,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <header {...props} className={cn("mt-16 md:mt-8 mb-12", props.className)}>
      <h1 className="mb-12 text-4xl font-bold gradient-text">{children}</h1>
      {desc ? <p className="text-gray-300">{desc}</p> : null}
    </header>
  );
};
