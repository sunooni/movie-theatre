import { useMovieDetails } from "@/widgets/movie-info/model/useMovieDetails";

import styles from "./movieinfo.module.css";

export const MovieCast = () => {
  const { credits, loading } = useMovieDetails();

  if (loading) {
    return <div>Загрузка актёров...</div>;
  }

  return (
    <section className={styles.cast}>
      <h2 className={styles.title}>Актёрский состав</h2>

      <div className={styles.list}>
        {credits?.cast?.map((actor: any) => (
          <div className={styles.actor} key={actor.id}>
            {actor.profile_path && (
              <img
                className={styles.photo}
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
              />
            )}

            <h3 className={styles.name}>{actor.name}</h3>

            <p className={styles.character}>{actor.character}</p>
          </div>
        ))}
      </div>
    </section>
  );
};