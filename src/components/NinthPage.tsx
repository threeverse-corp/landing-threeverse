import { FeatureCard } from "./FeatureCard";
import styles from "./NinthPage.module.css";
import { GrowthStatsIcon } from "../assets/icons/GrowthStatsIcon";
import { ShakeHandsIcon } from "../assets/icons/ShakeHandsIcon";
import { PeopleChattingIcon } from "../assets/icons/PeopleChatingIcon";

const FeaturesConfig = [
  {
    title: "Te explicamos cada etapa del proyecto antes de avanzar",
    description: "Sin costos ocultos. Sin sorpresas",
    icon: PeopleChattingIcon,
  },
  {
    title: "Estarás en contacto con nosotros durante todo el proceso",
    description: "Respondemos, escuchamos y ajustamos cuando sea necesario",
    icon: ShakeHandsIcon,
  },
  {
    title: "Nuestro objetivo no es entregar solo un diseño bonito",
    description: "Es ayudarte a crecer de forma sostenible",
    icon: GrowthStatsIcon,
  },
];

export const NinthPage = () => {
  return (
    <section id="pledge" className={styles.wrapper}>
      <h2 className={styles.title}>
        Nuestro <span className={styles.titleSecondary}>compromiso</span> con tu
        negocio
      </h2>
      <p className={styles.description}>
        Cuando trabajas con nosotros, puedes esperar claridad, acompañamiento y
        estructura.
      </p>
      <ul className={styles.features}>
        {FeaturesConfig.map((feature) => (
          <li key={feature.title} className={styles.featureItem}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
