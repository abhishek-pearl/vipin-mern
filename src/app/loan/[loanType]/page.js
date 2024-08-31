import Faq from "@/components/Faq/Faq";
import Loan from "@/components/Swiper/Loan";
import Image from "next/image";
import React from "react";

export const loans = [
  {
    type: "Home-Loan",
    title: "Home Loans Simplified",
    features: [
      "Instant Provisional Sanction",
      "Digital Application Process",
      "Minimal Documentation",
    ],
    description: {
      dTitle: "Get Home Loan Online Up to ₹ 5 Crore*",
      dContent:
        "ICICI Bank offering Home Loan up to Rs. 5 Crore* online with a competitive interest rate @ 8.75%* p.a. (*T&Cs. Subject to bureau score. Applicable to customers with pre-approved Home Loan offer only). Get benefits with a hassle-free online application process, minimal documentation and instant provisional sanction. ICICI Bank offers flexible tenure options, ensuring convenient repayment. Secure the perfect Loan amount and embark on your homeownership journey with confidence. Trust ICICI Bank for a seamless and customer-friendly Home Loan experience.",
    },
    cta: "Apply Now",
    faq1: {
      title: "Home Loan FAQ",
      data: [
        {
          question: "What is the interest rate for personal loans?",
          answer:
            "The interest rate for personal loans starts at 10.5% p.a., depending on your credit score.",
        },
        {
          question:
            "What is the maximum loan amount I can avail for a personal loan?",
          answer:
            "You can avail a personal loan of up to ₹ 50 Lakhs* depending on your eligibility.",
        },
        {
          question: "What is the repayment tenure for personal loans?",
          answer:
            "The repayment tenure for personal loans ranges from 12 to 60 months.",
        },
      ],
    },
    faq2: {
      title: "Home Loan FAQ",
      data: [
        {
          question:
            "What are the eligibility criteria for applying for a home loan?",
          answer:
            "The eligibility criteria for a home loan typically include age (usually between 21 and 65 years), income stability, credit score (preferably above 700), employment type (salaried or self-employed), and the applicant's existing financial obligations. Lenders may also consider the property's value and location.",
        },
        {
          question: "How much home loan can I get based on my income?",
          answer:
            "The loan amount you can get is generally up to 60-70% of the property's value. However, your income plays a crucial role in determining the exact amount. Typically, banks offer home loans where the EMI (Equated Monthly Installment) is up to 50% of your monthly income. A higher income allows for a larger loan amount, provided other criteria are met.",
        },
        {
          question: "Can I apply for a home loan if I have an existing loan?",
          answer:
            "Yes, you can apply for a home loan even if you have an existing loan. However, the lender will assess your total debt obligations, including the existing loan, to ensure you have the financial capacity to repay the home loan. Your debt-to-income ratio, credit score, and repayment history of existing loans will be critical factors in the approval process.",
        },
      ],
    },
    dos: {
      dos: [
        `Investigate loan and property details thoroughly.`,
        `Plan for unexpected expenses wisely.`,
        `Keep all necessary paperwork organized.`,
        `Improve your credit before applying for a Home Loan.`,
      ],
      donts: [
        `Avoid applying for a Home Loan on multiple aggregator sites to maintain approval chances.`,
        `Refrain from carrying excessive loans to maintain a favorable creditworthiness.`,
        `Avoid overspending on Credit Cards or delaying loan repayments to prevent a negative impact on your credit score.`,
        `Don't commit to a Home Loan beyond your means to ensure manageable repayments.`,
      ],
    },
    apply: {
      title: "Avail your Home Loan in just 5 steps",
      steps: [
        `Enter your basic details`,
        `Check your eligibility`,
        `Pay the processing fee`,
        `Upload Documents`,
        `Get Provisional Sanction`,
      ],
    },
    featuresBenifits: [
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
    ],
  },
  {
    type: "Personal-Loan",
    title: "Personal Loans Made Easy",
    features: [
      "Quick Approval Process",
      "Flexible Loan Amounts",
      "No Collateral Required",
    ],
    description: {
      dTitle: "Get Personal Loan Up to ₹ 25 Lakhs*",
      dContent:
        "ICICI Bank offers Personal Loans up to ₹ 25 Lakhs* with a hassle-free application process and no need for collateral. Enjoy quick approval with competitive interest rates starting from 12.5%* p.a. Apply online and get the funds you need for your personal expenses with minimal documentation. Whether it's for travel, medical expenses, or other personal needs, ICICI Bank makes borrowing easy and accessible.",
    },
    cta: "Apply Now",
    faq1: {
      title: "Personal Loan FAQ",
      data: [
        {
          question: "What is the interest rate for personal loans?",
          answer:
            "The interest rate for personal loans starts at 12.5% p.a., depending on your credit score and eligibility.",
        },
        {
          question:
            "What is the maximum loan amount I can avail for a personal loan?",
          answer:
            "You can avail a personal loan of up to ₹ 25 Lakhs* based on your eligibility.",
        },
        {
          question: "What is the repayment tenure for personal loans?",
          answer:
            "The repayment tenure for personal loans ranges from 12 to 60 months.",
        },
      ],
    },
    faq2: {
      title: "Personal Loan FAQ",
      data: [
        {
          question:
            "What are the eligibility criteria for applying for a personal loan?",
          answer:
            "Eligibility criteria for a personal loan typically include age (usually between 21 and 58 years), income level, credit score (preferably above 700), and employment status. Your existing financial obligations and credit history will also be considered.",
        },
        {
          question: "How much personal loan can I get based on my income?",
          answer:
            "The loan amount you can get is typically based on your income and repayment capacity. Banks usually offer personal loans where the EMI (Equated Monthly Installment) is up to 50% of your monthly income. Higher income and stable financial condition generally qualify you for a larger loan amount.",
        },
        {
          question:
            "Can I apply for a personal loan if I have an existing loan?",
          answer:
            "Yes, you can apply for a personal loan even if you have an existing loan. However, lenders will evaluate your total debt obligations to ensure you can manage the new loan. Your debt-to-income ratio, credit score, and repayment history of existing loans will play a crucial role in the approval process.",
        },
      ],
    },
    dos: {
      dos: [
        `Assess your loan requirements accurately.`,
        `Maintain a good credit score.`,
        `Keep your documentation up-to-date.`,
        `Compare different loan options before applying.`,
      ],
      donts: [
        `Avoid applying for multiple loans simultaneously to protect your credit score.`,
        `Refrain from taking on more debt than you can handle.`,
        `Avoid missing EMI payments to prevent negative impacts on your credit score.`,
        `Don't ignore the terms and conditions before signing the loan agreement.`,
      ],
    },
    apply: {
      title: "Apply for Your Personal Loan in 4 Simple Steps",
      steps: [
        `Fill out the online application form`,
        `Upload your documents`,
        `Receive loan approval`,
        `Get funds disbursed`,
      ],
    },
    featuresBenifits: [
      {
        title: "Quick Approval Process",
        description:
          "Experience fast approval with our streamlined process, designed to get you the funds you need quickly and efficiently.",
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
              d="M17.25 10.5c0-1.88-1.36-3.46-3.25-3.92v-2.1A2.25 2.25 0 0011.75 2.25h-1.5a2.25 2.25 0 00-2.25 2.25v2.1c-1.89.46-3.25 2.02-3.25 3.92 0 2.21 2.79 4.05 6.75 4.5 3.96-.45 6.75-2.29 6.75-4.5z"
            />
          </svg>
        ),
      },
      {
        title: "Flexible Loan Amounts",
        description:
          "Choose a loan amount that suits your needs, with flexible options ranging up to ₹ 25 Lakhs*.",
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
              d="M4.5 15.75V5.25a2.25 2.25 0 012.25-2.25h11.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25z"
            />
          </svg>
        ),
      },
      {
        title: "No Collateral Required",
        description:
          "Obtain a personal loan without the need for any collateral, making it easier to access funds without additional security.",
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
              d="M7.5 12l2.25 2.25L15 9"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75v-1.5h15v1.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 16.5v1.5h15v-1.5"
            />
          </svg>
        ),
      },
    ],
  },
];

export default function page({ params }) {
  const { loanType } = params;
  const loanData = loans.find((item) => item.type === loanType) || loans[0];
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
