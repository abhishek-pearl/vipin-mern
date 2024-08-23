import Faq from "@/components/Faq/Faq";
import Image from "next/image";
import React from "react";

export default function page({ params }) {
  const { loanType } = params;
  return (
    <div className="space-y-12">
      <div className="bg-[#FFF3E9]">
        <div className="container mx-auto  p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <p className="text-sm  font-semibold uppercase tracking-wider">
              <span className="text-blue-800">Home</span>{" "}
              <span className="text-[#FF5722]">Loan</span>
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900 leading-tight">
              Home Loans <br />{" "}
              <span className="text-[#FF5722]">simplified</span>
            </h1>
            <ul className="mt-6 space-y-2 font-medium text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">🔗</span>
                Home Loan Online of up to ₹ 5 Crore*
              </li>
              <li className="flex items-center">
                <span className="mr-2">⏰</span>
                Instant Provisional Sanction
              </li>
              <li className="flex items-center">
                <span className="mr-2">💻</span>
                Digital Application Process
              </li>
              <li className="flex items-center">
                <span className="mr-2">📄</span>
                Minimal Documentation
              </li>
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
      <div className="container mx-auto border-2 text-center px-8 rounded-xl py-4 gap-3 border-[#FF5722]">
        <h1 className="font-bold text-3xl">
          Get Home Loan Online Up to{" "}
          <span className="text-[#FF5722]">₹ 5 Crore*</span>
        </h1>
        <p className="text-lg font-medium">
          ICICI Bank offering Home Loan up to Rs. 5 Crore* online with a
          competitive interest rate @ 8.75%* p.a. (*T&Cs. Subject to bureau
          score. Applicable to customers with pre-approved Home Loan offer
          only). Get benefits with a hassle-free online application process,
          minimal documentation and instant provisional sanction. ICICI Bank
          offers flexible tenure options, ensuring convenient repayment. Secure
          the perfect Loan amount and embark on your homeownership journey with
          confidence. Trust ICICI Bank for a seamless and customer-friendly Home
          Loan experience.
        </p>
      </div>
      <Faq />

      <div></div>
    </div>
  );
}
