import { FC, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../services/axios";

export interface IAddNewCollectionProps {
  title: string;
  description: string;
  id: string;
}

type Collections = Pick<IAddNewCollectionProps, "title" | "id">;

interface ICollectionContextProps {
  collections: Collections[];
  handleAddNewCollection: (collection: IAddNewCollectionProps) => Promise<void>;
  isLoading: boolean;
  isError: boolean;
}

export const collectionContext = createContext<ICollectionContextProps>(
  {} as ICollectionContextProps
);

export const CollectionCOntextProvider: FC = ({ children }) => {
  const [collections, setCollections] = useState<Collections[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem("collections");

    if (store) {
      setCollections(JSON.parse(store));
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections]);

  async function handleAddNewCollection(collection: IAddNewCollectionProps) {
    try {
      setCollections((values) => [...values, collection]);
      api.post("collection", collection);
      setIsLoading(false);
      toast("Cadastrado com sucesso ⚓", { theme: "light", draggable: true });
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  }
  console.log(collections === null);
  return (
    <collectionContext.Provider
      value={{ collections, handleAddNewCollection, isError, isLoading }}
    >
      {children}
    </collectionContext.Provider>
  );
};
