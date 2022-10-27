import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

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
import useToggle from "../hooks/useToggle";
import bio from "../bio";
import ThemeToggler from "../components/ThemeToggler";
import MenuIcon from "@mui/icons-material/Menu";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [isOpen, toggle] = useToggle();
  const mobileNavStyle =
    "absolute top-full px-0 flex-col md:px-4 inset-x-0 md:static md:flex";

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Header className="relative">
          <HeaderList>
            <HeaderItem>
              <Link href="/">
                <h3 className="cursor-pointer m-0">{bio.username}</h3>
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
            <HeaderItemFull>
              <ThemeToggler />
            </HeaderItemFull>
            <HeaderItem className="md:hidden">
              <button
                className="my-0 w-8 h-8 flex items-center justify-center"
                onClick={toggle}
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </HeaderItem>
          </HeaderList>
        </Header>
        <Container className="py-4">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
