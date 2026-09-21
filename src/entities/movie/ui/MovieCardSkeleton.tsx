import { Skeleton } from "@/shared/ui/skeleton/Skeleton";

import styles from "./MovieCardSkeleton.module.css";

type MovieCardSkeletonVariant = "long" | "wide";

type MovieCardSkeletonProps = {
  variant?: MovieCardSkeletonVariant;
  className?: string;
};

export const MovieCardSkeleton = ({ variant = "long", className }: MovieCardSkeletonProps) => {
  return <Skeleton className={`${styles[variant]} ${className || ""}`} />;
};
