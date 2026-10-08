import { MovieCardSkeleton } from "@/entities/movie/ui/MovieCardSkeleton";

import styles from "./catalog.module.css";

export const MovieSliderSkeleton = () => {
  return (
    <div className={styles.skeletonSlider}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div className={styles.skeletonSlide} key={index}>
          <MovieCardSkeleton variant="wide" />
        </div>
      ))}
    </div>
  );
};
