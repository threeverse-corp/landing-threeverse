import styles from "./StepItem.module.css";

type Props = {
  number: number;
  title: string;
  textStar?: string;
  textEnd?: string;
  textHighlight: string;
  offset: number;
};

export default function StepItem({
  number,
  title,
  textStar,
  textHighlight,
  textEnd,
  offset = 0,
}: Props) {
  return (
    <div
      className={styles.step}
      style={{ transform: `translateX(${offset}px)` }}
    >
      <div className={styles.stepNumber}>
        <p className={styles.number}>{number}</p>
      </div>

      <div className={styles.line} />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>
          {textStar}
          <span className={styles.highlight}>{textHighlight}</span>
          {textEnd}
        </p>
      </div>
    </div>
  );
}

