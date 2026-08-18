import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MovieCard } from "@/entities/movie/ui/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./catalog.module.css";

import type { DiscoverMovie200ResultsItem } from "@/shared/api/generated/model/discoverMovie200ResultsItem";

interface SliderProps {
  movies: DiscoverMovie200ResultsItem[];
}

export const MovieSlider = ({ movies }: SliderProps) => {
  return (
    <div className={styles.slider}>
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={4} navigation>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className={styles.slide}>
              <MovieCard title={movie.title} posterPath={movie.poster_path} variant="wide" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
