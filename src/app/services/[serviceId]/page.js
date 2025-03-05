"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Faq from "@/components/Faq/Faq";
import Loan from "@/components/Swiper/Loan";
import GetLoanForm from "@/components/GetLoanModal/GetLoanForm";
export default function page({ params }) {
  const { serviceId } = params;
  const [loanModal, setLoanModal] = useState(false);

  const [data, setData] = useState(null);
  const [loanTitle, setLoanTitle] = useState(null);

  useEffect(() => {
    if (serviceId !== undefined) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/services/${serviceId}`)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    const splitTitle = data?.topSection?.miniTitle.split(" ");
    setLoanTitle(splitTitle);
  }, [data]);

  console.log(data, "my single service");

  return (
    <div className="space-y-12 pb-8 px-2  ">
      <div className="bg-no-repeat bg-cover bg-center"
      style={{backgroundImage:`url("https://www.icicibank.com/content/dam/icicibank/managed-assets/images/home-loan/home-loan-simplified.webp")`}}>
        <div className="container mx-auto  p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <p className="text-sm  font-semibold uppercase tracking-wider">
              {loanTitle?.map((item, idx) => {
                if (idx === 0) {
                  return <span className="text-blue-800">{item} </span>;
                } else {
                  return <span className="text-[#FF5722]">{item} </span>;
                }
              })}
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900 leading-tight">
              {data?.topSection?.heading}
              {/* Home Loans <br />{" "}
            <span className="text-[#FF5722]">simplified</span> */}
            </h1>
            <ul className="mt-6 space-y-2 font-medium text-gray-700">
              {data?.topSection?.features?.map((ite) => {
                return (
                  <li key={ite._id} className="flex items-center">
                    <span className="mr-2">🔗</span>
                    {ite.title}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => {
                  setLoanModal(true);
                }}
                className="px-6 py-3 hover:bg-white border border-[#FF5722] hover:text-[#FF5722] bg-[#FF5722] text-white transition-all font-bold rounded-md"
              >
                Apply Now
              </button>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2 flex items-center h-full w-full  justify-center relative">
            <div className="w-full max-w-xs lg:max-w-3xl">
              {/* Placeholder image */}
              <picture>
                <img
                  className=" h-[30rem] object-contain w-full"
                  src={`${
                    data?.topSection?.banner ||
                    "https://www.icicibank.com/content/dam/icicibank/managed-assets/images/home-loan/home-loan-simplified.webp"
                  }`}
                  alt="Home Loan"
                />
              </picture>
            </div>
            {/* <div className="absolute top-4 right-4 p-2 bg-white rounded-md shadow-md">
        <p className="text-xs text-gray-600">
          Scan to check your pre-approved offer
        </p>
        <img
          src="https://via.placeholder.com/80"
          alt="QR Code Placeholder"
          className="mt-2"
        />
      </div> */}
          </div>
        </div>
      </div>

      {/* //-------------// */}
      <div className="container mx-auto border-2 text-center px-8 rounded-xl py-4 gap-3 bg-[#FF5722]/10 border-[#FF5722]">
        <h1 className="font-bold text-3xl">
          <span className="text-[#FF5722]">
            {" "}
            {data?.midSection?.topContent?.heading}
          </span>
          {/* Get Home Loan Online Up to{" "}
        <span className="text-[#FF5722]">₹ 5 Crore*</span> */}
        </h1>
        <p className="text-lg font-medium">
          {" "}
          {data?.midSection?.topContent?.description}
        </p>
      </div>
      {/* Faq */}
      <Faq data={data?.midSection?.faq} />

      <div className="flex flex-col items-center justify-center ">
        <div className="flex gap-10 flex-col md:flex-row items-center w-full max-w-6xl p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {data?.midSection?.stepsToAvailLoan?.heading}
              {/* Avail your Home Loan in just 5 steps */}
            </h1>
            <ul className="space-y-4 text-gray-600">
              {data?.midSection?.stepsToAvailLoan?.steps?.map((item, idx) => {
                return (
                  <li key={item._id} className="flex items-center space-x-2">
                    <span>{idx + 1}</span>
                    <span>{item.title}</span>
                  </li>
                );
              })}

              {/* <li className="flex items-center space-x-2">
              <span>2</span>
              <span>Check your eligibility</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>3</span>
              <span>Pay the processing fee</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>4</span>
              <span>Upload Documents</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>5</span>
              <span className="">Get Provisional Sanction</span>
            </li> */}
            </ul>
            <button
              onClick={() => {
                setLoanModal(true);
              }}
              className="px-6 py-3 text-white bg-orange-500 rounded-full hover:bg-orange-600"
            >
              APPLY NOW
            </button>
          </div>
          <div className="relative flex-1">
            <img
              src={
                data?.midSection?.stepsToAvailLoan?.banner
                  ? data?.midSection?.stepsToAvailLoan?.banner
                  : "https://www.icicibank.com/content/dam/icicibank/managed-assets/images/home-loan/avail-home-loan-in-5-steps-d.webp"
              }
              alt="Woman using phone"
              className="w-full rounded-lg shadow-lg"
            />

            <div className="absolute bottom-4 right-4 bg-orange-100 p-2 rounded-full shadow-lg">
              <PhoneIcon className="w-6 h-6 text-orange-500" />
              <span className="sr-only">Contact Number</span>
            </div>
          </div>
        </div>
      </div>
      <Loan features={data?.bottomSection?.features} />

      {/* Dos and donts */}
      <div className="max-w-7xl  mx-auto space-y-2">
        <h1 className="text-2xl font-medium px-1">
          Maximising Your Loan Approval: Dos and Don'ts
        </h1>
        <div class="grid grid-cols-2 gap-1  p-6 bg-white shadow-md  rounded-lg">
          <div class="bg-red-600 text-white text-center py-3 font-medium rounded-tl-lg">
            Dos
          </div>
          <div class="bg-red-600 text-white text-center py-3 font-medium rounded-tr-lg">
            Don'ts
          </div>

          {data?.bottomSection.doAndDont?.map((ite) => {
            return <div class="bg-gray-50 p-4 border-b">{ite.do}</div>;
          })}

          {data?.bottomSection.doAndDont?.map((ite) => {
            return <div class="bg-gray-50 p-4 border-b">{ite.dont}</div>;
          })}
        </div>
      </div>

      {/* Dos and donts */}

      {/* Faq for Home Loan */}
      <div className="container mx-auto space-y-6">
        <div className="text-center text-4xl font-medium">Loan FAQs</div>
        <div className="border rounded-lg ">
          <Faq data={data?.bottomSection?.faq} />
        </div>
      </div>
      <GetLoanForm setLoanModal={setLoanModal} loanModal={loanModal} />
    </div>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
