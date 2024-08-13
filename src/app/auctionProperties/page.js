import FilterComponent from "@/components/FilterComponent/FilterComponent";
import React from "react";

export default function page() {
  return (
    <div className="p-8 space-y-10 min-h-screen">
      <div className="text-4xl font-semibold text-center">
        Auction Properties
      </div>
      <FilterComponent />
    </div>
  );
}
