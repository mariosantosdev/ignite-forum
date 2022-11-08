import styles from "./styles.module.css";

interface PostProps {
  author: string;
  content: string;
}

export const Post: React.FC<PostProps> = ({ author, content }) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/mariosantosdev.png"
            alt="Mário Santos"
          />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="04 de Setembro" dateTime="2022-09-04 00:00:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        {content.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};
