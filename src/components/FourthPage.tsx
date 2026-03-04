import styles from "./ServicePage.module.css";
import { ServicePage } from "./ServicePage";
export const FourthPage = () => {
  return (
  <ServicePage
    id="development"
    title="DESARROLLO"
    subtitle={<>Creamos la infraestructura que sostiene tu <span className={styles.highlight}>crecimiento</span></>}
    lottieSrc="/animations/page-4.lottie"
    features={["Software a medida","Automatizaciones","Plataformas internas","Sistemas escalables"]}
    variant="textRight"
    backgroundImage="/src/assets/images/background-page4.svg"
  />
  );
};
