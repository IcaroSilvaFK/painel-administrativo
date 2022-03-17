import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

import { ModalContextProvider } from "../context/modalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
}

export default MyApp;
