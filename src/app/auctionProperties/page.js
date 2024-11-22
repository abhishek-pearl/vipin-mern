"use client";
import AuctionsListing from "@/components/ActionsListing/AuctionsListing";
import FilterComponent from "@/components/FilterComponent/FilterComponent";
import { userStore } from "@/store/authStore";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

export default function page({ params, searchParams }) {
  const { user, error, login, getUserData, isUserLoggedIn } = userStore();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   if (!isUserLoggedIn) {
  //     router.push("login");
  //   } else if (isUserLoggedIn) {
  //     console.log(user.user, "isUseLoggedIn");

  //     if (!user?.user.isSubscribed) {
  //       router.push("checkout");
  //     } else {
  //       router.push("auctionProperties");
  //     }
  //   }
  // }, [user]);

  async function getAuctions(searchParamS) {
    const filteredParams = Object.fromEntries(
      Object.entries(searchParamS).filter(([_, value]) => value)
    );

    // Construct the query string from filteredParams
    const query = new URLSearchParams(filteredParams).toString();

    console.log(query, "query"); // This will only include non-empty parameters

    // Construct the full API URL
    setLoading(true);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${
      isUserLoggedIn ? `auction` : `auction/properties`
    }?page=1&${query}`;
    console.log(apiUrl, "apiUrl");
    const response = await axios.get(apiUrl, {
      withCredentials: true,
    });
    setLoading(false);
    setData(response?.data?.data);
    console.log(response, "response");

    return response?.data;
  }

  useEffect(() => {
    getAuctions(searchParams);
    console.log("params");
  }, [searchParams, isUserLoggedIn]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="p-8 space-y-10 min-h-screen">
        <div className="flex justify-center">
          <div className=" w-fit text-4xl font-semibold  shadow-[0_3px#ff0000]">
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
