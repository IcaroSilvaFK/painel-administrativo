import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { Layout } from "../layout";
import styles from "./styles/home.module.scss";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Head>
        <title>Painel do admin</title>
      </Head>
      <Layout></Layout>
    </>
  );
};

//className={styles.container}

export default Home;
