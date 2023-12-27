import React, { ReactNode } from "react";
import Logo from "./logo";
import clsx from "clsx";

const Header = ({
  className,
  right,
}: {
  className?: string;
  right?: ReactNode;
}) => {
  return (
    <header
      className={clsx(
        "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <Logo />
      {right}
    </header>
  );
};

export default Header;
