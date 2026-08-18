import { useEffect, useState } from "react";
import { getMoviesByGenre } from "@/shared/api/movies";
import type { DiscoverMovie200ResultsItem } from "@/shared/api/generated/model/discoverMovie200ResultsItem";
import { MovieSlider } from "./MovieSlider";
import styles from "./catalog.module.css";

interface MovieGenreSectionProps {
  title: string;
  genreId: string;
}

export const MovieGenreSection = ({ title, genreId }: MovieGenreSectionProps) => {
  const [movies, setMovies] = useState<DiscoverMovie200ResultsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoviesByGenre(genreId)
      .then(setMovies)
      .finally(() => setLoading(false));
  }, [genreId]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <section>
      <h3 className={styles.genreName}>{title}</h3>

      <MovieSlider movies={movies} />
    </section>
  );
};
