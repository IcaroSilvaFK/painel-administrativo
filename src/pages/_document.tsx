import type { NextPage } from "next";
import { Html, Head, Main, NextScript as Script } from "next/document";

const _document: NextPage = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;700;900&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <Script />
      </body>
    </Html>
  );
};

export default _document;
