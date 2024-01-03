"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const Carousel = ({ items }) => {
  return (
    <div>
      <Swiper
        modules={[FreeMode, Scrollbar]}
        freeMode
        height={300}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
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
