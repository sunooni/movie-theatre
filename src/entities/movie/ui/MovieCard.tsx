import clsx from "clsx";
import styles from "./MovieCard.module.css";
import { getMoviePosterUrl } from "@/shared/utils/imageUrl";
import { Link } from "react-router-dom";

type MovieCardVariant = "long" | "wide";

type MovieCardProps = {
  id: number | string;
  title?: string;
  posterPath?: string | null;
  variant?: MovieCardVariant;
  rating?: number;
  type?: "movie" | "series";
  genres?: string[];
  showInfo?: boolean;
  className?: string; 
};

export const MovieCard = ({
  id,
  title,
  posterPath,
  variant = "long",
  rating,
  type,
  genres,
  className,
  showInfo = false,
}: MovieCardProps) => {
  const imageUrl = getMoviePosterUrl(posterPath);

  const cardClasses = clsx(styles.card, styles[variant], className);

  return (
    <Link to={`/movie/${id}`} className={cardClasses}>
      <img src={imageUrl} alt={title || "Movie poster"} className={styles.poster} />

      {showInfo && (
        <div className={styles.info}>
          <div className={styles.rating}>★ {rating?.toFixed(1)}</div>

          <div className={styles.type}>{type}</div>

          <div className={styles.genres}>{genres?.join(", ")}</div>

          <div className={styles.title}>{title}</div>
        </div>
      )}
    </Link>
  );
};