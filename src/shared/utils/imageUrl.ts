const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x450?text=No+Image";

export const getMoviePosterUrl = (posterPath?: string | null) => {
  if (!posterPath) {
    return PLACEHOLDER_IMAGE;
  }

  return `${TMDB_IMAGE_BASE_URL}/w500${posterPath}`;
};
