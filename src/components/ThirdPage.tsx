import LottieAnimation from "./LottieAnimation";
import styles from "./ThirdPage.module.css";
export const ThirdPage = () => {
  return (
    <div className={styles.wrapper}>
      <LottieAnimation src="/animations/page-3.lottie" className={styles.animation} />
      <h1 className={styles.title}>
        El <span className={styles.highlight}>crecimiento</span> real ocurre cuando <span className={styles.highlight}>tres</span> fuerzas trabajan juntas
      </h1>
    </div>
  );
};
