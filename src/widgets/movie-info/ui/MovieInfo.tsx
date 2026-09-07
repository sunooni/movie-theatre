import { getMoviePosterUrl } from "@/shared/utils/imageUrl";
import { useMovieDetails } from "@/widgets/movie-info/model/useMovieDetails";

import styles from "./movieInfo.module.css";
import { Button } from "@/shared/ui/button/Button";
import { FavoriteButton } from "@/features/favorite/ui/favoriteButton";

export const MovieInfo = () => {
  const { movie, credits, loading } = useMovieDetails();

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  const director = credits?.crew?.find(
    (person: any) => person.job === "Director",
  );

  return (
    <div className={styles.posterWithDetails}>
      <div className={styles.poster}>
        <img src={getMoviePosterUrl(movie.poster_path)} alt={movie.title} />
      </div>

      <div className={styles.description}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.buttons}>
          <Button variant="primary" size="large">
            Смотреть фильм
          </Button>
          <Button variant="tertiary" size="medium">
            Трейлер
          </Button>

          <FavoriteButton movieId={movie.id} />
        </div>

        <div className={styles.other}>
          <p className={styles.overview}>{movie.overview}</p>

          <p className={styles.rate}>
            Рейтинг: {movie.vote_average?.toFixed(1)}
          </p>

          <p className={styles.releaseDate}>
            Дата выхода: {movie.release_date}
          </p>

          <p className={styles.genres}>
            Жанры: {movie.genres?.map((genre: any) => genre.name).join(", ")}
          </p>

          <p>
            Страна:{" "}
            {movie.production_countries
              ?.map((country: any) => country.name)
              .join(", ")}
          </p>

          <p>Режиссёр: {director?.name}</p>

          <p>
            Языки:{" "}
            {movie.spoken_languages
              ?.map((language: any) => language.name)
              .join(", ")}
          </p>

          <p>Время: {movie.runtime} мин</p>
        </div>
      </div>
    </div>
  );
};
