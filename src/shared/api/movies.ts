import { getTmdbApi } from "@/shared/api/generated/endpoints";

const api = getTmdbApi();

export const getMoviesByGenre = async (genreId: string) => {
  const response = await api.discoverMovie(
    {
      with_genres: genreId,
      sort_by: "popularity.desc",
    },
    {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
      },
    },
  );

  return response.results ?? [];
};
