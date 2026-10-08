import { lazy, Suspense } from "react";

import { useMoviesByGenre } from "../model/useMoviesByGenre";
import styles from "./catalog.module.css";
import { MovieSliderSkeleton } from "./MovieSliderSkeleton";

const MovieSlider = lazy(() =>
  import("./MovieSlider").then((module) => ({
    default: module.MovieSlider,
  })),
);

interface MovieGenreSectionProps {
  title: string;
  genreId: string;
}

export const MovieGenreSection = ({ title, genreId }: MovieGenreSectionProps) => {
  const { movies, loading } = useMoviesByGenre(genreId);

  return (
    <section>
      <h3 className={styles.genreName}>{title}</h3>

      {loading ? (
        <MovieSliderSkeleton />
      ) : (
        <Suspense fallback={<MovieSliderSkeleton />}>
          <MovieSlider movies={movies} />
        </Suspense>
      )}
    </section>
  );
};
