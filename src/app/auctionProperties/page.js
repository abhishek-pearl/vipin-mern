"use client";
import AuctionsListing from "@/components/ActionsListing/AuctionsListing";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import { userStore } from "@/store/authStore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

function AuctionPropertiesPage() {
  const { isUserLoggedIn } = userStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const getAuctions = async () => {
    // Extract query parameters
    const searchParamsObject = Object.fromEntries(searchParams.entries());
    const filteredParams = Object.fromEntries(
      Object.entries(searchParamsObject).filter(([_, value]) => value)
    );

    const query = new URLSearchParams(filteredParams).toString();

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${
      isUserLoggedIn ? "auction" : "auction/properties"
    }?page=1&${query}`;
    console.log("Fetching auctions from API:", apiUrl);

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const result = await response.json();
      setData(result?.data || []);
      console.log("Auctions data:", result);
    } catch (error) {
      console.error("Failed to fetch auctions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams) {
      console.log(
        "Search params detected:",
        Object.fromEntries(searchParams.entries())
      );
      getAuctions();
    }
  }, [searchParams, isUserLoggedIn]);

  return (
    <div className="p-8 space-y-10 min-h-screen">
      <div className="flex justify-center">
        <div className="w-fit text-4xl font-semibold shadow-[0_3px#ff0000]">
          Auction Properties
        </div>
      </div>
      <FilterComponent />
      <AuctionsListing loading={loading} data={data} />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search parameters...</div>}>
      <AuctionPropertiesPage />
    </Suspense>
  );
}
