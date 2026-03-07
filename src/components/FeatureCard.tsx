import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.description}>{description}</h3>
      <img src={icon} loading="lazy" className={styles.icon} />
    </div>
  );
};
