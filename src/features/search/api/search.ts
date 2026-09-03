import { getTmdbApi } from "@/shared/api/generated/endpoints";
import type { SearchMulti200ResultsItem } from "@/shared/api/generated/model/searchMulti200ResultsItem";

const api = getTmdbApi();

export const searchMovies = async (query: string): Promise<SearchMulti200ResultsItem[]> => {
  const response = await api.searchMulti({
    query,
    language: "ru-RU",
  });

  return response.results?.filter((item) => item.media_type === "movie") ?? [];
};
