import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { BiLoaderAlt } from "react-icons/bi";
import { MdError } from "react-icons/md";
import { QueryResult } from "../hooks/useQuery";
import { Layout } from "../layout";
import { ListItem } from "../components/ListItem";
import { useCollection } from "../hooks/useCollection";

import styles from "./styles/home.module.scss";

const Home: NextPage = () => {
  const { collections, isError, isLoading } = useCollection();
  const [search, setSearch] = useState("");

  console.log(collections);

  if (isError) {
    return (
      <Layout>
        <div className={styles.ContainerLoading}>
          <BiLoaderAlt size={80} color="#6b46c1" />
          <span>Não encontramos nenhuma collection</span>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.ContainerError}>
        <MdError size={80} color="#c53030" />
        <h1>
          Tivemos um erro inesperado por favor aguarde e aperte F5 no seu
          teclado
        </h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Painel do admin</title>
      </Head>
      <Layout>
        <ul>
          {collections?.map((element) => (
            <ListItem title={element.title} key={element.id} />
          ))}
        </ul>
      </Layout>
    </>
  );
};

//className={styles.container}

export default Home;
