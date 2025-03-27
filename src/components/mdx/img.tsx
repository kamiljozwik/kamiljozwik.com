import { HTMLProps } from "react";

export const Img = ({
  ...rest
}: HTMLProps<HTMLImageElement>) => {
  return (
    <img {...rest} className="!my-0 mx-auto" />
  );
};
