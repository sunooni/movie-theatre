import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { MoviePopularList200ResultsItem } from "@/shared/api/generated/model/moviePopularList200ResultsItem";
import { MovieCard } from "@/entities/movie/ui/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Hero.module.css";

interface HeroSliderProps {
  movies: MoviePopularList200ResultsItem[];
}

export const HeroSlider = ({ movies }: HeroSliderProps) => {
  return (
    <div className={styles.slider}>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={3} navigation>
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className={styles.slide}>
              <MovieCard title={movie.title} posterPath={movie.poster_path} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
