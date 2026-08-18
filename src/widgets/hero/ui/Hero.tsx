import { useEffect, useState } from "react";
import { getTmdbApi } from "@/shared/api/generated/endpoints";
import type { MoviePopularList200ResultsItem } from "@/shared/api/generated/model/moviePopularList200ResultsItem";

import { HeroSlider } from "./HeroSlider";
import { HeroText } from "./HeroText";
import styles from "./Hero.module.css";

const api = getTmdbApi();

export const Hero = () => {
  const [movies, setMovies] = useState<MoviePopularList200ResultsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await api.moviePopularList(
          {},
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
            },
          },
        );

        setMovies(response.results || []);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Загрузка слайдера</div>;
  }

  return (
    <section className={styles.heroSection}>
      <HeroText />
      <HeroSlider movies={movies} />
    </section>
  );
};
