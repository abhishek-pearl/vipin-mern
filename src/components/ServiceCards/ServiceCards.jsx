"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceCards() {
    const cardsData = [
        {
            title: "Home Loan",
            icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
            path: `/loan/Home-Loan`,
        },
        {
            title: " Loan Against Property",
            icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
            path: `/loan/Loan-Against-Property`,
        },
        {
            title: "Auction Properties",
            icon: "https://cdn-icons-png.flaticon.com/128/9144/9144383.png",
            path: `/auctionProperties`,
        },
    ];

    return (
        <section className="p-4 py-10 space-y-10 ">
            <div className="flex justify-center">
                <div className=" w-fit text-3xl font-semibold shadow-[0_3px#ff0000]">
                    Our Services
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
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