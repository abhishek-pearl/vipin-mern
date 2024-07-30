"use client";

import LoanForm from "@/components/LoanForm/LoanForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const cardsData = [
    {
      title: "Home Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
    },
    {
      title: " Loan Against Property",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
    },
    {
      title: "  Auction Properties",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
    },
  ];

  return (
    <>
      <LoanForm />

      <section
        style={{
          backgroundImage: "url(/banner.jpeg)",
          backgroundSize: "cover",
        }}
        className="h-[500px]"
      ></section>
      <section className="p-4 ">
        <div className="translate-y-[-5rem]  flex gap-6 justify-center">
          {cardsData.map((item) => {
            return (
              <div className="w-full max-w-sm bg-white p-6 grid gap-6 border rounded-md">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                    <Image
                      width={200}
                      height={200}
                      alt="image"
                      src={item?.icon}
                    />
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg> */}
                  </div>
                  <h3 className="text-xl font-semibold">{item?.title}</h3>
                </div>
                <div className="text-muted-foreground">
                  Get the funds you need for your personal needs. Apply now and
                  get approved in minutes.
                </div>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_1px#ff0000] hover:text-white hover:bg-red-500 focus:outline-none focus:ring-1 disabled:pointer-events-none transition duration-300"
                  >
                    Know More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
