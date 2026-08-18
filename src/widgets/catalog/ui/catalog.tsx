import { MovieGenreSection } from "./MovieGenreSection";
import styles from "./catalog.module.css";

export const Catalog = () => {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.catalogHeader}>Каталог фильмов и сериалов</div>
      <MovieGenreSection title="Комедии" genreId="35" />

      <MovieGenreSection title="Боевики" genreId="28" />

      <MovieGenreSection title="Драмы" genreId="18" />

      <MovieGenreSection title="Ужасы" genreId="27" />

      <MovieGenreSection title="Романтика" genreId="10749" />
    </section>
  );
};
