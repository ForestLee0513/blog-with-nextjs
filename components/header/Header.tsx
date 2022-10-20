import Link from "next/link";
import { PropsWithChildren } from "react";
import Container from "./Container";

const Header = ({ children }: PropsWithChildren) => {
  const userName = process.env.NEXT_PUBLIC_USERNAME || "Tailwind blog starter";

  return (
    <header className="py-4 border-b mb-4">
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
