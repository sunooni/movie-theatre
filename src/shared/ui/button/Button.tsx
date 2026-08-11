import type { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";
import clsx from "clsx";

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
  const buttonClasses = clsx(styles.button, styles[variant], styles[size], className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
