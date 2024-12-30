"use client";

import { instance } from "@/utils/axiosInterceptor";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServiceCards() {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    instance
      .get(`${process.env.NEXT_PUBLIC_API_URL}/services`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const cardsData = [
  //     {
  //         title: "Home Loan",
  //         icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
  //         path: `/loan/Home-Loan`,
  //         content:
  //             "Get financing for purchasing or constructing your dream home with flexible repayment options.",
  //     },
  //     {
  //         title: "Personal Loan",
  //         icon: "https://cdn-icons-png.flaticon.com/128/5571/5571497.png",
  //         path: `/loan/Personal-Loan`,
  //         content:
  //             "Secure funds for your personal needs, such as medical emergencies or travel, with minimal documentation.",
  //     },
  //     {
  //         title: "Auction Properties",
  //         icon: "https://cdn-icons-png.flaticon.com/128/8857/8857918.png",
  //         path: `/auctionProperties`,
  //         content:
  //             "Explore a wide range of properties available for auction and seize the best investment opportunities.",
  //     },
  // ];

  return (
    <section className="p-4 py-10 space-y-10 ">
      <div className="flex justify-center">
        <div className=" w-fit text-3xl font-semibold shadow-[0_3px#ff0000]">
          Our Services
        </div>
      </div>
      <div className="flex  flex-wrap gap-6 container mx-auto justify-center">
        {
          [{
            title: "Auction Properties",
            icon: "https://cdn-icons-png.flaticon.com/128/8857/8857918.png",
            path: `/auctionProperties`,
            content:
              "Explore a wide range of properties available for auction and seize the best investment opportunities.",
          }].map(item => {
            return <Link href={`${item?.path}`}>
              <div className="w-full max-w-sm bg-white min-w-96 min-h-64 p-6 grid gap-6 shadow-[0_0_2px#ff0000] rounded-md hover:shadow-[0_0_0_3px#ff0000] transition duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                    <Image
                      width={200}
                      height={200}
                      alt="image"
                      src={item?.icon}
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {item?.title}
                  </h3>
                </div>
                <div className="text-muted-foreground">
                  {item?.content}
                </div>
                <div className="flex justify-end">
                  <div
                    href=""
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_1px#ff0000] hover:text-white hover:bg-red-500 focus:outline-none focus:ring-1 disabled:pointer-events-none transition duration-300"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </Link>
          })
        }
        {data &&
          data?.slice(0, 5)?.map((item) => {
            return (
              <Link href={`/services/${item?._id}`}>
                <div className="w-full max-w-sm bg-white min-w-96 min-h-64 p-6 grid gap-6 shadow-[0_0_2px#ff0000] rounded-md hover:shadow-[0_0_0_3px#ff0000] transition duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                      <Image
                        width={200}
                        height={200}
                        alt="image"
                        src={item?.serviceIcon}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">
                      {item?.serviceTitle}
                    </h3>
                  </div>
                  <div className="text-muted-foreground">
                    {item?.description}
                  </div>
                  <div className="flex justify-end">
                    <div
                      href=""
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_1px#ff0000] hover:text-white hover:bg-red-500 focus:outline-none focus:ring-1 disabled:pointer-events-none transition duration-300"
                    >
                      Know More
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

      </div>
      <div className="flex justify-center">
        <Link
          href="/services"
          className="w-fit text-lg font-semibold text-red-500 hover:text-red-700"
        >
          View More...
        </Link>
      </div>
    </section>
  );
}
