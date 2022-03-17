import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ModalContextProvider } from "../context/modalContext";
import { Modal } from "../modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
      <Modal />
      <ToastContainer />
    </ModalContextProvider>
  );
}

export default MyApp;
