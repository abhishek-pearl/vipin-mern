import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import axios from "axios";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/banner`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("banner", data);
  }, [data]);

  console.log(data, "my banners");
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
      {data &&
        data.map((el, i) => {
          return (
            <SwiperSlide className="" key={i}>
              <img
                src={el?.banner}
                className="min-h-[750px] max-h-[750px] w-full object-fit"
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default HeroSection;
