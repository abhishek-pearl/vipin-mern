"use client";

import LoanForm from "@/components/LoanForm/LoanForm";
import HeroSection from "@/components/Swiper/HeroSection";
import TestimonialsSlider from "@/components/Swiper/TestimonialsSlider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cardsData = [
    {
      title: "Home Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Home_Loan`,
    },
    {
      title: " Loan Against Property",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Loan_Against_Property`,
    },
    {
      title: "  Auction_Properties",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/auctionProperties`,
    },
  ];

  return (
    <>
      <LoanForm />

      <div className="py-4">
        <HeroSection />
      </div>
      {/* <section
        style={{
          backgroundImage: "url(/banner.jpeg)",
          backgroundSize: "cover",
        }}
        className="h-[500px]"
      ></section> */}
      <section className="p-4 ">
        <div className="  flex gap-6 justify-center">
          {cardsData.map((item) => {
            return (
              <Link href={`${item.path}`}>
                <div className="w-full max-w-sm bg-white p-6 grid gap-6 border rounded-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                      <Image
                        width={200}
                        height={200}
                        alt="image"
                        src={item?.icon}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{item?.title}</h3>
                  </div>
                  <div className="text-muted-foreground">
                    Get the funds you need for your personal needs. Apply now
                    and get approved in minutes.
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_1px#ff0000] hover:text-white hover:bg-red-500 focus:outline-none focus:ring-1 disabled:pointer-events-none transition duration-300"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <TestimonialsSlider />
    </>
  );
}
