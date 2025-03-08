import { HTMLProps } from "react";

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
        <span className="inline-flex gap-1 items-center mx-1">
          <YouTubeLogo />
          <a href={href} target="_blank" rel="noopener" {...rest}>
            {children}
          </a>
        </span>
      );

    default:
      return (
        <a href={href} target="_blank" rel="noopener" {...rest}>
          {children}
        </a>
      );
  }
};

const YouTubeLogo = () => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 800 562"
    fill="none"
    className="min-w-4"
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