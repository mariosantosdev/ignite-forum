import { PencilLine } from "phosphor-react";

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
        <img src="https://github.com/mariosantosdev.png" alt="Mário Santos" />
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
