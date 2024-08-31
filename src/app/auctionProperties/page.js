"use client";
import AuctionsListing from "@/components/ActionsListing/AuctionsListing";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import { userStore } from "@/store/authStore";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page({ params, searchParams }) {
  // const searchParams = useSearchParams();
  const { user, error, loading, login, isUserLoggedIn } = userStore();
  const [data, setData] = useState([]);

  async function getAuctions(searchParams) {
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value)
    );

    // Construct the query string from filteredParams
    const query = new URLSearchParams(filteredParams).toString();

    console.log(query, "query"); // This will only include non-empty parameters

    // Construct the full API URL

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${
      isUserLoggedIn ? `auction` : `auction/properties`
    }?page=1?${query}`;
    const response = await axios(apiUrl, {
      withCredentials: true,
    });
    setData(response?.data?.data);
    console.log(response, "response");

    return response?.data;
  }

  useEffect(() => {
    getAuctions(searchParams);
    console.log("params");
  }, [searchParams]);

  return (
    <div className="p-8 space-y-10 min-h-screen">
      <div className="flex justify-center">
        <div className=" w-fit text-4xl font-semibold shadow-[0_3px#ff0000]">
          Auction Properties
        </div>
      </div>
      {/* Filter Component */}
      <FilterComponent />

      {/* Auction Listing */}
      <AuctionsListing data={data} />
      <div></div>
    </div>
  );
}
