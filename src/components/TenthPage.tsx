import styles from "./TenthPage.module.css";

import Semicircle from "../assets/images/semicircle.svg";
import { RingImage } from "../assets/images/RingImage.tsx";
import Button from "../ui/button/Button";
import handleWhatsAppCLick from "../utils/whatsapp.ts";

export const TenthPage = () => {
  return (
    <div id="contact" className={styles.wrapper}>
      <img src={Semicircle.src} className={styles.planet} alt="planet" />
      <RingImage className={styles.ring} alt="orbit" />
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
          text="SOLICITA UNA COTIZACIÓN"
          variant="primary"
          onClick={handleWhatsAppCLick}
        />
      </div>
    </div>
  );
};
