"use client";

import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        data
      );
      setLoading(false);
      toast.success("Sumbitted...");
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Server is Busy...");
      setLoading(false);
    }
  };

  return (
    <section className="py-14 px-20 flex flex-col space-y-10">
      <div className="w-full text-center flex justify-center">
        <h1 className="text-3xl w-fit text-gray-800 shadow-[0_4px#ff0000]">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-row gap-6 flex-wrap justify-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Full Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                {...register("email", { required: "Email is required" })}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
              />
              {errors.eamil && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Mobille
              </label>
              <input
                type="text"
                {...register("mobile", {
                  required: "Mobile number is required",
                })}
                id="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Mobile"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                rows={5}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
                placeholder="Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            {loading ? (
              <button
                disabled={loading}
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Loading...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            )} 
          </form>
        </div>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 flex flex-col gap-2">
          <div className="text-2xl">Details:
          <div className="h-40 ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3441.9963160787693!2d78.08464042547044!3d30.37946250262029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s188%2C%20Rajpur%20Road%20In%20between%20Sai%20Baba%20Temple%20and%20Sakya%20Centre%20Buddhist%20Monastery%2C%20Uttarakhand%20248001%2C%20India!5e0!3m2!1sen!2sin!4v1729160174790!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>

          <div className="flex flex-col gap-2 justify-center h-full text-lg">
            <div>
              <span className="font-semibold">Company name: </span>
              sdlk
            </div>
            <div>
              <span className="font-semibold">Phone: </span>
              +91 9999999999
            </div>
            <div>
              <span className="font-semibold">E-Mail: </span> sdlk@sdlk.com
            </div>
            <div>
              <span className="font-semibold">Address: </span> 188, Rajpur Road
              In between Sai Baba Temple and Sakya Centre Buddhist Monastry,
              Uttarakhand 248001, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
