import styles from "./ThirdPage.module.css";
import ImagePage4 from "../assets/images/page-4.svg";

export const ThirdPage = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src={ImagePage4.src}
        className={styles.image}
        alt="Ilustración representativa de la sinergia empresarial"
        aria-hidden="false"
      />
      <h2 className={styles.title} id="third-page-title">
        El <span className={styles.highlight}>crecimiento</span> real ocurre
        cuando <span className={styles.highlight}>tres</span> fuerzas trabajan
        juntas
      </h2>
    </div>
  );
};
