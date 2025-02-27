"use client";

import { instance } from "@/utils/axiosInterceptor";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulating API call
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/forgetPassword`,
        { ...data }
      );
      console.log(data);

      toast.success("Password reset link sent to your email");
    } catch (error) {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Forgot Password
        </h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Enter your email to receive a reset link
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full mt-1 p-3 border outline-none border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}
