import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ModalContextProvider } from "../context/modalContext";
import { Modal } from "../modal";
import { CollectionContextProvider } from "../context/collectionContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CollectionContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
        <Modal />
        <ToastContainer />
      </ModalContextProvider>
    </CollectionContextProvider>
  );
}

export default MyApp;
