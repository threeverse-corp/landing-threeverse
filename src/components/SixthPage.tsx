import styles from "./ServicePage.module.css";
import { ServicePage } from "./ServicePage";
import { StrategyIcon } from "../assets/icons/StrategyIcon";

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
      Image={StrategyIcon}
      features={[
        "Publicidad digital",
        "Consultoría",
        "Optimización",
        "Escalabilidad",
      ]}
      variant="textRight"
    />
  );
};
