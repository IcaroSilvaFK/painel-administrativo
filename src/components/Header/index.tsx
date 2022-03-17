import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsPlusLg } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import { useModal } from "../../hooks/useModal";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  const { handleOpenModal } = useModal();

  return (
    <header className={styles.container}>
      <div>
        <Image
          src="/assets/logo.svg"
          alt="Duas pessoas colaborando no trabalho"
          width={120}
          height={120}
        />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="">
              <a>
                <AiFillHome size={16} />
                Home
              </a>
            </Link>
          </li>
          <li>
            <button>
              <a onClick={handleOpenModal}>
                <BsPlusLg size={13} />
                Criar
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
