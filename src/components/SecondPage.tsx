import styles from "./SecondPage.module.css";
import LineHighlight from "../assets/images/line-highlight.svg";
export const SecondPage = () => {
  return (
    <div className={styles.secondPageWrapper}>
      <h1 className={styles.title}>
        Muchas empresas crecen… <br/>
        pero su <span className={styles.highlight}>ecosistema digital </span>no
      </h1>
      <div className={styles.containerSubtitle}>
        <h3 className={styles.subtitle}>y eso frena su evolución</h3>
        <img src={LineHighlight.src} className={styles.lineHighlight}/>
      </div>
      <div className={styles.painCloud}>
        <p className={`${styles.pain} ${styles.p1}`}>Una marca que nadie recuerda</p>
        <p className={`${styles.pain} ${styles.p2}`}>Sistemas desconectados</p>
        <p className={`${styles.pain} ${styles.p3}`}>Publicidad sin estrategia</p>
        <p className={`${styles.pain} ${styles.p4}`}>Tecnología que no escala</p>
      </div>
    </div>
  );
};
