import React from "react";
import { useQuery } from "react-query";
import { api } from "../services/axios";

interface ICollectionProps {
  title: string;
  id: string;
}

export function QueryResult() {
  const { data, error, isFetching } = useQuery<ICollectionProps[]>(
    "collections",
    async () => {
      const response = await api.get("collection");
      return response.data;
    }
  );

  return { data, error, isFetching };
}
