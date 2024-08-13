import FilterComponent from "@/components/FilterComponent/FilterComponent";
import React from "react";

export default function page() {
  return (
    <div className="p-8 space-y-10 min-h-screen">
      <div className="flex justify-center">
        <div className=" w-fit text-4xl font-semibold shadow-[0_3px#ff0000]">
          Auction Properties
        </div>
      </div>
      <FilterComponent />
    </div>
  );
}
