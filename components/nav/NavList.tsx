import { HTMLAttributes } from "react";

const NavList = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={`flex flex-1 flex-wrap list-none p-0 m-0 w-full ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </nav>
  );
};

export default NavList;
