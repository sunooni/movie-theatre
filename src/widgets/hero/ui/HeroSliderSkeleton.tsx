import { MovieCardSkeleton } from "@/entities/movie/ui/MovieCardSkeleton";

import styles from "./Hero.module.css";

export const HeroSliderSkeleton = () => {
  return (
    <div className={styles.skeletonSlider}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className={styles.skeletonSlide} key={index}>
          <MovieCardSkeleton />
        </div>
      ))}
    </div>
  );
};
