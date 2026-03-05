import LogoIcon from "../assets/icons/logo-icon.svg";
import styles from "./FirstPage.module.css";
import Button from "../ui/button/Button";

export const FirstPage = () => {
  return (
    <div className={styles.wrapper} id="hero">
      <img src={LogoIcon.src} className={styles.logo} loading="lazy" />
      <h2 className={styles.title}>
        Desarrollo, diseño y estrategia en un solo universo
      </h2>
      <Button
        customClass={styles.button}
        text="AGENDAR UNA REUNIÓN"
        variant="primary"
        onClick={() => {
          console.log("agendando");
        }}
      />
    </div>
  );
};
