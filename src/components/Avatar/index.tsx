import styles from "./styles.module.css";

export interface AvatarProps {
  src: string;
  alt?: string;
  hasBorder?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  hasBorder = true,
}) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
};
