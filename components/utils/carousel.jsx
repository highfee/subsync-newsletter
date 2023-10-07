"use client";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Carousel = ({ items }) => {
  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={15}
        dots
        items={"auto"}
        autoWidth={true}
        // center={true}
        //   responsive={Responsive}
      >
        {items.map((item, i) => (
          <div class="item" key={i}>
            {item}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
