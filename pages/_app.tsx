import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Container className="py-4">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
