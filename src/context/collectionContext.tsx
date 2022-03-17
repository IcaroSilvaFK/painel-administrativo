import { createContext, FC, useEffect, useState, useLayoutEffect } from "react";
import { api } from "../services/axios";

interface ICollectionProps {
  title: string;
  id: string;
}

interface ICollectionContextProps {
  collections: ICollectionProps[] | null;
  isloading: boolean;
  isError: boolean;
}

export const CollectionContext = createContext<ICollectionContextProps>(
  {} as ICollectionContextProps
);

export const CollectionContextProvider: FC = ({ children }) => {
  const [collections, setCollections] = useState<ICollectionProps[] | null>(
    null
  );
  const [isloading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useLayoutEffect(() => {
    const store = localStorage.getItem("collections");

    if (store) {
      setCollections(JSON.parse(store));
    }
  }, []);

  useEffect(
    () => {
      (async () => {
        if (!collections) {
          try {
            const data = await api.get("collection");

            if (data.data) {
              setCollections(data.data);
              setLoading(false);
            }
          } catch (error) {
            setIsError(true);
          }
        }
      })();
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    localStorage.setItem("collections", JSON.stringify(collections));
  }, [collections]);

  return (
    <CollectionContext.Provider value={{ collections, isError, isloading }}>
      {children}
    </CollectionContext.Provider>
  );
};
