import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MovieCard } from "@/entities/movie/ui/MovieCard";
import { getMovieGenres } from "@/shared/utils/movieGenres";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./catalog.module.css";

interface MovieSliderMovie {
  id?: number;
  title?: string;
  poster_path?: string;
  vote_average?: number;
  genre_ids?: number[];
}

interface SliderProps {
  movies: MovieSliderMovie[];
}

export const MovieSlider = ({ movies }: SliderProps) => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
      >
        {movies.map((movie) => {
          if (movie.id === undefined) {
            return null;
          }

          return (
            <SwiperSlide key={movie.id}>
              <div className={styles.slide}>
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  rating={movie.vote_average}
                  type="movie"
                  genres={getMovieGenres(movie.genre_ids)}
                  variant="wide"
                  showInfo
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};