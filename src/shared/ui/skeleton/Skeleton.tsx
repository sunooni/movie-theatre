import type { ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

import styles from "./Skeleton.module.css";

type SkeletonProps = ComponentPropsWithoutRef<"div">;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return <div className={clsx(styles.skeleton, className)} {...props} />;
};
