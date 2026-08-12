import type { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
};

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
