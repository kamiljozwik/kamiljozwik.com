/* eslint-disable @next/next/no-img-element */
import { HTMLProps } from "react";

export const Img = ({
  alt,
  ...rest
}: HTMLProps<HTMLImageElement>) => {
  return (
    <img {...rest} alt={alt || ''} className="!my-0 mx-auto" loading="lazy" />
  );
};
