"use client";

import EmiCalculator from "@/components/EmiCalculator/EmiCalculator";
import LoanForm from "@/components/LoanForm/LoanForm";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import HeroSection from "@/components/Swiper/HeroSection";
import TestimonialsSlider from "@/components/Swiper/TestimonialsSlider";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [adsData, setAdsData] = useState(null);
  const getAds = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/ad/single?showBanner=true`
    );
    console.log(response?.data?.data, "response");
    if (response?.data?.data) {
      setAdsData(response?.data?.data?.banner);
    }
  };
  useEffect(() => {
    getAds();
  }, []);

  return (
    <>
      <LoanForm />
      <div className="">
        <HeroSection />
      </div>
      <div className="flex flex-col items-center my-4 justify-center bg-gradient-to-r from-red-500 to-red-600 p-6 text-white text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Elevate Your Digital Experience
        </h1>
        <p className="text-base md:text-lg max-w-5xl text-white/90">
          We craft stunning designs that transform brands and captivate
          audiences. Discover the power of innovation with our cutting-edge
          solutions.
        </p>
      </div>
      <div className="flex min-h-screen">
        {/* Left Sticky Ads */}
        <div className="sticky top-28 h-[50vh] w-48  p-3 space-y-3">
          {adsData &&
            adsData?.slice(0, 2)?.map((item, index) => (
              <a href={item?.ad_url}>
                {" "}
                <img key={index} src={item?.secure_url} alt="" />
              </a>
            ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <ServiceCards />

          <EmiCalculator />
        </div>

        {/* Right Sticky Ads */}
        <div className="sticky top-28 right-0 h-[50vh] w-48  p-3">
          {adsData &&
            adsData?.slice(2, 4)?.map((item, index) => (
              <a href={item?.ad_url}>
                {" "}
                <img key={index} src={item?.secure_url} alt="" />
              </a>
            ))}
        </div>
      </div>
    </>
  );
}
