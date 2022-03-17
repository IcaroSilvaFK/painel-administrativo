import { useContext } from "react";

import { collectionContext } from "../context/collectionContext";

export function useCollection() {
  const data = useContext(collectionContext);

  return data;
}
