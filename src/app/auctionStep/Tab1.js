import React, { useState } from "react";
import { FaClipboardList, FaMoneyBillWave, FaGavel } from "react-icons/fa";

const Tab1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const tab1Data = [
    {
      icon: <FaClipboardList className="text-orange-500 text-5xl" />,
      title: "Create Profile",
      description:
        "Creating a Profile is the first step toward grabbing your Dream Home! Go to E-Auctions, click 'Create Profile Option,' fill in the details and SAVE. Yipee! You have created your profile.",
    },
    {
      icon: <FaMoneyBillWave className="text-orange-500 text-5xl" />,
      title: "Acknowledge and Pay",
      description:
        "Acknowledging the terms and making the required payment is crucial for participating in the auction.",
    },
    {
      icon: <FaGavel className="text-orange-500 text-5xl" />,
      title: "Bid and Win",
      description:
        "Once you've completed the steps, place your bids and secure your dream property!",
    },
  ];
  return (
    <div className="min-h-[70vh]">
      <h2 className="text-xl font-bold mt-6">Buy Auction Properties</h2>
      <div className="flex justify-between items-start mt-6">
        {tab1Data.map((step, index) => (
          <div
            onClick={() => setCurrentStep(index)}
            key={index}
            className={`text-center w-1/3 cursor-pointer ${
              index === currentStep ? "" : "opacity-50"
            }`}
          >
            <div className="relative inline-block border-2 border-gray-300 rounded-full p-4">
              {step.icon}
            </div>
            <h3
              className={`mt-4 font-semibold ${
                index === currentStep ? "text-orange-500" : "text-gray-800"
              }`}
            >
              {step.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          {tab1Data[currentStep].description}
        </p>
      </div>
    </div>
  );
};

export default Tab1;
