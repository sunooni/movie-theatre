import { STORAGE_KEYS } from "@/shared/keys/keys";

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || "[]");
};

export const isFavorite = (id: number) => {
  return getFavorites().includes(id);
};

export const toggleFavorite = (id: number) => {
  const favorites = getFavorites();

  const updated = favorites.includes(id)
    ? favorites.filter((movieId: number) => movieId !== id)
    : [...favorites, id];

  localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(updated));

  return updated.includes(id);
};
