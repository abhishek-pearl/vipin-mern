"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { instance } from "@/utils/axiosInterceptor";

export default function page() {
  const [loanModal, setLoanModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const submitLoan = async (data) => {
    try {
      setLoading(true);
      const response = await instance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/enquiry`,
        data
      );
      setLoading(false);
      toast.success("Successfully Submitted...");
      setLoanModal(false);
      console.log(response, "response");
    } catch (error) {
      setLoading(false);
      toast.error("Server is busy. Please try again later.");
      console.log(error.message);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="grid place-items-center py-4">
      <div className="bg-white w-full max-w-lg h-full p-6 rounded-l-lg shadow-lg relative overflow-y-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mt-5">Get Loan</h3>
        </div>
        <form onSubmit={handleSubmit(submitLoan)} className="space-y-5">
          <div>
            <label className="font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-medium">Mobile No.</label>
            <input
              type="tel"
              {...register("mobile", { required: "Mobile number is required" })}
              className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <div>
            <label className="font-medium">Pincode</label>
            <input
              type="text"
              {...register("pincode", { required: "Pincode is required" })}
              className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pincode.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="loanType" className="font-medium">
              Loan Type
            </label>
            <select
              id="loanType"
              {...register("typeOfLoan", {
                required: "Please select a loan type",
              })}
              className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${
                errors.typeOfLoan ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a loan type</option>
              <option value="personal">Personal Loan</option>
              <option value="auto">Auto Loan</option>
              <option value="home">Home Loan</option>
              <option value="student">Student Loan</option>
              <option value="business">Business Loan</option>
            </select>
            {errors.typeOfLoan && (
              <p className="text-red-500 text-sm mt-1">
                {errors.typeOfLoan.message}
              </p>
            )}
          </div>
          {/* <div>
                  <p className="font-medium mb-1 text-gray-500">
                    Loan Requirement Amoutn
                  </p>
                  <div className="flex gap-x-4">
                    <label className="relative flex items-center justify-center w-1/2 bg-gray-50 px-4 py-3 font-medium text-gray-700 rounded-xl">
                      <input
                        type="radio"
                        {...register("loanRequired", {
                          required: "Please select if loan is required",
                        })}
                        value="yes"
                        className="peer hidden"
                      />
                      <div className="peer-checked:border-transparent peer-checked:bg-red-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-400 ring-offset-2"></div>
                      <span className="pointer-events-none z-10">Yes</span>
                    </label>
                    <label className="relative flex items-center justify-center w-1/2 bg-gray-50 px-4 py-3 font-medium text-gray-700 rounded-xl">
                      <input
                        type="radio"
                        {...register("loanRequired", {
                          required: "Please select if loan is required",
                        })}
                        value="no"
                        className="peer hidden"
                      />
                      <div className="peer-checked:border-transparent peer-checked:bg-red-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-red-400 ring-offset-2"></div>
                      <span className="pointer-events-none z-10">No</span>
                    </label>
                  </div>
                  {errors.loanRequired && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.loanRequired.message}
                    </p>
                  )}
                </div> */}
          <div>
            <label className="font-medium">Loan Requirement Amount</label>
            <input
              type="number"
              {...register("loanRequired", {
                required: "Loan Requirement is required",
              })}
              className={`w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-indigo-600 ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.loanRequirement && (
              <p className="text-red-500 text-sm mt-1">
                {errors.loanRequirement.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
