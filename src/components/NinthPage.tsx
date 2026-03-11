import { FeatureCard } from "./FeatureCard";
import PeopleChattingIcon from "../assets/icons/people-chating.svg";
import ShakeHandsIcon from "../assets/icons/shake-hands.svg";
import GrowthStatsIcon from "../assets/icons/growth-stats.svg";
import styles from "./NinthPage.module.css";

const FeaturesConfig = [
  {
    title: "Te explicamos cada etapa del proyecto antes de avanzar",
    description: "Sin costos ocultos. Sin sorpresas",
    icon: PeopleChattingIcon.src,
  },
  {
    title: "Estarás en contacto con nosotros durante todo el proceso",
    description: "Respondemos, escuchamos y ajustamos cuando sea necesario",
    icon: ShakeHandsIcon.src,
  },
  {
    title: "Nuestro objetivo no es entregar solo un diseño bonito",
    description: "Es ayudarte a crecer de forma sostenible",
    icon: GrowthStatsIcon.src,
  },
];

export const NinthPage = () => {
  return (
    <div id="pledge" className={styles.wrapper}>
      <div className={styles.title}>
        Nuestro <span className={styles.titleSecondary}>compromiso</span> con tu
        negocio
      </div>
      <h3 className={styles.description}>
        Cuando trabajas con nosotros, puedes esperar claridad, acompañamiento y
        estructura.
      </h3>
      <section className={styles.features}>
        {FeaturesConfig.map((feature) => (
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            key={feature.title}
          />
        ))}
      </section>
    </div>
  );
};
