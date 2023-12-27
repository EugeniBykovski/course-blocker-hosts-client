import React, { FC } from "react";
import clsx from "clsx";
import Link from "next/link";

export type LinkProps = {} & Parameters<typeof Link>[0];

const LinkUI: FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-teal-500 hover:text-teal-600 cursor-pointer",
      )}
    />
  );
};

export default LinkUI;
