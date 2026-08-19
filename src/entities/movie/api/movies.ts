import { getTmdbApi } from "@/shared/api/generated/endpoints";

const api = getTmdbApi();

export const getPopularMovies = async () => {
  const response = await api.moviePopularList();

  return response.results ?? [];
};

export const getMoviesByGenre = async (genreId: string) => {
  const response = await api.discoverMovie({
    with_genres: genreId,
    sort_by: "popularity.desc",
  });

  return response.results ?? [];
};
