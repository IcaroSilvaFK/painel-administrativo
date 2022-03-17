import { FC, createContext, useState, useEffect } from "react";

interface IModalContextProps {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
}

export const ModalContext = createContext<IModalContextProps>(
  {} as IModalContextProps
);

export const ModalContextProvider: FC = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (key) => {
      if (key.key === "Escape") setModalIsOpen(false);
    });
  }, []);
  function handleCloseModal() {
    setModalIsOpen(false);
  }
  function handleOpenModal() {
    setModalIsOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{ handleCloseModal, modalIsOpen, handleOpenModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
