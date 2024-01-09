"use client";

// import { Swiper, SwiperSlide } from "swiper/react";

// import { FreeMode, Scrollbar } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
// import "swiper/css/navigation";

// const Carousel = ({ items }) => {
//   return (
//     <div>
//       <Swiper
//         modules={[FreeMode, Scrollbar]}
//         freeMode
//         height={300}
//         // centeredSlides
//         spaceBetween={20}
//         slidesPerView="5"
//         // breakpoints={{
//         //   320: {
//         //     slidesPerView: 1,
//         //   },
//         //   480: {
//         //     slidesPerView: 1,
//         //   },
//         //   640: {
//         //     slidesPerView: 2,
//         //   },
//         //   1020: {
//         //     slidesPerView: 5,
//         //   },
//         // }}
//       >
//         {items?.map((item) => (
//           <div class="item" key={item}>
//             <SwiperSlide className=" w-fit">{item}</SwiperSlide>
//           </div>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ items }) => {
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls={true}
        responsive={{
          0: {
            items: 1,
            itemsFit: "contain",
          },
          520: {
            items: 2,
            itemsFit: "contain",
          },
          720: {
            items: 3,
            itemsFit: "contain",
          },
          900: {
            items: 4,
            itemsFit: "contain",
          },
          1024: {
            items: 4,
            itemsFit: "contain",
          },
          1240: {
            items: 5,
            itemsFit: "contain",
          },
        }}
      />
    </div>
  );
};

export default Carousel;
