import Faq from "@/components/Faq/Faq";
import Loan from "@/components/Swiper/Loan";
import Image from "next/image";
import React from "react";

export default function page({ params }) {
  const { loanType } = params;
  const features = [
    {
      title: "Generous Loan Amount",
      description:
        "ICICI Bank offers up to Rs 5 crore* Home Loan online, providing ample financing options for diverse housing needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      title: "Minimal Documentation",
      description:
        "Our streamlined documentation process liberates you from excessive paperwork, accelerates approval and amplifies convenience for applicants.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      title: "Instant Provisional Sanction",
      description:
        "With our Instant Provisional Sanction, applicants receive swift pre-approval, enabling confident home purchases with no delays, streamlining the buying process.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
    },
    {
      title: "Flexible Tenure",
      description:
        "Our Home Loan offers flexible tenure and repayment options, allowing borrowers to choose a schedule that suits their finances and preferences for affordability and convenience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
    {
      title: "Generous Loan Amount",
      description:
        "ICICI Bank offers up to Rs 5 crore* Home Loan online, providing ample financing options for diverse housing needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];
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
      <div className="container mx-auto border-2 text-center px-8 rounded-xl py-4 gap-3 bg-[#FF5722]/10 border-[#FF5722]">
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
      {/* Faq */}
      <Faq />

      <div className="flex flex-col items-center justify-center ">
        <div className="flex gap-10 flex-col md:flex-row items-center w-full max-w-6xl p-8 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Avail your Home Loan in just 5 steps
            </h1>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <span>1</span>
                <span>Enter your basic details</span>
              </li>
              <li className="flex items-center space-x-2">
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
              </li>
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
      <Loan />

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

          <div class="bg-gray-50 p-4 border-b">
            Investigate loan and property details thoroughly.
          </div>
          <div class="bg-gray-50 p-4 border-b">
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
          </div>
        </div>
      </div>

      {/* Dos and donts */}

      {/* Faq for Home Loan */}
      <div className="container mx-auto space-y-6">
        <div className="text-center text-4xl font-medium">Home Loan FAQs</div>
        <div className="border rounded-lg ">
          <Faq />
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
