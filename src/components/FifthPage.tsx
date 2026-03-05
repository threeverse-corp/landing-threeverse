import styles from "./ServicePage.module.css";
import { ServicePage } from "./ServicePage";
import Image from "../assets/images/design.svg"
export const FifthPage = () => {
  return (
  <ServicePage
    id="design"
    title="DISEÑO"
    subtitle={<>Diseñamos <span className={styles.highlight}>la identidad</span> que conecta y posiciona </>}
    image={Image}
    features={["Logos","Branding","Identidad Visual","Diseño de interfaces","Landings de alto impacto"]}
    variant="textLeft"
    backgroundImage="/src/assets/images/background-page5.svg"
  />
  );
};
