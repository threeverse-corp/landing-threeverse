import LottieAnimation from "./LottieAnimation";
import styles from "./ThirdPage.module.css";
export const ThirdPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/src/assets/images/page-4.svg" className={styles.image} />
      <h1 className={styles.title}>
        El <span className={styles.highlight}>crecimiento</span> real ocurre cuando <span className={styles.highlight}>tres</span> fuerzas trabajan juntas
      </h1>
    </div>
  );
};
