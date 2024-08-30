async function getSingleAuction(auctionId) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auction/${auctionId}`;
  const response = await fetch(apiUrl);
  const result = await response.json();
  console.log(result?.result, "result");
  return result?.result;
}

const AuctionDetails = async ({ params }) => {
  const { auctionId } = params;
  // console.log(params, "params");
  const data = await getSingleAuction(auctionId);
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {/* Auction Details: Agricultural Land in Dindori, Nashik */}
        {data?.title}
      </h1>

      {/* Image and Key Info Section */}
      <div className="flex flex-wrap md:flex-nowrap mb-8">
        {/* Image Gallery */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
          <img
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src="https://media.istockphoto.com/id/1208718164/photo/sydney-housing-from-aerial-view.jpg?s=612x612&w=0&k=20&c=nIIUt47B428T7kayJNdKbZWOHUd6yOIDpgiT12TNqhI="
            alt="Agricultural Land"
          />
        </div>

        {/* Auction Key Details */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Auction Information
          </h2>
          <p className="text-lg mb-2">
            <span className="font-semibold">Starting Price:</span> ₹{" "}
            {Number(data?.reservePrice).toLocaleString("en-IN")}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Auction Date:</span>{" "}
            {data?.auctionStartTime}
            {/* 11-10-2024 */}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Time:</span> 01:00 PM
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Location:</span> Dindori, Nashik
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Auction ID:</span> #
            {data?.auctionId}
          </p>
          <button className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-500 transition-colors duration-300">
            Register for Auction
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {data?.description}
          {/* This auction is for agricultural land located in Dindori, Nashik. The
          land is ideal for farming and comes with a fertile soil profile,
          making it suitable for a variety of crops. The property is
          well-connected by roads and is in close proximity to essential
          amenities. It is a part of the debts recovery process and is available
          at a starting price of ₹ 36,00,000. */}
        </p>
      </div>

      {/* Property details */}
      <div className=" p-6 rounded-lg shadow ">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Property Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">
                Borrower Name:{" "}
              </span>
              <span className="text-gray-800">
                {data?.borrowerName}
                {/* MR. KASHINATH SADASHIV DHAGE & ORS */}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Asset Category:{" "}
              </span>
              <span className="text-gray-800">Residential</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Property Type:{" "}
              </span>
              <span className="text-gray-800">
                {data?.propertyType}
                {/* Agricultural Land */}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Auction Type:{" "}
              </span>
              <span className="text-gray-800">{data?.auctionType}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">
                Auction Start Time:{" "}
              </span>
              <span className="text-gray-800">{data?.auctionStartTime}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Auction End Date:{" "}
              </span>
              <span className="text-gray-800">{data?.auctionEndTime}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Application Submission Date:{" "}
              </span>
              <span className="text-gray-800">08-10-2024 04:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Deatils */}
      <div className="bg-blue-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Bank Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">Bank Name: </span>
              <span className="text-gray-800">Debts Recovery Tribunal</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Branch Name: </span>
              <span className="text-gray-800">Navi Mumbai</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Service Provider:{" "}
              </span>
              <span className="text-gray-800">Public Auction</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">EMD: </span>
              <span className="text-gray-800">₹ 4,20,000</span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">
                Reserve Price:{" "}
              </span>
              <span className="text-red-500 font-bold">₹ 41,25,000</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Contact Details:{" "}
              </span>
              <span className="text-gray-800">Mob: 8655948054</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Tel: </span>
              <span className="text-gray-800">8655948019</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Auctions Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Related Auctions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Related Auction Cards */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">
              Agricultural Land in Pune
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Starting Price: ₹ 45,00,000
            </p>
            <p className="text-sm text-gray-500">Auction Date: 15-10-2024</p>
            <button className="mt-4 bg-red-500 text-white py-2 w-full rounded-lg hover:bg-red-500 transition-colors duration-300">
              View Details
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">
              Residential Plot in Nashik
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Starting Price: ₹ 25,00,000
            </p>
            <p className="text-sm text-gray-500">Auction Date: 18-10-2024</p>
            <button className="mt-4 bg-red-500 text-white py-2 w-full rounded-lg hover:bg-red-500 transition-colors duration-300">
              View Details
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">
              Commercial Land in Mumbai
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Starting Price: ₹ 1,20,00,000
            </p>
            <p className="text-sm text-gray-500">Auction Date: 20-10-2024</p>
            <button className="mt-4 bg-red-500 text-white py-2 w-full rounded-lg hover:bg-red-500 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
