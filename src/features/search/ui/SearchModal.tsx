import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

import { useSearch } from "../model/useSearch";
import { MovieSlider } from "@/widgets/catalog/ui/MovieSlider";

import styles from "./Search.module.css";

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal = ({ onClose }: SearchModalProps) => {
  const { query, setQuery, movies, loading } = useSearch();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.searchContainer}>
          <SearchOutlined className={styles.searchIcon} />

          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className={styles.input}
            placeholder="Введите название фильма"
          />

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть поиск"
          >
            <CloseOutlined />
          </button>
        </div>

        <div className={styles.results}>
          {loading && <div className={styles.loading}>Поиск...</div>}

          {!loading && movies.length > 0 && <MovieSlider movies={movies} />}
        </div>
      </div>
    </div>
  );
};
