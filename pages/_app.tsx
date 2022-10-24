import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Header,
  HeaderList,
  HeaderItem,
  HeaderItemFull,
} from "../components/header";
import Container from "../components/Container";
import NavList from "../components/nav/NavList";
import NavItem from "../components/nav/NavItem";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const userName = process.env.NEXT_PUBLIC_USERNAME || "Tailwind blog starter";
  const { pathname } = useRouter();

  return (
    <>
      <Header>
        <HeaderList>
          <HeaderItem>
            <Link href="/">
              <h3 className="cursor-pointer m-0">{userName}</h3>
            </Link>
          </HeaderItem>
          {/* Todo: Should refactor to Array from hard coding... */}
          {/* I know this code is really sucks, but this code is temporary. It will change to Object for manage routes. */}
          <HeaderItemFull>
            <NavList>
              <NavItem href="/" pathname={pathname}>
                Blog
              </NavItem>
              <NavItem href="/resume" pathname={pathname}>
                Resume
              </NavItem>
              <NavItem href="/projects" pathname={pathname}>
                Projects
              </NavItem>
            </NavList>
          </HeaderItemFull>
        </HeaderList>
      </Header>
      <Container className="py-4">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
