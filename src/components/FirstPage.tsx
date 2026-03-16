import { LogoIcon } from "../assets/icons/LogoIcon.tsx";
import styles from "./FirstPage.module.css";
import Button from "../ui/button/Button";
import handleWhatsAppClick from "../utils/whatsapp.ts";

export const FirstPage = () => {
  return (
    <section className={styles.wrapper} id="hero">
      <LogoIcon className={styles.logo} />
      <h1 className={styles.title}>
        Desarrollo, diseño y estrategia en un solo universo
      </h1>
      <Button
        customClass={styles.button}
        text="SOLICITA UNA COTIZACIÓN"
        variant="primary"
        onClick={handleWhatsAppClick}
        ariaLabel="Solicitar cotización por WhatsApp (abre en una nueva ventana)"
      />
    </section>
  );
};
