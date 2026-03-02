import LottieAnimation from "./LottieAnimation";
import styles from "./FourthPage.module.css";
export const FourthPage = () => {
  return (
    <div id="development" className={styles.wrapper}>
      <LottieAnimation src="/animations/page-4.lottie" className={styles.animation} />
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          DESARROLLO
        </h1>
        <p className={styles.subtitle}>
          Creamos la infraestructura que sostiene tu <span className={styles.highlight}>crecimiento</span>
        </p>
        <div className={styles.features}>
          <p>Software a medida </p>
          <p>Automatizaciones</p>
          <p>Plataformas internas </p>
          <p>Sistemas escalables </p>
        </div>
      </div>
    </div>
  );
};
