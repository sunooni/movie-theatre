import { getTmdbApi } from "@/shared/api/generated/endpoints";

const api = getTmdbApi();

export const getMovieDetails = async (movieId: number) => {
  return api.movieDetails(movieId);
};

export const getMovieCredits = async (movieId: number) => {
  return api.movieCredits(movieId);
};

export const getSimilarMovies = async (movieId: number) => {
  const response = await api.movieSimilar(movieId);

  return response.results ?? [];
};

export const getMovieVideos = async (movieId: number) => {
  const response = await api.movieVideos(movieId);

  return response.results ?? [];
};

export const getMovieReviews = async (movieId: number) => {
  const russianResponse = await api.movieReviews(movieId, {
    language: "ru-RU",
  });

  if (russianResponse.results?.length) {
    return russianResponse.results;
  }

  const englishResponse = await api.movieReviews(movieId, {
    language: "en-US",
  });

  return englishResponse.results ?? [];
};
