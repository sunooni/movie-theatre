import { useEffect, useState } from "react";

import { getMovieDetails } from "@/entities/movie/api/movieDetails";
import { getFavorites } from "@/shared/utils/favorites";

export const useFavorites = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const favoriteIds = getFavorites();

    const fetchMovies = async () => {
      const moviesData = [];

      for (const id of favoriteIds) {
        const movie = await getMovieDetails(id);
        moviesData.push(movie);
      }

      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return {
    movies,
  };
};
