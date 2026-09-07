import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import type { SearchMulti200ResultsItem } from "@/shared/api/generated/model/searchMulti200ResultsItem";
import { searchMovies } from "../api/search";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<SearchMulti200ResultsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchQuery: string) => {
        if (searchQuery.trim().length < 3) {
          setMovies([]);
          setLoading(false);
          return;
        }

        try {
          setLoading(true);
          const results = await searchMovies(searchQuery);
          setMovies(results);
        } catch (error) {
          console.error("Ошибка поиска:", error);
          setMovies([]);
        } finally {
          setLoading(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return {
    query,
    setQuery,
    movies,
    loading,
  };
};