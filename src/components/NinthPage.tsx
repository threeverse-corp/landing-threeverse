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
            Icon={feature.icon}
            key={feature.title}
          />
        ))}
      </section>
    </div>
  );
};
