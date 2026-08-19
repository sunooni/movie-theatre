import { usePopularMovies } from "../model/usePopularMovies";
import styles from "./Hero.module.css";
import { HeroText } from "./HeroText";
import { HeroSlider } from "./HeroSlider";
import { HeroSliderSkeleton } from "./HeroSliderSkeleton";

export const Hero = () => {
  const { movies, loading } = usePopularMovies();

  return (
    <section className={styles.heroSection}>
      <HeroText />

      {loading ? <HeroSliderSkeleton /> : <HeroSlider movies={movies} />}
    </section>
  );
};
