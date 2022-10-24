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
        className={`flex justify-start md:justify-end m-0 py-2 md:py-0 px-4 md:first:pl-0 md:last:pr-0 bg-slate-50 md:bg-transparent border-b-2 md:border-b-0 ${activeStyle} ${className}`}
        {...rest}
      >
        {children}
      </p>
    </Link>
  );
};

export default NavItem;