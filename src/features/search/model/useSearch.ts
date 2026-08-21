import { useEffect, useState } from "react";
import type { SearchMulti200ResultsItem } from "@/shared/api/generated/model/searchMulti200ResultsItem";
import { searchMovies } from "../api/search";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<SearchMulti200ResultsItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.length < 3) {
      setMovies([]);
      setLoading(false);

      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);

        const results = await searchMovies(trimmedQuery);

        setMovies(results);
      } catch (error) {
        console.error("Ошибка поиска:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return {
    query,
    setQuery,
    movies,
    loading,
  };
};
