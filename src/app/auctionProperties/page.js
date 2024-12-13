"use client";
import AuctionsListing from "@/components/ActionsListing/AuctionsListing";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import { userStore } from "@/store/authStore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function Page() {
  const { user, error, login, getUserData, isUserLoggedIn } = userStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Wrapping searchParams usage inside Suspense
  const SearchParamsWrapper = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
      getAuctions(Object.fromEntries(searchParams.entries()));
    }, [searchParams, isUserLoggedIn]);

    async function getAuctions(searchParamS) {
      const filteredParams = Object.fromEntries(
        Object.entries(searchParamS).filter(([_, value]) => value)
      );

      const query = new URLSearchParams(filteredParams).toString();

      setLoading(true);
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${
        isUserLoggedIn ? `auction` : `auction/properties`
      }?page=1&${query}`;
      console.log(apiUrl, "apiUrl");

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const result = await response.json();
      setLoading(false);
      setData(result?.data);
      console.log(result, "response");

      return result?.data;
    }

    return null; // This component doesn't render anything
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper />
      <div className="p-8 space-y-10 min-h-screen">
        <div className="flex justify-center">
          <div className="w-fit text-4xl font-semibold shadow-[0_3px#ff0000]">
            Auction Properties
          </div>
        </div>
        {/* Filter Component */}
        <FilterComponent />

        {/* Auction Listing */}
        <AuctionsListing loading={loading} data={data} />
        <div></div>
      </div>
    </Suspense>
  );
}
