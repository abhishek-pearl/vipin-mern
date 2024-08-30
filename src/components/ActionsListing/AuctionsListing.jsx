import React from 'react'
import Paginaiton from '../Pagination/Paginaiton';
import Link from 'next/link';

const AuctionsListing = ({ data }) => {
    return (
        <div className=" space-y-5 container mx-auto">
            {data?.map((item) => {
                return (
                    <div className="w-full border bg-white shadow-lg rounded-lg overflow-hidden flex  transition-transform duration-300">
                        <div className="relative w-1/3">
                            <img
                                className="w-full h-full object-cover"
                                src="https://media.istockphoto.com/id/1208718164/photo/sydney-housing-from-aerial-view.jpg?s=612x612&w=0&k=20&c=nIIUt47B428T7kayJNdKbZWOHUd6yOIDpgiT12TNqhI="
                                alt="Agricultural Land"
                            />
                            <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                                Agricultural Land
                            </div>
                            <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                                Residential
                            </div>
                        </div>
                        <div className="w-2/3 p-6 bg-whtie text-red-500 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {/* Debts Recovery Tribunal Auctions for Agricultural Land in
                                    Dindori, Nashik */}{item?.title}
                                </h3>
                                <p className="text-sm mt-2">
                                    All that piece and parcel of the agricultural land bearing
                                    (i) Gat No. 90 (P) ar...
                                </p>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-xl">₹ {Number(item?.reservePrice).toLocaleString("en-IN")}</span>
                                    <div className="flex items-center text-sm">
                                        <span className="mr-2">Auction Starts:</span>
                                        <span className="font-semibold">
                                            {item?.auctionStartTime}
                                            {/* 11-10-2024 01:00 PM */}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-lg text-gray-300">
                                        Auction ID: #{item?.auctionId}
                                    </span>
                                    <Link
                                        href={`/auctionDetails/${item?.auctionId}`}
                                        className="bg-white text-red-500 border-2 border-red-500 hover:ring-4 ring-red-500/30 transition-all px-4 py-2 rounded-lg  transition-colors duration-300">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Paginaiton />
        </div>
    )
}

export default AuctionsListing