import React from "react"


const OffersDisplay = ({ data }) => {
    console.log(data);
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full h-[80vh]">

            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                {data?.map((offer, idx) => (
                    <a href={offer?.ad_url}
                    target="_blank"
                        key={idx}
                        className="bg-white p-4 flex justify-center size-full items-center rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <img className="size-full object-cover" src={offer?.secure_url} alt="" />
                        {/* <h3 className="text-lg font-semibold mb-2 text-blue-600">{offer.title}</h3>
                        <p className="text-gray-600 mb-2">{offer.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-500">Use code:</span>
                            <span className="bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded text-sm">{offer.code}</span>
                        </div> */}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default OffersDisplay

