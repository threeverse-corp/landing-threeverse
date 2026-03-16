import styles from "./ServicePage.module.css";
import type { ElementType } from "react";

type Props = {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  features: string[];
  Image: ElementType | string;
  variant?: "textRight" | "textLeft";
  backgroundImage?: string;
};

export const ServicePage = ({
  id,
  title,
  subtitle,
  features,
  Image,
  variant = "textRight",
  backgroundImage,
}: Props) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${styles.wrapper} ${styles[variant]}`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {typeof Image === "string" ? (
        <img
          src={Image}
          className={styles.image}
          alt={`Ilustración de servicio: ${title}`}
        />
      ) : (
        <Image className={styles.image} />
      )}
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.features}>
          {features.map((f) => (
            <p key={f}>{f}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
