"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const News = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState({}); // Store fetched OG images

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/news`)
      .then((res) => {
        setData(res?.data?.result);
      })
      .catch((err) => console.log(err));
  }, []);

  // Fetch OG images
  useEffect(() => {
    if (data) {
      data.forEach((item) => {
        axios
          .get(`https://api.microlink.io/?url=${item.url}`)
          .then((res) => {
            setImages((prev) => ({
              ...prev,
              [item.url]: res.data.data.image.url,
            }));
          })
          .catch(() => {
            setImages((prev) => ({ ...prev, [item.url]: "/default-news.jpg" })); // Fallback image
          });
      });
    }
  }, [data]);

  return (
    <section className="py-14 px-6 md:px-20 flex flex-col space-y-10 min-h-screen">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 border-b-4 border-red-500 pb-2">
          Latest News
        </h1>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data &&
          data.map((item, index) => (
            <Link key={index} href={item.url} target="_blank">
              <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden cursor-pointer">
                {/* OG Image */}
                <img
                  src={images[item.url]}
                  alt={item.title}
                  loading
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item?.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {item?.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex justify-end mt-4">
                    <span className="inline-flex h-9 items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-red-600 transition-all duration-300">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default News;
