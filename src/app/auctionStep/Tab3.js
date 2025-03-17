import { useState } from "react";

const Tab3 = () => {
  const [paymentType, setPaymentType] = useState("full");

  return (
    <div className="min-h-screen mt-2">
      <div className="max-w-6xl h-[60vh] mx-auto bg-white shadow-md rounded-xl p-6 flex items-center space-x-6 border border-gray-200">
        <div className="w-1/2">
          <img
            src="https://img.lovepik.com/photo/40108/0842.jpg_wh860.jpg"
            alt="Payment Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">EMD Pay</h2>
          <div className="mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentType"
                value="full"
                checked={paymentType === "full"}
                onChange={() => setPaymentType("full")}
                className="accent-orange-500"
              />
              <span>Pay in Full</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer mt-2">
              <input
                type="radio"
                name="paymentType"
                value="custom"
                checked={paymentType === "custom"}
                onChange={() => setPaymentType("custom")}
                className="accent-orange-500"
              />
              <span>Custom Payment</span>
            </label>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            Amount to Pay:{" "}
            <span className="text-orange-600 font-bold">₹75,000</span>
          </p>
          <p className="text-sm text-orange-500 mb-4">
            Seventy Five Thousand Rupees only
          </p>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition">
            Pay Now
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab3;
