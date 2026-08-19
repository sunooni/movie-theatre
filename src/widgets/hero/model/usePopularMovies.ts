import { useEffect, useState } from "react";
import type { MoviePopularList200ResultsItem } from "@/shared/api/generated/model/moviePopularList200ResultsItem";
import { getPopularMovies } from "@/entities/movie/api/movies";

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<MoviePopularList200ResultsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { movies, loading };
};
