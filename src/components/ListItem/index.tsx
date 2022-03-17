import { FC } from "react";
import { MdDeleteOutline, MdReviews } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";

interface IListItemProps {
  title: string;
}

export const ListItem: FC<IListItemProps> = ({ title }) => {
  return (
    <li>
      <MdReviews color="#171923" />
      <div>
        <strong>{title}</strong>
      </div>
      <div>
        <button>
          <AiOutlineEdit color="#171923" />
        </button>
        <button>
          <MdDeleteOutline color="#c53030" />
        </button>
      </div>
      <div>
        <button>
          <GrFormView color="#38bb78" />
        </button>
      </div>
    </li>
  );
};
