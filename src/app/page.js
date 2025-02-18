"use client";

import EmiCalculator from "@/components/EmiCalculator/EmiCalculator";
import LoanForm from "@/components/LoanForm/LoanForm";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import HeroSection from "@/components/Swiper/HeroSection";
import TestimonialsSlider from "@/components/Swiper/TestimonialsSlider";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [adsData, setAdsData] = useState([]);
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
      <div className="flex min-h-screen">
        {/* Left Sticky Ads */}
        <div className="sticky top-0 h-[50vh] w-48  p-3 space-y-3">
          {adsData?.slice(0, 2)?.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <ServiceCards />

          <EmiCalculator />
        </div>

        {/* Right Sticky Ads */}
        <div className="sticky top-0 right-0 h-[50vh] w-48  p-3">
          {adsData?.slice(2, 4)?.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </>
  );
}
