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
      <ServiceCards />
      <EmiCalculator />
      {/* <TestimonialsSlider /> */}
    </>
  );
}
