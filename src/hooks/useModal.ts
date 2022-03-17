import { useContext } from "react";

import { ModalContext } from "../context/modalContext";

export function useModal() {
  const data = useContext(ModalContext);

  return data;
}
