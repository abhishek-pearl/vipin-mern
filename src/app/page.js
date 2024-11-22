"use client";

import EmiCalculator from "@/components/EmiCalculator/EmiCalculator";
import LoanForm from "@/components/LoanForm/LoanForm";
import ServiceCards from "@/components/ServiceCards/ServiceCards";
import HeroSection from "@/components/Swiper/HeroSection";
import TestimonialsSlider from "@/components/Swiper/TestimonialsSlider";

export default function Home() {
  return (
    <>
      <LoanForm />
      <div className="">
        <HeroSection />
      </div>
      {/* <ServiceCards /> */}
      <div>
        <h1 className="text-center text-6xl font-extrabold p-6">
          Our Consulting Services
        </h1>
        <img className="mx-auto" src="consulting.webp" alt="" srcset="" />
      </div>
      <EmiCalculator />
      {/* <TestimonialsSlider /> */}
    </>
  );
}
