import Link from "next/link";
import { HTMLAttributes } from "react";

interface INavItem extends HTMLAttributes<HTMLDivElement> {
  pathname: string;
  href: string;
}

const NavItem = ({
  children,
  className = "",
  href,
  pathname,
  ...rest
}: INavItem) => {
  const isSamePath = pathname === href;
  const activeStyle = isSamePath ? "font-bold underline" : "";

  return (
    <Link href={href}>
      <p
        className={`flex justify-end m-0 px-4 first:pl-0 last:pr-0 ${activeStyle} ${className}`}
        {...rest}
      >
        {children}
      </p>
    </Link>
  );
};

export default NavItem;
