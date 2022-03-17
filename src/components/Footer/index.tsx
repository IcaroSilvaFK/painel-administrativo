import { FC } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

import { BsPlus } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <div>
        <strong>
          Painel administrativo
          <em>Produced by Icaro Vieira</em>
        </strong>
        <span> &copy;Lorem ipsum dolor sit amet.</span>
      </div>
      <nav className={styles.navigationFooter}>
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
            <Link href="">
              <a>
                <BsPlus size={20} />
                Criar
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
