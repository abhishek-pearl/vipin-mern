"use client";
import { useState } from "react";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const tabs = [`Info`, `Create Bidder Profile`, `Acknowledge and Pay`];

export default function AuctionSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tabs.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <nav className="flex space-x-6 border-b pb-2">
        {tabs.map((step, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              index === currentStep
                ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
                : "text-gray-600"
            }`}
            onClick={() => setCurrentStep(index)}
          >
            {step}
          </span>
        ))}
      </nav>
      {currentStep === 0 && <Tab1 />}
      {currentStep === 1 && <Tab2 />}
      {currentStep === 2 && <Tab3 />}

      <div className="flex justify-center mt-6">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md disabled:opacity-50"
          onClick={handleNext}
          disabled={currentStep === tabs.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
