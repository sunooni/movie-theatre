import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MovieCardSkeleton } from "@/entities/movie/ui/MovieCardSkeleton";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./catalog.module.css";

export const MovieSliderSkeleton = () => {
  return (
    <div className={styles.slider}>
      <Swiper modules={[Navigation]} spaceBetween={0} slidesPerView={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <MovieCardSkeleton variant="wide" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
