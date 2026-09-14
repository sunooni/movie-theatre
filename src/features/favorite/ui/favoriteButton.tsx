import { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";

import {
  isFavorite,
  toggleFavorite,
} from "@/shared/utils/favorites";

import styles from "./FavoriteButton.module.css";

type FavoriteButtonProps = {
  movieId: number;
};

export const FavoriteButton = ({ movieId }: FavoriteButtonProps) => {
  const [favorite, setFavorite] = useState(isFavorite(movieId));

  const handleClick = () => {
    const result = toggleFavorite(movieId);

    console.log("movieId:", movieId);
    console.log("favorite:", result);

    setFavorite(result);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <HeartOutlined
        className={styles.heart}
        style={{ color: favorite ? "red" : "white" }}
      />
    </button>
  );
};