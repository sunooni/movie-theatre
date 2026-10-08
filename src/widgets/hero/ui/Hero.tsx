import { usePopularMovies } from "../model/usePopularMovies";
import styles from "./Hero.module.css";
import { HeroText } from "./HeroText";
import { lazy, Suspense } from "react";
import { HeroSliderSkeleton } from "./HeroSliderSkeleton";

const HeroSlider = lazy(() =>
  import("./HeroSlider").then((module) => ({
    default: module.HeroSlider,
  })),
);
export const Hero = () => {
  const { movies, loading } = usePopularMovies();

  return (
    <section className={styles.heroSection}>
      <HeroText />

      {loading ? (
        <HeroSliderSkeleton />
      ) : (
        <Suspense fallback={<HeroSliderSkeleton />}>
          <HeroSlider movies={movies} />
        </Suspense>
      )}
    </section>
  );
};
