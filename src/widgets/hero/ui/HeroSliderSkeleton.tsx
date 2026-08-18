import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MovieCardSkeleton } from "@/entities/movie/ui/MovieCardSkeleton";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Hero.module.css";

export const HeroSliderSkeleton = () => {
  return (
    <div className={styles.slider}>
      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={3}>
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <MovieCardSkeleton />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
