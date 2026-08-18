import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import styles from "./MovieCard.module.css";

type MovieCardVariant = "long" | "wide";

type MovieCardProps = ComponentPropsWithoutRef<"div"> & {
  title?: string;
  posterPath?: string | null;
  variant?: MovieCardVariant;
};

export const MovieCard = ({
  title,
  posterPath,
  variant = "long",
  className,
  ...props
}: MovieCardProps) => {
  const imageUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const cardClasses = clsx(styles.card, styles[variant], className);

  return (
    <div className={cardClasses} {...props}>
      <img src={imageUrl} alt={title || "Movie poster"} className={styles.poster} />
    </div>
  );
};
