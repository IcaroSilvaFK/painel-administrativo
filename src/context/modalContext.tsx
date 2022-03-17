import { FC, createContext, useState } from "react";

interface IModalContextProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const ModalContext = createContext<IModalContextProps>(
  {} as IModalContextProps
);

export const ModalContextProvider: FC = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }
  function openModal() {
    setModalIsOpen(true);
  }
  return (
    <ModalContext.Provider value={{ closeModal, modalIsOpen, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
