const FAVORITES_KEY = "favoriteMovies";

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
};

export const isFavorite = (id: number) => {
  return getFavorites().includes(id);
};

export const toggleFavorite = (id: number) => {
  const favorites = getFavorites();

  const updated = favorites.includes(id)
    ? favorites.filter((movieId: number) => movieId !== id)
    : [...favorites, id];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));

  return updated.includes(id);
};