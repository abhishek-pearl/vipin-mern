async function getAuctions(searchParams) {
  const filteredParams = Object.fromEntries(
    Object.entries(searchParams).filter(([_, value]) => value)
  );

  // Construct the query string from filteredParams
  const query = new URLSearchParams(filteredParams).toString();

  console.log(query, "query"); // This will only include non-empty parameters

  // Construct the full API URL
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/auction?page=1?${query}`;
  const response = await fetch(apiUrl, {
    cache: "no-cache",
  });
  const result = await response.json();
  console.log(result, "result");
  return result?.data;
}

import AuctionsListing from "@/components/ActionsListing/AuctionsListing";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import React from "react";

export default async function page({ searchParams }) {
  // console.log(searchParams, "searchParams");
  const data = await getAuctions(searchParams);
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
