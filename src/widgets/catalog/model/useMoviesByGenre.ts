import { useEffect, useState } from "react";
import type { DiscoverMovie200ResultsItem } from "@/shared/api/generated/model/discoverMovie200ResultsItem";
import { getMoviesByGenre } from "@/entities/movie/api/movies";

export const useMoviesByGenre = (genreId: string) => {
  const [movies, setMovies] = useState<DiscoverMovie200ResultsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMoviesByGenre(genreId)
      .then(setMovies)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [genreId]);

  return { movies, loading };
};
