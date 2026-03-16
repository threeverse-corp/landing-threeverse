import styles from "./SecondPage.module.css";
import LineHighlight from "../assets/images/line-highlight.svg";

export const SecondPage = () => {
  return (
    <section className={styles.secondPageWrapper}>
      <h2 className={styles.title} id="second-page-title">
        Muchas empresas crecen… <br />
        pero su <span className={styles.highlight}>ecosistema digital </span>no
      </h2>
      <div className={styles.containerSubtitle}>
        <p className={styles.subtitle}>y eso frena su evolución</p>
        <img
          src={LineHighlight.src}
          className={styles.lineHighlight}
          aria-hidden="true"
          alt="line-highlight"
        />
      </div>
      <ul className={styles.painCloud}>
        <li className={`${styles.pain} ${styles.p1}`}>
          Una marca que nadie recuerda
        </li>
        <li className={`${styles.pain} ${styles.p2}`}>
          Sistemas desconectados
        </li>
        <li className={`${styles.pain} ${styles.p3}`}>
          Publicidad sin estrategia
        </li>
        <li className={`${styles.pain} ${styles.p4}`}>
          Tecnología que no escala
        </li>
      </ul>
    </section>
  );
};
