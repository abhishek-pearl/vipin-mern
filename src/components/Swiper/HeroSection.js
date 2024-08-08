import React from "react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Swiper
      className="z-55 "
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {["./slider-1.jpg", "./slider-2.webp"].map((el, i) => {
        return (
          <SwiperSlide className="px-8 py-4" key={i}>
            <img src={el} className="h-[55vh] w-full object-cover" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSection;