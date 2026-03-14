import styles from "./ServicePage.module.css";
import { ServicePage } from "./ServicePage";
import DevelopmentImage from "../assets/images/development.svg";
export const FourthPage = () => {
  return (
    <ServicePage
      id="development"
      title="DESARROLLO"
      subtitle={
        <>
          Creamos la infraestructura que sostiene tu{" "}
          <span className={styles.highlight}>crecimiento</span>
        </>
      }
      Image={DevelopmentImage.src}
      features={[
        "Software a medida",
        "Automatizaciones",
        "Plataformas internas",
        "Sistemas escalables",
      ]}
      variant="textRight"
      backgroundImage="/src/assets/images/background-page4.svg"
    />
  );
};
