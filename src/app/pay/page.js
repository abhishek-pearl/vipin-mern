import News from "./News";
import { FaRupeeSign } from "react-icons/fa";

const page = () => {
  return (
    // <News />
    <div className="h-[90vh] grid place-items-center p-10">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Business Growth Consultancy
          </h2>
          <p className="text-gray-600 mt-2">
            Get expert advice and strategies to accelerate the growth of your
            business. Our team provides tailored solutions to meet your specific
            needs.
          </p>
          <p className="text-lg font-semibold text-gray-700 mt-4">
            Price: <FaRupeeSign />.150
          </p>
          <button
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
            // onClick={() => alert("Payment process coming soon!")}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
