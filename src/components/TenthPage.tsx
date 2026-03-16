import styles from "./TenthPage.module.css";

import Semicircle from "../assets/images/semicircle.svg";
import Button from "../ui/button/Button";
import handleWhatsAppCLick from "../utils/whatsapp.ts";
import Ring from "../assets/images/ring.svg";

export const TenthPage = () => {
  return (
    <section id="contact" className={styles.wrapper}>
      <img
        src={Semicircle.src}
        className={styles.planet}
        alt="planet"
        aria-hidden="true"
      />
      <img
        src={Ring.src}
        className={styles.ring}
        alt="orbit"
        aria-hidden="true"
      />
      <div className={styles.content}>
        <h2 className={styles.title} id="contact-title">
          EL CRECIMIENTO NO ES CASUAL
          <br />
          ES <span className={styles.highlight}>ESTRATÉGICO</span>
        </h2>
        <p className={styles.subtitle}>
          Diseñemos el sistema que tu negocio necesita
        </p>
        <Button
          customClass={styles.button}
          text="SOLICITA UNA COTIZACIÓN"
          variant="primary"
          onClick={handleWhatsAppCLick}
          ariaLabel="Solicitar cotización por WhatsApp (abre en una nueva ventana)"
        />
      </div>
    </section>
  );
};
