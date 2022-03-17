import axios from "axios";

export interface IDataProps {
  title: string;
  description: string;
}

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

export async function postCollection(data: IDataProps) {
  try {
    api.post("collection", data);
    return true;
  } catch (error) {
    throw new Error(
      "Inflezmente Não conseguimos fazer a inserção da nova Collection" + error
    );
  }
}
