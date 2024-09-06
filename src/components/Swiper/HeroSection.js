import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
    >
      {["./slider-1.jpg", "./slider-2.jpg"].map((el, i) => {
        return (
          <SwiperSlide className="" key={i}>
            <img src={el} className="h-[55vh] w-full object-cover" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSection;
