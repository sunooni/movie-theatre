import { MovieSlider } from "@/widgets/catalog/ui/MovieSlider";
import { useMovieDetails } from "../model/useMovieDetails";
import styles from "./movieInfo.module.css";
import { SimilarMoviesSkeleton } from "./SimilarMoviesSkeleton";

export const SimilarMovies = () => {
  const { similarMovies, loading } = useMovieDetails();

  if (loading) {
    return <SimilarMoviesSkeleton />;
  }

  if (!similarMovies.length) {
    return null;
  }

  return (
    <>
      <h2 className={styles.titleSimilarMovies}>Похожие фильмы</h2>

      <MovieSlider movies={similarMovies} />
    </>
  );
};
