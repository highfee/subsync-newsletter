"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";

const Carousel = ({ items }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        modules={[FreeMode, Navigation]}
        freeMode
        navigation
        height={300}
      >
        {items?.map((item) => (
          <div class="item" key={item}>
            <SwiperSlide>{item}</SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
