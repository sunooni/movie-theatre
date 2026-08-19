import type { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import styles from "./MovieCard.module.css";
import { getMoviePosterUrl } from "@/shared/utils/imageUrl";

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
  const imageUrl = getMoviePosterUrl(posterPath);

  const cardClasses = clsx(styles.card, styles[variant], className);

  return (
    <div className={cardClasses} {...props}>
      <img src={imageUrl} alt={title || "Movie poster"} className={styles.poster} />
    </div>
  );
};
