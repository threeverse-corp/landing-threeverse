import styles from "./FeatureCard.module.css";
import type { ElementType } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: ElementType;
}

export const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.description}>{description}</h3>
      <Icon className={styles.icon} />
    </div>
  );
};
