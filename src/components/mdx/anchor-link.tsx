import { HTMLProps, PropsWithChildren } from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "lucide-react";
import { ExternalLink } from "../ui/external-link";
import { cn } from "@/lib/utils";
import { GitHubLogo, YouTubeLogo } from "./logos";
import hflogo from './logos/hf-logo.webp';

const Wrapper = ({ children, className }: PropsWithChildren<HTMLProps<HTMLSpanElement>>) => <span className={cn("inline-flex gap-1 items-center", className)}>{children}</span>

export const AnchorLink = ({
  href,
  children,
  ...rest
}: HTMLProps<HTMLAnchorElement>) => {
  switch (true) {
    case href?.startsWith("#"):
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      );

    case href?.includes("youtube.com"):
      return (
        <Wrapper>
          <YouTubeLogo />
          <ExternalLink href={href}>
            {children}
          </ExternalLink>
        </Wrapper>
      );

    case href?.includes("github.com"):
      return (
        <Wrapper>
          <GitHubLogo />
          <ExternalLink href={href}>
            {children}
          </ExternalLink>
        </Wrapper>
      );

    case href?.includes("huggingface.co"):
      return (
        <Wrapper>
          <Image src={hflogo.src} alt="" width={16} height={16} className="!m-0" />
          <ExternalLink href={href}>
            {children}
          </ExternalLink>
        </Wrapper>
      );

    default:
      return (
        <Wrapper>
          <ExternalLink href={href}>
            {children}
          </ExternalLink>
          <ExternalLinkIcon size={14} />
        </Wrapper>
      );
  }
};
