import React from "react";

import styles from "./styles.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Logo Ignite Forum" />
    </header>
  );
};
