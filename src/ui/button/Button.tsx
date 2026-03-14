import type { ElementType } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  Icon?: ElementType;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "icon";
  disabled?: boolean;
  customClass?: string;
  id?: string;
  action?: string;
}

export default function Button({
  text,
  Icon,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  customClass = "",
  id,
  action,
}: ButtonProps) {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-action={action}
      className={`${styles.btn} ${styles[variant]} ${customClass}`}
    >
      {Icon  && (
        <Icon className={styles.iconElement} />
      )}
      {text && <span>{text}</span>}
    </button>
  );
}
