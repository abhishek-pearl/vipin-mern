import Faq from "@/components/Faq/Faq";
import Loan from "@/components/Swiper/Loan";
import loansData from "@/utils/loansData";
import Image from "next/image";
import React from "react";

export default function page({ params }) {
  const { loanType } = params;
  console.log(loanType, "loanType");
  const loanData =
    loansData.find((item) => item.type === loanType) || loansData[0];
  console.log(loanType);

  return (
    <div className="space-y-12 pb-8 ">
      <div className="">
        <div className="container mx-auto  p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <p className="text-sm  font-semibold uppercase tracking-wider">
              <span className="text-blue-800">Home</span>{" "}
              <span className="text-[#FF5722]">Loan</span>
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900 leading-tight">
              {loanData?.title}
              {/* Home Loans <br />{" "}
              <span className="text-[#FF5722]">simplified</span> */}
            </h1>
            <ul className="mt-6 space-y-2 font-medium text-gray-700">
              {loanData?.features?.map((ite) => {
                return (
                  <li className="flex items-center">
                    <span className="mr-2">🔗</span>
                    {ite}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-3 hover:bg-white border border-[#FF5722] hover:text-[#FF5722] bg-[#FF5722] text-white transition-all font-bold rounded-md">
                Apply Now
              </button>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2 flex items-center justify-center relative">
            <div className="w-full max-w-xs lg:max-w-md">
              {/* Placeholder image */}
              <picture>
                <img
                  className="max-w-5xl"
                  src="https://www.icicibank.com/content/dam/icicibank/managed-assets/images/home-loan/home-loan-simplified.webp"
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
            {loanData?.description?.dTitle}
          </span>
          {/* Get Home Loan Online Up to{" "}
          <span className="text-[#FF5722]">₹ 5 Crore*</span> */}
        </h1>
        <p className="text-lg font-medium">{loanData?.description?.dContent}</p>
      </div>
      {/* Faq */}
      <Faq data={loanData?.faq2} />

      <div className="flex flex-col items-center justify-center ">
        <div className="flex gap-10 flex-col md:flex-row items-center w-full max-w-6xl p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {loanData?.apply?.title}
              {/* Avail your Home Loan in just 5 steps */}
            </h1>
            <ul className="space-y-4 text-gray-600">
              {loanData?.apply?.steps?.map((item, idx) => {
                return (
                  <li className="flex items-center space-x-2">
                    <span>{idx + 1}</span>
                    <span>{item}</span>
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
            <button className="px-6 py-3 text-white bg-orange-500 rounded-full hover:bg-orange-600">
              APPLY FOR HOME LOAN
            </button>
          </div>
          <div className="relative flex-1">
            <img
              src="https://www.icicibank.com/content/dam/icicibank/managed-assets/images/home-loan/avail-home-loan-in-5-steps-d.webp"
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
      <Loan features={loanData?.featuresBenifits} />

      {/* Dos and donts */}
      <div className="max-w-7xl  mx-auto space-y-2">
        <h1 className="text-2xl font-medium px-1">
          Maximising Your Home Loan Approval: Dos and Don'ts
        </h1>
        <div class="grid grid-cols-2 gap-1  p-6 bg-white shadow-md  rounded-lg">
          <div class="bg-red-600 text-white text-center py-3 font-medium rounded-tl-lg">
            Dos
          </div>
          <div class="bg-red-600 text-white text-center py-3 font-medium rounded-tr-lg">
            Don'ts
          </div>

          {loanData?.dos?.dos?.map((ite) => {
            return <div class="bg-gray-50 p-4 border-b">{ite}</div>;
          })}

          {loanData?.dos?.donts?.map((ite) => {
            return <div class="bg-gray-50 p-4 border-b">{ite}</div>;
          })}

          {/* <div class="bg-gray-50 p-4 border-b">
            Avoid applying for a Home Loan on multiple aggregator sites to
            maintain approval chances.
          </div>

          <div class="bg-white p-4 border-b">
            Plan for unexpected expenses wisely.
          </div>
          <div class="bg-white p-4 border-b">
            Refrain from carrying excessive loans to maintain a favourable
            creditworthiness.
          </div>

          <div class="bg-gray-50 p-4 border-b">
            Keep all necessary paperwork organised.
          </div>
          <div class="bg-gray-50 p-4 border-b">
            Avoid overspending on Credit Cards or delaying loan repayments to
            prevent a negative impact on your credit score.
          </div>

          <div class="bg-white p-4 rounded-bl-lg">
            Improve your credit before applying for a Home Loan.
          </div>
          <div class="bg-white p-4 rounded-br-lg">
            Don't commit to a Home Loan beyond your means to ensure manageable
            repayments.
          </div> */}
        </div>
      </div>

      {/* Dos and donts */}

      {/* Faq for Home Loan */}
      <div className="container mx-auto space-y-6">
        <div className="text-center text-4xl font-medium">Home Loan FAQs</div>
        <div className="border rounded-lg ">
          <Faq data={loanData?.faq1} />
        </div>
      </div>
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
