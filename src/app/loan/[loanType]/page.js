import Image from "next/image";
import React from "react";

export default function page({ params }) {
  const { loanType } = params;
  return (
    <div className=" h-[95vh] grid place-items-center">
      <div class="bg-gray-50">
        <main class="container mx-auto p-6">
          <section class="mb-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 class=" py-2 border-b text-xl font-bold text-gray-800 flex justify-start items-center gap-3">
              <div className=" aspect-square w-12">
                <Image
                  width={200}
                  height={200}
                  alt="image"
                  src={`https://cdn-icons-png.flaticon.com/128/9144/9144383.png`}
                />
              </div>
              {loanType.split("_").join(" ")}
            </h2>
            <h2 class="py-2 text-2xl font-bold text-gray-800">Loan Summary</h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div class="rounded-lg bg-red-100 p-4">
                <h3 class="text-lg font-semibold text-gray-700">Loan Amount</h3>
                <p class="mt-2 text-2xl font-bold text-red-800">$500,000</p>
              </div>

              <div class="rounded-lg bg-red-100 p-4">
                <h3 class="text-lg font-semibold text-gray-700">
                  Interest Rate
                </h3>
                <p class="mt-2 text-2xl font-bold text-red-800">3.75% APR</p>
              </div>

              <div class="rounded-lg bg-red-100 p-4">
                <h3 class="text-lg font-semibold text-gray-700">
                  Monthly Payment
                </h3>
                <p class="mt-2 text-2xl font-bold text-red-800">$2,315</p>
              </div>
            </div>
          </section>

          <section class="mb-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 class="mb-4 text-2xl font-bold text-gray-800">Loan Details</h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 class="text-lg font-semibold text-gray-700">Loan Term</h3>
                <p class="mt-2 text-red-800">30 Years</p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-700">Loan Type</h3>
                <p class="mt-2 text-red-800">Fixed Rate</p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-700">Start Date</h3>
                <p class="mt-2 text-red-800">August 1, 2024</p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-700">End Date</h3>
                <p class="mt-2 text-red-800">July 31, 2054</p>
              </div>
            </div>
          </section>

          <section class="flex justify-center space-x-4">
            <button class="rounded-lg bg-red-800 px-6 py-2 font-bold text-white shadow-lg transition duration-300 hover:bg-red-900">
              Apply Now
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
