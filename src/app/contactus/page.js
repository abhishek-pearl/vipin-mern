"use client";

import { instance } from "@/utils/axiosInterceptor";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState(null);
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
      toast.success("Submitted successfully!");
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Server is busy. Please try again later.");
    }
  };

  const getActiveContact = async () => {
    const { data } = await instance.get("/adminContact/single");
    console.log(data, "data");
    setContactData(data?.data);
  };

  useEffect(() => {
    getActiveContact();
  }, []);

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 relative inline-block">
            Contact Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform translate-y-1"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
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
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  {...register("mobile", {
                    required: "Mobile number is required",
                  })}
                  id="mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
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
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                  placeholder="Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-800 mb-4">
              Details:
            </div>
            <div className="h-48 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56002.12983529824!2d77.24902967942033!3d28.68566440595361!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740145028561!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="divide-y-2 space-y-4">
              {contactData?.map((item, index) => (
                <div key={index} className="pt-4">
                  <div className=" font-semibold text-gray-800">
                    Company name: {item?.name}
                  </div>
                  <div className="text-gray-600">Phone: {item?.phone}</div>
                  <div className="text-gray-600">E-Mail: {item?.email}</div>
                  <div className="text-gray-600">Address: {item?.address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
