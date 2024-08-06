import React from "react";

export default function page({ params }) {
  const { loanType } = params;
  return (
    <div className=" h-[95vh] grid place-items-center">
      <div className="uppercase text-5xl font-semibold">{loanType}</div>
    </div>
  );
}
