import styles from "./ServicePage.module.css";
import { ServicePage } from "./ServicePage";
import StrategyIcon from "../assets/icons/strategy-icon.svg";

export const SixthPage = () => {
  return (
    <ServicePage
      id="strategy"
      title="ESTRATEGIA"
      subtitle={
        <>
          Diseñamos el plan que convierte estructura en{" "}
          <span className={styles.highlight}>crecimiento</span>
        </>
      }
      image={StrategyIcon.src}
      features={[
        "Publicidad digital",
        "Consultoría",
        "Optimización",
        "Escalabilidad",
      ]}
      variant="textRight"
      backgroundImage="/src/assets/images/background-page4.svg"
    />
  );
};
