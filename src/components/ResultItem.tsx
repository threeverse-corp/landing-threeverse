import styles from "./ResultItem.module.css";

type Props = {
  planet: string;
  title: string;
  textStart?: string;
  highlight: string;
  textEnd?: string;
  align?: "left" | "right";
};

export default function ResultItem({
  planet,
  title,
  textStart,
  highlight,
  textEnd,
  align = "left",
}: Props) {
  return (
    <div className={`${styles.resultItem} ${align === "right" ? styles.right : ""}`}>
      <img
        src={planet} className={styles.planet}
      />

      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p>
          {textStart}
          <span className={styles.highlight}>{highlight}</span>
          {textEnd}
        </p>
      </div>
    </div>
  );
}