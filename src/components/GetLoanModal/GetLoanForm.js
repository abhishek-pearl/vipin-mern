"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from "sonner";

const GetLoanForm = ({ setLoanModal, loanModal }) => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  async function submitLoan(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const typeOfLoan = formData.get("typeOfLoan");
    const loanRequired = formData.get("loanRequired");
    const pincode = formData.get("pincode");
    try {
      setLoading(true);
      const response = await axios.post(
        `https://vipin-backend-0kh7.onrender.com/api/v1/inquiry`,
        { name, email, mobile, typeOfLoan, loanRequired, pincode }
      );
      setLoading(false);
      toast.success("Successfully Submited...");

      console.log(response, "response");
    } catch (error) {
      setLoading(false);
      toast.success("Event has been created");
      console.log(error.message);
    }

    console.log(name, email, mobile, typeOfLoan, loanRequired);
  }
  return (
    <>
      {mounted &&
        loanModal &&
        createPortal(
          <div className="  bg-black/30  fixed top-0 left-0  h-full w-full ">
            <button
              onClick={() => {
                setLoanModal(!loanModal);
              }}
              className="absolute top-3 right-3 z-50 text-black"
            >
              <IoMdClose size={30} />
            </button>

            <div className="w-full grid md:grid-cols-[auto_35rem] h-full">
              <div className="hidden md:block"></div>
              <div
                className={`  flex items-center justify-center h-full  bg-white ${
                  loanModal ? "translate-x-0" : "translate-x-[100%]"
                } transition-all`}
              >
                <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                  <div className="">
                    <img
                      src="https://floatui.com/logo.svg"
                      width={150}
                      className="lg:hidden"
                    />
                    <div className="mt-5 space-y-2">
                      <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                        Enquiry Form
                      </h3>
                    </div>
                  </div>

                  <form action={submitLoan} className="space-y-5">
                    <div>
                      <label className="font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Mobile No.</label>
                      <input
                        name="mobile"
                        type="mobile"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="font-medium">Pincode</label>
                      <input
                        name="pincode"
                        type="pincode"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="loanType" className="font-medium">
                        Loan Type
                      </label>
                      <select
                        id="loanType"
                        name="typeOfLoan"
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      >
                        <option value="">Select a loan type</option>
                        <option value="personal">Personal Loan</option>
                        <option value="auto">Auto Loan</option>
                        <option value="home">Home Loan</option>
                        <option value="student">Student Loan</option>
                        <option value="business">Business Loan</option>
                      </select>
                    </div>
                    <div>
                      <p class="font-medium mb-1 text-gray-500">
                        Loan Required?
                      </p>
                      <div class="flex gap-x-4">
                        <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          <input
                            class="peer hidden"
                            type="radio"
                            name="loanRequired"
                            value="yes"
                            id="radio1"
                            checked
                          />
                          <label
                            class="peer-checked:border-red-400 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                            for="radio1"
                          >
                            {" "}
                          </label>
                          <div class="peer-checked:border-transparent peer-checked:bg-red-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-400 ring-offset-2"></div>
                          <span class="pointer-events-none z-10">Yes</span>
                        </div>
                        <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                          <input
                            class="peer hidden"
                            type="radio"
                            name="loanRequired"
                            value="no"
                            id="radio3"
                            checked
                          />
                          <label
                            class="peer-checked:border-red-400 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                            for="radio3"
                          >
                            {" "}
                          </label>
                          <div class="peer-checked:border-transparent peer-checked:bg-red-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-400 ring-offset-2"></div>
                          <span class="pointer-events-none z-10">No</span>
                        </div>
                      </div>
                    </div>

                    {loading ? (
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150"
                      >
                        Submit
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default GetLoanForm;
