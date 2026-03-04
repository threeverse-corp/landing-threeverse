import LottieAnimation from "./LottieAnimation";
import styles from "./ServicePage.module.css";

type Props = {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  features: string[];
  lottieSrc?: string;
  imageSrc?: string;
  variant?: "textRight" | "textLeft";
  backgroundImage?: string;
};

export const ServicePage = ({
  id,
  title,
  subtitle,
  features,
  lottieSrc,
  imageSrc,
  variant = "textRight",
  backgroundImage,
}: Props) => {
  return (
    <div
      id={id}
      className={`${styles.wrapper} ${styles[variant]}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {lottieSrc && <LottieAnimation src={lottieSrc} className={styles.animation} />}
      {imageSrc && <img src={imageSrc} className={styles.animation} />}

      <div className={styles.textContent}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.features}>
          {features.map((f) => (
            <p key={f}>{f}</p>
          ))}
        </div>
      </div>
    </div>
  );
};