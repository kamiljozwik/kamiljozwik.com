import { HTMLProps, PropsWithChildren } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { ExternalLink } from "../ui/external-link";
import { cn } from "@/lib/utils";

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

const YouTubeLogo = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 800 562"
    fill="none"
    className="min-w-4 ml-1"
  >
    <path
      d="M782.332 88.4834C772.994 53.9752 746.038 27.0188 711.53 17.681C649.449 0.75 399.589 0.75 399.589 0.75C399.589 0.75 149.728 1.26306 87.6475 18.1941C53.1393 27.5319 26.1829 54.4882 16.8451 88.9965C-1.93292 199.305 -9.21838 367.383 17.3582 473.279C26.696 507.787 53.6523 534.744 88.1606 544.082C150.241 561.013 400.102 561.013 400.102 561.013C400.102 561.013 649.962 561.013 712.043 544.082C746.551 534.744 773.507 507.787 782.845 473.279C802.649 362.817 808.755 194.841 782.332 88.4834Z"
      fill="#FF0000"
    />
    <path
      d="M320.062 400.937L527.339 280.88L320.062 160.824V400.937Z"
      fill="white"
    />
  </svg>
);

const GitHubLogo = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="min-w-4 ml-1"
  >
    <path
      d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.8 23.386C20.565 21.796 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);