import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="py-14 px-20 flex flex-col space-y-10">
        <div className="w-full text-center flex justify-center">
          <h1 className="text-3xl w-fit text-gray-800  shadow-[0_4px#ff0000]">
            News
          </h1>
        </div>
        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {Array.from({ length: 7 }).map((item) => {
            return (
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-xs">
                {/* <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a> */}
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <Link href="#">
                    <button class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center  ">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
