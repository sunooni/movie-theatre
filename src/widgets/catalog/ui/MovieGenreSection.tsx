import { useMoviesByGenre } from "../model/useMoviesByGenre";
import styles from "./catalog.module.css";
import { MovieSlider } from "./MovieSlider";
import { MovieSliderSkeleton } from "./MovieSliderSkeleton";

interface MovieGenreSectionProps {
  title: string;
  genreId: string;
}

export const MovieGenreSection = ({ title, genreId }: MovieGenreSectionProps) => {
  const { movies, loading } = useMoviesByGenre(genreId);

  return (
    <section>
      <h3 className={styles.genreName}>{title}</h3>

      {loading ? <MovieSliderSkeleton /> : <MovieSlider movies={movies} />}
    </section>
  );
};
