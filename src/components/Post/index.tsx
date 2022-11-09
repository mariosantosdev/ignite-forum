import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
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
          <Avatar
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

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea cols={30} rows={10} placeholder="O que você está pensando?" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
