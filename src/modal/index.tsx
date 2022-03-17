import { FC } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { v4 as isUuid } from "uuid";
import { yupResolver } from "@hookform/resolvers/yup";

import { useModal } from "../hooks/useModal";
import { Input } from "../components/Input";
import { useCollection } from "../hooks/useCollection";
import { schema } from "../schemas/collection";

import styles from "./styles.module.scss";
interface ImodalProps {
  title: string;
  description: string;
}

export const Modal: FC = () => {
  const { handleAddNewCollection } = useCollection();
  const { modalIsOpen, handleCloseModal } = useModal();
  const props = useForm<ImodalProps>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ImodalProps> = async (data) => {
    const newCollection = {
      title: data.title,
      description: data.description,
      id: isUuid(),
    };
    handleAddNewCollection(newCollection);
    props.reset();
  };

  return modalIsOpen ? (
    <div className={styles.container}>
      <main>
        <div className={styles.containerClose} onClick={handleCloseModal}>
          <IoMdClose color="#fff" size={20} />
        </div>
        <FormProvider {...props}>
          <form
            onSubmit={props.handleSubmit(onSubmit)}
            className={styles.containerForm}
          >
            <Input
              name="title"
              placeholder="Digite aqui o titulo"
              type="text"
              label="Titulo"
            />
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              cols={30}
              rows={10}
              {...props.register("description")}
              placeholder="Adicione aqui uma descrição"
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </FormProvider>
      </main>
    </div>
  ) : (
    <></>
  );
};
