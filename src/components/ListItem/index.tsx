import { FC } from "react";
import { MdDeleteOutline, MdReviews } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";

import styles from "./styles.module.scss";

interface IListItemProps {
  title: string;
}

export const ListItem: FC<IListItemProps> = ({ title }) => {
  return (
    <li className={styles.container}>
      <MdReviews color="#171923" />
      <div className={styles.containerText}>
        <strong>{title}</strong>
      </div>
      <div className={styles.containerButtons}>
        <button>
          <AiOutlineEdit color="#171923" size={20} />
        </button>
        <button>
          <MdDeleteOutline color="#c53030" size={20} />
        </button>
      </div>
      <div className={styles.containerView}>
        <button>
          <GrFormView color="#38bb78" size={20} />
        </button>
      </div>
    </li>
  );
};
