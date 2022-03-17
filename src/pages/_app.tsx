import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "react-query";

import "react-toastify/dist/ReactToastify.css";
import { client } from "../services/queryClient";
import { ModalContextProvider } from "../context/modalContext";
import { CollectionCOntextProvider } from "../context/collectionContext";
import { Modal } from "../modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <CollectionCOntextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
          <Modal />
          <ToastContainer />
        </ModalContextProvider>
      </CollectionCOntextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
