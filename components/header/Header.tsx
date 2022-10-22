import Link from "next/link";
import { HTMLAttributes } from "react";
import Container from "./Container";

const Header = ({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  const userName = process.env.NEXT_PUBLIC_USERNAME || "Tailwind blog starter";

  return (
    <header className={`py-4 border-b ${className}`} {...rest}>
      <Container>
        <Link href="/">
          <h3 className="cursor-pointer">{userName}</h3>
        </Link>
        {children}
      </Container>
    </header>
  );
};

export default Header;
