import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { MovieCard } from "@/entities/movie/ui/MovieCard";

import { useFavorites } from "../model/useFavorites";

import styles from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
  const { movies } = useFavorites();

  return (
    <>
      <Header />

      <main className={styles.page}>
        <h1 className={styles.title}>Избранное</h1>

        {movies.length === 0 ? (
          <p className={styles.empty}>В избранном пока нет фильмов</p>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};
