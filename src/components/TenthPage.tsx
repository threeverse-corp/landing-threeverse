import styles from "./TenthPage.module.css";

import Semicircle from "../assets/images/semicircle.svg";
import Ring from "../assets/images/ring.svg";
import Button from "../ui/button/Button";

export const TenthPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Semicircle.src} className={styles.planet} alt="planet" />
      <img src={Ring.src} className={styles.ring} alt="orbit" />
      <div className={styles.content}>
        <h1 className={styles.title}>
          EL CRECIMIENTO NO ES CASUAL
          <br />
          ES <span className={styles.highlight}>ESTRATÉGICO</span>
        </h1>
        <p className={styles.subtitle}>
          Diseñemos el sistema que tu negocio necesita
        </p>
        <Button
          customClass={styles.button}
          text="Agendar diagnóstico estratégico"
          variant="primary"
          onClick={() => {
            console.log("agendando diagnóstico");
          }}
        />
      </div>
    </div>
  );
};
