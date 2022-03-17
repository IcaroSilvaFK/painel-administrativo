import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsPlusLg } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

import styles from "./styles.module.scss";

export const Header: FC = () => {
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
            <Link href="">
              <a>
                <BsPlusLg size={13} />
                Criar
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
