import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import styles from "./MovieCardSkeleton.module.css";

type MovieCardSkeletonVariant = "long" | "wide";

type MovieCardSkeletonProps = ComponentPropsWithoutRef<"div"> & {
  variant?: MovieCardSkeletonVariant;
};

export const MovieCardSkeleton = ({
  variant = "long",
  className,
  ...props
}: MovieCardSkeletonProps) => {
  const skeletonClasses = clsx(styles.skeleton, styles[variant], className);

  return <div className={skeletonClasses} {...props} />;
};
