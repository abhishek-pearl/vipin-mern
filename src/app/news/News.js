"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/news`)
      .then((res) => {
        setData(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="py-14 px-20 flex flex-col space-y-10">
        <div className="w-full text-center flex justify-center">
          <h1 className="text-3xl w-fit text-gray-800  shadow-[0_4px#ff0000]">
            News
          </h1>
        </div>
        <div className="flex flex-wrap gap-6 w-full min-h-[50vh]">
          {data &&
            data.map((item) => {
              return (
                <Link href={`${item.url}`} target="_blank">
                  <div className="w-full max-w-sm bg-white p-6 grid gap-6 shadow-[0_0_2px#ff0000] rounded-md hover:shadow-[0_0_0_3px#ff0000] transition duration-300">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold">{item?.title}</h3>
                    </div>
                    <div className="text-muted-foreground line-clamp-2">
                      {item?.description}
                    </div>
                    <div className="flex justify-end">
                      <div
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_2px#ff0000] hover:text-white hover:bg-red-500 focus:outline-none focus:ring-1 disabled:pointer-events-none transition duration-300"
                      >
                        Know More
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default News;
