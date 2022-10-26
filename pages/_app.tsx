import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Header,
  HeaderList,
  HeaderItem,
  HeaderItemFull,
} from "../components/header";
import Container from "../components/Container";
import { NavList, NavItem } from "../components/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import useToggle from "../hooks/useToggle";
import author from "../author";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [isOpen, toggle] = useToggle();
  const mobileNavStyle =
    "absolute top-full px-0 flex-col md:px-4 inset-x-0 md:static md:flex";

  return (
    <>
      <Header className="relative">
        <HeaderList>
          <HeaderItem>
            <Link href="/">
              <h3 className="cursor-pointer m-0">{author.username}</h3>
            </Link>
          </HeaderItem>
          {/* TODO: Should refactor to Array from hard coding... */}
          {/* I know this code is really sucks, but this code is temporary. It will change to Object for manage routes. */}
          <HeaderItemFull
            className={`${isOpen ? mobileNavStyle : "hidden"} md:flex`}
          >
            <NavList className="flex-col md:flex-row">
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
          <HeaderItemFull className="md:hidden">
            <button className="my-0" onClick={toggle}>
              {/* TODO: This text will replace to hambuger icon soon. */}
              Toggle Nav
            </button>
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
