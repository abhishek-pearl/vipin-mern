import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const cardsData = [
    {
      title: "Home Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Home-Loan`,
    },
    {
      title: "Personal loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Personal-Loan`,
    },
    {
      title: "Car loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Car-Loan`,
    },
    {
      title: "Business loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Business-Loan`,
    },
    {
      title: "Loan Against Property",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Loan-Against-Property`,
    },
    {
      title: "Balance Transfer",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Balance-Transfer`,
    },
    {
      title: "ODCC",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/ODCC`,
    },
    {
      title: "Auction Properties",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/auctionProperties`,
    },
  ];

  return (
    <>
      <section className="p-4 py-16 space-y-14 ">
        <div className="flex justify-center">
          <div className=" w-fit text-3xl font-semibold shadow-[0_3px#ff0000]">
            Our Services
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-fit">
            {cardsData.map((item) => {
              return (
                <Link href={`${item.path}`}>
                  <div className="w-full max-w-sm bg-white p-6 grid gap-6 shadow-[0_0_2px#ff0000] rounded-md hover:shadow-[0_0_0_3px#ff0000] transition duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
                        <Image
                          width={200}
                          height={200}
                          alt="image"
                          src={item?.icon}
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{item?.title}</h3>
                    </div>
                    <div className="text-muted-foreground">
                      Get the funds you need for your personal needs. Apply now
                      and get approved in minutes.
                    </div>
                    <div className="flex justify-end">
                      <div
                        href="#"
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
        </div>
      </section>
    </>
  );
};

export default page;
