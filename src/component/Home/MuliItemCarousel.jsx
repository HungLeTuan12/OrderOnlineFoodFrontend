import React from "react";

import Slider from "react-slick";
import { TopMeal } from "./TopMeal";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MuliItemCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        {TopMeal.map((item) => (
          <CarouselItem image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};
export default MuliItemCarousel;
