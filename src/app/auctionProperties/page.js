async function getAuctions(searchParams) {
  const filteredParams = Object.fromEntries(
    Object.entries(searchParams).filter(([_, value]) => value)
  );

  // Construct the query string from filteredParams
  const query = new URLSearchParams(filteredParams).toString();

  console.log(query, "query"); // This will only include non-empty parameters

  // Construct the full API URL
  const apiUrl = `https://vipin-backend-0kh7.onrender.com/api/v1/auction?page=1?${query}`;
}

import AuctionsListing from "@/components/ActionsListing/AuctionsListing";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import React from "react";

export default async function page({ searchParams }) {
  console.log(searchParams, "searchParams");
  await getAuctions(searchParams);
  return (
    <div className="p-8 space-y-10 min-h-screen">
      <div className="flex justify-center">
        <div className=" w-fit text-4xl font-semibold shadow-[0_3px#ff0000]">
          Auction Properties
        </div>
      </div>
      <FilterComponent />

      {/* Auction Listing */}
      <AuctionsListing />
      <div></div>
    </div>
  );
}
