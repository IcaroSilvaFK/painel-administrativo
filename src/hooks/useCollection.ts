import { useContext } from "react";

import { CollectionContext } from "../context/collectionContext";

export function useCollection() {
  const data = useContext(CollectionContext);

  return data;
}
