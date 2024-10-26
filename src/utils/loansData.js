const loansData = [
  {
    type: "Home-Loan",
    title: "Home Loans Simplified",
    heroImage:
      "https://www.icicibank.com/content/dam/icicibank/managed-assets/images/home-loan/home-loan-simplified.webp",
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
    heroImage:
      "https://img.freepik.com/free-vector/bank-loan-concept-illustration_114360-21880.jpg?t=st=1729924197~exp=1729927797~hmac=5274e6315b75fcd6c73c1d2ec45cb4922b911ff65e399deed1822473990caab2&w=740",
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
  {
    type: "Car-Loan",
    title: "Drive Away with Our Car Loans",
    heroImage:
      "https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-17354.jpg?t=st=1729924424~exp=1729928024~hmac=dca87a5505de38d432015e475c8f8a501c077bbc7bbddea75766e30c0c74df74&w=740",
    features: [
      "Fast Approval Process",
      "Flexible Loan Amounts",
      "Low Interest Rates",
    ],
    description: {
      dTitle: "Get Car Loan Up to ₹ 50 Lakhs*",
      dContent:
        "XYZ Bank offers Car Loans up to ₹ 50 Lakhs* with a seamless application process and attractive interest rates starting from 9.5%* p.a. Enjoy quick approval and finance your new or used car with minimal paperwork. Whether you're buying a car for personal use or business, XYZ Bank makes it simple and affordable.",
    },
    cta: "Apply Now",
    faq1: {
      title: "Car Loan FAQ",
      data: [
        {
          question: "What is the interest rate for car loans?",
          answer:
            "The interest rate for car loans starts at 9.5% p.a., depending on your credit score and loan amount.",
        },
        {
          question:
            "What is the maximum loan amount I can avail for a car loan?",
          answer:
            "You can avail a car loan of up to ₹ 50 Lakhs* based on your eligibility and the car's value.",
        },
        {
          question: "What is the repayment tenure for car loans?",
          answer:
            "The repayment tenure for car loans ranges from 12 to 84 months.",
        },
      ],
    },
    faq2: {
      title: "Car Loan FAQ",
      data: [
        {
          question:
            "What are the eligibility criteria for applying for a car loan?",
          answer:
            "Eligibility criteria typically include age (usually between 21 and 65 years), income level, credit score (preferably above 700), and employment status. The car's value and your existing financial obligations are also considered.",
        },
        {
          question: "How much car loan can I get based on my income?",
          answer:
            "The loan amount you can get is typically based on your income and repayment capacity. Banks usually offer car loans where the EMI (Equated Monthly Installment) is up to 50% of your monthly income. Higher income and stable financial condition generally qualify you for a larger loan amount.",
        },
        {
          question: "Can I apply for a car loan if I have an existing loan?",
          answer:
            "Yes, you can apply for a car loan even if you have an existing loan. However, lenders will assess your total debt obligations to ensure you can manage the new loan. Your debt-to-income ratio, credit score, and repayment history of existing loans will be evaluated.",
        },
      ],
    },
    dos: {
      dos: [
        "Assess your car loan requirements carefully.",
        "Maintain a good credit score.",
        "Keep your documentation ready and up-to-date.",
        "Compare different loan options and interest rates.",
      ],
      donts: [
        "Avoid applying for multiple car loans at once.",
        "Don’t take on more debt than you can handle.",
        "Avoid missing EMI payments to protect your credit score.",
        "Don’t ignore the terms and conditions before finalizing the loan.",
      ],
    },
    apply: {
      title: "Apply for Your Car Loan in 4 Simple Steps",
      steps: [
        "Fill out the online application form",
        "Upload your car details and documents",
        "Receive loan approval",
        "Get funds disbursed and purchase your car",
      ],
    },
    featuresBenifits: [
      {
        title: "Fast Approval Process",
        description:
          "Experience quick approval with our efficient process designed to get you the funds for your car promptly.",
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
          "Choose a loan amount that fits your needs, with flexible options up to ₹ 50 Lakhs*.",
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
        title: "Low Interest Rates",
        description:
          "Benefit from competitive interest rates starting from 9.5%* p.a., making your car loan more affordable.",
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
      ,
    ],
  },
  {
    type: "Business-Loan",
    heroImage:
      "https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?t=st=1729924462~exp=1729928062~hmac=59af806ffe9fca0846b71c373b9a3d130ce4bc388ab0b46d55a3334deac48162&w=1380",
    title: "Empower Your Business with Our Loans",
    features: [
      "Quick Loan Disbursal",
      "Flexible Repayment Tenure",
      "No Collateral for Loans up to ₹ 50 Lakhs",
    ],
    description: {
      dTitle: "Get Business Loan Up to ₹ 1 Crore*",
      dContent:
        "XYZ Bank offers Business Loans up to ₹ 1 Crore* with minimal documentation and quick processing. Whether you are expanding your business, managing working capital, or investing in new opportunities, our loan solutions provide you with the necessary funds at competitive interest rates starting from 11.5%* p.a. Apply now and fuel your business growth with ease.",
    },
    cta: "Apply Now",
    faq1: {
      title: "Business Loan FAQ",
      data: [
        {
          question: "What is the interest rate for business loans?",
          answer:
            "The interest rate for business loans starts at 11.5% p.a., depending on your business profile, turnover, and credit score.",
        },
        {
          question:
            "What is the maximum loan amount I can avail for a business loan?",
          answer:
            "You can avail a business loan of up to ₹ 1 Crore* based on your eligibility and business requirements.",
        },
        {
          question: "What is the repayment tenure for business loans?",
          answer:
            "The repayment tenure for business loans ranges from 12 to 60 months.",
        },
      ],
    },
    faq2: {
      title: "Business Loan FAQ",
      data: [
        {
          question:
            "What are the eligibility criteria for applying for a business loan?",
          answer:
            "Eligibility criteria include age (usually between 25 and 65 years), business vintage (at least 3 years in operation), credit score (preferably above 700), and turnover. Your business financials, profitability, and existing financial obligations will also be considered.",
        },
        {
          question:
            "Can I apply for a business loan if I have an existing loan?",
          answer:
            "Yes, you can apply for a business loan even if you have an existing loan. However, lenders will assess your total debt obligations to ensure you can manage the new loan. Your debt-to-income ratio, credit score, and repayment history of existing loans will be key factors.",
        },
        {
          question: "Can I get a business loan without collateral?",
          answer:
            "Yes, you can get unsecured business loans up to ₹ 50 Lakhs without providing collateral, based on your business's creditworthiness and financial health.",
        },
      ],
    },
    dos: {
      dos: [
        "Prepare a solid business plan before applying.",
        "Ensure all business financial records are up-to-date.",
        "Compare different business loan options.",
        "Maintain a good credit score.",
      ],
      donts: [
        "Avoid taking on more debt than your business can manage.",
        "Don't delay EMI payments to prevent negative impacts on your credit score.",
        "Avoid applying for multiple business loans at once.",
        "Don't ignore the loan terms and conditions.",
      ],
    },
    apply: {
      title: "Apply for Your Business Loan in 4 Simple Steps",
      steps: [
        "Fill out the online application form",
        "Submit your business documents",
        "Get loan approval",
        "Receive funds to grow your business",
      ],
    },
    featuresBenifits: [
      {
        title: "Quick Loan Disbursal",
        description:
          "Experience fast loan processing and disbursal, ensuring your business gets the required funds in a timely manner.",
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
        title: "Flexible Repayment Tenure",
        description:
          "Choose a repayment period that suits your business cash flow, ranging from 12 to 60 months.",
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
          "Avail loans up to ₹ 50 Lakhs without providing collateral, ensuring quick and easy access to business funding.",
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
  {
    type: "Loan-Against-Property",
    title: "Unlock the Value of Your Property",
    heroImage:
      "https://img.freepik.com/free-vector/salary-offer-from-hand-employer-happy-employees-tiny-rich-corporate-people-enjoy-money-profit-growth-bonuses-flat-vector-illustration-incentive-work-satisfaction-investment-concept_74855-21284.jpg?t=st=1729924504~exp=1729928104~hmac=725b87a6420a81b60c19be5aa29fd8b1d17ce311b6b361130ffde17c2ecb2439&w=1380",
    features: [
      "High Loan Amounts",
      "Flexible Repayment Options",
      "Competitive Interest Rates",
    ],
    description: {
      dTitle: "Get Loan Against Property Up to ₹ 5 Crore*",
      dContent:
        "XYZ Bank offers Loans Against Property (LAP) up to ₹ 5 Crore* with flexible repayment options and competitive interest rates starting from 9.5%* p.a. Whether you need funds for business expansion, education, or any other financial needs, you can leverage the value of your residential or commercial property. Enjoy longer tenures and attractive loan terms, making it a secure and affordable borrowing option.",
    },
    cta: "Apply Now",
    faq1: {
      title: "Loan Against Property FAQ",
      data: [
        {
          question: "What is the interest rate for a Loan Against Property?",
          answer:
            "The interest rate for Loans Against Property starts at 9.5% p.a., depending on your credit profile, property valuation, and loan amount.",
        },
        {
          question:
            "What is the maximum loan amount I can avail for Loan Against Property?",
          answer:
            "You can avail a loan of up to ₹ 5 Crore* depending on the value of your property and eligibility.",
        },
        {
          question: "What is the repayment tenure for Loan Against Property?",
          answer:
            "The repayment tenure ranges from 5 to 15 years, depending on the loan amount and your repayment capacity.",
        },
      ],
    },
    faq2: {
      title: "Loan Against Property FAQ",
      data: [
        {
          question:
            "What are the eligibility criteria for Loan Against Property?",
          answer:
            "Eligibility criteria include owning a residential or commercial property, a good credit score, steady income, and the ability to repay. Lenders will assess the market value of your property to determine the loan amount.",
        },
        {
          question:
            "Can I get a Loan Against Property if the property is not fully paid off?",
          answer:
            "Yes, you can apply for a Loan Against Property even if your property is mortgaged. The lender will assess the outstanding loan and provide the remaining eligible loan amount based on the property's current value.",
        },
        {
          question:
            "Can I use Loan Against Property for personal or business purposes?",
          answer:
            "Yes, Loan Against Property can be used for multiple purposes, including personal needs, business expansion, education, or any other financial requirements.",
        },
      ],
    },
    dos: {
      dos: [
        "Ensure your property documents are up-to-date.",
        "Maintain a good credit score to get better interest rates.",
        "Compare loan offers from different banks before applying.",
        "Calculate your repayment capacity accurately before choosing loan tenure.",
      ],
      donts: [
        "Avoid over-leveraging your property value beyond repayment capacity.",
        "Don't ignore the fine print in loan agreements.",
        "Avoid delays in loan EMI payments to prevent penalties.",
        "Don’t use the loan for purposes that might impact your repayment ability.",
      ],
    },
    apply: {
      title: "Apply for Loan Against Property in 4 Simple Steps",
      steps: [
        "Fill out the online application form",
        "Submit property and income documents",
        "Receive loan approval based on property valuation",
        "Get funds disbursed against your property",
      ],
    },
    featuresBenifits: [
      {
        title: "High Loan Amounts",
        description:
          "Get loans of up to ₹ 5 Crore* based on the market value of your property, ensuring you have enough funds for personal or business needs.",
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v6a1 1 0 01-1 1h-3m-4 4v-6m0 6H9m4 0h3"
            />
          </svg>
        ),
      },
      {
        title: "Flexible Repayment Options",
        description:
          "Choose repayment terms ranging from 5 to 15 years, ensuring that the EMIs fit your financial plans.",
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
              d="M12 8v4l3 3m0 0H9m6 0h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        ),
      },
      {
        title: "Competitive Interest Rates",
        description:
          "Benefit from attractive interest rates starting at 9.5%* p.a., helping you manage your repayments affordably.",
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
              d="M5.25 12.75l5.5 5.5L19.75 8.75"
            />
          </svg>
        ),
      },
    ],
  },
  {
    type: "Balance-Transfer",
    title: "Transfer Your Loan, Save More",
    heroImage:
      "https://img.freepik.com/free-vector/credit-score-flat-composition-with-cityscape-background-doodle-human-characters-with-coins-new-house-vector-illustration_1284-83827.jpg?t=st=1729924546~exp=1729928146~hmac=463a9409fc2f1eb4d835c6772270d31e5d94b86fc5105dc09a60d6c08101331f&w=1380",
    features: [
      "Lower Interest Rates",
      "Reduced EMIs",
      "Flexible Repayment Options",
    ],
    description: {
      dTitle: "Save More with Balance Transfer Loans",
      dContent:
        "XYZ Bank offers Balance Transfer Loans with interest rates as low as 8.5%* p.a., helping you reduce your monthly EMIs and overall interest burden. Transfer your existing high-interest loan to XYZ Bank and enjoy better terms and flexible repayment options. Whether you have a home loan, personal loan, or car loan, transferring your loan can save you significant costs.",
    },
    cta: "Transfer Now",
    faq1: {
      title: "Balance Transfer Loan FAQ",
      data: [
        {
          question: "What is the interest rate for a Balance Transfer Loan?",
          answer:
            "The interest rate for Balance Transfer Loans starts from 8.5% p.a., depending on your credit profile, loan type, and outstanding amount.",
        },
        {
          question: "How much can I save by transferring my existing loan?",
          answer:
            "By transferring your loan to XYZ Bank, you can save on interest payments with lower EMIs. The exact savings depend on your outstanding loan amount, current interest rate, and the tenure of your loan.",
        },
        {
          question: "Which loans are eligible for a balance transfer?",
          answer:
            "You can transfer home loans, personal loans, car loans, and other secured loans with an outstanding balance to XYZ Bank.",
        },
      ],
    },
    faq2: {
      title: "Balance Transfer Loan FAQ",
      data: [
        {
          question: "What documents are required for a balance transfer?",
          answer:
            "Documents such as your existing loan statement, property documents (for home loans), ID proof, income proof, and bank account statements are required.",
        },
        {
          question: "How long does the balance transfer process take?",
          answer:
            "The process typically takes 5 to 10 working days after all documents are submitted and verified by the bank.",
        },
        {
          question: "Can I transfer my loan if I have a poor credit score?",
          answer:
            "While a good credit score is preferred, you may still be eligible for a balance transfer depending on the outstanding loan and your repayment history. A lower credit score may result in higher interest rates.",
        },
      ],
    },
    dos: {
      dos: [
        "Check the difference in interest rates before initiating a transfer.",
        "Ensure you understand all processing fees and charges involved in the transfer.",
        "Calculate potential savings to ensure the transfer is beneficial.",
        "Gather all necessary documents, including your existing loan details.",
      ],
      donts: [
        "Don't transfer your loan without reviewing all terms and conditions.",
        "Avoid missing EMIs during the transfer process to prevent penalties.",
        "Don’t transfer a loan if the cost of transfer outweighs the benefits.",
        "Don’t delay in submitting documents as it could lead to delays in the transfer process.",
      ],
    },
    apply: {
      title: "How to Apply for a Balance Transfer Loan",
      steps: [
        "Submit a balance transfer request online or at a branch.",
        "Provide your existing loan details and required documents.",
        "Get loan approval after verification and property valuation (for home loans).",
        "Transfer the outstanding amount to XYZ Bank and enjoy better terms.",
      ],
    },
    featuresBenifits: [
      {
        title: "Lower Interest Rates",
        description:
          "Take advantage of interest rates as low as 8.5%* p.a. and save on your loan repayments.",
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
              d="M5.25 12.75l5.5 5.5L19.75 8.75"
            />
          </svg>
        ),
      },
      {
        title: "Reduced EMIs",
        description:
          "With a balance transfer, you can significantly reduce your monthly EMIs by switching to a lower interest rate.",
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
              d="M12 8v4l3 3m0 0H9m6 0h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        ),
      },
      {
        title: "Flexible Repayment Options",
        description:
          "Choose a repayment tenure that suits your financial plans, ranging from 5 to 20 years, depending on the loan type.",
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v6a1 1 0 01-1 1h-3m-4 4v-6m0 6H9m4 0h3"
            />
          </svg>
        ),
      },
    ],
  },
];

export default loansData;
