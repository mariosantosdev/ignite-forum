import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://picsum.photos/500/350"
        alt="Imagem de capa"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/mariosantosdev.png" />
        <strong>Mário Santos</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
