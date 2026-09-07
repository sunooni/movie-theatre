import { MovieSlider } from "@/widgets/catalog/ui/MovieSlider";
import { useMovieDetails } from "../model/useMovieDetails";
import styles from "./movieInfo.module.css";


export const SimilarMovies = () => {
  const { similarMovies, loading } = useMovieDetails();

  if (loading) {
    return <div>Загрузка...</div>;
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