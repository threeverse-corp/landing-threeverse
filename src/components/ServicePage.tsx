import styles from "./ServicePage.module.css";

type Props = {
  id: string;
  title: string;
  subtitle: React.ReactNode;
  features: string[];
  image: ImageMetadata;
  variant?: "textRight" | "textLeft";
  backgroundImage?: string;
};

export const ServicePage = ({
  id,
  title,
  subtitle,
  features,
  image,
  variant = "textRight",
  backgroundImage,
}: Props) => {
  return (
    <div
      id={id}
      className={`${styles.wrapper} ${styles[variant]}`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <img src={image.src} className={styles.image} />

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
