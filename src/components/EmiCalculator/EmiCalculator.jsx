"use client"

import React, { useEffect, useState } from 'react'

const EmiCalculator = () => {

    const [principalAmount, setPrincipalAmount] = useState("1,00,000");
    const [principalAmountSlider, setPrincipalAmountSlider] = useState(100000);

    const [interestRate, setInterestRate] = useState(0);

    const [tenure, setTenure] = useState(24);
    const [emi, setEmi] = useState(0)

    const handleChange = (event) => {
        const input = event.target.value;

        // Remove all non-numeric characters
        const sanitizedInput = input.replace(/[^0-9]/g, '');

        // Convert the cleaned number string to an integer
        const number = parseInt(sanitizedInput, 10);

        // Format the number in Indian style
        const formatted = number.toLocaleString('en-IN');

        // Set the formatted value with commas
        setPrincipalAmount(formatted);

        // Update the slider value
        setPrincipalAmountSlider(number || 0);
    };

    useEffect(() => {

        if (principalAmountSlider <= 0 || interestRate <= 0 || tenure <= 0) return

        const P = principalAmountSlider
        const R = interestRate / 12 / 100;
        const N = tenure

        const emi = (P * R * Math.pow(1 + R, N)) /
            (Math.pow(1 + R, N) - 1);

        const splitAmts = emi.toFixed(2).split(".")
        const finalEmi = Number(splitAmts[0]).toLocaleString("en-IN") + `.${splitAmts[1]}`

        setEmi(finalEmi)

    }, [principalAmountSlider, interestRate, tenure])


    return (
        <section className="p-4 py-16 space-y-10 ">
            <div className="flex justify-center">
                <div className=" w-fit text-3xl font-semibold shadow-[0_3px#ff0000]">
                    EMI Calculator:
                </div>
            </div>
            <div className="flex justify-center py-10 ">
                <div className='grid grid-cols-5 rounded-2xl w-full md:w-2/3 bg-red-500/80 '>
                    <div className="flex flex-col space-y-20 text-white rounded-l-2xl p-4 col-span-3">
                        <div>
                            <div className='flex justify-between'>
                                <label for="default-range" class="block mb-2 text-lg font-medium ">Principal Amount</label>
                                <span>
                                    <span className='px-2'>
                                        ₹:
                                    </span>
                                    <input type="text" className='bg-transparent px-2 text-xl w-[200px] text-center' value={principalAmount} onChange={(e) => handleChange(e)} />
                                </span>
                            </div>
                            <input id="default-range" type="range" value={principalAmountSlider} onChange={(e) => handleChange(e)} min={100000} max={300000000} class="w-full h-2 bg-red-800/50 accent-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label for="default-range" class="block mb-2 text-lg font-medium ">Interest Rate</label>
                                <span>
                                    <span className='px-2'>
                                        %:
                                    </span>
                                    <input type="number" className='bg-transparent px-2 text-xl w-[200px] text-center' value={interestRate} onChange={(e) => setInterestRate(e)} />
                                </span>
                            </div>
                            <input id="default-range" type="range" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} min={0} max={20} step={0.01} class="w-full h-2 bg-red-800/50 accent-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <label for="default-range" class="block mb-2 text-lg font-medium ">Tenure (in months)</label>
                                <span>
                                    <span className='px-2'>
                                        Months:
                                    </span>
                                    <input type="number" className='bg-transparent px-2 text-xl w-[200px] text-center' value={tenure} onChange={(e) => setTenure(e)} />
                                </span>
                            </div>
                            <input id="default-range" type="range" value={tenure} onChange={(e) => setTenure(e.target.value)} min={24} max={360} step={1} class="w-full h-2 bg-red-800/50 accent-white rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>


                    </div>
                    <div className='border border-red-500/80 bg-white flex flex-col justify-center items-center rounded-r-2xl col-span-2'>
                        <div className='text-lg font-semibold'>Monthly EMI:</div>
                        <div className='text-2xl font-semibold'>₹ {emi}</div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default EmiCalculator