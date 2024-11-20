"use client";

import { userStore } from "@/store/authStore";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import { userStore } from "@/store/authStore";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

const AuctionDetails = () => {
  // const { isUserLoggedIn } = userStore();
  const { auctionId } = useParams();
  const [singleAuction, setSingleAuction] = useState(null);
  const router = useRouter();
  const { user, error, login, getUserData, isUserLoggedIn } = userStore();
  async function getSingleAuction(auctionId) {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auction/${auctionId}`;
    const response = await axios.get(apiUrl, {
      withCredentials: true,
    });
    setSingleAuction(response?.data?.result);
  }

  // console.log(params, "params");

  useEffect(() => {
    getSingleAuction(auctionId);
  }, []);

  function getDateComponents(dateString) {
    const date = new Date(dateString);

    // Add leading zero to day and month if necessary
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-indexed, so add 1
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/login");
    } else if (isUserLoggedIn) {
      // router.back();
      console.log(user.user, "isUseLoggedIn");

      // if (!user?.user.isSubscribed) {
      //   router.push("checkout");
      // } else {
      //   router.push("auctionProperties");
      // }
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {/* Auction Details: Agricultural Land in Dindori, Nashik */}
        {singleAuction?.title}
      </h1>

      {/* Image and Key Info Section */}
      <div className="flex flex-wrap md:flex-nowrap mb-8">
        {/* Image Gallery */}
        <div className="w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
          <Image
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src={singleAuction?.banner[0]?.url}
            alt="Agricultural Land"
            width={400}
            height={300}
          />
        </div>

        {/* Auction Key Details */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Auction Information
          </h2>
          <p className="text-lg mb-2">
            <span className="font-semibold">Starting Price:</span> ₹{" "}
            {Number(singleAuction?.reservePrice).toLocaleString("en-IN")}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Auction Date:</span>{" "}
            {getDateComponents(singleAuction?.auctionStartDate)}
            {/* 11-10-2024 */}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Time:</span>
            {singleAuction?.auctionStartTime}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Location:</span>{" "}
            {singleAuction?.city}, {singleAuction?.state}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Auction ID:</span> #
            {singleAuction?.auctionId}
          </p>
          {/* <button className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-500 transition-colors duration-300">
            Register for Auction
          </button> */}
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {singleAuction?.description}
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
                {singleAuction?.borrowerName}
                {/* MR. KASHINATH SADASHIV DHAGE & ORS */}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Asset Category:{" "}
              </span>
              <span className="text-gray-800">{singleAuction?.category}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Property Type:{" "}
              </span>
              <span className="text-gray-800">
                {singleAuction?.propertyType}
                {/* Agricultural Land */}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Auction Type:{" "}
              </span>
              <span className="text-gray-800">
                {singleAuction?.auctionType}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">
                Auction Start Time:{" "}
              </span>
              <span className="text-gray-800">
                {getDateComponents(singleAuction?.auctionStartDate)}{" "}
                {singleAuction?.auctionStartTime}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Auction End Date:{" "}
              </span>
              <span className="text-gray-800">
                {getDateComponents(singleAuction?.auctionEndDate)}{" "}
                {singleAuction?.auctionEndTime}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Application Submission Date:{" "}
              </span>
              <span className="text-gray-800">
                {getDateComponents(singleAuction?.applicationSubmissionDate)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Bank Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">Bank Name: </span>
              <span className="text-gray-800">{singleAuction?.bankName}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Branch Name: </span>
              <span className="text-gray-800">{singleAuction?.branch}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Service Provider:{" "}
              </span>
              <span className="text-gray-800">
                {singleAuction?.serviceProvider}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">EMD: </span>
              <span className="text-gray-800">₹ {singleAuction?.emd}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-700">
                Reserve Price:{" "}
              </span>
              <span className="text-red-500 font-bold">
                ₹ {singleAuction?.reservePrice}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">
                Contact Details:{" "}
              </span>
              <span className="text-gray-800">
                {" "}
                {singleAuction?.contact
                  ? singleAuction?.contact
                  : "+91 XXXXXXXXXX"}
              </span>
            </div>
            {/* <div>
                <span className="font-semibold text-gray-700">Tel: </span>
                <span className="text-gray-800">8655948019</span>
              </div> */}
          </div>
        </div>
      </div>

      {/* download files */}
      <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Download Files
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {singleAuction?.downloads
            ? singleAuction?.downloads?.map((file, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6  rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white relative"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">
                    {file?.original_filename}
                  </h3>
                  <div className="space-x-3">
                    <a
                      target="_blank"
                      href={file.url}
                      download={file?.original_filename}
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-all duration-300"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 bg-blue-600 p-1 rounded-bl-xl">
                    <span className="text-white text-xs font-semibold">
                      File {index + 1}
                    </span>
                  </div>
                </div>
              ))
            : "Please Log-in to View Auction Docs"}
        </div>
        <div className="w-full grid place-items-center py-3">
          <Link
            href="/payRegister"
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-all duration-300"
          >
            {/* <FaDownload className="mr-2" /> */}
            Placing Bid
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetails;
