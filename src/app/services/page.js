import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const cardsData = [
    {
      title: "Home Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
      path: `/loan/Home-Loan`,
      content:
        "Get financing for purchasing or constructing your dream home with flexible repayment options.",
    },
    {
      title: "Personal Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/5571/5571497.png",
      path: `/loan/Personal-Loan`,
      content:
        "Secure funds for your personal needs, such as medical emergencies or travel, with minimal documentation.",
    },
    {
      title: "Car Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/11794/11794652.png",
      path: `/loan/Car-Loan`,
      content:
        "Drive your dream car home with a low-interest car loan and flexible EMIs that suit your budget.",
    },
    {
      title: "Business Loan",
      icon: "https://cdn-icons-png.flaticon.com/128/3146/3146444.png",
      path: `/loan/Business-Loan`,
      content:
        "Grow your business with a hassle-free loan, designed to meet your business needs and expansion plans.",
    },
    {
      title: "Loan Against Property",
      icon: "https://cdn-icons-png.flaticon.com/128/1907/1907649.png",
      path: `/loan/Loan-Against-Property`,
      content:
        "Leverage the value of your property to secure a loan for personal or business needs at competitive rates.",
    },
    {
      title: "ODCC",
      icon: "https://cdn-icons-png.flaticon.com/128/839/839860.png",
      path: `/loan/ODCC`,
      content:
        "Opt for Overdraft Cash Credit to manage your working capital needs with ease and flexibility.",
    },
    {
      title: "Balance Transfer",
      icon: "https://cdn-icons-png.flaticon.com/128/11539/11539636.png",
      path: `/loan/Balance-Transfer`,
      content:
        "Balance Transfer refers to transferring of outstanding Home Loan Balance from one financial institution to another,",
    },
    {
      title: "Auction Properties",
      icon: "https://cdn-icons-png.flaticon.com/128/8857/8857918.png",
      path: `/auctionProperties`,
      content:
        "Explore a wide range of properties available for auction and seize the best investment opportunities.",
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
                    <div className="text-muted-foreground">{item?.content}</div>
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
