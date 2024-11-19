"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Loan({ features }) {
  // const features = [
  //   {
  //     title: "Generous Loan Amount",
  //     description:
  //       "ICICI Bank offers up to Rs 5 crore* Home Loan online, providing ample financing options for diverse housing needs.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-8 h-8"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Minimal Documentation",
  //     description:
  //       "Our streamlined documentation process liberates you from excessive paperwork, accelerates approval and amplifies convenience for applicants.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-8 h-8"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Instant Provisional Sanction",
  //     description:
  //       "With our Instant Provisional Sanction, applicants receive swift pre-approval, enabling confident home purchases with no delays, streamlining the buying process.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-8 h-8"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Flexible Tenure",
  //     description:
  //       "Our Home Loan offers flexible tenure and repayment options, allowing borrowers to choose a schedule that suits their finances and preferences for affordability and convenience.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-8 h-8"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
  //         />
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     title: "Generous Loan Amount",
  //     description:
  //       "ICICI Bank offers up to Rs 5 crore* Home Loan online, providing ample financing options for diverse housing needs.",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         strokeWidth={1.5}
  //         stroke="currentColor"
  //         className="w-8 h-8"
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  //         />
  //       </svg>
  //     ),
  //   },
  // ];

  return (
    <div className="py-14 bg-[#fff5f0]">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Features & Benefits
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          className="w-full mx-auto"
        >
          {features?.map((feature, idx) => (
            <SwiperSlide className=" mx-auto" key={idx}>
              <div class=" h-[25rem] w-full mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col  items-start gap-2">
                {/* <div class=" mb-4 text-[#FF5722]">{feature?.icon}</div> */}
                <img src={feature?.icon} className="w-10 h-10" />
                <h3 class=" text-lg font-semibold text-gray-900">
                  {feature?.heading}
                </h3>
                <p class=" text-gray-600 mt-3">{feature?.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #ff6347; /* Customize arrow color */
            top: 50%; /* Align buttons vertically center */
            width: 44px;
            height: 44px;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 34px; /* Customize arrow size */
          }

          .swiper-pagination-bullet {
            background: #ff6347; /* Customize pagination bullet color */
          }

          .swiper-pagination-bullet-active {
            background: #ff5722; /* Customize active bullet color */
          }
        `}</style>
      </div>
    </div>
  );
}
